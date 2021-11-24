<template>
  <div class="account-actions" @mouseover="open" @mouseleave="close">
    <button @click="toggle" class="account-actions__btn">
      <span class="account-actions__text">профиль</span>
      <svg
        class="account-actions__icon"
        width="18 "
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 0C6.38286 0 4.25391 2.12896 4.25391 4.74609C4.25391 7.36323 6.38286 9.49219 9 9.49219C11.6171 9.49219 13.7461 7.36323 13.7461 4.74609C13.7461 2.12896 11.6171 0 9 0Z"
          fill="white"
        />
        <path
          d="M16.8216 14.0161C15.4028 11.8877 13.0282 10.6172 10.4708 10.6172H7.5292C4.9718 10.6172 2.5972 11.8877 1.17844 14.0161L1.08984 14.1489V18H16.9102H16.9102V14.1489L16.8216 14.0161Z"
          fill="white"
        />
      </svg>
    </button>
    <ul class="account-actions__list" v-show="isOpen">
      <li class="account-actions__item">
        <router-link :to="{ name: 'my-orders' }" class="account-actions__link"
          >Мои заказы</router-link
        >
      </li>
      <li class="account-actions__item">
        <button class="account-actions__logout" @click="logout">Выйти</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AccountActions",
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    ...mapActions("auth", ["logout"]),
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    },
    toggle() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";
.account-actions {
  position: relative;
  display: inline-flex;
  padding: 5px 0;
  color: #fff;

  &__btn {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    font-family: inherit;
    font-size: 16px;
    padding: 0;
    transition: color 0.4s;

    &:hover {
      color: $main-color;
    }
  }

  &__text {
    margin-right: 5px;
  }

  &__icon {
    transition: fill 0.4s;
    fill: currentColor;
    width: 16px;
    height: 18px;
  }

  &__list {
    position: absolute;
    right: 0;
    top: 100%;
    background: #fff;
    padding: 15px;
    color: #000;
    width: 150px;
    border: 1px solid $main-color;
  }

  &__item {
    margin-bottom: 5px;
    transition: color 0.4s;
    &:hover {
      color: $main-color;
    }
  }

  &__link {
    text-decoration: none;
    color: inherit;
  }

  &__logout {
    padding: 0;
    background: none;
    border: none;
    font-size: inherit;
    color: inherit;
    cursor: pointer;
  }
}
</style>
