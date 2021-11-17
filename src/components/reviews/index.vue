<template>
  <section class="reviews">
    <div class="reviews__heading">
      <h2 class="reviews__title">Суммарный рейтинг</h2>
      <div class="reviews__rating">
        <span>{{ amountOfReviews }} отзывa(ов)</span>
        <Rating :rating="totalRating" />
      </div>
    </div>
    <ReviewItem
      v-for="review in currentReviews"
      :key="review.author"
      :review="review"
    />
    <button @click="toggleReviews" class="reviews__show-more">
      {{ btnText }}
    </button>
  </section>
</template>

<script>
import ReviewItem from "./reviews-item";
import Rating from "../StarRating.vue";
export default {
  name: "Reviews",

  components: {
    ReviewItem,
    Rating,
  },

  props: {
    reviews: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      reviewsLimit: 2,
    };
  },

  computed: {
    totalRating() {
      const total = this.reviews.reduce(
        (acc, review) => acc + review.rating,
        0
      );
      return total / this.reviews.length;
    },

    amountOfReviews() {
      return this.reviews.length;
    },

    currentReviews() {
      return this.reviews.slice(0, this.reviewsLimit);
    },

    btnText() {
      return this.reviewsLimit === this.reviews.length
        ? "Свернуть"
        : "Читать еще...";
    },
  },

  methods: {
    toggleReviews() {
      if (this.reviewsLimit === this.reviews.length) {
        this.reviewsLimit = 2;
        return;
      }
      this.reviewsLimit = this.reviews.length;
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews {
  margin-left: 30px;
  &__heading {
    padding: 20px;
    background-color: #e1efff;
  }
  &__show-more {
    background: none;
    border: none;
    cursor: pointer;
    width: 100%;
    padding: 12px;
    font-family: inherit;
  }
  &__title {
    font-size: 25px;
    font-weight: 600;
  }
  &__rating {
    display: flex;
    justify-content: space-between;
  }
}
</style>
