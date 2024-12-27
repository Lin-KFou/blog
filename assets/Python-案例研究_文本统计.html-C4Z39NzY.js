import{_ as i,c as p,a as n,d as e,e as l,f as o,r as c,o as u,b as t}from"./app-BCC5ysrj.js";const r={},d={class:"vuepress-toc"},k={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},m={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"};function x(w,s){const a=c("router-link");return u(),p("div",null,[s[9]||(s[9]=n("h1",{id:"案例研究-文本统计",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#案例研究-文本统计"},[n("span",null,"案例研究：文本统计")])],-1)),n("nav",d,[n("ul",null,[n("li",k,[e(a,{to:"#概述"},{default:l(()=>s[0]||(s[0]=[t("概述")])),_:1})]),n("li",v,[e(a,{to:"#问题描述"},{default:l(()=>s[1]||(s[1]=[t("问题描述")])),_:1}),n("ul",null,[n("li",m,[e(a,{to:"#目标"},{default:l(()=>s[2]||(s[2]=[t("目标")])),_:1})]),n("li",h,[e(a,{to:"#示例分析"},{default:l(()=>s[3]||(s[3]=[t("示例分析")])),_:1})])])]),n("li",b,[e(a,{to:"#文本预处理"},{default:l(()=>s[4]||(s[4]=[t("文本预处理")])),_:1}),n("ul",null,[n("li",g,[e(a,{to:"#基本处理"},{default:l(()=>s[5]||(s[5]=[t("基本处理")])),_:1})]),n("li",f,[e(a,{to:"#文本标准化"},{default:l(()=>s[6]||(s[6]=[t("文本标准化")])),_:1})]),n("li",_,[e(a,{to:"#实现代码"},{default:l(()=>s[7]||(s[7]=[t("实现代码")])),_:1})])])]),n("li",y,[e(a,{to:"#大文件处理"},{default:l(()=>s[8]||(s[8]=[t("大文件处理")])),_:1})])])]),s[10]||(s[10]=o(`<hr><h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2><p>本案例将介绍如何开发一个文本统计程序，通过这个实例学习：</p><ul><li>如何分析和描述问题</li><li>如何处理文本数据</li><li>如何进行性能优化</li><li>如何组织完整程序</li></ul><h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述"><span>问题描述</span></a></h2><h3 id="目标" tabindex="-1"><a class="header-anchor" href="#目标"><span>目标</span></a></h3><p>开发一个文本统计程序，实现以下功能：</p><ol><li><p>计算文本文件的基本统计信息：</p><ul><li>字符数</li><li>行数</li><li>单词数</li></ul></li><li><p>分析词频：</p><ul><li>统计单词出现次数</li><li>找出出现频率最高的前10个单词</li><li>按出现次数排序显示结果</li></ul></li></ol><h3 id="示例分析" tabindex="-1"><a class="header-anchor" href="#示例分析"><span>示例分析</span></a></h3><p>以下面的文本为例：</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">A long time ago, in a galaxy far, far away...</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>基本统计：</p><ul><li>1行文本（以\\n为行尾标识）</li><li>46个字符（包括空格和标点）</li><li>10个单词</li></ul><h2 id="文本预处理" tabindex="-1"><a class="header-anchor" href="#文本预处理"><span>文本预处理</span></a></h2><h3 id="基本处理" tabindex="-1"><a class="header-anchor" href="#基本处理"><span>基本处理</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">text <span class="token operator">=</span> <span class="token string">&#39;A long time ago, in a galaxy far, far away...&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 计算字符数</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;字符数: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">len</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>  <span class="token comment"># 46</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 分割单词</span></span>
<span class="line">words <span class="token operator">=</span> text<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;单词数: </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">len</span><span class="token punctuation">(</span>words<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>  <span class="token comment"># 10</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;单词列表: </span><span class="token interpolation"><span class="token punctuation">{</span>words<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本标准化" tabindex="-1"><a class="header-anchor" href="#文本标准化"><span>文本标准化</span></a></h3><p>为了准确统计单词，需要进行以下处理：</p><ol><li>转换为小写</li><li>处理标点符号</li><li>处理特殊情况</li></ol><h4 id="需要注意的问题" tabindex="-1"><a class="header-anchor" href="#需要注意的问题"><span>需要注意的问题</span></a></h4><ol><li><p><strong>标点符号处理</strong></p><ul><li>保留撇号和连字符（如：I&#39;d, well-known）</li><li>其他标点符号需要删除</li></ul></li><li><p><strong>大小写处理</strong></p><ul><li>统一转换为小写</li><li>可能影响专有名词识别（如：Polish -&gt; polish）</li></ul></li></ol><h3 id="实现代码" tabindex="-1"><a class="header-anchor" href="#实现代码"><span>实现代码</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 定义要保留的字符集</span></span>
<span class="line">VALID_CHARS <span class="token operator">=</span> <span class="token builtin">set</span><span class="token punctuation">(</span><span class="token string">&#39;abcdefghijklmnopqrstuvwxyz -\\&#39;&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">normalize_text</span><span class="token punctuation">(</span>text<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">str</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">    标准化文本：转小写并只保留有效字符</span>
<span class="line"></span>
<span class="line">    Args:</span>
<span class="line">        text: 输入文本</span>
<span class="line"></span>
<span class="line">    Returns:</span>
<span class="line">        str: 标准化后的文本</span>
<span class="line">    &quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>c <span class="token keyword">for</span> c <span class="token keyword">in</span> text<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">if</span> c <span class="token keyword">in</span> VALID_CHARS<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试</span></span>
<span class="line">text <span class="token operator">=</span> <span class="token string">&quot;I&#39;d like a copy!&quot;</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>normalize_text<span class="token punctuation">(</span>text<span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># &quot;i&#39;d like a copy&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="大文件处理" tabindex="-1"><a class="header-anchor" href="#大文件处理"><span>大文件处理</span></a></h2><p>处理大型文本文件时需要注意：</p><ol><li>使用生成器逐行读取文件</li><li>避免一次性将整个文件加载到内存</li><li>分块处理大文件</li></ol><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">process_large_file</span><span class="token punctuation">(</span>filename<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> chunk_size<span class="token punctuation">:</span> <span class="token builtin">int</span> <span class="token operator">=</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token triple-quoted-string string">&quot;&quot;&quot;</span>
<span class="line">    分块处理大文件</span>
<span class="line">    </span>
<span class="line">    Args:</span>
<span class="line">        filename: 文件名</span>
<span class="line">        chunk_size: 每次读取的块大小（默认1MB）</span>
<span class="line">    &quot;&quot;&quot;</span></span>
<span class="line">    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span></span>
<span class="line">        <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span></span>
<span class="line">            chunk <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span>chunk_size<span class="token punctuation">)</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token keyword">not</span> chunk<span class="token punctuation">:</span></span>
<span class="line">                <span class="token keyword">break</span></span>
<span class="line">            <span class="token comment"># 处理文本块</span></span>
<span class="line">            process_chunk<span class="token punctuation">(</span>chunk<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意：</strong></p><ul><li>合理设置块大小</li><li>注意内存使用</li><li>处理文件编码</li></ul></blockquote>`,28))])}const A=i(r,[["render",x],["__file","Python-案例研究_文本统计.html.vue"]]),E=JSON.parse('{"path":"/fpython/example/Python-%E6%A1%88%E4%BE%8B%E7%A0%94%E7%A9%B6_%E6%96%87%E6%9C%AC%E7%BB%9F%E8%AE%A1.html","title":"案例研究：文本统计","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"问题描述","slug":"问题描述","link":"#问题描述","children":[{"level":3,"title":"目标","slug":"目标","link":"#目标","children":[]},{"level":3,"title":"示例分析","slug":"示例分析","link":"#示例分析","children":[]}]},{"level":2,"title":"文本预处理","slug":"文本预处理","link":"#文本预处理","children":[{"level":3,"title":"基本处理","slug":"基本处理","link":"#基本处理","children":[]},{"level":3,"title":"文本标准化","slug":"文本标准化","link":"#文本标准化","children":[]},{"level":3,"title":"实现代码","slug":"实现代码","link":"#实现代码","children":[]}]},{"level":2,"title":"大文件处理","slug":"大文件处理","link":"#大文件处理","children":[]}],"git":{},"filePathRelative":"fpython/example/Python-案例研究_文本统计.md"}');export{A as comp,E as data};
