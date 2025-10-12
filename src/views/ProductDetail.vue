<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    
    <div class="container mx-auto px-4 py-8">
      <nav class="mb-6 text-sm text-muted-foreground">
        <router-link to="/" class="hover:text-foreground">Home</router-link>
        <span class="mx-2">/</span>
        <router-link to="/products" class="hover:text-foreground">Products</router-link>
        <span class="mx-2">/</span>
        <span class="text-foreground">{{ product.name }}</span>
      </nav>

      <div class="grid md:grid-cols-2 gap-12">
        <!-- Product Image -->
        <div class="space-y-4">
          <div class="aspect-square bg-muted rounded-lg overflow-hidden">
            <img
              :src="product.image"
              :alt="product.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="grid grid-cols-4 gap-2">
            <div 
              v-for="i in 4" 
              :key="i" 
              class="aspect-square bg-muted rounded-md overflow-hidden border-2 border-transparent hover:border-primary cursor-pointer transition-colors"
            >
              <img :src="product.image" alt="" class="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        <!-- Product Info -->
        <div class="space-y-6">
          <div>
            <p class="text-sm text-muted-foreground uppercase tracking-wider mb-2">
              {{ product.category }}
            </p>
            <h1 class="text-4xl font-bold mb-4">{{ product.name }}</h1>
            <div class="flex items-center gap-4 mb-4">
              <div class="flex items-center gap-1">
                <Star
                  v-for="star in 5"
                  :key="star"
                  class="h-4 w-4 fill-accent text-accent"
                />
              </div>
              <span class="text-sm text-muted-foreground">
                {{ product.rating }} ({{ product.reviews }} reviews)
              </span>
            </div>
            <p class="text-3xl font-bold text-primary">${{ product.price }}</p>
          </div>

          <p class="text-muted-foreground leading-relaxed">
            {{ product.description }}
          </p>

          <div class="space-y-4">
            <div>
              <h3 class="font-semibold mb-2">Fragrance Notes</h3>
              <div class="space-y-2">
                <div class="flex gap-2">
                  <span class="text-sm text-muted-foreground min-w-[60px]">Top:</span>
                  <span class="text-sm">{{ product.notes.top.join(", ") }}</span>
                </div>
                <div class="flex gap-2">
                  <span class="text-sm text-muted-foreground min-w-[60px]">Heart:</span>
                  <span class="text-sm">{{ product.notes.heart.join(", ") }}</span>
                </div>
                <div class="flex gap-2">
                  <span class="text-sm text-muted-foreground min-w-[60px]">Base:</span>
                  <span class="text-sm">{{ product.notes.base.join(", ") }}</span>
                </div>
              </div>
            </div>

            <div>
              <h3 class="font-semibold mb-2">Size</h3>
              <div class="flex gap-2">
                <button
                  v-for="size in ['50ml', '100ml', '150ml']"
                  :key="size"
                  @click="selectedSize = size"
                  :class="[
                    'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                    'h-10 px-4 py-2',
                    selectedSize === size 
                      ? 'bg-secondary text-secondary-foreground hover:bg-secondary/80' 
                      : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'
                  ]"
                >
                  {{ size }}
                </button>
              </div>
            </div>

            <div>
              <h3 class="font-semibold mb-2">Quantity</h3>
              <div class="flex items-center gap-3">
                <button
                  @click="quantity = Math.max(1, quantity - 1)"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                >
                  -
                </button>
                <span class="w-12 text-center font-semibold">{{ quantity }}</span>
                <button
                  @click="quantity++"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 w-10"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <div class="flex gap-3">
            <button 
              @click="addToCart"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90 flex-1"
            >
              <ShoppingCart class="mr-2 h-5 w-5" />
              Add to Cart
            </button>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              <Heart class="h-5 w-5" />
            </button>
          </div>

          <div class="border-t border-border pt-6 space-y-2 text-sm text-muted-foreground">
            <p>✓ Free shipping on orders over $100</p>
            <p>✓ 30-day return policy</p>
            <p>✓ Authentic products guaranteed</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import { ShoppingCart, Heart, Star } from 'lucide-vue-next';
import perfume1 from '@/assets/perfume-1.jpg';

export default {
  name: 'ProductDetail',
  components: {
    Navbar,
    ShoppingCart,
    Heart,
    Star
  },
  setup() {
    const route = useRoute();
    const quantity = ref(1);
    const selectedSize = ref('100ml');
    
    // Mock product data
    const product = {
      id: route.params.id || "1",
      name: "Velvet Orchid",
      price: 129.99,
      image: perfume1,
      category: "Floral",
      description: "A luxurious floral fragrance with notes of black orchid, velvet moss, and sandalwood. This sophisticated scent captures elegance and mystery in every spray.",
      notes: {
        top: ["Bergamot", "Pink Pepper", "Black Currant"],
        heart: ["Black Orchid", "Rose", "Jasmine"],
        base: ["Patchouli", "Sandalwood", "Vanilla"],
      },
      size: "100ml",
      rating: 4.8,
      reviews: 124,
    };

    const addToCart = () => {
      console.log('Added to cart:', {
        ...product,
        quantity: quantity.value,
        size: selectedSize.value
      });
      // Add to cart logic here
    };

    return {
      product,
      quantity,
      selectedSize,
      addToCart
    };
  }
};
</script>
