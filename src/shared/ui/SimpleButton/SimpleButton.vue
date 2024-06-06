<template>
  <button
      v-bind="$attrs"
      :class="[
      {'button-process': props.isProcess},
      {'button-small': props.small},
      {'button-rounded': props.rounded},
      {'button-disabled': props.disabled},
      'button',
      `button-${props.type}`,
    ]"
  >
    <SimpleSpinner v-if="props.isProcess"/>
    <template v-else>
      <slot />
    </template>
  </button>
</template>

<script setup>
import {SimpleSpinner} from "~/shared/ui/SimpleSpinner";

const props = defineProps({
  type: {
    type: String,
    default: 'primary',
  },
  small: Boolean,
  isProcess: Boolean,
  rounded: Boolean,
  disabled: Boolean,
})
</script>

<style lang="scss" scoped>
.button {
  height: 43px;
  min-height: 43px;
  font-size: 18px;
  line-height: 20px;
  font-weight: bold;
  border-radius: 8px;
  transition: .3s ease-in-out;
  width: 100%;
  cursor: pointer;
  border: none;
  padding: 3px 10px;
  overflow: hidden;
  position: relative;

  &-small {
    height: 20px;
    min-height: 20px;
    line-height: 12px;
    font-size: 10px;
    max-width: 80px;
  }

  &-rounded {
    border-radius: 20px;
  }

  &-process {
    pointer-events: none;
    opacity: .85;
    position: relative;
  }

  &-black {
    color: var(--black-color);
    background: var(--primary-color);
    @media only screen and (min-width: 1200px) {
      &:hover {
        background: var(--light-black-color);
      }
    }
  }

  &-primary {
    color: var(--white-color);
    background: var(--primary-color);

    @media only screen and (min-width: 1200px) {
      &:hover {
        transition: .7s ease-in-out;

        &:hover {
          opacity: .85;
        }
      }
    }
  }

  &-white {
    color: var(--black-color);
    background: var(--white-color);
    @media only screen and (min-width: 1200px) {
      &:hover {
        transition: .7s ease-in-out;

        &:hover {
          opacity: .85;
        }
      }
    }
  }

  &-secondary {
    border: 1.5px solid var(--black-color);
    color: var(--black-color);
    background: transparent;
    @media only screen and (min-width: 1200px) {
        transition: .7s ease-in-out;

        &:hover {
          opacity: .7;
        }
    }
  }

  &-disabled {
    opacity: 0.7;
    cursor: not-allowed !important;

    &:hover {
      opacity: 0.85;
    }
  }
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
