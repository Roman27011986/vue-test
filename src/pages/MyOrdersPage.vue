<template>
  <main class="my-orders-page">
    <SectionWithHeaderSpacer>
      <Container>
        <section class="my-orders-page__content">
          <Title>Заказы</Title>
          <OrdersList :items="orders" />
        </section>
      </Container>
    </SectionWithHeaderSpacer>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import SectionWithHeaderSpacer from "../components/shared/SectionWithHeaderSpacer.vue";
import Title from "../components/shared/MainTitle.vue";
import OrdersList from "../components/my-orders/OrdersList.vue";
import { getOrders } from "../services/orders.service";
export default {
  name: "MyOrdersPage",
  components: {
    SectionWithHeaderSpacer,
    Container,
    Title,
    OrdersList,
  },
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    try {
      const { data } = await getOrders();
      this.orders = data;
    } catch (error) {
      console.log(error);
    }
  },
};
</script>

<style lang="scss" scoped>
.my-orders-page {
  &__content {
    max-width: 730px;
    margin: 0 auto 100px;
  }
}
</style>
