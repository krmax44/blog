<template>
  <BaseLayout :page="page">
    <div class="container">
      <div class="page-container">
        <div>
          <saber-image src="../assets/images/monkey.jpg" />
          <div>
            <h1>404 Not Found</h1>
            <span>
              OOPSIE WOOPSIE!! Uwu We made a fucky wucky!! A wittle fucko
              boingo! The code monkeys at our headquarters are working VEWY HAWD
              to fix this!
            </span>
            <p><saber-link to="/">← Back to the zoo</saber-link></p>
          </div>
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
    return {
      title: `404 Not Found - ${this.$siteConfig.title}`
    };
  },
  beforeRouteLeave(to, from, next) {
    console.log(to, from);
    next();
  },
  transition: transition('.page-container')
};
</script>



<style lang="scss" scoped>
.container {
  display: flex;
}

.page-container {
  flex: 1;
  min-height: 100%;

  div {
    display: flex;
    height: 100%;
    flex: 1;
    margin: 5px;
    position: relative;
    border-radius: 5px;
    box-shadow: 0 3px 25px rgba(0, 0, 0, 0.15);
    background-color: rgba(0, 0, 0, 0.5);
    overflow: hidden;

    & > img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
    }

    & > div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      padding: 20px;
      text-align: center;
    }

    span {
      font-size: 1.2em;
    }

    h1,
    span,
    a {
      color: #fff;
    }

    a {
      border-bottom: 1px #fff solid;
    }
  }
}
</style>
