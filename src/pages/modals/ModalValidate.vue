<template>
  <modal 
    title="Modal with form + Validate"
    @close="resetForm">
    <!-- Body -->
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <div class="form-item" :class="{ errorInput: $v.name.$error }">
          <label>Name:</label>
          <p class="errorText" v-if="!$v.name.required">Field is required!</p>
          <p class="errorText" v-if="!$v.name.minLength">Name must have at least {{ $v.name.$params.minLength.min }} !</p>
          <input
            v-model="name"
            :class="{ error: $v.name.$error }"
            @change="$v.name.$touch()">
        </div>
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
          <!-- repeat password -->
        <div class="form-item" :class="{ errorInput: $v.repeatPassword.$error }">
          <label>Repeat your password:</label>
          <p class="errorText" v-if="!$v.repeatPassword.sameAsPassword">Passwords must be identical 
            {{ $v.password.$params.minLength.min }} letters.</p>
          <input
            type="password"
            v-model="repeatPassword"
            :class="{ errorInput: $v.repeatPassword.$error }"
            @change="$v.repeatPassword.$touch()">
        </div>
        <!-- button -->
        <button class="btn btnPrimary">Submit</button>
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
        name: '',
        email: '',
        password: '',
        repeatPassword: ''
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email
      },
      password: {
        required,
        minLength: minLength(6)
      },
      repeatPassword: {
        sameAsPassword: sameAs('password')
      }
    },
    methods: {
      resetForm () {
        this.name = ''
        this.email = ''
        this.password = ''
        this.repeatPassword = ''
        this.$emit('close')
      },
      onSubmit () {
        this.$v.$touch()
        if (!this.$v.$invalid) {
          const user = {
            name: this.name,
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

<style lang="scss">
.form-item .errorText {
  display: none;
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #de4040;
}
.form-item {
  &.errorInput .errorText {
    display: block;
  }
}
input.error {
  border-color: #de4040;
}
</style>
