import type { Component, Ref } from "vue";

export type ButtonType = "primary" | "success" | "warning" | "dabger" | "info";
export type NativeType = "button" | "reset" | "submit";
export type NativeSize = "larg" | "medium" | "small";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: NativeSize;
  nativeType?: NativeType;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  circle?: boolean;
  plain?: boolean;
  round?: boolean;
  loadingIcon?: string;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}

export interface ButtonInstance {
  ref: Ref<HTMLButtonElement | void>;
}
