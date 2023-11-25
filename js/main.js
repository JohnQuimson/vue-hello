'use strict ';

const { createApp, ref } = Vue;

createApp({
  setup() {
    return {
      titolo: `Primo approccio con VueJS`,
    };
  },
}).mount('#app');
