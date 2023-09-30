import { getRoute } from "../model/model.js";
import { blankURL } from "../model/model.js";


function urlListener() {
  $(window).on("hashchange", getRoute);
  let hashID = window.location.hash;
  let pageID = hashID.replace("#", "");
  getRoute();
  blankURL(pageID);
}

$(document).ready(function () {
  urlListener();
});