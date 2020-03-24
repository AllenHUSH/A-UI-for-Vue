<template>
  <button
    @click="handleClick"
    class="a-button"
    :class="[color,{hollow:hollow},size,{disabled:disabled}]"
  >
    <slot></slot>
  </button>
</template>
<script>
export default {
  name: "AButton",
  props: {
    color: {
      type: String,
      default: "fg"
    },
    hollow: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ""
    },
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