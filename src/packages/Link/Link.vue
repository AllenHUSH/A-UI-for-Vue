<template>
  <a
    class="a-link"
    :class="[color,{disabled:disabled}]"
    @click="handleClick"
    :href="disabled ? null : href"
  >
    <slot></slot>
  </a>
</template>
<script>
export default {
  name: "ALink",
  props: {
    color: {
      type: String,
      default: "blue"
    },
    href:String,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      if (!this.disabled) {
        this.$emit("click", e);
      }
    }
  }
};
</script>