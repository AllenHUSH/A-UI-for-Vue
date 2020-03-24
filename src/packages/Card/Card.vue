<template>
  <div class="a-card" :class="{canHover:canHover}">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "ACard",
  props: {
    canHover: {
      type: Boolean,
      default: false
    }
  }
};
</script>