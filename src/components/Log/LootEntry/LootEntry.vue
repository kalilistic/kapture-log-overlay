<template>
  <div class="container">
    <div>
      <v-container>
        <v-flex class="info-container" :style="lootEntryStyle">
          <v-layout column>
            <v-flex class="left-info">
              {{ lootEntry.message }}
            </v-flex>
          </v-layout>
        </v-flex>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  name: "LootEntry",
  props: ["lootEntry"],
  computed: {
    message() {
      return this.lootEntry.message;
    },
    lootEntryStyle() {
      let backgroundColor;
      switch (this.lootEntry.type) {
        case "AddLoot":
          backgroundColor = this.$store.state.settings.rowColorAddLoot;
          break;
        case "GreedLoot":
          backgroundColor = this.$store.state.settings.rowColorGreedLoot;
          break;
        case "NeedLoot":
          backgroundColor = this.$store.state.settings.rowColorNeedLoot;
          break;
        case "ObtainLoot":
          backgroundColor = this.$store.state.settings.rowColorObtainLoot;
          break;
        case "LostLoot":
          backgroundColor = this.$store.state.settings.rowColorLostLoot;
          break;
        case "CastLoot":
          backgroundColor = this.$store.state.settings.rowColorCastLoot;
          break;
        default:
          backgroundColor = this.$store.state.settings.rowColorCastLoot;
      }
      return {
        backgroundColor: backgroundColor
      };
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  @extend .no-spacing;
  display: grid;
  max-width: none !important;
}
.left-info {
  @extend .label;
}
.info-container {
  display: flex;
  align-items: center;
  padding: 0.25em 0 0.25em 0.5em;
}
</style>
