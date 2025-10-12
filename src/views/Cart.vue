<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Shopping Cart</h1>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Cart Items -->
        <div class="lg:col-span-2 space-y-4">
          <div 
            v-for="item in cartItems" 
            :key="item.id" 
            class="bg-card rounded-lg p-4 border border-border flex gap-4"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="w-24 h-24 object-cover rounded-md"
            />
            <div class="flex-1">
              <h3 class="font-semibold mb-1">{{ item.name }}</h3>
              <p class="text-sm text-muted-foreground mb-2">100ml</p>
              <p class="font-bold text-primary">${{ item.price.toFixed(2) }}</p>
            </div>
            <div class="flex flex-col items-end justify-between">
              <button 
                @click="removeItem(item.id)"
                class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 text-destructive"
              >
                <Trash2 class="h-4 w-4" />
              </button>
              <div class="flex items-center gap-2">
                <button 
                  @click="updateQuantity(item.id, item.quantity - 1)"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8"
                >
                  -
                </button>
                <span class="w-8 text-center">{{ item.quantity }}</span>
                <button 
                  @click="updateQuantity(item.id, item.quantity + 1)"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 w-8"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          
          <div v-if="cartItems.length === 0" class="text-center py-12">
            <p class="text-muted-foreground mb-4">Your cart is empty</p>
            <router-link to="/products">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90">
                Continue Shopping
              </button>
            </router-link>
          </div>
        </div>

        <!-- Order Summary -->
        <div v-if="cartItems.length > 0" class="lg:col-span-1">
          <div class="bg-card rounded-lg p-6 border border-border sticky top-24">
            <h2 class="text-xl font-bold mb-6">Order Summary</h2>
            <div class="space-y-4 mb-6">
              <div class="flex justify-between">
                <span class="text-muted-foreground">Subtotal</span>
                <span class="font-semibold">${{ subtotal.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-muted-foreground">Shipping</span>
                <span class="font-semibold text-primary">Free</span>
              </div>
              <div class="border-t border-border pt-4 flex justify-between text-lg">
                <span class="font-bold">Total</span>
                <span class="font-bold text-primary">${{ total.toFixed(2) }}</span>
              </div>
            </div>
            <router-link to="/checkout">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 w-full bg-primary text-primary-foreground hover:bg-primary/90 mb-3">
                Proceed to Checkout
              </button>
            </router-link>
            <router-link to="/products">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 w-full border border-input bg-background hover:bg-accent hover:text-accent-foreground">
                Continue Shopping
              </button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Navbar from '@/components/Navbar.vue';
import { Trash2 } from 'lucide-vue-next';
import perfume1 from '@/assets/perfume-1.jpg';
import perfume2 from '@/assets/perfume-2.jpg';

export default {
  name: 'Cart',
  components: {
    Navbar,
    Trash2
  },
  setup() {
    const cartItems = ref([
      { id: "1", name: "Velvet Orchid", price: 129.99, quantity: 1, image: perfume1 },
      { id: "2", name: "Rose Lumière", price: 149.99, quantity: 2, image: perfume2 },
    ]);

    const subtotal = computed(() => 
      cartItems.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );
    
    const shipping = 0;
    const total = computed(() => subtotal.value + shipping);

    const updateQuantity = (id, newQuantity) => {
      if (newQuantity < 1) return;
      const item = cartItems.value.find(item => item.id === id);
      if (item) {
        item.quantity = newQuantity;
      }
    };

    const removeItem = (id) => {
      cartItems.value = cartItems.value.filter(item => item.id !== id);
    };

    return {
      cartItems,
      subtotal,
      shipping,
      total,
      updateQuantity,
      removeItem
    };
  }
};
</script>
