<template>

  <h1>{{text}}</h1>

</template>

<script>
export default {
  methods:{
    sum(a, b){
      return a + b
    }
  },
  computed:{
    text(){
      return 'El resultado de la suma es  ' + this.sum(3, 4);
    }

  }
}


</script>