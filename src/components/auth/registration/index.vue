<template>
  <AuthContainer class="registration">
    <Title class="registration__title">Регистрация</Title>
    <Form ref="form" class="registration__form" @submit.prevent="handleSubmit">
      <CustomInput
        v-model="formData.name"
        name="name"
        placeholder="Name"
        :rules="nameRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.email"
        name="email"
        placeholder="Email"
        :rules="emailRules"
        class="registration__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        placeholder="Password"
        type="password"
        class="registration__input"
        :rules="passwordRules"
      />
      <CustomInput
        v-model="formData.confirmPassword"
        name="password"
        placeholder="Confirm password"
        type="password"
        class="registration__input"
        :rules="confirmPassword"
      />
      <Btn type="submit" class="registration__btn" :loading="loading"
        >Регистрация</Btn
      >
    </Form>
  </AuthContainer>
</template>

<script>
import Form from "../../shared/form/index.vue";
import CustomInput from "../../shared/CustomInput.vue";
import Btn from "../../shared/Button.vue";
import AuthContainer from "../../auth/AuthContainer.vue";
import Title from "../../shared/MainTitle.vue";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../../utils/validationRules";
import { mapActions } from "vuex";
export default {
  name: "Registration",
  components: {
    Form,
    CustomInput,
    Btn,
    AuthContainer,
    Title,
  },

  data() {
    return {
      loading: false,
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },

  methods: {
    ...mapActions("auth", ["registerUser"]),
    async handleSubmit() {
      const { name, email, password } = this.formData;
      try {
        this.loading = true;
        await this.registerUser({
          name,
          email,
          password,
        });

        this.$router.push({ name: "homepage" });
        console.log(this.$store.state);
      } catch (error) {
        console.log(error);
      } finally {
        this.loading = false;
      }
    },
  },

  mounted() {
    console.log(this.$refs.form);
  },

  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    nameRules() {
      return [this.rules.isRequired];
    },

    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Пароли не совпадают",
        }),
      ];
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
