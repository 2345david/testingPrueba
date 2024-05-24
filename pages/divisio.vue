<template>

  <h1>{{text}}</h1>

</template>

<script>
export default {
  name: 'divisio',
  mounted:{
    division(a, b){
      return a / b
    }
  },
  computed:{
    text(){
      return 'El resultado de la division es ' + this.division(12, 2)
    }
  }
}
</script>