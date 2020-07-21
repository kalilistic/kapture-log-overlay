<template>
  <v-content class="log" :style="logStyle">
    <LootEntry
      v-for="(lootEntry, index) in log"
      v-bind:lootEntry="lootEntry"
      v-bind:index="index"
      v-bind:key="index"
    >
    </LootEntry>
  </v-content>
</template>

<script>
import LootEntry from "./LootEntry/LootEntry";

export default {
  name: "Log",
  components: {
    LootEntry
  },
  beforeRouteEnter: (to, from, next) => {
    next(vm => {
      if (vm.$store.getters.haveLootData) {
        next();
      } else {
        next("/");
      }
    });
  },
  computed: {
    log() {
      return this.$store.state.lootData.log;
    },
    logStyle() {
      return {
        display: this.$store.state.settings._mainDisplay,
        backgroundColor: this.$store.state.settings.backgroundColor
      };
    }
  }
};
</script>

<style scoped lang="scss">
.log {
  border-top: 0;
}
.detail-value {
  @extend .align-right;
  margin-right: 1.4em;
}
.v-list-item:first-child {
  font-weight: bold;
}
</style>
