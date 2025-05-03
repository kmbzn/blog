<template>
  <div class="theme-default-content content__default">
    <div class="empty">
      <!-- (Optional) Custom content goes here -->
    </div>
    
    <div class="footer">
      <hr />
      <p class="copyright">
        © 2020 Gyoogle · <a href="https://github.com/kmbzn/blog/blob/master/LICENSE" target="_blank">MIT License</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.theme-default-content.content__default {
  padding: 2rem;
  max-width: 740px;
  margin: 0 auto;
}

.footer {
  text-align: center;
  margin-top: 4rem;
}

.copyright {
  color: gray;
  font-size: 0.75rem;
  line-height: 1.4;
}
</style>