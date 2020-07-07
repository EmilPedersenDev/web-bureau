<template>
  <button
    role="button"
    :type="type"
    :class="classList"
    :disabled="disabled"
    :tabindex="tabindex"
    @click="onClick"
  >
    <slot>default text</slot>
  </button>
</template>

<script>
export default {
  name: "st-button",

  props: {
    type: {
      type: String,
      default: "button",
      validator: function(type) {
        return ["submit", "button", "reset"].includes(type);
      }
    },
    disabled: {
      type: Boolean,
      default: false
    },
    tabindex: {
      type: String,
      default: "0"
    },
    primary: {
      type: Boolean,
      default: false
    },
    medium: {
      type: Boolean,
      default: false
    },
    large: {
      type: Boolean,
      default: false
    },
    block: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    classList: function() {
      return [
        "st-button",
        this.primary && "primary",
        this.large && "lg",
        this.medium && "md",
        this.block && "block"
      ];
    }
  },

  methods: {
    onClick: function(e) {
      if (this.type === "submit" || this.type === "reset") return;

      this.$emit("click", e);
    }
  }
};
</script>
<style lang="scss" scoped>
.st-button {
  background-color: #ffffff;
  transition: background-color 0.3s ease;

  padding: 0px 14px;
  height: 34px;

  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.71;
  letter-spacing: normal;
  text-align: center;
  color: #4d4845;

  &:hover:not(:disabled),
  &:focus {
    outline: none;
    background-color: #faf9f7;
    cursor: pointer;
  }

  &.primary {
    color: #fff;
    background-color: #373737;

    &:hover:not(:disabled),
    &:focus {
      background-color: #4b4a4a;
    }
  }

  &.md {
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1;
    letter-spacing: normal;
    height: 48px;
    margin-top: 18px;
    padding: 12px 32px;
    border-width: 2px;

    &:hover {
      border-width: 2px;
    }
  }

  &.lg {
    font-weight: 600;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.45;
    letter-spacing: normal;
    height: 48px;
    width: 155px;
    margin-top: 36px;
    padding: 6px 16px;
    border-width: 2px;

    &:hover {
      border-width: 2px;
    }
  }

  &.block {
    width: 100% !important;
  }

  &:disabled {
    opacity: 0.5;
  }
}

@media (min-width: 768px) {
  .st-button {
    &.sm {
      font-size: 16px;
      font-weight: 600;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.5;
      letter-spacing: normal;
      color: #4d4845;
    }
    &.md,
    &.lg {
      font-size: 18px;
    }

    &.lg {
      padding: 12px 32px;
      height: 64px;
      width: 240px;
    }
  }
}
</style>
