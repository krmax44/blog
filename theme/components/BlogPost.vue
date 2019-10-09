<template>
  <div
    class="post-container"
    :data-id="post.attributes.permalink"
    :style="cursorStyle"
    :title="index ? post.attributes.title : undefined"
    @click="viewPost"
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
          :alt="post.attributes.title"
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
        </div>
      </div>

      <saber-link
        v-if="index"
        :to="post.attributes.permalink"
        class="read-more"
      >
        Read more...
      </saber-link>

      <div v-if="!index" class="post-tags">
        This post is tagged with
        <saber-link
          :to="tag.permalink"
          class="tag"
          v-for="tag in post.tagsInfo"
          :key="tag.name"
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
            `https://www.reddit.com/submit?title=${post.attributes.title}&url=${url}`
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
      const date = new Date(this.post.attributes.createdAt);
      const twoDigits = input => String(input).padStart(2, '0');
      return `${date.getFullYear()}/${twoDigits(
        date.getMonth() + 1
      )}/${twoDigits(date.getDate())}`;
    },
    cursorStyle() {
      return { cursor: this.index ? 'pointer' : 'normal' };
    }
  },
  methods: {
    viewPost() {
      if (this.index) {
        this.$router.push(this.post.attributes.permalink);
      }
    },
    copyUrl() {
      copy(window.location.href);
      const current = this.$refs.copyUrl.style.transform.match(/\d+/gm);
      const next = (current ? parseInt(current[0]) : 0) + 360;
      this.$refs.copyUrl.style.transform = `rotate(${next}deg)`;
    }
  }
};
</script>

<style lang="scss" scoped src="../assets/scss/post.scss" />