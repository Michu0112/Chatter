/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ (function() {

eval("var auth = firebase.auth();\nvar whenSignedIn = document.getElementById('whenSignedIn');\nvar whenSignedOut = document.getElementById('whenSignedOut');\nvar signInBtn = document.getElementById('signInBtn');\nvar signOutBtn = document.getElementById('signOutBtn');\nvar userDeatils = document.querySelector('.userDetails');\nvar provider = new firebase.auth.GoogleAuthProvider();\n\nsignInBtn.onclick = function () {\n  return auth.signInWithPopup(provider);\n};\n\nsignOutBtn.onclick = function () {\n  return auth.signOut();\n};\n\nauth.onAuthStateChanged(function (user) {\n  if (user) {\n    userDeatils.innerHTML = \"Hello \".concat(user.displayName, \"!\");\n    userDeatils.innerHTML += \"User Id: \".concat(user.uid);\n    whenSignedOut.hidden = true;\n    whenSignedIn.hidden = false;\n  } else {\n    whenSignedOut.hidden = false;\n    whenSignedIn.hidden = true;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGF0dGVyLy4vc3JjL3NjcmlwdHMvaW5kZXguanM/MTU5MCJdLCJuYW1lcyI6WyJhdXRoIiwiZmlyZWJhc2UiLCJ3aGVuU2lnbmVkSW4iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwid2hlblNpZ25lZE91dCIsInNpZ25JbkJ0biIsInNpZ25PdXRCdG4iLCJ1c2VyRGVhdGlscyIsInF1ZXJ5U2VsZWN0b3IiLCJwcm92aWRlciIsIkdvb2dsZUF1dGhQcm92aWRlciIsIm9uY2xpY2siLCJzaWduSW5XaXRoUG9wdXAiLCJzaWduT3V0Iiwib25BdXRoU3RhdGVDaGFuZ2VkIiwidXNlciIsImlubmVySFRNTCIsImRpc3BsYXlOYW1lIiwidWlkIiwiaGlkZGVuIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFNQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0QsSUFBVCxFQUFiO0FBRUEsSUFBTUUsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBckI7QUFDQSxJQUFNQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixlQUF4QixDQUF0QjtBQUVBLElBQU1FLFNBQVMsR0FBR0gsUUFBUSxDQUFDQyxjQUFULENBQXdCLFdBQXhCLENBQWxCO0FBQ0EsSUFBTUcsVUFBVSxHQUFHSixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsQ0FBbkI7QUFFQSxJQUFNSSxXQUFXLEdBQUdMLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixjQUF2QixDQUFwQjtBQUVBLElBQU1DLFFBQVEsR0FBRyxJQUFJVCxRQUFRLENBQUNELElBQVQsQ0FBY1csa0JBQWxCLEVBQWpCOztBQUVBTCxTQUFTLENBQUNNLE9BQVYsR0FBb0I7QUFBQSxTQUFNWixJQUFJLENBQUNhLGVBQUwsQ0FBcUJILFFBQXJCLENBQU47QUFBQSxDQUFwQjs7QUFFQUgsVUFBVSxDQUFDSyxPQUFYLEdBQXFCO0FBQUEsU0FBTVosSUFBSSxDQUFDYyxPQUFMLEVBQU47QUFBQSxDQUFyQjs7QUFFQWQsSUFBSSxDQUFDZSxrQkFBTCxDQUF5QixVQUFBQyxJQUFJLEVBQUc7QUFDNUIsTUFBR0EsSUFBSCxFQUFRO0FBQ0pSLElBQUFBLFdBQVcsQ0FBQ1MsU0FBWixtQkFBaUNELElBQUksQ0FBQ0UsV0FBdEM7QUFDQVYsSUFBQUEsV0FBVyxDQUFDUyxTQUFaLHVCQUFxQ0QsSUFBSSxDQUFDRyxHQUExQztBQUNBZCxJQUFBQSxhQUFhLENBQUNlLE1BQWQsR0FBdUIsSUFBdkI7QUFDQWxCLElBQUFBLFlBQVksQ0FBQ2tCLE1BQWIsR0FBc0IsS0FBdEI7QUFDSCxHQUxELE1BS007QUFDRmYsSUFBQUEsYUFBYSxDQUFDZSxNQUFkLEdBQXVCLEtBQXZCO0FBQ0FsQixJQUFBQSxZQUFZLENBQUNrQixNQUFiLEdBQXNCLElBQXRCO0FBQ0g7QUFDSixDQVZEIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXV0aCA9IGZpcmViYXNlLmF1dGgoKTtcclxuXHJcbmNvbnN0IHdoZW5TaWduZWRJbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aGVuU2lnbmVkSW4nKTtcclxuY29uc3Qgd2hlblNpZ25lZE91dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3aGVuU2lnbmVkT3V0Jyk7XHJcblxyXG5jb25zdCBzaWduSW5CdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbkluQnRuJyk7XHJcbmNvbnN0IHNpZ25PdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lnbk91dEJ0bicpO1xyXG5cclxuY29uc3QgdXNlckRlYXRpbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNlckRldGFpbHMnKTtcclxuXHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IGZpcmViYXNlLmF1dGguR29vZ2xlQXV0aFByb3ZpZGVyKCk7XHJcblxyXG5zaWduSW5CdG4ub25jbGljayA9ICgpID0+IGF1dGguc2lnbkluV2l0aFBvcHVwKHByb3ZpZGVyKTtcclxuXHJcbnNpZ25PdXRCdG4ub25jbGljayA9ICgpID0+IGF1dGguc2lnbk91dCgpO1xyXG5cclxuYXV0aC5vbkF1dGhTdGF0ZUNoYW5nZWQoIHVzZXIgPT57XHJcbiAgICBpZih1c2VyKXtcclxuICAgICAgICB1c2VyRGVhdGlscy5pbm5lckhUTUwgPSBgSGVsbG8gJHt1c2VyLmRpc3BsYXlOYW1lfSFgO1xyXG4gICAgICAgIHVzZXJEZWF0aWxzLmlubmVySFRNTCArPSBgVXNlciBJZDogJHt1c2VyLnVpZH1gO1xyXG4gICAgICAgIHdoZW5TaWduZWRPdXQuaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB3aGVuU2lnbmVkSW4uaGlkZGVuID0gZmFsc2U7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgICAgd2hlblNpZ25lZE91dC5oaWRkZW4gPSBmYWxzZTtcclxuICAgICAgICB3aGVuU2lnbmVkSW4uaGlkZGVuID0gdHJ1ZTtcclxuICAgIH1cclxufSkiXSwiZmlsZSI6Ii4vc3JjL3NjcmlwdHMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/scripts/index.js"]();
/******/ 	
/******/ })()
;