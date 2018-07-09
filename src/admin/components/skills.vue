<template lang="pug">
  #about
    h2.about__title Страница &laquo;Обо мне&raquo;
    .skills-container
      skills-row(
        v-for="type in types"
        :key="type.name"
        :type="type"
        :skills="skills"
      )
</template>

<script>
import skillsRow from "./skillsRow";
export default {
  components: {
    skillsRow
  },
  props: {
    skills: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      types: [
        { id: 0, name: "Frontend" },
        { id: 1, name: "Backend" },
        { id: 2, name: "Workflow" }
      ]
    };
  }
};
</script>

<style>
.about__title {
  margin-bottom: 40px;
}

.skills-container {
  display: flex;
}
</style>
