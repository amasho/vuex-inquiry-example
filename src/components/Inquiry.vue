<template>
  <v-container id="input-usage" fluid>
    <v-layout text-center wrap>
      <v-flex md12>
        <v-form v-model="valid">
          <Title :title="title" />
          <Description :title="description" />
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Title from '@/components/Inquiry/Title.vue'
import Description from '@/components/Inquiry/Description.vue'

export default {
  name: 'Inquiry',
  components: {
    Title,
    Description,
  },
  data: function() {
    return {
      valid: false,
      title: '',
      description: '',
    }
  },
}
</script>
