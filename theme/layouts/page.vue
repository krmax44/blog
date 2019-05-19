<template>
  <BaseLayout :page="page">
    <div class="container">
      <div class="page-container">
        <div>
          <h1>{{ page.attributes.title }}</h1>
          <slot name="default" />
        </div>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from './BaseLayout';
import transition from '../utils/page-transition';

export default {
  components: { BaseLayout },
  props: ['page'],
  head() {
    const title = `${this.page.attributes.title} - ${this.$siteConfig.title}`;
    return {
      title,
      meta: [
        {
          robots: this.page.attributes.noRobots ? 'noindex' : 'index'
        }
      ]
    };
  },
  transition
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
}

.page-container {
  flex: 1;
  min-height: 100%;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.15);
  background-color: rgb(253, 253, 253);

  & > div {
    padding: 25px;
  }
}
</style>
