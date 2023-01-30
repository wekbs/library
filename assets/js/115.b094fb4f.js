(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{435:function(s,a,t){"use strict";t.r(a);var e=t(3),n=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"一、文档简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、文档简介"}},[s._v("#")]),s._v(" 一、文档简介")]),s._v(" "),a("h3",{attrs:{id:"_1-备份说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-备份说明"}},[s._v("#")]),s._v(" 1.备份说明")]),s._v(" "),a("p",[s._v("使用无论哪个存储数据的软件，定期备份数据都是很重要的；Elasticsearch 集群副本提供了高可靠性，可以容忍零星的节点丢失而不会中断服务\n但是，集群副本并不提供对灾难性故障的保护；对于这种情况，我们需要的是对集群真正的备份灾难发生后有一个可靠的备份来还原数据\n本文将描述如何使用"),a("a",{attrs:{href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/backing-up-your-cluster.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("官方提供"),a("OutboundLink")],1),s._v("的 Snapshot API 备份恢复 Elasticsearch 数据："),a("a",{attrs:{href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.11/snapshot-restore.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("Snapshot & Restore"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"_2-注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-注意事项"}},[s._v("#")]),s._v(" 2.注意事项")]),s._v(" "),a("p",[s._v('备份原理：这个会拿到你集群里当前的状态和数据然后保存到一个共享仓库里。这个备份过程是"智能"的。你的第一个快照会是一个数据的完整拷贝，但是所有后续的快照会保留的是已存快照和新数据之间的差异。随着你不时的对数据进行快照，备份也在增量的添加和删除。这意味着后续备份会相当快速，因为它们只传输很小的数据量。')]),s._v(" "),a("ul",[a("li",[s._v("在进行本地备份时使用 --type 需要备份索引和数据（mapping，data）")]),s._v(" "),a("li",[s._v("在将数据备份到另外一台ES节点时需要比本地备份多备份一种数据类型（analyzer，mapping，data，template）\n| Elasticsearch | MySQL |\n| --- | --- |\n| 索引 Index | 表 |\n| 文档 Document | 行 |\n| 字段 Field | 字段 |\n| 映射 Mapping | 表结构 |")])]),s._v(" "),a("h2",{attrs:{id:"二、准备工作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、准备工作"}},[s._v("#")]),s._v(" 二、准备工作")]),s._v(" "),a("h3",{attrs:{id:"_1-集群信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-集群信息"}},[s._v("#")]),s._v(" 1.集群信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看健康状态")]),s._v("\nhttp://127.0.0.1:9200/_cat/health?v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看节点信息")]),s._v("\nhttp://127.0.0.1:9200/_cat/nodes?v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看分片信息")]),s._v("\nhttp://127.0.0.1:9200/_cat/shards?v\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看索引信息")]),s._v("\nhttp://127.0.0.1:9200/_cat/indices?v\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h3",{attrs:{id:"_2-创建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建仓库"}},[s._v("#")]),s._v(" 2.创建仓库")]),s._v(" "),a("p",[s._v("备份开始之前，需要创建一个保存数据的仓库；类型可以是：")]),s._v(" "),a("ul",[a("li",[s._v("共享文件系统，比如 NAS")]),s._v(" "),a("li",[s._v("Amazon S3")]),s._v(" "),a("li",[s._v("HDFS (Hadoop 分布式文件系统)")]),s._v(" "),a("li",[s._v("Azure Cloud")])]),s._v(" "),a("p",[s._v("创建共享目录并挂载，集群所有节点均需要操作")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" /app/data/es_backups\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mount")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" nfs "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-o")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("vers")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".10.17:/app/data/es_backups /app/data/es_backups\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#配置文件添加如下字段，指定仓库地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'path.repo: [\"/app/data/es_backups\"]'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /app/service/elasticsearch/elasticsearch.yml\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#然后重启服务")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"_3-注册仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-注册仓库"}},[s._v("#")]),s._v(" 3.注册仓库")]),s._v(" "),a("p",[s._v("集群任一节点操作即可")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-X")]),s._v(" PUT "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:9200/_snapshot/es_backups'")]),s._v(" -d"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\n{\n    "type": "fs", \n    "settings": {\n        "location": "/app/data/es_backups" \n    }\n}\'')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("一个仓库可以拥有同一个集群的多个快照，快照名字是唯一标识，直接浏览器访问查看")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http://192.168.10.24:9200/_snapshot/es_backups\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("仓库限流设置：")]),s._v(" "),a("ul",[a("li",[s._v("max_snapshot_bytes_per_sec：快照数据保存到仓库时，默认是每秒 20mb")]),s._v(" "),a("li",[s._v("max_restore_bytes_per_sec：从仓库恢复数据时，默认是每秒 20mb")]),s._v(" "),a("li",[s._v("compress：是否压缩，默认为 true")]),s._v(" "),a("li",[s._v("chunk_size：快照过程中，大文件会被分解成块，指定块的大小：1GB、500MB、5KB、500B，默认不受限制")]),s._v(" "),a("li",[s._v("readonly：让库只读，默认为 false")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-X")]),s._v(" POST "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:9200/_snapshot/es_backups'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\n{\n    "type": "fs", \n    "settings": {\n        "location": "/app/data/es_backups",\n        "max_snapshot_bytes_per_sec" : "50mb", \n        "max_restore_bytes_per_sec" : "50mb",\n        "compress":true\n    }\n}\'')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"三、备份还原"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、备份还原"}},[s._v("#")]),s._v(" 三、备份还原")]),s._v(" "),a("h3",{attrs:{id:"_1-创建快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建快照"}},[s._v("#")]),s._v(" 1.创建快照")]),s._v(" "),a("p",[s._v("数据量大的时候执行命令后会在后台运行，使用 "),a("strong",[s._v("wait_for_completion")]),s._v(" 参数会等待完成返回结果")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-X")]),s._v(" PUT "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:9200/_snapshot/es_backups/20230105?wait_for_completion=true'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/2837990/1672891393587-2184f787-37cf-4447-9f7f-d9896d038a00.png#averageHue=%23fbf4e0&clientId=u9219d6c4-c94b-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=70&id=u24a4f736&margin=%5Bobject%20Object%5D&name=image.png&originHeight=105&originWidth=391&originalType=binary&ratio=1&rotation=0&showTitle=false&size=13072&status=done&style=none&taskId=ue85a5b4f-191b-4cc1-90d4-017c11b3e51&title=&width=260.6666666666667",alt:"image.png"}}),s._v("\n默认备份所有索引，也可以指定索引")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-X")]),s._v(" POST "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:9200/_snapshot/es_backups/20230105'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\n{\n    "indices": "chat-single-wwdda403ba68de53fc,chat-group-wwdda403ba68de53fc"\n}\'')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("然后查看快照信息")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看仓库存储的所有快照")]),s._v("\nhttp://192.168.10.24:9200/_snapshot/es_backups/_all\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看仓库存储的指定快照")]),s._v("\nhttp://192.168.10.24:9200/_snapshot/es_backups/20230105\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看仓库存储的指定快照的状态")]),s._v("\nhttp://192.168.10.24:9200/_snapshot/es_backups/20230105/_status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h3",{attrs:{id:"_2-恢复快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-恢复快照"}},[s._v("#")]),s._v(" 2.恢复快照")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-X")]),s._v(" POST "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:9200/_snapshot/es_backups/20230105/_restore?wait_for_completion=true'")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("默认会恢复快照里所有的索引，跟创建快照一样，也指定进行恢复的索引，并且在恢复时重命名")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-X")]),s._v(" POST "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'http://127.0.0.1:9200/_snapshot/es_backups/20230105/_restore?wait_for_completion=true'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\n{\n    "indices": "chat-single-wwdda403ba68de53fc,chat-group-wwdda403ba68de53fc", \n    "rename_pattern": "chat-(.+)", \n    "rename_replacement": "restored-chat-$1" \n}\'')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://cdn.nlark.com/yuque/0/2023/png/2837990/1672903181526-97756e9e-eeda-418b-9e9c-dee932095aca.png#averageHue=%23fbf8f5&clientId=u5a3aa0aa-69b7-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=176&id=ue25c22ec&margin=%5Bobject%20Object%5D&name=image.png&originHeight=264&originWidth=1388&originalType=binary&ratio=1&rotation=0&showTitle=false&size=128082&status=done&style=none&taskId=ufa33de1f-699d-4a6f-99c2-5013d79e371&title=&width=925.3333333333334",alt:"image.png"}}),s._v("\n数据量大时，查看恢复状态")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("http://127.0.0.1:9200/_snapshot/es_backups/restored-chat-single-wwdda403ba68de53fc/_recovery\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"_3-删除快照"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-删除快照"}},[s._v("#")]),s._v(" 3.删除快照")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-X")]),s._v(" DELETE "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:9200/_snapshot/es_backups/20230105"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("注销仓库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-X")]),s._v(" DELETE "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"http://127.0.0.1:9200/_snapshot/es_backups"')]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"四、备份方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、备份方案"}},[s._v("#")]),s._v(" 四、备份方案")]),s._v(" "),a("h3",{attrs:{id:"_1-方案说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-方案说明"}},[s._v("#")]),s._v(" 1.方案说明")]),s._v(" "),a("blockquote",[a("p",[s._v("第一个快照会是一个数据的完整拷贝，但是所有后续的快照会保留的是已存快照和新数据之间的差异。随着你不时的对数据进行快照，备份也在增量的添加和删除。")])]),s._v(" "),a("p",[s._v("Elasticsearch 中可能会有很多个 index，为了在恢复的时候尽可能的方便，单 index 生成快照")]),s._v(" "),a("h3",{attrs:{id:"_2-方案脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-方案脚本"}},[s._v("#")]),s._v(" 2.方案脚本")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ES 地址")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ES_CLUSTER_IP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),s._v(".0.1\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#ES 端口")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ES_PROT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("9200")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#共享目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("NFS_DIR")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/data/es_backups\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#快照仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("SNAP_STORE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("es_backups\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#本次快照")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("ADD_SNAP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y%m%d"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#上次快照")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("DEL_SNAP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"-7 day"')]),s._v(" +%Y%m%d"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#指定索引")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("INDEX")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("chat-single-wwdda403ba68de53fc,chat-group-wwdda403ba68de53fc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开始时间：'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d %H:%m:%S"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建仓库")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NFS_DIR}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("then")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-p")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NFS_DIR}")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"仓库目录需要挂载共享文件夹，请联系管理员"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("fi")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-H")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Content-Type: application/json"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-X")]),s._v(" PUT http://"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ES_CLUSTER_IP}")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ES_PROT}")]),s._v("/_snapshot/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SNAP_STORE}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-d")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('\'\n{\n    "type": "fs",\n    "settings": {\n        "location": "\'')]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${NFS_DIR}")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("''")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('",\n        "')]),s._v("max_snapshot_bytes_per_sec"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('": "')]),s._v("50mb"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('",\n        "')]),s._v("max_restore_bytes_per_sec"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('": "')]),s._v("50mb"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('",\n        "')]),s._v("compress"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\":true\n    }\n}'\n\nif [[ "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$?")]),s._v(' == 0 ]];then\n  echo "')]),s._v("快照仓库创建成功"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"\nfi\n\nfor i in '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${INDEX"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("}")]),s._v(";\ndo\n\techo "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d %H:%m:%S"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v(" 开始进行索引快照："),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ADD_SNAP}")]),s._v("_backup_"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),s._v('\n\tcurl -H "')]),s._v("Content-Type: application/json"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('" -XPUT http://'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ES_CLUSTER_IP}")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ES_PROT}")]),s._v("/_snapshot/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ADD_SNAP}")]),s._v("_backup_"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ADD_SNAP}")]),s._v("_backup_"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),s._v("?wait_for_completion=true -d '{\"")]),s._v("indices"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('":"')]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'${i}'")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("\"}'\n\techo "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d %H:%m:%S"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v(" 完成当前索引快照："),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ADD_SNAP}")]),s._v("_backup_"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),s._v("\n\techo "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d %H:%m:%S"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v(" 开始删除索引快照："),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DEL_SNAP}")]),s._v("_backup_"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),s._v("\n#删除该索引旧备份数据\n\tcurl -XDELETE http://"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ES_CLUSTER_IP}")]),s._v(":"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${ES_PROT}")]),s._v("/_snapshot/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${SNAP_STORE}")]),s._v("/"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DEL_SNAP}")]),s._v("_backup_"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),s._v("\n\techo "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d %H:%m:%S"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"')]),s._v(" 完成删除索引快照："),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${DEL_SNAP}")]),s._v("_backup_"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${i}")]),s._v('\ndone\n\necho "')]),s._v("结束时间："),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v(" +%Y-%m-%d_%H:%m:%S"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("`")])]),s._v('"\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br")])]),a("p",[a("a",{attrs:{href:"https://github.com/mobz/elasticsearch-head",target:"_blank",rel:"noopener noreferrer"}},[s._v("elasticsearch-head"),a("OutboundLink")],1),s._v(" "),a("a",{attrs:{href:"https://github.com/elasticsearch-dump",target:"_blank",rel:"noopener noreferrer"}},[s._v("elasticsearch-dump"),a("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=n.exports}}]);