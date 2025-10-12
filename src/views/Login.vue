<template>
  <div class="min-h-screen bg-background flex items-center justify-center px-4">
    <div class="w-full max-w-md">
      <div class="text-center mb-8">
        <router-link 
          to="/" 
          class="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Essence
        </router-link>
        <h1 class="text-2xl font-bold mt-6 mb-2">Welcome Back</h1>
        <p class="text-muted-foreground">Sign in to your account</p>
      </div>

      <div class="bg-card rounded-lg p-8 border border-border shadow-[var(--shadow-card)]">
        <form @submit.prevent="handleSubmit" class="space-y-4">
          <div class="space-y-2">
            <label for="email" class="block text-sm font-medium leading-none">Email</label>
            <input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="you@example.com"
              required
              class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
          </div>
          <div class="space-y-2">
            <label for="password" class="block text-sm font-medium leading-none">Password</label>
            <input
              id="password"
              v-model="formData.password"
              type="password"
              placeholder="••••••••"
              required
              class="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background"
            />
          </div>
          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                v-model="formData.rememberMe"
                class="rounded border-border" 
              />
              <span class="text-muted-foreground">Remember me</span>
            </label>
            <a href="#" class="text-primary hover:underline">
              Forgot password?
            </a>
          </div>
          <button 
            type="submit"
            class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8 w-full bg-primary text-primary-foreground hover:bg-primary/90"
          >
            Sign In
          </button>
        </form>

        <div class="mt-6 text-center text-sm text-muted-foreground">
          Don't have an account?{" "}
          <router-link 
            to="/register" 
            class="text-primary hover:underline font-semibold"
          >
            Create one
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'Login',
  setup() {
    const router = useRouter();
    
    const formData = ref({
      email: '',
      password: '',
      rememberMe: false
    });

    const handleSubmit = () => {
      console.log('Login form submitted:', formData.value);
      // Add your authentication logic here
      // router.push('/dashboard');
    };

    return {
      formData,
      handleSubmit
    };
  }
};
</script>
