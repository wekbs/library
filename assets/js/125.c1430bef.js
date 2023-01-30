(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{442:function(t,a,v){"use strict";v.r(a);var s=v(3),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("Multipass 是 Ubuntu 虚拟机，使用起来简洁直观，整体操作上和 Docker 类似；支持 Linux、Windows 与 macOS，为希望使用单个命令提供全新 Ubuntu 环境的开发人员而设计的；使用 Linux 上的 KVM、Windows 上的 Hyper-V 和 macOS 上的 HyperKit 来以最小的开销运行 VM，同时它还可以在 Windows 和 macOS 上使用 VirtualBox；最主要一点是免费且开源，项目地址："),a("a",{attrs:{href:"https://github.com/canonical/multipass",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/canonical/multipass"),a("OutboundLink")],1),t._v("。\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/aa17ebf3d03a5.png",alt:"image.png"}}),t._v("\n访问"),a("a",{attrs:{href:"https://multipass.run/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),a("OutboundLink")],1),t._v("，根据宿主系统下载并安装管理工具：\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/de52af082601a.png",alt:"image.png"}}),t._v("\n下载 Windows 版本安装发现有 Hyper-V 和 VirtualBox 两种 Hypervisor 可供选择：\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/8bbbc7aef4f90.png",alt:"image.png"}}),t._v("\n安装完成以后在命令行中输入"),a("code",[t._v("multipass --version")]),t._v("返回软件版本即表示安装成功；\n打开软件直接后台运行，查看任务栏多出了"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/05e120c4aa215.png",alt:"image.png"}}),t._v('图标，右键点击 Open Shell 快速创建和启动一个虚拟机，Stop 则是停止当前运行的虚拟机，Start "xxx" 启动虚拟机；\n'),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/a68c231791145.png",alt:"image.png"}}),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/e14d19b760a32.png",alt:"image.png"}}),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/e7c2ca4280202.png",alt:"image.png"}}),t._v(" "),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/970f99b65f766.png",alt:"image.png"}})]),t._v(" "),a("h2",{attrs:{id:"创建虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟机"}},[t._v("#")]),t._v(" 创建虚拟机")]),t._v(" "),a("p",[t._v("首先，通过以下指令"),a("code",[t._v("multipass find")]),t._v("查看可供下载的 Ubuntu 镜像，如下图所示；\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/f52f19e22473b.png",alt:"image.png"}}),t._v("\n下载镜像并创建虚拟机；")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("multipass launch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" vm01 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" 2G "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" 20G\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-n")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--name")]),t._v("\t\t名称\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-c")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--cpus")]),t._v(" \tCPU 核心数，默认 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-m")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--mem")]),t._v(" \t\t内存大小，默认 1G\n"),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-d")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--disk")]),t._v(" \t硬盘大小，默认 5G\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("p",[t._v("使用"),a("code",[t._v("multipass -h")]),t._v("查看帮助信息：\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/25168583e76fe.png",alt:"image.png"}})]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("命令")]),t._v(" "),a("th",[t._v("说明")]),t._v(" "),a("th",[t._v("翻译")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("alias")]),t._v(" "),a("td",[t._v("Create an alias")]),t._v(" "),a("td",[t._v("创建别名")])]),t._v(" "),a("tr",[a("td",[t._v("aliases")]),t._v(" "),a("td",[t._v("List available aliases")]),t._v(" "),a("td",[t._v("列出可用的别名")])]),t._v(" "),a("tr",[a("td",[t._v("delete")]),t._v(" "),a("td",[t._v("Delete instances")]),t._v(" "),a("td",[t._v("删除实例")])]),t._v(" "),a("tr",[a("td",[t._v("exec")]),t._v(" "),a("td",[t._v("Run a command on an instance")]),t._v(" "),a("td",[t._v("在实例上运行命令")])]),t._v(" "),a("tr",[a("td",[t._v("find")]),t._v(" "),a("td",[t._v("Display available images to create instances from")]),t._v(" "),a("td",[t._v("显示可用图像以从中创建实例")])]),t._v(" "),a("tr",[a("td",[t._v("get")]),t._v(" "),a("td",[t._v("Get a configuration setting")]),t._v(" "),a("td",[t._v("配置设置")])]),t._v(" "),a("tr",[a("td",[t._v("help")]),t._v(" "),a("td",[t._v("Display help about a command")]),t._v(" "),a("td",[t._v("显示有关命令的帮助")])]),t._v(" "),a("tr",[a("td",[t._v("info")]),t._v(" "),a("td",[t._v("Display information about instances")]),t._v(" "),a("td",[t._v("显示有关实例的信息")])]),t._v(" "),a("tr",[a("td",[t._v("launch")]),t._v(" "),a("td",[t._v("Create and start an Ubuntu instance")]),t._v(" "),a("td",[t._v("创建并启动一个Ubuntu实例")])]),t._v(" "),a("tr",[a("td",[t._v("list")]),t._v(" "),a("td",[t._v("List all available instances")]),t._v(" "),a("td",[t._v("列出所有可用实例")])]),t._v(" "),a("tr",[a("td",[t._v("mount")]),t._v(" "),a("td",[t._v("Mount a local directory in the instance")]),t._v(" "),a("td",[t._v("在实例中装入本地目录")])]),t._v(" "),a("tr",[a("td",[t._v("networks")]),t._v(" "),a("td",[t._v("List available network interfaces")]),t._v(" "),a("td",[t._v("列出可用的网络接口")])]),t._v(" "),a("tr",[a("td",[t._v("purge")]),t._v(" "),a("td",[t._v("Purge all deleted instances permanently")]),t._v(" "),a("td",[t._v("永久清除所有已删除的实例")])]),t._v(" "),a("tr",[a("td",[t._v("recover")]),t._v(" "),a("td",[t._v("Recover deleted instances")]),t._v(" "),a("td",[t._v("恢复已删除的实例")])]),t._v(" "),a("tr",[a("td",[t._v("restart")]),t._v(" "),a("td",[t._v("Restart instances")]),t._v(" "),a("td",[t._v("重新启动实例")])]),t._v(" "),a("tr",[a("td",[t._v("set")]),t._v(" "),a("td",[t._v("Set a configuration setting")]),t._v(" "),a("td",[t._v("设置配置设置")])]),t._v(" "),a("tr",[a("td",[t._v("shell")]),t._v(" "),a("td",[t._v("Open a shell on a running instance")]),t._v(" "),a("td",[t._v("在运行的实例上打开Shell")])]),t._v(" "),a("tr",[a("td",[t._v("start")]),t._v(" "),a("td",[t._v("Start instances")]),t._v(" "),a("td",[t._v("开始实例")])]),t._v(" "),a("tr",[a("td",[t._v("stop")]),t._v(" "),a("td",[t._v("Stop running instances")]),t._v(" "),a("td",[t._v("运行实例")])]),t._v(" "),a("tr",[a("td",[t._v("suspend")]),t._v(" "),a("td",[t._v("Suspend running instances")]),t._v(" "),a("td",[t._v("挂起正在运行的实例")])]),t._v(" "),a("tr",[a("td",[t._v("transfer")]),t._v(" "),a("td",[t._v("Transfer files between the host and instances")]),t._v(" "),a("td",[t._v("在主机和实例之间传输文件")])]),t._v(" "),a("tr",[a("td",[t._v("umount")]),t._v(" "),a("td",[t._v("Unmount a directory from an instance")]),t._v(" "),a("td",[t._v("从实例中卸载目录")])]),t._v(" "),a("tr",[a("td",[t._v("unalias")]),t._v(" "),a("td",[t._v("Remove an alias")]),t._v(" "),a("td",[t._v("删除别名")])]),t._v(" "),a("tr",[a("td",[t._v("version")]),t._v(" "),a("td",[t._v("Show version details")]),t._v(" "),a("td",[t._v("显示版本详细信息")])])])]),t._v(" "),a("h2",{attrs:{id:"操作虚拟机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#操作虚拟机"}},[t._v("#")]),t._v(" 操作虚拟机")]),t._v(" "),a("p",[t._v("使用"),a("code",[t._v("multipass list")]),t._v("命令进行查看虚拟机列表；\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/fac1a4b7173d7.png",alt:"image.png"}}),t._v("\n使用"),a("code",[t._v("multipass info xxx")]),t._v("命令进行查看虚拟机信息；\n"),a("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/4f8fa032d0444.png",alt:"image.png"}}),t._v("\n外部操作虚拟机"),a("code",[t._v("multipass exec")])])])}),[],!1,null,null,null);a.default=e.exports}}]);