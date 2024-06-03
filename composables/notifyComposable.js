import { ref } from 'vue';

const mensaje = ref('');

const mostrarMensaje = (texto) => {
    mensaje.value = texto;
    setTimeout(() => {
        mensaje.value = '';
    }, 3000);
};

export default function useMessage() {
    return {
        mensaje,
        mostrarMensaje,
    };
}