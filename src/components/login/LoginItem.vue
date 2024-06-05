<script setup>
import { useRouter } from 'vue-router'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormField, FormItem, FormLabel, FormControl, FormDescription } from '@/components/ui/form';

const router = useRouter()

const onSubmit = () => {
  router.push('/home')
}
</script>

<template>
  <div id="login">
    <div class="right-card">
      <h1>
        Welcome Back 👋
      </h1>
      <p>This is ITC's System4 Login page.</p>
      <form class="w-2/3 space-y-6" @submit="onSubmit">
    <FormField v-slot="{ componentField }" name="username">
      <FormItem v-auto-animate>
        <FormLabel>Username</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <FormField v-slot="{ componentField }" name="password">
      <FormItem v-auto-animate>
        <FormLabel>Password</FormLabel>
        <FormControl>
          <Input type="text" placeholder="shadcn" v-bind="componentField" />
        </FormControl>
        <FormMessage />
      </FormItem>
    </FormField>
    <Button type="submit">
      Login to System4
    </Button>
  </form>
      <fieldset class="forgot-password">
        <p>If you have forgotten your password, or having problems logging in, please reset your password using the following link.</p>
        <a href="">Forgot Password</a>
      </fieldset>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  #login {
    .right-card {
      padding: 50px;
      width: 500px;
      margin: auto 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      .forgot-password {
        p {
          padding: 1rem;
          border-radius: var(--radius);
          color: var(--popover);
          background: var(--accent);
          margin: 0 0 10px;
        }
        a {
          text-align: center;
        }
      }
    }
  }
</style>