<template>
  <v-row justify="center">
    <v-col cols="12" md="4">
      <v-textarea
        name="input-7-1"
        label="お問い合わせ内容"
        v-model="description"
        :counter="200"
        rows="10"
        color="#009688"
        required
      ></v-textarea>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'Description',
  components: {},
  data: function() {
    return {}
  },
}
</script>
