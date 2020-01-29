<template>
 
</template>
<script src="https://use.fontawesome.com/9c22f31f23.js"></script>
<style>
body{
  background-color:white;
  color: black;
}
</style>

<script>

import { freeSet } from '@coreui/icons'
export default {
  name: 'Dashboard',
  components: {
  },
data()
{

  return{
    
  }
}
,
  mounted()
  {

    var urlParams = new URLSearchParams(window.location.search);

var v=urlParams.has('id');
    

if(v==false)
{
  
//alert('s')
   
    window.location.href = '/#/login'
      
}

  },
 
  methods: {
  }
}
</script>
