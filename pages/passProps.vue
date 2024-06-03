<template>
  <div class="flex flex-col items-center justify-center h-screen bg-blue-950 gap-4">
    <div class="flex flex-col gap-4">
      <input v-model="num1" type="number" placeholder="Primer Numero" class="outline-none rounded-lg pt-3 pb-3 pr-3 pl-3 bg-blue-900 text-white placeholder-white"/>
      <input v-model="operator" type="text" placeholder="Operador" maxlength="1" class="outline-none rounded-lg pt-3 pb-3 pr-3 pl-3 bg-blue-900 text-white placeholder-white"/>
      <input v-model="num2" type="number" placeholder="Segundo Numero" class="outline-none rounded-lg pt-3 pb-3 pr-3 pl-3 bg-blue-900 text-white placeholder-white"/>
    </div>
    <div>
      <input v-model="result" type="text" placeholder="Resultado" readonly class="outline-none rounded-lg pt-3 pb-3 pr-3 pl-3 bg-blue-900 text-white placeholder-white"/>
    </div>
    <div>
      <button @click="calculate" class="border-2 text-white hover:bg-blue-900 rounded-lg pt-2 pb-2 pr-4 pl-4 transition duration-300">Calcular</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: '',
      num2: '',
      operator: '',
      result: ''
    };
  },
  methods: {
    calculate() {
      const number1 = parseFloat(this.num1);
      const number2 = parseFloat(this.num2);
      const op = this.operator;

      if (isNaN(number1) || isNaN(number2)) {
        this.result = 'Invalid input';
        return;
      }

      switch (op) {
        case '+':
          this.result = ('Resultado es: ' + (Number(number1) + Number(number2)))
          break;
        case '-':
          this.result = ('Resultado es: ' + (Number(number1) - Number(number2)))
          break;
        case '*':
          this.result = 'Resultado es: ' + number1 * number2;
          break;
        case '/':
          if (number1 === 0 || number2 === 0) {
            this.result = 'No puedes dividir entre 0';
          } else {
            this.result = 'Resultado es: ' + number1 / number2;
          }
          break;
        default:
          this.result = 'Invalid operator';
      }
    }
  }
};
</script>









<style>

input {
  width: 300px;
  font-size: 1rem;
  color: #333;
}

button {
  cursor: pointer;
}

button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
}
</style>