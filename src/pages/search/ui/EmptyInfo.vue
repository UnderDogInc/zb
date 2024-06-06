<template>
  <div class="card__empty">
    <p class="card__empty-message">
      <slot name="content"/>
    </p>
  </div>
</template>

<style lang="scss" scoped>
.card__empty {
  display: flex;
  width: 100%;
  height: 100%;
  min-width: 100%;
}

.card__empty-message {
  margin: auto;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  text-align: left;
  color: #76787D;
}
</style>
