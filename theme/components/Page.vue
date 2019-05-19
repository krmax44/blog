<template>
  <div class="container">
    <div class="page-container">
      <div>
        <slot />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

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
