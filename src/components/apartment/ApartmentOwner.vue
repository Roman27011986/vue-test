<template>
  <section class="apartment-owner">
    <h2 class="apartment-owner__title">Информация о владельце:</h2>
    <p class="apartment-owner__info">tel: {{ owner.phone }}</p>
    <p class="apartment-owner__info">email: {{ owner.email }}</p>
  </section>
</template>

<script>
export default {
  name: "ApartmentOwner",
  props: {
    owner: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-owner {
  padding: 20px;
  background: #e1efff;
  font-weight: 400;
  margin-bottom: 20px;
  &__title {
    font-weight: 600;
  }
}
</style>
