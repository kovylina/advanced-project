<template lang="pug">
  #root
    .admin-panel
      .admin-panel__header
        appHeader
      .admin-panel__tabs
        tabs
      .admin-panel__content
        skills(:skills = "skills")
</template>

<script>
import title from "./components/header";
import tabs from "./components/tabs";
import skills from "./components/skills";

const data = [
  { id: 1, title: "Html", percent: 70, category: 0 },
  { id: 2, title: "PHP", percent: 10, category: 1 },
  { id: 3, title: "CSS", percent: 60, category: 0 },
  { id: 4, title: "Node.js", percent: 20, category: 1 },
  { id: 5, title: "Mongo", percent: 10, category: 1 },
  { id: 6, title: "Git", percent: 30, category: 2 },
  { id: 7, title: "Gulp", percent: 20, category: 2 }
];

export default {
  data() {
    return {
      skills: data
    };
  },
  components: {
    appHeader: title,
    tabs,
    skills
  }
};
</script>
<style lang="scss">
body,
html {
  margin: 0;
  height: 100%;
  font-family: "Roboto", Helvetica, sans-serif;
  font-size: 16px;
  color: $text-color;
  background-color: $white;
}

.wrapper {
  height: 100%;
}

#root {
  height: 100%;
  display: flex;
  flex-flow: column;
}

.admin-panel__header {
  height: 80px;
}

ul {
  padding: 0;
  margin: 0;

  li {
    list-style: none;
  }
}

* {
  box-sizing: border-box;
}

.admin-panel__tabs {
  height: 60px;
}

.admin-panel__content {
  flex: 1;
  padding: 20px;
}
</style>
