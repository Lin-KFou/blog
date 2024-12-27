import{_ as t,c as p,a as n,d as e,e as l,f as c,r as d,o,b as i}from"./app-BCC5ysrj.js";const r={},u={class:"vuepress-toc"},v={class:"vuepress-toc-item"},m={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},x={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"},w={class:"vuepress-toc-item"},$={class:"vuepress-toc-item"},S={class:"vuepress-toc-item"},q={class:"vuepress-toc-item"},j={class:"vuepress-toc-item"},E={class:"vuepress-toc-item"},N={class:"vuepress-toc-item"},B={class:"vuepress-toc-item"},A={class:"vuepress-toc-item"},L={class:"vuepress-toc-item"},C={class:"vuepress-toc-item"};function P(V,s){const a=d("router-link");return o(),p("div",null,[s[21]||(s[21]=n("h1",{id:"shell-编程基础",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#shell-编程基础"},[n("span",null,"Shell 编程基础")])],-1)),n("nav",u,[n("ul",null,[n("li",v,[e(a,{to:"#_1-shell-基础"},{default:l(()=>s[0]||(s[0]=[i("1. Shell 基础")])),_:1}),n("ul",null,[n("li",m,[e(a,{to:"#_1-1-shell-类型"},{default:l(()=>s[1]||(s[1]=[i("1.1 Shell 类型")])),_:1})]),n("li",b,[e(a,{to:"#_1-2-脚本结构"},{default:l(()=>s[2]||(s[2]=[i("1.2 脚本结构")])),_:1})])])]),n("li",h,[e(a,{to:"#_2-变量和参数"},{default:l(()=>s[3]||(s[3]=[i("2. 变量和参数")])),_:1}),n("ul",null,[n("li",k,[e(a,{to:"#_2-1-变量操作"},{default:l(()=>s[4]||(s[4]=[i("2.1 变量操作")])),_:1})]),n("li",_,[e(a,{to:"#_2-2-特殊变量"},{default:l(()=>s[5]||(s[5]=[i("2.2 特殊变量")])),_:1})])])]),n("li",g,[e(a,{to:"#_3-流程控制"},{default:l(()=>s[6]||(s[6]=[i("3. 流程控制")])),_:1}),n("ul",null,[n("li",f,[e(a,{to:"#_3-1-条件判断"},{default:l(()=>s[7]||(s[7]=[i("3.1 条件判断")])),_:1})]),n("li",x,[e(a,{to:"#_3-2-循环"},{default:l(()=>s[8]||(s[8]=[i("3.2 循环")])),_:1})])])]),n("li",y,[e(a,{to:"#_4-函数"},{default:l(()=>s[9]||(s[9]=[i("4. 函数")])),_:1}),n("ul",null,[n("li",w,[e(a,{to:"#_4-1-函数定义"},{default:l(()=>s[10]||(s[10]=[i("4.1 函数定义")])),_:1})]),n("li",$,[e(a,{to:"#_4-2-函数调用"},{default:l(()=>s[11]||(s[11]=[i("4.2 函数调用")])),_:1})])])]),n("li",S,[e(a,{to:"#_5-文件操作"},{default:l(()=>s[12]||(s[12]=[i("5. 文件操作")])),_:1}),n("ul",null,[n("li",q,[e(a,{to:"#_5-1-文件读写"},{default:l(()=>s[13]||(s[13]=[i("5.1 文件读写")])),_:1})]),n("li",j,[e(a,{to:"#_5-2-文件状态测试"},{default:l(()=>s[14]||(s[14]=[i("5.2 文件状态测试")])),_:1})])])]),n("li",E,[e(a,{to:"#_6-字符串处理"},{default:l(()=>s[15]||(s[15]=[i("6. 字符串处理")])),_:1}),n("ul",null,[n("li",N,[e(a,{to:"#_6-1-字符串操作"},{default:l(()=>s[16]||(s[16]=[i("6.1 字符串操作")])),_:1})]),n("li",B,[e(a,{to:"#_6-2-正则表达式"},{default:l(()=>s[17]||(s[17]=[i("6.2 正则表达式")])),_:1})])])]),n("li",A,[e(a,{to:"#_7-调试技巧"},{default:l(()=>s[18]||(s[18]=[i("7. 调试技巧")])),_:1}),n("ul",null,[n("li",L,[e(a,{to:"#_7-1-调试选项"},{default:l(()=>s[19]||(s[19]=[i("7.1 调试选项")])),_:1})]),n("li",C,[e(a,{to:"#_7-2-错误处理"},{default:l(()=>s[20]||(s[20]=[i("7.2 错误处理")])),_:1})])])])])]),s[22]||(s[22]=c(`<hr><h2 id="_1-shell-基础" tabindex="-1"><a class="header-anchor" href="#_1-shell-基础"><span>1. Shell 基础</span></a></h2><h3 id="_1-1-shell-类型" tabindex="-1"><a class="header-anchor" href="#_1-1-shell-类型"><span>1.1 Shell 类型</span></a></h3><p>Shell 是用户与 Linux 系统交互的接口。Linux 支持多种 Shell:</p><ul><li>bash (默认)</li><li>sh</li><li>csh</li><li>zsh</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看当前 Shell</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token environment constant">$SHELL</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看可用 Shell</span></span>
<span class="line"><span class="token function">cat</span> /etc/shells</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 切换 Shell</span></span>
<span class="line">chsh <span class="token parameter variable">-s</span> /bin/bash</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-脚本结构" tabindex="-1"><a class="header-anchor" href="#_1-2-脚本结构"><span>1.2 脚本结构</span></a></h3><p>Shell 脚本通常包含以下部分:</p><ul><li>Shebang 行 (#!/bin/bash)</li><li>注释说明</li><li>变量定义</li><li>主要命令</li><li>函数定义</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token shebang important">#!/bin/bash</span></span>
<span class="line"><span class="token comment"># 脚本说明：这是一个示例脚本</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 变量定义</span></span>
<span class="line"><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;value&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 命令执行</span></span>
<span class="line"><span class="token builtin class-name">command</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 函数定义</span></span>
<span class="line"><span class="token function-name function">function_name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    commands</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-变量和参数" tabindex="-1"><a class="header-anchor" href="#_2-变量和参数"><span>2. 变量和参数</span></a></h2><h3 id="_2-1-变量操作" tabindex="-1"><a class="header-anchor" href="#_2-1-变量操作"><span>2.1 变量操作</span></a></h3><p>Shell 变量分为:</p><ul><li>用户定义变量</li><li>环境变量</li><li>特殊变量</li></ul><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 定义变量</span></span>
<span class="line"><span class="token assign-left variable">name</span><span class="token operator">=</span><span class="token string">&quot;John&quot;</span></span>
<span class="line"><span class="token assign-left variable">age</span><span class="token operator">=</span><span class="token number">25</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用变量</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">$name</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token variable">\${name}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 只读变量</span></span>
<span class="line"><span class="token builtin class-name">readonly</span> name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除变量</span></span>
<span class="line"><span class="token builtin class-name">unset</span> age</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 环境变量</span></span>
<span class="line"><span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token string">&quot;<span class="token environment constant">$PATH</span>:/new/path&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-特殊变量" tabindex="-1"><a class="header-anchor" href="#_2-2-特殊变量"><span>2.2 特殊变量</span></a></h3><p>Shell 提供了一些特殊变量用于获取脚本信息:</p><table><thead><tr><th>变量</th><th>说明</th></tr></thead><tbody><tr><td>$0</td><td>脚本名称</td></tr><tr><td>$1</td><td>第一个参数</td></tr><tr><td>$#</td><td>参数个数</td></tr><tr><td>$*</td><td>所有参数</td></tr><tr><td>$@</td><td>所有参数（数组形式）</td></tr><tr><td>$?</td><td>上一个命令的返回值</td></tr><tr><td>$$</td><td>当前进程 ID</td></tr><tr><td>$!</td><td>最后一个后台进程的 PID</td></tr></tbody></table><h2 id="_3-流程控制" tabindex="-1"><a class="header-anchor" href="#_3-流程控制"><span>3. 流程控制</span></a></h2><h3 id="_3-1-条件判断" tabindex="-1"><a class="header-anchor" href="#_3-1-条件判断"><span>3.1 条件判断</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># if 语句</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    commands</span>
<span class="line"><span class="token keyword">elif</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span></span>
<span class="line">    commands</span>
<span class="line"><span class="token keyword">else</span></span>
<span class="line">    commands</span>
<span class="line"><span class="token keyword">fi</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># case 语句</span></span>
<span class="line"><span class="token keyword">case</span> <span class="token variable">$var</span> <span class="token keyword">in</span></span>
<span class="line">    pattern1<span class="token punctuation">)</span></span>
<span class="line">        commands</span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">    pattern2<span class="token punctuation">)</span></span>
<span class="line">        commands</span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line">    *<span class="token punctuation">)</span></span>
<span class="line">        commands</span>
<span class="line">        <span class="token punctuation">;</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">esac</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-循环" tabindex="-1"><a class="header-anchor" href="#_3-2-循环"><span>3.2 循环</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># for 循环</span></span>
<span class="line"><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> item1 item2 item3<span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">    commands</span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># while 循环</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">    commands</span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># until 循环</span></span>
<span class="line"><span class="token keyword">until</span> <span class="token punctuation">[</span> condition <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">    commands</span>
<span class="line"><span class="token keyword">done</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-函数" tabindex="-1"><a class="header-anchor" href="#_4-函数"><span>4. 函数</span></a></h2><h3 id="_4-1-函数定义" tabindex="-1"><a class="header-anchor" href="#_4-1-函数定义"><span>4.1 函数定义</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 基本函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function-name function">name</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    commands</span>
<span class="line">    <span class="token builtin class-name">return</span> value</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 带参数的函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function-name function">print_params</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;First: <span class="token variable">$1</span>&quot;</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Second: <span class="token variable">$2</span>&quot;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-函数调用" tabindex="-1"><a class="header-anchor" href="#_4-2-函数调用"><span>4.2 函数调用</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 调用函数</span></span>
<span class="line">name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 带参数调用</span></span>
<span class="line">print_params <span class="token string">&quot;hello&quot;</span> <span class="token string">&quot;world&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 获取返回值</span></span>
<span class="line"><span class="token assign-left variable">result</span><span class="token operator">=</span><span class="token variable">$?</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-文件操作" tabindex="-1"><a class="header-anchor" href="#_5-文件操作"><span>5. 文件操作</span></a></h2><h3 id="_5-1-文件读写" tabindex="-1"><a class="header-anchor" href="#_5-1-文件读写"><span>5.1 文件读写</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 读取文件</span></span>
<span class="line"><span class="token keyword">while</span> <span class="token builtin class-name">read</span> line<span class="token punctuation">;</span> <span class="token keyword">do</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token variable">$line</span></span>
<span class="line"><span class="token keyword">done</span> <span class="token operator">&lt;</span> file.txt</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 写入文件</span></span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;content&quot;</span> <span class="token operator">&gt;</span> file.txt</span>
<span class="line"><span class="token builtin class-name">echo</span> <span class="token string">&quot;append&quot;</span> <span class="token operator">&gt;&gt;</span> file.txt</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-文件状态测试" tabindex="-1"><a class="header-anchor" href="#_5-2-文件状态测试"><span>5.2 文件状态测试</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 文件存在</span></span>
<span class="line"><span class="token punctuation">[</span> <span class="token parameter variable">-e</span> <span class="token function">file</span> <span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否是目录</span></span>
<span class="line"><span class="token punctuation">[</span> <span class="token parameter variable">-d</span> <span class="token function">dir</span> <span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否是文件</span></span>
<span class="line"><span class="token punctuation">[</span> <span class="token parameter variable">-f</span> <span class="token function">file</span> <span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否可读</span></span>
<span class="line"><span class="token punctuation">[</span> <span class="token parameter variable">-r</span> <span class="token function">file</span> <span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-字符串处理" tabindex="-1"><a class="header-anchor" href="#_6-字符串处理"><span>6. 字符串处理</span></a></h2><h3 id="_6-1-字符串操作" tabindex="-1"><a class="header-anchor" href="#_6-1-字符串操作"><span>6.1 字符串操作</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 字符串长度</span></span>
<span class="line"><span class="token variable">\${<span class="token operator">#</span>string}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字符串截取</span></span>
<span class="line"><span class="token variable">\${string<span class="token operator">:</span>position<span class="token operator">:</span>length}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 字符串替换</span></span>
<span class="line"><span class="token variable">\${string<span class="token operator">/</span>pattern<span class="token operator">/</span>replacement}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-正则表达式" tabindex="-1"><a class="header-anchor" href="#_6-2-正则表达式"><span>6.2 正则表达式</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 使用 grep</span></span>
<span class="line"><span class="token function">grep</span> <span class="token string">&quot;pattern&quot;</span> <span class="token function">file</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 sed</span></span>
<span class="line"><span class="token function">sed</span> <span class="token string">&#39;s/old/new/g&#39;</span> <span class="token function">file</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 使用 awk</span></span>
<span class="line"><span class="token function">awk</span> <span class="token string">&#39;/pattern/ {print $1}&#39;</span> <span class="token function">file</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-调试技巧" tabindex="-1"><a class="header-anchor" href="#_7-调试技巧"><span>7. 调试技巧</span></a></h2><h3 id="_7-1-调试选项" tabindex="-1"><a class="header-anchor" href="#_7-1-调试选项"><span>7.1 调试选项</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 打开调试</span></span>
<span class="line"><span class="token builtin class-name">set</span> <span class="token parameter variable">-x</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 关闭调试</span></span>
<span class="line"><span class="token builtin class-name">set</span> +x</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查语法</span></span>
<span class="line"><span class="token function">bash</span> <span class="token parameter variable">-n</span> script.sh</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_7-2-错误处理" tabindex="-1"><a class="header-anchor" href="#_7-2-错误处理"><span>7.2 错误处理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 错误退出</span></span>
<span class="line"><span class="token builtin class-name">set</span> <span class="token parameter variable">-e</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 捕获错误</span></span>
<span class="line"><span class="token builtin class-name">trap</span> <span class="token string">&#39;echo Error at line $LINENO&#39;</span> ERR</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 自定义错误处理</span></span>
<span class="line"><span class="token function-name function">error_handler</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin class-name">echo</span> <span class="token string">&quot;Error: <span class="token variable">$1</span>&quot;</span></span>
<span class="line">    <span class="token builtin class-name">exit</span> <span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,43))])}const I=t(r,[["render",P],["__file","shell 基础教程.html.vue"]]),R=JSON.parse('{"path":"/flinux/Shell%E7%BC%96%E7%A8%8B/shell%20%E5%9F%BA%E7%A1%80%E6%95%99%E7%A8%8B.html","title":"Shell 编程基础","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1. Shell 基础","slug":"_1-shell-基础","link":"#_1-shell-基础","children":[{"level":3,"title":"1.1 Shell 类型","slug":"_1-1-shell-类型","link":"#_1-1-shell-类型","children":[]},{"level":3,"title":"1.2 脚本结构","slug":"_1-2-脚本结构","link":"#_1-2-脚本结构","children":[]}]},{"level":2,"title":"2. 变量和参数","slug":"_2-变量和参数","link":"#_2-变量和参数","children":[{"level":3,"title":"2.1 变量操作","slug":"_2-1-变量操作","link":"#_2-1-变量操作","children":[]},{"level":3,"title":"2.2 特殊变量","slug":"_2-2-特殊变量","link":"#_2-2-特殊变量","children":[]}]},{"level":2,"title":"3. 流程控制","slug":"_3-流程控制","link":"#_3-流程控制","children":[{"level":3,"title":"3.1 条件判断","slug":"_3-1-条件判断","link":"#_3-1-条件判断","children":[]},{"level":3,"title":"3.2 循环","slug":"_3-2-循环","link":"#_3-2-循环","children":[]}]},{"level":2,"title":"4. 函数","slug":"_4-函数","link":"#_4-函数","children":[{"level":3,"title":"4.1 函数定义","slug":"_4-1-函数定义","link":"#_4-1-函数定义","children":[]},{"level":3,"title":"4.2 函数调用","slug":"_4-2-函数调用","link":"#_4-2-函数调用","children":[]}]},{"level":2,"title":"5. 文件操作","slug":"_5-文件操作","link":"#_5-文件操作","children":[{"level":3,"title":"5.1 文件读写","slug":"_5-1-文件读写","link":"#_5-1-文件读写","children":[]},{"level":3,"title":"5.2 文件状态测试","slug":"_5-2-文件状态测试","link":"#_5-2-文件状态测试","children":[]}]},{"level":2,"title":"6. 字符串处理","slug":"_6-字符串处理","link":"#_6-字符串处理","children":[{"level":3,"title":"6.1 字符串操作","slug":"_6-1-字符串操作","link":"#_6-1-字符串操作","children":[]},{"level":3,"title":"6.2 正则表达式","slug":"_6-2-正则表达式","link":"#_6-2-正则表达式","children":[]}]},{"level":2,"title":"7. 调试技巧","slug":"_7-调试技巧","link":"#_7-调试技巧","children":[{"level":3,"title":"7.1 调试选项","slug":"_7-1-调试选项","link":"#_7-1-调试选项","children":[]},{"level":3,"title":"7.2 错误处理","slug":"_7-2-错误处理","link":"#_7-2-错误处理","children":[]}]}],"git":{},"filePathRelative":"flinux/Shell编程/shell 基础教程.md"}');export{I as comp,R as data};
