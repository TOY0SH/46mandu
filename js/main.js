const goodFilling = [0, 1, 2, 3, 5, 8, 10];
const secretFilling1 = [0, 1, 2, 3, 4, 10];
const secretFillng2 = [0, 2, 4, 7, 8, 9, 10, 13];

const noticeScene = document.getElementsByClassName("notice")[0];
const game = document.getElementsByClassName("game")[0];
const titleScene = document.getElementsByClassName("game_title")[0];
const playScene = document.getElementsByClassName("game_play")[0];
const resultScene = document.getElementsByClassName("game_result")[0];

const fillingScene = document.getElementsByClassName("play_filling")[0];
const skinScene = document.getElementsByClassName("play_skin")[0];
const shapeScene = document.getElementsByClassName("play_shape")[0];
const cookScene = document.getElementsByClassName("play_cook")[0];

const secretResult = document.getElementsByClassName("result_secret")[0];
const secret1 = document.getElementsByClassName("secret_1")[0];
const secret2 = document.getElementsByClassName("secret_2")[0];
const goodResult = document.getElementsByClassName("result_good")[0];
const badResult = document.getElementsByClassName("result_bad")[0];
const badFilling = document.getElementById("result_filling");
const badSkin = document.getElementById("result_skin");
const badCook = document.getElementById("result_cook");
const badManduThink = document.getElementById("result_mandu");
const badThink = document.getElementById("result_bad_think");
const bad1 = document.getElementsByClassName("bad1")[0];
const bad2 = document.getElementsByClassName("bad2")[0];

var manduFlour = null;
var manduWater = null;
var manduShape = null;

function OnTitle() {
     titleAnimation();
     game.style.display = "flex";
     noticeScene.style.display = "none";
     titleScene.style.display = "flex";
     playScene.style.display = "none";
}

function OnPlay() {
     Clean();
     OnFilling();
     manduFlour = null;
     manduWater = null;
     manduShape = null;
     titleScene.style.display = "none";
     playScene.style.display = "flex";
     resultScene.style.display = "none";
}

function OnResult() {
     var result = CookMandu();
     var endding = -1;
     var count = 0;
     for (var i = 0; i < result.length; i++) {
          if (result[0] == result[i]) count++;
     }
     if (count == 3) endding = result[0];

     switch (endding) {
          case 0:     // good
               playScene.style.display = "none";
               resultScene.style.display = "flex";
               resultGoodAnimation();
               break;
          case 1:     // secret 1
               playScene.style.display = "none";
               resultScene.style.display = "flex";
               resultSecret1Animation();
               break;
          case 2:     // secret 2
               playScene.style.display = "none";
               resultScene.style.display = "flex";
               resultSecret2Animation();
               break;
          case 3:     // secret 3
               bad1.style.display = "none";
               badResult.style.display = "flex";
               bad2.style.display = "flex";
               badManduThink.innerText = "그냥 장 본 사람인데...?"
               badThink.innerText = "지금이라도 배달 시킬까?"
               playScene.style.display = "none";
               resultScene.style.display = "flex";
               resultBad2Animation();
               break;
          default:
               bad1.style.display = "flex";
               bad2.style.display = "none";
               if (result[0] == 0) {
                    badFilling.innerText = "음...";
               } else {
                    badFilling.innerText = "만두 속이... 이상하고...";
               }
               if (result[1] == 0) {
                    badSkin.innerText = "음...";
               } else {
                    badSkin.innerText = "만두피가...  이상하고...";
               }
               if (result[2] == 0) {
                    badCook.innerText = "음..."
               } else {
                    badCook.innerText = "조리 방법이 좀...";
               }
               badManduThink.innerText = "이론은 완벽했는데...!"
               badThink.innerText = "형용할 수 없는 맛이 난다..."
               playScene.style.display = "none";
               resultScene.style.display = "flex";
               resultBadAnimation();
               break;
     }
}

function OnFilling() {
     fillingScene.style.display = "flex";
     skinScene.style.display = "none";
     shapeScene.style.display = "none";
     cookScene.style.display = "none";
}

function OnSkin() {
     fillingScene.style.display = "none";
     skinScene.style.display = "flex";
     shapeScene.style.display = "none";
     cookScene.style.display = "none";
}

function OnShape() {
     manduShape = null;
     var spImage = document.getElementsByClassName("img_shape");
     for (var i = 0; i < spImage.length; i++) {
          spImage[i].style.display = "none";
     }

     var shape = document.getElementsByName("shape");
     for (var i = 0; i < shape.length; i++) {
          if (shape[i].getAttribute('type') === 'radio') {
               shape[i].checked = false;
          }
     }
     fillingScene.style.display = "none";
     skinScene.style.display = "none";
     shapeScene.style.display = "flex";
     cookScene.style.display = "none";
}

function OnCook() {
     var cImage = document.getElementsByClassName("img_cook");
     for (var i = 0; i < cImage.length; i++) {
          cImage[i].style.display = "none";
     }

     var cook = document.getElementsByName("cook");
     for (var i = 0; i < cook.length; i++) {
          if (cook[i].getAttribute('type') === 'radio') {
               cook[i].checked = false;
          }
     }
     document.getElementById("cook_aura").style.display = "none";
     fillingScene.style.display = "none";
     skinScene.style.display = "none";
     shapeScene.style.display = "none";
     cookScene.style.display = "flex";
}

function Clean() {

     var fImage = document.getElementsByClassName("img_filling");
     for (var i = 0; i < fImage.length; i++) {
          fImage[i].style.display = "none";
     }

     var fill = document.getElementsByName("filling");
     for (var i = 0; i < fill.length; i++) {
          if (fill[i].getAttribute('type') === 'checkbox') {
               fill[i].checked = false;
          }
     }

     var flour = document.getElementsByName("flour");
     for (var i = 0; i < flour.length; i++) {
          if (flour[i].getAttribute('type') === 'radio') {
               flour[i].checked = false;
          }
     }

     var skImage = document.getElementsByClassName("img_skin");
     for (var i = 0; i < skImage.length; i++) {
          skImage[i].style.display = "none";
     }

     var water = document.getElementsByName("water");
     for (var i = 0; i < water.length; i++) {
          if (water[i].getAttribute('type') === 'radio') {
               water[i].checked = false;
          }
     }

     var spImage = document.getElementsByClassName("img_shape");
     for (var i = 0; i < spImage.length; i++) {
          spImage[i].style.display = "none";
     }

     var shape = document.getElementsByName("shape");
     for (var i = 0; i < shape.length; i++) {
          if (shape[i].getAttribute('type') === 'radio') {
               shape[i].checked = false;
          }
     }

     var cImage = document.getElementsByClassName("img_cook");
     for (var i = 0; i < cImage.length; i++) {
          cImage[i].style.display = "none";
     }

     var cook = document.getElementsByName("cook");
     for (var i = 0; i < cook.length; i++) {
          if (cook[i].getAttribute('type') === 'radio') {
               cook[i].checked = false;
          }
     }

     secretResult.style.display = "none";
     goodResult.style.display = "none";
     badResult.style.display = "none";
}

function checkFilling(checkName, imgName) {
     var checked = document.getElementById(checkName);
     var img = document.getElementById(imgName);

     if (checked.checked) { img.style.display = "flex"; }
     else { img.style.display = "none"; }
}

function checkSkin(checkName, imgName, imgPosition) {
     var checked = document.getElementById(checkName);
     var img = document.getElementById(imgName);

     if (imgPosition == 0) {
          switch (Number(checked.value)) {
               case 0:
                    img.style.backgroundPosition = "left top";
                    break;
               case 1:
                    img.style.backgroundPosition = "center top";
                    break;
               case 2:
                    img.style.backgroundPosition = "right top";
                    break;
          }
          manduFlour = Number(checked.value);
     } else {
          switch (Number(checked.value)) {
               case 0:
                    img.style.backgroundPosition = "left bottom";
                    break;
               case 1:
                    img.style.backgroundPosition = "center bottom";
                    break;
               case 2:
                    img.style.backgroundPosition = "right bottom";
                    break;
          }
          manduWater = Number(checked.value);
     }
     img.style.display = "flex";
}

function checkShape(imgName, shapeNum) {
     var img = document.getElementById(imgName);

     if (manduFlour == null || manduWater == null) return;

     switch (Number(shapeNum)) {
          case 0:
               if (manduFlour == 2 || manduWater == 1) {
                    img.style.backgroundPosition = "right top";
               } else if (manduFlour == 0) {
                    img.style.backgroundPosition = "center top";
               } else {
                    img.style.backgroundPosition = "left top";
               }
               break;
          case 1:
               if (manduFlour == 2 || manduWater == 1) {
                    img.style.backgroundPosition = "right center";
               } else if (manduFlour == 0) {
                    img.style.backgroundPosition = "center center";
               } else {
                    img.style.backgroundPosition = "left center";
               }
               break;
          case 2:
               if (manduFlour == 2 || manduWater == 1) {
                    img.style.backgroundPosition = "right bottom";
               } else if (manduFlour == 0) {
                    img.style.backgroundPosition = "center bottom";
               } else {
                    img.style.backgroundPosition = "left bottom";
               }
               break;
     }
     manduShape = Number(shapeNum);
     img.style.display = "flex";
}

function checkCook(imgName, cookNum) {
     var img = document.getElementById(imgName);
     var mandu = document.getElementById("img_cook_mandu");

     switch (Number(cookNum)) {
          case 0:
               img.style.backgroundPosition = "left top"
               break;
          case 1:
               img.style.backgroundPosition = "center top"
               break;
          case 2:
               img.style.backgroundPosition = "right top"
               break;
     }
     document.getElementById("cook_aura").style.display = "flex";
     img.style.display = "flex";

     if (manduShape == null) return;
     switch (manduShape) {
          case 0:
               if (manduFlour == 2 || manduWater == 1) {
                    mandu.style.backgroundPosition = "right top";
               } else if (manduFlour == 0) {
                    mandu.style.backgroundPosition = "center top";
               } else {
                    mandu.style.backgroundPosition = "left top";
               }
               break;
          case 1:
               if (manduFlour == 2 || manduWater == 1) {
                    mandu.style.backgroundPosition = "right bottom";
               } else if (manduFlour == 0) {
                    mandu.style.backgroundPosition = "center bottom";
               } else {
                    mandu.style.backgroundPosition = "left bottom";
               }
               break;
          case 2:
               if (manduFlour == 2 || manduWater == 1) {
                    mandu.style.backgroundPosition = "right center";
               } else if (manduFlour == 0) {
                    mandu.style.backgroundPosition = "center center";
               } else {
                    mandu.style.backgroundPosition = "left center";
               }
               break;
     }
     mandu.style.display = "flex";
}

function CookMandu() {
     var cFill = document.getElementsByName("filling");
     var cFlour = document.getElementsByName("flour");
     var cWater = document.getElementsByName("water");
     var cShape = document.getElementsByName("shape");
     var cCook = document.getElementsByName("cook");

     var fill = [];
     var skin = [];
     var cook = [];

     for (var i = 0; i < cFill.length; i++) {
          if (cFill[i].checked == true) fill.push(Number(cFill[i].value));
     }
     for (var i = 0; i < cFlour.length; i++) {
          if (cFlour[i].checked == true) skin.push(Number(cFlour[i].value));
     }
     for (var i = 0; i < cWater.length; i++) {
          if (cWater[i].checked == true) skin.push(Number(cWater[i].value));
     }
     for (var i = 0; i < cShape.length; i++) {
          if (cShape[i].checked == true) cook.push(Number(cShape[i].value));
     }
     for (var i = 0; i < cCook.length; i++) {
          if (cCook[i].checked == true) cook.push(Number(cCook[i].value));
     }

     var result = [];
     if (fill.length == goodFilling.length) {
          for (var i = 0; i < fill.length; i++) {
               if (fill[i] != goodFilling[i]) { result.push(-1); break; }
               if (i == fill.length - 1) { result.push(0); }
          }
          if (skin.length == 2) {
               if (skin[0] == 1 && skin[1] == 0) { result.push(0); }
               else { result.push(-1); }
          } else { result.push(-1); }
          if (cook.length == 2) {
               if ((cook[0] == 0 && cook[1] == 1) || (cook[0] == 1 && cook[1] == 2) || (cook[0] == 2 && cook[1] == 0)) { result.push(0); }
               else { result.push(-1); }
          } else { result.push(-1); }
     } else if (fill.length == secretFilling1.length) {
          for (var i = 0; i < fill.length; i++) {
               if (fill[i] != secretFilling1[i]) { result.push(-1); break; }
               if (i == fill.length - 1) { result.push(1); }
          }
          if (skin.length == 2) {
               if (skin[0] == 2 && skin[1] == 2) { result.push(1); }
               else { result.push(-1); }
          } else { result.push(-1); }
          if (cook.length == 2) {
               if (cook[1] == 0) { result.push(1); }
               else { result.push(-1); }
          } else { result.push(-1); }
     } else if (fill.length == secretFillng2.length) {
          for (var i = 0; i < fill.length; i++) {
               if (fill[i] != secretFillng2[i]) { result.push(-1); break; }
               if (i == fill.length - 1) { result.push(2); }
          }
          if (skin.length == 2) {
               if (skin[0] == 1 && skin[1] == 0) { result.push(2); }
               else { result.push(-1); }
          } else { result.push(-1); }
          if (cook.length == 2) {
               if (cook[1] == 1) { result.push(2); }
               else { result.push(-1); }
          } else { result.push(-1); }
     } else if (fill.length + skin.length + cook.length == 0) {
          result = [3, 3, 3];
     } else {
          result.push(-1);

          if (skin.length == 2) {
               if (skin[0] == 1 && skin[1] == 0) { result.push(0); }
               else { result.push(-1); }
          } else { result.push(-1); }

          if (cook.length == 2) {
               if ((cook[0] == 0 && cook[1] == 1) || (cook[0] == 1 && cook[1] == 2) || (cook[0] == 2 && cook[1] == 0)) { result.push(0); }
               else { result.push(-1); }
          } else { result.push(-1); }
     }

     return result;
}

