(window.webpackJsonp=window.webpackJsonp||[]).push([[289],{748:function(t,s,a){"use strict";a.r(s);var e=a(35),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"contribution-guidelines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contribution-guidelines"}},[t._v("#")]),t._v(" Contribution Guidelines")]),t._v(" "),a("h2",{attrs:{id:"_1-directory-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-directory-structure"}},[t._v("#")]),t._v(" 1. Directory structure")]),t._v(" "),a("p",[t._v("The project structure is as follows:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("- docs "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Document address")]),t._v("\n- plugin "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [demo] Plug-in used in the project")]),t._v("\n- script "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# script")]),t._v("\n- tests "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# test cases")]),t._v("\n- src\n   - common "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [demo] public content")]),t._v("\n   - packages "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Package content released to the outside world")]),t._v("\n   - pages "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [demo] page content")]),t._v("\n   - static "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [demo] static content")]),t._v("\n   - App.vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [demo] Application entrance")]),t._v("\n   - main.js\n   - pages.json\n")])])]),a("p",[t._v("In addition to components, the component library also includes documents, examples, engineering configurations, etc. For the convenience of maintenance, examples, documents, and components are placed in one folder, so a standard component directory is as follows:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("-press-button\n   - demo-helper/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional, data and methods related to component examples")]),t._v("\n   - helper/ "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Optional, related methods of business layer processing data, may introduce t-comm third-party module")]),t._v("\n   - demo.vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# component example")]),t._v("\n   - press-button.vue "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# component")]),t._v("\n   - README.md "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Component Chinese documentation")]),t._v("\n   - README.en-US.md "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Component English documentation")]),t._v("\n")])])]),a("p",[a("code",[t._v("src/packages")]),t._v(" is composed of these component folders and some public files.")]),t._v(" "),a("p",[t._v("The above organizational structure cannot be used directly. You also need to move "),a("code",[t._v("README.md")]),t._v(" to "),a("code",[t._v("docs")]),t._v(" and "),a("code",[t._v("demo.vue")]),t._v(" to "),a("code",[t._v("src/pages")]),t._v(". During development, changes in these files will be monitored, and when changes occur, they will be copied to the required location.")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_2de0d5cb1567b66aa7.png",width:"700"}})]),t._v(" "),a("h2",{attrs:{id:"_2-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-development"}},[t._v("#")]),t._v(" 2. Development")]),t._v(" "),a("p",[t._v("First, execute the following command to dispatch components:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run init\n")])])]),a("h3",{attrs:{id:"_2-1-component-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-component-development"}},[t._v("#")]),t._v(" 2.1. Component development")]),t._v(" "),a("p",[t._v("There are different startup commands for H5, WeChat applet, and QQ applet:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# h5")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev:mp-weixin\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# WeChat Mini Program")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run dev:mp-qq\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# qq applet")]),t._v("\n")])])]),a("h3",{attrs:{id:"_2-2-add-new-components"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-add-new-components"}},[t._v("#")]),t._v(" 2.2. Add new components")]),t._v(" "),a("p",[t._v("Execute the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run new:comp\n")])])]),a("p",[t._v("Then interactively enter the English name, Chinese name, etc. of the component.")]),t._v(" "),a("h3",{attrs:{id:"_2-3-document-development"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-document-development"}},[t._v("#")]),t._v(" 2.3. Document Development")]),t._v(" "),a("p",[t._v("Document development commands:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:dev\n")])])]),a("h3",{attrs:{id:"_2-4-documentation-and-sample-deployment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-documentation-and-sample-deployment"}},[t._v("#")]),t._v(" 2.4. Documentation and sample deployment")]),t._v(" "),a("p",[a("code",[t._v("Press Plus")]),t._v(" is connected to CI, and will be automatically built after the code is pushed, and the three-end examples and documents of H5, WeChat applet, and QQ applet will be deployed.")]),t._v(" "),a("h3",{attrs:{id:"_2-5-auxiliary-methods"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-5-auxiliary-methods"}},[t._v("#")]),t._v(" 2.5. Auxiliary methods")]),t._v(" "),a("p",[t._v("Press Plus comes with a number of productivity tools, including:")]),t._v(" "),a("ul",[a("li",[t._v("Extract "),a("code",[t._v("props")]),t._v(", available for documentation")]),t._v(" "),a("li",[t._v("Extract "),a("code",[t._v("event")]),t._v(", available for documentation")]),t._v(" "),a("li",[t._v("Extract "),a("code",[t._v("class")]),t._v(", which can be used in the mapping table in BEM transformation")]),t._v(" "),a("li",[t._v("CSS unit conversion, "),a("code",[t._v("rem")]),t._v(" => "),a("code",[t._v("px")])]),t._v(" "),a("li",[t._v("Automatically add and correct the "),a("code",[t._v("name")]),t._v(" attribute of components")]),t._v(" "),a("li",[t._v("Automatically add the "),a("code",[t._v("emis")]),t._v(" attribute of the component, required by Vue3")]),t._v(" "),a("li",[t._v("Add hidden @TIP_STYLE_NAME style to active components")]),t._v(" "),a("li",[t._v("CSS replacement for active components")])]),t._v(" "),a("p",[t._v("How to use it:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Extract props")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run extract:props [componentPath]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run extract:props src/packages/press-act-input-phone-dialog/press-act-input-phone-dialog.vue\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Extract event")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run extract:event [componentPath]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run extract:event src/packages/press-act-input-phone-dialog/press-act-input-phone-dialog.vue\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Extract class")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run extract:class [componentPath]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run extract:class src/packages/press-hor-owner-index/press-hor-owner-index.vue\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rem to px")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# npm run rem:px [componentPath]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run rem:px src/packages/press-message-board/press-message-board-input.vue\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add and modify the name attribute")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run add:name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Add emits attribute")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run add:emits\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#Add hidden TIP_STYLE_NAME style to active components")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run act:hide:tip\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CSS replacement for active components")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run act:replace:class\n")])])]),a("h2",{attrs:{id:"_3-development-specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-development-specifications"}},[t._v("#")]),t._v(" 3. Development specifications")]),t._v(" "),a("h3",{attrs:{id:"_3-1-code-specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-code-specifications"}},[t._v("#")]),t._v(" 3.1. Code specifications")]),t._v(" "),a("p",[t._v("Must comply with company code specifications.")]),t._v(" "),a("h3",{attrs:{id:"_3-2-submission-specifications"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-submission-specifications"}},[t._v("#")]),t._v(" 3.2. Submission specifications")]),t._v(" "),a("p",[t._v("Recommended "),a("a",{attrs:{href:"https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular specification"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"_3-3-naming-convention"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-naming-convention"}},[t._v("#")]),t._v(" 3.3. Naming convention")]),t._v(" "),a("ul",[a("li",[t._v("Export objects, classes, and components using CamelCase naming convention, with the first letter capitalized.")]),t._v(" "),a("li",[t._v("Export methods, use camel case naming method, the first letter is lowercase, such as "),a("code",[t._v("loader")]),t._v(", "),a("code",[t._v("post")]),t._v(", "),a("code",[t._v("appBase")]),t._v(", "),a("code",[t._v("getAreaCode")]),t._v(", etc.")]),t._v(" "),a("li",[t._v("Use lowercase + underscore for file names, such as "),a("code",[t._v("message-dialog")]),t._v(", not "),a("code",[t._v("messageDialog")])])]),t._v(" "),a("h3",{attrs:{id:"_3-4-others"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-others"}},[t._v("#")]),t._v(" 3.4. Others")]),t._v(" "),a("p",[t._v("The external API needs to be simple and easy to remember, such as "),a("code",[t._v("change")]),t._v(" and "),a("code",[t._v("list")]),t._v(". It is best to consist of one word and cannot be abbreviated. It should be aligned with the popular component libraries in the industry.")]),t._v(" "),a("p",[t._v("Cannot "),a("code",[t._v("console.log")]),t._v(" inside a component.")]),t._v(" "),a("p",[t._v("The class name must comply with the "),a("a",{attrs:{href:"https://getbem.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("BEM"),a("OutboundLink")],1),t._v(" specification and be prefixed with "),a("code",[t._v("press")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"_4-details"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-details"}},[t._v("#")]),t._v(" 4. Details")]),t._v(" "),a("h3",{attrs:{id:"_4-1-rem-unit"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-rem-unit"}},[t._v("#")]),t._v(" 4.1. rem unit")]),t._v(" "),a("p",[t._v("The unit currently used by some components is "),a("code",[t._v("rem")])]),t._v(" "),a("ul",[a("li",[t._v("Advantages: h5 end has better adaptation and is more suitable")]),t._v(" "),a("li",[t._v("Disadvantages: Additional plug-ins are required for conversion on other terminals such as mini programs.")])]),t._v(" "),a("p",[a("code",[t._v("Press Plus")]),t._v(" does not enforce units, as long as the components are internally unified.")]),t._v(" "),a("h3",{attrs:{id:"_4-3-javascript-is-preferred"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-javascript-is-preferred"}},[t._v("#")]),t._v(" 4.3. Javascript is preferred")]),t._v(" "),a("p",[a("code",[t._v("js")]),t._v(" is more flexible than "),a("code",[t._v("html")]),t._v(". If it can be written in "),a("code",[t._v("js")]),t._v(", don’t judge it in the component. Flexibility means strong versatility. "),a("code",[t._v("js")]),t._v(" can be easily used when migrating across platforms, horizontal and vertical screens, and technology stacks. Convenient to reuse, but components are not.")]),t._v(" "),a("h3",{attrs:{id:"_4-4-project-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-project-dependencies"}},[t._v("#")]),t._v(" 4.4. Project dependencies")]),t._v(" "),a("p",[t._v("Press Plus's underlying dependencies include "),a("code",[t._v("t-comm")]),t._v(", "),a("code",[t._v("uni-plugin-light")]),t._v(" and other libraries.")]),t._v(" "),a("img",{attrs:{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/11/own_mike_531f563c0322f19dc1.png",width:"500"}}),t._v(" "),a("h3",{attrs:{id:"_4-5-adapt-to-multiple-platforms-and-multiple-scenarios"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-adapt-to-multiple-platforms-and-multiple-scenarios"}},[t._v("#")]),t._v(" 4.5. Adapt to multiple platforms and multiple scenarios")]),t._v(" "),a("p",[t._v("When Press Plus is compatible with Vue3 projects, non-uni-app environments, and APP environments, the implementation method is to create a new project and use the Press Plus component library as a sub-warehouse.")]),t._v(" "),a("img",{attrs:{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_889e9d727ea8d8b63e.png",width:"500"}}),t._v(" "),a("h3",{attrs:{id:"_4-6-universal-flexible"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-6-universal-flexible"}},[t._v("#")]),t._v(" 4.6. Universal & Flexible")]),t._v(" "),a("p",[t._v("The picture below is a comparison of the syntax flexibility of H5, mini programs, and APPs.")]),t._v(" "),a("img",{attrs:{src:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_76f35297c8da15ecea.png",width:"300"}}),t._v(" "),a("p",[t._v("Press Plus adopts the following principles when writing cross-end code:")]),t._v(" "),a("ol",[a("li",[t._v("Align shortcomings, smooth out differences, and provide common APIs")]),t._v(" "),a("li",[t._v("Conditional compilation to maintain flexibility in special scenarios")])]),t._v(" "),a("p",[t._v("Here is an example of flexibility. When the H5 platform functionally calls components, DOM can be dynamically created without pre-embedding components.")]),t._v(" "),a("h3",{attrs:{id:"_4-7-isolation-from-business"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-7-isolation-from-business"}},[t._v("#")]),t._v(" 4.7. Isolation from business")]),t._v(" "),a("p",[t._v("First of all, business components are not necessarily precipitated from the business. The meaning of business components is generally poor in versatility, but can solve problems in specific scenarios, with few variations, poor flexibility, and not as many parameters as basic components. **.")]),t._v(" "),a("p",[t._v("The components and logic of "),a("code",[t._v("Press Plus")]),t._v(" should be less coupled with the business and remain stable. The basic components are easy to implement, and it is also easy to determine whether they are coupled. How to do it for those that have accumulated in the business?")]),t._v(" "),a("ul",[a("li",[t._v("Business status codes cannot exist, and multiple judgment logic should be completed in advance")]),t._v(" "),a("li",[t._v("Separation of concerns, focus on the component itself, not the business")]),t._v(" "),a("li",[t._v("Minimum knowledge principle, only pass in necessary parameters")])]),t._v(" "),a("p",[t._v("For example, the event of clicking the round Tab in the schedule tree component cannot be named "),a("code",[t._v("jumpToSetPage")]),t._v(" and needs to be changed to "),a("code",[t._v("clickRoundTab")]),t._v(" which has nothing to do with the business, because the jump round setting page is a business setting and is not necessarily stable. The requirements may change in a few days, but the Tab event is real and permanent.")]),t._v(" "),a("p",[t._v("In addition, the copywriting of the schedule tree cannot be driven by business status, but should be UI driven. The following is the code before the change, which is overly coupled with the business. If the business adds competition status, the components will inevitably be changed.")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Preview status --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("isPreview"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tip-match-current-pk-tip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Number --\x3e")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("battleDetail.bracketIdDesc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tip-match-num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     {{ battleDetail.bracketIdDesc }}\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token entity named-entity",title:"&nbsp;"}},[t._v("&nbsp;")]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("isAdmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     {{ isSchEnd ? 'Ended' : startBattleTypeDesc }}\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- Ended --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-else-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("isSchEnd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tip-match-current-pk-tip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("battleDetail.bracketIdDesc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("tip-match-num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     {{ battleDetail.bracketIdDesc }}\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{ battleEndTime }}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     over\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("It can be changed to a UI state that has nothing to do with the business, and the business status code is pre-judged in JS to obtain the UI state. The core is "),a("strong",[t._v("where to display what content in what style")]),t._v(".")]),t._v(" "),a("ul",[a("li",[t._v("Whether to display copy with background, "),a("code",[t._v("bracketIdDesc")])]),t._v(" "),a("li",[t._v("Whether to display labels without background, "),a("code",[t._v("timeDesc")])]),t._v(" "),a("li",[t._v("Whether to display another label without background, and whether it can have text highlighting, "),a("code",[t._v("statusDesc")]),t._v(", "),a("code",[t._v("isStatusHighList")])]),t._v(" "),a("li",[t._v("Whether to display the live broadcast icon, "),a("code",[t._v("showLiveIcon")])]),t._v(" "),a("li",[t._v("Whether to display the video number icon, "),a("code",[t._v("showChannelsIcon")])])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("press-schedule-team-tips"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scheGroupInfo.bracketIdDesc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("press-schedule-team-tip press-schedule-team-tip--bg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     {{ scheGroupInfo.bracketIdDesc }}\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scheGroupInfo.timeDesc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("press-schedule-team-tip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     {{ scheGroupInfo.timeDesc }}\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("p")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scheGroupInfo.statusDesc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("press-schedule-team-tip"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{\n       'press-schedule-team-tip--light': scheGroupInfo.isStatusHighList\n     }"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n     {{ scheGroupInfo.statusDesc }}\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("p")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scheGroupInfo.showLiveIcon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("press-schedule-team-tip-icon press-schedule-team-tip-icon--green iconfont icon-live"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@click.stop")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("onWatchBattle"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-if")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("scheGroupInfo.showChannelsIcon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("press-schedule-team-tip-icon iconfont icon-video-number"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("The above changes are not optimal and can continue to be optimized. For example, the live broadcast icon and video number icon can be passed in by parameters to support more icon types. The naming can be more separate from the business and should not be named "),a("code",[t._v("timeDesc")]),t._v(" or "),a("code",[t._v("statusDesc")]),t._v(".")])])}),[],!1,null,null,null);s.default=n.exports}}]);