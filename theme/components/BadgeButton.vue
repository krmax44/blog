<template>
  <saber-link :to="to" class="badge-button">
    <img src="../assets/images/github.svg" v-if="icon === 'github'" />
    <img src="../assets/images/npm.svg" v-if="icon === 'npm'" />

    <slot />
  </saber-link>
</template>

<script>
export default {
  props: {
    to: String,
    icon: {
      type: String,
      default: 'github'
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.badge-button {
  display: inline-flex;
  background-color: transparentize($opaque, 0.5);
  padding: 5px 20px;
  margin: 10px 5px 0 0;
  color: $dark;
  border-radius: 5px;

  img {
    height: 16px;
    padding-right: 5px;
  }
}
</style>