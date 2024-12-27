import{_ as t,c as p,a as n,d as e,e as l,f as c,r as o,o as d,b as i}from"./app-BCC5ysrj.js";const r={},u={class:"vuepress-toc"},m={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},x={class:"vuepress-toc-item"},w={class:"vuepress-toc-item"},q={class:"vuepress-toc-item"},P={class:"vuepress-toc-item"},j={class:"vuepress-toc-item"},A={class:"vuepress-toc-item"},H={class:"vuepress-toc-item"},T={class:"vuepress-toc-item"},N={class:"vuepress-toc-item"},C={class:"vuepress-toc-item"},L={class:"vuepress-toc-item"},V={class:"vuepress-toc-item"};function E(B,s){const a=o("router-link");return d(),p("div",null,[s[21]||(s[21]=n("h1",{id:"playbook-介绍",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#playbook-介绍"},[n("span",null,"Playbook: 介绍")])],-1)),n("nav",u,[n("ul",null,[n("li",m,[e(a,{to:"#简介"},{default:l(()=>s[0]||(s[0]=[i("简介")])),_:1}),n("ul",null,[n("li",v,[e(a,{to:"#与-ad-hoc-的区别"},{default:l(()=>s[1]||(s[1]=[i("与 ad-hoc 的区别")])),_:1})])])]),n("li",k,[e(a,{to:"#核心元素"},{default:l(()=>s[2]||(s[2]=[i("核心元素")])),_:1})]),n("li",b,[e(a,{to:"#基本语法"},{default:l(()=>s[3]||(s[3]=[i("基本语法")])),_:1}),n("ul",null,[n("li",h,[e(a,{to:"#yaml-规则"},{default:l(()=>s[4]||(s[4]=[i("YAML 规则")])),_:1})])])]),n("li",y,[e(a,{to:"#使用示例"},{default:l(()=>s[5]||(s[5]=[i("使用示例")])),_:1}),n("ul",null,[n("li",g,[e(a,{to:"#_1-基本示例"},{default:l(()=>s[6]||(s[6]=[i("1. 基本示例")])),_:1})])])]),n("li",_,[e(a,{to:"#playbook的运行方式"},{default:l(()=>s[7]||(s[7]=[i("Playbook的运行方式")])),_:1}),n("ul",null,[n("li",f,[e(a,{to:"#基本用法"},{default:l(()=>s[8]||(s[8]=[i("基本用法")])),_:1})]),n("li",x,[e(a,{to:"#常用选项"},{default:l(()=>s[9]||(s[9]=[i("常用选项")])),_:1})]),n("li",w,[e(a,{to:"#执行示例"},{default:l(()=>s[10]||(s[10]=[i("执行示例")])),_:1})])])]),n("li",q,[e(a,{to:"#playbook中元素属性"},{default:l(()=>s[11]||(s[11]=[i("Playbook中元素属性")])),_:1}),n("ul",null,[n("li",P,[e(a,{to:"#_1-主机与用户-hosts-users"},{default:l(()=>s[12]||(s[12]=[i("1. 主机与用户(Hosts & Users)")])),_:1})]),n("li",j,[e(a,{to:"#_2-任务列表-tasks"},{default:l(()=>s[13]||(s[13]=[i("2. 任务列表(Tasks)")])),_:1})]),n("li",A,[e(a,{to:"#_3-处理器-handlers"},{default:l(()=>s[14]||(s[14]=[i("3. 处理器(Handlers)")])),_:1})])])]),n("li",H,[e(a,{to:"#playbook中变量的使用"},{default:l(()=>s[15]||(s[15]=[i("Playbook中变量的使用")])),_:1}),n("ul",null,[n("li",T,[e(a,{to:"#_1-变量定义方式"},{default:l(()=>s[16]||(s[16]=[i("1. 变量定义方式")])),_:1})]),n("li",N,[e(a,{to:"#_2-变量使用规则"},{default:l(()=>s[17]||(s[17]=[i("2. 变量使用规则")])),_:1})]),n("li",C,[e(a,{to:"#_3-特殊变量"},{default:l(()=>s[18]||(s[18]=[i("3. 特殊变量")])),_:1})]),n("li",L,[e(a,{to:"#_4-变量作用域"},{default:l(()=>s[19]||(s[19]=[i("4. 变量作用域")])),_:1})])])]),n("li",V,[e(a,{to:"#最佳实践"},{default:l(()=>s[20]||(s[20]=[i("最佳实践")])),_:1})])])]),s[22]||(s[22]=c(`<hr><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>Playbook 是 Ansible 的配置、部署和编排语言。它可以描述您希望远程系统执行的策略，或者是一组步骤的一般性流程。</p><h3 id="与-ad-hoc-的区别" tabindex="-1"><a class="header-anchor" href="#与-ad-hoc-的区别"><span>与 ad-hoc 的区别</span></a></h3><ul><li>Playbook 可持久化使用</li><li>支持更复杂的部署流程</li><li>可重用和共享</li></ul><h2 id="核心元素" tabindex="-1"><a class="header-anchor" href="#核心元素"><span>核心元素</span></a></h2><ol><li><strong>Hosts</strong>：目标主机列表</li><li><strong>Tasks</strong>：任务列表</li><li><strong>Variables</strong>：变量定义</li><li><strong>Templates</strong>：模板文件</li><li><strong>Handlers</strong>：事件触发器</li><li><strong>Tags</strong>：标签选择器</li></ol><h2 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h2><h3 id="yaml-规则" tabindex="-1"><a class="header-anchor" href="#yaml-规则"><span>YAML 规则</span></a></h3><ul><li>使用 <code>.yml</code> 或 <code>.yaml</code> 扩展名</li><li>使用 <code>---</code> 开始文档</li><li>使用空格进行缩进</li><li>区分大小写</li><li>使用 <code>#</code> 注释</li></ul><h2 id="使用示例" tabindex="-1"><a class="header-anchor" href="#使用示例"><span>使用示例</span></a></h2><h3 id="_1-基本示例" tabindex="-1"><a class="header-anchor" href="#_1-基本示例"><span>1. 基本示例</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> <span class="token operator">&gt;</span> playbook01.yml <span class="token operator">&lt;&lt;</span> <span class="token string">EOF</span>
<span class="line">---                       #固定格式</span>
<span class="line">- hosts: 192.168.1.31     #定义需要执行主机</span>
<span class="line">  remote_user: root       #远程用户</span>
<span class="line">  vars:                   #定义变量</span>
<span class="line">    http_port: 8088       #变量</span>
<span class="line"></span>
<span class="line">  tasks:                             #定义一个任务的开始</span>
<span class="line">    - name: create new file          #定义任务的名称</span>
<span class="line">      file: name=/tmp/playtest.txt state=touch   #调用模块，具体要做的事情</span>
<span class="line">    - name: create new user</span>
<span class="line">      user: name=test02 system=yes shell=/sbin/nologin</span>
<span class="line">    - name: install package</span>
<span class="line">      yum: name=httpd</span>
<span class="line">    - name: config httpd</span>
<span class="line">      template: src=./httpd.conf dest=/etc/httpd/conf/httpd.conf</span>
<span class="line">      notify:                 #定义执行一个动作(action)让handlers来引用执行，与handlers配合使用</span>
<span class="line">        - restart apache      #notify要执行的动作，这里必须与handlers中的name定义内容一致</span>
<span class="line">    - name: copy index.html</span>
<span class="line">      copy: src=/var/www/html/index.html dest=/var/www/html/index.html</span>
<span class="line">    - name: start httpd</span>
<span class="line">      service: name=httpd state=started</span>
<span class="line">  handlers:                                    #处理器：更加tasks中notify定义的action触发执行相应的处理动作</span>
<span class="line">    - name: restart apache                     #要与notify定义的内容相同</span>
<span class="line">      service: name=httpd state=restarted      #触发要执行的动作</span>
<span class="line">EOF</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><p>测试页面准备</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;&lt;h1&gt;playbook test file&lt;/h1&gt;&quot;</span> <span class="token operator">&gt;&gt;</span>/var/www/html/index.html</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>配置文件准备</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token function">cat</span> httpd.conf <span class="token operator">|</span><span class="token function">grep</span> ^Listen</span>
<span class="line">    Listen <span class="token punctuation">{</span><span class="token punctuation">{</span> http_port <span class="token punctuation">}</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>执行playbook， 第一次执行可以加-C选项，检查写的playbook是否ok</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">ansible-playbook playbook01.yml</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p>验证上面playbook执行的结果</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">ansible <span class="token number">192.168</span>.1.31 <span class="token parameter variable">-m</span> shell <span class="token parameter variable">-a</span> <span class="token string">&#39;ls /tmp/playtest.txt &amp;&amp; id test02&#39;</span></span>
<span class="line"><span class="token comment"># 192.168.1.31 | CHANGED | rc=0 &gt;&gt; /tmp/playtest.txt uid=990(test02) gid=985(test02) 组=985(test02)</span></span>
<span class="line"></span>
<span class="line"><span class="token function">curl</span> <span class="token number">192.168</span>.1.31:8088</span>
<span class="line"><span class="token comment"># &lt;h1&gt;playbook test file&lt;/h1&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="playbook的运行方式" tabindex="-1"><a class="header-anchor" href="#playbook的运行方式"><span>Playbook的运行方式</span></a></h2><h3 id="基本用法" tabindex="-1"><a class="header-anchor" href="#基本用法"><span>基本用法</span></a></h3><p>使用 <code>ansible-playbook</code> 命令运行 playbook 文件:</p><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 基本格式</span></span>
<span class="line">ansible-playbook playbook.yml <span class="token punctuation">[</span>options<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查语法</span></span>
<span class="line">ansible-playbook playbook.yml --syntax-check</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试运行(不实际执行)</span></span>
<span class="line">ansible-playbook playbook.yml <span class="token parameter variable">--check</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出受影响的主机</span></span>
<span class="line">ansible-playbook playbook.yml --list-hosts</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出所有可用的 tags</span></span>
<span class="line">ansible-playbook playbook.yml --list-tags</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 列出所有任务</span></span>
<span class="line">ansible-playbook playbook.yml --list-tasks</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 限制运行的主机</span></span>
<span class="line">ansible-playbook playbook.yml <span class="token parameter variable">--limit</span> web1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置并发数(默认5)</span></span>
<span class="line">ansible-playbook playbook.yml <span class="token parameter variable">-f</span> <span class="token number">10</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行带有 deploy 标签的任务</span></span>
<span class="line">ansible-playbook playbook.yml <span class="token parameter variable">-t</span> deploy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示详细输出</span></span>
<span class="line">ansible-playbook playbook.yml <span class="token parameter variable">-vvv</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常用选项" tabindex="-1"><a class="header-anchor" href="#常用选项"><span>常用选项</span></a></h3><table><thead><tr><th>选项</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>--check, -C</td><td>测试模式,不实际执行</td><td>ansible-playbook play.yml -C</td></tr><tr><td>--list-hosts</td><td>显示将要运行的主机列表</td><td>ansible-playbook play.yml --list-hosts</td></tr><tr><td>--list-tags</td><td>列出所有可用的 tags</td><td>ansible-playbook play.yml --list-tags</td></tr><tr><td>--list-tasks</td><td>列出所有任务</td><td>ansible-playbook play.yml --list-tasks</td></tr><tr><td>--limit</td><td>限制运行的主机</td><td>ansible-playbook play.yml --limit web1</td></tr><tr><td>-f N</td><td>设置并发数(默认5)</td><td>ansible-playbook play.yml -f 10</td></tr><tr><td>-t TAGS</td><td>只运行指定 tag 的任务</td><td>ansible-playbook play.yml -t deploy</td></tr><tr><td>-v[vv]</td><td>显示详细输出</td><td>ansible-playbook play.yml -vvv</td></tr></tbody></table><h3 id="执行示例" tabindex="-1"><a class="header-anchor" href="#执行示例"><span>执行示例</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 测试运行 playbook</span></span>
<span class="line">ansible-playbook site.yml <span class="token parameter variable">--check</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 只在 web 组运行</span></span>
<span class="line">ansible-playbook site.yml <span class="token parameter variable">--limit</span> web</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 运行带有 deploy 标签的任务</span></span>
<span class="line">ansible-playbook site.yml <span class="token parameter variable">-t</span> deploy</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示详细输出</span></span>
<span class="line">ansible-playbook site.yml <span class="token parameter variable">-vvv</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="playbook中元素属性" tabindex="-1"><a class="header-anchor" href="#playbook中元素属性"><span>Playbook中元素属性</span></a></h2><h3 id="_1-主机与用户-hosts-users" tabindex="-1"><a class="header-anchor" href="#_1-主机与用户-hosts-users"><span>1. 主机与用户(Hosts &amp; Users)</span></a></h3><p>定义要操作的目标主机和执行用户:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># 基本格式</span></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> 192.168.1.31</span>
<span class="line">  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> root</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定多个主机/组</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers<span class="token punctuation">:</span>dbservers</span>
<span class="line">  <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> deploy</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="任务级别用户" tabindex="-1"><a class="header-anchor" href="#任务级别用户"><span>任务级别用户</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">tasks</span><span class="token punctuation">:</span> </span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> run df <span class="token punctuation">-</span>h</span>
<span class="line">    <span class="token key atrule">remote_user</span><span class="token punctuation">:</span> test</span>
<span class="line">    <span class="token key atrule">shell</span><span class="token punctuation">:</span> name=df <span class="token punctuation">-</span>h</span>
<span class="line"></span>
<span class="line">  <span class="token comment"># 使用 sudo</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> install package</span>
<span class="line">    <span class="token key atrule">sudo</span><span class="token punctuation">:</span> yes</span>
<span class="line">    <span class="token key atrule">sudo_user</span><span class="token punctuation">:</span> admin</span>
<span class="line">    <span class="token key atrule">yum</span><span class="token punctuation">:</span> name=httpd state=present</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-任务列表-tasks" tabindex="-1"><a class="header-anchor" href="#_2-任务列表-tasks"><span>2. 任务列表(Tasks)</span></a></h3><p>每个任务都应该:</p><ul><li>有描述性的名称</li><li>指定要使用的模块</li><li>提供必要的参数</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create new file</span>
<span class="line">    <span class="token key atrule">file</span><span class="token punctuation">:</span> path=/tmp/test01.txt state=touch</span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> create new user</span>
<span class="line">    <span class="token key atrule">user</span><span class="token punctuation">:</span> name=test001 state=present</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-处理器-handlers" tabindex="-1"><a class="header-anchor" href="#_3-处理器-handlers"><span>3. 处理器(Handlers)</span></a></h3><p>Handlers 用于响应变更通知:</p><ul><li>httpd.yml</li></ul><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 配置 Apache</span>
<span class="line">    <span class="token key atrule">template</span><span class="token punctuation">:</span> </span>
<span class="line">      <span class="token key atrule">src</span><span class="token punctuation">:</span> httpd.conf.j2</span>
<span class="line">      <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/httpd/conf/httpd.conf</span>
<span class="line">    <span class="token key atrule">notify</span><span class="token punctuation">:</span> restart apache    <span class="token comment"># 通知处理器</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">handlers</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> restart apache     <span class="token comment"># 处理器名称</span></span>
<span class="line">    <span class="token key atrule">service</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">name</span><span class="token punctuation">:</span> httpd</span>
<span class="line">      <span class="token key atrule">state</span><span class="token punctuation">:</span> restarted</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意：</strong></p><ul><li>handlers 只在被通知时执行</li><li>多次通知只执行一次</li><li>按照定义顺序执行</li></ul></blockquote><h2 id="playbook中变量的使用" tabindex="-1"><a class="header-anchor" href="#playbook中变量的使用"><span>Playbook中变量的使用</span></a></h2><h3 id="_1-变量定义方式" tabindex="-1"><a class="header-anchor" href="#_1-变量定义方式"><span>1. 变量定义方式</span></a></h3><h4 id="命令行变量" tabindex="-1"><a class="header-anchor" href="#命令行变量"><span>命令行变量</span></a></h4><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 单个变量</span></span>
<span class="line">ansible-playbook test.yml <span class="token parameter variable">-e</span> <span class="token string">&quot;version=1.0.0&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 多个变量</span></span>
<span class="line">ansible-playbook test.yml <span class="token parameter variable">-e</span> <span class="token string">&quot;hosts=web user=test&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用变量文件</span></span>
<span class="line">ansible-playbook test.yml <span class="token parameter variable">-e</span> <span class="token string">&quot;@vars.yml&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="playbook-变量" tabindex="-1"><a class="header-anchor" href="#playbook-变量"><span>Playbook 变量</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> webservers</span>
<span class="line">  <span class="token key atrule">vars</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">http_port</span><span class="token punctuation">:</span> <span class="token number">80</span></span>
<span class="line">    <span class="token key atrule">max_clients</span><span class="token punctuation">:</span> <span class="token number">200</span></span>
<span class="line">    <span class="token key atrule">app_version</span><span class="token punctuation">:</span> <span class="token string">&quot;1.0.0&quot;</span></span>
<span class="line">   </span>
<span class="line">  <span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 配置 Apache</span>
<span class="line">      <span class="token key atrule">template</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">src</span><span class="token punctuation">:</span> httpd.conf.j2</span>
<span class="line">        <span class="token key atrule">dest</span><span class="token punctuation">:</span> /etc/httpd/conf/httpd.conf</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="变量文件" tabindex="-1"><a class="header-anchor" href="#变量文件"><span>变量文件</span></a></h4><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># vars/main.yml</span></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">db_name</span><span class="token punctuation">:</span> myapp</span>
<span class="line"><span class="token key atrule">db_user</span><span class="token punctuation">:</span> admin</span>
<span class="line"><span class="token key atrule">db_password</span><span class="token punctuation">:</span> secret</span>
<span class="line"></span>
<span class="line"><span class="token comment"># playbook.yml</span></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">hosts</span><span class="token punctuation">:</span> dbservers</span>
<span class="line">  <span class="token key atrule">vars_files</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> vars/main.yml</span>
<span class="line">  <span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 创建数据库</span>
<span class="line">      <span class="token key atrule">mysql_db</span><span class="token punctuation">:</span></span>
<span class="line">        <span class="token key atrule">name</span><span class="token punctuation">:</span> <span class="token string">&quot;{{ db_name }}&quot;</span></span>
<span class="line">        <span class="token key atrule">state</span><span class="token punctuation">:</span> present</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-变量使用规则" tabindex="-1"><a class="header-anchor" href="#_2-变量使用规则"><span>2. 变量使用规则</span></a></h3><ul><li>变量名只能包含字母、数字和下划线</li><li>变量名必须以字母开头</li><li>在模板中使用变量需要加双花括号 <code>{{ var_name }}</code></li><li>命令行变量优先级最高</li></ul><h3 id="_3-特殊变量" tabindex="-1"><a class="header-anchor" href="#_3-特殊变量"><span>3. 特殊变量</span></a></h3><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token comment"># 内置变量</span></span>
<span class="line"><span class="token key atrule">ansible_hostname</span><span class="token punctuation">:</span> 主机名</span>
<span class="line"><span class="token key atrule">ansible_distribution</span><span class="token punctuation">:</span> 操作系统</span>
<span class="line"><span class="token key atrule">ansible_os_family</span><span class="token punctuation">:</span> 系统家族</span>
<span class="line"><span class="token key atrule">ansible_architecture</span><span class="token punctuation">:</span> 系统架构</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 注册变量</span></span>
<span class="line"><span class="token key atrule">tasks</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 检查服务状态</span>
<span class="line">    <span class="token key atrule">command</span><span class="token punctuation">:</span> systemctl status httpd</span>
<span class="line">    <span class="token key atrule">register</span><span class="token punctuation">:</span> service_status</span>
<span class="line">   </span>
<span class="line">  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> 显示状态</span>
<span class="line">    <span class="token key atrule">debug</span><span class="token punctuation">:</span></span>
<span class="line">      <span class="token key atrule">var</span><span class="token punctuation">:</span> service_status.stdout</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-变量作用域" tabindex="-1"><a class="header-anchor" href="#_4-变量作用域"><span>4. 变量作用域</span></a></h3><ul><li><strong>全局变量</strong>: 适用于所有主机</li><li><strong>主机变量</strong>: 只适用于特定主机</li><li><strong>组变量</strong>: 适用于特定组的所有主机</li><li><strong>任务变量</strong>: 只在特定任务中有效</li></ul><div class="language-ini line-numbers-mode" data-highlighter="prismjs" data-ext="ini" data-title="ini"><pre><code><span class="line"><span class="token comment"># /etc/ansible/hosts</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 主机变量</span></span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">webservers</span><span class="token punctuation">]</span></span></span>
<span class="line"><span class="token key attr-name">web1 http_port</span><span class="token punctuation">=</span><span class="token value attr-value">8080 ansible_ssh_user=deploy</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 组变量</span></span>
<span class="line"><span class="token section"><span class="token punctuation">[</span><span class="token section-name selector">webservers:vars</span><span class="token punctuation">]</span></span></span>
<span class="line"><span class="token key attr-name">app_env</span><span class="token punctuation">=</span><span class="token value attr-value">production</span></span>
<span class="line"><span class="token key attr-name">max_clients</span><span class="token punctuation">=</span><span class="token value attr-value">200</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ol><li><p><strong>变量管理</strong></p><ul><li>使用有意义的变量名</li><li>集中管理变量文件</li><li>合理使用变量作用域</li></ul></li><li><p><strong>安全建议</strong></p><ul><li>加密敏感变量</li><li>避免明文密码</li><li>使用 vault 加密文件</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li>注意变量优先级</li><li>避免变量名冲突</li><li>谨慎使用全局变量</li></ul></blockquote><hr><blockquote><p><strong>参考资料：</strong></p><ul><li><a href="https://docs.ansible.com/ansible/latest/user_guide/playbooks_variables.html" target="_blank" rel="noopener noreferrer">Ansible 变量指南</a></li><li><a href="https://docs.ansible.com/ansible/latest/user_guide/playbooks_best_practices.html" target="_blank" rel="noopener noreferrer">最佳实践</a></li></ul></blockquote>`,57))])}const O=t(r,[["render",E],["__file","Playbook-1.html.vue"]]),S=JSON.parse('{"path":"/flinux/Ansible/Playbook-1.html","title":"Playbook: 介绍","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"与 ad-hoc 的区别","slug":"与-ad-hoc-的区别","link":"#与-ad-hoc-的区别","children":[]}]},{"level":2,"title":"核心元素","slug":"核心元素","link":"#核心元素","children":[]},{"level":2,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[{"level":3,"title":"YAML 规则","slug":"yaml-规则","link":"#yaml-规则","children":[]}]},{"level":2,"title":"使用示例","slug":"使用示例","link":"#使用示例","children":[{"level":3,"title":"1. 基本示例","slug":"_1-基本示例","link":"#_1-基本示例","children":[]}]},{"level":2,"title":"Playbook的运行方式","slug":"playbook的运行方式","link":"#playbook的运行方式","children":[{"level":3,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":3,"title":"常用选项","slug":"常用选项","link":"#常用选项","children":[]},{"level":3,"title":"执行示例","slug":"执行示例","link":"#执行示例","children":[]}]},{"level":2,"title":"Playbook中元素属性","slug":"playbook中元素属性","link":"#playbook中元素属性","children":[{"level":3,"title":"1. 主机与用户(Hosts & Users)","slug":"_1-主机与用户-hosts-users","link":"#_1-主机与用户-hosts-users","children":[]},{"level":3,"title":"2. 任务列表(Tasks)","slug":"_2-任务列表-tasks","link":"#_2-任务列表-tasks","children":[]},{"level":3,"title":"3. 处理器(Handlers)","slug":"_3-处理器-handlers","link":"#_3-处理器-handlers","children":[]}]},{"level":2,"title":"Playbook中变量的使用","slug":"playbook中变量的使用","link":"#playbook中变量的使用","children":[{"level":3,"title":"1. 变量定义方式","slug":"_1-变量定义方式","link":"#_1-变量定义方式","children":[]},{"level":3,"title":"2. 变量使用规则","slug":"_2-变量使用规则","link":"#_2-变量使用规则","children":[]},{"level":3,"title":"3. 特殊变量","slug":"_3-特殊变量","link":"#_3-特殊变量","children":[]},{"level":3,"title":"4. 变量作用域","slug":"_4-变量作用域","link":"#_4-变量作用域","children":[]}]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]}],"git":{"updatedTime":1735019797000,"contributors":[{"name":"Linkefou","username":"Linkefou","email":"wlh724567296@163.com","commits":1},{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":4}]},"filePathRelative":"flinux/Ansible/Playbook-1.md"}');export{O as comp,S as data};
