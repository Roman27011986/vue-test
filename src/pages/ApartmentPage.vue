<template>
  <main>
    <Container>
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentsMainInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviewsList" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import ApartmentsMainInfo from "../components/apartment/ApartmentsMainInfo.vue";
import ApartmentOwner from "../components/apartment/ApartmentOwner.vue";
import Reviews from "../components/reviews/index.vue";
import reviewsList from "../components/reviews/reviews.json";
import { getApartmentById } from "../services/apartments.service";

export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentsMainInfo,
    ApartmentOwner,
    Reviews,
  },

  data() {
    return {
      apartment: null,
    };
  },

  async created() {
    try {
      const { data } = await getApartmentById(this.$route.params.id);
      this.apartment = data;
    } catch (error) {
      console.log(error);
    }
  },
  computed: {
    reviewsList() {
      return reviewsList;
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
