<template>
  <div>
    <h1>{{title}}</h1>

    <v-row>
      <v-col
        v-for="(data,i) in variavel"
        :key="i"
        cols="12"
        sm="4"
      >
        <content-muisic :cardid="i"  :cardInfo="data"></content-muisic>
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import contentMuisic from "../components/contentMuisic"
   

  export default {
    name: 'Home',
    data(){
      return{
        titlev: this.$store.state.title,
      }
    },
    computed:{
      contentMuisic(){
        return this.$store.state.cards
      },
      title(){
        return this.$store.getters.bigTitle
      },
      variavel(){
        return this.$store.state.varival
      }
    },
    components: {
      contentMuisic,
    },
    
    async created(){
      this.$store.dispatch("buscarEvents")
    }
    
  }
</script>
 