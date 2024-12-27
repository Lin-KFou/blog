import{_ as p,c as i,a as n,d as e,e as t,f as o,r as c,o as r,b as l}from"./app-BCC5ysrj.js";const d={},u={class:"vuepress-toc"},m={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},x={class:"vuepress-toc-item"},w={class:"vuepress-toc-item"},N={class:"vuepress-toc-item"},j={class:"vuepress-toc-item"};function P(V,s){const a=c("router-link");return r(),i("div",null,[s[13]||(s[13]=n("h1",{id:"列表、字典与元组",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#列表、字典与元组"},[n("span",null,"列表、字典与元组")])],-1)),n("nav",u,[n("ul",null,[n("li",m,[e(a,{to:"#列表"},{default:t(()=>s[0]||(s[0]=[l("列表")])),_:1}),n("ul",null,[n("li",k,[e(a,{to:"#创建列表"},{default:t(()=>s[1]||(s[1]=[l("创建列表")])),_:1})]),n("li",v,[e(a,{to:"#列表操作"},{default:t(()=>s[2]||(s[2]=[l("列表操作")])),_:1})]),n("li",h,[e(a,{to:"#示例"},{default:t(()=>s[3]||(s[3]=[l("示例")])),_:1})])])]),n("li",g,[e(a,{to:"#字典"},{default:t(()=>s[4]||(s[4]=[l("字典")])),_:1}),n("ul",null,[n("li",b,[e(a,{to:"#创建字典"},{default:t(()=>s[5]||(s[5]=[l("创建字典")])),_:1})]),n("li",y,[e(a,{to:"#字典操作"},{default:t(()=>s[6]||(s[6]=[l("字典操作")])),_:1})]),n("li",f,[e(a,{to:"#示例-1"},{default:t(()=>s[7]||(s[7]=[l("示例")])),_:1})])])]),n("li",_,[e(a,{to:"#元组"},{default:t(()=>s[8]||(s[8]=[l("元组")])),_:1}),n("ul",null,[n("li",x,[e(a,{to:"#创建元组"},{default:t(()=>s[9]||(s[9]=[l("创建元组")])),_:1})]),n("li",w,[e(a,{to:"#元组操作"},{default:t(()=>s[10]||(s[10]=[l("元组操作")])),_:1})]),n("li",N,[e(a,{to:"#示例-2"},{default:t(()=>s[11]||(s[11]=[l("示例")])),_:1})])])]),n("li",j,[e(a,{to:"#应用场景"},{default:t(()=>s[12]||(s[12]=[l("应用场景")])),_:1})])])]),s[14]||(s[14]=o(`<p>Python 提供了多种内置的数据结构来存储和管理数据，其中列表、字典和元组是最常用的三种。理解这些数据结构的特点和用法有助于编写高效、简洁的代码。本文将详细介绍列表、字典和元组的用法及其应用场景。</p><h2 id="列表" tabindex="-1"><a class="header-anchor" href="#列表"><span>列表</span></a></h2><p>列表是 Python 中最常用的数据结构之一，用于存储有序的可变集合。列表中的元素可以是不同类型的对象。</p><h3 id="创建列表" tabindex="-1"><a class="header-anchor" href="#创建列表"><span>创建列表</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 创建一个空列表</span></span>
<span class="line">empty_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建一个包含元素的列表</span></span>
<span class="line">fruits <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;banana&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cherry&#39;</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="列表操作" tabindex="-1"><a class="header-anchor" href="#列表操作"><span>列表操作</span></a></h3><ul><li><strong>添加元素</strong>：使用 <code>append()</code> 方法在列表末尾添加元素。</li><li><strong>插入元素</strong>：使用 <code>insert()</code> 方法在指定位置插入元素。</li><li><strong>删除元素</strong>：使用 <code>remove()</code> 方法删除指定元素，或使用 <code>pop()</code> 方法删除指定位置的元素。</li><li><strong>排序</strong>：使用 <code>sort()</code> 方法对列表进行排序。</li></ul><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">fruits<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;orange&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>  <span class="token comment"># 输出: [&#39;apple&#39;, &#39;banana&#39;, &#39;cherry&#39;, &#39;orange&#39;]</span></span>
<span class="line"></span>
<span class="line">fruits<span class="token punctuation">.</span>insert<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;kiwi&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>  <span class="token comment"># 输出: [&#39;apple&#39;, &#39;kiwi&#39;, &#39;banana&#39;, &#39;cherry&#39;, &#39;orange&#39;]</span></span>
<span class="line"></span>
<span class="line">fruits<span class="token punctuation">.</span>remove<span class="token punctuation">(</span><span class="token string">&#39;banana&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>  <span class="token comment"># 输出: [&#39;apple&#39;, &#39;kiwi&#39;, &#39;cherry&#39;, &#39;orange&#39;]</span></span>
<span class="line"></span>
<span class="line">fruits<span class="token punctuation">.</span>sort<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>fruits<span class="token punctuation">)</span>  <span class="token comment"># 输出: [&#39;apple&#39;, &#39;cherry&#39;, &#39;kiwi&#39;, &#39;orange&#39;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="字典" tabindex="-1"><a class="header-anchor" href="#字典"><span>字典</span></a></h2><p>字典是 Python 中的键值对集合，用于存储无序的可变数据。每个键必须是唯一的，通常是字符串或数字。</p><h3 id="创建字典" tabindex="-1"><a class="header-anchor" href="#创建字典"><span>创建字典</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 创建一个空字典</span></span>
<span class="line">empty_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建一个包含键值对的字典</span></span>
<span class="line">person <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token punctuation">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token string">&#39;city&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;New York&#39;</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字典操作" tabindex="-1"><a class="header-anchor" href="#字典操作"><span>字典操作</span></a></h3><ul><li><strong>添加或更新键值对</strong>：使用 <code>dict[key] = value</code> 语法。</li><li><strong>删除键值对</strong>：使用 <code>del</code> 语句或 <code>pop()</code> 方法。</li><li><strong>获取值</strong>：使用 <code>get()</code> 方法获取指定键的值。</li></ul><h3 id="示例-1" tabindex="-1"><a class="header-anchor" href="#示例-1"><span>示例</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">person<span class="token punctuation">[</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;alice@example.com&#39;</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>  <span class="token comment"># 输出: {&#39;name&#39;: &#39;Alice&#39;, &#39;age&#39;: 25, &#39;city&#39;: &#39;New York&#39;, &#39;email&#39;: &#39;alice@example.com&#39;}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">del</span> person<span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span>  <span class="token comment"># 输出: {&#39;name&#39;: &#39;Alice&#39;, &#39;city&#39;: &#39;New York&#39;, &#39;email&#39;: &#39;alice@example.com&#39;}</span></span>
<span class="line"></span>
<span class="line">email <span class="token operator">=</span> person<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;email&#39;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>email<span class="token punctuation">)</span>  <span class="token comment"># 输出: &#39;alice@example.com&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="元组" tabindex="-1"><a class="header-anchor" href="#元组"><span>元组</span></a></h2><p>元组是 Python 中的有序不可变集合。元组中的元素可以是不同类型的对象。</p><h3 id="创建元组" tabindex="-1"><a class="header-anchor" href="#创建元组"><span>创建元组</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 创建一个空元组</span></span>
<span class="line">empty_tuple <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建一个包含元素的元组</span></span>
<span class="line">coordinates <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">10.0</span><span class="token punctuation">,</span> <span class="token number">20.0</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="元组操作" tabindex="-1"><a class="header-anchor" href="#元组操作"><span>元组操作</span></a></h3><ul><li><strong>访问元素</strong>：使用索引访问元组中的元素。</li><li><strong>解包</strong>：将元组中的元素解包到变量中。</li></ul><h3 id="示例-2" tabindex="-1"><a class="header-anchor" href="#示例-2"><span>示例</span></a></h3><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">x<span class="token punctuation">,</span> y <span class="token operator">=</span> coordinates</span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>  <span class="token comment"># 输出: 10.0</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span>  <span class="token comment"># 输出: 20.0</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="应用场景" tabindex="-1"><a class="header-anchor" href="#应用场景"><span>应用场景</span></a></h2><ul><li><strong>列表</strong>：适用于需要存储有序可变数据的场景，如动态数组。</li><li><strong>字典</strong>：适用于需要快速查找和更新数据的场景，如配置文件、数据库记录。</li><li><strong>元组</strong>：适用于需要存储有序不可变数据的场景，如坐标、固定配置。</li></ul>`,27))])}const B=p(d,[["render",P],["__file","concept-data_structures-list_dict_tuple.html.vue"]]),C=JSON.parse('{"path":"/fpython/library/concept/concept-data_structures-list_dict_tuple.html","title":"列表、字典与元组","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"列表","slug":"列表","link":"#列表","children":[{"level":3,"title":"创建列表","slug":"创建列表","link":"#创建列表","children":[]},{"level":3,"title":"列表操作","slug":"列表操作","link":"#列表操作","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"字典","slug":"字典","link":"#字典","children":[{"level":3,"title":"创建字典","slug":"创建字典","link":"#创建字典","children":[]},{"level":3,"title":"字典操作","slug":"字典操作","link":"#字典操作","children":[]},{"level":3,"title":"示例","slug":"示例-1","link":"#示例-1","children":[]}]},{"level":2,"title":"元组","slug":"元组","link":"#元组","children":[{"level":3,"title":"创建元组","slug":"创建元组","link":"#创建元组","children":[]},{"level":3,"title":"元组操作","slug":"元组操作","link":"#元组操作","children":[]},{"level":3,"title":"示例","slug":"示例-2","link":"#示例-2","children":[]}]},{"level":2,"title":"应用场景","slug":"应用场景","link":"#应用场景","children":[]}],"git":{"updatedTime":1735029308000,"contributors":[{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":2}]},"filePathRelative":"fpython/library/concept/concept-data_structures-list_dict_tuple.md"}');export{B as comp,C as data};
