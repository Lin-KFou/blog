import{_ as p,c as t,a as n,d as e,e as l,f as c,r as d,o as r,b as i}from"./app-BCC5ysrj.js";const o={},u={class:"vuepress-toc"},m={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"};function P(C,s){const a=d("router-link");return r(),t("div",null,[s[8]||(s[8]=n("h1",{id:"ensp静态路由实验",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#ensp静态路由实验"},[n("span",null,"eNSP静态路由实验")])],-1)),n("nav",u,[n("ul",null,[n("li",m,[e(a,{to:"#目的"},{default:l(()=>s[0]||(s[0]=[i("目的")])),_:1})]),n("li",v,[e(a,{to:"#实验环境"},{default:l(()=>s[1]||(s[1]=[i("实验环境")])),_:1})]),n("li",b,[e(a,{to:"#实验步骤"},{default:l(()=>s[2]||(s[2]=[i("实验步骤")])),_:1}),n("ul",null,[n("li",h,[e(a,{to:"#_1-拓扑搭建"},{default:l(()=>s[3]||(s[3]=[i("1. 拓扑搭建")])),_:1})]),n("li",k,[e(a,{to:"#_2-路由器配置"},{default:l(()=>s[4]||(s[4]=[i("2. 路由器配置")])),_:1})]),n("li",f,[e(a,{to:"#_3-pc-配置"},{default:l(()=>s[5]||(s[5]=[i("3. PC 配置")])),_:1})])])]),n("li",_,[e(a,{to:"#验证配置"},{default:l(()=>s[6]||(s[6]=[i("验证配置")])),_:1})]),n("li",g,[e(a,{to:"#常见问题"},{default:l(()=>s[7]||(s[7]=[i("常见问题")])),_:1})])])]),s[9]||(s[9]=c(`<hr><h2 id="目的" tabindex="-1"><a class="header-anchor" href="#目的"><span>目的</span></a></h2><ul><li>掌握华为路由器基本配置命令</li><li>理解静态路由工作原理</li><li>熟悉静态路由配置方法</li><li>掌握网络通信基本原理</li></ul><h2 id="实验环境" tabindex="-1"><a class="header-anchor" href="#实验环境"><span>实验环境</span></a></h2><ul><li>模拟器：华为 eNSP</li><li>设备： <ul><li>2 台路由器</li><li>2 台 PC</li></ul></li><li>网段规划： <ul><li>PC1 网段：192.168.1.0/24</li><li>PC2 网段：192.168.2.0/24</li><li>路由器互联：192.168.3.0/30</li></ul></li></ul><h2 id="实验步骤" tabindex="-1"><a class="header-anchor" href="#实验步骤"><span>实验步骤</span></a></h2><h3 id="_1-拓扑搭建" tabindex="-1"><a class="header-anchor" href="#_1-拓扑搭建"><span>1. 拓扑搭建</span></a></h3><ol><li><p>连接设备</p><ul><li>R1 与 PC1 相连</li><li>R2 与 PC2 相连</li><li>R1 与 R2 互联</li></ul></li><li><p>配置 IP 地址</p><ul><li>PC1：192.168.1.2/24</li><li>PC2：192.168.2.2/24</li></ul></li></ol><h3 id="_2-路由器配置" tabindex="-1"><a class="header-anchor" href="#_2-路由器配置"><span>2. 路由器配置</span></a></h3><h4 id="r1-配置" tabindex="-1"><a class="header-anchor" href="#r1-配置"><span>R1 配置</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 进入系统视图</span></span>
<span class="line">system-view</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置设备名</span></span>
<span class="line">sysname R1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭信息中心</span></span>
<span class="line">undo info-center <span class="token builtin class-name">enable</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置连接 R2 的接口</span></span>
<span class="line">interface GigabitEthernet <span class="token number">0</span>/0/0</span>
<span class="line"><span class="token function">ip</span> address <span class="token number">192.168</span>.3.1 <span class="token number">255.255</span>.255.252</span>
<span class="line">quit</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置连接 PC1 的接口</span></span>
<span class="line">interface GigabitEthernet <span class="token number">0</span>/0/1</span>
<span class="line"><span class="token function">ip</span> address <span class="token number">192.168</span>.1.1 <span class="token number">255.255</span>.255.0</span>
<span class="line">quit</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置到达 PC2 网段的静态路由</span></span>
<span class="line"><span class="token function">ip</span> route-static <span class="token number">192.168</span>.2.0 <span class="token number">255.255</span>.255.0 <span class="token number">192.168</span>.3.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="r2-配置" tabindex="-1"><a class="header-anchor" href="#r2-配置"><span>R2 配置</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 进入系统视图</span></span>
<span class="line">system-view</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置设备名</span></span>
<span class="line">sysname R2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭信息中心</span></span>
<span class="line">undo info-center <span class="token builtin class-name">enable</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置连接 R1 的接口</span></span>
<span class="line">interface GigabitEthernet <span class="token number">0</span>/0/0</span>
<span class="line"><span class="token function">ip</span> address <span class="token number">192.168</span>.3.2 <span class="token number">255.255</span>.255.252</span>
<span class="line">quit</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置连接 PC2 的接口</span></span>
<span class="line">interface GigabitEthernet <span class="token number">0</span>/0/1</span>
<span class="line"><span class="token function">ip</span> address <span class="token number">192.168</span>.2.1 <span class="token number">255.255</span>.255.0</span>
<span class="line">quit</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置到达 PC1 网段的静态路由</span></span>
<span class="line"><span class="token function">ip</span> route-static <span class="token number">192.168</span>.1.0 <span class="token number">255.255</span>.255.0 <span class="token number">192.168</span>.3.1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-pc-配置" tabindex="-1"><a class="header-anchor" href="#_3-pc-配置"><span>3. PC 配置</span></a></h3><h4 id="pc1-配置" tabindex="-1"><a class="header-anchor" href="#pc1-配置"><span>PC1 配置</span></a></h4><ul><li>IP：192.168.1.2</li><li>掩码：255.255.255.0</li><li>网关：192.168.1.1</li></ul><h4 id="pc2-配置" tabindex="-1"><a class="header-anchor" href="#pc2-配置"><span>PC2 配置</span></a></h4><ul><li>IP：192.168.2.2</li><li>掩码：255.255.255.0</li><li>网关：192.168.2.1</li></ul><h2 id="验证配置" tabindex="-1"><a class="header-anchor" href="#验证配置"><span>验证配置</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 在 R1 上查看路由表</span></span>
<span class="line">display <span class="token function">ip</span> routing-table</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在 PC1 上测试连通性</span></span>
<span class="line"><span class="token function">ping</span> <span class="token number">192.168</span>.2.2</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在 PC2 上测试连通性</span></span>
<span class="line"><span class="token function">ping</span> <span class="token number">192.168</span>.1.2</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题"><span>常见问题</span></a></h2><ol><li><p><strong>PC 无法通信</strong></p><ul><li>检查 PC 网关配置</li><li>验证路由器接口状态</li><li>确认静态路由配置正确</li></ul></li><li><p><strong>单向可达</strong></p><ul><li>检查两端静态路由配置</li><li>验证接口 IP 地址配置</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li>确保使用正确的子网掩码</li><li>路由器接口 IP 必须在同一网段</li><li>静态路由必须双向配置</li></ul></blockquote>`,23))])}const N=p(o,[["render",P],["__file","eNSP-静态路由实验.html.vue"]]),E=JSON.parse('{"path":"/flinux/Network/eNSP-%E9%9D%99%E6%80%81%E8%B7%AF%E7%94%B1%E5%AE%9E%E9%AA%8C.html","title":"eNSP静态路由实验","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"目的","slug":"目的","link":"#目的","children":[]},{"level":2,"title":"实验环境","slug":"实验环境","link":"#实验环境","children":[]},{"level":2,"title":"实验步骤","slug":"实验步骤","link":"#实验步骤","children":[{"level":3,"title":"1. 拓扑搭建","slug":"_1-拓扑搭建","link":"#_1-拓扑搭建","children":[]},{"level":3,"title":"2. 路由器配置","slug":"_2-路由器配置","link":"#_2-路由器配置","children":[]},{"level":3,"title":"3. PC 配置","slug":"_3-pc-配置","link":"#_3-pc-配置","children":[]}]},{"level":2,"title":"验证配置","slug":"验证配置","link":"#验证配置","children":[]},{"level":2,"title":"常见问题","slug":"常见问题","link":"#常见问题","children":[]}],"git":{"updatedTime":1701020615000,"contributors":[{"name":"Linkefou","username":"Linkefou","email":"wlh724567296@163.com","commits":1}]},"filePathRelative":"flinux/Network/eNSP-静态路由实验.md"}');export{N as comp,E as data};
