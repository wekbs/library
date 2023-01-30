(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{470:function(a,s,t){"use strict";t.r(s);var e=t(3),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://www.apolloconfig.com/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Apollo"),s("OutboundLink")],1),a._v(" 是一个配置中心，支持从应用、环境、集群维度和公共，私有维度去管理配置， 满足大部分的配置场景。")]),a._v(" "),s("ul",[s("li",[a._v("配置项保存到数据库中（MySQL）")]),a._v(" "),s("li",[a._v("配置变更通知客户端（HTTP 长轮询）")]),a._v(" "),s("li",[a._v("高可用，配置文件本地副本")]),a._v(" "),s("li",[a._v("配置的 SDK 与应用集成")])]),a._v(" "),s("h2",{attrs:{id:"配置变更"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置变更"}},[a._v("#")]),a._v(" 配置变更")]),a._v(" "),s("h3",{attrs:{id:"变更发现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变更发现"}},[a._v("#")]),a._v(" 变更发现")]),a._v(" "),s("p",[a._v("Apollo 解耦了「配置变更」和「配置变更发布」：配置变更就是一个数据库操作，保存配置信息的同时会保存一个「ReleaseMessage」表， 表示有变更发生， config server 中的线程，每隔 1s 扫描「ReleaseMessage」表，以此发现变更的配置。")]),a._v(" "),s("h3",{attrs:{id:"变更通知"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变更通知"}},[a._v("#")]),a._v(" 变更通知")]),a._v(" "),s("p",[a._v("使用的是 HTTP 长轮询， 客户端在启动后，会连接 config server，连接 90 秒超时， config server 收到请求会hang 到服务端不返回， 如果 90 秒内没有配置变更，就自动返回， 如果在 90 秒内有配置变更，请求会立刻返回并携带 namespace。 客户端收到请求后，会立刻重新请求服务端。\n"),s("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/b627c391709f1.png",alt:"image.png"}})]),a._v(" "),s("h2",{attrs:{id:"服务部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务部署"}},[a._v("#")]),a._v(" 服务部署")]),a._v(" "),s("h3",{attrs:{id:"创建数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[a._v("#")]),a._v(" 创建数据库")]),a._v(" "),s("p",[a._v("Apollo 服务端共需要两个数据库：ApolloPortalDB 和 ApolloConfigDB，我们把数据库、表的创建和样例数据都分别准备了 SQL 文件，只需要导入数据库即可。\n需要注意的是 ApolloPortalDB 只需要在生产环境部署一个即可，而 ApolloConfigDB 需要在每个环境部署一套，如 DEV、SIT、UAT 和 PRO 分别部署相应的 ApolloConfigDB。")]),a._v(" "),s("h4",{attrs:{id:"apolloportaldb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apolloportaldb"}},[a._v("#")]),a._v(" ApolloPortalDB")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /your_local_path/scripts/sql/apolloportaldb.sql\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Id"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(", "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Key"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(", "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Value"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(", "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Comment"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" from "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("ApolloPortalDB"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("ServerConfig"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" limit "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h4",{attrs:{id:"apolloconfigdb"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apolloconfigdb"}},[a._v("#")]),a._v(" ApolloConfigDB")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("source")]),a._v(" /your_local_path/scripts/sql/apolloconfigdb.sql\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("select")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Id"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(", "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Key"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(", "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Value"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(", "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("Comment"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" from "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("ApolloConfigDB"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")]),a._v("ServerConfig"),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("`")])]),a._v(" limit "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("apollo-configservice、apollo-adminservice、apollo-portal")]),a._v(" "),s("h3",{attrs:{id:"二进制安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二进制安装"}},[a._v("#")]),a._v(" 二进制安装")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("https://github.com/apolloconfig/apollo/releases/download/v2.0.0/apollo-configservice-2.0.0-github.zip\nhttps://github.com/apolloconfig/apollo/releases/download/v2.0.0/apollo-adminservice-2.0.0-github.zip\nhttps://github.com/apolloconfig/apollo/releases/download/v2.0.0/apollo-portal-2.0.0-github.zip\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("解压 apollo-configservice-2.0.0-github.zip\n打开 config 目录下的 application-github.properties 文件\n修改数据库信息，注意用户名和密码后面不要有空格")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#DataSource")]),a._v("\nspring.datasource.url "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" jdbc:mysql://localhost:3306/ApolloConfigDB?useSSL"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&")]),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("characterEncoding")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("utf8\nspring.datasource.username "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" someuser\nspring.datasource.password "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" somepwd\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("配置 apollo-portal 的 meta service 信息\nApollo Portal 需要在不同的环境访问不同的 meta service(apollo-configservice) 地址，所以我们需要在配置中提供这些信息。默认情况下，meta service 和 config service 是部署在同一个 JVM 进程，所以 meta service 的地址就是 config service 的地址。\nconfig 目录下的 apollo-env.properties 文件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dev.meta")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://1.1.1.1:8080\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("sit.meta")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://apollo.sit.xxx.com\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("uat.meta")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://apollo.uat.xxx.com\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("pro.meta")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("http://apollo.xxx.com\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"编译安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译安装"}},[a._v("#")]),a._v(" 编译安装")])])}),[],!1,null,null,null);s.default=r.exports}}]);