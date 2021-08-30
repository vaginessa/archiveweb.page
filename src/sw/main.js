import { SWReplay } from "@webrecorder/wabac/src/swmain";

import { ExtAPI } from "./api";

const defaultConfig = {
  injectScripts: ["/ruffle/ruffle.js"],
  baseUrlSourcePrefix: "/replay/index.html"
};

self.sw = new SWReplay({ApiClass: ExtAPI, useIPFS: false, defaultConfig});
