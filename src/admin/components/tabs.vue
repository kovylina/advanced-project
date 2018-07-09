<template lang="pug">
  #tabs
    ul.tabs__list
      li.tabs__item(v-for="tab in tabs")
        a.tabs__link {{tab.title}}
</template>

<script>
export default {
  data() {
    return {
      tabs: [
        { title: "Обо мне", href: "/" },
        { title: "Работы", href: "/works" },
        { title: "Блог", href: "/blog" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.tabs__list {
  background: #f0efe9;
  display: flex;
}

.tabs__item {
  border-right: 2px solid #fff;
}

.tabs__link {
  width: 180px;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 500;
  cursor: pointer;
  padding: 25px 0;

  &:hover {
    color: $green;
    background: #fff;
  }
}

.tabs__link--active {
  color: $green;
  background: #fff;
}
</style>
