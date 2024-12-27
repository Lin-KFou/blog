import{_ as e,c as p,a as s,b as a,d as l,e as o,f as i,r as c,o as r}from"./app-BCC5ysrj.js";const u={},m={class:"vuepress-toc"},d={class:"vuepress-toc-item"};function k(b,n){const t=c("router-link");return r(),p("div",null,[n[1]||(n[1]=s("h1",{id:"smtplib-邮件发送库",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#smtplib-邮件发送库"},[s("span",null,[s("code",null,"smtplib"),a("：邮件发送库")])])],-1)),s("nav",m,[s("ul",null,[s("li",d,[l(t,{to:"#smtplib模块额常用类与方法"},{default:o(()=>n[0]||(n[0]=[a("smtplib模块额常用类与方法")])),_:1})])])]),n[2]||(n[2]=i(`<h2 id="smtplib模块额常用类与方法" tabindex="-1"><a class="header-anchor" href="#smtplib模块额常用类与方法"><span>smtplib模块额常用类与方法</span></a></h2><ul><li><p>SMTP类定义 smtplib.SMTP(host[,port[,local_hostname[,timeout]]])，作为SMTP的构造函数。功能是与smtp服务器建立连接。连接成功，就可以向服务器发送相关请求</p></li><li><p>有： 登录 校验 发送 退出</p></li><li><p>host参数：表示 远程smtp主机地址。 如 smtp.163.com</p></li><li><p>port参数：表示 连接端口。 默认为25</p></li><li><p>local_hostname参数：作用是在本地主机的FQDN（完整域名）发送HELO/EHLO（标识用户身份）指令。</p></li><li><p>timeout参数： 为连接或尝试在多少秒超时</p></li><li><p>SMTP类具有下面方法：</p><ul><li><p>SMTP.connect([host[,port]])方法：连接远程smtp主机方法。</p><ul><li>host：为主机地址</li><li>port：为远程主机smtp端口，默认 25</li><li>也可以知己使用 host:port 形式来标识，比如： SMTP.connect(&quot;smtp.163.com&quot;,&quot;25&quot;)</li></ul></li><li><p>SMTP.login(user,password)方法，远程smtp主机的校验方法，参数为用户名密码</p><ul><li>SMTP.login(&quot;<a href="mailto:python@163.com" target="_blank" rel="noopener noreferrer">python@163.com</a>&quot;,&quot;123456&quot;)</li></ul></li><li><p>SMTP.sendmail(from_addr,to_addrs,msg[,mail_options,rcpt_options])方法，实现邮件的发送功能。</p><ul><li>参数依次是：发件人，收件人，邮件内容</li><li>SMTP.sendmail(&quot;<a href="mailto:python@163.com" target="_blank" rel="noopener noreferrer">python@163.com</a>&quot;,&quot;<a href="mailto:demo@163.com" target="_blank" rel="noopener noreferrer">demo@163.com</a>&quot;,body) body内容定义如下 &#39;&#39;&#39; FROM：<a href="mailto:abc@163.com" target="_blank" rel="noopener noreferrer">abc@163.com</a> To: <a href="mailto:demo@163.com" target="_blank" rel="noopener noreferrer">demo@163.com</a> subject:test mail test mail body &#39;&#39;&#39;</li></ul></li><li><p>SMTP.starttls([keyfile[,certfile]]) 启用TLS（安全传输）模式，所有SMTP指令都将加密传输。</p><ul><li>使用gmail的smtp服务时需要启动此项才能正常发送邮件。</li></ul></li><li><p>SMTP.quit() 方法，断开SMTP服务器的连接</p></li></ul></li></ul><div class="language-python line-numbers-mode" data-highlighter="prismjs" data-ext="py" data-title="py"><pre><code><span class="line"><span class="token comment"># 案例 使用163邮箱向QQ邮箱发送测试邮件</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> smtplib</span>
<span class="line"><span class="token keyword">import</span> string</span>
<span class="line"></span>
<span class="line">HOST <span class="token operator">=</span> <span class="token string">&quot;smtp.163.com&quot;</span>     <span class="token comment"># 定义smtp主机</span></span>
<span class="line">SUBJECT <span class="token operator">=</span> <span class="token string">&quot;Test email form wli&quot;</span>     <span class="token comment"># 定义邮件主题</span></span>
<span class="line">TO <span class="token operator">=</span> <span class="token string">&quot;xxxx@qq.com&quot;</span>      <span class="token comment"># 定义收件人邮件地址</span></span>
<span class="line">FROM <span class="token operator">=</span> <span class="token string">&quot;xxxx@163.com&quot;</span>      <span class="token comment"># 定义发件人的邮件地址</span></span>
<span class="line">text <span class="token operator">=</span> <span class="token string">&quot;this is a testing&quot;</span>         <span class="token comment"># 邮件的内容</span></span>
<span class="line">string <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&#39;&#39;&#39;FROM: </span><span class="token interpolation"><span class="token punctuation">{</span>FROM<span class="token punctuation">}</span></span><span class="token string"> </span>
<span class="line">        TO: </span><span class="token interpolation"><span class="token punctuation">{</span>TO<span class="token punctuation">}</span></span><span class="token string"></span>
<span class="line">        Subject: </span><span class="token interpolation"><span class="token punctuation">{</span>SUBJECT<span class="token punctuation">}</span></span><span class="token string"></span>
<span class="line">        &#39;&#39;&#39;</span></span></span>
<span class="line"><span class="token builtin">type</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span></span>
<span class="line">BODY <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>string<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">print</span><span class="token punctuation">(</span>BODY<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">server <span class="token operator">=</span> smtplib<span class="token punctuation">.</span>SMTP<span class="token punctuation">(</span><span class="token punctuation">)</span>                <span class="token comment"># 创建一个SMTP()对象</span></span>
<span class="line">server<span class="token punctuation">.</span>connect<span class="token punctuation">(</span>HOST<span class="token punctuation">,</span><span class="token string">&quot;25&quot;</span><span class="token punctuation">)</span>              <span class="token comment"># 通过connect方法连接smtp主机</span></span>
<span class="line"><span class="token comment"># server.starttls()                      # 启动安全传输模式</span></span>
<span class="line">server<span class="token punctuation">.</span>login<span class="token punctuation">(</span><span class="token string">&quot;xxxx@163.com&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;xxxxx&quot;</span><span class="token punctuation">)</span>      <span class="token comment"># 链接到服务器</span></span>
<span class="line">server<span class="token punctuation">.</span>sendmail<span class="token punctuation">(</span>FROM<span class="token punctuation">,</span>TO<span class="token punctuation">,</span>string<span class="token punctuation">)</span>        <span class="token comment"># 发送邮件</span></span>
<span class="line">server<span class="token punctuation">.</span>quit<span class="token punctuation">(</span><span class="token punctuation">)</span>                          <span class="token comment"># 断开SMTP链接</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3))])}const h=e(u,[["render",k],["__file","library-smtplib.html.vue"]]),g=JSON.parse('{"path":"/fpython/library/library/library-smtplib.html","title":"smtplib：邮件发送库","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"smtplib模块额常用类与方法","slug":"smtplib模块额常用类与方法","link":"#smtplib模块额常用类与方法","children":[]}],"git":{"updatedTime":1735029308000,"contributors":[{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":6}]},"filePathRelative":"fpython/library/library/library-smtplib.md"}');export{h as comp,g as data};
