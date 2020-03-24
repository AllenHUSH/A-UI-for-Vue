<template>
  <svg class="a-icon" :class="[{wider:(name=='M')||name=='W'}]" aria-hidden="true" v-show="name" >
    <use :xlink:href="'#a-i-'+name" />
  </svg>
</template>
<script>
export default {
    name:"AIcon",
    props:{
        name:String
    }
}
</script>