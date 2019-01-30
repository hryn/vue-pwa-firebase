<template>
  <v-layout column>
    <v-flex xs12>
      <v-layout row wrap>
        <v-flex xs12>
          <v-card flat>
            <v-container
              fluid
              grid-list-lg
            >
              <v-card flat color="grey lighten-3">
                <v-card-media :src="randImage" height="300px" alt="Image"></v-card-media>
              </v-card>
              <form>
                <v-text-field
                  :counter="20"
                  label="Judul"
                  required
                  color="primary"
                  v-model="title"
                ></v-text-field>

                <v-text-field
                  label="Description"
                  required
                  v-model="description"
                ></v-text-field>
                
                <v-btn color="primary" @click="submit">Submit</v-btn>
                <v-btn>Cancel</v-btn>
              </form>
            </v-container>
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
      title: '',
      description: ''
    }),
    mounted () {
      this.$store.dispatch('GET_RANDOM_IMAGE')
    },
    computed: {
      randImage() {
        return this.$store.state.randomImage
      }
    },
    methods: {
      submit: function() {
        this.$root.$firebaseRefs.post.push(
        {
          'url': this.randImage,
          'title': this.title,
          'description': this.description,
          'author': 'Created by Arie',
          'created_at': new Date().getTime()
        })
        .then(this.$router.push('/dashboard'))
      },
      logout: function () {
        const that = this;
        firebase.auth().signOut()
        .then(() => {
          that.$router.push('/login');
        })
      },
      add: function() {
        this.$router.push('/add')
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