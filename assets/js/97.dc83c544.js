(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{417:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"解压并且安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解压并且安装"}},[s._v("#")]),s._v(" 解压并且安装")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#先查找并卸载已经存在的软件包")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-qa")]),s._v(" mysql mysql-server mariadb mariadb-server\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rpm")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-e")]),s._v(" 包名\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /app/software\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#解压并编译安装")]),s._v("\nhttps://downloads.mysql.com/archives/get/p/23/file/mysql-5.7.9-linux-glibc2.5-x86_64.tar.gz\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-zxvf")]),s._v(" mysql-5.7.9-linux-glibc2.5-x86_64.tar.gz "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" /app/service\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /app/service/mysql-5.7.9-linux-glibc2.5-x86_64 /app/service/mysql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#创建日志文件夹")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-pv")]),s._v(" /app/logs/mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("p",[s._v("使用以下命令添加环境变量：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export MYSQL_HOME=/app/service/mysql"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"export PATH=\\'),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("$PATH")]),s._v(":\\"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$MYSQL_HOME")]),s._v('/bin"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" /etc/profile\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#加载环境变量，使其生效")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" /etc/profile\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"修改配置文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改配置文件"}},[s._v("#")]),s._v(" 修改配置文件")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /app/service/mysql/my.cnf\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqld"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nuser "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" app\nsql_mode "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES\n\nbasedir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /app/service/mysql\ndatadir "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /app/data/mysql\nport "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v("\nsocket "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /tmp/mysql.sock\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#设置 utf8mb4 编码")]),s._v("\ncharacter-set-server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4\ncollation-server "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4_general_ci\nskip-character-set-client-handshake\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#INNODB")]),s._v("\ndefault-storage-engine"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("INNODB\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("innodb_buffer_pool_size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("8G\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("innodb_log_file_size")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("256M\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("innodb_flush_method")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("O_DIRECT\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#不区分大小写")]),s._v("\nlower_case_table_names "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#跳过 DNS 反查询")]),s._v("\nskip-name-resolve\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("default_password_lifetime")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#跳过授权表，忘记密码时使用")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#skip-grant-tables")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#允许最大连接数")]),s._v("\nmax_connections "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2048")]),s._v("\nopen_files_limit "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v("\nmax-connect-errors "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("100000")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#错误日志")]),s._v("\nlog-error "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /app/logs/mysql/mysql-error.log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#慢查询")]),s._v("\nslow_query_log "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\nlong_query_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#min_examined_row_limit = 1000")]),s._v("\nslow_query_log_file "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /app/logs/mysql/mysql_slow_query.log\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4\nsocket "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /tmp/mysql.sock\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("client"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\ndefault-character-set "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" utf8mb4\nsocket "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /tmp/mysql.sock\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqldump"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsocket "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /tmp/mysql.sock\n  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mysqladmin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\nsocket "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" /tmp/mysql.sock\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br")])]),a("p",[s._v("输入以下命令初始化数据库服务")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("/app/service/mysql/bin/mysqld --defaults-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/service/mysql/my.cnf "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--initialize")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--user")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("app "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--basedir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/service/mysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("--datadir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/data/mysql\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#初始化后从日志中查询初始化密码，记录下来方便后续使用或者修改密码")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'temporary password'")]),s._v(" /app/logs/mysql/mysql-error.log\n/app/service/mysql/bin/mysqld_safe --defaults-file"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/service/mysql/my.cnf "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("使用"),a("code",[s._v("ALTER USER")]),s._v("和"),a("code",[s._v("SET PASSWORD")]),s._v("修改密码都报错")]),s._v(" "),a("blockquote",[a("p",[s._v("ERROR 1820 (HY000): You must reset your password using ALTER USER statement before executing this statement.")])]),s._v(" "),a("p",[s._v("直接按忘记密码的方式进行重置：")]),s._v(" "),a("div",{staticClass:"language-mysql line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("#关闭服务，修改配置文件，跳过授权表，再启动服务\n#/app/service/mysql/bin/mysql -uroot\nUPDATE user SET authentication_string=password('BZ5mulg8PM') , password_expired='N' WHERE user='root';\nSELECT authentication_string , password_expired FROM user WHERE user='root';\n#再关闭服务，将配置文件中跳过授权表的部分注释掉，重新启动服务\n#/app/service/mysql/bin/mysql -uroot -p'BZ5mulg8PM'\nGRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'BZ5mulg8PM' WITH GRANT OPTION;\nFLUSH PRIVILEGES;\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"服务相关命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#服务相关命令"}},[s._v("#")]),s._v(" 服务相关命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#拷贝命令（root 权限运行）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /app/service/mysql/support-files/mysql.server /app/service/mysql_service\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#编辑脚本（root 权限运行）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/init.d/mysql\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("basedir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/service/mysql\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("datadir")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/data/mysql\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("conf")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/app/service/mysql/my.cnf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#启动数据库")]),s._v("\n/etc/init.d/mysql start\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#重启数据库")]),s._v("\n/etc/init.d/mysql restart\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止数据库")]),s._v("\n/etc/init.d/mysql stop\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("p",[s._v("其他命令")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#添加相关命令的软连接（root 权限运行）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),s._v(" /app/service/mysql/bin/mysql* /usr/bin/\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#本地登录")]),s._v("\nmysql "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-uroot")]),s._v(" -p"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'fjphty:BI96t'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#修改密码")]),s._v("\nALTER "),a("span",{pre:!0,attrs:{class:"token environment constant"}},[s._v("USER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" IDENTIFIED BY "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'kGXSu4fjF'")]),s._v(" PASSWORD EXPIRE NEVER"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);