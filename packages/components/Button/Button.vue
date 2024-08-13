<!-- <script>
export default {
  name: "ErButton",
};
</script> -->
<script setup lang="ts">
import type { ButtonProps } from "./type";
import { ref } from "vue";

defineOptions({
  name: "ErButton",
});
const props = withDefaults(defineProps<ButtonProps>(), {
  tag: "button",
  nativeType: "button",
});

const solts = defineSlots();

const _ref = ref<HTMLButtonElement>();
</script>

<template>
  <component
    :is="props.tag"
    ref="_ref"
    :type="tag === 'button' ? nativeType : void 0"
    class="er-button"
    :disabled="disabled || loading ? true : void 0"
    :class="{
      [`er-button--${type}`]: type,
      [`er-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading,
    }"
  >
    <slot></slot>
  </component>
</template>

<style scoped>
@import "./style.css";
</style>
