require("@rails/ujs").start()
require("turbolinks").start()
require("channels")

import { initSelect2 } from "../plugins/init_select2";

document.addEventListener("turbolinks:load", () => {
  initSelect2();
});
