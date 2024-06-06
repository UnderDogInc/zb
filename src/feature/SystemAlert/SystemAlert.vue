<template>
  <SimpleSnackbar
      :model-value="alert.isShow"
      :color="alert.color"
      :message="alert.message"
      location="bottom left"
      min-width="100"
      @update:model-value="hide"
  />
</template>
<script setup>
import { useSystemAlert } from './model/useSystemAlert.js'
import { SimpleSnackbar } from '../../shared/ui/SimpleSnackbar'
const {
  alert,
  hide
} = useSystemAlert()
</script>
