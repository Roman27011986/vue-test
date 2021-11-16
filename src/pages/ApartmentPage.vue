<template>
  <main>
    <Container>
      <div class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <ApartmentOwner
          class="apartment-page__owner"
          :owner="apartment.owner"
        />
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import apartments from "../components/apartment/apartmens";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentOwner from "../components/apartment/ApartmentOwner.vue";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentOwner,
  },
  computed: {
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.apartment-page__content {
  display: flex;
  align-items: flex-start;
}
.apartment-page__owner {
  min-width: 350px;
  margin-left: 30px;
}
</style>
