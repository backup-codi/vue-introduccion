new Vue({
  el: '#app',
  data() {
    return {
      title: '',
      time: 0,
      takenCourses: [],
      isValid: true,
    };
  },
  computed: {
    totalTime() {
      let total = 0;
      this.takenCourses.map((c) => {
        total = total + parseInt(c.time);
      });
      return total;
    },
  },

  methods: {
    addCourse() {
      const newCourse = { title: this.title, time: this.time };
      if (this.title === '' || this.time === 0) {
        this.isValid = false;
        return;
      }
      this.isValid = true;
      this.takenCourses.push(newCourse);
      this.title = '';
      this.time = 0;
    },
  },
});
