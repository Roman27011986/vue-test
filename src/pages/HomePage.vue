<template>
  <Container>
    <ApartmentFilterForm class="form" @submit="filter" />
    <h2 class="title">Подборка согласно выбора</h2>
    <ApartmentsList :items="filteredApartments">
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :id="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
          class="apartments-list__item"
        />
      </template>
    </ApartmentsList>
  </Container>
</template>

<script>
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentFilterForm from "../components/apartment/ApartmentFilterForm.vue";
import Container from "../components/shared/Container.vue";
import { getApartmentsList } from "../services/apartments.service";

export default {
  name: "App",
  components: {
    ApartmentsList,
    ApartmentsItem,
    ApartmentFilterForm,
    Container,
  },
  data() {
    return {
      apartments: [],
      filters: {
        city: "",
        price: 0,
      },
    };
  },
  computed: {
    filteredApartments() {
      // const reqObject = JSON.parse(JSON.stringify(this.apartments));
      return this.filterByCityName(this.filterByPrice(this.apartments));
    },
  },

  async created() {
    try {
      const { data } = await getApartmentsList();
      this.apartments = data;
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    filter({ city, price }) {
      if (price || city) {
        this.filters.city = city;
        this.filters.price = price;
      }
    },

    filterByCityName(apartments) {
      if (!this.filters.city) return apartments;

      return apartments.filter((apartment) => {
        return apartment.location.city === this.filters.city;
      });
    },

    filterByPrice(apartments) {
      if (!this.filters.price) return apartments;

      return apartments.filter((apartment) => {
        return apartment.price >= this.filters.price;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;
  margin-bottom: 60px;
}
.title {
  margin-bottom: 20px;
}
</style>
