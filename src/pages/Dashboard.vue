<template>
  <v-layout column>
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat color="secondary">
            <div class="header-profile">
              <v-avatar
                size="60px"
                color="secondary"
              >
                <img :src="profile.avatar" alt="avatar">
              </v-avatar>

              <div class="right-profile">
                <h3>{{ profile.name }}</h3>
                <v-btn small outline color="primary" @click="logout">Logout</v-btn>
              </div>
            </div>
          </v-card>

          <v-card>
            <v-container
              fluid
              grid-list-lg
            >
              <v-layout row wrap>
                <v-flex xs12 v-for="post in this.$root.post" :key="post['.key']">
                  <v-card color="cyan darken-2" class="white--text">
                    <v-container fluid grid-list-lg>
                      <v-layout row>
                        <v-flex xs7>
                          <div>
                            <div class="headline">{{ post.title }}</div>
                            <div>{{ post.description }}</div>
                          </div>
                          <v-card-actions>
                            <v-btn flat dark small @click="remove(post)">Delete</v-btn>
                          </v-card-actions>
                        </v-flex>
                        <v-flex xs5>
                          <v-card-media
                            :src="post.url"
                            height="125px"
                            contain
                          ></v-card-media>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card>
                </v-flex>
              </v-layout>
            </v-container>

            <v-btn
              color="pink"
              dark
              absolute
              top
              right
              fab
              @click="add"
            >
              <v-icon>add</v-icon>
            </v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
  import firebase from 'firebase'

  export default {
    data: () => ({
      
    }),
    mounted () {
    },
    methods: {
      logout: function () {
        const that = this;
        firebase.auth().signOut()
        .then(() => {
          that.$router.push('/login');
        })
      },
      add: function() {
        this.$router.push('/add')
      },
      remove: function(post) {
        this.$root.$firebaseRefs.post.child(post['.key']).remove()
        .then(() => {
          alert("Berhasil menghapus data")
        })
      }
    },
    computed: {
      profile() {
        let profile = firebase.auth().currentUser;
        return { name: profile.displayName, avatar: profile.photoURL };
      }
    }
  }

</script>

<style scoped>
  .header-profile {
    height: 100px;
    padding: 20px;
  }
  .avatar{
    margin: 5px;
  }

  .right-profile{
    display: inline-block;
    margin: 5px;
    vertical-align: middle;
  }
  
  .right-profile h3{
    margin: 0 8px;
  }

  .right-profile .btn{
    text-transform: none!important;
  }
</style>