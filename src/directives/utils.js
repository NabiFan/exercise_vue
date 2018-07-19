import Vue from 'vue';

Vue.directive('inputFocus', {
  inserted: (el) => {
    el.getElementsByTagName('input')[0].focus();
  },
});