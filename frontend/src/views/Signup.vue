<template>
  <v-app>
    <v-card width="400px"
      class="mx-auto mt-5"
    >
      <!-- <UserFormCard /> -->

      <v-card-text>
        <v-form
          ref="form"
          v-model="isValid"
        >
          <user-form-name
            :name.sync="params.user.name"
          />
          <user-form-email
            :email.sync="params.user.email"
          />
          <user-form-password
            :password.sync="params.user.password"
          />

          <v-card-actions>
            <v-row justify="center">
              <v-btn
                class="info"
                color="white"
                :disabled="!isValid || loading"
                :loading="loading"
                @click="signUp"
              >
                新規登録
              </v-btn>
            </v-row>
          </v-card-actions>

        </v-form>
        <v-card-text>
          {{ params }}
        </v-card-text>
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
  components: { UserFormEmail, UserFormPassword, UserFormName, UserFormCard },

  data() {
    return {
      isValid: false,
      loading: false,
      params: { user: { name: '', email: '', password: '' } }
    };
  },
  methods: {
    signUp() {
      this.loading = true
      setTimeout(() => {
        this.formReset()
        this.loading = false
      }, 1500)
    },
    formReset () {
      this.$refs.form.reset()
      this.params = { user: { name: '', email: '', password: '' } }
    }
  }
}
</script>

