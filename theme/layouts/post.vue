<template>
  <BaseLayout :page="page">
    <div>
      <div class="dummy-posts posts container" />
      <div class="posts container">
        <BlogPost :post="page">
          <slot name="default" />
        </BlogPost>
      </div>
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from './BaseLayout';
import BlogPost from '../components/BlogPost';
import elementPosition from '../utils/element-position';
import {
  scaleOut,
  scaleIn,
  fadeOut,
  fadeIn,
  moveToElement,
  setScaleZero,
  setPosition,
  bodyScroll
} from '../utils/animation-utils';

export default {
  components: { BlogPost, BaseLayout },
  props: ['page'],
  transition(to, from = {}) {
    const tagRegex = /\/tags\/.*/gm;

    if (
      [to.fullPath, from.fullPath].includes('/') ||
      tagRegex.test(to.fullPath) ||
      tagRegex.test(from.fullPath)
    ) {
      return {
        css: false,
        beforeEnter(el) {
          const container = el.querySelector('.post-container');
          container.style.opacity = '0';
          container.querySelector('.post').style.opacity = '0';

          const { containers } = window.$transition.from;
          el.querySelector('.dummy-posts').append(...containers);

          window.$transition.to = { container };
        },
        async enter(el, done) {
          const { clone, containers } = window.$transition.from;
          const { container, posts } = window.$transition.to;

          window.scroll({ top: 0 });
          await moveToElement(clone, container);
          el.querySelector('.dummy-posts').remove();

          container.style.opacity = '1';
          clone.remove();

          await fadeIn(container.querySelector('.post'));

          container.style.overflow = 'auto';
          container.style.height = 'auto';

          done();
        },
        afterEnter() {
          bodyScroll('auto');
        },
        enterCancelled() {
          window.$transition.from.clone.remove();
        },
        beforeLeave(el) {
          const container = el.querySelector('.post-container');
          const clone = container.cloneNode(true);
          setPosition(clone, elementPosition(container));
          el.after(clone);
          clone.style.overflow = 'hidden';

          container.style.visibility = 'hidden';

          window.$transition = {
            from: {
              clone,
              postId: from.fullPath
            },
            to: {}
          };

          bodyScroll('scroll');
        },
        async leave(el, done) {
          const { clone } = window.$transition.from;
          await fadeOut(clone.querySelector('.post'));
          clone.firstChild.remove();
          done();
        }
      };
    } else {
      return {
        css: false,
        beforeEnter(el) {
          const container = el.querySelector('.post-container');
          setScaleZero(container);
          container.querySelector('.post').style.opacity = '0';
        },
        async enter(el, done) {
          const container = el.querySelector('.post-container');
          const post = container.querySelector('.post');
          await scaleIn(container);
          await fadeIn(post);
          done();
        },
        afterEnter() {
          bodyScroll('auto');
        },
        beforeLeave() {
          bodyScroll('scroll');
        },
        async leave(el, done) {
          const container = el.querySelector('.post-container');
          await fadeOut(container.querySelector('.post'));
          await scaleOut(container);
          done();
        },
        afterLeave() {
          bodyScroll('auto');
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.posts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  /deep/ .post-container {
    z-index: 10;
  }
}

.dummy-posts {
  position: absolute;
  z-index: -1;
  left: 0;
  right: 0;
  width: auto;

  @media (min-width: $breakpoint-md) {
    left: 10px;
    right: 10px;
  }
}
</style>
