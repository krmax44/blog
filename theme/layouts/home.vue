<template>
  <TagPage :page="page" />
</template>

<script>
import TagPage from './tag';

export default {
  props: ['page'],
  components: { TagPage }
};
</script>
