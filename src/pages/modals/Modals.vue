<template>
  <div class="wrapper">
    <div class="wrapper-content wrapper-content--fixed">

      <section>
        <div class="container">
          <!-- First Modal -->
          <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Show First Modal</button>
          <modals title="First Modal"
          v-show="modalFirst"
          @close="modalFirst = false">
          <!-- Body -->
          <div slot="body">
            <p>Text Text Text Text Text</p>
            <button class="btn btnPrimary" @click="modalFirst = !modalFirst">Well Done</button>
          </div>
          </modals>

          <!-- Second Modal -->
          <button class="btn btnPrimary" @click="modalSecond.show = !modalSecond.show">Show Modal With Form</button>
          <modals title="Modal width form"
          v-show="modalSecond.show"
          @close="resetForm">
          <!-- Body -->
          <div slot="body">
            <form @submit.prevent="submitSecondForm">
              <label>Name:</label>
              <input type="text" required v-model="modalSecond.name">
              <label>Email:</label>
              <input type="email" required v-model="modalSecond.email">
              <button class="btn btnPrimary">Submit</button>
            </form>
          </div>
          </modals>

          <!-- Modal with validate -->
          <button class="btn btnPrimary" @click="modalValidate = !modalValidate">Show Modal With Form + validate</button>
          <modalValidate v-show="modalValidate" @close="modalValidate = false" />
        </div>
      </section>

    </div>
  </div>
</template>

<script>
import modals from '@/pages/modals/UI/Modal.vue'
import modalValidate from '@/pages/modals/ModalValidate.vue'
export default {
  components: { modals, modalValidate },
  data() {
    return {
      modalFirst: false,
      modalSecond: {
        show: false,
        name: '',
        email: ''
      },
      modalValidate: false,
    }
  },
  methods: {
    submitSecondForm () {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
    },
    resetForm () {
      this.modalSecond.name = ''
      this.modalSecond.email = ''
      this.modalSecond.show = false
      this.$emit('close')
      }
  }
}
</script>

<style lang="scss" scoped>
.btn {
    &.btnPrimary {
        margin: 10px;
    }
} 
</style>