<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    
    <div class="container mx-auto px-4 py-8">
      <div class="mb-8">
        <h1 class="text-4xl font-bold mb-2">Our Collection</h1>
        <p class="text-muted-foreground">Discover your perfect fragrance</p>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <!-- Filters Sidebar -->
        <aside class="lg:w-64 space-y-6">
          <div class="bg-card rounded-lg p-6 border border-border">
            <h3 class="font-semibold mb-4">Categories</h3>
            <div class="space-y-2">
              <button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :class="[
                  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 w-full justify-start capitalize',
                  selectedCategory === category 
                    ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' 
                    : 'hover:bg-accent hover:text-accent-foreground'
                ]"
              >
                {{ category }}
              </button>
            </div>
          </div>

          <div class="bg-card rounded-lg p-6 border border-border">
            <h3 class="font-semibold mb-4">Price Range</h3>
            <input 
              type="range" 
              v-model="priceRange"
              :min="0" 
              :max="200" 
              step="10"
              class="w-full mb-4"
            />
            <div class="flex justify-between text-sm text-muted-foreground">
              <span>${{ priceRange[0] }}</span>
              <span>${{ priceRange[1] }}</span>
            </div>
          </div>

          <div class="bg-card rounded-lg p-6 border border-border">
            <h3 class="font-semibold mb-4">Filter By</h3>
            <div class="space-y-3">
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="filters.newArrivals"
                  class="rounded border-border" 
                />
                <span class="text-sm">New Arrivals</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="filters.bestSellers"
                  class="rounded border-border" 
                />
                <span class="text-sm">Best Sellers</span>
              </label>
              <label class="flex items-center gap-2 cursor-pointer">
                <input 
                  type="checkbox" 
                  v-model="filters.onSale"
                  class="rounded border-border" 
                />
                <span class="text-sm">On Sale</span>
              </label>
            </div>
          </div>
        </aside>

        <!-- Products Grid -->
        <div class="flex-1">
          <div class="flex items-center justify-between mb-6">
            <p class="text-muted-foreground">{{ filteredProducts.length }} products found</p>
            <select 
              v-model="sortBy"
              class="h-10 px-4 rounded-md border border-border bg-background"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard 
              v-for="product in filteredAndSortedProducts" 
              :key="product.id" 
              :product="product"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Navbar from '@/components/Navbar.vue';
import ProductCard from '@/components/ProductCard.vue';
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';
import perfume3 from '@/assets/perfume-3.jpg';
import perfume4 from '@/assets/perfume-4.jpg';

export default {
  name: 'Products',
  components: {
    Navbar,
    ProductCard
  },
  setup() {
    const priceRange = ref([0, 200]);
    const selectedCategory = ref('all');
    const sortBy = ref('featured');
    
    const filters = ref({
      newArrivals: false,
      bestSellers: false,
      onSale: false
    });

    const categories = ["all", "floral", "woody", "oriental", "fresh", "citrus"];

    const products = [
      { id: "1", name: "Velvet Orchid", price: 129.99, image: perfume1, category: "Floral" },
      { id: "2", name: "Rose Lumière", price: 149.99, image: perfume2, category: "Rose" },
      { id: "3", name: "Noir Intense", price: 159.99, image: perfume3, category: "Woody" },
      { id: "4", name: "Golden Aura", price: 139.99, image: perfume4, category: "Oriental" },
      { id: "5", name: "Midnight Oud", price: 179.99, image: perfume1, category: "Woody" },
      { id: "6", name: "Citrus Breeze", price: 99.99, image: perfume2, category: "Fresh" },
      { id: "7", name: "Amber Nights", price: 169.99, image: perfume3, category: "Oriental" },
      { id: "8", name: "Jasmine Dream", price: 119.99, image: perfume4, category: "Floral" },
    ];

    const filteredProducts = computed(() => {
      return products.filter(product => {
        // Filter by category
        if (selectedCategory.value !== 'all' && 
            product.category.toLowerCase() !== selectedCategory.value) {
          return false;
        }
        
        // Filter by price range
        if (product.price < priceRange.value[0] || product.price > priceRange.value[1]) {
          return false;
        }
        
        // Apply additional filters if any are selected
        if (Object.values(filters.value).some(Boolean)) {
          // Add your filter logic here based on the filters object
          // This is a placeholder for actual filter implementation
          return true;
        }
        
        return true;
      });
    });

    const filteredAndSortedProducts = computed(() => {
      const sorted = [...filteredProducts.value];
      
      switch (sortBy.value) {
        case 'price-asc':
          return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
          return sorted.sort((a, b) => b.price - a.price);
        case 'newest':
          // Assuming newer products have higher IDs
          return sorted.sort((a, b) => b.id - a.id);
        case 'featured':
        default:
          return sorted;
      }
    });

    return {
      priceRange,
      selectedCategory,
      sortBy,
      filters,
      categories,
      filteredProducts,
      filteredAndSortedProducts
    };
  }
};
</script>
