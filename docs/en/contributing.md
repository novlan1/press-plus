# Contribution Guidelines


## 1. Directory structure

The project structure is as follows:

```bash
- docs # Document address
- plugin # [demo] Plug-in used in the project
- script # script
- tests # test cases
- src
   - common # [demo] public content
   - packages #Package content released to the outside world
   - pages # [demo] page content
   - static # [demo] static content
   - App.vue # [demo] Application entrance
   - main.js
   - pages.json
```

In addition to components, the component library also includes documents, examples, engineering configurations, etc. For the convenience of maintenance, examples, documents, and components are placed in one folder, so a standard component directory is as follows:

```bash
-press-button
   - demo-helper/ # Optional, data and methods related to component examples
   - helper/ # Optional, related methods of business layer processing data, may introduce t-comm third-party module
   - demo.vue # component example
   - press-button.vue # component
   - README.md #Component Chinese documentation
   - README.en-US.md # Component English documentation
```

`src/packages` is composed of these component folders and some public files.

The above organizational structure cannot be used directly. You also need to move `README.md` to `docs` and `demo.vue` to `src/pages`. During development, changes in these files will be monitored, and when changes occur, they will be copied to the required location.

<img
   src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_2de0d5cb1567b66aa7.png" width="700"
/>

## 2. Development


First, execute the following command to dispatch components:

```bash
npm run init
```

### 2.1. Component development

There are different startup commands for H5, WeChat applet, and QQ applet:

```bash
npm run dev
# h5

npm run dev:mp-weixin
# WeChat Mini Program

npm run dev:mp-qq
# qq applet
```

### 2.2. Add new components

Execute the following command:

```bash
npm run new:comp
```

Then interactively enter the English name, Chinese name, etc. of the component.



### 2.3. Document Development

Document development commands:

```bash
npm run docs:dev
```

### 2.4. Documentation and sample deployment

`Press Plus` is connected to CI, and will be automatically built after the code is pushed, and the three-end examples and documents of H5, WeChat applet, and QQ applet will be deployed.


### 2.5. Auxiliary methods

Press Plus comes with a number of productivity tools, including:

- Extract `props`, available for documentation
- Extract `event`, available for documentation
- Extract `class`, which can be used in the mapping table in BEM transformation
- CSS unit conversion, `rem` => `px`
- Automatically add and correct the `name` attribute of components
- Automatically add the `emis` attribute of the component, required by Vue3
- Add hidden @TIP_STYLE_NAME style to active components
- CSS replacement for active components

How to use it:

```bash
#Extract props
# npm run extract:props [componentPath]
npm run extract:props src/packages/press-act-input-phone-dialog/press-act-input-phone-dialog.vue

#Extract event
# npm run extract:event [componentPath]
npm run extract:event src/packages/press-act-input-phone-dialog/press-act-input-phone-dialog.vue

#Extract class
# npm run extract:class [componentPath]
npm run extract:class src/packages/press-hor-owner-index/press-hor-owner-index.vue

# rem to px
# npm run rem:px [componentPath]
npm run rem:px src/packages/press-message-board/press-message-board-input.vue

# Add and modify the name attribute
npm run add:name

# Add emits attribute
npm run add:emits

#Add hidden TIP_STYLE_NAME style to active components
npm run act:hide:tip

# CSS replacement for active components
npm run act:replace:class
```

## 3. Development specifications

### 3.1. Code specifications

Must comply with company code specifications.

### 3.2. Submission specifications

Recommended [Angular specification](https://github.com/conventional-changelog/conventional-changelog/tree/master/packages/conventional-changelog-angular)


### 3.3. Naming convention

- Export objects, classes, and components using CamelCase naming convention, with the first letter capitalized.
- Export methods, use camel case naming method, the first letter is lowercase, such as `loader`, `post`, `appBase`, `getAreaCode`, etc.
- Use lowercase + underscore for file names, such as `message-dialog`, not `messageDialog`

### 3.4. Others

The external API needs to be simple and easy to remember, such as `change` and `list`. It is best to consist of one word and cannot be abbreviated. It should be aligned with the popular component libraries in the industry.

Cannot `console.log` inside a component.

The class name must comply with the [BEM](https://getbem.com/) specification and be prefixed with `press`.

## 4. Details

### 4.1. rem unit

The unit currently used by some components is `rem`

- Advantages: h5 end has better adaptation and is more suitable
- Disadvantages: Additional plug-ins are required for conversion on other terminals such as mini programs.

`Press Plus` does not enforce units, as long as the components are internally unified.

### 4.3. Javascript is preferred

`js` is more flexible than `html`. If it can be written in `js`, don’t judge it in the component. Flexibility means strong versatility. `js` can be easily used when migrating across platforms, horizontal and vertical screens, and technology stacks. Convenient to reuse, but components are not.

### 4.4. Project dependencies

Press Plus's underlying dependencies include `t-comm`, `uni-plugin-light` and other libraries.

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/11/own_mike_531f563c0322f19dc1.png" width="500" />


### 4.5. Adapt to multiple platforms and multiple scenarios

When Press Plus is compatible with Vue3 projects, non-uni-app environments, and APP environments, the implementation method is to create a new project and use the Press Plus component library as a sub-warehouse.

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_889e9d727ea8d8b63e.png" width="500" />

### 4.6. Universal & Flexible

The picture below is a comparison of the syntax flexibility of H5, mini programs, and APPs.

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_76f35297c8da15ecea.png" width="300" />

Press Plus adopts the following principles when writing cross-end code:

1. Align shortcomings, smooth out differences, and provide common APIs
2. Conditional compilation to maintain flexibility in special scenarios

Here is an example of flexibility. When the H5 platform functionally calls components, DOM can be dynamically created without pre-embedding components.


### 4.7. Isolation from business

First of all, business components are not necessarily precipitated from the business. The meaning of business components is generally poor in versatility, but can solve problems in specific scenarios, with few variations, poor flexibility, and not as many parameters as basic components. **.

The components and logic of `Press Plus` should be less coupled with the business and remain stable. The basic components are easy to implement, and it is also easy to determine whether they are coupled. How to do it for those that have accumulated in the business?

- Business status codes cannot exist, and multiple judgment logic should be completed in advance
- Separation of concerns, focus on the component itself, not the business
- Minimum knowledge principle, only pass in necessary parameters
  
For example, the event of clicking the round Tab in the schedule tree component cannot be named `jumpToSetPage` and needs to be changed to `clickRoundTab` which has nothing to do with the business, because the jump round setting page is a business setting and is not necessarily stable. The requirements may change in a few days, but the Tab event is real and permanent.

In addition, the copywriting of the schedule tree cannot be driven by business status, but should be UI driven. The following is the code before the change, which is overly coupled with the business. If the business adds competition status, the components will inevitably be changed.

```html
<!-- Preview status -->
<div
   v-if="isPreview"
   class="tip-match-current-pk-tip"
>
   <!-- Number -->
   <p
     v-if="battleDetail.bracketIdDesc"
     class="tip-match-num"
   >
     {{ battleDetail.bracketIdDesc }}
   </p>
   <p>&nbsp;</p>
   <p v-if="isAdmin">
     {{ isSchEnd ? 'Ended' : startBattleTypeDesc }}
   </p>
</div>

<!-- Ended -->
<div
   v-else-if="isSchEnd"
   class="tip-match-current-pk-tip"
>
   <p
     v-if="battleDetail.bracketIdDesc"
     class="tip-match-num"
   >
     {{ battleDetail.bracketIdDesc }}
   </p>
   <p>{{ battleEndTime }}</p>
   <p>
     over
   </p>
</div>
```

It can be changed to a UI state that has nothing to do with the business, and the business status code is pre-judged in JS to obtain the UI state. The core is **where to display what content in what style**.

- Whether to display copy with background, `bracketIdDesc`
- Whether to display labels without background, `timeDesc`
- Whether to display another label without background, and whether it can have text highlighting, `statusDesc`, `isStatusHighList`
- Whether to display the live broadcast icon, `showLiveIcon`
- Whether to display the video number icon, `showChannelsIcon`


```html
<div class="press-schedule-team-tips">
   <p
     v-if="scheGroupInfo.bracketIdDesc"
     class="press-schedule-team-tip press-schedule-team-tip--bg"
   >
     {{ scheGroupInfo.bracketIdDesc }}
   </p>
   <p
     v-if="scheGroupInfo.timeDesc"
     class="press-schedule-team-tip"
   >
     {{ scheGroupInfo.timeDesc }}
   </p>
   <p
     v-if="scheGroupInfo.statusDesc"
     class="press-schedule-team-tip"
     :class="{
       'press-schedule-team-tip--light': scheGroupInfo.isStatusHighList
     }"
   >
     {{ scheGroupInfo.statusDesc }}
   </p>
   <div
     v-if="scheGroupInfo.showLiveIcon"
     class="press-schedule-team-tip-icon press-schedule-team-tip-icon--green iconfont icon-live"
     @click.stop="onWatchBattle"
   />
   <div
     v-if="scheGroupInfo.showChannelsIcon"
     class="press-schedule-team-tip-icon iconfont icon-video-number"
   />
</div>
```

The above changes are not optimal and can continue to be optimized. For example, the live broadcast icon and video number icon can be passed in by parameters to support more icon types. The naming can be more separate from the business and should not be named `timeDesc` or `statusDesc`.
