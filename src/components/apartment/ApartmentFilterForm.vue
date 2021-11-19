<template>
  <form @submit.prevent="handleSubmit">
    <CustomSelect :items="cities" v-model="city" />
    <CustomInput
      placeholder="Цена, от"
      class="select"
      v-model="price"
      v-bind="$attrs"
      error-message="Не должно быть пустым"
      :rules="rules"
    />
    <SubmitBtn type="submit" class="btn">Подбор жилья</SubmitBtn>
  </form>
</template>

<script>
import CustomSelect from "../../components/shared/CustomSelect.vue";
import CustomInput from "../../components/shared/CustomInput.vue";
import SubmitBtn from "../../components/shared/Button.vue";
import { isRequired, charLimit } from "../../utils/validationRules";

export default {
  components: {
    CustomSelect,
    CustomInput,
    SubmitBtn,
  },

  data() {
    return {
      price: "",
      city: "",
    };
  },
  computed: {
    rules() {
      return [isRequired, charLimit(10)];
    },
    cities() {
      return [
        { value: "", label: "Город", selected: true },
        "Mariupol",
        "Kiev",
        "Kharkiv",
        "Donetsk",
        "Odessa",
      ];
    },
  },
  methods: {
    handleSubmit() {
      this.$emit("submit", {
        city: this.city,
        price: this.price,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  margin-left: auto;
  padding: 0 40px;
}

.select {
  margin-left: 50px;
}
</style>
