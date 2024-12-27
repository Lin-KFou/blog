import{_ as t,c as i,f as s,a,b as e,t as p,o}from"./app-BCC5ysrj.js";const c={};function r(l,n){return o(),i("div",null,[n[2]||(n[2]=s(`<h1 id="_1-3-django-主要功能模块" tabindex="-1"><a class="header-anchor" href="#_1-3-django-主要功能模块"><span>1.3 Django 主要功能模块</span></a></h1><ul><li><a href="#13-django-%E4%B8%BB%E8%A6%81%E5%8A%9F%E8%83%BD%E6%A8%A1%E5%9D%97">1.3 Django 主要功能模块</a><ul><li><a href="#131-django%E4%B8%AD%E7%9A%84orm">1.3.1 Django中的ORM</a><ul><li><a href="#orm%E5%AF%B9%E8%B1%A1%E6%98%A0%E5%B0%84%E5%85%B3%E7%B3%BB"><strong>ORM：对象映射关系</strong></a><ul><li><a href="#%E4%BE%8B%E5%AD%90">例子</a></li></ul></li></ul></li><li><a href="#132-%E7%94%A8%E6%88%B7%E6%A8%A1%E5%9D%97%E4%B8%8E%E6%9D%83%E9%99%90%E7%B3%BB%E7%BB%9F">1.3.2 用户模块与权限系统</a><ul><li><a href="#%E8%AE%BE%E8%AE%A1%E6%80%9D%E6%83%B3%E6%80%9D%E8%80%83">设计思想，思考</a></li><li><a href="#%E7%94%A8%E6%88%B7%E6%A8%A1%E5%9D%97">用户模块</a></li></ul></li><li><a href="#133-admin%E5%90%8E%E5%8F%B0%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F">1.3.3 Admin后台管理系统</a></li><li><a href="#134-%E8%A7%86%E5%9B%BE">1.3.4 视图</a></li><li><a href="#135-%E6%A8%A1%E6%9D%BF%E7%B3%BB%E7%BB%9F">1.3.5 模板系统</a></li><li><a href="#136-%E8%A1%A8%E5%8D%95%E7%B3%BB%E7%BB%9Fform">1.3.6 表单系统Form</a></li><li><a href="#137-%E4%BF%A1%E5%8F%B7%E6%9C%BA%E5%88%B6">1.3.7 信号机制</a></li><li><a href="#138-%E8%B7%AF%E7%94%B1%E7%B3%BB%E7%BB%9F">1.3.8 路由系统</a></li><li><a href="#139-%E4%B8%AD%E9%97%B4%E4%BB%B6">1.3.9 中间件</a></li><li><a href="#1310-%E7%BC%93%E5%AD%98%E7%B3%BB%E7%BB%9F">1.3.10 缓存系统</a></li></ul></li></ul><hr><h2 id="_1-3-1-django中的orm" tabindex="-1"><a class="header-anchor" href="#_1-3-1-django中的orm"><span>1.3.1 Django中的ORM</span></a></h2><h3 id="orm-对象映射关系" tabindex="-1"><a class="header-anchor" href="#orm-对象映射关系"><span><strong>ORM：对象映射关系</strong></span></a></h3><ul><li>ORM（Object Relational Mapping，对象映射关系）：把对象与数据库中的表关联起来，对象的属性映射到表的各个字段，还把对表的操作对应到对象的操作，实现了对象到SQL，SQL到对象的过程转换</li><li>Django的ORM：使用了多种常用的数据库，PostgreSQL，MySQL，Oracle等</li><li>Django把表模型定义为Model，定义过程比较简单，只需要集成<strong>django.db.models</strong>中的<strong>Model类</strong>就可以了，Model类中的每一个属性都能映射到表的对应字段</li><li>针对数据库中提供的字段类型，Django ORM都有对应的*Filed表示 <ul><li>CharField，TextField，DateField等</li></ul></li><li>对于数据库表的增删改查，Django也提供了简单且优雅的API</li></ul><h4 id="例子" tabindex="-1"><a class="header-anchor" href="#例子"><span>例子</span></a></h4><ul><li>系统中存在一张User表，有name和password两个字符型的字段，如何利用Django的ORM实现User Model</li></ul><div class="language-pys line-numbers-mode" data-highlighter="prismjs" data-ext="pys" data-title="pys"><pre><code><span class="line">class User(models.Model):</span>
<span class="line"> name = models.CharField(max_length=150)</span>
<span class="line"> password = models.CharField(max_length=128)</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>检索系统中的所有User记录</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">User<span class="token punctuation">.</span>objects<span class="token punctuation">.</span><span class="token builtin">all</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>检索系统中name含有a的所有User记录</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">User<span class="token punctuation">.</span>Objects<span class="token punctuation">.</span><span class="token builtin">filter</span><span class="token punctuation">(</span>name__contains<span class="token operator">=</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>创建name是b，password是c的User记录</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line">User<span class="token punctuation">.</span>Objects<span class="token punctuation">.</span>create<span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">,</span>password<span class="token operator">=</span><span class="token string">&#39;c&#39;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_1-3-2-用户模块与权限系统" tabindex="-1"><a class="header-anchor" href="#_1-3-2-用户模块与权限系统"><span>1.3.2 用户模块与权限系统</span></a></h2><h3 id="设计思想-思考" tabindex="-1"><a class="header-anchor" href="#设计思想-思考"><span>设计思想，思考</span></a></h3><p>开发任何一个站点都需要有用户的概念，用户登录，注销过程，用户浏览页面，订阅消息等功能，都需要由用户系统实现</p><p>Django提供的用户模块，能够快速实现与用户相关的基本功能</p><p>有了用户的概念，还需要对用户做一些区分，那些是普通用户，那些是管理员用户，那些是超级管理员用户</p><p>Django提供了权限系统作为解决方案</p><h3 id="用户模块" tabindex="-1"><a class="header-anchor" href="#用户模块"><span>用户模块</span></a></h3><p>Django的用户模块定义在auth应用中，主要提供的功能</p><ul><li>实现用户与用户组，维护用户与用户组的关系</li><li>权限系统的逻辑设计</li><li>对每个Model添加增删改的权限</li><li>用户与用户组的权限定义</li><li>用户鉴权与登录功能</li><li>登录，注销，权限验证等功能相关的函数和装饰方法</li></ul><h2 id="_1-3-3-admin后台管理系统" tabindex="-1"><a class="header-anchor" href="#_1-3-3-admin后台管理系统"><span>1.3.3 Admin后台管理系统</span></a></h2><ul><li>针对数据存储表构建后台管理系统</li><li>Django 提供了 Admin Web后台管理系统进行解决</li><li>新建项目系统之后，几乎不用做任何配置，Django就设置害了后台管理的功能</li><li>原生的Admin可以利用Model Admin实现个性化定制，如：针对字段值过滤，搜索功能，排序功能，针对数据表字段的展示顺序规则定义功能，字段归类功能等</li></ul><h2 id="_1-3-4-视图" tabindex="-1"><a class="header-anchor" href="#_1-3-4-视图"><span>1.3.4 视图</span></a></h2><p>MTV设计模式的V，在Django中的提现是一个Python函数或者类，接受Web请求并返回Web响应</p><ul><li>视图返回的相应可以是HTML文档</li><li>可以是重定向</li><li>或者Excel</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 简单的视图函数</span></span>
<span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>http <span class="token keyword">import</span> HttpResponse</span>
<span class="line"><span class="token keyword">def</span> <span class="token function">hello_django</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;&lt;html&gt;&lt;body&gt;Hello Django &lt;/body&gt;&lt;/html&gt;&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 从django.http 模块引入HTTPResponse，是视图的相应类型</span></span>
<span class="line"><span class="token comment"># 定义一个hello_django的函数，也是一个视图函数</span></span>
<span class="line"><span class="token comment"># 视图返回文本相应内容，是一个HttpResponse类型的对象</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>Django规定视图函数至少需要一个参数，且第一个参数是django.http.HttpResponse类型的对象 <ul><li>携带了Web请求的所有信息，按照约定称为：<strong>request</strong></li><li>函数的名字并不关心，通常的做法是：<strong>将函数名称对应到实现的具体功能上</strong></li></ul></li></ul><h2 id="_1-3-5-模板系统" tabindex="-1"><a class="header-anchor" href="#_1-3-5-模板系统"><span>1.3.5 模板系统</span></a></h2><ul><li>把HTML硬编码到Python代码不是一个好的方案，原因： <ul><li>HTML代码主要实现站点的展现形式，且展现形式往往是需要经常修改的。直接<strong>硬编码</strong>到代码中，对HTML的修改必须要修改Python代码，但是实际的业务逻辑没有改变，不利于维护</li><li>业务实现上的python代码和HTML代码并不存在交集，耦合在视图中，会增加系统的复杂度，且维护起来会更加困难</li></ul></li><li>利用模板系统，可以将页面设计的HTML代码和用于逻辑处理的Python代码分离</li><li>例子</li></ul><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>{{value}}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">hello_django</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span><span class="token string">&#39;hello.html&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&#39;value&#39;</span><span class="token punctuation">:</span><span class="token string">&#39;Hrllo Django&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>上面利用模板系统实现数据与逻辑的分离，解耦了业务处理逻辑与数据展现形式</li></ul><h2 id="_1-3-6-表单系统form" tabindex="-1"><a class="header-anchor" href="#_1-3-6-表单系统form"><span>1.3.6 表单系统Form</span></a></h2><ul><li><p>表单系统一般比较复杂，不同的表单的处理过程又是相似的</p></li><li><p>表单的完整过程</p><ul><li>不同类型的数据项在表单中渲染成功HTML向用户展示</li><li>用户在表单中编辑并提交数据到后端服务器</li><li>服务逻辑对数据进行验证，以及后续的处理或者提示用户输入数据有误等等</li></ul></li><li><p>Django表单系统的核心Form类，提供4个主要功能</p><ul><li>自动生成HTML表单元素</li><li>检查表单数据的合法性</li><li>对不合法的表单数据进行回显，提示错误</li><li>将表单数据转换为对应的Python数据类型</li></ul></li><li><p>例子：实现需要用户输入用户名和密码并提交验证</p></li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> django <span class="token keyword">import</span> forms</span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">LoginForm</span><span class="token punctuation">(</span>forms<span class="token punctuation">.</span>Form<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    name <span class="token operator">=</span> forms<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    password <span class="token operator">=</span> forms<span class="token punctuation">.</span>CharField<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39)),a("p",null,[n[0]||(n[0]=e("然后创建模板文件 ")),n[1]||(n[1]=a("code",null,"login.html",-1)),e("，对应"+p(l.form),1)]),n[3]||(n[3]=s(`<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>form</span> <span class="token attr-name">action</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>/login/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">method</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>post<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line">  {% csrf_token %}</span>
<span class="line">  {{ form }}</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>submit<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>form</span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，创建试图完成登录处理逻辑</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">login</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">if</span> request<span class="token punctuation">.</span>method <span class="token operator">==</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">:</span></span>
<span class="line">        form <span class="token operator">=</span> LoginForm<span class="token punctuation">(</span>request<span class="token punctuation">.</span>POST<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> form<span class="token punctuation">.</span>is_valid<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">            <span class="token comment"># process user login</span></span>
<span class="line">            <span class="token keyword">return</span> HttpResponse<span class="token punctuation">(</span><span class="token string">&quot;login success&quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">else</span><span class="token punctuation">:</span></span>
<span class="line">        form <span class="token operator">=</span> LoginForm<span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> render<span class="token punctuation">(</span>request<span class="token punctuation">,</span><span class="token string">&#39;login.html&#39;</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">:</span>form<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-3-7-信号机制" tabindex="-1"><a class="header-anchor" href="#_1-3-7-信号机制"><span>1.3.7 信号机制</span></a></h2><p>Django 对信号机制的解释：在框架的不同位置传递特定的消息给应用程序执行特定的操作</p><ul><li>是一种观察者模式（发布-订阅模式）</li><li>当系统中有event（事件）发生，一组senders（发送者）将signals（信号）发送给一组receivers（接收者），receivers再去执行预定的操作</li><li>Django预定的信号 <ul><li>关于Model的执行动作信号</li><li>关于Http请求的执行动作信号</li></ul></li><li>例子：Http请求到来的时候触发信号</li></ul><ol><li><p>实现消息接受这receiver，打印Request Coming</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">def</span> <span class="token function">receiver</span><span class="token punctuation">(</span>sender<span class="token punctuation">,</span> <span class="token operator">**</span>kwargs<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Request Coming&quot;</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>将信号绑定到receiver上面（也可以使用装饰器实现绑定）</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>core<span class="token punctuation">.</span>signals <span class="token keyword">import</span> request_started</span>
<span class="line">request_started<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>receiver<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>最后，等待Http请求到来，触发receiver的执行。Django信号机制的执行是同步的，所以，耗时的任务不可使用信号机制</p></li></ol><h2 id="_1-3-8-路由系统" tabindex="-1"><a class="header-anchor" href="#_1-3-8-路由系统"><span>1.3.8 路由系统</span></a></h2><p>MTV的设计模式中</p><ul><li>用户向web站点发送请求（对应到一个URL）</li><li>先到达“对应的”视图，试图如何对应，需要路由</li><li>Django利用URLconf构建起URL模式与试图函数之间的映射关系</li><li>Django路由系统配置的核心是：<strong>path</strong></li><li>基本格式</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>urls <span class="token keyword">import</span> path</span>
<span class="line">urlpatterns <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  path<span class="token punctuation">(</span>route<span class="token punctuation">,</span> view<span class="token punctuation">,</span> kwargs<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token boolean">None</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>path的四个参数 <ul><li>route：标识URL的正则表达式；必填</li><li>view：标识试图函数；必填</li><li>kwargs：标识以字典的形式传递给视图的默认参数；可选</li><li>name：给route起一个名字，用于反向解析；可选</li></ul></li><li>路由匹配模式，可以把Django的URL映射类型分为3类 <ul><li>固定URL映射：<code>path(&#39;bbs/&#39;,views.bbs)</code></li><li>动态URL映射:<code>path(&#39;bbs/&lt;int:page&gt;&#39;,views.bbs_list)</code></li><li>两级（多级）URL映射:<code>path(&#39;topic/&#39;,include(&#39;topic.urls&#39;))</code>: 将所有的topic的请求都嫁给topic这个App下面的urls去处理</li></ul></li></ul><h2 id="_1-3-9-中间件" tabindex="-1"><a class="header-anchor" href="#_1-3-9-中间件"><span>1.3.9 中间件</span></a></h2><ul><li><p>中间件是一个插件系统，嵌入到Django的Request和Response之间执行，可以对输入和输出的内容进行修改。</p></li><li><p>中间件是用来定义处理所有请求和相应的通用处理框架</p></li><li><p>中间件就是一个普通的Python类对象，定义了一些函数在试图执行的前后调用，这些函数称为钩子函数，且名称固定</p><ul><li>process_request：在请求到来的时候调用</li><li>process_view：在对应的视图函数执行之前调用</li><li>process_exception：在视图函数抛出异常的时候调用</li><li>process_template_response：在视图函数有相应，且响应对象包含render方法时调用</li><li>process_response：在返回响应之前调用</li></ul></li><li><p>除了单个中间件执行的生命周期，Django也规定了中间件的执行顺序与配置的关系</p></li><li><p>配置越靠前的中间件越先被执行，从上到下顺序地执行每一个中间件，返回的时候正好相反，按照各个中间件配置的顺序逆序执行</p></li></ul><p><img src="https://s2.loli.net/2022/03/12/yCVQ4aReYLlIOs7.jpg" alt="yCVQ4aReYLlIOs7"></p><ul><li>中间件将特定的业务处理逻辑和通用服务解耦</li><li>作为一个可插拔的组件对外提供服务</li></ul><h2 id="_1-3-10-缓存系统" tabindex="-1"><a class="header-anchor" href="#_1-3-10-缓存系统"><span>1.3.10 缓存系统</span></a></h2><ul><li><p>访问web站点的某一个服务会发现执行比较慢，这种情况发生的原因可能情况</p><ul><li>后端的复杂计算靠逻辑</li><li>访问数据库系统或者文件系统造成的I/O延迟</li></ul></li><li><p>提高web站点执行效率的方法：使用缓存</p></li><li><p>将经常被用户访问的页面结构保存下来，再次访问是只需要返回缓存的结果即可</p></li><li><p>Django能够无实现不同级别的缓存粒度</p><ul><li>缓存单个视图的结果输出</li><li>缓存难以生成的片段</li><li>缓存整个网站</li></ul></li><li><p>Django支持多种缓存类型</p><ul><li>Memcached</li><li>数据库</li><li>文件系统等</li><li>或者根据需要开启一种或者多种缓存类型</li></ul></li><li><p>例子：缓存一个视图的结果</p></li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>views<span class="token punctuation">.</span>decorators<span class="token punctuation">.</span>cache <span class="token keyword">import</span> cache_page</span>
<span class="line"><span class="token decorator annotation punctuation">@cache_page</span><span class="token punctuation">(</span><span class="token number">60</span> <span class="token operator">*</span> <span class="token number">15</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">def</span> <span class="token function">hello_django</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token keyword">pass</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>上面的代码，只比原来的视图函数多了一个cache_page装饰器，就可以将视图的结果缓存15分钟（装饰器的参数是秒）</li></ul>`,20))])}const d=t(c,[["render",r],["__file","1.3 Django主要功能模块.html.vue"]]),m=JSON.parse('{"path":"/fpython/htmlsystem/Django/chapter-01%EF%BC%9ADjango%E6%A1%86%E6%9E%B6%E8%AE%A4%E8%AF%86/1.3%20Django%E4%B8%BB%E8%A6%81%E5%8A%9F%E8%83%BD%E6%A8%A1%E5%9D%97.html","title":"1.3 Django 主要功能模块","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.3.1 Django中的ORM","slug":"_1-3-1-django中的orm","link":"#_1-3-1-django中的orm","children":[{"level":3,"title":"ORM：对象映射关系","slug":"orm-对象映射关系","link":"#orm-对象映射关系","children":[]}]},{"level":2,"title":"1.3.2 用户模块与权限系统","slug":"_1-3-2-用户模块与权限系统","link":"#_1-3-2-用户模块与权限系统","children":[{"level":3,"title":"设计思想，思考","slug":"设计思想-思考","link":"#设计思想-思考","children":[]},{"level":3,"title":"用户模块","slug":"用户模块","link":"#用户模块","children":[]}]},{"level":2,"title":"1.3.3 Admin后台管理系统","slug":"_1-3-3-admin后台管理系统","link":"#_1-3-3-admin后台管理系统","children":[]},{"level":2,"title":"1.3.4 视图","slug":"_1-3-4-视图","link":"#_1-3-4-视图","children":[]},{"level":2,"title":"1.3.5 模板系统","slug":"_1-3-5-模板系统","link":"#_1-3-5-模板系统","children":[]},{"level":2,"title":"1.3.6 表单系统Form","slug":"_1-3-6-表单系统form","link":"#_1-3-6-表单系统form","children":[]},{"level":2,"title":"1.3.7 信号机制","slug":"_1-3-7-信号机制","link":"#_1-3-7-信号机制","children":[]},{"level":2,"title":"1.3.8 路由系统","slug":"_1-3-8-路由系统","link":"#_1-3-8-路由系统","children":[]},{"level":2,"title":"1.3.9 中间件","slug":"_1-3-9-中间件","link":"#_1-3-9-中间件","children":[]},{"level":2,"title":"1.3.10 缓存系统","slug":"_1-3-10-缓存系统","link":"#_1-3-10-缓存系统","children":[]}],"git":{"updatedTime":1735029308000,"contributors":[{"name":"Linkefou","username":"Linkefou","email":"wlh724567296@163.com","commits":1},{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":2}]},"filePathRelative":"fpython/htmlsystem/Django/chapter-01：Django框架认识/1.3 Django主要功能模块.md"}');export{d as comp,m as data};
