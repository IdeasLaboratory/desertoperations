<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const user = reactive({ pseudo: "", password: "" });
const validate = () => {
  router.push("/home");
};
</script>

<template>
  <div class="d-flex justify-center align-center vh-100">
    <div>
      <h1>Desert operations</h1>
      <v-form ref="form">
        <v-text-field
          v-model="user.pseudo"
          label="Pseudo"
          required
          variant="outlined"
          class="w-100"
        />

        <v-text-field
          v-model="user.password"
          label="Password"
          required
          variant="outlined"
          type="password"
          class="w-100"
        />

        <div class="d-flex flex-column">
          <v-btn class="mt-4" color="success" block @click="validate">
            Validate
          </v-btn>

          <v-btn class="mt-4" color="error" block> Cancel </v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>

<style scoped>
.vh-100 {
  height: 100vh;
}
</style>
