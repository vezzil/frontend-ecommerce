<template>
  <nav class="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <router-link to="/" class="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Essence
        </router-link>
        
        <div class="hidden md:flex items-center flex-1 max-w-md mx-8">
          <div class="relative w-full">
            <SearchIcon class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              v-model="searchQuery"
              @keyup.enter="performSearch"
              placeholder="Search fragrances..."
              class="flex h-10 w-full rounded-md border border-input bg-muted/50 px-3 py-2 text-sm ring-offset-background pl-10"
            />
          </div>
        </div>

        <div class="flex items-center gap-4">
          <router-link to="/products">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 hover:bg-accent hover:text-accent-foreground">
              Shop
            </button>
          </router-link>
          <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 hover:bg-accent hover:text-accent-foreground">
            <Heart class="h-5 w-5" />
          </button>
          <router-link to="/cart">
            <button class="relative inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 w-10 hover:bg-accent hover:text-accent-foreground">
              <ShoppingCart class="h-5 w-5" />
              <span class="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                {{ cartItemCount }}
              </span>
            </button>
          </router-link>
          <router-link to="/profile">
            <button class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-4 border border-input bg-background hover:bg-accent hover:text-accent-foreground">
              <User class="h-4 w-4 mr-2" />
              Account
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { ShoppingCart, User, Search as SearchIcon, Heart } from 'lucide-vue-next';
import { ref } from 'vue';

export default {
  name: 'AppNavbar',
  components: {
    ShoppingCart,
    User,
    SearchIcon,
    Heart
  },
  setup() {
    const searchQuery = ref('');
    const cartItemCount = ref(0); // You can connect this to your cart store

    const performSearch = () => {
      if (searchQuery.value.trim()) {
        // Handle search functionality
        console.log('Searching for:', searchQuery.value);
      }
    };

    return {
      searchQuery,
      cartItemCount,
      performSearch
    };
  }
};
</script>
