(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{492:function(a,s,e){"use strict";e.r(s);var t=e(3),r=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"网页申请"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#网页申请"}},[a._v("#")]),a._v(" 网页申请")]),a._v(" "),s("p",[a._v("有大量的第三方平台可以申请免费的 SSL 证书，例如一直在用的阿里云：一个账号一年可以申请 20 个，无论对于公司还是个人都足够了。")]),a._v(" "),s("h2",{attrs:{id:"自助管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自助管理"}},[a._v("#")]),a._v(" 自助管理")]),a._v(" "),s("p",[a._v("如果网站不是部署在阿里云，那么设置证书以及续期操作起来就有点麻烦，特别是网站巨多（成百上千）的情况")]),a._v(" "),s("h3",{attrs:{id:"宝塔"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#宝塔"}},[a._v("#")]),a._v(" 宝塔")]),a._v(" "),s("p",[a._v("如果是普通的建站（PHP-FPM 或者静态网站），"),s("a",{attrs:{href:"https://www.bt.cn/?invite_code=MV9sbnRydXg=",target:"_blank",rel:"noopener noreferrer"}},[a._v("宝塔面板"),s("OutboundLink")],1),a._v("挺好用的")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" install.sh http://www.aapanel.com/script/install_6.0_en.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" install.sh forum\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[s("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/865e1de0e7cdc.png",alt:"image.png"}})]),a._v(" "),s("h3",{attrs:{id:"自搭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自搭"}},[a._v("#")]),a._v(" 自搭")]),a._v(" "),s("p",[a._v("但是架不住量多，而宝塔的自动续期有时候会出问题，这时候就得有一个可以批量申请、续期的命令行工具")]),a._v(" "),s("h4",{attrs:{id:"acme-sh"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#acme-sh"}},[a._v("#")]),a._v(" "),s("strong",[a._v("acme.sh")])]),a._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/acmesh-official/acme.sh",target:"_blank",rel:"noopener noreferrer"}},[a._v("acme.sh"),s("OutboundLink")],1),a._v(" 实现了 acme 协议，可以从 letsencrypt 生成免费的证书")]),a._v(" "),s("h4",{attrs:{id:"安装脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装脚本"}},[a._v("#")]),a._v(" 安装脚本")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v("  https://get.acme.sh "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-s")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("email")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("my@yuwei.cc\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("普通用户和 root 用户都可以安装使用，安装过程进行了以下几步：")]),a._v(" "),s("ol",[s("li",[a._v("把 acme.sh 安装到你的 home 目录下："),s("code",[a._v("~/.acme.sh/")]),a._v("，并创建 一个 bash 的 alias，方便你的使用："),s("code",[a._v("alias acme.sh=~/.acme.sh/acme.sh")])]),a._v(" "),s("li",[a._v("自动为你创建 cronjob，每天 0:00 点自动检测所有的证书，快过期了会自动更新证书")])]),a._v(" "),s("h4",{attrs:{id:"生成证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#生成证书"}},[a._v("#")]),a._v(" 生成证书")]),a._v(" "),s("p",[a._v("acme.sh 实现了 acme 协议支持的所有验证协议，一般有两种方式验证：http 和 dns 验证")]),a._v(" "),s("h5",{attrs:{id:"http"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[a._v("#")]),a._v(" http")]),a._v(" "),s("p",[a._v("需要在你的网站根目录下放置一个文件, 来验证你的域名所有权,完成验证. 然后就可以生成证书了")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("acme.sh  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--issue")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mydomain.com "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" www.mydomain.com  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--webroot")]),a._v("  /home/wwwroot/mydomain.com/\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#apache")]),a._v("\nacme.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--issue")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mydomain.com   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--apache")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#nginx")]),a._v("\nacme.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--issue")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mydomain.com   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--nginx")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如果没有运行任何 web 服务，80 端口是空闲的，那么 acme.sh 还能假装自己是一个webserver，临时听在80 端口")]),a._v("\nacme.sh  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--issue")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mydomain.com   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--standalone")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h5",{attrs:{id:"dns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dns"}},[a._v("#")]),a._v(" dns")]),a._v(" "),s("p",[a._v("手动在域名上添加一条 txt 解析记录，验证域名所有权")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("acme.sh  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--issue")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--dns")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mydomain.com "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n --yes-I-know-dns-manual-mode-enough-go-ahead-please\nacme.sh  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--renew")]),a._v("   "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" mydomain.com "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  --yes-I-know-dns-manual-mode-enough-go-ahead-please\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h4",{attrs:{id:"部署证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#部署证书"}},[a._v("#")]),a._v(" 部署证书")]),a._v(" "),s("p",[a._v("到 nginx/apache 或者其他服务")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#Apache")]),a._v("\nacme.sh --install-cert "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" example.com "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--cert-file      /path/to/certfile/in/apache/cert.pem  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--key-file       /path/to/keyfile/in/apache/key.pem  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--fullchain-file /path/to/fullchain/certfile/apache/fullchain.pem "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reloadcmd")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"service apache2 force-reload"')]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#nginx")]),a._v("\nacme.sh --install-cert "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" example.com "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--key-file       /path/to/keyfile/in/nginx/key.pem  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n--fullchain-file /path/to/fullchain/nginx/cert.pem "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reloadcmd")]),a._v("     "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"service nginx force-reload"')]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h4",{attrs:{id:"更新证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新证书"}},[a._v("#")]),a._v(" 更新证书")]),a._v(" "),s("p",[a._v("目前证书在 60 天以后会自动更新，无需任何操作")]),a._v(" "),s("h4",{attrs:{id:"更新脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新脚本"}},[a._v("#")]),a._v(" 更新脚本")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#开启自动更新")]),a._v("\nacme.sh  "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--upgrade")]),a._v("  --auto-upgrade\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#关闭自动更新")]),a._v("\nacme.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--upgrade")]),a._v("  --auto-upgrade  "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\nacme.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--upgrade")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"certbot"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#certbot"}},[a._v("#")]),a._v(" Certbot")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://certbot.eff.org/",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://certbot.eff.org/"),s("OutboundLink")],1)]),a._v(" "),s("h4",{attrs:{id:"安装脚本-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装脚本-2"}},[a._v("#")]),a._v(" 安装脚本")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" https://dl.eff.org/certbot-auto\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" a+x ./certbot-auto\n./certbot-auto "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);