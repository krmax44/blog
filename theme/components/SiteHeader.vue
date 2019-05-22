<template>
  <header>
    <div class="container">
      <h1>
        <saber-link to="/">
          Max' Blog
        </saber-link>
      </h1>
      <div class="links">
        <a href="https://github.com/krmax44">
          <img src="../assets/images/github.svg" />
        </a>
        <a href="https://twitter.com/krmax44">
          <img src="../assets/images/twitter.svg" />
        </a>
        <a :href="$feed.permalink || '#!'">
          <img src="../assets/images/rss.svg" />
        </a>
        <a href="mailto:hi@krmax44.de">
          <img src="../assets/images/mail.svg" />
        </a>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

header {
  display: flex;
  flex: 0;
  width: 100%;
  min-height: 200px;

  .container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .links {
    text-align: right;

    a {
      margin: 0 20px;
    }
  }

  h1 {
    margin: 0;
    flex: 1;
    font-size: 2em;
  }

  a {
    color: $accent;
    text-decoration: none;
  }

  img {
    height: 2em;
    filter: invert(1);

    @media (max-width: $breakpoint-lg) {
      height: 1.5em;
    }

    & > path {
      fill: $dark;
    }
  }
}

@media (max-width: $breakpoint-lg) {
  header {
    .container {
      flex-direction: column;
      text-align: center;
      padding-top: 20px;
    }

    .links {
      text-align: center;
      margin-top: 20px;
    }
  }
}

@media (min-width: $breakpoint-lg) {
  header .links {
    a:last-child {
      margin-right: 0;
    }
  }
}
</style>
