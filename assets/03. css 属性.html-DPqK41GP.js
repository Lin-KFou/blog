import{_ as l,c as i,a as n,d as e,e as t,f as c,r as o,o as r,b as p}from"./app-BCC5ysrj.js";const u={},d={class:"vuepress-toc"},m={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"};function f(g,s){const a=o("router-link");return r(),i("div",null,[s[5]||(s[5]=n("h1",{id:"css-属性",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#css-属性"},[n("span",null,"CSS 属性")])],-1)),n("nav",d,[n("ul",null,[n("li",m,[e(a,{to:"#文本相关属性"},{default:t(()=>s[0]||(s[0]=[p("文本相关属性")])),_:1}),n("ul",null,[n("li",k,[e(a,{to:"#字体属性-font"},{default:t(()=>s[1]||(s[1]=[p("字体属性（Font）")])),_:1})]),n("li",v,[e(a,{to:"#文本属性-text"},{default:t(()=>s[2]||(s[2]=[p("文本属性（Text）")])),_:1})]),n("li",h,[e(a,{to:"#文本溢出处理"},{default:t(()=>s[3]||(s[3]=[p("文本溢出处理")])),_:1})])])]),n("li",b,[e(a,{to:"#建议"},{default:t(()=>s[4]||(s[4]=[p("建议")])),_:1})])])]),s[6]||(s[6]=c(`<hr><h2 id="文本相关属性" tabindex="-1"><a class="header-anchor" href="#文本相关属性"><span>文本相关属性</span></a></h2><h3 id="字体属性-font" tabindex="-1"><a class="header-anchor" href="#字体属性-font"><span>字体属性（Font）</span></a></h3><h4 id="_1-font-family-字体系列" tabindex="-1"><a class="header-anchor" href="#_1-font-family-字体系列"><span>1. font-family（字体系列）</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">p</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">/* 按优先级排序，如果第一个字体不可用，则使用第二个，以此类推 */</span></span>
<span class="line">    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span> Arial<span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-font-size-字体大小" tabindex="-1"><a class="header-anchor" href="#_2-font-size-字体大小"><span>2. font-size（字体大小）</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* 常用的字体大小设置方式 */</span></span>
<span class="line"><span class="token selector">.text</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>          <span class="token comment">/* 像素 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2em<span class="token punctuation">;</span>         <span class="token comment">/* 相对于父元素的倍数 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 1.2rem<span class="token punctuation">;</span>        <span class="token comment">/* 相对于根元素的倍数 */</span></span>
<span class="line">    <span class="token property">font-size</span><span class="token punctuation">:</span> 120%<span class="token punctuation">;</span>          <span class="token comment">/* 百分比 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-font-weight-字体粗细" tabindex="-1"><a class="header-anchor" href="#_3-font-weight-字体粗细"><span>3. font-weight（字体粗细）</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.text</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>      <span class="token comment">/* 正常粗细 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>        <span class="token comment">/* 粗体 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> 400<span class="token punctuation">;</span>         <span class="token comment">/* 正常 */</span></span>
<span class="line">    <span class="token property">font-weight</span><span class="token punctuation">:</span> 700<span class="token punctuation">;</span>         <span class="token comment">/* 加粗 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-font-style-字体样式" tabindex="-1"><a class="header-anchor" href="#_4-font-style-字体样式"><span>4. font-style（字体样式）</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.text</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font-style</span><span class="token punctuation">:</span> normal<span class="token punctuation">;</span>       <span class="token comment">/* 正常 */</span></span>
<span class="line">    <span class="token property">font-style</span><span class="token punctuation">:</span> italic<span class="token punctuation">;</span>       <span class="token comment">/* 斜体 */</span></span>
<span class="line">    <span class="token property">font-style</span><span class="token punctuation">:</span> oblique<span class="token punctuation">;</span>      <span class="token comment">/* 倾斜体 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-font-复合写法" tabindex="-1"><a class="header-anchor" href="#_5-font-复合写法"><span>5. font 复合写法</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token comment">/* 顺序：font-style font-weight font-size/line-height font-family */</span></span>
<span class="line"><span class="token selector">.text</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">font</span><span class="token punctuation">:</span> italic bold 16px/1.5 <span class="token string">&quot;Microsoft YaHei&quot;</span><span class="token punctuation">,</span> Arial<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本属性-text" tabindex="-1"><a class="header-anchor" href="#文本属性-text"><span>文本属性（Text）</span></a></h3><h4 id="_1-color-文本颜色" tabindex="-1"><a class="header-anchor" href="#_1-color-文本颜色"><span>1. color（文本颜色）</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.text</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>                <span class="token comment">/* 颜色关键字 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> #ff0000<span class="token punctuation">;</span>           <span class="token comment">/* 十六进制 */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">/* RGB */</span></span>
<span class="line">    <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>255<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.5<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">/* RGBA带透明度 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-text-align-文本对齐" tabindex="-1"><a class="header-anchor" href="#_2-text-align-文本对齐"><span>2. text-align（文本对齐）</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.text</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>         <span class="token comment">/* 左对齐 */</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>       <span class="token comment">/* 居中对齐 */</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>        <span class="token comment">/* 右对齐 */</span></span>
<span class="line">    <span class="token property">text-align</span><span class="token punctuation">:</span> justify<span class="token punctuation">;</span>      <span class="token comment">/* 两端对齐 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-text-decoration-文本装饰" tabindex="-1"><a class="header-anchor" href="#_3-text-decoration-文本装饰"><span>3. text-decoration（文本装饰）</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.text</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>           <span class="token comment">/* 无装饰 */</span></span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> underline<span class="token punctuation">;</span>      <span class="token comment">/* 下划线 */</span></span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> line-through<span class="token punctuation">;</span>   <span class="token comment">/* 删除线 */</span></span>
<span class="line">    <span class="token property">text-decoration</span><span class="token punctuation">:</span> overline<span class="token punctuation">;</span>       <span class="token comment">/* 上划线 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-text-indent-首行缩进" tabindex="-1"><a class="header-anchor" href="#_4-text-indent-首行缩进"><span>4. text-indent（首行缩进）</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.text</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">text-indent</span><span class="token punctuation">:</span> 2em<span class="token punctuation">;</span>         <span class="token comment">/* 缩进2个文字大小 */</span></span>
<span class="line">    <span class="token property">text-indent</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>        <span class="token comment">/* 缩进20像素 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_5-line-height-行高" tabindex="-1"><a class="header-anchor" href="#_5-line-height-行高"><span>5. line-height（行高）</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.text</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>         <span class="token comment">/* 1.5倍行高 */</span></span>
<span class="line">    <span class="token property">line-height</span><span class="token punctuation">:</span> 20px<span class="token punctuation">;</span>        <span class="token comment">/* 固定行高 */</span></span>
<span class="line">    <span class="token property">line-height</span><span class="token punctuation">:</span> 150%<span class="token punctuation">;</span>        <span class="token comment">/* 相对于字体大小的百分比 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文本溢出处理" tabindex="-1"><a class="header-anchor" href="#文本溢出处理"><span>文本溢出处理</span></a></h3><h4 id="_1-单行文本溢出显示省略号" tabindex="-1"><a class="header-anchor" href="#_1-单行文本溢出显示省略号"><span>1. 单行文本溢出显示省略号</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.single-line</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">white-space</span><span class="token punctuation">:</span> nowrap<span class="token punctuation">;</span>      <span class="token comment">/* 不换行 */</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>         <span class="token comment">/* 溢出隐藏 */</span></span>
<span class="line">    <span class="token property">text-overflow</span><span class="token punctuation">:</span> ellipsis<span class="token punctuation">;</span>  <span class="token comment">/* 显示省略号 */</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-多行文本溢出显示省略号" tabindex="-1"><a class="header-anchor" href="#_2-多行文本溢出显示省略号"><span>2. 多行文本溢出显示省略号</span></a></h4><div class="language-css line-numbers-mode" data-highlighter="prismjs" data-ext="css" data-title="css"><pre><code><span class="line"><span class="token selector">.multi-line</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">display</span><span class="token punctuation">:</span> -webkit-box<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-box-orient</span><span class="token punctuation">:</span> vertical<span class="token punctuation">;</span></span>
<span class="line">    <span class="token property">-webkit-line-clamp</span><span class="token punctuation">:</span> 2<span class="token punctuation">;</span>    <span class="token comment">/* 显示行数 */</span></span>
<span class="line">    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="建议" tabindex="-1"><a class="header-anchor" href="#建议"><span>建议</span></a></h2><ol><li><p>字体设置</p><ul><li>始终指定后备字体</li><li>中文字体放在英文字体前面</li><li>常用字体大小：12px-14px(正文)，16px-24px(标题)</li></ul></li><li><p>行高设置</p><ul><li>正文内容建议使用1.5-1.8的行高</li><li>标题文字可以使用较小的行高，如1.3</li></ul></li><li><p>文本对齐</p><ul><li>中文文本建议使用左对齐</li><li>数字和英文内容可以考虑使用居中对齐</li></ul></li><li><p>性能优化</p><ul><li>避免使用过多的文本阴影效果</li><li>合理使用文本缩进</li><li>适当使用复合属性写法</li></ul></li><li><p>响应式设计</p><ul><li>使用相对单位(em, rem)替代固定单位(px)</li><li>设置合适的文本溢出处理方案</li></ul></li></ol>`,31))])}const y=l(u,[["render",f],["__file","03. css 属性.html.vue"]]),_=JSON.parse('{"path":"/fhtml/css/03.%20css%20%E5%B1%9E%E6%80%A7.html","title":"CSS 属性","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"文本相关属性","slug":"文本相关属性","link":"#文本相关属性","children":[{"level":3,"title":"字体属性（Font）","slug":"字体属性-font","link":"#字体属性-font","children":[]},{"level":3,"title":"文本属性（Text）","slug":"文本属性-text","link":"#文本属性-text","children":[]},{"level":3,"title":"文本溢出处理","slug":"文本溢出处理","link":"#文本溢出处理","children":[]}]},{"level":2,"title":"建议","slug":"建议","link":"#建议","children":[]}],"git":{"updatedTime":1710261170000,"contributors":[{"name":"Linkefou","username":"Linkefou","email":"wlh724567296@163.com","commits":1}]},"filePathRelative":"fhtml/css/03. css 属性.md"}');export{y as comp,_ as data};
