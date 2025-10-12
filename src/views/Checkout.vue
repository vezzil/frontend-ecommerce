<template>
  <div class="min-h-screen bg-background">
    <Navbar />
    
    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">Checkout</h1>

      <div class="grid lg:grid-cols-3 gap-8">
        <!-- Checkout Form -->
        <div class="lg:col-span-2 space-y-6">
          <!-- Shipping Information -->
          <div class="bg-card rounded-lg p-6 border border-border">
            <h2 class="text-xl font-bold mb-6">Shipping Information</h2>
            <form @submit.prevent="handleSubmit" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label for="firstName" class="block text-sm font-medium leading-none">First Name</label>
                  <input 
                    id="firstName" 
                    v-model="formData.firstName"
                    type="text" 
                    required 
                    class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  />
                </div>
                <div class="space-y-2">
                  <label for="lastName" class="block text-sm font-medium leading-none">Last Name</label>
                  <input 
                    id="lastName" 
                    v-model="formData.lastName"
                    type="text" 
                    required 
                    class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label for="email" class="block text-sm font-medium leading-none">Email</label>
                <input 
                  id="email" 
                  v-model="formData.email"
                  type="email" 
                  required 
                  class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                />
              </div>
              <div class="space-y-2">
                <label for="address" class="block text-sm font-medium leading-none">Address</label>
                <input 
                  id="address" 
                  v-model="formData.address"
                  required 
                  class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                />
              </div>
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label for="city" class="block text-sm font-medium leading-none">City</label>
                  <input 
                    id="city" 
                    v-model="formData.city"
                    required 
                    class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  />
                </div>
                <div class="space-y-2">
                  <label for="zip" class="block text-sm font-medium leading-none">ZIP Code</label>
                  <input 
                    id="zip" 
                    v-model="formData.zip"
                    required 
                    class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label for="country" class="block text-sm font-medium leading-none">Country</label>
                <select 
                  id="country" 
                  v-model="formData.country"
                  class="w-full h-10 px-3 rounded-md border border-border bg-background"
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>United Kingdom</option>
                </select>
              </div>
            </form>
          </div>

          <!-- Payment Information -->
          <div class="bg-card rounded-lg p-6 border border-border">
            <h2 class="text-xl font-bold mb-6 flex items-center gap-2">
              <CreditCard class="h-5 w-5" />
              Payment Information
            </h2>
            <form @submit.prevent="handlePayment" class="space-y-4">
              <div class="space-y-2">
                <label for="cardNumber" class="block text-sm font-medium leading-none">Card Number</label>
                <input 
                  id="cardNumber" 
                  v-model="payment.cardNumber"
                  placeholder="1234 5678 9012 3456" 
                  required 
                  class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                />
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div class="col-span-2 space-y-2">
                  <label for="expiry" class="block text-sm font-medium leading-none">Expiry Date</label>
                  <input 
                    id="expiry" 
                    v-model="payment.expiry"
                    placeholder="MM/YY" 
                    required 
                    class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  />
                </div>
                <div class="space-y-2">
                  <label for="cvv" class="block text-sm font-medium leading-none">CVV</label>
                  <input 
                    id="cvv" 
                    v-model="payment.cvv"
                    placeholder="123" 
                    required 
                    class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  />
                </div>
              </div>
              <div class="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock class="h-4 w-4" />
                <span>Your payment information is secure and encrypted</span>
              </div>
            </form>
          </div>
        </div>

        <!-- Order Summary -->
        <div class="lg:col-span-1">
          <div class="bg-card rounded-lg p-6 border border-border sticky top-24">
            <h2 class="text-xl font-bold mb-6">Order Summary</h2>
            <div class="space-y-4 mb-6">
              <div class="flex justify-between text-sm">
                <span class="text-muted-foreground">Subtotal</span>
                <span class="font-semibold">${{ total.toFixed(2) }}</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-muted-foreground">Shipping</span>
                <span class="font-semibold text-primary">Free</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-muted-foreground">Tax</span>
                <span class="font-semibold">$34.40</span>
              </div>
              <div class="border-t border-border pt-4 flex justify-between text-lg">
                <span class="font-bold">Total</span>
                <span class="font-bold text-primary">${{ (total + 34.40).toFixed(2) }}</span>
              </div>
            </div>
            <button 
              @click="placeOrder"
              class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90 w-full"
            >
              Place Order
            </button>
            <p class="text-xs text-muted-foreground text-center mt-4">
              By placing your order, you agree to our Terms and Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import { CreditCard, Lock } from 'lucide-vue-next';

export default {
  name: 'Checkout',
  components: {
    Navbar,
    CreditCard,
    Lock
  },
  setup() {
    const router = useRouter();
    const total = ref(429.97);
    
    const formData = ref({
      firstName: '',
      lastName: '',
      email: '',
      address: '',
      city: '',
      zip: '',
      country: 'United States'
    });

    const payment = ref({
      cardNumber: '',
      expiry: '',
      cvv: ''
    });

    const handleSubmit = () => {
      // Handle shipping form submission
      console.log('Shipping form submitted:', formData.value);
    };

    const handlePayment = () => {
      // Handle payment form submission
      console.log('Payment form submitted:', payment.value);
    };

    const placeOrder = () => {
      // Handle order placement
      console.log('Placing order with:', { ...formData.value, ...payment.value });
      // router.push('/order-confirmation');
    };

    return {
      total,
      formData,
      payment,
      handleSubmit,
      handlePayment,
      placeOrder
    };
  }
};
</script>
