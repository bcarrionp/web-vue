<template>
  <v-card
    class="mx-auto"
    max-width="800"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{cardInfo.title}}</v-card-title>
      <v-card-text>{{cardInfo.description}}</v-card-text>
    </v-img>
    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        PLAY
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        ADD        
      </v-btn>
      <v-btn>{{cardid}}</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
  export default {
    props:['cardid', 'cardInfo']
  }
</script>