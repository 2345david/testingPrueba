<template>
  <h1>{{text}}</h1>
</template>

<script>
export default {
  mounted:{
    calc(a, b){
      return a * b
    }
  },
  computed:{
    text(){
      return 'El resultado de la multiplicacion es ' + this.calc(8, 8)
    }
  }
}
</script>