/* global addOverlayListener  */
/* global callOverlayHandler */
/* global startOverlayEvents */

import { log } from "./logger";
import { parseLootData } from "./lootData";

// eslint-disable-next-line no-unused-vars
export async function addLootDataListener(context) {
  log("adding lootData overlay listener");
  addOverlayListener("LootData", data => {
    log("raw lootData", data);
    let lootData = parseLootData(data);
    log("parsed lootData", lootData);
    context.$store.commit("updateLog", lootData);
    if (context.$router.currentRoute.path === "/") {
      context.$router.push("/log");
    }
  });
}

export async function getLanguageId() {
  let language = await callOverlayHandler({ call: "getLanguage" });
  return language.languageId;
}

export async function startOverlay() {
  log("starting overlay events");
  startOverlayEvents();
}
