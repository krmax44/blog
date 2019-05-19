<template>
  <div class="page-wrapper">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '../components/Header';
import SiteFooter from '../components/Footer';

export default {
  props: ['page'],
  components: { SiteHeader, SiteFooter },
  head() {
    const page = this.page || {};
    const attributes = page.attributes || {};
    const siteConfig = this.$siteConfig;

    const title = attributes.title
      ? `${attributes.title} - ${siteConfig.title}`
      : siteConfig.title;

    const description =
      attributes.description || page.excerpt
        ? page.excerpt.replace(/<[^>]+>/g, '')
        : '';

    const image = attributes.assets && attributes.assets.image;

    return {
      title,
      meta: [
        {
          name: 'og:title'
        },
        {
          name: 'description',
          content: description
        },
        {
          name: 'og:description',
          content: description
        },
        {
          name: 'og:image',
          content: image
            ? `${siteConfig.url}${
                typeof image === 'string' ? image : image.src
              }`
            : ''
        },
        {
          name: 'twitter:card',
          content: image ? 'summary_large_image' : 'summary'
        },
        {
          name: 'twitter:creator',
          content: '@krmax44'
        },
        {
          name: 'og:url',
          content: `${siteConfig.url}${attributes.permalink}`
        },
        {
          name: 'og:type',
          content: attributes.layout === 'post' ? 'article' : 'website'
        },
        {
          name: 'robots',
          content: attributes.noRobots ? 'noindex,nofollow' : 'index,follow'
        }
      ],
      link: [
        {
          rel: 'canonical',
          href: `${siteConfig.url}${attributes.permalink}`
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/images/icons/icon.svg',
          sizes: 'any'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/icons/icon-128.png',
          sizes: '128x128'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/icons/icon-256.png',
          sizes: '256x256'
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/images/icons/icon-512.png',
          sizes: '512x512'
        }
      ],
      htmlAttrs: [{ lang: 'de' }]
    };
  }
};
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';
@import '../assets/scss/prism.scss';

body {
  min-height: 100vh;
  background-image: linear-gradient(300deg, #414e4f, #abd2fa);
  background-size: cover;
  background-attachment: fixed;
  margin: 0;
  padding: 0;
  font-family: $assistant;
  font-weight: normal;
  font-size: 18px;
  color: $dark;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: $league;
  font-weight: bold;
  color: $light;
  margin: 0;
}

p,
li {
  line-height: 1.5;
}

p {
  text-align: justify;
}

.page-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: $light;
}

.container {
  max-width: $container-max-width;
  width: 100%;
  margin: auto;
  flex: 1;
  padding: 5px;
}

@media (min-width: $breakpoint-md) {
  .container {
    padding: 10px;
  }
}

img {
  max-width: 100%;
}

.center {
  text-align: center;
}

hr {
  border: 0;
  height: 1px;
  width: 80%;
  margin: auto;
  background-color: $opaque;
}

blockquote {
  margin: 0;
  padding-left: 10px;
  border-left: 3px $opaque solid;
}

code,
pre,
.highlight * {
  font-family: $fira;
}

code {
  display: inline-block;
  margin: 1px 5px;
  padding: 2px 5px;
  background-color: rgba(69, 146, 214, 0.1);
}

pre > code {
  max-width: 100%;
  margin: 0;
  padding: 0;
  overflow: auto;
}
</style>
