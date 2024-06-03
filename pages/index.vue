<template>

  <div class="flex items-center justify-center h-screen gap-6">
    <button class="bg-blue-950 hover:bg-blue-900 p-2 rounded text-white" @click="mostrarMensaje('Hola que tal estamos')">Botón 1</button>
    <button class="bg-blue-950 hover:bg-blue-900 p-2 rounded text-white" @click="mostrarMensaje('Esta es una notificacion bon dia')">Botón 2</button>
    <button class="bg-blue-950 hover:bg-blue-900 p-2 rounded text-white" @click="mostrarMensaje('Que te cuentas bro esto es una prueba')">Botón 3</button>
    <button class="bg-blue-950 hover:bg-blue-900 p-2 rounded text-white" @click="mostrarMensaje('Bon del dia broder')">Botón 4</button>
  </div>

</template>



<script>
/*
import useMessage from '../composables/notifyComposable.js';

export default {
  setup() {
    const { mostrarMensaje } = useMessage();
    return {
      mostrarMensaje,
    };
  },
};
*/
</script>