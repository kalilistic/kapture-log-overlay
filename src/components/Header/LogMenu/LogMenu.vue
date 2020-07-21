<template>
  <v-menu bottom left class="log-menu">
    <template v-slot:activator="{ on }">
      <div
        class="log-menu-icon"
        :style="logMenuIconStyle"
        v-html="logMenuIcon"
        v-on="on"
      ></div>
    </template>
    <v-list class="log-menu-style" :style="logMenuStyle">
      <v-list-item
        class="log-menu-item"
        v-for="(menuItem, i) in menuItems"
        :key="i"
        @click="selectMenuItem(menuItem)"
      >
        <v-list-item-title :style="logMenuStyle">{{
          menuItem.title
        }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import { AddTestLootData } from "../../../lib/lootData";

export default {
  name: "LogMenu",
  computed: {
    menuItems() {
      return [
        { title: this.$t("actions.view-loot"), path: "/log" },
        { title: this.$t("actions.reset-loot"), path: "/" },
        {
          title: this.$t("actions.load-sample-data"),
          action: "loadSampleData",
          path: "/log"
        }
      ];
    },
    logMenuIcon() {
      return this.$store.getters.menuIcon;
    },
    logMenuStyle() {
      return {
        backgroundColor: this.$store.state.settings.backgroundColor,
        color: this.$store.state.settings.fontColor
      };
    },
    logMenuIconStyle() {
      return {
        fill: this.$store.state.settings.fontColor
      };
    }
  },
  methods: {
    selectMenuItem(menuItem) {
      if (menuItem.action) {
        eval("this." + menuItem.action + "()");
      }
      if (menuItem.path) {
        this.$store.commit("update", { collapsed: false });
        this.$router.push(menuItem.path);
      }
    },
    loadSampleData() {
      AddTestLootData(this);
    }
  }
};
</script>

<style scoped lang="scss">
.log-menu-style {
  @extend .no-spacing;
  padding: 0.8em 1.4em 0.8em 1.4em;
  font-size: 0.8rem;
}
.log-menu-icon {
  width: 1.4em;
}
.log-menu-item {
  @extend .no-spacing;
  min-height: 2em;
}
</style>
