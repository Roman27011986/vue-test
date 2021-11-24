<template>
  <AuthContainer class="login">
    <Title class="login__title">Логин</Title>
    <Form ref="form" class="login__form" @submit.prevent="handleSubmit">
      <CustomInput
        v-model="formData.email"
        name="email"
        placeholder="Email"
        :rules="emailRules"
        class="login__input"
      />
      <CustomInput
        v-model="formData.password"
        name="password"
        placeholder="Password"
        type="password"
        class="login__input"
        :rules="passwordRules"
      />
      <Btn type="submit" class="login__btn" :loading="loading">Вход</Btn>
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
  name: "Login",
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
        email: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions("auth", ["login"]),
    async handleSubmit() {
      try {
        this.loading = true;
        await this.login(this.formData);
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

    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired];
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
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
