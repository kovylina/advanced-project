<template lang="pug">
  .skills
    .skills__title {{type.name}}
    .skills__table
      skills-item(
        v-for="skill in skills"
        :key="skill.id"
        :skill="skill"
      )
      skills-item(
        :editmode="true"
        :typeId="type.id"
      )      
</template>

<script>
import skillsItem from "./skillsItem";
export default {
  components: {
    skillsItem
  },
  props: {
    skills: {
      type: Array,
      default: () => []
    },
    type: {
      type: Object,
      default: () => ({
        id: 0,
        name: "Frontend"
      })
    }
  }
};
</script>

<style lang="scss">
.skills {
  display: flex;
  width: 30%;
  flex-direction: column;
  margin-right: 50px;
  flex-wrap: wrap;
  &:last-child {
    margin-right: 0;
  }
}

.skills__title {
  font-weight: 500;
}

.skills__table {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 10px;
}
</style>