!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.domUtil={limpiar:function(e){for(;null!==e.lastChild;)e.removeChild(e.lastChild)},nuevoNodo:function(e,t,n){var r=document.createElement("a");r.setAttribute("href",n.html_url),r.setAttribute("target","_blank");var o=document.createTextNode(n.name);r.appendChild(o);var u=document.createElement(t);u.appendChild(r),e.appendChild(u)}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(0),o=n(2);window.addEventListener("load",function(){var e=document.querySelector("#texto"),t=document.querySelector("#boton"),n=document.querySelector("#hueco");t.addEventListener("click",function(){var t="https://api.github.com/users/"+e.value+"/repos";r.domUtil.limpiar(n),o.busqueda.buscarRepos(n,t)})})},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=n(0);t.busqueda={buscarRepos:function(e,t){return fetch(t).then(function(e){return e.json()}).then(function(t){return t.map(function(t){return o.domUtil.nuevoNodo(e,"div",t)})}).catch(function(e){return r.util.log(e)})}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.util={log:function(e){return console.log(e)}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RvbXV0aWxlcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvYnVzcXVlZGFzLnRzIiwid2VicGFjazovLy8uL3NyYy91dGlsZXMudHMiXSwibmFtZXMiOlsiaW5zdGFsbGVkTW9kdWxlcyIsIl9fd2VicGFja19yZXF1aXJlX18iLCJtb2R1bGVJZCIsImV4cG9ydHMiLCJtb2R1bGUiLCJpIiwibCIsIm1vZHVsZXMiLCJjYWxsIiwibSIsImMiLCJkIiwibmFtZSIsImdldHRlciIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJyIiwiU3ltYm9sIiwidG9TdHJpbmdUYWciLCJ2YWx1ZSIsInQiLCJtb2RlIiwiX19lc01vZHVsZSIsIm5zIiwiY3JlYXRlIiwia2V5IiwiYmluZCIsIm4iLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJkb21VdGlsIiwibGltcGlhciIsIm5vZG8iLCJsYXN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsIm51ZXZvTm9kbyIsImFuY2VzdHJvIiwiZGVzY2VuZGllbnRlIiwiY29udGVuaWRvIiwiYW5jbGEiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzZXRBdHRyaWJ1dGUiLCJodG1sX3VybCIsIm5vZG9UZXh0byIsImNyZWF0ZVRleHROb2RlIiwiYXBwZW5kQ2hpbGQiLCJkZXNjIiwiZG9tdXRpbGVzXzEiLCJidXNxdWVkYXNfMSIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJxdWVyeVNlbGVjdG9yIiwiYm90b24iLCJodWVjbyIsImFwaVVybCIsImJ1c3F1ZWRhIiwiYnVzY2FyUmVwb3MiLCJ1dGlsZXNfMSIsImRvbmRlIiwidXJsIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwi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QyxHQUN2QixPQUFBQyxNQUFNRCxHQUNERSxLQUFLLFNBQUFDLEdBQVksT0FBQUEsRUFBU0MsU0FDMUJGLEtBQ0csU0FBQ0UsR0FBc0IsT0FBQUEsRUFDbEJDLElBQUksU0FBQ0MsR0FBcUIsT0FBQWxCLEVBQUFsQixRQUFRSyxVQUFVd0IsRUFBTyxNQUFPTyxPQUVsRUMsTUFBTSxTQUFBQyxHQUFTLE9BQUFWLEVBQUFXLEtBQUtDLElBQUlGLHNGQ1h4QnhFLEVBQUF5RSxNQUNUQyxJQUFLLFNBQUNDLEdBQWdCLE9BQUFDLFFBQVFGLElBQUlDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsImltcG9ydCB7IEdpdEh1YlJlcG8gfSBmcm9tICcuL3V0aWxlcydcclxuXHJcbmV4cG9ydCBjb25zdCBkb21VdGlsID0ge1xyXG4gICAgbGltcGlhcjogKG5vZG86IE5vZGUpID0+IHtcclxuICAgICAgICB3aGlsZSAobm9kby5sYXN0Q2hpbGQgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgbm9kby5yZW1vdmVDaGlsZChub2RvLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG51ZXZvTm9kbzogKGFuY2VzdHJvOiBOb2RlLCBkZXNjZW5kaWVudGU6IHN0cmluZywgY29udGVuaWRvOiBHaXRIdWJSZXBvKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYW5jbGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcclxuICAgICAgICBhbmNsYS5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBjb250ZW5pZG8uaHRtbF91cmwpO1xyXG4gICAgICAgIGFuY2xhLnNldEF0dHJpYnV0ZSgndGFyZ2V0JywgJ19ibGFuaycpO1xyXG4gICAgICAgIGNvbnN0IG5vZG9UZXh0byA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNvbnRlbmlkby5uYW1lKTtcclxuICAgICAgICBhbmNsYS5hcHBlbmRDaGlsZChub2RvVGV4dG8pO1xyXG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGRlc2NlbmRpZW50ZSk7XHJcbiAgICAgICAgZGVzYy5hcHBlbmRDaGlsZChhbmNsYSk7XHJcbiAgICAgICAgYW5jZXN0cm8uYXBwZW5kQ2hpbGQoZGVzYyk7XHJcbiAgICB9XHJcbn07IiwiaW1wb3J0IHsgZG9tVXRpbCB9IGZyb20gJy4vZG9tdXRpbGVzJztcclxuaW1wb3J0IHsgYnVzcXVlZGEgfSBmcm9tICcuL2J1c3F1ZWRhcyc7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcclxuICAgICdsb2FkJyxcclxuICAgICgpID0+IHtcclxuICAgICAgICBjb25zdCBub2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RleHRvJykgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBjb25zdCBib3RvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib3RvbicpIGFzIE5vZGU7XHJcbiAgICAgICAgY29uc3QgaHVlY28gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaHVlY28nKSBhcyBOb2RlO1xyXG4gICAgICAgIGJvdG9uLmFkZEV2ZW50TGlzdGVuZXIoXHJcbiAgICAgICAgICAgICdjbGljaycsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwaVVybCA9IGBodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzLyR7bm9kby52YWx1ZX0vcmVwb3NgO1xyXG4gICAgICAgICAgICAgICAgZG9tVXRpbC5saW1waWFyKGh1ZWNvKTtcclxuICAgICAgICAgICAgICAgIGJ1c3F1ZWRhLmJ1c2NhclJlcG9zKGh1ZWNvLCBhcGlVcmwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuKTsiLCJpbXBvcnQgeyB1dGlsLCBHaXRIdWJSZXBvIH0gZnJvbSAnLi91dGlsZXMnO1xyXG5pbXBvcnQgeyBkb21VdGlsIH0gZnJvbSAnLi9kb211dGlsZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGJ1c3F1ZWRhID0ge1xyXG4gICAgYnVzY2FyUmVwb3M6IChkb25kZTogTm9kZSwgdXJsOiBzdHJpbmcpID0+XHJcbiAgICAgICAgZmV0Y2godXJsKVxyXG4gICAgICAgICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXHJcbiAgICAgICAgICAgIC50aGVuKFxyXG4gICAgICAgICAgICAgICAgKGpzb246R2l0SHViUmVwb1tdKSA9PiBqc29uXHJcbiAgICAgICAgICAgICAgICAgICAgLm1hcCgoaXRlbTogR2l0SHViUmVwbykgPT4gZG9tVXRpbC5udWV2b05vZG8oZG9uZGUsICdkaXYnLCBpdGVtKSlcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdXRpbC5sb2coZXJyb3IpKVxyXG59OyIsImV4cG9ydCBjb25zdCB1dGlsID0ge1xyXG4gICAgbG9nOiAoc3RyOiBzdHJpbmcpID0+IGNvbnNvbGUubG9nKHN0cilcclxufTtcclxuZXhwb3J0IGludGVyZmFjZSBHaXRIdWJSZXBve1xyXG4gICAgbmFtZTpzdHJpbmc7XHJcbiAgICBodG1sX3VybDpzdHJpbmc7XHJcbiAgICBbcHJvcDogc3RyaW5nXTogYW55O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==