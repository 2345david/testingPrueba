<template>
  <h1>{{text}}</h1>

</template>

<script>
export default {
  methods:{
    rest(a, b){
      return a - b
    }
  },
  computed:{
    text(){
      return 'El resultado de la resta es ' + this.rest(20, 10)
    }
  }
}
</script>