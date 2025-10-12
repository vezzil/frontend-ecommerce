<template>
  <div class="group overflow-hidden border border-border rounded-lg hover:shadow-[var(--shadow-elegant)] transition-all duration-300 bg-card">
    <router-link :to="`/product/${product.id}`">
      <div class="relative overflow-hidden aspect-square bg-muted">
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <button
          @click.prevent="toggleWishlist"
          class="absolute top-2 right-2 h-10 w-10 flex items-center justify-center rounded-full bg-card/80 backdrop-blur-sm hover:bg-card text-foreground"
        >
          <Heart class="h-4 w-4" />
        </button>
      </div>
    </router-link>
    
    <div class="p-4 space-y-2">
      <p class="text-xs text-muted-foreground uppercase tracking-wider">{{ product.category }}</p>
      <router-link :to="`/product/${product.id}`">
        <h3 class="font-semibold text-foreground group-hover:text-primary transition-colors">
          {{ product.name }}
        </h3>
      </router-link>
      <div class="flex items-center justify-between pt-2">
        <p class="text-lg font-bold text-primary">${{ product.price.toFixed(2) }}</p>
        <button
          @click.prevent="addToCart"
          class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 px-3 bg-secondary text-secondary-foreground hover:bg-secondary/80"
        >
          <ShoppingCart class="h-4 w-4 mr-1" />
          Add
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ShoppingCart, Heart } from 'lucide-vue-next';

export default {
  name: 'ProductCard',
  components: {
    ShoppingCart,
    Heart
  },
  props: {
    product: {
      type: Object,
      required: true,
      validator: (value) => {
        return [
          'id',
          'name',
          'price',
          'image',
          'category'
        ].every(key => key in value);
      }
    }
  },
  setup(props, { emit }) {
    const toggleWishlist = () => {
      emit('toggle-wishlist', props.product.id);
    };

    const addToCart = () => {
      emit('add-to-cart', props.product);
    };

    return {
      toggleWishlist,
      addToCart
    };
  }
};
</script>
