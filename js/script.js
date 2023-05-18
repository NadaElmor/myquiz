/// <reference types="../@types/jquery" />

//===========================(Global)===========================
import { Setting } from "./setting.js";

const setting = new Setting();
//===========================(Events)============================

//===========================(functions)=========================

//background animation
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "./js/particlesjs-config.json", function () {
  console.log("callback - particles.js config loaded");
});
