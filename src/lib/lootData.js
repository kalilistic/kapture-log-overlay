import TestLootData from "../constants/TestLootData";

export function AddTestLootData(context) {
  context.$store.commit("resetLog");
  TestLootData.forEach(function(entry) {
    context.$store.commit("updateLog", parseLootData(entry));
  });
  context.$router.push("/log").then(() => {});
}

export function parseLootData(data) {
  return {
    type: data["message"]["kaptureEvent"]["eventType"],
    message: data["message"]["logMessage"]
  };
}
