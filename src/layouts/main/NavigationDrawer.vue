<script setup lang="ts">
import routeList from "@/router/modules";
import { appStore } from "@/store/app/app";
const useApp = appStore();
const { drawerOpen } = storeToRefs(useApp);
const routeVList = routeList.map((item: Router.RouterCustomRaw) => {
  return {
    title: item.meta?.title,
    icon: item.meta?.icon,
    link: item.path,
    children: item.children?.map((_item: Router.RouterCustomRaw) => {
      return {
        title: _item.meta?.title,
        icon: _item.meta?.icon,
        link: _item.path,
      };
    }),
  };
});
console.log(routeVList);
</script>
<template>
  <v-navigation-drawer v-model="drawerOpen" elevation="2">
    <v-list class="sf-list">
      <v-list-item
        prepend-avatar="http://q1.qlogo.cn/g?b=qq&nk=942391953&s=640"
        title="骚风"
        subtitle="942391953@qq.com"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list nav color="primary">
      <template v-for="(item, index) in routeVList" ::key="index">
        <v-list-subheader>{{ item.title }}</v-list-subheader>
        <v-list-item
          nav
          v-for="child in item.children"
          :key="child.link"
          :to="child.link"
          :prepend-icon="child.icon"
          :title="child.title"
          density="compact"
        />
      </template>
    </v-list>
    <template v-slot:append>
      <v-card theme="dark" class="pa-3" variant="text">
        <v-card class="pa-2">
          <v-card-title>
            <v-btn icon>
              <v-icon icon="mdi-github" size="36"></v-icon>
            </v-btn>
            <span class="text-h6 ml-2">Gang.S.M</span>
          </v-card-title>
          <v-card-text>
            <div><b>Github:</b></div>
            <div>github.com/saofeng-cyber</div>
          </v-card-text>
          <v-card-actions>
            <v-btn block prepend-icon="mdi-thumb-up-outline"> Star-Me </v-btn>
          </v-card-actions>
        </v-card>
      </v-card>
    </template>
  </v-navigation-drawer>
</template>
<style scoped lang="scss">
.v-list-item--active {
  border-radius: 0;
  border-right: 5px solid;
  border-image: linear-gradient(to bottom, rgb(var(--v-theme-primary)), #a4abbb)
    5;
}
</style>
