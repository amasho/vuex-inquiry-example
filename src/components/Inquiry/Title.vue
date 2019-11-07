<template>
  <v-row justify="center">
    <v-col cols="12" md="4">
      <v-text-field
        v-model="inputTitle"
        :counter="50"
        label="タイトル"
        color="#009688"
        required
        @input="updateTitle"
      ></v-text-field>
    </v-col>
  </v-row>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  name: 'Title',
  computed: {
    title() {
      return this.$store.state.newInquiry.title
    },
    ...mapState(title),
    inputTitle() {
      get () {
        return this.newInquiry.title
      },
      set (title) {
        this.input(value)
      }
    },
  },
  methods: {
    updateTitle(e) {
      this.$store.commit('updateTitle', e.target.value)
    },
  },
}
</script>
