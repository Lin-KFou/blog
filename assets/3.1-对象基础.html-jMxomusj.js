import{_ as l,c as i,a as s,d as t,e,f as o,r as c,o as u,b as p}from"./app-BCC5ysrj.js";const r={},d={class:"vuepress-toc"},k={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},m={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"},q={class:"vuepress-toc-item"},j={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},w={class:"vuepress-toc-item"},x={class:"vuepress-toc-item"},B={class:"vuepress-toc-item"},S={class:"vuepress-toc-item"},J={class:"vuepress-toc-item"};function N(E,n){const a=c("router-link");return u(),i("div",null,[n[16]||(n[16]=s("h1",{id:"对象",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#对象"},[s("span",null,"对象")])],-1)),s("nav",d,[s("ul",null,[s("li",k,[t(a,{to:"#对象基础"},{default:e(()=>n[0]||(n[0]=[p("对象基础")])),_:1}),s("ul",null,[s("li",v,[t(a,{to:"#对象的组成"},{default:e(()=>n[1]||(n[1]=[p("对象的组成")])),_:1})]),s("li",m,[t(a,{to:"#对象字面量"},{default:e(()=>n[2]||(n[2]=[p("对象字面量")])),_:1})])])]),s("li",b,[t(a,{to:"#点表示法"},{default:e(()=>n[3]||(n[3]=[p("点表示法")])),_:1}),s("ul",null,[s("li",h,[t(a,{to:"#基本语法"},{default:e(()=>n[4]||(n[4]=[p("基本语法")])),_:1})]),s("li",g,[t(a,{to:"#嵌套对象"},{default:e(()=>n[5]||(n[5]=[p("嵌套对象")])),_:1})])])]),s("li",f,[t(a,{to:"#括号表示法"},{default:e(()=>n[6]||(n[6]=[p("括号表示法")])),_:1}),s("ul",null,[s("li",y,[t(a,{to:"#基本语法-1"},{default:e(()=>n[7]||(n[7]=[p("基本语法")])),_:1})]),s("li",q,[t(a,{to:"#必须使用括号表示法的情况"},{default:e(()=>n[8]||(n[8]=[p("必须使用括号表示法的情况")])),_:1})])])]),s("li",j,[t(a,{to:"#设置对象成员"},{default:e(()=>n[9]||(n[9]=[p("设置对象成员")])),_:1}),s("ul",null,[s("li",_,[t(a,{to:"#更新和添加成员"},{default:e(()=>n[10]||(n[10]=[p("更新和添加成员")])),_:1})])])]),s("li",w,[t(a,{to:"#this含义"},{default:e(()=>n[11]||(n[11]=[p("this含义")])),_:1})]),s("li",x,[t(a,{to:"#构造函数"},{default:e(()=>n[12]||(n[12]=[p("构造函数")])),_:1}),s("ul",null,[s("li",B,[t(a,{to:"#构造函数的作用"},{default:e(()=>n[13]||(n[13]=[p("构造函数的作用")])),_:1})]),s("li",S,[t(a,{to:"#构造函数执行过程"},{default:e(()=>n[14]||(n[14]=[p("构造函数执行过程")])),_:1})]),s("li",J,[t(a,{to:"#命名规范"},{default:e(()=>n[15]||(n[15]=[p("命名规范")])),_:1})])])])])]),n[17]||(n[17]=o(`<hr><h2 id="对象基础" tabindex="-1"><a class="header-anchor" href="#对象基础"><span>对象基础</span></a></h2><p>对象是 JavaScript 中最基础的数据结构，它具有以下特点：</p><ul><li>包含相关数据和方法的集合</li><li>成员之间用逗号分隔</li><li>支持多种数据类型</li><li>可以包含属性和方法</li></ul><h3 id="对象的组成" tabindex="-1"><a class="header-anchor" href="#对象的组成"><span>对象的组成</span></a></h3><table><thead><tr><th>成员类型</th><th>说明</th><th>示例</th></tr></thead><tbody><tr><td>属性</td><td>存储数据的变量</td><td><code>name: &quot;value&quot;</code></td></tr><tr><td>方法</td><td>对象的操作函数</td><td><code>method() { }</code></td></tr></tbody></table><h3 id="对象字面量" tabindex="-1"><a class="header-anchor" href="#对象字面量"><span>对象字面量</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 基本对象结构</span></span>
<span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">bio</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">  </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> now </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>age<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> ages</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">introduceSelf</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 访问对象成员</span></span>
<span class="line">person<span class="token punctuation">.</span>name</span>
<span class="line">person<span class="token punctuation">.</span>name<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">person<span class="token punctuation">.</span>age</span>
<span class="line">person<span class="token punctuation">.</span><span class="token function">bio</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">person<span class="token punctuation">.</span><span class="token function">introduceSelf</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="点表示法" tabindex="-1"><a class="header-anchor" href="#点表示法"><span>点表示法</span></a></h2><h3 id="基本语法" tabindex="-1"><a class="header-anchor" href="#基本语法"><span>基本语法</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 访问属性</span></span>
<span class="line">object<span class="token punctuation">.</span>property</span>
<span class="line"></span>
<span class="line"><span class="token comment">// 调用方法</span></span>
<span class="line">object<span class="token punctuation">.</span><span class="token function">method</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="嵌套对象" tabindex="-1"><a class="header-anchor" href="#嵌套对象"><span>嵌套对象</span></a></h3><p>对象可以作为另一个对象的属性值：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 简单对象</span></span>
<span class="line"><span class="token keyword">const</span> personn <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span> <span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Json&quot;</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 嵌套对象</span></span>
<span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span> <span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">first</span><span class="token operator">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">last</span><span class="token operator">:</span> <span class="token string">&quot;Json&quot;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 访问嵌套属性</span></span>
<span class="line">person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>first</span>
<span class="line">person<span class="token punctuation">.</span>name<span class="token punctuation">.</span>last</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="括号表示法" tabindex="-1"><a class="header-anchor" href="#括号表示法"><span>括号表示法</span></a></h2><h3 id="基本语法-1" tabindex="-1"><a class="header-anchor" href="#基本语法-1"><span>基本语法</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 访问属性</span></span>
<span class="line">object<span class="token punctuation">[</span><span class="token string">&quot;property&quot;</span><span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 调用方法</span></span>
<span class="line">object<span class="token punctuation">[</span><span class="token string">&quot;method&quot;</span><span class="token punctuation">]</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>点表示法通常优于括号表示法，因为它更简洁且更易于阅读</p></blockquote><h3 id="必须使用括号表示法的情况" tabindex="-1"><a class="header-anchor" href="#必须使用括号表示法的情况"><span>必须使用括号表示法的情况</span></a></h3><p>当属性名是动态的或存储在变量中时：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> person <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;Json&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span> <span class="token operator">:</span> <span class="token number">32</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">logProperty</span><span class="token punctuation">(</span><span class="token parameter">propertyName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>person<span class="token punctuation">[</span>propertyName<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token function">logProperty</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token function">logProperty</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="设置对象成员" tabindex="-1"><a class="header-anchor" href="#设置对象成员"><span>设置对象成员</span></a></h2><h3 id="更新和添加成员" tabindex="-1"><a class="header-anchor" href="#更新和添加成员"><span>更新和添加成员</span></a></h3><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 更新现有属性</span></span>
<span class="line">person<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">45</span></span>
<span class="line">person<span class="token punctuation">[</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&quot;last&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Smith&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 添加新属性</span></span>
<span class="line">person<span class="token punctuation">[</span><span class="token string">&quot;eyes&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;hazel&quot;</span></span>
<span class="line">person<span class="token punctuation">.</span><span class="token function-variable function">farewall</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Good bye&quot;</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>括号表示法一个技巧：它不仅可以动态的去设置对象成员的值，还可以动态的去设置成员的名字</p></blockquote><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 动态设置属性名和值</span></span>
<span class="line"><span class="token keyword">const</span> myDataName <span class="token operator">=</span> nameInput<span class="token punctuation">.</span>value</span>
<span class="line"><span class="token keyword">const</span> myDataValue <span class="token operator">=</span> valueInput<span class="token punctuation">.</span>value</span>
<span class="line"></span>
<span class="line">person<span class="token punctuation">[</span>myDataName<span class="token punctuation">]</span> <span class="token operator">=</span> myDataValue</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="this含义" tabindex="-1"><a class="header-anchor" href="#this含义"><span>this含义</span></a></h2><table><thead><tr><th>上下文</th><th>this 指向</th><th>示例</th></tr></thead><tbody><tr><td>对象方法</td><td>当前对象</td><td><code>object.method()</code></td></tr><tr><td>构造函数</td><td>新创建的实例</td><td><code>new Constructor()</code></td></tr><tr><td>全局作用域</td><td>window/global</td><td><code>function(){}</code></td></tr><tr><td>箭头函数</td><td>外层作用域</td><td><code>() =&gt; {}</code></td></tr></tbody></table><h2 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数"><span>构造函数</span></a></h2><h3 id="构造函数的作用" tabindex="-1"><a class="header-anchor" href="#构造函数的作用"><span>构造函数的作用</span></a></h3><ul><li>创建多个相似对象的模板</li><li>定义对象的共同属性和方法</li><li>实现代码复用</li></ul><h3 id="构造函数执行过程" tabindex="-1"><a class="header-anchor" href="#构造函数执行过程"><span>构造函数执行过程</span></a></h3><ol><li>创建新对象</li><li>绑定 this</li><li>执行构造函数代码</li><li>返回新对象</li></ol><h3 id="命名规范" tabindex="-1"><a class="header-anchor" href="#命名规范"><span>命名规范</span></a></h3><ul><li>首字母大写</li><li>使用名词</li><li>表示对象类型</li></ul><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 定义构造函数</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name</span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>interest <span class="token operator">=</span> <span class="token string">&quot;coding&quot;</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function-variable function">bio</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">My name is </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 创建实例</span></span>
<span class="line"><span class="token keyword">const</span> salva <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&quot;Salva&quot;</span><span class="token punctuation">)</span></span>
<span class="line">salva<span class="token punctuation">.</span>name</span>
<span class="line">salva<span class="token punctuation">.</span>interest</span>
<span class="line">salva<span class="token punctuation">.</span><span class="token function">bio</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意：</strong></p></blockquote><ul><li>总是使用 new 关键字</li><li>不要忘记构造函数首字母大写</li><li>避免在构造函数中返回值</li></ul>`,38))])}const P=l(r,[["render",N],["__file","3.1-对象基础.html.vue"]]),V=JSON.parse('{"path":"/fhtml/JavaScript/03%EF%BC%9AJS%E5%AF%B9%E8%B1%A1/3.1-%E5%AF%B9%E8%B1%A1%E5%9F%BA%E7%A1%80.html","title":"对象","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"对象基础","slug":"对象基础","link":"#对象基础","children":[{"level":3,"title":"对象的组成","slug":"对象的组成","link":"#对象的组成","children":[]},{"level":3,"title":"对象字面量","slug":"对象字面量","link":"#对象字面量","children":[]}]},{"level":2,"title":"点表示法","slug":"点表示法","link":"#点表示法","children":[{"level":3,"title":"基本语法","slug":"基本语法","link":"#基本语法","children":[]},{"level":3,"title":"嵌套对象","slug":"嵌套对象","link":"#嵌套对象","children":[]}]},{"level":2,"title":"括号表示法","slug":"括号表示法","link":"#括号表示法","children":[{"level":3,"title":"基本语法","slug":"基本语法-1","link":"#基本语法-1","children":[]},{"level":3,"title":"必须使用括号表示法的情况","slug":"必须使用括号表示法的情况","link":"#必须使用括号表示法的情况","children":[]}]},{"level":2,"title":"设置对象成员","slug":"设置对象成员","link":"#设置对象成员","children":[{"level":3,"title":"更新和添加成员","slug":"更新和添加成员","link":"#更新和添加成员","children":[]}]},{"level":2,"title":"this含义","slug":"this含义","link":"#this含义","children":[]},{"level":2,"title":"构造函数","slug":"构造函数","link":"#构造函数","children":[{"level":3,"title":"构造函数的作用","slug":"构造函数的作用","link":"#构造函数的作用","children":[]},{"level":3,"title":"构造函数执行过程","slug":"构造函数执行过程","link":"#构造函数执行过程","children":[]},{"level":3,"title":"命名规范","slug":"命名规范","link":"#命名规范","children":[]}]}],"git":{},"filePathRelative":"fhtml/JavaScript/03：JS对象/3.1-对象基础.md"}');export{P as comp,V as data};
