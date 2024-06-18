<script setup>
import { toRef } from 'vue'
import { useRouter } from 'vue-router'
import { vAutoAnimate } from '@formkit/auto-animate/vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { FormField, FormItem, FormLabel, FormControl, FormDescription } from '@/components/ui/form';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { useLogin } from '@/stores/login'

const router = useRouter()
const store = useLogin()

const onSubmit = () => {
  toRef(store.loginAction(true))
  router.push({ name: 'home' })
}
</script>

<template>
  <div id="login">
    <div class="right-card">
      <Card class="w-[500px]">
        <CardHeader>
          <CardTitle>
            Welcome Back 👋
          </CardTitle>
          <CardDescription>This is ITC's System4 Login page.</CardDescription>
        </CardHeader>
        <CardContent>
          <form class="space-y-4" @submit="onSubmit">
            <FormField v-slot="{ componentField }" name="username">
              <FormItem v-auto-animate>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="username" v-bind="componentField" />
                </FormControl>
              </FormItem>
            </FormField>
            <FormField v-slot="{ componentField }" name="password">
              <FormItem v-auto-animate>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="password" v-bind="componentField" />
                </FormControl>
              </FormItem>
            </FormField>
            <FormField v-slot="{ value, handleChange }" type="checkbox" name="remember">
              <FormItem v-auto-animate class="flex flex-row items-start gap-x-3 space-y-0 rounded-md border p-4">
                <FormControl>
                  <Checkbox :checked="value" @update:checked="handleChange" />
                </FormControl>
                <div class="space-y-1 leading-none">
                  <FormLabel>Remember password in this device?</FormLabel>
                </div>
              </FormItem>
            </FormField>
            <Button type="submit" class="w-full">
              Login to System4
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          <a href="">Forgot Password?</a>
        </CardFooter>
      </Card>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  #login {
    .right-card {
      padding: 50px;
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