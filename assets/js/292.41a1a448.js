(window.webpackJsonp=window.webpackJsonp||[]).push([[292],{752:function(t,s,a){"use strict";a.r(s);var r=a(35),n=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"国际化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#国际化"}},[t._v("#")]),t._v(" 国际化")]),t._v(" "),a("p",[a("code",[t._v("Press Plus")]),t._v(" 采用中文作为默认语言，同时支持多语言切换，请按照下方教程进行国际化设置。")]),t._v(" "),a("h2",{attrs:{id:"使用方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方法"}},[t._v("#")]),t._v(" 使用方法")]),t._v(" "),a("h3",{attrs:{id:"多语言切换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多语言切换"}},[t._v("#")]),t._v(" 多语言切换")]),t._v(" "),a("p",[t._v("使用 "),a("code",[t._v("locale.use")]),t._v(" 方法可以切换当前使用的语言，下面以英文为例：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" locale "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'press-plus/locale'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 引入英文语言包")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" enUS "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'press-plus/locale/lang/en-US'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlocale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("enUS"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"覆盖语言包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#覆盖语言包"}},[t._v("#")]),t._v(" 覆盖语言包")]),t._v(" "),a("p",[t._v("通过 "),a("code",[t._v("locale.add")]),t._v(" 方法可以实现文案的修改和扩展，示例如下：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" locale "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'press-plus/locale'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" messages "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string-property property"}},[t._v("'zh-CN'")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    picker"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      confirm"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'关闭'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将'确认'修改为'关闭'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nlocale"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("messages"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"语言包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语言包"}},[t._v("#")]),t._v(" 语言包")]),t._v(" "),a("p",[t._v("目前支持的语言:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("语言")]),t._v(" "),a("th",[t._v("文件名")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("简体中文")]),t._v(" "),a("td",[t._v("zh-CN")])]),t._v(" "),a("tr",[a("td",[t._v("繁體中文（港）")]),t._v(" "),a("td",[t._v("zh-HK")])]),t._v(" "),a("tr",[a("td",[t._v("繁體中文（台）")]),t._v(" "),a("td",[t._v("zh-TW")])]),t._v(" "),a("tr",[a("td",[t._v("英语")]),t._v(" "),a("td",[t._v("en-US")])]),t._v(" "),a("tr",[a("td",[t._v("德语")]),t._v(" "),a("td",[t._v("de-DE")])]),t._v(" "),a("tr",[a("td",[t._v("德语 (正式)")]),t._v(" "),a("td",[t._v("de-DE-formal")])]),t._v(" "),a("tr",[a("td",[t._v("土耳其语")]),t._v(" "),a("td",[t._v("tr-TR")])]),t._v(" "),a("tr",[a("td",[t._v("西班牙语")]),t._v(" "),a("td",[t._v("es-ES")])]),t._v(" "),a("tr",[a("td",[t._v("葡萄牙语（葡萄牙）")]),t._v(" "),a("td",[t._v("pt-PT")])]),t._v(" "),a("tr",[a("td",[t._v("葡萄牙语（巴西）")]),t._v(" "),a("td",[t._v("pt-BR")])]),t._v(" "),a("tr",[a("td",[t._v("日语")]),t._v(" "),a("td",[t._v("ja-JP")])]),t._v(" "),a("tr",[a("td",[t._v("罗马尼亚语")]),t._v(" "),a("td",[t._v("ro-RO")])]),t._v(" "),a("tr",[a("td",[t._v("挪威语")]),t._v(" "),a("td",[t._v("nb-NO")])]),t._v(" "),a("tr",[a("td",[t._v("泰语")]),t._v(" "),a("td",[t._v("th-TH")])]),t._v(" "),a("tr",[a("td",[t._v("法语")]),t._v(" "),a("td",[t._v("fr-FR")])]),t._v(" "),a("tr",[a("td",[t._v("越南语")]),t._v(" "),a("td",[t._v("vi-VN")])])])]),t._v(" "),a("blockquote",[a("p",[t._v("在 "),a("a",{attrs:{href:"https://github.com/novlan1/press-plus/tree/release/src/packages/locale/lang",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1),t._v(" 查看所有的语言包源文件。")])])])}),[],!1,null,null,null);s.default=n.exports}}]);