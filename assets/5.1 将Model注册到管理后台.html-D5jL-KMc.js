import{_ as a,c as s,f as e,o as l}from"./app-BCC5ysrj.js";const i={};function p(o,n){return l(),s("div",null,n[0]||(n[0]=[e(`<h1 id="_5-1-将model注册到管理后台" tabindex="-1"><a class="header-anchor" href="#_5-1-将model注册到管理后台"><span>5.1 将Model注册到管理后台</span></a></h1><ul><li><a href="#51-%E5%B0%86model%E6%B3%A8%E5%86%8C%E5%88%B0%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0">5.1 将Model注册到管理后台</a><ul><li><a href="#511-%E5%90%AF%E7%94%A8%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0%E7%9A%84%E5%87%86%E5%A4%87%E5%B7%A5%E4%BD%9C">5.1.1 启用管理后台的准备工作</a><ul><li><a href="#1-settingspy%E6%96%87%E4%BB%B6%E4%B8%AD%E7%9A%84%E9%85%8D%E7%BD%AE">1. settings.py文件中的配置</a></li><li><a href="#2-%E5%BA%94%E7%94%A8%E6%95%B0%E6%8D%AE%E5%BA%93%E8%BF%81%E7%A7%BB">2. 应用数据库迁移</a></li><li><a href="#3%E5%88%9B%E5%BB%BA%E7%94%A8%E6%88%B7%E5%B9%B6%E6%8E%88%E4%BA%88%E8%AE%BF%E9%97%AE%E6%9D%83%E9%99%90">3.创建用户并授予访问权限</a></li></ul></li><li><a href="#512-%E5%AE%9E%E7%8E%B0model%E7%9A%84%E6%B3%A8%E5%86%8C">5.1.2 实现Model的注册</a><ul><li><a href="#1-%E5%9C%A8adminpy%E6%96%87%E4%BB%B6%E4%B8%AD%E5%A3%B0%E6%98%8E">1. 在admin.py文件中声明</a></li><li><a href="#2-%E8%AE%BE%E7%BD%AE%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0%E7%9A%84%E8%B7%AF%E7%94%B1">2. 设置管理后台的路由</a></li></ul></li></ul></li></ul><hr><h2 id="_5-1-1-启用管理后台的准备工作" tabindex="-1"><a class="header-anchor" href="#_5-1-1-启用管理后台的准备工作"><span>5.1.1 启用管理后台的准备工作</span></a></h2><p>Django提供的管理后台位于 django.contrib.admin包中。查看目录结果可以了解也是一个应用，是Django框架内置的应用<br> 启动管理后台（Admin），需要做一些准备工作</p><h3 id="_1-settings-py文件中的配置" tabindex="-1"><a class="header-anchor" href="#_1-settings-py文件中的配置"><span>1. settings.py文件中的配置</span></a></h3><p>Django项目在启动的时候会根据settings.py文件中定义的INSTALLED_APPS加载应用，由于Admin也是一个应用，所以，想要使用它就需要把django.contrib.admin加入INSTALLED_APPS中。添加Admin应用是Django的默认行为，这一步在创建项目生成目录结构的时候就已经完成了<br> Admin应用有四个依赖应用，它们都位于django.contrib包中，所以，同样需要将它们加入INSTALLED_APPS中。</p><ul><li><p>django.contrib.auth：用户与权限认证应用</p></li><li><p>django.contrib.contenttypes：对Model提供更高层次抽象接口的应用，同时auth应用也需要依赖它</p></li><li><p>django.contrib.sessions：保存用户状态的会话应用</p></li><li><p>django.contrib.messages：消息应用</p><p>上面的四个应用默认会在创建项目的时候自动添加，不需要额外配置</p></li></ul><p>有些应用需要与中间件配合，所以需要在<strong>MIDDLEWARE</strong>中加入需要的中间件</p><ul><li><p>django.contrib.sessions.middleware.SessionMiddleware：实现会话应用的会话中间件</p></li><li><p>django.middleware.common.CommonMiddleware：对URL执行重写的中间件</p></li><li><p>django.contrib.auth.middleware.AuthenticationMiddleware：验证用户身份的认证中间件</p></li><li><p>django.contrib.messages.middleware.MessageMiddleware：用来支持消息应用的中间件。</p><p>上面的中间件也是自动添加的</p></li></ul><blockquote><p>需要注意：中间件的顺序非常重要，改变其定义的顺序可能会导致应用不可用</p></blockquote><p>TEMPLATES是关于模板相关的配置，要使用管理后台，需要在DjangoTemplates后端的context_processors（上下文处理器）选项中添加。</p><ul><li><p>django.contrib.auth.context_processors.auth：用来在模板中访问用户和权限的上下文处理器</p></li><li><p>django.contrib.messages.context_processors.messages：用来支持消息应用的上下文处理器</p><p>模板的配置同样是由Django来完成的，所以，不需要对这里进行改动</p></li></ul><h3 id="_2-应用数据库迁移" tabindex="-1"><a class="header-anchor" href="#_2-应用数据库迁移"><span>2. 应用数据库迁移</span></a></h3><p>使用Django提供的数据库迁移命令创建各个应用定义的数据表。这在创建项目的时候已经完成了，所以，不需要重复操作</p><h3 id="_3-创建用户并授予访问权限" tabindex="-1"><a class="header-anchor" href="#_3-创建用户并授予访问权限"><span>3.创建用户并授予访问权限</span></a></h3><p>在管理后台中可以实现对Model实例对象的增加、删除和修改，这是非常简单且方便的，但同时这又是非常危险的，不应该每个用户都有这样的权限。由于还没有介绍Django内置的权限认证系统，因此这里只需要知道“超级用户”拥有所有的权限。在之前创建项目的内容中，使用了manage的createsuperuser命令创建名称为admin的超级用户，接下来就以这个用户登录管理后台并对Model进行操作。至此，启用管理后台功能的准备工作就已经结束了。这些都是Django的默认配置项，不需要做任何修改。如果没有特殊的要求或限制，应该遵循Django的建议，开启后台管理功能。</p><h2 id="_5-1-2-实现model的注册" tabindex="-1"><a class="header-anchor" href="#_5-1-2-实现model的注册"><span>5.1.2 实现Model的注册</span></a></h2><p>在创建一个app的时候，会定义Topic和Comment两个Model，现在，将它们注册到管理后台<br> 注册Model的方法</p><h3 id="_1-在admin-py文件中声明" tabindex="-1"><a class="header-anchor" href="#_1-在admin-py文件中声明"><span>1. 在admin.py文件中声明</span></a></h3><ul><li>把自定义的Model注册到管理后台就是要告诉Django哪些Model需要显示出来，即声明它们</li><li>使用 manage 的startapp命令在创建post应用的时候会自动创建admin.py文件，要把自定义的Model注册到管理后台需要在admin.py文件中声明</li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">from</span> django<span class="token punctuation">.</span>contrib <span class="token keyword">import</span> admin</span>
<span class="line"><span class="token keyword">from</span> post<span class="token punctuation">.</span>models <span class="token keyword">import</span> Topic<span class="token punctuation">,</span> Comment</span>
<span class="line">admin<span class="token punctuation">.</span>site<span class="token punctuation">.</span>register<span class="token punctuation">(</span><span class="token punctuation">[</span>Topic<span class="token punctuation">,</span> Comment<span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-设置管理后台的路由" tabindex="-1"><a class="header-anchor" href="#_2-设置管理后台的路由"><span>2. 设置管理后台的路由</span></a></h3><p>Django项目的路由配置由settings.py文件的ROOT_URLCONF变量指定，对应于my_bbs项目就是my_bbs/urls.py文件</p><p>默认情况下Django会在Model的名字后面加上字母s显示。如果要自定义这个名称，可以在Model的Meta中声明</p><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Topic</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span></span>
<span class="line">    verbose_name <span class="token operator">=</span> <span class="token string">u&#39;话题&#39;</span></span>
<span class="line">    verbose_name_plural <span class="token operator">=</span> <span class="token string">u&#39;话题&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">Comment</span><span class="token punctuation">(</span>BaseModel<span class="token punctuation">)</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token keyword">class</span> <span class="token class-name">Meta</span><span class="token punctuation">:</span></span>
<span class="line">    verbose_name <span class="token operator">=</span> <span class="token string">u&#39;话题评论&#39;</span></span>
<span class="line">    verbose_name_plural <span class="token operator">=</span> <span class="token string">u&#39;话题评论&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>对管理后台的操作比较简单，略过</p>`,27)]))}const d=a(i,[["render",p],["__file","5.1 将Model注册到管理后台.html.vue"]]),c=JSON.parse('{"path":"/fpython/htmlsystem/Django/chapter-05%EF%BC%9ADjango%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0/5.1%20%E5%B0%86Model%E6%B3%A8%E5%86%8C%E5%88%B0%E7%AE%A1%E7%90%86%E5%90%8E%E5%8F%B0.html","title":"5.1 将Model注册到管理后台","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"5.1.1 启用管理后台的准备工作","slug":"_5-1-1-启用管理后台的准备工作","link":"#_5-1-1-启用管理后台的准备工作","children":[{"level":3,"title":"1. settings.py文件中的配置","slug":"_1-settings-py文件中的配置","link":"#_1-settings-py文件中的配置","children":[]},{"level":3,"title":"2. 应用数据库迁移","slug":"_2-应用数据库迁移","link":"#_2-应用数据库迁移","children":[]},{"level":3,"title":"3.创建用户并授予访问权限","slug":"_3-创建用户并授予访问权限","link":"#_3-创建用户并授予访问权限","children":[]}]},{"level":2,"title":"5.1.2 实现Model的注册","slug":"_5-1-2-实现model的注册","link":"#_5-1-2-实现model的注册","children":[{"level":3,"title":"1. 在admin.py文件中声明","slug":"_1-在admin-py文件中声明","link":"#_1-在admin-py文件中声明","children":[]},{"level":3,"title":"2. 设置管理后台的路由","slug":"_2-设置管理后台的路由","link":"#_2-设置管理后台的路由","children":[]}]}],"git":{"updatedTime":1735029308000,"contributors":[{"name":"Linkefou","username":"Linkefou","email":"wlh724567296@163.com","commits":1},{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":3}]},"filePathRelative":"fpython/htmlsystem/Django/chapter-05：Django管理后台/5.1 将Model注册到管理后台.md"}');export{d as comp,c as data};
