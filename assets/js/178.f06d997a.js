(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{495:function(a,s,t){"use strict";t.r(s);var e=t(3),r=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://catonmat.net/cookbooks/curl",target:"_blank",rel:"noopener noreferrer"}},[a._v("Curl"),s("OutboundLink")],1),a._v(" 是常用的命令行工具，用来请求 Web 服务器，是客户端（client）的 URL 工具；功能非常强大，命令行参数多达几十种；熟练的话，完全可以取代 Postman 这一类的图形界面工具。\n不带有任何参数时，curl 就是发出 GET 请求。")]),a._v(" "),s("h2",{attrs:{id:"a"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#a"}},[a._v("#")]),a._v(" -A")]),a._v(" "),s("p",[a._v("指定客户端的用户代理标头，即：User-Agent，默认用户代理字符串是 curl/[version]")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#将 User-Agent 改成 Edge 浏览器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.81 Safari/537.36 Edg/104.0.1293.54'")]),a._v(" https://yuwei.cc\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#移除 User-Agent 标头")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-A")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("''")]),a._v(" https://yuwei.cc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h2",{attrs:{id:"b"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#b"}},[a._v("#")]),a._v(" -b")]),a._v(" "),s("p",[a._v("向服务器发送 Cookie")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#发送一个")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'foo=bar'")]),a._v(" https://yuwei.cc\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#发送两个")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'foo1=bar1;foo2=bar2'")]),a._v(" https://yuwei.cc\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#发送文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-b")]),a._v(" cookies.txt https://yuwei.cc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br")])]),s("h2",{attrs:{id:"c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#c"}},[a._v("#")]),a._v(" -c")]),a._v(" "),s("p",[a._v("将服务器设置的 Cookie 写入文件")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-c")]),a._v(" cookies.txt https://yuwei.cc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"d"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#d"}},[a._v("#")]),a._v(" -d")]),a._v(" "),s("p",[a._v("用于发送 POST 请求的数据体")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'login=wei＆password=123'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" POST https://yuwei.cc/login\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'login=wei'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'password=123'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" POST https://yuwei.cc/login\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'passwd.txt'")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" POST https://yuwei.cc/login\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("使用 -d 参数以后，HTTP 请求会自动加上标头 Content-Type : application/x-www-form-urlencoded；并且会自动将请求转为 POST 方法，因此可以省略 -X POST。\nPS."),s("code",[a._v("--data-urlencode")]),a._v("参数等同于 -d，发送 POST 请求的数据体，区别在于会自动将发送的数据进行 URL 编码")]),a._v(" "),s("h2",{attrs:{id:"e"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#e"}},[a._v("#")]),a._v(" -e")]),a._v(" "),s("p",[a._v("用来设置 HTTP 的标头 Referer，表示请求的来源")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'www.baidu.com'")]),a._v(" https://yuwei.cc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"f"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#f"}},[a._v("#")]),a._v(" -F")]),a._v(" "),s("p",[a._v("向服务器上传二进制文件")]),a._v(" "),s("h2",{attrs:{id:"g"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#g"}},[a._v("#")]),a._v(" -G")]),a._v(" "),s("p",[a._v("用来构造 URL 的查询字符串")]),a._v(" "),s("h2",{attrs:{id:"h"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#h"}},[a._v("#")]),a._v(" -H")]),a._v(" "),s("p",[a._v("添加 HTTP 请求的标头")]),a._v(" "),s("h2",{attrs:{id:"i"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i"}},[a._v("#")]),a._v(" -i")]),a._v(" "),s("p",[a._v("打印出服务器回应的 HTTP 标头")]),a._v(" "),s("h2",{attrs:{id:"i-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#i-2"}},[a._v("#")]),a._v(" -I")]),a._v(" "),s("p",[a._v("向服务器发出 HEAD 请求，然会将服务器返回的 HTTP 标头打印出来，等同于"),s("code",[a._v("--head")])]),a._v(" "),s("h2",{attrs:{id:"k"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#k"}},[a._v("#")]),a._v(" -k")]),a._v(" "),s("p",[a._v("跳过 SSL 检测")]),a._v(" "),s("h2",{attrs:{id:"l"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#l"}},[a._v("#")]),a._v(" -L")]),a._v(" "),s("p",[a._v("让 HTTP 请求跟随服务器的重定向（默认不跟随）")]),a._v(" "),s("h2",{attrs:{id:"o"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#o"}},[a._v("#")]),a._v(" -o")]),a._v(" "),s("p",[a._v("将服务器的回应保存成文件，相当于"),s("code",[a._v("wget")]),a._v("命令")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" wei.html https://yuwei.cc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"o-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#o-2"}},[a._v("#")]),a._v(" -O")]),a._v(" "),s("p",[a._v("将服务器回应保存成文件，并将 URL 的最后部分当作文件名")]),a._v(" "),s("h2",{attrs:{id:"s"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s"}},[a._v("#")]),a._v(" -s")]),a._v(" "),s("p",[a._v("将不输出错误和进度信息")]),a._v(" "),s("h2",{attrs:{id:"s-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#s-2"}},[a._v("#")]),a._v(" -S")]),a._v(" "),s("p",[a._v("指定只输出错误信息，通常与"),s("code",[a._v("-s")]),a._v("一起使用")]),a._v(" "),s("h2",{attrs:{id:"u"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#u"}},[a._v("#")]),a._v(" -u")]),a._v(" "),s("p",[a._v("用来设置服务器认证的用户名和密码")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-u")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'wei:123'")]),a._v(" https://yuwei.cc/login\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h2",{attrs:{id:"v"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#v"}},[a._v("#")]),a._v(" -v")]),a._v(" "),s("p",[a._v("输出通信的整个过程，用于调试\n"),s("code",[a._v("--trace")]),a._v("参数也可以用于调试，还会输出原始的二进制数据")]),a._v(" "),s("h2",{attrs:{id:"x"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x"}},[a._v("#")]),a._v(" -x")]),a._v(" "),s("p",[a._v("指定 HTTP 请求的代理")]),a._v(" "),s("h2",{attrs:{id:"x-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#x-2"}},[a._v("#")]),a._v(" -X")]),a._v(" "),s("p",[a._v("指定 HTTP 请求的方法")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-X")]),a._v(" POST https://yuwei.cc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);