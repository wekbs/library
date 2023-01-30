(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{401:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"基本操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基本操作"}},[s._v("#")]),s._v(" 基本操作")]),s._v(" "),a("p",[s._v("关机重启")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#关机")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" now\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("shutdown")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" now\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("CPU 信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看系统内核信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uname")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看系统内核版本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/version\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前用户环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("env")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看有几个逻辑cpu，包括cpu型号")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cut")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-f2")]),s._v(" -d: "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看有几颗 cpu，每颗分别是几核")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" physical "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("uniq")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前 CPU 运行在 32bit 还是 64bit 模式下，如果是运行在 32bit 下也不代表 CPU 不支持 64bit")]),s._v("\ngetconf LONG_BIT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#结果大于 0, 说明支持 64bit 计算，lm 指 long mode, 支持 lm 则是 64bit")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /proc/cpuinfo "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" flags "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("' lm '")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("建立软连接")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /usr/local/jdk1.8/ jdk\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("命令重命名")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在各个用户的 .bash_profile 中添加重命名配置")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("alias")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ll")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'ls -alF'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h2",{attrs:{id:"查找命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找命令"}},[s._v("#")]),s._v(" 查找命令")]),s._v(" "),a("h3",{attrs:{id:"find"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#find"}},[s._v("#")]),s._v(" find")]),s._v(" "),a("p",[s._v("find 是最常见和最强大的查找命令，可以用它找到任何你想找的文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("目录"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("条件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("动作"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#目录：所要搜索的目录及其所有子目录，默认为当前目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#条件：所要搜索的文件的特征")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#动作：对搜索结果进行特定的处理")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("如果什么参数也不加，find 默认搜索当前目录及其子目录，并且不过滤任何结果返回所有文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#搜索当前目录（含子目录，以下同）中，所有文件名以my开头的文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my*'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#搜索当前目录中，所有文件名以my开头的文件，并显示它们的详细信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-name")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'my*'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ls")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#搜索当前目录中，所有过去 10 分钟中更新过的普通文件，不加 -type f 参数，则搜索普通文件+特殊文件+目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("find")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-type")]),s._v(" f "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-mmin")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-10")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"locate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#locate"}},[s._v("#")]),s._v(" locate")]),s._v(" "),a("p",[s._v("locate 命令其实是"),a("code",[s._v("find -name")]),s._v("的另一种写法，但比后者快得多，原因在于它不搜索具体目录，而是搜索一个数据库（/var/lib/locatedb），其中含有本地所有文件信息；\nLinux 系统自动创建这个数据库，并且每天自动更新一次，所以使用 locate 命令查不到最新变动过的文件；为了避免这种情况，可以在使用 locate 之前，先使用 updatedb 命令，手动更新数据库。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#搜索etc目录下所有以sh开头的文件。")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" /etc/sh\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#搜索用户主目录下，所有以 m 开头的文件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" ~/m\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#搜索用户主目录下，所有以 m 开头的文件，并且忽略大小写")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("locate")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-i")]),s._v(" ~/m\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"whereis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#whereis"}},[s._v("#")]),s._v(" whereis")]),s._v(" "),a("p",[s._v("whereis 命令只能用于程序名的搜索，而且只搜索二进制文件（参数 -b）、man 说明文件（参数 -m）和源代码文件（参数 -s）；如果省略参数，则返回所有信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("java")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"which"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#which"}},[s._v("#")]),s._v(" which")]),s._v(" "),a("p",[s._v("which 命令的作用是，在 PATH 变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果；也就是说，使用 which 命令，就可以看到某个系统命令是否存在，以及执行的到底是哪一个位置的命令。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("which")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"type"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[s._v("#")]),s._v(" type")]),s._v(" "),a("p",[s._v("type 命令其实不能算查找命令，它是用来区分某个命令到底是由 shell 自带的，还是由 shell 外部的独立二进制文件提供的；如果一个命令是外部命令，那么使用 -p 参数，会显示该命令的路径，相当于 which 命令。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加上-p 参数后，就相当于 which 命令")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("查找进程")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" aux "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" xxx\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"文件操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#文件操作"}},[s._v("#")]),s._v(" 文件操作")]),s._v(" "),a("p",[s._v("查看磁盘，文件目录基本信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看磁盘挂载情况")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看磁盘分区信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看磁盘分区信息，显示直观大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("df")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看目录及子目录大小")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看当前目录下文件（夹）占用情况，不会递归")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sh")]),s._v(" *\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看根目录下文件（夹）占用情况")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sh")]),s._v(" /*\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看指定目录下文件（层深为 1）占用情况")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ah")]),s._v(" --max-depth"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v(" /\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看指定目录下文件（夹）占用情况")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-sh")]),s._v(" /var/log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看指定目录下指定大小的文件（夹）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("du")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-h")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" 100M /var/log/\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("wc 命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看文件里有多少行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v(" filename\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#看文件里有多少个word")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-w")]),s._v(" filename\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#文件里最长的那一行是多少个字")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-L")]),s._v(" filename\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#统计字节数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wc")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("p",[s._v("解压缩")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" czvf xxx.tar 压缩目录\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("zip")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-r")]),s._v(" xxx.zip 压缩目录\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf xxx.tar\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解压到指定文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" zxvf xxx.tar "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /root/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unzip")]),s._v(" xxx.zip\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h2",{attrs:{id:"用户进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#用户进程"}},[s._v("#")]),s._v(" 用户进程")]),s._v(" "),a("p",[s._v("查询 www 用户所有进程："),a("code",[s._v("ps -o nlwp,pid,lwp,args -u www | sort -n")]),s._v("\n查询 www 用户所有进程并打印："),a("code",[s._v("ps -o nlwp,pid,lwp,args -u www | sort -n > 1.txt")]),s._v("\n查询 www 用户所有进程并关闭："),a("code",[s._v("ps -o nlwp,pid,lwp,args -u www | sort -n | awk '{print \"kill -9 \"$2}'|sh")])]),s._v(" "),a("h3",{attrs:{id:"端口占用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#端口占用"}},[s._v("#")]),s._v(" 端口占用")]),s._v(" "),a("p",[a("code",[s._v("netstat -lntp | grep 10086")])]),s._v(" "),a("h3",{attrs:{id:"进程超限"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程超限"}},[s._v("#")]),s._v(" 进程超限")]),s._v(" "),a("p",[s._v("账户无法登录，报错：“the server refused to start a shell”，查看"),a("code",[s._v("tail /var/log/secure")]),s._v("，看到“error: do_exec_pty: fork: Resource temporarily unavailable”\n查看所有用户进程数："),a("code",[s._v("ps h -Led -o user | sort | uniq -c | sort -n")]),s._v("\n查看指定用户进程数：\n查看指定用户进程项："),a("code",[s._v("ps -o nlwp,pid,lwp,args -u www | sort -n")]),s._v(" "),a("code",[s._v("vim /etc/security/limits.d/20-nproc.conf")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("*          soft    nproc     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("4096")]),s._v("\nwww        soft    nproc     "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10240")]),s._v("\nroot       soft    nproc     unlimited\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[a("code",[s._v("vim /etc/security/limits.conf")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("root soft nofile "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v("\nroot hard nofile "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v("\n*\tsoft nofile "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v("\n* hard nofile "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("ulimit -a\nulimit -u\nulimit -n")]),s._v(" "),a("h2",{attrs:{id:"关闭进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭进程"}},[s._v("#")]),s._v(" 关闭进程")]),s._v(" "),a("h3",{attrs:{id:"查询进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询进程"}},[s._v("#")]),s._v(" 查询进程")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" nlwp,pid,lwp,args "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" www "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sort")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-n")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"直接杀掉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接杀掉"}},[s._v("#")]),s._v(" 直接杀掉")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ef")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("egrep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/usr/sbin/sendmail|/usr/sbin/postdrop"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-v")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("awk")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'{print $2}'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("xargs")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("kill")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-9")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("PS 查看父进程 PID，发现是 crond；crond 执行脚本时会将脚本输出信息以邮件的形式发送给 crond 用户，postfix 没有正常运行，导致邮件发送失败，造成进程一直卡在那\ncrond->sendmail->postdrop")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tail")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-c")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v(" /var/log/maillog\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("crontab")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#首行添加")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MAILTO")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('""')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h2",{attrs:{id:"无法登录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#无法登录"}},[s._v("#")]),s._v(" 无法登录")]),s._v(" "),a("h3",{attrs:{id:"passwd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passwd"}},[s._v("#")]),s._v(" Passwd")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("chattr "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-ia")]),s._v(" /etc/passwd\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/passwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" www\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改 Shell")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/sbin/nologin"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/bin/bash"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);