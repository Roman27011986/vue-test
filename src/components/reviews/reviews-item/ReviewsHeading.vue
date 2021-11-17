<template>
  <div class="reviews-heading">
    <RevieasAvatar />
    <div class="reviews-heading__content">
      <span class="reviews-heading__author">{{ author }}</span>
      <Rating :rating="rating" />
    </div>
  </div>
</template>

<script>
import Rating from "../../../components/StarRating.vue";
import RevieasAvatar from "./RevieasAvatar.vue";
export default {
  name: "ReviewsHeading",
  components: {
    Rating,
    RevieasAvatar,
  },
  props: {
    rating: {
      type: Number,
      default: 0,
    },
    author: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.reviews-heading {
  display: flex;
  margin-bottom: 20px;
  &__author {
    font-weight: 600;
  }
  &__content {
    display: flex;
    flex-direction: column;
    margin-left: 20px;
  }
}
</style>
