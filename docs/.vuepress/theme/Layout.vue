<template>
  <div class="theme-container">
    <header class="navbar">
      <router-link to="/" class="home-link">
        <img class="logo" :src="$withBase('/images/kmbzn.png')" alt="logo" />
        <span class="site-name">{{ $siteTitle }}</span>
      </router-link>
    </header>
    <ParentLayout />
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: {
    ParentLayout
  }
}
</script>

<style scoped>
.logo {
  height: 32px;
  vertical-align: middle;
  margin-right: 8px;
}
.site-name {
  font-size: 1.25rem;
  font-weight: bold;
}
.navbar {
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
}
.home-link {
  display: flex;
  align-items: center;
  text-decoration: none;
}
</style>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'

export default {
  components: {
    ParentLayout
  }
}
</script>

<style>
</style>
