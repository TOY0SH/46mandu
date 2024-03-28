const noticeAni = document.getElementsByClassName("notice")[0];

const titleAni = document.getElementsByClassName("game_title")[0];
const titleButtons = document.getElementsByClassName("title_btns")[0];
const titleKsh = document.getElementsByClassName("title_ksh")[0];
const titleKshThink = document.getElementsByClassName("title_ksh_think")[0];
const titleKshThinkP = document.getElementById("title_ksh_think_p");
const titleText = document.getElementsByClassName("title_text")[0];

function titleAnimation() {
     titleButtons.style.display = "none";
     titleKshThink.style.display = "none";
     noticeAni.style.display = "none";
     titleAni.style.display = "flex";

     setTimeout(function () {
          titleKshThink.style.display = "flex";
          titleKshThink.style.backgroundPosition = "left";
          titleKshThinkP.style.display = "none";
     }, 1000);

     setTimeout(function () {
          titleKshThink.style.backgroundPosition = "right";
          titleKshThinkP.style.display = "flex";
     }, 2500);

     setTimeout(function () {
          titleKshThink.style.display = "none";
          titleKshThink.style.backgroundPosition = "left";
          titleKshThinkP.style.display = "none";
     }, 4300);

     setTimeout(function () {
          titleKsh.style.backgroundPosition = "center";
     }, 5600);

     setTimeout(function () {
          titleKsh.style.backgroundPosition = "right";
     }, 6500);

     setTimeout(function () {
          titleText.style.display = "inline-block";
     }, 7500);

     setTimeout(function () {
          titleButtons.style.display = "inline-block";
     }, 8500);
}

const resultAni1 = document.getElementsByClassName("result_wait")[0];
const resultAni2 = document.getElementsByClassName("result_com")[0];

const resultSec = document.getElementsByClassName("result_secret")[0];
const resultSec1 = document.getElementsByClassName("secret_1")[0];
const resultSec2 = document.getElementsByClassName("secret_2")[0];

const resultGood = document.getElementsByClassName("result_good")[0];

const resultBad = document.getElementsByClassName("result_bad")[0];
const resultBad1 = document.getElementsByClassName("bad1")[0];
const resultBad2 = document.getElementsByClassName("bad2")[0];
const resultBadTalk = document.getElementsByClassName("bad_talk")[0];
const resultFilling = document.getElementById("result_filling");
const resultSkin = document.getElementById("result_skin");
const resultCook = document.getElementById("result_cook");

const retryButton = document.getElementsByClassName("result_btn")[0];

function resultSecret1Animation() {
     retryButton.style.display = "none";
     resultSec1.style.display = "none";
     resultSec2.style.display = "none";
     resultAni1.style.display = "flex";

     setTimeout(function () {
          resultAni1.style.display = "none";
          resultAni2.style.display = "flex";
     }, 3000);

     setTimeout(function () {
          resultSec.style.display = "flex";
          resultAni2.style.display = "none";
          resultSec1.style.display = "flex";
     }, 5000);

     setTimeout(function () {
          retryButton.style.display = "flex";
     }, 7000);
}

function resultSecret2Animation() {
     retryButton.style.display = "none";
     resultSec1.style.display = "none";
     resultSec2.style.display = "none";
     resultAni1.style.display = "flex";

     setTimeout(function () {
          resultAni1.style.display = "none";
          resultAni2.style.display = "flex";
     }, 3000);

     setTimeout(function () {
          resultSec.style.display = "flex";
          resultAni2.style.display = "none";
          resultSec2.style.display = "flex";
     }, 5000);

     setTimeout(function () {
          retryButton.style.display = "flex";
     }, 7000);
}

function resultGoodAnimation() {
     retryButton.style.display = "none";
     resultAni1.style.display = "flex";

     setTimeout(function () {
          resultAni1.style.display = "none";
          resultAni2.style.display = "flex";
          resultGood.style.display = "none";
     }, 3000);

     setTimeout(function () {
          resultGood.style.display = "flex";
          resultAni2.style.display = "none";
     }, 5000);

     setTimeout(function () {
          retryButton.style.display = "flex";
     }, 7000);
}

function resultBadAnimation() {
     retryButton.style.display = "none";
     resultAni1.style.display = "flex";
     resultBad1.style.display = "none";
     resultBad2.style.display = "none";
     resultBadTalk.style.display = "none";
     resultFilling.style.display = "none";
     resultSkin.style.display = "none";
     resultCook.style.display = "none";

     setTimeout(function () {
          resultAni1.style.display = "none";
          resultAni2.style.display = "flex";
     }, 3000);

     setTimeout(function () {
          resultBad.style.display = "flex";
          resultAni2.style.display = "none";
          resultBad1.style.display = "flex";
     }, 5000);

     setTimeout(function () {
          resultFilling.style.display = "none";
          resultSkin.style.display = "none";
          resultCook.style.display = "none";
     }, 6000);

     setTimeout(function () {
          resultBadTalk.style.backgroundPosition = "left";
          resultBadTalk.style.display = "flex";
          resultFilling.style.display = "flex";
     }, 7000);

     setTimeout(function () {
          resultBadTalk.style.backgroundPosition = "center";
          resultSkin.style.display = "flex";
     }, 8500);

     setTimeout(function () {
          resultBadTalk.style.backgroundPosition = "right";
          resultCook.style.display = "flex";
     }, 10500);

     setTimeout(function () {
          resultBadTalk.style.display = "none";
          resultBad1.style.display = "none";
          resultBad2.style.display = "flex";
     }, 12000);

     setTimeout(function () {
          retryButton.style.display = "flex";
     }, 14000);
}

function resultBad2Animation() {
     resultBadTalk.style.display = "none";
     resultBad1.style.display = "none";
     resultBad2.style.display = "flex";

     setTimeout(function () {
          retryButton.style.display = "flex";
     }, 2000);
}