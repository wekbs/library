(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{338:function(a,t,s){"use strict";s.r(t);var e=s(3),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("2020.10.23：经过验证，出现下述错误，保持设备和电脑的连接，重启设备到 9008 模式，迅速点击 Download，成功解锁，需要提前选择好解锁相关的文件。\n2020.10.07：之前屏幕碎了，国庆去华强北修好，回来准备按升级 6.7.3 的方法升级 7.2，变砖了；重新线刷 7.2，重新解锁老失败，错误日志如下：")]),a._v(" "),t("blockquote",[t("p",[a._v("ERROR: function: sahara_rx_data:237 Unable to read packet header. Only read 0 bytes. ERROR: function: sahara_main:924 Sahara protocol error ERROR: function: main:303 Uploading  Image using Sahara protocol failed Download Fail:Sahara Fail:QSaharaServer Fail:Process fail Finish Download")])]),a._v(" "),t("p",[a._v("2020.01.02：免重新解锁升级 6.7.3 - 删除全量包中的 boot.img 然后进 TWRP 卡刷系统机面具即可，不过木有相机，推荐使用谷歌相机（GoogleCamera-Pixel2Mod-Arnova8G2-V7beta-test-9）。\n最近锤子系统接连更新了两次（版本号相同），依旧没什么诚意的样子；就想解锁 BL 然后刷入面具（Magisk），结果各种坑 。\n而网上的教程什么的都是各种复制粘贴，不带一点自己的东西。详细资料加群获取：306564389（大佬们不怎么理人，取文件就好了）")]),a._v(" "),t("h2",{attrs:{id:"解锁刷机"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#解锁刷机"}},[a._v("#")]),a._v(" 解锁刷机")]),a._v(" "),t("p",[a._v("准备：9004 工程线（可自制），驱动（Drivers 文件夹），刷机工具（QPST Tools 文件夹），"),t("a",{attrs:{href:"https://yun.yuwei.cc/setup/JG/9004.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("点击"),t("OutboundLink")],1),a._v("下载，包含文中提到的所有文件\n1.先安装好 QPST 和驱动，并按下图所示设置好软件；")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/7f9fd4aa5eae1.png",alt:"image.png"}})]),a._v(" "),t("p",[a._v("2.手机关机，按住工程线按键，USB 数据线插入手机，等待 3 秒左右，松开工程线按键；\n3.等手机进入 9008 模式，使用 QPST 按图片顺序刷入解锁文件即可；\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/b9ffb0ab72eb1.png",alt:""}})]),a._v(" "),t("ul",[t("li",[a._v("Select Build Tpye 选择“Flat Build”；")]),a._v(" "),t("li",[a._v("Select Progammer 处，点击 Browse 选择 images 文件夹，选择“prog_emmc_firehose_sdm670_ddr.elf” 文件；")]),a._v(" "),t("li",[a._v("点击 “Load XML”选择” rawprogram0.xml，patch.xml”；")]),a._v(" "),t("li",[a._v("点击 “Download” 开始刷机，出现蓝色的 “Download Succeed” 就表示已经成功。")])]),a._v(" "),t("p",[a._v("4.上述步骤成功后，立即按住音量减按键不放，手机会重启进入 recovery；\n5.按音量减选择 Reboot to bootloader，按电源键确定，手机会重启进入 Fastboot；\n6.运行“ 解锁-刷入Twrp.bat ”，按提示完成解锁刷机。")]),a._v(" "),t("h3",{attrs:{id:"刷入面具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#刷入面具"}},[a._v("#")]),a._v(" 刷入面具")]),a._v(" "),t("p",[a._v("面具是 Magisk 的俗称， 是一款由 @"),t("a",{attrs:{href:"https://forum.xda-developers.com/member.php?u=4470081",target:"_blank",rel:"noopener noreferrer"}},[a._v("topjohnwu"),t("OutboundLink")],1),a._v(" 开发的 Android 框架，通过 Systemless 接口的方式实现一些较强大的功能；跟 Xposed 不同的是 Magisk 实现了绕过 SafetyNet 使用 root 的方法。\n1.先进入 TWRP 刷 Magisk 的 ZIP 包（最新版直接刷入即可），然后重启；\n2.安装 Magisk Manager；\n3.享受 Magisk 的 systemless root 和功能模块")]),a._v(" "),t("h3",{attrs:{id:"面具设置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面具设置"}},[a._v("#")]),a._v(" 面具设置")]),a._v(" "),t("p",[a._v("超级用户\nMagisk Hide\nSystemless hosts：进入 Magisk Manager 设置中打开 Systemless hosts")]),a._v(" "),t("h3",{attrs:{id:"模块推荐"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#模块推荐"}},[a._v("#")]),a._v(" 模块推荐")]),a._v(" "),t("ul",[t("li",[a._v("App Systemizer(Terminal Emulator)\n把用户 APP 挂载为系统应用，如：Google Play 服务、SS 等；\n使用方法：打开 Terminal Emulator 后依次输入以下命令 'su'、'systemize'，然后按提示操作即可。")]),a._v(" "),t("li",[a._v("Busybox for Android DK\n补充 Android 的 linux 指令集，Debloater 必备模块。")]),a._v(" "),t("li",[a._v("Debloater(Terminal Emulator)\n~~用来卸载位于 /system 的应用，如：Smartisan 更新等；\n使用方法：打开 Terminal Emulator 后依次输入以下命令 'su'、'debloat'，然后按提示操作即可。~~每次都需要重启，有点麻烦；某天卸载浏览器出错后，弃用；改用 SD Maid 冻结应用。")]),a._v(" "),t("li",[a._v("DNS Switcher\n自定义 DNS，替换运营商 DNS 服务器，运行 Terminal Emulator,分别输入su、dns_switch然后按提示进行操作。")]),a._v(" "),t("li",[a._v("DNSCrypt-Proxy 2\n加密你的 DNS 请求，从而让运营商无从劫持你的请求，给你访问的网页插入恶心的广告，网络访问也相对更加安全避免其他的安全风险。\nCloudflareDNS4Magisk（CloudflareDNS4Magisk IPv6）\n一个直接把你设备的 DNS 改成大名顶顶的 Cloudflare 提供的公共 DNS 服务。配合他获取更好的 DNS 体验。\nPS.根据实际情况选用")]),a._v(" "),t("li",[a._v("Global Optimized GPS File Replacer\n替换默认的 gps.conf 文件，以增强 GPS 信号。")]),a._v(" "),t("li",[a._v("Google Lens Enabler\n开启 Google 智慧镜头的功能，主要使用的是额外效果：让 Google Photos 有无限空间，Magisk Manager 里沒有，请"),t("a",{attrs:{href:"https://yun.yuwei.cc/setup/JG/Google_Lens_Enabler-v2.1.zip",target:"_blank",rel:"noopener noreferrer"}},[a._v("点击下载"),t("OutboundLink")],1),a._v("；不过貌似有时间限制，我这个提示是 2021 年，应该是模拟的设备原因。\n"),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/3feb8fcc3264b.png",alt:"image.png"}})]),a._v(" "),t("li",[a._v("Riru - Core")]),a._v(" "),t("li",[a._v("Riru - EdXposed\nXposed 停更，后续版本，坚果 Pro 2S 再也不会无线重启了。")]),a._v(" "),t("li",[a._v("Riru - Storage Redirect（Enhanced mode）\n重定向（整理 SD 卡必备）增强模式")]),a._v(" "),t("li",[a._v("Tai Chi\n坚果 Pro 2S 安装 Magisk 版的 Xposed 无限重启，只能退而求其次，安装太极来使用 Xposed 插件，详情见"),t("a",{attrs:{href:"https://github.com/taichi-framework/TaiChi/wiki/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8",target:"_blank",rel:"noopener noreferrer"}},[a._v("太极 WiKi"),t("OutboundLink")],1),a._v("，"),t("a",{attrs:{href:"https://taichi.cool/module/module_cn.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("插件推荐"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("LKT\n调整 Kernel 的模块，感觉有点玄学，有网友开发了一款管理器，"),t("a",{attrs:{href:"https://github.com/maple3142/LKT-Manager",target:"_blank",rel:"noopener noreferrer"}},[a._v("Github"),t("OutboundLink")],1),a._v("。")]),a._v(" "),t("li",[a._v("Magisk Manager for Recovery Mode(MM)\nMagisk 版本 ≥18.2 时不需要 MM 管理器，模块路径在 /data/adb/modules，删除文件夹即为删除对应的模块，在模块文件夹中新建命名为 disable 的文件则禁用模块。\nRecovery 模式下删除有问题的 Magisk 模块，如果刷了不兼容的模块造成手机开机异常，该插件可以帮助我们在 Recovery 模式的“终端”中对 Magisk 模块进行启用/停用或者卸载。\n使用方法：开机时进入 Recovery 模式，找到“终端”输入 sh /sdcard/mm 进入「MM 管理器」，根据提示使用即可。")]),a._v(" "),t("li",[a._v("Universal GMS Doze\n对 Google Play Services 开启 DOZE 的模块。")]),a._v(" "),t("li",[a._v("Vold - exFAT/NTDS/EXT4/F2FS\n坚果 Pro 2S 的 OTG 居然只支持 FAT 和 FAT32 文件格式的 U 盘，你敢信？被吹出天际的第三方文件管理器居然要付费支持 NTFS 的读取（不可写）")]),a._v(" "),t("li",[a._v("xmlpak - a road to vendor apps\n去除 Google Play 特定软件的设备不兼容、不支持，类似于设备伪装。")]),a._v(" "),t("li",[a._v("设置工具箱（原：高级设置）\n"),t("a",{attrs:{href:"https://www.coolapk.com/apk/com.byyoung.setting",target:"_blank",rel:"noopener noreferrer"}},[a._v("爱玩机工具箱"),t("OutboundLink")],1)])]),a._v(" "),t("h3",{attrs:{id:"edxposed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#edxposed"}},[a._v("#")]),a._v(" EdXposed")]),a._v(" "),t("ul",[t("li",[a._v("WeXposed\n微X模块，集合 fkzhang 微信转发模块，微信防撤回模块，微信通讯录管理模块三个模块重新发布")]),a._v(" "),t("li",[a._v("应用管理\n直接 Google Play 搜索下载，目前使用功能：移花接木，用来替换启动广告页。")]),a._v(" "),t("li",[a._v("云村清洁工\n好久没更新了，不过云音乐 v7.0 依旧可用，配合自带的青少年模式，用来在线听歌真香（本地换成自带的）")])]),a._v(" "),t("h3",{attrs:{id:"图标修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图标修改"}},[a._v("#")]),a._v(" 图标修改")]),a._v(" "),t("p",[a._v('锤子自带桌面是无法使用图标包的，ROOT 以后就好办了：\n1.使用文件管理器（如：RE 管理器）进入 /data/system/icon/data 目录；\n2.新建一个文件夹 00（名称随意，不要重复即可），下载并拷贝 name 文件到该路径下;\n{"zh_CN":"自定义","en_US":"Personal","zh_TW":"自定义","ja_JP":"キッズ","ko_KR":"어린이","ru_RU":"мать и ребёнок"}\n3.将需要增加的图标拷贝进去，然后就能从设置->主题、壁纸、图标->应用图标->未重绘->替换图标中找到，如下图：\n'),t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/5b48f22572eff.png",alt:"image.png"}}),a._v("\nPS.按拼音排序，如果要放在最强前面，请使用英文")]),a._v(" "),t("h3",{attrs:{id:"精简应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#精简应用"}},[a._v("#")]),a._v(" 精简应用")]),a._v(" "),t("p",[a._v("使用的 SD Maid 应用管理功能，然后勾选以下应用进行冻结；下述应用冻结后无不良影响，其他应用自己进行测试。\nPS.前往不要冻结安装程序，否则一直闪 logo，Fastboot 都进不去；还好在进 Fastboot 的断电一瞬间按住“音量-”按键可以进 TWRP。\n所有的都要重刷一遍，妈蛋！")]),a._v(" "),t("div",{staticClass:"language-javascript line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-javascript"}},[t("code",[a._v("浏览器 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartisanos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("browser\n应用商店 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartisanos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("appstore\n游戏加速 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartisanos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("gamespeedup\n无限屏（Beta）"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartisanos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("perspective\n桌面 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("android"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("launcher3\nSmartisan 更新 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartisanos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("updater\nHandShaker "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartisanos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartfolder"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("aoa\n用户反馈 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartisanos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("bug2go\n文件管理器 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartisanos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("filemanager\n搜索 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartisanos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("quicksearch\n快捷桌面 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartisanos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("magicflow\n云相册 "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" com"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("smartisanos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("cloudgallery\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br"),t("span",{staticClass:"line-number"},[a._v("12")]),t("br")])]),t("h2",{attrs:{id:"刷机故障"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#刷机故障"}},[a._v("#")]),a._v(" 刷机故障")]),a._v(" "),t("h3",{attrs:{id:"输入模块出问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#输入模块出问题"}},[a._v("#")]),a._v(" 输入模块出问题")]),a._v(" "),t("p",[a._v("进入 RE 系统，高级 -> 文件管理，进入 /data/adb/magisk 文件夹，删除相应的模块文件加")]),a._v(" "),t("h3",{attrs:{id:"safetynet-状态检查出现-ctsprofile-false-但是-basicintegrity-true"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#safetynet-状态检查出现-ctsprofile-false-但是-basicintegrity-true"}},[a._v("#")]),a._v(" SafetyNet 状态检查出现 ctsProfile: false 但是 basicIntegrity: true")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://f.pz.al/pzal/2023/01/13/fbcff883787ba.png",alt:"image.png"}}),a._v("\n从 "),t("a",{attrs:{href:"https://github.com/Magisk-Modules-Repo/MagiskHidePropsConf/blob/master/README.md#spoofing-devices-fingerprint-to-pass-the-ctsprofile-check",target:"_blank",rel:"noopener noreferrer"}},[a._v("MagiskHide Props Conf 文档"),t("OutboundLink")],1),a._v('上找到的方法：用 Magisk Manager 下载 "MagiskHide Props Config" 模块并安装，然后 SU 权限运行 props 指令跟换一个 Google 认证过的设备指纹 fingerprint(ro.build.fingerprint)\n不清楚是否解决，因为昨晚上述操作，SafetyNet 状态变成 “SafetyNet API 错误”了 😂。取消 MagiskHide Props Conf 恢复正常；\n另外，了解到 ctsProfileMatch 可以帮你更严谨地判断设备的兼容性。只有被 Google 认证且未经修改的设备可以成功通过 ctsProfileMatch 检查。如果设备存在下列情况，将无法成功通过 ctsProfileMatch 检查：')]),a._v(" "),t("ul",[t("li",[a._v("设备的 basicIntegrity 检查失败")]),a._v(" "),t("li",[a._v("设备的 BootLoader 已解锁")]),a._v(" "),t("li",[a._v("设备使用了自定义系统镜像（自制 ROM）")]),a._v(" "),t("li",[a._v("设备制造商未申请或未通过 Google 认证")]),a._v(" "),t("li",[a._v("设备的系统镜像直接使用 Android Open Source Program 源文件构建")]),a._v(" "),t("li",[a._v("设备系统镜像以 Beta 测试或开发者预览项目（包括Android Beta Program）方式发布")])])])}),[],!1,null,null,null);t.default=r.exports}}]);