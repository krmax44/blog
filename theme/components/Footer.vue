<template>
  <footer class="container">
    <div class="logo">
      <img src="../assets/images/logo.svg" alt="Logo" />
    </div>
    <div class="info">
      <saber-link to="/imprint">
        Imprint
      </saber-link>
      <saber-link to="/privacy">
        Privacy Policy
      </saber-link>
      <span>&copy; {{ new Date().getFullYear() }} krmax44</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';

footer {
  display: flex;
  flex: 0;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 50px 10px;

  .logo img {
    width: 60px;
    height: auto;
  }

  .info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;
    padding: 5px;
  }

  a,
  span {
    color: #fff;
    margin: 0 20px;
  }

  span {
    color: rgba(255, 255, 255, 0.7);
  }
}

@media (max-width: $breakpoint-sm) {
  footer {
    flex-direction: column;
    text-align: center;
    padding-bottom: 30px;

    span {
      margin-bottom: 10px;
    }

    .info {
      flex-direction: column;
    }

    a {
      margin: 3px 10px;
    }

    span {
      margin: 10px 10px;
    }
  }
}

@media (min-width: $breakpoint-sm) {
  footer a:last-of-type {
    margin-right: 0;
  }
}
</style>
