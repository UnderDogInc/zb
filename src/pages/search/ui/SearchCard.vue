<template>
  <div class="card" :class="{'card--active': active}">
    <div class="card__photo">
      <img class="card__img" :alt="props.userData.username" src="../../../app/images/placeholder.svg">
    </div>
    <div class="card__info">
      <div class="card__name">
        {{ props.userData.username }}
      </div>
      <div class="card__email">
        {{ props.userData.email }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  userData: {
    type: Object,
    required: true
  },
  active: {
    type: Boolean,
    required: false
  }
})
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 0px 10px 0px #0000001A;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 10px 0px #00000033;
  }
}

.card__photo {
  border-right: 1px solid #E0E0E0;
  width: 70px;
  height: 70px;
}

.card__img {
  object-fit: contain;
  object-position: center;
}

.card__info {
  width: 100%;
  padding: 15px;
  font-size: 14px;
  line-height: 17.07px;
  text-align: left;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
}

.card--active {
  .card__info {
    background-color: #E0E0E0;
  }
}

.card__name,
.card__email {
  text-overflow: ellipsis;
  max-width: 100%;
  overflow: hidden;
}

.card__name {
  font-weight: 600;
  margin-bottom: 5px;
  color: #333333;
}

.card__email {
  font-weight: 400;
  color: #76787D;
}
</style>
