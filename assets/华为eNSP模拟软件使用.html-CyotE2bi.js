import{_ as t,c as r,a as e,d as n,e as i,f as o,r as p,o as d,b as a}from"./app-BCC5ysrj.js";const c={},u={class:"vuepress-toc"},h={class:"vuepress-toc-item"},m={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"};function _(x,s){const l=p("router-link");return d(),r("div",null,[s[7]||(s[7]=e("h1",{id:"ensp-软件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ensp-软件"},[e("span",null,"eNSP 软件")])],-1)),e("nav",u,[e("ul",null,[e("li",h,[n(l,{to:"#简介"},{default:i(()=>s[0]||(s[0]=[a("简介")])),_:1})]),e("li",m,[n(l,{to:"#主要功能"},{default:i(()=>s[1]||(s[1]=[a("主要功能")])),_:1})]),e("li",v,[n(l,{to:"#ospf-配置示例"},{default:i(()=>s[2]||(s[2]=[a("OSPF 配置示例")])),_:1}),e("ul",null,[e("li",g,[n(l,{to:"#基本配置步骤"},{default:i(()=>s[3]||(s[3]=[a("基本配置步骤")])),_:1})]),e("li",b,[n(l,{to:"#认证配置"},{default:i(()=>s[4]||(s[4]=[a("认证配置")])),_:1})]),e("li",f,[n(l,{to:"#状态查看"},{default:i(()=>s[5]||(s[5]=[a("状态查看")])),_:1})])])]),e("li",k,[n(l,{to:"#最佳实践"},{default:i(()=>s[6]||(s[6]=[a("最佳实践")])),_:1})])])]),s[8]||(s[8]=o(`<hr><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>eNSP (Enterprise Network Simulation Platform) 是华为公司推出的企业网络模拟器，用于网络工程师学习和测试网络配置。</p><h2 id="主要功能" tabindex="-1"><a class="header-anchor" href="#主要功能"><span>主要功能</span></a></h2><ol><li><p><strong>网络拓扑设计</strong></p><ul><li>支持拖拽式操作</li><li>丰富的设备类型</li><li>支持自定义连接</li></ul></li><li><p><strong>协议实验</strong></p><ul><li>路由协议配置</li><li>VLAN 配置</li><li>ACL 配置</li><li>QoS 配置</li></ul></li><li><p><strong>网络分析</strong></p><ul><li>报文捕获</li><li>流量分析</li><li>故障诊断</li></ul></li><li><p><strong>高级功能</strong></p><ul><li>组播实验</li><li>C/S 组网实验</li><li>WLAN 组网实验</li></ul></li></ol><h2 id="ospf-配置示例" tabindex="-1"><a class="header-anchor" href="#ospf-配置示例"><span>OSPF 配置示例</span></a></h2><h3 id="基本配置步骤" tabindex="-1"><a class="header-anchor" href="#基本配置步骤"><span>基本配置步骤</span></a></h3><ol><li><p><strong>进入 OSPF 视图</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">system-view</span>
<span class="line">ospf <span class="token punctuation">[</span>process-id<span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>配置 Router ID</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">router-id x.x.x.x</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>配置区域和网段</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">area area-id</span>
<span class="line">network ip-address wildcard-mask</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="认证配置" tabindex="-1"><a class="header-anchor" href="#认证配置"><span>认证配置</span></a></h3><ol><li><p><strong>简单认证</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 接口视图下</span></span>
<span class="line">ospf authentication-mode simple plain password</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><strong>MD5 认证</strong></p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 接口视图下</span></span>
<span class="line">ospf authentication-mode md5 key-id plain password</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h3 id="状态查看" tabindex="-1"><a class="header-anchor" href="#状态查看"><span>状态查看</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看 OSPF 进程</span></span>
<span class="line">display ospf peer</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看 OSPF 路由表</span></span>
<span class="line">display ospf routing</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看接口信息</span></span>
<span class="line">display ospf interface</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ol><li><p><strong>实验准备</strong></p><ul><li>规划网络拓扑</li><li>准备 IP 地址方案</li><li>确定使用的协议</li></ul></li><li><p><strong>配置建议</strong></p><ul><li>使用有意义的设备名称</li><li>保存配置文件</li><li>定期备份拓扑</li></ul></li><li><p><strong>故障排除</strong></p><ul><li>使用 display 命令查看状态</li><li>检查物理连接</li><li>验证协议配置</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li><p>确保设备型号兼容</p></li><li><p>注意内存和 CPU 使用</p></li><li><p>定期保存实验配置 <strong>参考资料：</strong></p></li><li><p><a href="https://support.huawei.com/enterprise/zh/doc/EDOC1100082072" target="_blank" rel="noopener noreferrer">eNSP 用户指南</a></p></li><li><p><a href="https://support.huawei.com/learning/" target="_blank" rel="noopener noreferrer">华为认证学习指南</a></p></li></ul></blockquote>`,15))])}const S=t(c,[["render",_],["__file","华为eNSP模拟软件使用.html.vue"]]),P=JSON.parse('{"path":"/flinux/Network/%E5%8D%8E%E4%B8%BAeNSP%E6%A8%A1%E6%8B%9F%E8%BD%AF%E4%BB%B6%E4%BD%BF%E7%94%A8.html","title":"eNSP 软件","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"主要功能","slug":"主要功能","link":"#主要功能","children":[]},{"level":2,"title":"OSPF 配置示例","slug":"ospf-配置示例","link":"#ospf-配置示例","children":[{"level":3,"title":"基本配置步骤","slug":"基本配置步骤","link":"#基本配置步骤","children":[]},{"level":3,"title":"认证配置","slug":"认证配置","link":"#认证配置","children":[]},{"level":3,"title":"状态查看","slug":"状态查看","link":"#状态查看","children":[]}]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]}],"git":{"updatedTime":1701020615000,"contributors":[{"name":"Linkefou","username":"Linkefou","email":"wlh724567296@163.com","commits":1}]},"filePathRelative":"flinux/Network/华为eNSP模拟软件使用.md"}');export{S as comp,P as data};
