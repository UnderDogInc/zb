<template>
  <div class="card">
    <div class="card__content">
      <div class="card__photo">
        <slot name="photo" class="card__img"/>
      </div>
      <div class="card__info">
        <div class="card__name">
          <slot name="name"/>
        </div>
        <div class="card__contacts">
          <div class="card__contact">
            <b>email:</b>&nbsp;
            <slot name="email"/>
          </div>
          <div class="card__contact">
            <b>phone:</b>&nbsp; <slot name="phone"/>
          </div>
        </div>
        <div class="card__about">
          <div class="card__about-title">
            <b>О себе:</b>
          </div>
          <div class="card__about-text">
            <slot name="about"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
}

.card__content {
  display: flex;
  gap: 61px;
}

.card__photo {
  display: flex;
  flex-grow: 1;
  border: 1px solid var(--border-color);
  width: 100%;
  height: 100%;
  min-width: 424px;
  max-height: 286px;
}

.card__info {
  font-family: "Montserrat", sans-serif;
  text-align: left;
  color: var(--black-color);
}

.card__name {
  font-size: 16px;
  font-weight: 600;
  line-height: 22.4px;
  margin-bottom: 10px;
}

.card__contacts {
  margin-bottom: 20px;
}

.card__contact {
  font-size: 14px;
  font-weight: 400;
  line-height: 19.6px;

  &:not(:last-child) {
    margin-bottom: 10px;
  }

  b {
    font-weight: 600;
  }
}

.card__about-title {
  margin-bottom: 25px;
}

.card__about-text {
  font-size: 14px;
  font-weight: 400;
  line-height: 17.07px;
  color: var(--dark-grey-color);
}

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

@media (max-width: 1180px) {
  .card__content {
    flex-wrap: wrap;
  }

  .card__photo {
    min-width: auto;
    max-height: auto;
  }
}
</style>
