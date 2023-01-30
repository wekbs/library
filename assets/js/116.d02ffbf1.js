(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{530:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"logstash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#logstash"}},[s._v("#")]),s._v(" Logstash")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://www.elastic.co/cn/downloads/logstash",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://www.elastic.co/cn/downloads/logstash"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"下载安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载安装"}},[s._v("#")]),s._v(" 下载安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /app/elk\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://artifacts.elastic.co/downloads/logstash/logstash-8.4.2-linux-x86_64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v("  logstash-8.4.2-linux-x86_64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" logstash-8.4.2 logstash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-pv")]),s._v(" /app/data/elasticsearch "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-pv")]),s._v(" /app/logs/elasticsearch\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" logstash\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" ./config/logstash.yml\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[s._v("#")]),s._v(" 配置")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("node.name: logstash\npath.data: /app/data/logstash\npath.config: /app/conf/logstash\npath.logs: /app/logs/logstash\nlog.level: debug\napi.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\napi.http.host: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\napi.http.port: "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9600")]),s._v("-9700\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#api.auth.basic.username: "logstash-user"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v('#api.auth.basic.password: "s3cUreP4$$w0rD"')]),s._v("\nxpack.monitoring.enabled: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#xpack.monitoring.elasticsearch.username: logstash_system")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#xpack.monitoring.elasticsearch.password: password")]),s._v("\nxpack.monitoring.elasticsearch.hosts: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://127.0.0.1:9200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nxpack.management.elasticsearch.hosts: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:9200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h3",{attrs:{id:"运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行"}},[s._v("#")]),s._v(" 运行")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_CMD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/elk/jdk17/bin/java\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("JAVA_HOME")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/elk/jdk17\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/app/elk/logstash/bin/logstash\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## 运行成功以后输入以下语句检测是否成功")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-lantp")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("5601")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"报错"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#报错"}},[s._v("#")]),s._v(" 报错")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-300f")]),s._v(" /var/log/messages\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);