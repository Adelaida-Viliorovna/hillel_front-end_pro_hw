"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.hideLoader = hideLoader;
exports.showLoader = showLoader;
function showLoader(loaderElement) {
  loaderElement.classList.remove("hidden");
}
function hideLoader(loaderElement) {
  loaderElement.classList.add("hidden");
}