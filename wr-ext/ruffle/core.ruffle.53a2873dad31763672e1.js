"use strict";(self.webpackChunkruffle_selfhosted=self.webpackChunkruffle_selfhosted||[]).push([[966],{762:(n,e,_)=>{function t(n,e,_){e&&n.getChannelData(0).set(e),_&&n.getChannelData(1).set(_)}function r(n){return n.currentTime-n.baseLatency}_.d(e,{K:()=>t,T:()=>r})},966:(n,e,_)=>{_.r(e),_.d(e,{Ruffle:()=>N,default:()=>$});var t=_(762);const r="undefined"!=typeof AudioContext?AudioContext:"undefined"!=typeof webkitAudioContext?webkitAudioContext:void 0;let b;const c=new Array(32).fill(void 0);function o(n){return c[n]}c.push(void 0,null,!0,!1);let f=c.length;function u(n){const e=o(n);return function(n){n<36||(c[n]=f,f=n)}(n),e}function i(n){f===c.length&&c.push(c.length+1);const e=f;return f=c[e],c[e]=n,e}const a=new TextDecoder("utf-8",{ignoreBOM:!0,fatal:!0});a.decode();let g=null;function w(){return null!==g&&g.buffer===b.memory.buffer||(g=new Uint8Array(b.memory.buffer)),g}function d(n,e){return a.decode(w().subarray(n,n+e))}let s=0;const l=new TextEncoder("utf-8"),m="function"==typeof l.encodeInto?function(n,e){return l.encodeInto(n,e)}:function(n,e){const _=l.encode(n);return e.set(_),{read:n.length,written:_.length}};function p(n,e,_){if(void 0===_){const _=l.encode(n),t=e(_.length);return w().subarray(t,t+_.length).set(_),s=_.length,t}let t=n.length,r=e(t);const b=w();let c=0;for(;c<t;c++){const e=n.charCodeAt(c);if(e>127)break;b[r+c]=e}if(c!==t){0!==c&&(n=n.slice(c)),r=_(r,t,t=c+3*n.length);const e=w().subarray(r+c,r+t);c+=m(n,e).written}return s=c,r}let y=null;function h(){return null!==y&&y.buffer===b.memory.buffer||(y=new Int32Array(b.memory.buffer)),y}function v(n){return null==n}let x=null;function A(){return null!==x&&x.buffer===b.memory.buffer||(x=new Float64Array(b.memory.buffer)),x}function C(n){const e=typeof n;if("number"==e||"boolean"==e||null==n)return`${n}`;if("string"==e)return`"${n}"`;if("symbol"==e){const e=n.description;return null==e?"Symbol":`Symbol(${e})`}if("function"==e){const e=n.name;return"string"==typeof e&&e.length>0?`Function(${e})`:"Function"}if(Array.isArray(n)){const e=n.length;let _="[";e>0&&(_+=C(n[0]));for(let t=1;t<e;t++)_+=", "+C(n[t]);return _+="]",_}const _=/\[object ([^\]]+)\]/.exec(toString.call(n));let t;if(!(_.length>1))return toString.call(n);if(t=_[1],"Object"==t)try{return"Object("+JSON.stringify(n)+")"}catch(n){return"Object"}return n instanceof Error?`${n.name}: ${n.message}\n${n.stack}`:t}function R(n,e,_,t){const r={a:n,b:e,cnt:1,dtor:_},c=(...n)=>{r.cnt++;const e=r.a;r.a=0;try{return t(e,r.b,...n)}finally{0==--r.cnt?b.__wbindgen_export_2.get(r.dtor)(e,r.b):r.a=e}};return c.original=r,c}function S(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0e1d881a28d06434(n,e,i(_))}function T(n,e){b._dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4d1a73f89c33f719(n,e)}function k(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0e1d881a28d06434(n,e,i(_))}function E(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0e1d881a28d06434(n,e,i(_))}function F(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0e1d881a28d06434(n,e,i(_))}function M(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h4b93465580b7c726(n,e,_)}function O(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0e1d881a28d06434(n,e,i(_))}function P(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h0e1d881a28d06434(n,e,i(_))}function L(n,e,_){b._dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__hfd95dd93812f7ed4(n,e,i(_))}function D(n,e){try{return n.apply(this,e)}catch(n){b.__wbindgen_exn_store(i(n))}}let W=32;function I(n){if(1==W)throw new Error("out of js stack");return c[--W]=n,W}let B=null;let j=null;function V(n,e){return(null!==j&&j.buffer===b.memory.buffer||(j=new Float32Array(b.memory.buffer)),j).subarray(n/4,n/4+e)}function U(n,e){return w().subarray(n/1,n/1+e)}function q(n,e){return A().subarray(n/8,n/8+e)}let G=null;function H(n,e){return(null!==G&&G.buffer===b.memory.buffer||(G=new Uint8ClampedArray(b.memory.buffer)),G).subarray(n/1,n/1+e)}class N{static __wrap(n){const e=Object.create(N.prototype);return e.ptr=n,e}__destroy_into_raw(){const n=this.ptr;return this.ptr=0,n}free(){const n=this.__destroy_into_raw();b.__wbg_ruffle_free(n)}constructor(n,e,_){try{return u(b.ruffle_new(i(n),i(e),I(_)))}finally{c[W++]=void 0}}stream_from(n,e){try{const t=b.__wbindgen_add_to_stack_pointer(-16),r=p(n,b.__wbindgen_malloc,b.__wbindgen_realloc),o=s;b.ruffle_stream_from(t,this.ptr,r,o,I(e));var _=h()[t/4+0];if(h()[t/4+1])throw u(_)}finally{b.__wbindgen_add_to_stack_pointer(16),c[W++]=void 0}}load_data(n,e){try{const t=b.__wbindgen_add_to_stack_pointer(-16);b.ruffle_load_data(t,this.ptr,i(n),I(e));var _=h()[t/4+0];if(h()[t/4+1])throw u(_)}finally{b.__wbindgen_add_to_stack_pointer(16),c[W++]=void 0}}play(){b.ruffle_play(this.ptr)}pause(){b.ruffle_pause(this.ptr)}is_playing(){return 0!==b.ruffle_is_playing(this.ptr)}prepare_context_menu(){return u(b.ruffle_prepare_context_menu(this.ptr))}run_context_menu_callback(n){b.ruffle_run_context_menu_callback(this.ptr,n)}set_fullscreen(n){b.ruffle_set_fullscreen(this.ptr,n)}clear_custom_menu_items(){b.ruffle_clear_custom_menu_items(this.ptr)}destroy(){b.ruffle_destroy(this.ptr)}call_exposed_callback(n,e){const _=p(n,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s,r=function(n,e){const _=e(4*n.length),t=(null!==B&&B.buffer===b.memory.buffer||(B=new Uint32Array(b.memory.buffer)),B);for(let e=0;e<n.length;e++)t[_/4+e]=i(n[e]);return s=n.length,_}(e,b.__wbindgen_malloc),c=s;return u(b.ruffle_call_exposed_callback(this.ptr,_,t,r,c))}set_trace_observer(n){b.ruffle_set_trace_observer(this.ptr,i(n))}audio_context(){return u(b.ruffle_audio_context(this.ptr))}static is_wasm_simd_used(){return 0!==b.ruffle_is_wasm_simd_used()}}const $=async function n(e){void 0===e&&(e=new URL(_(285),_.b));const c={wbg:{}};c.wbg.__wbindgen_object_drop_ref=function(n){u(n)},c.wbg.__wbindgen_object_clone_ref=function(n){return i(o(n))},c.wbg.__wbindgen_cb_drop=function(n){const e=u(n).original;return 1==e.cnt--&&(e.a=0,!0)},c.wbg.__wbindgen_string_new=function(n,e){return i(d(n,e))},c.wbg.__wbg_ruffle_new=function(n){return i(N.__wrap(n))},c.wbg.__wbindgen_is_function=function(n){return"function"==typeof o(n)},c.wbg.__wbindgen_json_parse=function(n,e){return i(JSON.parse(d(n,e)))},c.wbg.__wbindgen_json_serialize=function(n,e){const _=o(e),t=p(JSON.stringify(void 0===_?null:_),b.__wbindgen_malloc,b.__wbindgen_realloc),r=s;h()[n/4+1]=r,h()[n/4+0]=t},c.wbg.__wbg_new_df6e6ab7a65c4c4d=function(n,e){return i(new Error(d(n,e)))},c.wbg.__wbg_panic_bbc809dd04a12c60=function(n,e){o(n).panic(o(e))},c.wbg.__wbg_setFullscreen_9819a8b20564e39b=function(){return D((function(n,e){o(n).setFullscreen(0!==e)}),arguments)},c.wbg.__wbindgen_string_get=function(n,e){const _=o(e),t="string"==typeof _?_:void 0;var r=v(t)?0:p(t,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;h()[n/4+1]=c,h()[n/4+0]=r},c.wbg.__wbg_displayUnsupportedMessage_a8f81a8e054e5e91=function(n){o(n).displayUnsupportedMessage()},c.wbg.__wbg_displayRootMovieDownloadFailedMessage_1a5c34096259685a=function(n){o(n).displayRootMovieDownloadFailedMessage()},c.wbg.__wbg_displayMessage_c57c20204892da2b=function(n,e,_){o(n).displayMessage(d(e,_))},c.wbg.__wbg_setMetadata_bbaeaee7f48274e6=function(n,e){o(n).setMetadata(u(e))},c.wbg.__wbg_onCallbackAvailable_3a48fae397926c96=function(n,e,_){o(n).onCallbackAvailable(d(e,_))},c.wbg.__wbg_onFSCommand_fb2f94653f71796e=function(){return D((function(n,e,_,t,r){return o(n).onFSCommand(d(e,_),d(t,r))}),arguments)},c.wbg.__wbindgen_number_get=function(n,e){const _=o(e),t="number"==typeof _?_:void 0;A()[n/8+1]=v(t)?0:t,h()[n/4+0]=!v(t)},c.wbg.__wbindgen_boolean_get=function(n){const e=o(n);return"boolean"==typeof e?e?1:0:2},c.wbg.__wbindgen_number_new=function(n){return i(n)},c.wbg.__wbg_copyToAudioBuffer_58f244be94bac1d2=function(n,e,_,r,b){(0,t.K)(o(n),0===e?void 0:V(e,_),0===r?void 0:V(r,b))},c.wbg.__wbg_getAudioOutputTimestamp_a67aa6687740cd15=function(n){return(0,t.T)(o(n))},c.wbg.__wbg_new_693216e109162396=function(){return i(new Error)},c.wbg.__wbg_stack_0ddaca5d1abfb52f=function(n,e){const _=p(o(e).stack,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbg_error_09919627ac0992f5=function(n,e){try{console.error(d(n,e))}finally{b.__wbindgen_free(n,e)}},c.wbg.__wbindgen_is_undefined=function(n){return void 0===o(n)},c.wbg.__wbg_randomFillSync_91e2b39becca6147=function(){return D((function(n,e,_){o(n).randomFillSync(U(e,_))}),arguments)},c.wbg.__wbg_getRandomValues_b14734aa289bc356=function(){return D((function(n,e){o(n).getRandomValues(o(e))}),arguments)},c.wbg.__wbg_process_e56fd54cf6319b6c=function(n){return i(o(n).process)},c.wbg.__wbindgen_is_object=function(n){const e=o(n);return"object"==typeof e&&null!==e},c.wbg.__wbg_versions_77e21455908dad33=function(n){return i(o(n).versions)},c.wbg.__wbg_node_0dd25d832e4785d5=function(n){return i(o(n).node)},c.wbg.__wbindgen_is_string=function(n){return"string"==typeof o(n)},c.wbg.__wbg_static_accessor_NODE_MODULE_26b231378c1be7dd=function(){return i(a)},c.wbg.__wbg_require_0db1598d9ccecb30=function(){return D((function(n,e,_){return i(o(n).require(d(e,_)))}),arguments)},c.wbg.__wbg_crypto_b95d7173266618a9=function(n){return i(o(n).crypto)},c.wbg.__wbg_msCrypto_5a86d77a66230f81=function(n){return i(o(n).msCrypto)},c.wbg.__wbg_instanceof_WebGl2RenderingContext_e29e70ae6c00bfdd=function(n){return o(n)instanceof WebGL2RenderingContext},c.wbg.__wbg_bindVertexArray_dfe63bf55a9f6e54=function(n,e){o(n).bindVertexArray(o(e))},c.wbg.__wbg_blitFramebuffer_c72c74d695ed2ece=function(n,e,_,t,r,b,c,f,u,i,a){o(n).blitFramebuffer(e,_,t,r,b,c,f,u,i>>>0,a>>>0)},c.wbg.__wbg_createVertexArray_d502151c473563b2=function(n){const e=o(n).createVertexArray();return v(e)?0:i(e)},c.wbg.__wbg_renderbufferStorageMultisample_90aa1df2657b1a0a=function(n,e,_,t,r,b){o(n).renderbufferStorageMultisample(e>>>0,_,t>>>0,r,b)},c.wbg.__wbg_texImage2D_ebd74c4d7f0e6728=function(){return D((function(n,e,_,t,r,b,c,f,u,i,a){o(n).texImage2D(e>>>0,_,t,r,b,c,f>>>0,u>>>0,0===i?void 0:U(i,a))}),arguments)},c.wbg.__wbg_bindFramebuffer_6ef149f7d398d19f=function(n,e,_){o(n).bindFramebuffer(e>>>0,o(_))},c.wbg.__wbg_bindRenderbuffer_1974e9f4fdd0b3af=function(n,e,_){o(n).bindRenderbuffer(e>>>0,o(_))},c.wbg.__wbg_bindTexture_dbddb0b0c3efa1b9=function(n,e,_){o(n).bindTexture(e>>>0,o(_))},c.wbg.__wbg_createFramebuffer_f656a97f24d2caf3=function(n){const e=o(n).createFramebuffer();return v(e)?0:i(e)},c.wbg.__wbg_createRenderbuffer_e66ea157342e02e9=function(n){const e=o(n).createRenderbuffer();return v(e)?0:i(e)},c.wbg.__wbg_createTexture_0df375980a9c46c9=function(n){const e=o(n).createTexture();return v(e)?0:i(e)},c.wbg.__wbg_deleteFramebuffer_609d82d380c88142=function(n,e){o(n).deleteFramebuffer(o(e))},c.wbg.__wbg_deleteRenderbuffer_d12ade31b823658c=function(n,e){o(n).deleteRenderbuffer(o(e))},c.wbg.__wbg_deleteTexture_8c7434cb1b20f64f=function(n,e){o(n).deleteTexture(o(e))},c.wbg.__wbg_framebufferRenderbuffer_d73f3cb3e5a605a2=function(n,e,_,t,r){o(n).framebufferRenderbuffer(e>>>0,_>>>0,t>>>0,o(r))},c.wbg.__wbg_framebufferTexture2D_e07b69d4972eccfd=function(n,e,_,t,r,b){o(n).framebufferTexture2D(e>>>0,_>>>0,t>>>0,o(r),b)},c.wbg.__wbg_getError_cc18cbef4864f62f=function(n){return o(n).getError()},c.wbg.__wbg_getParameter_00a3d89e6e005c2f=function(){return D((function(n,e){return i(o(n).getParameter(e>>>0))}),arguments)},c.wbg.__wbg_texParameteri_7414cf15f83e1d52=function(n,e,_,t){o(n).texParameteri(e>>>0,_>>>0,t)},c.wbg.__wbg_instanceof_Window_0e6c0f1096d66c3c=function(n){return o(n)instanceof Window},c.wbg.__wbg_document_99eddbbc11ec831e=function(n){const e=o(n).document;return v(e)?0:i(e)},c.wbg.__wbg_location_fa9019d2eb2195e8=function(n){return i(o(n).location)},c.wbg.__wbg_devicePixelRatio_cac0b66c0e1e056b=function(n){return o(n).devicePixelRatio},c.wbg.__wbg_localStorage_6e9ba4e9a3771427=function(){return D((function(n){const e=o(n).localStorage;return v(e)?0:i(e)}),arguments)},c.wbg.__wbg_cancelAnimationFrame_7a4ff0365b95acb4=function(){return D((function(n,e){o(n).cancelAnimationFrame(e)}),arguments)},c.wbg.__wbg_focus_086a81eb632614fb=function(){return D((function(n){o(n).focus()}),arguments)},c.wbg.__wbg_open_fd57bd436de42549=function(){return D((function(n,e,_,t,r){const b=o(n).open(d(e,_),d(t,r));return v(b)?0:i(b)}),arguments)},c.wbg.__wbg_requestAnimationFrame_8e3c7028c69ebaef=function(){return D((function(n,e){return o(n).requestAnimationFrame(o(e))}),arguments)},c.wbg.__wbg_fetch_ef7a6623d1fcd3b8=function(n,e){return i(o(n).fetch(o(e)))},c.wbg.__wbg_setProperty_ae9adf5d00216c03=function(){return D((function(n,e,_,t,r){o(n).setProperty(d(e,_),d(t,r))}),arguments)},c.wbg.__wbg_inverse_8af605ed9705f947=function(n){return i(o(n).inverse())},c.wbg.__wbg_protocol_8a7c3a0ad0534fb9=function(){return D((function(n,e){const _=p(o(e).protocol,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_}),arguments)},c.wbg.__wbg_assign_8412f2d177f8543c=function(){return D((function(n,e,_){o(n).assign(d(e,_))}),arguments)},c.wbg.__wbg_get_f2a42b72d9c3121e=function(){return D((function(n,e,_,t){const r=o(e)[d(_,t)];var c=v(r)?0:p(r,b.__wbindgen_malloc,b.__wbindgen_realloc),f=s;h()[n/4+1]=f,h()[n/4+0]=c}),arguments)},c.wbg.__wbg_set_fae17f247c4c8723=function(){return D((function(n,e,_,t,r){o(n)[d(e,_)]=d(t,r)}),arguments)},c.wbg.__wbg_delete_2a53f5694592407e=function(){return D((function(n,e,_){delete o(n)[d(e,_)]}),arguments)},c.wbg.__wbg_length_9132be38635fece5=function(n){return o(n).length},c.wbg.__wbg_offsetX_5888d22032ed9bd8=function(n){return o(n).offsetX},c.wbg.__wbg_offsetY_ca0bdbbd593cafb7=function(n){return o(n).offsetY},c.wbg.__wbg_button_78dae8616402469e=function(n){return o(n).button},c.wbg.__wbg_new_fcc3bfd6f1d02d9b=function(){return D((function(){return i(new Path2D)}),arguments)},c.wbg.__wbg_addPath_3f9b52fe12b3a8f4=function(n,e,_){o(n).addPath(o(e),o(_))},c.wbg.__wbg_closePath_e8740a8a4b33f4a2=function(n){o(n).closePath()},c.wbg.__wbg_lineTo_611f952172f57ea1=function(n,e,_){o(n).lineTo(e,_)},c.wbg.__wbg_moveTo_9b09fc77b253b4ff=function(n,e,_){o(n).moveTo(e,_)},c.wbg.__wbg_quadraticCurveTo_39645457683c039c=function(n,e,_,t,r){o(n).quadraticCurveTo(e,_,t,r)},c.wbg.__wbg_rect_e4248453dba3e49b=function(n,e,_,t,r){o(n).rect(e,_,t,r)},c.wbg.__wbg_connect_7fe7ce5856f531e9=function(){return D((function(n,e){return i(o(n).connect(o(e)))}),arguments)},c.wbg.__wbg_connect_3d91d2d170d6ecd4=function(){return D((function(n,e,_){return i(o(n).connect(o(e),_>>>0))}),arguments)},c.wbg.__wbg_connect_e916aa2972b69a20=function(){return D((function(n,e,_,t){return i(o(n).connect(o(e),_>>>0,t>>>0))}),arguments)},c.wbg.__wbg_disconnect_a00625849153bced=function(){return D((function(n){o(n).disconnect()}),arguments)},c.wbg.__wbg_outputBuffer_e9801f4e66879b0d=function(){return D((function(n){return i(o(n).outputBuffer)}),arguments)},c.wbg.__wbg_bindVertexArrayOES_35d97084dfc5f6f4=function(n,e){o(n).bindVertexArrayOES(o(e))},c.wbg.__wbg_createVertexArrayOES_69c38b2b74e927fa=function(n){const e=o(n).createVertexArrayOES();return v(e)?0:i(e)},c.wbg.__wbg_instanceof_Response_ccfeb62399355bcd=function(n){return o(n)instanceof Response},c.wbg.__wbg_url_06c0f822d68d195c=function(n,e){const _=p(o(e).url,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbg_ok_1538f4695dab1792=function(n){return o(n).ok},c.wbg.__wbg_statusText_750d3bf8e134b8f8=function(n,e){const _=p(o(e).statusText,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbg_arrayBuffer_5a99283a3954c850=function(){return D((function(n){return i(o(n).arrayBuffer())}),arguments)},c.wbg.__wbg_deltaY_f78bae9413139a24=function(n){return o(n).deltaY},c.wbg.__wbg_deltaMode_08c2fcea70146506=function(n){return o(n).deltaMode},c.wbg.__wbg_setbuffer_72cfecac4d22725d=function(n,e){o(n).buffer=o(e)},c.wbg.__wbg_setloop_b1a61b62498fa9e4=function(n,e){o(n).loop=0!==e},c.wbg.__wbg_setloopStart_f54e061b1de3b268=function(n,e){o(n).loopStart=e},c.wbg.__wbg_setloopEnd_d6430450275c920c=function(n,e){o(n).loopEnd=e},c.wbg.__wbg_setonended_f22c38d46d048b5e=function(n,e){o(n).onended=o(e)},c.wbg.__wbg_start_4f1790870dabedcf=function(){return D((function(n){o(n).start()}),arguments)},c.wbg.__wbg_start_19389908a04585e5=function(){return D((function(n,e,_){o(n).start(e,_)}),arguments)},c.wbg.__wbg_stop_f4ba0ccf4eeeda42=function(){return D((function(n,e){o(n).stop(e)}),arguments)},c.wbg.__wbg_setTransform_6a58eea25fa31e41=function(n,e){o(n).setTransform(o(e))},c.wbg.__wbg_instanceof_HtmlFormElement_e51c7005ee225f19=function(n){return o(n)instanceof HTMLFormElement},c.wbg.__wbg_submit_da9a1351634ab083=function(){return D((function(n){o(n).submit()}),arguments)},c.wbg.__wbg_now_20d2aadcf3cc17f7=function(n){return o(n).now()},c.wbg.__wbg_pointerId_8b2b0e9ad7c38495=function(n){return o(n).pointerId},c.wbg.__wbg_a_d41d0786eae57b41=function(n){return o(n).a},c.wbg.__wbg_seta_7a0efce1e1267ca4=function(n,e){o(n).a=e},c.wbg.__wbg_b_4662b7a44f9d4a9c=function(n){return o(n).b},c.wbg.__wbg_c_0486825ee52e1586=function(n){return o(n).c},c.wbg.__wbg_d_cbaa259381ebdb12=function(n){return o(n).d},c.wbg.__wbg_setd_7910219e2e519b38=function(n,e){o(n).d=e},c.wbg.__wbg_e_b35a73e0bbfb7f50=function(n){return o(n).e},c.wbg.__wbg_f_ad257c92a791f32b=function(n){return o(n).f},c.wbg.__wbg_new_ca9cc0487e8ea6fd=function(){return D((function(){return i(new DOMMatrix)}),arguments)},c.wbg.__wbg_newwitharray64_78b84021a57a1de8=function(){return D((function(n,e){return i(new DOMMatrix(q(n,e)))}),arguments)},c.wbg.__wbg_currentTarget_327b27bfa936c61f=function(n){const e=o(n).currentTarget;return v(e)?0:i(e)},c.wbg.__wbg_preventDefault_747982fd5fe3b6d0=function(n){o(n).preventDefault()},c.wbg.__wbg_instanceof_HtmlCanvasElement_b94545433bb4d2ef=function(n){return o(n)instanceof HTMLCanvasElement},c.wbg.__wbg_width_20b7a9ebdd5f4232=function(n){return o(n).width},c.wbg.__wbg_setwidth_654d8adcd4979eed=function(n,e){o(n).width=e>>>0},c.wbg.__wbg_height_57f43816c2227a89=function(n){return o(n).height},c.wbg.__wbg_setheight_2b662384bfacb65c=function(n,e){o(n).height=e>>>0},c.wbg.__wbg_getContext_0c19ba5c037e057f=function(){return D((function(n,e,_){const t=o(n).getContext(d(e,_));return v(t)?0:i(t)}),arguments)},c.wbg.__wbg_getContext_d7d734e1c1199dd1=function(){return D((function(n,e,_,t){const r=o(n).getContext(d(e,_),o(t));return v(r)?0:i(r)}),arguments)},c.wbg.__wbg_key_a8ae33ddc6ff786b=function(n,e){const _=p(o(e).key,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbg_code_a637bfca56413948=function(n,e){const _=p(o(e).code,b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbg_newwithstrandinit_fd99688f189f053e=function(){return D((function(n,e,_){return i(new Request(d(n,e),o(_)))}),arguments)},c.wbg.__wbg_setonaudioprocess_691238df792e5983=function(n,e){o(n).onaudioprocess=o(e)},c.wbg.__wbg_body_2a1ff14b05042a51=function(n){const e=o(n).body;return v(e)?0:i(e)},c.wbg.__wbg_createElement_3c9b5f3aa42457a1=function(){return D((function(n,e,_){return i(o(n).createElement(d(e,_)))}),arguments)},c.wbg.__wbg_createElementNS_a0904ea4c02292f4=function(){return D((function(n,e,_,t,r){return i(o(n).createElementNS(0===e?void 0:d(e,_),d(t,r)))}),arguments)},c.wbg.__wbg_setid_ea9f00ecb5da9dde=function(n,e,_){o(n).id=d(e,_)},c.wbg.__wbg_clientWidth_11f72beceb108bff=function(n){return o(n).clientWidth},c.wbg.__wbg_clientHeight_205d93d6eadff351=function(n){return o(n).clientHeight},c.wbg.__wbg_querySelector_277db48579b05107=function(){return D((function(n,e,_){const t=o(n).querySelector(d(e,_));return v(t)?0:i(t)}),arguments)},c.wbg.__wbg_releasePointerCapture_9ccf528d12801791=function(){return D((function(n,e){o(n).releasePointerCapture(e)}),arguments)},c.wbg.__wbg_setAttribute_8d90e00d652037be=function(){return D((function(n,e,_,t,r){o(n).setAttribute(d(e,_),d(t,r))}),arguments)},c.wbg.__wbg_setAttributeNS_59dc39cb257152af=function(){return D((function(n,e,_,t,r,b,c){o(n).setAttributeNS(0===e?void 0:d(e,_),d(t,r),d(b,c))}),arguments)},c.wbg.__wbg_setPointerCapture_c6fe2a502d7c4f27=function(){return D((function(n,e){o(n).setPointerCapture(e)}),arguments)},c.wbg.__wbg_remove_0bfd44c3622f33b2=function(n){o(n).remove()},c.wbg.__wbg_instanceof_WebGlRenderingContext_b0885da52b151d86=function(n){return o(n)instanceof WebGLRenderingContext},c.wbg.__wbg_drawingBufferWidth_d531da9205a735a4=function(n){return o(n).drawingBufferWidth},c.wbg.__wbg_drawingBufferHeight_6a1b146e4b52493c=function(n){return o(n).drawingBufferHeight},c.wbg.__wbg_bufferData_c4192729016213be=function(n,e,_,t,r){o(n).bufferData(e>>>0,U(_,t),r>>>0)},c.wbg.__wbg_texImage2D_60614361e73b0339=function(){return D((function(n,e,_,t,r,b,c,f,u,i,a){o(n).texImage2D(e>>>0,_,t,r,b,c,f>>>0,u>>>0,0===i?void 0:U(i,a))}),arguments)},c.wbg.__wbg_uniform1fv_e75d6126004bb5f7=function(n,e,_,t){o(n).uniform1fv(o(e),V(_,t))},c.wbg.__wbg_uniform4fv_54aeb419c88f21df=function(n,e,_,t){o(n).uniform4fv(o(e),V(_,t))},c.wbg.__wbg_uniformMatrix3fv_81c8f94bf3a05d08=function(n,e,_,t,r){o(n).uniformMatrix3fv(o(e),0!==_,V(t,r))},c.wbg.__wbg_uniformMatrix4fv_caf5129a09f4f267=function(n,e,_,t,r){o(n).uniformMatrix4fv(o(e),0!==_,V(t,r))},c.wbg.__wbg_activeTexture_1ba5758f0a8358b6=function(n,e){o(n).activeTexture(e>>>0)},c.wbg.__wbg_attachShader_0867104b37cae2d6=function(n,e,_){o(n).attachShader(o(e),o(_))},c.wbg.__wbg_bindBuffer_28e62f648e99e251=function(n,e,_){o(n).bindBuffer(e>>>0,o(_))},c.wbg.__wbg_bindFramebuffer_b7a06305d2823b34=function(n,e,_){o(n).bindFramebuffer(e>>>0,o(_))},c.wbg.__wbg_bindRenderbuffer_0fe389ab46c4d00d=function(n,e,_){o(n).bindRenderbuffer(e>>>0,o(_))},c.wbg.__wbg_bindTexture_27a724e7303eec67=function(n,e,_){o(n).bindTexture(e>>>0,o(_))},c.wbg.__wbg_blendFunc_08a6e279418be6da=function(n,e,_){o(n).blendFunc(e>>>0,_>>>0)},c.wbg.__wbg_clear_786a8deca6672a9d=function(n,e){o(n).clear(e>>>0)},c.wbg.__wbg_clearColor_2c1d714dee770474=function(n,e,_,t,r){o(n).clearColor(e,_,t,r)},c.wbg.__wbg_colorMask_0cfe7588f073be4e=function(n,e,_,t,r){o(n).colorMask(0!==e,0!==_,0!==t,0!==r)},c.wbg.__wbg_compileShader_1b371763cfd802f7=function(n,e){o(n).compileShader(o(e))},c.wbg.__wbg_createBuffer_48c0376fc0746386=function(n){const e=o(n).createBuffer();return v(e)?0:i(e)},c.wbg.__wbg_createProgram_c2675d2cc83435a6=function(n){const e=o(n).createProgram();return v(e)?0:i(e)},c.wbg.__wbg_createShader_8d2a55e7777bbea7=function(n,e){const _=o(n).createShader(e>>>0);return v(_)?0:i(_)},c.wbg.__wbg_createTexture_23de5d8f7988e663=function(n){const e=o(n).createTexture();return v(e)?0:i(e)},c.wbg.__wbg_disable_ada50e27543b1ebd=function(n,e){o(n).disable(e>>>0)},c.wbg.__wbg_disableVertexAttribArray_e1c513cfd55355c9=function(n,e){o(n).disableVertexAttribArray(e>>>0)},c.wbg.__wbg_drawElements_efa6c15e2787a58c=function(n,e,_,t,r){o(n).drawElements(e>>>0,_,t>>>0,r)},c.wbg.__wbg_enable_981a414a11bbed87=function(n,e){o(n).enable(e>>>0)},c.wbg.__wbg_enableVertexAttribArray_1d5f3ff6e7da7095=function(n,e){o(n).enableVertexAttribArray(e>>>0)},c.wbg.__wbg_getAttribLocation_f875dcf14748b9d4=function(n,e,_,t){return o(n).getAttribLocation(o(e),d(_,t))},c.wbg.__wbg_getExtension_bea19db80bdbefef=function(){return D((function(n,e,_){const t=o(n).getExtension(d(e,_));return v(t)?0:i(t)}),arguments)},c.wbg.__wbg_getParameter_f511b92ebf87c44e=function(){return D((function(n,e){return i(o(n).getParameter(e>>>0))}),arguments)},c.wbg.__wbg_getProgramInfoLog_e70b0120bda14895=function(n,e,_){const t=o(e).getProgramInfoLog(o(_));var r=v(t)?0:p(t,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;h()[n/4+1]=c,h()[n/4+0]=r},c.wbg.__wbg_getProgramParameter_e4fe54d806806081=function(n,e,_){return i(o(n).getProgramParameter(o(e),_>>>0))},c.wbg.__wbg_getShaderInfoLog_95d068aeccc5dbb3=function(n,e,_){const t=o(e).getShaderInfoLog(o(_));var r=v(t)?0:p(t,b.__wbindgen_malloc,b.__wbindgen_realloc),c=s;h()[n/4+1]=c,h()[n/4+0]=r},c.wbg.__wbg_getUniformLocation_776a1f58e7904d81=function(n,e,_,t){const r=o(n).getUniformLocation(o(e),d(_,t));return v(r)?0:i(r)},c.wbg.__wbg_linkProgram_b98c8967f45a44fd=function(n,e){o(n).linkProgram(o(e))},c.wbg.__wbg_pixelStorei_707653d2f29a6c67=function(n,e,_){o(n).pixelStorei(e>>>0,_)},c.wbg.__wbg_shaderSource_daca520f63ef8fca=function(n,e,_,t){o(n).shaderSource(o(e),d(_,t))},c.wbg.__wbg_stencilFunc_5e3584d9ea466585=function(n,e,_,t){o(n).stencilFunc(e>>>0,_,t>>>0)},c.wbg.__wbg_stencilMask_9ea2bf2fb1616a9b=function(n,e){o(n).stencilMask(e>>>0)},c.wbg.__wbg_stencilOp_612a592601e921f5=function(n,e,_,t){o(n).stencilOp(e>>>0,_>>>0,t>>>0)},c.wbg.__wbg_texParameteri_1298d8804b59bbc0=function(n,e,_,t){o(n).texParameteri(e>>>0,_>>>0,t)},c.wbg.__wbg_uniform1f_bb331865fe6d123b=function(n,e,_){o(n).uniform1f(o(e),_)},c.wbg.__wbg_uniform1i_42b99e992f794a51=function(n,e,_){o(n).uniform1i(o(e),_)},c.wbg.__wbg_useProgram_022d72a653706891=function(n,e){o(n).useProgram(o(e))},c.wbg.__wbg_vertexAttribPointer_a75ea424ba9fa4e8=function(n,e,_,t,r,b,c){o(n).vertexAttribPointer(e>>>0,_,t>>>0,0!==r,b,c)},c.wbg.__wbg_viewport_6c864379ded67e8a=function(n,e,_,t,r){o(n).viewport(e,_,t,r)},c.wbg.__wbg_debug_fda1f49ea6af7a1d=function(n){console.debug(o(n))},c.wbg.__wbg_error_8ff19d586a987aef=function(n){console.error(o(n))},c.wbg.__wbg_info_c8f1b00be4ef10bc=function(n){console.info(o(n))},c.wbg.__wbg_log_e8ba7b992c7ad0eb=function(n){console.log(o(n))},c.wbg.__wbg_warn_0227db1aa6989248=function(n){console.warn(o(n))},c.wbg.__wbg_style_dd3ba68ea919f1b0=function(n){return i(o(n).style)},c.wbg.__wbg_setvalue_adeb9030ea412869=function(n,e){o(n).value=e},c.wbg.__wbg_linearRampToValueAtTime_81378d2935036506=function(){return D((function(n,e,_){return i(o(n).linearRampToValueAtTime(e,_))}),arguments)},c.wbg.__wbg_setValueAtTime_9b2c1dde4f1815e3=function(){return D((function(n,e,_){return i(o(n).setValueAtTime(e,_))}),arguments)},c.wbg.__wbg_newwithbuffersourcesequenceandoptions_1c1614ce7cfbc5e4=function(){return D((function(n,e){return i(new Blob(o(n),o(e)))}),arguments)},c.wbg.__wbg_addEventListener_78d3aa7e06ee5b73=function(){return D((function(n,e,_,t){o(n).addEventListener(d(e,_),o(t))}),arguments)},c.wbg.__wbg_addEventListener_be0c061a1359c1dd=function(){return D((function(n,e,_,t,r){o(n).addEventListener(d(e,_),o(t),o(r))}),arguments)},c.wbg.__wbg_addEventListener_fbf7ce59794a417b=function(){return D((function(n,e,_,t,r){o(n).addEventListener(d(e,_),o(t),0!==r)}),arguments)},c.wbg.__wbg_removeEventListener_ab2f93784dae0528=function(){return D((function(n,e,_,t){o(n).removeEventListener(d(e,_),o(t))}),arguments)},c.wbg.__wbg_removeEventListener_3e7319b5d7c8be8f=function(){return D((function(n,e,_,t,r){o(n).removeEventListener(d(e,_),o(t),0!==r)}),arguments)},c.wbg.__wbg_data_454197b135a25142=function(n,e){const _=function(n,e){const _=e(1*n.length);return w().set(n,_/1),s=n.length,_}(o(e).data,b.__wbindgen_malloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbg_newwithu8clampedarray_decce474908c8867=function(){return D((function(n,e,_){return i(new ImageData(H(n,e),_>>>0))}),arguments)},c.wbg.__wbg_instanceof_CanvasRenderingContext2d_405495bb0ea92c4f=function(n){return o(n)instanceof CanvasRenderingContext2D},c.wbg.__wbg_setglobalAlpha_d6d2f5636a624c43=function(n,e){o(n).globalAlpha=e},c.wbg.__wbg_setglobalCompositeOperation_2752e9ced94fe641=function(){return D((function(n,e,_){o(n).globalCompositeOperation=d(e,_)}),arguments)},c.wbg.__wbg_setstrokeStyle_32540003cbfe210b=function(n,e){o(n).strokeStyle=o(e)},c.wbg.__wbg_setfillStyle_1d391c4891a6ec4d=function(n,e){o(n).fillStyle=o(e)},c.wbg.__wbg_setfilter_9710e4517560e4a6=function(n,e,_){o(n).filter=d(e,_)},c.wbg.__wbg_setimageSmoothingEnabled_3f82e28e8673fe7d=function(n,e){o(n).imageSmoothingEnabled=0!==e},c.wbg.__wbg_setlineWidth_6f1b76036ab98bfc=function(n,e){o(n).lineWidth=e},c.wbg.__wbg_setlineCap_8c6c8fa23d88cb4f=function(n,e,_){o(n).lineCap=d(e,_)},c.wbg.__wbg_setlineJoin_be4495c94d43d8b0=function(n,e,_){o(n).lineJoin=d(e,_)},c.wbg.__wbg_setmiterLimit_87c6ceb7bc2d2662=function(n,e){o(n).miterLimit=e},c.wbg.__wbg_drawImage_5d4f6b1d51d3b118=function(){return D((function(n,e,_,t){o(n).drawImage(o(e),_,t)}),arguments)},c.wbg.__wbg_clip_68e3eb8a51018328=function(n,e,_){o(n).clip(o(e),u(_))},c.wbg.__wbg_fill_d568e4c6dfc20014=function(n,e,_){o(n).fill(o(e),u(_))},c.wbg.__wbg_stroke_269216709f852773=function(n,e){o(n).stroke(o(e))},c.wbg.__wbg_createLinearGradient_76b30efa01034289=function(n,e,_,t,r){return i(o(n).createLinearGradient(e,_,t,r))},c.wbg.__wbg_createPattern_7151c7f4606f1f65=function(){return D((function(n,e,_,t){const r=o(n).createPattern(o(e),d(_,t));return v(r)?0:i(r)}),arguments)},c.wbg.__wbg_createRadialGradient_c70ef75c8c93c6be=function(){return D((function(n,e,_,t,r,b,c){return i(o(n).createRadialGradient(e,_,t,r,b,c))}),arguments)},c.wbg.__wbg_getImageData_47b530423f896826=function(){return D((function(n,e,_,t,r){return i(o(n).getImageData(e,_,t,r))}),arguments)},c.wbg.__wbg_putImageData_fad983ad6d58ee62=function(){return D((function(n,e,_,t){o(n).putImageData(o(e),_,t)}),arguments)},c.wbg.__wbg_clearRect_5e0469d0d11a7aee=function(n,e,_,t,r){o(n).clearRect(e,_,t,r)},c.wbg.__wbg_fillRect_59b38b7e6f8d0717=function(n,e,_,t,r){o(n).fillRect(e,_,t,r)},c.wbg.__wbg_restore_56c80343ddc70aeb=function(n){o(n).restore()},c.wbg.__wbg_save_faa4566184f134f6=function(n){o(n).save()},c.wbg.__wbg_resetTransform_be6d3f0c0e150bac=function(){return D((function(n){o(n).resetTransform()}),arguments)},c.wbg.__wbg_setTransform_f06275e4cc6b9b71=function(){return D((function(n,e,_,t,r,b,c){o(n).setTransform(e,_,t,r,b,c)}),arguments)},c.wbg.__wbg_transform_1875a09bb4212e88=function(){return D((function(n,e,_,t,r,b,c){o(n).transform(e,_,t,r,b,c)}),arguments)},c.wbg.__wbg_destination_f4f5ac55ff6e3785=function(n){return i(o(n).destination)},c.wbg.__wbg_sampleRate_310f869d3d9e8715=function(n){return o(n).sampleRate},c.wbg.__wbg_currentTime_510dde7d31c119e8=function(n){return o(n).currentTime},c.wbg.__wbg_new_14af17251d0bf480=function(){return D((function(){return i(new r)}),arguments)},c.wbg.__wbg_suspend_c2247addb78d3e2e=function(){return D((function(n){return i(o(n).suspend())}),arguments)},c.wbg.__wbg_createBuffer_19d3c1651316a6c2=function(){return D((function(n,e,_,t){return i(o(n).createBuffer(e>>>0,_>>>0,t))}),arguments)},c.wbg.__wbg_createBufferSource_414d1e25fd67f353=function(){return D((function(n){return i(o(n).createBufferSource())}),arguments)},c.wbg.__wbg_createChannelMerger_c8ea5e970b0215b7=function(){return D((function(n,e){return i(o(n).createChannelMerger(e>>>0))}),arguments)},c.wbg.__wbg_createChannelSplitter_1e34548bc282d3e6=function(){return D((function(n,e){return i(o(n).createChannelSplitter(e>>>0))}),arguments)},c.wbg.__wbg_createGain_ec81f7114545acfb=function(){return D((function(n){return i(o(n).createGain())}),arguments)},c.wbg.__wbg_createScriptProcessor_68a6f46b3c8337eb=function(){return D((function(n,e,_,t){return i(o(n).createScriptProcessor(e>>>0,_>>>0,t>>>0))}),arguments)},c.wbg.__wbg_decodeAudioData_080cb9872a95b009=function(){return D((function(n,e,_,t){return i(o(n).decodeAudioData(o(e),o(_),o(t)))}),arguments)},c.wbg.__wbg_resume_00606714ccb596ff=function(){return D((function(n){return i(o(n).resume())}),arguments)},c.wbg.__wbg_addColorStop_d8e4383b19c1dc6f=function(){return D((function(n,e,_,t){o(n).addColorStop(e,d(_,t))}),arguments)},c.wbg.__wbg_gain_30b6e9ac5fa0f7b0=function(n){return i(o(n).gain)},c.wbg.__wbg_baseURI_9c41e8e6d59451b1=function(){return D((function(n,e){const _=o(e).baseURI;var t=v(_)?0:p(_,b.__wbindgen_malloc,b.__wbindgen_realloc),r=s;h()[n/4+1]=r,h()[n/4+0]=t}),arguments)},c.wbg.__wbg_appendChild_a86c0da8d152eae4=function(){return D((function(n,e){return i(o(n).appendChild(o(e)))}),arguments)},c.wbg.__wbg_get_590a2cd912f2ae46=function(n,e){return i(o(n)[e>>>0])},c.wbg.__wbg_new_94fb1279cf6afea5=function(){return i(new Array)},c.wbg.__wbg_newnoargs_e23b458e372830de=function(n,e){return i(new Function(d(n,e)))},c.wbg.__wbg_next_bf3d83fc18df496e=function(){return D((function(n){return i(o(n).next())}),arguments)},c.wbg.__wbg_done_040f966faa9a72b3=function(n){return o(n).done},c.wbg.__wbg_value_419afbd9b9574c4c=function(n){return i(o(n).value)},c.wbg.__wbg_get_a9cab131e3152c49=function(){return D((function(n,e){return i(Reflect.get(o(n),o(e)))}),arguments)},c.wbg.__wbg_call_ae78342adc33730a=function(){return D((function(n,e){return i(o(n).call(o(e)))}),arguments)},c.wbg.__wbg_new_36359baae5a47e27=function(){return i(new Object)},c.wbg.__wbg_self_99737b4dcdf6f0d8=function(){return D((function(){return i(self.self)}),arguments)},c.wbg.__wbg_window_9b61fbbf3564c4fb=function(){return D((function(){return i(window.window)}),arguments)},c.wbg.__wbg_globalThis_8e275ef40caea3a3=function(){return D((function(){return i(globalThis.globalThis)}),arguments)},c.wbg.__wbg_global_5de1e0f82bddcd27=function(){return D((function(){return i(_.g.global)}),arguments)},c.wbg.__wbg_isArray_6721f2e508996340=function(n){return Array.isArray(o(n))},c.wbg.__wbg_of_1dbd33a0abd074ce=function(n,e){return i(Array.of(o(n),o(e)))},c.wbg.__wbg_push_40c6a90f1805aa90=function(n,e){return o(n).push(o(e))},c.wbg.__wbg_instanceof_ArrayBuffer_b81b40c2ae0ab898=function(n){return o(n)instanceof ArrayBuffer},c.wbg.__wbg_new_e3b1f44ea72e4e03=function(n){return i(new ArrayBuffer(n>>>0))},c.wbg.__wbg_slice_86a0334a3c44d85f=function(n,e,_){return i(o(n).slice(e>>>0,_>>>0))},c.wbg.__wbg_values_b1b9e8c63dbe01c2=function(n){return i(o(n).values())},c.wbg.__wbg_apply_f2d0f65c219e5594=function(){return D((function(n,e,_){return i(o(n).apply(o(e),o(_)))}),arguments)},c.wbg.__wbg_call_3ed288a247f13ea5=function(){return D((function(n,e,_){return i(o(n).call(o(e),o(_)))}),arguments)},c.wbg.__wbg_getTime_bffb1c09df09618b=function(n){return o(n).getTime()},c.wbg.__wbg_getTimezoneOffset_9c9a2f880882a1d7=function(n){return o(n).getTimezoneOffset()},c.wbg.__wbg_new0_0ff7eb5c1486f3ec=function(){return i(new Date)},c.wbg.__wbg_instanceof_Object_ac36a5f4244e4963=function(n){return o(n)instanceof Object},c.wbg.__wbg_entries_aaf7a1fbe90f014a=function(n){return i(Object.entries(o(n)))},c.wbg.__wbg_fromEntries_753a5d6f3530e028=function(){return D((function(n){return i(Object.fromEntries(o(n)))}),arguments)},c.wbg.__wbg_is_40969b082b54c84d=function(n,e){return Object.is(o(n),o(e))},c.wbg.__wbg_new_37705eed627d5ed9=function(n,e){try{var _={a:n,b:e};const t=new Promise(((n,e)=>{const t=_.a;_.a=0;try{return function(n,e,_,t){b.wasm_bindgen__convert__closures__invoke2_mut__h5cbcd8424861da9d(n,e,i(_),i(t))}(t,_.b,n,e)}finally{_.a=t}}));return i(t)}finally{_.a=_.b=0}},c.wbg.__wbg_resolve_a9a87bdd64e9e62c=function(n){return i(Promise.resolve(o(n)))},c.wbg.__wbg_then_ce526c837d07b68f=function(n,e){return i(o(n).then(o(e)))},c.wbg.__wbg_then_842e65b843962f56=function(n,e,_){return i(o(n).then(o(e),o(_)))},c.wbg.__wbg_buffer_7af23f65f6c64548=function(n){return i(o(n).buffer)},c.wbg.__wbg_newwithbyteoffsetandlength_ce1e75f0ce5f7974=function(n,e,_){return i(new Uint8Array(o(n),e>>>0,_>>>0))},c.wbg.__wbg_new_cc9018bd6f283b6f=function(n){return i(new Uint8Array(o(n)))},c.wbg.__wbg_set_f25e869e4565d2a2=function(n,e,_){o(n).set(o(e),_>>>0)},c.wbg.__wbg_length_0acb1cf9bbaf8519=function(n){return o(n).length},c.wbg.__wbg_newwithlength_8f0657faca9f1422=function(n){return i(new Uint8Array(n>>>0))},c.wbg.__wbg_fill_86476dd77be83461=function(n,e,_,t){return i(o(n).fill(e,_>>>0,t>>>0))},c.wbg.__wbg_buffer_0e70c88190dd0999=function(n){return i(o(n).buffer)},c.wbg.__wbg_subarray_da527dbd24eafb6b=function(n,e,_){return i(o(n).subarray(e>>>0,_>>>0))},c.wbg.__wbg_byteLength_e07852258f592e80=function(n){return o(n).byteLength},c.wbg.__wbg_byteOffset_3e0482615c7f74fd=function(n){return o(n).byteOffset},c.wbg.__wbg_ownKeys_9a927fb2995888f1=function(){return D((function(n){return i(Reflect.ownKeys(o(n)))}),arguments)},c.wbg.__wbg_set_93b1c87ee2af852e=function(){return D((function(n,e,_){return Reflect.set(o(n),o(e),o(_))}),arguments)},c.wbg.__wbindgen_debug_string=function(n,e){const _=p(C(o(e)),b.__wbindgen_malloc,b.__wbindgen_realloc),t=s;h()[n/4+1]=t,h()[n/4+0]=_},c.wbg.__wbindgen_throw=function(n,e){throw new Error(d(n,e))},c.wbg.__wbindgen_memory=function(){return i(b.memory)},c.wbg.__wbindgen_closure_wrapper339=function(n,e,_){return i(R(n,e,3,S))},c.wbg.__wbindgen_closure_wrapper341=function(n,e,_){return i(R(n,e,3,T))},c.wbg.__wbindgen_closure_wrapper343=function(n,e,_){return i(R(n,e,3,k))},c.wbg.__wbindgen_closure_wrapper345=function(n,e,_){return i(R(n,e,3,E))},c.wbg.__wbindgen_closure_wrapper347=function(n,e,_){return i(R(n,e,3,F))},c.wbg.__wbindgen_closure_wrapper349=function(n,e,_){return i(R(n,e,3,M))},c.wbg.__wbindgen_closure_wrapper351=function(n,e,_){return i(R(n,e,3,O))},c.wbg.__wbindgen_closure_wrapper353=function(n,e,_){return i(R(n,e,3,P))},c.wbg.__wbindgen_closure_wrapper7025=function(n,e,_){return i(R(n,e,2784,L))},("string"==typeof e||"function"==typeof Request&&e instanceof Request||"function"==typeof URL&&e instanceof URL)&&(e=fetch(e));const{instance:f,module:a}=await async function(n,e){if("function"==typeof Response&&n instanceof Response){if("function"==typeof WebAssembly.instantiateStreaming)try{return await WebAssembly.instantiateStreaming(n,e)}catch(e){if("application/wasm"==n.headers.get("Content-Type"))throw e;console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",e)}const _=await n.arrayBuffer();return await WebAssembly.instantiate(_,e)}{const _=await WebAssembly.instantiate(n,e);return _ instanceof WebAssembly.Instance?{instance:_,module:n}:_}}(await e,c);return b=f.exports,n.__wbindgen_wasm_module=a,b}},285:(n,e,_)=>{n.exports=_.p+"69052e08f0f291fb6d82.wasm"}}]);
//# sourceMappingURL=core.ruffle.53a2873dad31763672e1.js.map