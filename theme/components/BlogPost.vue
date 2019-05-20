<template>
  <div
    class="post-container"
    :data-id="post.attributes.permalink"
    :style="cursorStyle"
    @click="$router.push(post.attributes.permalink)"
  >
    <div class="post">
      <div
        v-if="post.attributes.assets && post.attributes.assets.image"
        class="post-image"
        :style="{
          paddingBottom: `${((post.attributes.assets.image.height || 242) /
            (post.attributes.assets.image.width || 1000)) *
            100}%`
        }"
      >
        <saber-image
          :src="post.attributes.assets.image"
          width="1000"
          height="242"
        />
      </div>

      <div class="post-text">
        <h1>{{ post.attributes.title }}</h1>
        <span class="date">{{ date }}</span>

        <div class="post-content">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div v-html="post.excerpt" v-if="index" />
          <slot v-if="!index" />
          <saber-link
            v-if="index"
            :to="post.attributes.permalink"
            class="read-more"
          >
            Read more...
          </saber-link>
        </div>
      </div>

      <div v-if="!index" class="post-tags">
        This post is tagged with
        <saber-link
          :to="tag.permalink"
          class="tag"
          v-for="tag in post.tags"
          :key="tag.permalink"
        >
          #{{ tag.name }}
        </saber-link>
      </div>

      <div v-if="!index" class="post-share">
        <span>Enjoyed the sauce? Share it:</span>
        <SiteButton
          target="_blank"
          :href="
            `https://twitter.com/share?text=${post.attributes.title}&url=${url}`
          "
          fab
        >
          <img src="../assets/images/twitter.svg" alt="Twitter" />
        </SiteButton>
        <SiteButton
          target="_blank"
          :href="
            `https://www.reddit.com/submit?title=${
              post.attributes.title
            }&url=${url}`
          "
          fab
        >
          <img src="../assets/images/reddit.svg" alt="Reddit" />
        </SiteButton>
        <SiteButton class="copy-url" fab @click="copyUrl">
          <img ref="copyUrl" src="../assets/images/link.svg" alt="URL" />
        </SiteButton>
      </div>
    </div>
  </div>
</template>

<script>
import SiteButton from './SiteButton';
import copy from 'clipboard-copy';
import { format } from 'date-fns';

export default {
  components: { SiteButton },
  props: {
    post: {
      type: Object,
      default: () => ({
        attributes: {
          title: '',
          photo: '',
          slug: '',
          excerpt: ''
        }
      })
    },
    index: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    url() {
      if (process.client) {
        return encodeURIComponent(window.location.href);
      } else {
        return '';
      }
    },
    date() {
      return format(new Date(this.post.attributes.date), 'YYYY/MM/DD');
    },
    cursorStyle() {
      return { cursor: this.index ? 'pointer' : 'normal' };
    }
  },
  methods: {
    copyUrl() {
      copy(window.location.href);
      const current = this.$refs.copyUrl.style.transform.match(/\d+/gm);
      const next = (current ? parseInt(current[0]) : 0) + 360;
      this.$refs.copyUrl.style.transform = `rotate(${next}deg)`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

.post-container {
  border-radius: 5px;
  margin: 5px;
  overflow: auto;
  height: auto;
  box-shadow: 0 3px 25px rgba(0, 0, 0, 0.15);
  background-color: rgb(253, 253, 253);
  flex-basis: 100%;

  @media (min-width: $breakpoint-md) {
    flex-basis: calc(50% - 10px);
  }
}

.post {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  .post-image {
    position: relative;
    height: 0;
    overflow: hidden;

    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      background-color: rgba(0, 0, 0, 0.05);
      height: auto;
    }
  }

  .post-text,
  .post-action,
  .post-share,
  .post-tags {
    padding: 20px;
  }

  .post-content /deep/ img {
    display: block;
    max-height: 50vh;
    max-width: 100%;
    width: auto;
    margin: auto;
  }

  .read-more {
    font-weight: bold;
  }

  .post-text img {
    display: block;
    max-height: 400px;
    width: auto;
    height: auto;
    margin: auto;
    object-fit: contain;
  }

  .post-text img.full-width {
    width: 100%;
  }

  .post-image {
    a,
    img {
      width: 100%;
      display: flex;
      flex-direction: column;
    }
  }

  .post-action {
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: flex-end;

    .btn {
      margin: 0;
    }
  }

  .post-tags .tag {
    display: inline-block;
    background-color: $opaque;
    padding: 5px 20px;
    margin: 5px;
    color: $dark;
    border-radius: 5px;
  }

  .post-share {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    align-items: center;
    margin-top: auto;

    > * {
      margin: 0 40px;
    }

    span {
      color: $light;
    }

    a,
    span {
      margin: 0 10px;
    }

    a:last-child {
      margin-right: 0;
    }

    img {
      width: 30px;
      height: 30px;
    }
  }

  @media (max-width: $breakpoint-sm) {
    .post-share {
      flex-wrap: wrap;
      justify-content: center;

      span {
        flex-basis: 100%;
        margin: 0;
        margin-bottom: 20px;
      }
    }
  }

  .copy-url img {
    transform: rotate(0deg);
    transition: transform 0.5s ease-in-out;
  }

  span.date {
    color: $opaque;
    display: inline-block;
    margin: 5px 0;
  }
}

.posts .post-container:first-child {
  flex-basis: 100%;
}
</style>
