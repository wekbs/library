(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{424:function(t,s,n){"use strict";n.r(s);var e=n(3),i=Object(e.a)({},(function(){var t=this._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("1.尽可能使用哈希表（hash 数据结构）：Redis 在储存小于 100 个字段的 Hash 结构上，其存储效率是非常高的；所以在不需要集合（set）操作或 list 的 push/pop 操作的时候，尽可能使用 hash 结构\n2.根据业务场景，考虑使用 BitMap\n3.充分利用共享对象池：Redis 启动时会自动创建【0-9999】的整数对象池，对于 0-9999的内部整数类型的元素，整数值对象都会直接引用整数对象池中的对象，因此尽量使用 0-9999 整数对象可节省内存\n4.合理使用内存回收策略：过期数据清除、expire 设置数据过期时间等")])])}),[],!1,null,null,null);s.default=i.exports}}]);