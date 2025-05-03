<template>
  <div class="theme-container">
    <Navbar />
    <ParentLayout />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: {
    Navbar,
    ParentLayout
  }
}
</script>
