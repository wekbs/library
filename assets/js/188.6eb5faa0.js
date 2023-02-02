(window.webpackJsonp=window.webpackJsonp||[]).push([[188],{506:function(a,s,t){"use strict";t.r(s);var e=t(3),n=Object(e.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p",[a._v("使用 bitwarden_rs 搭建自用密码服务器")]),a._v(" "),s("h2",{attrs:{id:"环境搭建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[a._v("#")]),a._v(" 环境搭建")]),a._v(" "),s("h3",{attrs:{id:"安装要求"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装要求"}},[a._v("#")]),a._v(" 安装要求")]),a._v(" "),s("p",[a._v("CentOS 7（64-bit），内核版本不能低于3.10；")]),a._v(" "),s("h3",{attrs:{id:"卸载旧版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#卸载旧版本"}},[a._v("#")]),a._v(" 卸载旧版本")]),a._v(" "),s("p",[a._v("较旧版本的 Docker 被称为 docker 或 docker-engine；如果已安装这些，请卸载它们以及相关的依赖项。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum remove "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-client "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-client-latest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-common "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-latest "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-latest-logrotate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-logrotate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n                  docker-engine\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("h3",{attrs:{id:"安装-docker"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker"}},[a._v("#")]),a._v(" 安装 Docker")]),a._v(" "),s("p",[a._v("安装依赖包")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" yum-utils device-mapper-persistent-data lvm2\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#使用国内源（阿里云）")]),a._v("\nyum-config-manager --add-repo https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#使用官方源")]),a._v("\nyum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如果需要测试版本的 Docker CE 请使用以下命令")]),a._v("\nyum-config-manager "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--enable")]),a._v(" docker-ce-test\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如果需要每日构建版本的 Docker CE 请使用以下命令")]),a._v("\nyum-config-manager "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--enable")]),a._v(" docker-ce-nightly\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h3",{attrs:{id:"安装-docker-ce"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker-ce"}},[a._v("#")]),a._v(" 安装 Docker-CE")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("yum makecache "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#更新 yum 缓存")]),a._v("\nyum "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-y")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" docker-ce "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--nobest")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#安装 Docker-CE")]),a._v("\nsystemctl "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#设置开机自启")]),a._v("\nsystemctl start "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#启动 Docker-CE")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("p",[a._v("使用脚本自动安装\n在测试或开发环境中 Docker 官方为了简化安装流程，提供了一套便捷的安装脚本，CentOS 系统上可以使用这套脚本安装：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-fsSL")]),a._v(" get.docker.com "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" get-docker.sh\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sh")]),a._v(" get-docker.sh "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--mirror")]),a._v(" Aliyun\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("h3",{attrs:{id:"添加内核参数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加内核参数"}},[a._v("#")]),a._v(" 添加内核参数")]),a._v(" "),s("p",[a._v("如果在 CentOS 使用 Docker CE 看到下面的这些警告信息：")]),a._v(" "),s("blockquote",[s("p",[a._v("WARNING: bridge-nf-call-iptables is disabled\nWARNING: bridge-nf-call-ip6tables is disabled")])]),a._v(" "),s("p",[a._v("请添加内核配置参数以启用这些功能。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("tee")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-a")]),a._v(" /etc/sysctl.conf "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<<-")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("EOF\nnet.bridge.bridge-nf-call-ip6tables = 1\nnet.bridge.bridge-nf-call-iptables = 1\nEOF")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sysctl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重新加载 sysctl.conf")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])]),s("h3",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[a._v("#")]),a._v(" 参考文档")]),a._v(" "),s("table",[s("thead",[s("tr",[s("th",[s("a",{attrs:{href:"https://www.runoob.com/docker/centos-docker-install.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("菜鸟教程"),s("OutboundLink")],1)]),a._v(" "),s("th",[s("a",{attrs:{href:"https://yeasy.gitbooks.io/docker_practice/content/",target:"_blank",rel:"noopener noreferrer"}},[a._v("从入门到实践"),s("OutboundLink")],1)]),a._v(" "),s("th",[s("a",{attrs:{href:"https://docs.docker.com/install/linux/docker-ce/centos/",target:"_blank",rel:"noopener noreferrer"}},[a._v("官方文档"),s("OutboundLink")],1)]),a._v(" "),s("th",[s("a",{attrs:{href:"https://yq.aliyun.com/articles/110806",target:"_blank",rel:"noopener noreferrer"}},[a._v("阿里云镜像源站"),s("OutboundLink")],1)]),a._v(" "),s("th",[s("a",{attrs:{href:"https://www.cnblogs.com/wushuaishuai/p/9984228.html#_label0",target:"_blank",rel:"noopener noreferrer"}},[a._v("国内仓库和镜像"),s("OutboundLink")],1)])])]),a._v(" "),s("tbody")]),a._v(" "),s("h2",{attrs:{id:"应用部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#应用部署"}},[a._v("#")]),a._v(" 应用部署")]),a._v(" "),s("h3",{attrs:{id:"快速部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#快速部署"}},[a._v("#")]),a._v(" 快速部署")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull bitwardenrs/server:latest\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" bitwarden "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /bw-data/:/data/ "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("6666")]),a._v(":80 bitwardenrs/server:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("官方提供部署脚本")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-Lso")]),a._v(" bitwarden.sh https://go.btwrdn.co/bw-sh "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x bitwarden.sh\n./bitwarden.sh "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v("\n./bitwarden.sh start\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br")])]),s("h3",{attrs:{id:"自定义部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义部署"}},[a._v("#")]),a._v(" 自定义部署")]),a._v(" "),s("p",[a._v("自定义一些参数，加入 HTTPS 支持等…")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#拉取 bitwarden_rs 镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull bitwardenrs/server:latest\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#生成一个 admin 用户管理页面的 token")]),a._v("\nopenssl rand "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-base64")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("48")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#生成 ssl 证书，以启用 https，推荐使用 acme.sh 免费申请及自动续签")]),a._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#运行 bitwarden_rs 容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" run "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--name")]),a._v(" bitwarden "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SIGNUPS_ALLOWED")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("INVITATIONS_ALLOWED")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("false "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ADMIN_TOKEN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("step2_generated_token "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ROCKET_TLS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('\'{certs="/data/v2ray.crt",key="/data/v2ray.key"}\'')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DOMAIN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://bwh.vioe.cc/ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LOG_FILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/path/to/log "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("LOG_LEVEL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("warn "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("EXTENDED_LOGGING")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-e")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DATA_FOLDER")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/path/to/data/folder "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v(":80 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /path/to/host/ssl/:/path/to/docker/ssl/\n    "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-v")]),a._v(" /path/to/host/data/folder:/path/to/docker/data/folder "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    bitwardenrs/server:latest\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("p",[a._v("参数解释：")]),a._v(" "),s("blockquote",[s("p",[a._v("SIGNUP_ALLOWED：是否允许注册\nINVITATIONS_ALLOWED：是否允许组织邀请注册\nADMIN_TOKEN：用户管理界面 (/admin)，可用于删除用户及邀请用户注册\nROCKET_TLS：ssl 证书信息，同时需要配置 -v /path/to/host/ssl/:/path/to/docker/ssl/ 卷，前者为宿主机 ssl 证书的位置，后者为容器证书位置\nDOMAIN：域名\nLOG_FILE、LOG_LEVEL、EXTENDED_LOGGING：日志保存文件路径以及日志等级定义\nDATA_FOLDER：docker 容器数据保存文件夹（默认为 /data），除了定义这个文件夹之外，还可以定义附件、图标缓存、数据库等参数\nDATABASE_URL：数据库路径\nATTACHMENT_FOLDER：附件路径\nICON_CACHE_FOLDER：图标缓存路径")])]),a._v(" "),s("p",[a._v("更多参数可参考官方 "),s("a",{attrs:{href:"https://github.com/dani-garcia/bitwarden_rs/wiki",target:"_blank",rel:"noopener noreferrer"}},[a._v("WiKi"),s("OutboundLink")],1)]),a._v(" "),s("h3",{attrs:{id:"容器操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#容器操作"}},[a._v("#")]),a._v(" 容器操作")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#$name 为 docker run 中定义的 name")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#启动容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" start "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#停止容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$name")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看运行容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ps")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-as")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br")])]),s("h3",{attrs:{id:"升级镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#升级镜像"}},[a._v("#")]),a._v(" 升级镜像")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重新拉取镜像")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" pull bitwardenrs/server:latest\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#停止、删除原容器")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" stop bitwarden\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" bitwarden\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#重新运行 docker run 命令")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查看镜像文件")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" image "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("ls")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#删除原镜像文件, $ID 在 step4 中可以看到")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("docker")]),a._v(" image "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$ID")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br")])]),s("h3",{attrs:{id:"compose-部署"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#compose-部署"}},[a._v("#")]),a._v(" Compose 部署")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" https://github.com/docker/compose/releases/download/1.25.0/docker-compose-uname -s-uname "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /usr/local/bin/docker-compose\n"),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x /usr/local/bin/docker-compose\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("自行选择安装目录用于存储数据，如安装到 /home/bitwarden\n"),s("code",[a._v("cd /home && mkdir bitwarden && cd bitwarden")]),a._v("\n准备一个配置文件 config.env\n"),s("code",[a._v("cat >> config.env << EOF")]),a._v("\n写入：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("SIGNUPS_ALLOWED")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DOMAIN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("https://yourdomain.com\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DATABASE_URL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("/data/bitwarden.db\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ROCKET_WORKERS")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("WEB_VAULT_ENABLED")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("ADMIN_TOKEN")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("xxxxxx\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("WEBSOCKET_ENABLED")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("true\nEOF\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br")])]),s("p",[a._v("准备服务描述文件 docker-compose.yml：\n"),s("code",[a._v("cat >> docker-compose.yml << EOF")]),a._v("\n写入：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("version: "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3'")]),a._v("\n\nservices:\n  bitwarden:\n    image: bitwardenrs/server:latest\n    container_name: bitwarden\n    restart: always\n    volumes:\n      - ./data:/data\n    env_file:\n      - config.env\n    ports:\n      - "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"6666:80"')]),a._v("\n      - "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"8888:3012"')]),a._v("\nEOF\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br")])]),s("p",[a._v("文件说明：")]),a._v(" "),s("blockquote",[s("p",[a._v("bitwarden 现在是唯一一个服务；\nimage: mprasil/bitwarden:latest 指定使用 Docker Hub 的 mprasil/bitwarden 最新镜像；\nvolumes 中指定将容器内的 /data 目录挂载到宿主机的当前目录下的 data 目录，这样你可以在宿主机上执行数据库的备份操作；\nports 指定将容器内的 80 端口映射到了宿主机的 6666 端口；")])]),a._v(" "),s("p",[a._v("以后对 bitwarden 服务做的所有操作，都需要预先进入这两个配置文件所在的目录内。\n拉取镜像："),s("code",[a._v("docker-compose up -d")])]),a._v(" "),s("h3",{attrs:{id:"nginx-配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-配置"}},[a._v("#")]),a._v(" Nginx 配置")]),a._v(" "),s("p",[a._v("请查看："),s("a",{attrs:{href:"https://github.com/dani-garcia/bitwarden_rs/wiki/Proxy-examples",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://github.com/dani-garcia/bitwarden_rs/wiki/Proxy-examples"),s("OutboundLink")],1),a._v("\n设置开机启动\n编辑 rc.local文件："),s("code",[a._v("vi /etc/rc.d/rc.local")]),a._v("，在最后加上：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("/usr/local/bin/docker-compose "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-f")]),a._v("\n/usr/local/bitwarden/docker-compose.yml up "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])]),s("p",[a._v("bitwarden 搭建完成，访问 "),s("a",{attrs:{href:"https://xn--6qqv7i2xdt95b/admin",target:"_blank",rel:"noopener noreferrer"}},[a._v("https://你的域名/admin"),s("OutboundLink")],1),a._v(" 输入上述配置文件的管理密码，可以进去管理面板；修改配置，需要重新启动容器以便生效：docker-compose down && docker-compose up -d")]),a._v(" "),s("h2",{attrs:{id:"开始体验"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开始体验"}},[a._v("#")]),a._v(" 开始体验")]),a._v(" "),s("h3",{attrs:{id:"数据迁移"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据迁移"}},[a._v("#")]),a._v(" 数据迁移")]),a._v(" "),s("p",[a._v("网页访问搭建号的账号注册账号（如果是个人使用注册完以后将上述 "),s("code",[a._v("SIGNUPS_ALLOWED=true")]),a._v("字段修改为 "),s("code",[a._v("SIGNUPS_ALLOWED=false")]),a._v(" 然后重启容器），于此同时登录 LastPass 导出密码（虽说需要输入主密码，但是导出的文件里的密码居然是明文的）：\n"),s("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/f8d00d8f89da3.png",alt:"image.png"}}),a._v("\n切回 Bitwarden 页面，点击工具->导入数据；选择 LassPass，再见上述步骤得到的内容直接复制粘贴到第二个红框中或者选择你得到的 csv 文件。\n"),s("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/a2da47094d658.png",alt:"image.png"}})]),a._v(" "),s("h3",{attrs:{id:"客户端使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#客户端使用"}},[a._v("#")]),a._v(" 客户端使用")]),a._v(" "),s("p",[a._v("市面商所有平台都可以使用，详情见官方"),s("a",{attrs:{href:"https://bitwarden.com/#download",target:"_blank",rel:"noopener noreferrer"}},[a._v("下载页面"),s("OutboundLink")],1),a._v("\nPS.Chromium 版的 Microsoft Edge 扩展链接没有列出："),s("a",{attrs:{href:"https://microsoftedge.microsoft.com/insider-addons/detail/jbkfoedolllekgbhcbcoahefnbanhhlh",target:"_blank",rel:"noopener noreferrer"}},[a._v("Microsoft Store"),s("OutboundLink")],1),a._v("，装好以后点击设置，输入自定义的域名，其他选项按实际情况填写。\n"),s("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/f52501dad3f5f.png",alt:"image.png"}})])])}),[],!1,null,null,null);s.default=n.exports}}]);