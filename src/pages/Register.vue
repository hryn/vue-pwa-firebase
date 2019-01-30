<template>
  <div>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12>
          <v-card flat>
            <v-toolbar dark color="primary" flat>
              <v-toolbar-title>Register</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <center>
                <v-avatar
                  size="60px"
                  color="secondary"
                >
                  <img :src="avatar" alt="avatar">
                </v-avatar>
              </center>

              <v-form>
                <v-text-field prepend-icon="people" v-model="name" label="Name" type="text"></v-text-field>
                <v-text-field prepend-icon="mail" v-model="email" label="Email" type="email"></v-text-field>
                <v-text-field prepend-icon="lock" v-model="password" label="Password" id="password" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="register" color="primary">Register</v-btn>
            </v-card-actions>
            <p>Sudah punya akun? Login <router-link to="/login">di sini</router-link>.</p>
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
        password: '',
        name: ''
      }
    },
    mounted () {
      this.$store.dispatch('GET_RANDOM_IMAGE')
    },
    computed: {
      avatar() {
        return this.$store.state.randomImage
      }
    },
    methods: {
      register: function(){
        const that = this;
        firebase.auth().createUserWithEmailAndPassword(that.email, that.password)
        .then(
          function (user) {
            firebase.auth().currentUser.updateProfile({
              displayName: that.name,
              photoURL: that.avatar
            }).then(function() {
              console.log("Sukses update profile")
            })

            alert('Sukses membuat akun')
            that.$router.push('/login')
          },
          function (err) {
            alert(err.message)
          }
        );
      }
    }
  }
</script>