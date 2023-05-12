<script setup lang="ts">
import ScaleCard from './components/ScaleCard.vue'

const items = ref([
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
    title: 'Brunch this weekend?',
    subtitle: '<span class="text-primary">Ali Connors</span> &mdash; I\'ll be in your neighborhood doing errands this weekend. Do you want to hang out?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
    title: 'Summer BBQ',
    subtitle: '<span class="text-primary">to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I\'m out of town this weekend.',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
    title: 'Oui oui',
    subtitle:
      '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider', inset: true },
  {
    prependAvatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
    title: 'Birthday gift',
    subtitle:
      '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
])
</script>

<template>
  <v-row dense>
    <v-col cols="12">
      <ScaleCard />
    </v-col>
    <v-col cols="12" md="6">
      <v-card variant="text" class="pa-2">
        <v-card>
          <v-card-title class="text-h5" style="font-weight: bold">
            Team Members
          </v-card-title>
          <v-list :items="items" item-props lines="three">
            <template #subtitle="{ subtitle }">
              <div class="d-flex justify-space-between align-center pa-1">
                <div class="mr-3" v-html="subtitle" />
                <v-btn variant="outlined" color="gray">
                  add
                </v-btn>
              </div>
            </template>
          </v-list>
        </v-card>
      </v-card>
    </v-col>
    <v-col cols="12" md="6">
      <v-card variant="text" class="pa-2">
        <v-card>
          <v-carousel
            cycle
            continuous
            interval="5000"
            hide-delimiters
            show-arrows="hover"
            height="360"
          >
            <v-carousel-item
              src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/img-2.2db028e3.jpg"
              cover
            />

            <v-carousel-item
              src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/img-1.9718dcd1.jpg"
              cover
            />

            <v-carousel-item
              src="https://demos.creative-tim.com/vue-argon-dashboard-pro/img/img-3.dfb45d4b.jpg"
              cover
            />
          </v-carousel>
        </v-card>
        <v-card-title> Top western road trips </v-card-title>
        <v-card-subtitle> 1,000 miles of wonder </v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped lang="scss"></style>
