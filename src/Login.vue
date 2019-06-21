<template>
  <modal 
    title="Login"
    @close="resetForm">
    <!-- Body -->
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <!-- email -->
        <div class="form-item" :class="{ errorInput: $v.email.$error }">
          <label>Email:</label>
          <p class="errorText" v-if="!$v.email.required">Field is required!</p>
          <p class="errorText" v-if="!$v.email.email">Email is not correct!</p>
          <input
            v-model="email"
            :class="{ error: $v.email.$error }"
            @change="$v.email.$touch()">
        </div>
        <!-- password -->
        <div class="form-item" :class="{ errorInput: $v.password.$error }">
          <label>Password:</label>
          <p class="errorText" v-if="!$v.password.required">Field is required!</p>
          <p class="errorText" v-if="!$v.password.minLength">Password must have at least 
            {{ $v.password.$params.minLength.min }} letters.</p>
          <input
            type="password"
            v-model="password"
            :class="{ errorInput: $v.password.$error }"
            @change="$v.password.$touch()">
        </div>
        <!-- button -->
        <button class="btn btnPrimary">Login</button>
        <span class="link" @click="$emit('changeModal'), resetForm">Need an account?</span>
      </form>
    </div>
  </modal>
</template>

<script>
import { required, minLength, email, sameAs } from 'vuelidate/lib/validators'
import modal from '@/pages/modals/UI/Modal.vue'
export default {
  components: { modal },
  data () {
    return {
      email: '',
      password: ''
    }
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    resetForm () {
      this.email = ''
      this.password = ''
      this.$v.$reset()
      this.$emit('close')
    },
    onSubmit () {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        }
        console.log(user)
        // DONE!
        this.resetForm()
      }
    }
  }
}
</script>
