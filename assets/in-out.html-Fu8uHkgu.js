import{_ as l,c as i,a as n,d as t,e,f as o,r as c,o as u,b as p}from"./app-BCC5ysrj.js";const r={},d={class:"vuepress-toc"},k={class:"vuepress-toc-item"},m={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"},w={class:"vuepress-toc-item"},x={class:"vuepress-toc-item"},j={class:"vuepress-toc-item"},N={class:"vuepress-toc-item"};function O(q,s){const a=c("router-link");return u(),i("div",null,[s[13]||(s[13]=n("h1",{id:"python-输入与输出-i-o",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#python-输入与输出-i-o"},[n("span",null,"Python: 输入与输出 (I/O)")])],-1)),n("nav",d,[n("ul",null,[n("li",k,[t(a,{to:"#_1-字符串格式化"},{default:e(()=>s[0]||(s[0]=[p("1. 字符串格式化")])),_:1}),n("ul",null,[n("li",m,[t(a,{to:"#_1-1-字符串插入"},{default:e(()=>s[1]||(s[1]=[p("1.1 字符串插入")])),_:1})]),n("li",v,[t(a,{to:"#_1-2-转换说明符"},{default:e(()=>s[2]||(s[2]=[p("1.2 转换说明符")])),_:1})]),n("li",h,[t(a,{to:"#_1-3-格式字符串"},{default:e(()=>s[3]||(s[3]=[p("1.3 格式字符串")])),_:1})])])]),n("li",b,[t(a,{to:"#_2-文件操作"},{default:e(()=>s[4]||(s[4]=[p("2. 文件操作")])),_:1}),n("ul",null,[n("li",_,[t(a,{to:"#_2-1-文本文件处理"},{default:e(()=>s[5]||(s[5]=[p("2.1 文本文件处理")])),_:1})]),n("li",g,[t(a,{to:"#_2-2-二进制文件处理"},{default:e(()=>s[6]||(s[6]=[p("2.2 二进制文件处理")])),_:1})])])]),n("li",f,[t(a,{to:"#_3-序列化"},{default:e(()=>s[7]||(s[7]=[p("3. 序列化")])),_:1}),n("ul",null,[n("li",y,[t(a,{to:"#_3-1-pickle-模块"},{default:e(()=>s[8]||(s[8]=[p("3.1 pickle 模块")])),_:1})])])]),n("li",w,[t(a,{to:"#_4-网络操作"},{default:e(()=>s[9]||(s[9]=[p("4. 网络操作")])),_:1}),n("ul",null,[n("li",x,[t(a,{to:"#_4-1-读取网页"},{default:e(()=>s[10]||(s[10]=[p("4.1 读取网页")])),_:1})]),n("li",j,[t(a,{to:"#_4-2-浏览器操作"},{default:e(()=>s[11]||(s[11]=[p("4.2 浏览器操作")])),_:1})])])]),n("li",N,[t(a,{to:"#总结"},{default:e(()=>s[12]||(s[12]=[p("总结")])),_:1})])])]),s[14]||(s[14]=o(`<hr><p>Python 程序需要与外界进行通信，包括用户交互、文件读写、网络访问等，这些操作统称为输入和输出（I/O）。本文主要介绍 Python 中的 I/O 操作，包括字符串格式化、文件操作等。</p><hr><h2 id="_1-字符串格式化" tabindex="-1"><a class="header-anchor" href="#_1-字符串格式化"><span>1. 字符串格式化</span></a></h2><h3 id="_1-1-字符串插入" tabindex="-1"><a class="header-anchor" href="#_1-1-字符串插入"><span>1.1 字符串插入</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 控制小数位数示例</span></span>
<span class="line">x <span class="token operator">=</span> <span class="token number">1</span><span class="token operator">/</span><span class="token number">81</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>                <span class="token comment"># 0.012345679012345678</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;value: %.2f&#39;</span> <span class="token operator">%</span> x<span class="token punctuation">)</span>  <span class="token comment"># value: 0.01</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;value: %.5f&#39;</span> <span class="token operator">%</span> x<span class="token punctuation">)</span>  <span class="token comment"># value: 0.01235</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-转换说明符" tabindex="-1"><a class="header-anchor" href="#_1-2-转换说明符"><span>1.2 转换说明符</span></a></h3><table><thead><tr><th>说明符</th><th>含义</th></tr></thead><tbody><tr><td>d</td><td>整数</td></tr><tr><td>o</td><td>八进制值</td></tr><tr><td>x</td><td>小写十六进制数</td></tr><tr><td>X</td><td>大写十六进制数</td></tr><tr><td>e</td><td>小写科学记数法</td></tr><tr><td>E</td><td>大写科学记数法</td></tr><tr><td>f</td><td>浮点数</td></tr><tr><td>s</td><td>字符串</td></tr><tr><td>%</td><td>%字符</td></tr></tbody></table><h3 id="_1-3-格式字符串" tabindex="-1"><a class="header-anchor" href="#_1-3-格式字符串"><span>1.3 格式字符串</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># format() 方法示例</span></span>
<span class="line">ss <span class="token operator">=</span> <span class="token string">&#39;My {pet} has {prob}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>pet<span class="token operator">=</span><span class="token string">&#39;dog&#39;</span><span class="token punctuation">,</span> prob<span class="token operator">=</span><span class="token string">&#39;fleas&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>ss<span class="token punctuation">)</span>  <span class="token comment"># My dog has fleas</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 按位置替换</span></span>
<span class="line">sss <span class="token operator">=</span> <span class="token string">&#39;My {0} has {1}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&#39;dog&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;fleas&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>sss<span class="token punctuation">)</span>  <span class="token comment"># My dog has fleas</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 格式化浮点数</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;1/18 = {x:.3f}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>x<span class="token operator">=</span><span class="token number">1</span><span class="token operator">/</span><span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 1/18 = 0.056</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-文件操作" tabindex="-1"><a class="header-anchor" href="#_2-文件操作"><span>2. 文件操作</span></a></h2><h3 id="_2-1-文本文件处理" tabindex="-1"><a class="header-anchor" href="#_2-1-文本文件处理"><span>2.1 文本文件处理</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 写入文件</span></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;story.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;w&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;Many had a little lamb,\\n and then she had some more.\\n&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 读取文件</span></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;story.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">    content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 追加内容</span></span>
<span class="line"><span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;story.txt&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">    f<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token string">&#39;New line\\n&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-二进制文件处理" tabindex="-1"><a class="header-anchor" href="#_2-2-二进制文件处理"><span>2.2 二进制文件处理</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 检查是否为 GIF 文件</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">is_gif</span><span class="token punctuation">(</span>fname<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>fname<span class="token punctuation">,</span> <span class="token string">&#39;br&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">        first4 <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">return</span> first4 <span class="token operator">==</span> <span class="token punctuation">(</span><span class="token number">0x47</span><span class="token punctuation">,</span> <span class="token number">0x49</span><span class="token punctuation">,</span> <span class="token number">0x46</span><span class="token punctuation">,</span> <span class="token number">0x38</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-序列化" tabindex="-1"><a class="header-anchor" href="#_3-序列化"><span>3. 序列化</span></a></h2><h3 id="_3-1-pickle-模块" tabindex="-1"><a class="header-anchor" href="#_3-1-pickle-模块"><span>3.1 pickle 模块</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> pickle</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">save_data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    grades <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string">&#39;alan&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">&#39;tom&#39;</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">,</span> <span class="token number">8</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;grades.data&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;wb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">        pickle<span class="token punctuation">.</span>dump<span class="token punctuation">(</span>grades<span class="token punctuation">,</span> f<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">load_data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;grades.data&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">return</span> pickle<span class="token punctuation">.</span>load<span class="token punctuation">(</span>f<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-网络操作" tabindex="-1"><a class="header-anchor" href="#_4-网络操作"><span>4. 网络操作</span></a></h2><h3 id="_4-1-读取网页" tabindex="-1"><a class="header-anchor" href="#_4-1-读取网页"><span>4.1 读取网页</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">get_webpage</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    page <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> page<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-浏览器操作" tabindex="-1"><a class="header-anchor" href="#_4-2-浏览器操作"><span>4.2 浏览器操作</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">import</span> webbrowser</span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">open_webpage</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> webbrowser<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>Python 提供了丰富的 I/O 操作功能：</p><ul><li>灵活的字符串格式化方法</li><li>完整的文件操作接口</li><li>强大的序列化工具</li><li>便捷的网络访问能力</li></ul><blockquote><p>注意：在处理文件时要注意正确关闭文件，推荐使用 with 语句进行文件操作。</p></blockquote>`,27))])}const P=l(r,[["render",O],["__file","in-out.html.vue"]]),M=JSON.parse('{"path":"/fpython/quickstart/in-out.html","title":"Python: 输入与输出 (I/O)","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1. 字符串格式化","slug":"_1-字符串格式化","link":"#_1-字符串格式化","children":[{"level":3,"title":"1.1 字符串插入","slug":"_1-1-字符串插入","link":"#_1-1-字符串插入","children":[]},{"level":3,"title":"1.2 转换说明符","slug":"_1-2-转换说明符","link":"#_1-2-转换说明符","children":[]},{"level":3,"title":"1.3 格式字符串","slug":"_1-3-格式字符串","link":"#_1-3-格式字符串","children":[]}]},{"level":2,"title":"2. 文件操作","slug":"_2-文件操作","link":"#_2-文件操作","children":[{"level":3,"title":"2.1 文本文件处理","slug":"_2-1-文本文件处理","link":"#_2-1-文本文件处理","children":[]},{"level":3,"title":"2.2 二进制文件处理","slug":"_2-2-二进制文件处理","link":"#_2-2-二进制文件处理","children":[]}]},{"level":2,"title":"3. 序列化","slug":"_3-序列化","link":"#_3-序列化","children":[{"level":3,"title":"3.1 pickle 模块","slug":"_3-1-pickle-模块","link":"#_3-1-pickle-模块","children":[]}]},{"level":2,"title":"4. 网络操作","slug":"_4-网络操作","link":"#_4-网络操作","children":[{"level":3,"title":"4.1 读取网页","slug":"_4-1-读取网页","link":"#_4-1-读取网页","children":[]},{"level":3,"title":"4.2 浏览器操作","slug":"_4-2-浏览器操作","link":"#_4-2-浏览器操作","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]}],"git":{"updatedTime":1735029308000,"contributors":[{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":5}]},"filePathRelative":"fpython/quickstart/in-out.md"}');export{P as comp,M as data};
