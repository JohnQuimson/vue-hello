'use strict ';

const { createApp, ref } = Vue;

createApp({
  setup() {
    return {
      titolo: `Primo approccio con VueJS`,
      foto: `https://images.unsplash.com/photo-1554744512-d6c603f27c54?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    };
  },
}).mount('#app');
