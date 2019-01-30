<template>
  <div>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex>
          <v-card flat >
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" v-model="email" label="Login" type="email"></v-text-field>
                <v-text-field prepend-icon="lock" v-model="password" label="Password" id="password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="login" color="primary">Connect</v-btn>
            </v-card-actions>
            <p>Tidak punya akun? Daftar <router-link to="/register">di sini</router-link>.</p>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
  </div>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      login: function() {
        const that = this;
        firebase.auth().signInWithEmailAndPassword(that.email, that.password)
        .then(
          function (user) {
            alert('Connected!')
            that.$router.push('/dashboard')
          },
          function (err) {
            alert(err.message)
          }
        );
      }
    }
  }
</script>