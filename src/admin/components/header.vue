<template lang="pug">
  #header
    .admin-header
      .admin-header__col
        h2.admin-header__title Панель администрирования
      .admin-header__col
        a(href="/", class="admin-header__exit") Вернуться на сайт
</template>

<style lang="scss" scoped>
.admin-header {
  background: $green;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  height: 100%;
  padding: 0 30px;
}

.admin-header__title {
  color: #fff;
  font-size: 28px;
  font-weight: 500;
}

.admin-header__exit {
  color: #fff;
  opacity: 0.8;
}
</style>