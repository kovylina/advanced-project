<template lang="pug">
  .skills__row(v-if="editmode === false")
    .skills__cell {{skill.title}}
    .skills__cell 
      span {{skill.percent}}%
    .skills__cell 
      button().skills_button Удалить
  .skills__row(v-else)
    .skills__cell 
      input(type="text" class="skills__input" v-model="newSkill.title")
    .skills__cell 
      input(type="text" class="skills__input" v-model="newSkill.percents") 
      span %
    .skills__cell 
      button(@click="addSkill").skills_button Добавить  
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    editmode: {
      type: Boolean,
      default: false
    },
    typeId: {
      type: Number,
      default: 0
    },
    skill: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      newSkill: {
        title: "",
        percents: "",
        category: this.typeId
      }
    };
  },
  methods: {
    ...mapActions(["addNewSkill"]),
    addSkill() {
      this.addNewSkill(this.newSkill);
    }
  }
};
</script>

<style lang="scss">
.skills__row {
  display: flex;
}

.skills__cell {
  display: flex;
  padding: 5px 10px;
  width: 30%;
  align-items: center;
}

.skills__input {
  padding: 10px 15px;
  border-radius: 5px;
  border: none;
  width: 100%;
  margin-right: 5px;
}

.skills_button {
  border-radius: 5px;
  border: none;
  background-color: $green;
  color: #fff;
  cursor: pointer;
  width: 120px;
  height: 40px;
  text-align: center;

  &:hover {
    background-color: $darkgreen;
  }
}
</style>

