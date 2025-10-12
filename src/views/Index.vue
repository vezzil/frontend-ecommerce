<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    
    <!-- Hero Section -->
    <section class="relative h-[600px] flex items-center justify-center overflow-hidden">
      <div class="absolute inset-0">
        <img
          :src="heroImage"
          alt="Luxury Perfumes"
          class="w-full h-full object-cover"
        />
        <div class="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>
      
      <div class="relative z-10 container mx-auto px-4">
        <div class="max-w-2xl space-y-6">
          <h1 class="text-5xl md:text-7xl font-bold leading-tight">
            Discover Your
            <span class="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Signature Scent
            </span>
          </h1>
          <p class="text-lg text-muted-foreground max-w-xl">
            Explore our curated collection of luxury fragrances, crafted with the finest ingredients
            from around the world.
          </p>
          <div class="flex gap-4">
            <router-link to="/products">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Shop Collection
              </button>
            </router-link>
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Features -->
    <section class="py-12 border-y border-border bg-card/30">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-3 gap-8">
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Sparkles class="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 class="font-semibold">Premium Quality</h3>
              <p class="text-sm text-muted-foreground">Authentic luxury fragrances</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Truck class="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 class="font-semibold">Free Shipping</h3>
              <p class="text-sm text-muted-foreground">On orders over $100</p>
            </div>
          </div>
          <div class="flex items-center gap-4">
            <div class="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield class="h-6 w-6 text-primary" />
            </div>
            <div>
              <h3 class="font-semibold">Secure Payment</h3>
              <p class="text-sm text-muted-foreground">100% secure transactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Featured Products -->
    <section class="py-20">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">Featured Collection</h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">
            Handpicked selection of our most popular fragrances, loved by perfume enthusiasts worldwide
          </p>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <ProductCard 
            v-for="product in featuredProducts" 
            :key="product.id" 
            :product="product"
          />
        </div>

        <div class="text-center mt-12">
          <router-link to="/products">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              View All Products
            </button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
      <div class="container mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-4">Stay in the Scent</h2>
        <p class="text-muted-foreground mb-8 max-w-xl mx-auto">
          Subscribe to receive exclusive offers, new arrivals, and fragrance tips
        </p>
        <div class="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            v-model="email"
            placeholder="Enter your email"
            class="flex-1 h-12 px-4 rounded-md border border-border bg-background"
          />
          <button 
            @click="subscribe"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Subscribe
          </button>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="border-t border-border py-12">
      <div class="container mx-auto px-4">
        <div class="grid md:grid-cols-4 gap-8">
          <div>
            <h3 class="font-bold text-xl mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Essence
            </h3>
            <p class="text-sm text-muted-foreground">
              Your destination for luxury fragrances
            </p>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Shop</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><router-link to="/products" class="hover:text-foreground transition-colors">All Products</router-link></li>
              <li><router-link to="/products" class="hover:text-foreground transition-colors">New Arrivals</router-link></li>
              <li><router-link to="/products" class="hover:text-foreground transition-colors">Best Sellers</router-link></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Support</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" class="hover:text-foreground transition-colors">Contact Us</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Shipping Info</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Returns</a></li>
            </ul>
          </div>
          <div>
            <h4 class="font-semibold mb-4">Company</h4>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" class="hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import ProductCard from '@/components/ProductCard.vue';
import { Sparkles, Truck, Shield } from 'lucide-vue-next';
import heroImage from '@/assets/hero-perfume.jpg';
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';
import perfume3 from '@/assets/perfume-3.jpg';
import perfume4 from '@/assets/perfume-4.jpg';

export default {
  name: 'HomeView',
  components: {
    Navbar,
    ProductCard,
    Sparkles,
    Truck,
    Shield
  },
  setup() {
    const email = ref('');
    
    const featuredProducts = [
      {
        id: "1",
        name: "Velvet Orchid",
        price: 129.99,
        image: perfume1,
        category: "Floral",
      },
      {
        id: "2",
        name: "Rose Lumière",
        price: 149.99,
        image: perfume2,
        category: "Rose",
      },
      {
        id: "3",
        name: "Noir Intense",
        price: 159.99,
        image: perfume3,
        category: "Woody",
      },
      {
        id: "4",
        name: "Golden Aura",
        price: 139.99,
        image: perfume4,
        category: "Oriental",
      },
    ];

    const subscribe = () => {
      if (email.value) {
        console.log('Subscribed with email:', email.value);
        email.value = '';
        // Add your subscription logic here
      }
    };

    return {
      heroImage,
      featuredProducts,
      email,
      subscribe
    };
  }
};
</script>
