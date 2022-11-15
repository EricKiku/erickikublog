(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{370:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"vuex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#vuex"}},[t._v("#")]),t._v(" VueX")]),t._v(" "),s("p",[t._v("在Vue中实现集中式状态管理的一个Vue插件")]),t._v(" "),s("p",[t._v("什么时候使用vuex：1. 多个组件依赖于同一个状态\t2.来自不同的组件的行为需要变更同一状态")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://vuex.vuejs.org/vuex.png",alt:"vuex"}})]),t._v(" "),s("p",[s("code",[t._v("Vue components")]),t._v("发出响应，如果有操作需要逻辑或者需要调用接口，就需要先经过"),s("code",[t._v("Actions")]),t._v("，如果没有逻辑，就是一个简单的修改数据，则可以直接访问"),s("code",[t._v("Mutations")]),t._v("，从而修改或读取数据，再响应给"),s("code",[t._v("State")]),t._v("，最后重新渲染页面")]),t._v(" "),s("p",[t._v("安装：")]),t._v(" "),s("p",[t._v("Vue2只能使用"),s("code",[t._v("Vuex3")]),t._v("，但是现在默认安装的是"),s("code",[t._v("Vuex4")]),t._v("，所以需要指定版本")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npm i vuex@3\n")])])]),s("h2",{attrs:{id:"创建环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建环境"}},[t._v("#")]),t._v(" 创建环境")]),t._v(" "),s("p",[t._v("创建文件:"),s("code",[t._v("src/store/index.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//该文件用于创建Vuex中核心的Store")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入Vue")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vue "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入Vuex")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" Vuex "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用vuex")]),t._v("\nVue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建actions-用于响应组件中的动作")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" actions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建mutations-用于操作数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mutations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建state-用于存储数据")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建并暴露store")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mutations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    state\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("在"),s("code",[t._v("main.js")]),t._v("中引入Store的"),s("code",[t._v("index.js")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" store "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./store/index'")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("render")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("h")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("h")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  store"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\t\t\t\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入了在这里使用，就可以让所有组件访问state")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$mount")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("首先在组件的方法中，调用"),s("code",[t._v("dispatch")]),t._v("方法，调用"),s("code",[t._v("actions")]),t._v("配置中对应的方法，再调用"),s("code",[t._v("mutations")]),t._v("配置中对应的方法，在"),s("code",[t._v("mutations")]),t._v("中修改"),s("code",[t._v("state")]),t._v("中的值.\n在任意组件上，都可以访问"),s("code",[t._v("$store")]),t._v("，在组件实例中使用"),s("code",[t._v("this.$store")]),t._v("，在模板的插值语法中可以:"),s("code",[t._v("$store.state.xxx")]),t._v("来访问Vuex中"),s("code",[t._v("state")]),t._v("中的值")]),t._v(" "),s("p",[s("code",[t._v("子组件")])]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("methods: {\n    add(){\n\t\t//参数是 方法名,值\n    \tthis.$store.dispatch('add',this.msg)\n    }\n}\n")])])]),s("p",[s("code",[t._v("store/index.js")])]),t._v(" "),s("p",[t._v("上下文"),s("code",[t._v("context")]),t._v("中有很多属性，其中也有"),s("code",[t._v("state")]),t._v("，可以直接获取到state中的值")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" actions "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//参数是: 上下文,值")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//调用上下文的commite方法，找mutations(方法名,值)")]),t._v("\n        context"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("commit")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ADD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mutations "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//参数是:state,值")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ADD")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("value")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+=")]),t._v(" value\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("result")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("注意：如果没有逻辑，也就是只操作数据，可以不使用"),s("code",[t._v("actions")]),t._v("，直接访问"),s("code",[t._v("mutations")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("methods: {\n    add(){\n\t\t//可以在组件中，直接commit，直接访问mutations\n    \tthis.$store.commit('ADD',this.msg)\n    }\n},\n")])])]),s("h2",{attrs:{id:"getters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#getters"}},[t._v("#")]),t._v(" getters")]),t._v(" "),s("p",[t._v("一个新的store配置")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" getters "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//getters中方法的参数是state，所以可以直接获取state中的值")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("bigResult")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("state")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加工，把数据变为十倍")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//创建并暴露store")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    actions"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mutations"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    state"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    getters\t"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//getters")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("作用是相当于一个"),s("code",[t._v("计算属性")]),t._v("，所有组件都可以获取这个属性，上面的例子中的一个属性"),s("code",[t._v("bigResult")]),t._v("，所有组件都可以通过插值语法"),s("code",[t._v("$store.getters.bigResult")]),t._v("或"),s("code",[t._v("this.$store.getters.bigResult")]),t._v("来获取数据")]),t._v(" "),s("h2",{attrs:{id:"mapstate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapstate"}},[t._v("#")]),t._v(" mapState")]),t._v(" "),s("p",[t._v("借助mapState生成计算属性，从"),s("code",[t._v("state")]),t._v("中读取数据：")]),t._v(" "),s("p",[t._v("意思就是**"),s("code",[t._v("用于帮助我们映射state中的数据为计算属性")]),t._v("**")]),t._v(" "),s("p",[t._v("一个可以自动生成计算属性的函数，由于一直写"),s("code",[t._v("$store.state")]),t._v("比较麻烦，可以使用计算属性来简化这个操作，也可以用"),s("code",[t._v("mapState")]),t._v("这个vue提供的简化操作，把想要的名字和对应的"),s("code",[t._v("state中的数据")]),t._v("传入参数")]),t._v(" "),s("div",{staticClass:"language-vue extra-class"},[s("pre",{pre:!0,attrs:{class:"language-vue"}},[s("code",[t._v("import {mapState} from 'vuex'\n\ncomputed:{\n    ...mapState({\n\t\tresult:'result',\n\t\tresult1:'result1'\n\t})\n}\n")])])]),s("p",[t._v("里面的参数是这样的："),s("code",[t._v("键：result")]),t._v("是想要的名字，"),s("code",[t._v("值：result")]),t._v("是"),s("code",[t._v("state")]),t._v("中的真实存在的数据，以前在模板中使用"),s("code",[t._v("result")]),t._v("是这样的："),s("code",[t._v("$store.state.result")]),t._v("，配置了"),s("code",[t._v("mapState")]),t._v("后，可以直接"),s("code",[t._v("result")])]),t._v(" "),s("p",[t._v("上面是对象写法，如果键值相同的话，可以使用数组写法，想要在模板使用的名字和访问state中数据的名字一模一样的时候就可以用数组的写法，"),s("code",[t._v("必须和state中数据名字一样")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'result1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"mapgetters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapgetters"}},[t._v("#")]),t._v(" mapGetters")]),t._v(" "),s("p",[t._v("功能和上面的一模一样，就是名字不一样，读取数据的位置不一样，一个是"),s("code",[t._v("state")]),t._v("，一个是"),s("code",[t._v("getters")]),t._v("，"),s("code",[t._v("getters")]),t._v("中的数据就相当于计算属性，以"),s("code",[t._v("state")]),t._v("中的数据为源数据，进行一些操作所的的数据放在"),s("code",[t._v("getters")]),t._v("中，必须是"),s("code",[t._v("return")]),t._v("返回的值，以前是通过"),s("code",[t._v("$store.getters.bigResult")]),t._v("来读取数据，用了这个之后，就可以直接"),s("code",[t._v("bigResult")]),t._v("来读取数据")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("mapState"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("mapGetters"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapGetters")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bigResult'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h2",{attrs:{id:"mapmutations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapmutations"}},[t._v("#")]),t._v(" mapMutations")]),t._v(" "),s("p",[t._v("功能相同，前两个是映射计算属性，后两个是映射方法，写在"),s("code",[t._v("methods")]),t._v("配置里，格式是："),s("code",[t._v("mapMutations({方法名:'mutation中的方法名'})")]),t._v("。键方法名是用于按钮点击时绑定的方法名，值方法名是"),s("code",[t._v("mutation")]),t._v("中改变数据的方法名，这个是属于没有逻辑，直接修改数据的方式。")]),t._v(" "),s("p",[t._v("注意：如果这样的话，模板中按钮绑定的点击事件必须带括号并且有实参，如果没有就返回的是鼠标事件"),s("code",[t._v("event")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button @click"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add(msg)"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapMutations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ADD")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ADD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("用于代替："),s("code",[t._v("this.$store.commit('ADD',this.msg)")]),t._v("。用来这个之后，就不需要前面的代码了 ，在按钮上有点击事件就行了，可以自动调用commit方法")]),t._v(" "),s("p",[t._v("也有数组方式，名字一样就用数组方式，都是以"),s("code",[t._v("mutation")]),t._v("中方法名为准")]),t._v(" "),s("h2",{attrs:{id:"mapactions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mapactions"}},[t._v("#")]),t._v(" mapActions")]),t._v(" "),s("p",[t._v("功能相同，也是写在"),s("code",[t._v("methods")]),t._v("配置中，用于映射方法，也要在按钮点击事件上写实参，要不就返回点击事件event了。")]),t._v(" "),s("p",[t._v("代替了："),s("code",[t._v("this.$store.dispatch('add',this.msg)")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("button @click"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"add(msg)"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("button"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("methods")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapActions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("add")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'add'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("也有数组写法")]),t._v(" "),s("h2",{attrs:{id:"模块化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[t._v("#")]),t._v(" 模块化")]),t._v(" "),s("p",[t._v("当一个Vuex管理多个不同的功能时，如果都写在一个Store中，就会混乱，所以，根据功能划分多个模块，每个模块都有完整的"),s("code",[t._v("actions,mutation,state,getters等")]),t._v("配置")]),t._v(" "),s("p",[t._v("每个模块就是一个对象，其中有完整的结构，最后在暴露时，通过modules指名模块")]),t._v(" "),s("p",[t._v("之前，使用方法是："),s("code",[t._v("$store.state、this.$store.commit()、this.$store.dispatch()")]),t._v("。")]),t._v(" "),s("p",[t._v("如果使用模块化，则"),s("code",[t._v("$store")]),t._v("上就没有这些了，有的是模块的名字"),s("code",[t._v("schllo,student")]),t._v("，需要使用模块名字来调用其中的方法")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" school "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("namespaced")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("actions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mutations")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("state")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("getters")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" student "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("namespaced")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("actions")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("mutations")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    cot state"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("getters")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vuex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Store")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("modules")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        school"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        student\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("如果还是想要使用"),s("code",[t._v("mapState")]),t._v("，那么就必须在模块上添加一个属性"),s("code",[t._v("namespaced:true")]),t._v("，开启后，才可以让mapState认识模块")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mapState")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'school'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("这个代码的意思是，把"),s("code",[t._v("school")]),t._v("模块中的"),s("code",[t._v("state")]),t._v("中的name变为计算属性，新添加的参数，第一个参数指定使用哪个模块，模块必须开启"),s("code",[t._v("namespaced")])]),t._v(" "),s("p",[t._v("如果不使用mapState，在模块上访问模块中的数据时：")]),t._v(" "),s("p",[s("code",[t._v("$store.state.school.name")])]),t._v(" "),s("p",[t._v("不管是"),s("code",[t._v("mapState、mapActions、mapMutations、mapGetters")]),t._v("，都需要在第一个参数的位置写上模块名，才可以解析第二个参数中的数据或者方法名")])])}),[],!1,null,null,null);s.default=n.exports}}]);