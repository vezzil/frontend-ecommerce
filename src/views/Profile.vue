<template>
  <div class="min-h-screen bg-background">
    <Navbar />

    <div class="container mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold mb-8">My Account</h1>

      <Tabs v-model="activeTab" class="mb-8">
        <TabsList class="mb-8">
          <TabsTrigger value="orders">
            <Package class="h-4 w-4 mr-2" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="profile">
            <User class="h-4 w-4 mr-2" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="addresses">
            <MapPin class="h-4 w-4 mr-2" />
            Addresses
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orders" class="space-y-4">
          <div
            v-for="order in orders"
            :key="order.id"
            class="bg-card rounded-lg p-6 border border-border"
          >
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="font-semibold text-lg">{{ order.id }}</h3>
                <p class="text-sm text-muted-foreground">
                  Placed on {{ formatDate(order.date) }}
                </p>
              </div>
              <div class="text-right">
                <span
                  :class="[
                    'px-3 py-1 rounded-full text-xs font-semibold',
                    order.status === 'Delivered'
                      ? 'bg-primary/10 text-primary'
                      : 'bg-secondary/10 text-secondary'
                  ]"
                >
                  {{ order.status }}
                </span>
                <p class="font-bold text-lg mt-2">${{ order.total.toFixed(2) }}</p>
              </div>
            </div>
            <div class="flex gap-4">
              <div
                v-for="(item, idx) in order.items"
                :key="idx"
                class="flex items-center gap-3"
              >
                <img
                  :src="item.image"
                  :alt="item.name"
                  class="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <p class="font-medium text-sm">{{ item.name }}</p>
                  <p class="text-xs text-muted-foreground">Qty: {{ item.quantity }}</p>
                </div>
              </div>
            </div>
            <div class="mt-4 pt-4 border-t border-border flex gap-2">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                View Details
              </button>
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                Track Order
              </button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="profile">
          <div class="bg-card rounded-lg p-6 border border-border max-w-2xl">
            <h2 class="text-xl font-bold mb-6">Profile Information</h2>
            <form @submit.prevent="saveProfile" class="space-y-4">
              <div class="grid grid-cols-2 gap-4">
                <div class="space-y-2">
                  <label for="firstName" class="text-sm font-medium leading-none">First Name</label>
                  <input
                    id="firstName"
                    v-model="profile.firstName"
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  />
                </div>
                <div class="space-y-2">
                  <label for="lastName" class="text-sm font-medium leading-none">Last Name</label>
                  <input
                    id="lastName"
                    v-model="profile.lastName"
                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label for="email" class="text-sm font-medium leading-none">Email</label>
                <input
                  id="email"
                  type="email"
                  v-model="profile.email"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                />
              </div>
              <div class="space-y-2">
                <label for="phone" class="text-sm font-medium leading-none">Phone</label>
                <input
                  id="phone"
                  type="tel"
                  v-model="profile.phone"
                  class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
                />
              </div>
              <div class="pt-4">
                <button
                  type="submit"
                  class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </TabsContent>

        <TabsContent value="addresses">
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-card rounded-lg p-6 border border-border">
              <div class="flex justify-between items-start mb-4">
                <h3 class="font-semibold">Default Address</h3>
                <span class="text-xs bg-primary/10 text-primary px-2 py-1 rounded">Default</span>
              </div>
              <address class="not-italic text-sm text-muted-foreground space-y-1">
                <p>John Doe</p>
                <p>123 Fragrance Avenue</p>
                <p>New York, NY 10001</p>
                <p>United States</p>
              </address>
              <div class="mt-4 pt-4 border-t border-border flex gap-2">
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 px-3">
                  Edit
                </button>
                <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-9 px-3 text-destructive">
                  Delete
                </button>
              </div>
            </div>

            <div class="bg-card rounded-lg p-6 border border-dashed border-border flex items-center justify-center">
              <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                <MapPin class="h-4 w-4 mr-2" />
                Add New Address
              </button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Navbar from '@/components/Navbar.vue';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs/tabs';
import { Package, User, MapPin } from 'lucide-vue-next';
import perfume1 from '@/assets/perfume-1.jpg';

export default {
  name: 'Profile',
  components: {
    Navbar,
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
    Package,
    User,
    MapPin
  },
  setup() {
    const activeTab = ref('orders');

    const orders = [
      {
        id: "ORD-001",
        date: "2024-03-15",
        status: "Delivered",
        total: 279.98,
        items: [
          { name: "Velvet Orchid", image: perfume1, quantity: 2 },
        ],
      },
      {
        id: "ORD-002",
        date: "2024-03-10",
        status: "In Transit",
        total: 149.99,
        items: [
          { name: "Rose Lumière", image: perfume1, quantity: 1 },
        ],
      },
    ];

    const profile = ref({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
      phone: '+1 (555) 123-4567'
    });

    const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString();
    };

    const saveProfile = () => {
      console.log('Profile saved:', profile.value);
      // Add your profile save logic here
    };

    return {
      activeTab,
      orders,
      profile,
      formatDate,
      saveProfile
    };
  }
};
</script>
