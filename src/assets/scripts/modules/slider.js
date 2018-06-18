import Vue from "vue";
import { thisExpression } from "babel-types";

const info = {
  template: "#slider-info",
  props: {
    work: Object
  }
};

const preview = {
  template: "#slider-preview",
  props: {
    work: Object
  }
};

const buttons = {
  template: "#slider-buttons",
  props: {
    works: Array,
    currentIndex: Number
  },
  methods: {
    slide(direction) {
      this.$emit("slide", direction);
    },
    getImage(direction) {
      const worksArray = [...this.works];

      switch (direction) {
        case "next":
          worksArray.push(worksArray[0]);
          worksArray.shift();
          break;
        case "prev":
          const lastItem = worksArray[worksArray.length - 1];
          worksArray.unshift(lastItem);
          worksArray.pop();
          break;
      }

      return worksArray[this.currentIndex];
    }
  }
};

new Vue({
  el: "#slider-component",
  components: {
    info,
    preview,
    buttons
  },
  data: {
    works: [],
    currentWork: {},
    currentIndex: 0
  },
  watch: {
    currentIndex(value) {
      const worksCount = this.works.length - 1;
      if (value > worksCount) this.currentIndex = 0;
      if (value < 0) this.currentIndex = worksCount;
      this.currentWork = this.works[this.currentIndex];
    }
  },
  created() {
    const data = require("../../../data/works.json");
    this.works = data;
    this.currentWork = this.works[0];
  },
  methods: {
    handleSlide(direction) {
      switch (direction) {
        case "next":
          this.currentIndex = this.currentIndex + 1;
          break;
        case "prev":
          this.currentIndex = this.currentIndex - 1;
          break;
      }
    }
  },
  template: "#slider"
});
