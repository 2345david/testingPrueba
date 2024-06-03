<template>

  <div v-if="mensaje" class="animate-bounce flex flex-col border border-gray-950 bg-gray-800 bg-opacity-80 p-4 fixed top-8 right-6 text-gray-200 max-w-[400px] rounded-xl">
    {{ mensaje }}
  </div>

</template>



<script>

import useMessage from '../composables/notifyComposable.js';

export default {
  setup() {
    const { mensaje } = useMessage();
    return {
      mensaje,
    };
  },
};

</script>
