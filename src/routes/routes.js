import Default from "../components/Default/Default";
import Log from "../components/Log/Log";
import Settings from "../components/Settings/Settings";
import General from "../components/Settings/General/General";
import Advanced from "../components/Settings/Advanced/Advanced";
import LootType from "../components/Settings/LootType/LootType";

const routes = [
  {
    path: "/",
    component: Default
  },
  {
    path: "/log",
    component: Log
  },
  {
    path: "/settings",
    component: Settings,
    children: [
      {
        path: "general",
        component: General
      },
      {
        path: "loot-type",
        component: LootType
      },
      {
        path: "advanced",
        component: Advanced
      }
    ]
  },
  {
    path: "*",
    component: Default
  }
];

export default routes;
