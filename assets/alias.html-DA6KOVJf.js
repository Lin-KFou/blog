import{_ as t,c as p,a as n,d as e,e as l,f as c,r as o,o as r,b as i}from"./app-BCC5ysrj.js";const d={},m={class:"vuepress-toc"},u={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"};function k(g,s){const a=o("router-link");return r(),p("div",null,[s[4]||(s[4]=n("h1",{id:"命令别名-alias",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#命令别名-alias"},[n("span",null,"命令别名:alias")])],-1)),n("nav",m,[n("ul",null,[n("li",u,[e(a,{to:"#简介"},{default:l(()=>s[0]||(s[0]=[i("简介")])),_:1})]),n("li",v,[e(a,{to:"#配置方法"},{default:l(()=>s[1]||(s[1]=[i("配置方法")])),_:1})]),n("li",b,[e(a,{to:"#常用别名示例"},{default:l(()=>s[2]||(s[2]=[i("常用别名示例")])),_:1})]),n("li",h,[e(a,{to:"#最佳实践"},{default:l(()=>s[3]||(s[3]=[i("最佳实践")])),_:1})])])]),s[5]||(s[5]=c(`<hr><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>alias 命令用于设置命令别名，可以将常用的长命令设置为简短的别名，提高工作效率。</p><h2 id="配置方法" tabindex="-1"><a class="header-anchor" href="#配置方法"><span>配置方法</span></a></h2><p>在<code>~</code>目录下的<code>.bashrc</code>文件里面进行设置</p><h2 id="常用别名示例" tabindex="-1"><a class="header-anchor" href="#常用别名示例"><span>常用别名示例</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 编辑配置文件</span></span>
<span class="line"><span class="token function">vim</span> ~/.bashrc</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 网络相关</span></span>
<span class="line"><span class="token comment"># 获取局域网IP</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">ipi</span><span class="token operator">=</span><span class="token string">&quot;ifconfig | grep inet | grep 192 | awk &#39;{print <span class="token variable">$2</span>}&#39;&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取公网IP</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">ipe</span><span class="token operator">=</span><span class="token string">&#39;curl ipinfo.io/ip&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 系统工具</span></span>
<span class="line"><span class="token comment"># 抓包</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">zhuabao</span><span class="token operator">=</span><span class="token string">&#39;sudo tcpdump -i any&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 清屏</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">c</span><span class="token operator">=</span><span class="token string">&#39;clear&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># HTTP 测试</span></span>
<span class="line"><span class="token comment"># 简洁模式</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">curlb</span><span class="token operator">=</span><span class="token string">&#39;curl -s -o /dev/null -w &quot;19-10-25T11:24:10+08:00 %{http_code} %{time_namelookup} %{time_connect} %{time_appconnect} %{time_pretransfer} %{time_redirect} %{time_starttransfer} %{size_request} %{size_download} %{speed_download} %{time_total}\\n&quot;&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 详细模式</span></span>
<span class="line"><span class="token builtin class-name">alias</span> <span class="token assign-left variable">curld</span><span class="token operator">=</span><span class="token string">&#39;curl -s -o /dev/null -w &quot;</span>
<span class="line">              请求时间:  19-10-25T11:24:10+08:00</span>
<span class="line">            HTTP状态码:  %{http_code}</span>
<span class="line">           DNS解析时间:  %{time_namelookup} s</span>
<span class="line">          建立连接时间:  %{time_connect} s</span>
<span class="line">          连接完成时间:  %{time_appconnect} s</span>
<span class="line">          准备传输时间:  %{time_pretransfer} s</span>
<span class="line">            重定向时间:  %{time_redirect} s</span>
<span class="line">          传输开始时间:  %{time_starttransfer} s</span>
<span class="line">        请求数据包大小:  %{size_request} Bytes</span>
<span class="line">        下载数据包大小:  %{size_download} Bytes</span>
<span class="line">          平均下载速度:  %{speed_download} Bytes/s</span>
<span class="line">                         --------------</span>
<span class="line">            消耗总时长:  %{time_total} s \\n</span>
<span class="line">&quot;&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ol><li><p><strong>命名建议</strong></p><ul><li>使用简短且有意义的别名</li><li>避免与系统命令冲突</li><li>保持命名风格一致</li></ul></li><li><p><strong>管理建议</strong></p><ul><li>对别名进行分类注释</li><li>定期清理不用的别名</li><li>重要别名做好备份</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li>修改后需要 source ~/.bashrc 生效</li><li>别名优先级高于原命令</li><li>使用 \\command 可以执行原命令</li></ul></blockquote><hr><blockquote><p><strong>参考资料：</strong></p><ul><li><a href="https://www.gnu.org/software/bash/manual/bash.html" target="_blank" rel="noopener noreferrer">Bash 参考手册</a></li><li><a href="https://www.linux.org/" target="_blank" rel="noopener noreferrer">Linux 命令大全</a></li></ul></blockquote>`,12))])}const _=t(d,[["render",k],["__file","alias.html.vue"]]),w=JSON.parse('{"path":"/flinux/Commands/alias.html","title":"命令别名:alias","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[]},{"level":2,"title":"配置方法","slug":"配置方法","link":"#配置方法","children":[]},{"level":2,"title":"常用别名示例","slug":"常用别名示例","link":"#常用别名示例","children":[]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]}],"git":{"updatedTime":1735019797000,"contributors":[{"name":"Linkefou","username":"Linkefou","email":"wlh724567296@163.com","commits":1},{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":3}]},"filePathRelative":"flinux/Commands/alias.md"}');export{_ as comp,w as data};
