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
import transition from '../utils/page-transition';
import {
  scaleOut,
  scaleIn,
  fadeOut,
  fadeIn,
  moveToElement,
  setScaleZero,
  setPosition,
  bodyScroll,
  fancyTransition,
  setOpacityZero,
  setOpacityOne,
  autoPosition
} from '../utils/animation-utils';
import pageTransition from '../utils/page-transition';

export default {
  components: { BlogPost, BaseLayout },
  props: ['page'],
  transition(to, from = {}) {
    const tagRegex = /\/tags\/.*/gm;

    if (
      ([to.fullPath, from.fullPath].includes('/') ||
        tagRegex.test(to.fullPath) ||
        tagRegex.test(from.fullPath)) &&
      ![to.name, from.name].includes('404')
    ) {
      return {
        css: false,
        beforeEnter(el) {
          const container = el.querySelector('.post-container');
          setOpacityZero(container);
          setOpacityZero(container.firstChild);

          if (fancyTransition()) {
            const { containers } = window.$transition.from;
            el.querySelector('.dummy-posts').append(...containers);
          }

          window.$transition.to = { container };
        },
        async enter(el, done) {
          const { animationTarget, containers } = window.$transition.from;
          const { container, posts } = window.$transition.to;

          if (fancyTransition()) {
            window.scroll({ top: 0 });
            await moveToElement(animationTarget, container);
          }

          el.querySelector('.dummy-posts').remove();

          setOpacityOne(container);
          animationTarget.remove();

          await fadeIn(container.firstChild);
          autoPosition(container);
          done();
        },
        afterEnter() {
          bodyScroll('auto');
        },
        enterCancelled() {
          window.$transition.from.animationTarget.remove();
        },
        beforeLeave(el) {
          const container = el.querySelector('.post-container');
          const animationTarget = container.cloneNode(true);
          setPosition(animationTarget, elementPosition(container));
          el.after(animationTarget);
          animationTarget.style.overflow = 'hidden';

          setOpacityZero(container);

          window.$transition = {
            from: {
              animationTarget,
              postId: from.fullPath
            },
            to: {}
          };
          bodyScroll('scroll');
        },
        async leave(el, done) {
          const { animationTarget } = window.$transition.from;
          await fadeOut(animationTarget.querySelector('.post'));
          animationTarget.firstChild.remove();
          done();
        },
        afterLeave() {
          bodyScroll('auto');
        }
      };
    } else {
      return pageTransition('.post-container');
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
