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
  moveToCoords
} from '../utils/animation-utils';

export default {
  components: { BlogPost, BaseLayout },
  props: ['page', 'home'],
  transition(to, from = {}) {
    const postRegex = /\/[0-9]{4}\/[0-9]{2}\/[0-9]{2}\/.*/gm;

    if (postRegex.test(to.fullPath) || postRegex.test(from.fullPath)) {
      return {
        css: false,
        beforeEnter(el) {
          const { postId } = window.$transition.from;

          const container = el.querySelector(
            `.post-container[data-id="${postId}"]`
          );

          container.style.opacity = '0';

          window.$transition.to = { container };
        },
        async enter(el, done) {
          const { clone, postId } = window.$transition.from;
          const { container } = window.$transition.to;

          await moveToElement(clone, container, true);

          container.style.opacity = '1';
          clone.remove();
          fadeIn(container.querySelector('.post')).then(done);
        },
        afterEnter() {
          bodyScroll('auto');
        },
        enterCancelled() {
          window.$transition.from.clone.remove();
        },
        beforeLeave(el) {
          const container = el.querySelector(
            `.post-container[data-id="${to.fullPath}"]`
          );

          const clone = container.cloneNode(true);
          const position = elementPosition(container);
          container.style.visibility = 'hidden';

          el.after(clone);
          setPosition(clone, position);

          window.$transition = {
            from: {
              clone
            },
            to: {}
          };

          bodyScroll('scroll');
        },
        async leave(el, done) {
          const { clone } = window.$transition.from;
          const containers = el.querySelectorAll(
            `.post-container:not([data-id="${to.fullPath}"])`
          );

          window.$transition.from.containers = el.querySelectorAll(
            '.post-container'
          );

          await fadeOut(clone.querySelector('.post'));
          clone.firstChild.remove();
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
