<template>
  <section class="reviews-item">
    <ReviewsHeading :rating="review.rating" :author="review.author" />
    <p class="reviews-item__content">{{ review.content }}</p>
  </section>
</template>

<script>
import ReviewsHeading from "./ReviewsHeading.vue";
export default {
  name: "ReviewsItem",
  components: {
    ReviewsHeading,
  },
  props: {
    review: {
      type: Object,
      reqoired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-item {
  border: 1px solid #e1efff;
  padding: 20px;
}
</style>
