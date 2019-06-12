<template>
  <BaseLayout :page="page">
    <div class="posts container">
      <BlogPost
        v-for="post in page.posts"
        :key="post.id"
        :index="true"
        :post="post"
      />
    </div>
  </BaseLayout>
</template>

<script>
import BaseLayout from './BaseLayout';
import BlogPost from '../components/BlogPost';
import inView from 'element-in-view';
import elementPosition from '../utils/element-position';
import {
  scaleOut,
  scaleIn,
  fadeOut,
  fadeIn,
  moveToElement,
  setScaleZero,
  setScaleOne,
  setOpacityZero,
  setOpacityOne,
  setPosition,
  bodyScroll,
  fancyTransition
} from '../utils/animation-utils';

export default {
  components: { BlogPost, BaseLayout },
  props: ['page', 'home'],
  transition(to, from = {}) {
    const postRegex = /\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\/.*/gm;

    if (
      (postRegex.test(to.fullPath) || postRegex.test(from.fullPath)) &&
      ![to.name, from.name].includes(404)
    ) {
      return {
        css: false,
        beforeEnter(el) {
          const { postId } = window.$transition.from;

          const container = el.querySelector(
            `.post-container[data-id="${postId}"]`
          );

          setOpacityZero(container);

          window.$transition.to = { container };

          bodyScroll('scroll');
        },
        async enter(el, done) {
          const { animationTarget, postId } = window.$transition.from;
          const { container } = window.$transition.to;

          if (fancyTransition()) {
            await moveToElement(animationTarget, container);
          }

          setOpacityOne(container);
          animationTarget.remove();
          fadeIn(container.querySelector('.post')).then(done);
        },
        afterEnter() {
          bodyScroll('auto');
        },
        enterCancelled() {
          window.$transition.from.animationTarget.remove();
        },
        beforeLeave(el) {
          bodyScroll('scroll');
        },
        async leave(el, done) {
          const container = el.querySelector(
            `.post-container[data-id="${to.fullPath}"]`
          );

          let animationTarget;
          if (fancyTransition()) {
            animationTarget = container.cloneNode(true);
            el.after(animationTarget);
            setPosition(animationTarget, elementPosition(container));
            setOpacityZero(container);
          } else {
            animationTarget = container;
          }

          await fadeOut(animationTarget.firstChild);

          window.$transition = {
            from: {
              animationTarget,
              containers: el.querySelectorAll('.post-container')
            }
          };

          done();
        },
        afterLeave(el) {
          bodyScroll('auto');
        }
      };
    } else {
      return {
        css: false,
        enter(el, done) {
          const containersInView = [];

          for (const container of el.querySelectorAll('.post-container')) {
            if (inView(container)) {
              setScaleZero(container);
              containersInView.push(container);
            }
          }

          scaleIn(containersInView).then(done);
        },
        afterEnter() {
          bodyScroll('auto');
        },
        beforeLeave() {
          bodyScroll('scroll');
        },
        leave(el, done) {
          const containers = [...el.querySelectorAll('.post-container')].filter(
            el => inView(el)
          );
          scaleOut(containers).then(done);
        }
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.posts {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.post-solo {
  display: flex;
}
</style>
