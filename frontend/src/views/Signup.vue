<template>
  <v-app>
    <v-card width="400px" class="mx-auto mt-5">
      <!-- <UserFormCard /> -->

      <v-card-text>
        <v-form>
          <UserFormName />
          <UserFormEmail />
          <UserFormPassword />

          <v-card-actions>
            <v-btn class="info" color="white">新規登録</v-btn>
          </v-card-actions>

        </v-form>

        <v-form v-model="isValid">
          <v-btn
            :disabled="!isValid"
            block
            color="blue"
          >
          登録する
          </v-btn>

        </v-form>
      </v-card-text>
    </v-card>
  </v-app>
</template>

<script>
import UserFormCard from '@/components/user/userFormCard.vue';
import UserFormEmail from '@/components/user/userFormEmail.vue';
import UserFormName from '@/components/user/userFormName.vue';
import UserFormPassword from '@/components/user/userFormPassword.vue';

export default {
    data() {
        return {
            isValid: false,
            params: { user: { name: "", email: "", password: "" } }
        };
    },
    methods: {
        signUp() { }
    },
    components: { UserFormEmail, UserFormPassword, UserFormName, UserFormCard }
}
</script>

