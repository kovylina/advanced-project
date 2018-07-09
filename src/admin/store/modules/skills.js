const skills = {
  state: {
    data: []
  },
  actions: {
    addNewSkill(store, skill) {
      return this.$axios
        .post("/skills", skill)
        .then(response => {
          console.log("addskill", response);
        })
        .catch(e => console.error(e));
    }
  }
};

export default skills;
