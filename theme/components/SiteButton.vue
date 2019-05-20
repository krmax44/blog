<template>
  <saber-link
    v-if="to"
    :to="to"
    :class="classes"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </saber-link>
  <a v-else :class="classes" v-bind="$attrs" v-on="$listeners"><slot /></a>
</template>

<script>
export default {
  props: {
    to: {
      type: [String, Object],
      default: ''
    },
    fab: {
      type: Boolean,
      default: false
    },
    prev: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes() {
      return {
        btn: true,
        'btn-fab': this.fab,
        'btn-next': !this.prev && !this.fab,
        'btn-prev': this.prev
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.btn {
  cursor: pointer;

  &.btn-next,
  &.btn-prev {
    display: inline-block;
    padding: 10px 40px;
    width: 100%;
    max-width: $container-max-width;
    margin: auto;
    text-align: center;
    border: 1px $light solid;
    border-radius: 50px;
    background-color: transparent;
    background-image: url('../assets/images/next.svg');
    background-size: auto 50%;
    background-repeat: no-repeat;
    background-position: 20px center;
    transform: none;
    box-shadow: none;
    transition: all 0.5s;

    &:hover {
      background-position: calc(100% - 20px) center;
      box-shadow: inset 0px 0px 2px rgba(0, 0, 0, 0.35);
    }
  }

  &.btn-prev {
    background-image: url('../assets/images/prev.svg');
    background-position: calc(100% - 20px) center;

    &:hover {
      background-position: 20px center;
    }
  }

  &.btn-fab {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background-color: $opaque;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.15);
  }
}
</style>
