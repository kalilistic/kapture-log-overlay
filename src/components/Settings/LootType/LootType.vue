<!--suppress HtmlFormInputWithoutLabel -->
<template>
  <v-content>
    <ColorPicker
      label="settings.row-color-add-loot"
      v-bind:initial-color="settings.rowColorAddLoot"
      @change="settings.rowColorAddLoot = $event"
    />
    <ColorPicker
      label="settings.row-color-greed-loot"
      v-bind:initial-color="settings.rowColorGreedLoot"
      @change="settings.rowColorGreedLoot = $event"
    />
    <ColorPicker
      label="settings.row-color-need-loot"
      v-bind:initial-color="settings.rowColorNeedLoot"
      @change="settings.rowColorNeedLoot = $event"
    />
    <ColorPicker
      label="settings.row-color-cast-loot"
      v-bind:initial-color="settings.rowColorCastLoot"
      @change="settings.rowColorCastLoot = $event"
    />
    <ColorPicker
      label="settings.row-color-obtain-loot"
      v-bind:initial-color="settings.rowColorObtainLoot"
      @change="settings.rowColorObtainLoot = $event"
    />
    <ColorPicker
      label="settings.row-color-lost-loot"
      v-bind:initial-color="settings.rowColorLostLoot"
      @change="settings.rowColorLostLoot = $event"
    />
    <SettingButtons @reset="reset" @update="update" />
  </v-content>
</template>

<script>
import SettingButtons from "../../Common/SettingButtons";
import ColorPicker from "../../Common/ColorPicker";

export default {
  name: "PercentBarRole",
  components: { ColorPicker, SettingButtons },
  data() {
    return {
      settings: {
        rowColorAddLoot: this.$store.state.settings.rowColorAddLoot,
        rowColorGreedLoot: this.$store.state.settings.rowColorGreedLoot,
        rowColorNeedLoot: this.$store.state.settings.rowColorNeedLoot,
        rowColorCastLoot: this.$store.state.settings.rowColorCastLoot,
        rowColorObtainLoot: this.$store.state.settings.rowColorObtainLoot,
        rowColorLostLoot: this.$store.state.settings.rowColorLostLoot
      }
    };
  },
  methods: {
    reset() {
      this.$emit("reset", this.settings);
    },
    update() {
      this.$emit("update", this.settings);
    }
  }
};
</script>
