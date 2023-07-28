<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseAuthClient()

watchEffect(() => {
  if (user.value) {
    navigateTo('/me')
  }
})

const loginOTP = async () => {
    await client.auth.signInWithOtp({ email: 'test@example.com', options: { emailRedirectTo: 'http://localhost:3000/confirm'} }); 
    navigateTo('http://localhost:54324/monitor', {external: true})
}
</script>

<template>
  <div style="display: flex; flex-direction: column; gap: 5rem;">
    <button @click="client.auth.signInWithOAuth({ provider: 'github', options: { redirectTo: 'http://localhost:3000/confirm'} })">
      LogIn
    </button>

    <button @click="loginOTP">
      LogIn OTP
    </button>
  </div>
</template>
