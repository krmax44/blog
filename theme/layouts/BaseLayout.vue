<template>
  <div class="page-wrapper">
    <SiteHeader />
    <slot />
    <SiteFooter />
  </div>
</template>

<script>
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default {
  props: ['page'],
  components: { SiteHeader, SiteFooter },
  head() {
    const page = this.page || {};
    const attributes = page.attributes || {};
    const siteConfig = this.$siteConfig;

    const title = page.tag
      ? `Posts tagged with "${page.tag}" - ${siteConfig.title}`
      : attributes.title
      ? `${attributes.title} - ${siteConfig.title}`
      : siteConfig.title;

    const description =
      attributes.description || page.excerpt
        ? page.excerpt.replace(/<[^>]+>/g, '')
        : '';

    const image = attributes.assets && attributes.assets.image;

    return {
      title,
      base: {
        href:
          process.env.NODE_ENV === 'production'
            ? `${siteConfig.url}/`
            : undefined
      },
      meta: [
        {
          name: 'og:title',
          content: title
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
      htmlAttrs: { lang: 'en' }
    };
  }
};
</script>