<template>
  <div class="">
    <v-navigation-drawer
      temporary
      v-model="drawerRight"
      right
      app
    >
      <v-list dense>
        <v-list-tile @click.stop="right = !right">
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Logout</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar
      color="blue-grey"
      dark
      fixed
      app
      clipped-right
    >
      <router-link to="/">
        <v-toolbar-title>MileMaker</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn v-if="!userId" flat to="/login">Login</v-btn>
        <v-btn flat to="/links">Links</v-btn>
        <v-btn flat v-if="userId" to="/create">Submit</v-btn>
      </v-toolbar-items>
      <div v-if="userId">
        <v-toolbar-side-icon @click.stop="drawerRight = !drawerRight"></v-toolbar-side-icon>
      </div>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <v-flex shrink>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer color="blue-grey" class="white--text" app>
      <span>MileMaker</span>
      <v-spacer></v-spacer>
      <span>&copy; 2018</span>
    </v-footer>

  </div>
</template>

<style>
  .router-link-exact-active {

  }
</style>

<script>
  export default {
    data: () => ({
      drawerRight: false,
      right: null,
      left: null
    }),
    computed: {
      userId () {
        return this.$root.$data.userId
      }
    },
    methods: {
      logout () {
        localStorage.removeItem(GC_USER_ID)
        localStorage.removeItem(GC_AUTH_TOKEN)
        this.$root.$data.userId = localStorage.getItem(GC_USER_ID)
      }
    }
  }
</script>
