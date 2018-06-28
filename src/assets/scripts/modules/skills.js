import Vue from "vue";

const skill = {
  template: "#skill",
  props: {
    skillName: String,
    skillPercent: Number
  },
  methods: {
    drawCircle() {
      const circle = this.$refs["color-circle"];
      const dashOffset = parseInt(
        getComputedStyle(circle).getPropertyValue("stroke-dashoffset")
      );
      const percents = (dashOffset / 100) * (100 - this.skillPercent);
      circle.style.strokeDashoffset = percents;
    },
    handleScroll(event) {
      const height = document.documentElement.clientHeight / 2;
      const skillList = document.querySelector(".skills-list");

      if (height > skillList.getBoundingClientRect().top) {
        this.drawCircle();
        window.removeEventListener("scroll", this.handleScroll);
      }
    }
  },
  // mounted() {
  //   this.drawCircle();
  // }
  created: function() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed: function() {
    window.removeEventListener("scroll", this.handleScroll);
  }
};

const skillsRow = {
  template: "#skills-row",
  components: {
    skill
  },
  props: {
    skill: Object
  }
};

new Vue({
  el: "#skills-container",
  components: {
    skillsRow
  },
  data: {
    skills: {}
  },
  created() {
    const data = require("../../../data/skills.json");
    this.skills = data;
  },
  template: "#skills-list"
});
