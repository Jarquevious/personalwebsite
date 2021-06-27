!(function (e, r) {
	for (var t in r) e[t] = r[t];
})(
	window,
	(function (e) {
		var r = {};
		function t(n) {
			if (r[n]) return r[n].exports;
			var o = (r[n] = { i: n, l: !1, exports: {} });
			return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
		}
		return (
			(t.m = e),
			(t.c = r),
			(t.d = function (e, r, n) {
				t.o(e, r) || Object.defineProperty(e, r, { enumerable: !0, get: n });
			}),
			(t.r = function (e) {
				"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
					Object.defineProperty(e, "__esModule", { value: !0 });
			}),
			(t.t = function (e, r) {
				if ((1 & r && (e = t(e)), 8 & r)) return e;
				if (4 & r && "object" == typeof e && e && e.__esModule) return e;
				var n = Object.create(null);
				if ((t.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: e }), 2 & r && "string" != typeof e))
					for (var o in e)
						t.d(
							n,
							o,
							function (r) {
								return e[r];
							}.bind(null, o)
						);
				return n;
			}),
			(t.n = function (e) {
				var r =
					e && e.__esModule
						? function () {
								return e.default;
						  }
						: function () {
								return e;
						  };
				return t.d(r, "a", r), r;
			}),
			(t.o = function (e, r) {
				return Object.prototype.hasOwnProperty.call(e, r);
			}),
			(t.p = ""),
			t((t.s = 0))
		);
	})([
		function (e, r, t) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 });
			var n = t(1);
			(window.IFrameWorker = n.IFrameWorker), "file:" === location.protocol && (window.Worker = n.IFrameWorker);
		},
		function (e, r, t) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }), (r.IFrameWorker = void 0);
			var n = t(2);
			var o = (function () {
				function e(e, r) {
					var t = this;
					if (
						((this.url = e),
						(this.onerror = null),
						(this.onmessage = null),
						(this.onmessageerror = null),
						(this.handleMessage = function (e) {
							e.source === t.worker &&
								(e.stopImmediatePropagation(),
								t.dispatchEvent(new MessageEvent("message", { data: e.data })),
								t.onmessage && t.onmessage(e));
						}),
						(this.handleError = function (e, r, n, o, i) {
							if (r === t.url.toString()) {
								var s = new ErrorEvent("error", { message: e, filename: r, lineno: n, colno: o, error: i });
								t.dispatchEvent(s), t.onerror && t.onerror(s);
							}
						}),
						void 0 !== r)
					)
						throw new TypeError("Options are not supported for iframe workers");
					var o,
						i = new EventTarget();
					(this.addEventListener = i.addEventListener.bind(i)),
						(this.removeEventListener = i.removeEventListener.bind(i)),
						(this.dispatchEvent = i.dispatchEvent.bind(i)),
						document.body.appendChild(
							(this.iframe = (((o = document.createElement("iframe")).width = o.height = o.frameBorder = "0"), o))
						),
						this.worker.document.open(),
						this.worker.document.write(
							"\n      <html>\n        <body>\n          <script>\n            postMessage = " +
								n.postMessage +
								"\n            importScripts = " +
								n.importScripts +
								'\n            addEventListener("error", function(ev) {\n              parent.dispatchEvent(new ErrorEvent("error", {\n                filename: "' +
								e +
								'",\n                error: ev.error\n              }))\n            })\n          </script>\n          <script src="' +
								e +
								"?" +
								+Date.now() +
								'"></script>\n        </body>\n      </html>\n    '
						),
						this.worker.document.close(),
						window.addEventListener("message", this.handleMessage),
						(window.onerror = this.handleError),
						(this.ready = new Promise(function (e, r) {
							(t.worker.onload = e), (t.worker.onerror = r);
						}));
				}
				return (
					(e.prototype.terminate = function () {
						document.body.removeChild(this.iframe),
							window.removeEventListener("message", this.handleMessage),
							(window.onerror = null);
					}),
					(e.prototype.postMessage = function (e) {
						var r = this;
						this.ready.catch().then(function () {
							r.worker.dispatchEvent(new MessageEvent("message", { data: e }));
						});
					}),
					Object.defineProperty(e.prototype, "worker", {
						get: function () {
							if (!this.iframe.contentWindow) throw new ReferenceError("Invalid iframe: expected window to be present");
							return this.iframe.contentWindow;
						},
						enumerable: !1,
						configurable: !0,
					}),
					e
				);
			})();
			r.IFrameWorker = o;
		},
		function (e, r, t) {
			"use strict";
			Object.defineProperty(r, "__esModule", { value: !0 }),
				(r.importScripts = r.postMessage = void 0),
				(r.postMessage = function (e, r) {
					parent.postMessage(e, r || "*");
				}),
				(r.importScripts = function () {
					for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
					return e.reduce(function (e, r) {
						return e.then(function () {
							return new Promise(function (e) {
								var t = document.createElement("script");
								(t.src = r),
									t.addEventListener("load", function () {
										return e();
									}),
									document.body.appendChild(t);
							});
						});
					}, Promise.resolve());
				});
		},
	])
);
