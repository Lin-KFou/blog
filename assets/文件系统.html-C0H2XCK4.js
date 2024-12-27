import{_ as p,c as t,a as n,d as e,e as l,f as c,r as d,o as r,b as i}from"./app-BCC5ysrj.js";const o={},m={class:"vuepress-toc"},v={class:"vuepress-toc-item"},u={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},x={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"},B={class:"vuepress-toc-item"},z={class:"vuepress-toc-item"},j={class:"vuepress-toc-item"},N={class:"vuepress-toc-item"},w={class:"vuepress-toc-item"};function E(q,s){const a=d("router-link");return r(),t("div",null,[s[15]||(s[15]=n("h1",{id:"linux-文件系统",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux-文件系统"},[n("span",null,"Linux 文件系统")])],-1)),n("nav",m,[n("ul",null,[n("li",v,[e(a,{to:"#_1-文件系统基础"},{default:l(()=>s[0]||(s[0]=[i("1. 文件系统基础")])),_:1}),n("ul",null,[n("li",u,[e(a,{to:"#_1-1-目录结构"},{default:l(()=>s[1]||(s[1]=[i("1.1 目录结构")])),_:1})]),n("li",b,[e(a,{to:"#_1-2-文件类型"},{default:l(()=>s[2]||(s[2]=[i("1.2 文件类型")])),_:1})])])]),n("li",h,[e(a,{to:"#_2-文件操作"},{default:l(()=>s[3]||(s[3]=[i("2. 文件操作")])),_:1}),n("ul",null,[n("li",k,[e(a,{to:"#_2-1-基本操作"},{default:l(()=>s[4]||(s[4]=[i("2.1 基本操作")])),_:1})]),n("li",_,[e(a,{to:"#_2-2-权限管理"},{default:l(()=>s[5]||(s[5]=[i("2.2 权限管理")])),_:1})])])]),n("li",f,[e(a,{to:"#_3-文件系统管理"},{default:l(()=>s[6]||(s[6]=[i("3. 文件系统管理")])),_:1}),n("ul",null,[n("li",g,[e(a,{to:"#_3-1-磁盘管理"},{default:l(()=>s[7]||(s[7]=[i("3.1 磁盘管理")])),_:1})]),n("li",x,[e(a,{to:"#_3-2-文件系统维护"},{default:l(()=>s[8]||(s[8]=[i("3.2 文件系统维护")])),_:1})])])]),n("li",y,[e(a,{to:"#_4-高级特性"},{default:l(()=>s[9]||(s[9]=[i("4. 高级特性")])),_:1}),n("ul",null,[n("li",B,[e(a,{to:"#_4-1-软硬链接"},{default:l(()=>s[10]||(s[10]=[i("4.1 软硬链接")])),_:1})]),n("li",z,[e(a,{to:"#_4-2-文件查找"},{default:l(()=>s[11]||(s[11]=[i("4.2 文件查找")])),_:1})])])]),n("li",j,[e(a,{to:"#_5-实用技巧"},{default:l(()=>s[12]||(s[12]=[i("5. 实用技巧")])),_:1}),n("ul",null,[n("li",N,[e(a,{to:"#_5-1-文件压缩"},{default:l(()=>s[13]||(s[13]=[i("5.1 文件压缩")])),_:1})]),n("li",w,[e(a,{to:"#_5-2-文件同步与备份"},{default:l(()=>s[14]||(s[14]=[i("5.2 文件同步与备份")])),_:1})])])])])]),s[16]||(s[16]=c(`<hr><h2 id="_1-文件系统基础" tabindex="-1"><a class="header-anchor" href="#_1-文件系统基础"><span>1. 文件系统基础</span></a></h2><h3 id="_1-1-目录结构" tabindex="-1"><a class="header-anchor" href="#_1-1-目录结构"><span>1.1 目录结构</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line">/           <span class="token comment"># 根目录</span></span>
<span class="line">├── bin     <span class="token comment"># 基本命令</span></span>
<span class="line">├── boot    <span class="token comment"># 启动文件</span></span>
<span class="line">├── dev     <span class="token comment"># 设备文件</span></span>
<span class="line">├── etc     <span class="token comment"># 配置文件</span></span>
<span class="line">├── home    <span class="token comment"># 用户目录</span></span>
<span class="line">├── lib     <span class="token comment"># 系统库文件</span></span>
<span class="line">├── mnt     <span class="token comment"># 挂载点</span></span>
<span class="line">├── opt     <span class="token comment"># 可选软件</span></span>
<span class="line">├── proc    <span class="token comment"># 进程信息</span></span>
<span class="line">├── root    <span class="token comment"># root用户目录</span></span>
<span class="line">├── sbin    <span class="token comment"># 系统命令</span></span>
<span class="line">├── tmp     <span class="token comment"># 临时文件</span></span>
<span class="line">├── usr     <span class="token comment"># 用户程序</span></span>
<span class="line">└── var     <span class="token comment"># 可变文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-文件类型" tabindex="-1"><a class="header-anchor" href="#_1-2-文件类型"><span>1.2 文件类型</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看文件类型</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-l</span></span>
<span class="line"><span class="token comment"># 结果示例：</span></span>
<span class="line"><span class="token comment"># - 普通文件</span></span>
<span class="line"><span class="token comment"># d 目录</span></span>
<span class="line"><span class="token comment"># l 符号链接</span></span>
<span class="line"><span class="token comment"># b 块设备</span></span>
<span class="line"><span class="token comment"># c 字符设备</span></span>
<span class="line"><span class="token comment"># s 套接字</span></span>
<span class="line"><span class="token comment"># p 管道</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-文件操作" tabindex="-1"><a class="header-anchor" href="#_2-文件操作"><span>2. 文件操作</span></a></h2><h3 id="_2-1-基本操作" tabindex="-1"><a class="header-anchor" href="#_2-1-基本操作"><span>2.1 基本操作</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建文件</span></span>
<span class="line"><span class="token function">touch</span> file.txt</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建目录</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token function">dir</span></span>
<span class="line"><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> dir1/dir2/dir3  <span class="token comment"># 创建多级目录</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 复制文件</span></span>
<span class="line"><span class="token function">cp</span> source.txt dest.txt</span>
<span class="line"><span class="token function">cp</span> <span class="token parameter variable">-r</span> source_dir dest_dir  <span class="token comment"># 复制目录</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 移动/重命名</span></span>
<span class="line"><span class="token function">mv</span> old.txt new.txt</span>
<span class="line"><span class="token function">mv</span> file.txt /path/to/dir/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除</span></span>
<span class="line"><span class="token function">rm</span> file.txt</span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-r</span> dir/  <span class="token comment"># 删除目录</span></span>
<span class="line"><span class="token function">rm</span> <span class="token parameter variable">-rf</span> dir/  <span class="token comment"># 强制删除</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-权限管理" tabindex="-1"><a class="header-anchor" href="#_2-2-权限管理"><span>2.2 权限管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看权限</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-l</span> file.txt</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改权限</span></span>
<span class="line"><span class="token function">chmod</span> <span class="token number">644</span> file.txt</span>
<span class="line"><span class="token function">chmod</span> u+x file.txt  <span class="token comment"># 给所有者添加执行权限</span></span>
<span class="line"><span class="token function">chmod</span> g-w file.txt  <span class="token comment"># 移除组写权限</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修改所有者</span></span>
<span class="line"><span class="token function">chown</span> user:group file.txt</span>
<span class="line"><span class="token function">chown</span> <span class="token parameter variable">-R</span> user:group dir/  <span class="token comment"># 递归修改</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-文件系统管理" tabindex="-1"><a class="header-anchor" href="#_3-文件系统管理"><span>3. 文件系统管理</span></a></h2><h3 id="_3-1-磁盘管理" tabindex="-1"><a class="header-anchor" href="#_3-1-磁盘管理"><span>3.1 磁盘管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看磁盘使用情况</span></span>
<span class="line"><span class="token function">df</span> <span class="token parameter variable">-h</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看目录大小</span></span>
<span class="line"><span class="token function">du</span> <span class="token parameter variable">-sh</span> /path/to/dir</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看文件系统类型</span></span>
<span class="line"><span class="token function">mount</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;^/dev&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 挂载文件系统</span></span>
<span class="line"><span class="token function">mount</span> /dev/sdb1 /mnt/disk</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-文件系统维护" tabindex="-1"><a class="header-anchor" href="#_3-2-文件系统维护"><span>3.2 文件系统维护</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 检查文件系统</span></span>
<span class="line"><span class="token function">fsck</span> /dev/sda1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 修复文件系统</span></span>
<span class="line"><span class="token function">fsck</span> <span class="token parameter variable">-y</span> /dev/sda1</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建文件系统</span></span>
<span class="line">mkfs.ext4 /dev/sdb1</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-高级特性" tabindex="-1"><a class="header-anchor" href="#_4-高级特性"><span>4. 高级特性</span></a></h2><h3 id="_4-1-软硬链接" tabindex="-1"><a class="header-anchor" href="#_4-1-软硬链接"><span>4.1 软硬链接</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 创建硬链接</span></span>
<span class="line"><span class="token function">ln</span> file.txt hard_link</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建软链接</span></span>
<span class="line"><span class="token function">ln</span> <span class="token parameter variable">-s</span> file.txt soft_link</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看链接数</span></span>
<span class="line"><span class="token function">ls</span> <span class="token parameter variable">-l</span> file.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-文件查找" tabindex="-1"><a class="header-anchor" href="#_4-2-文件查找"><span>4.2 文件查找</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 按名称查找</span></span>
<span class="line"><span class="token function">find</span> /path <span class="token parameter variable">-name</span> <span class="token string">&quot;*.txt&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 按类型查找</span></span>
<span class="line"><span class="token function">find</span> /path <span class="token parameter variable">-type</span> f  <span class="token comment"># 文件</span></span>
<span class="line"><span class="token function">find</span> /path <span class="token parameter variable">-type</span> d  <span class="token comment"># 目录</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 按大小查找</span></span>
<span class="line"><span class="token function">find</span> /path <span class="token parameter variable">-size</span> +100M  <span class="token comment"># 大于100MB的文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-实用技巧" tabindex="-1"><a class="header-anchor" href="#_5-实用技巧"><span>5. 实用技巧</span></a></h2><h3 id="_5-1-文件压缩" tabindex="-1"><a class="header-anchor" href="#_5-1-文件压缩"><span>5.1 文件压缩</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># tar 打包</span></span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-cvf</span> archive.tar files/</span>
<span class="line"><span class="token function">tar</span> <span class="token parameter variable">-xvf</span> archive.tar</span>
<span class="line"></span>
<span class="line"><span class="token comment"># gzip 压缩</span></span>
<span class="line"><span class="token function">gzip</span> file.txt</span>
<span class="line">gunzip file.txt.gz</span>
<span class="line"></span>
<span class="line"><span class="token comment"># zip 压缩</span></span>
<span class="line"><span class="token function">zip</span> archive.zip files/</span>
<span class="line"><span class="token function">unzip</span> archive.zip</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-文件同步与备份" tabindex="-1"><a class="header-anchor" href="#_5-2-文件同步与备份"><span>5.2 文件同步与备份</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 使用 rsync</span></span>
<span class="line"><span class="token function">rsync</span> <span class="token parameter variable">-av</span> source/ dest/</span>
<span class="line"><span class="token function">rsync</span> <span class="token parameter variable">-av</span> <span class="token parameter variable">--delete</span> source/ dest/  <span class="token comment"># 同步删除</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,26))])}const C=p(o,[["render",E],["__file","文件系统.html.vue"]]),L=JSON.parse('{"path":"/flinux/basic/%E6%96%87%E4%BB%B6%E7%B3%BB%E7%BB%9F.html","title":"Linux 文件系统","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1. 文件系统基础","slug":"_1-文件系统基础","link":"#_1-文件系统基础","children":[{"level":3,"title":"1.1 目录结构","slug":"_1-1-目录结构","link":"#_1-1-目录结构","children":[]},{"level":3,"title":"1.2 文件类型","slug":"_1-2-文件类型","link":"#_1-2-文件类型","children":[]}]},{"level":2,"title":"2. 文件操作","slug":"_2-文件操作","link":"#_2-文件操作","children":[{"level":3,"title":"2.1 基本操作","slug":"_2-1-基本操作","link":"#_2-1-基本操作","children":[]},{"level":3,"title":"2.2 权限管理","slug":"_2-2-权限管理","link":"#_2-2-权限管理","children":[]}]},{"level":2,"title":"3. 文件系统管理","slug":"_3-文件系统管理","link":"#_3-文件系统管理","children":[{"level":3,"title":"3.1 磁盘管理","slug":"_3-1-磁盘管理","link":"#_3-1-磁盘管理","children":[]},{"level":3,"title":"3.2 文件系统维护","slug":"_3-2-文件系统维护","link":"#_3-2-文件系统维护","children":[]}]},{"level":2,"title":"4. 高级特性","slug":"_4-高级特性","link":"#_4-高级特性","children":[{"level":3,"title":"4.1 软硬链接","slug":"_4-1-软硬链接","link":"#_4-1-软硬链接","children":[]},{"level":3,"title":"4.2 文件查找","slug":"_4-2-文件查找","link":"#_4-2-文件查找","children":[]}]},{"level":2,"title":"5. 实用技巧","slug":"_5-实用技巧","link":"#_5-实用技巧","children":[{"level":3,"title":"5.1 文件压缩","slug":"_5-1-文件压缩","link":"#_5-1-文件压缩","children":[]},{"level":3,"title":"5.2 文件同步与备份","slug":"_5-2-文件同步与备份","link":"#_5-2-文件同步与备份","children":[]}]}],"git":{},"filePathRelative":"flinux/basic/文件系统.md"}');export{C as comp,L as data};
