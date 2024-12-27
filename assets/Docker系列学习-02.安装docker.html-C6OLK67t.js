import{_ as c,c as p,a as n,d as e,e as l,f as t,r as o,o as r,b as i}from"./app-BCC5ysrj.js";const d={},m={class:"vuepress-toc"},u={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"};function x(y,s){const a=o("router-link");return r(),p("div",null,[s[8]||(s[8]=n("h1",{id:"_02-docker安装",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_02-docker安装"},[n("span",null,"02. Docker安装")])],-1)),n("nav",m,[n("ul",null,[n("li",u,[e(a,{to:"#_1-实验前的准备"},{default:l(()=>s[0]||(s[0]=[i("1.实验前的准备")])),_:1}),n("ul",null,[n("li",v,[e(a,{to:"#_1-1-环境要求"},{default:l(()=>s[1]||(s[1]=[i("1.1 环境要求")])),_:1})])])]),n("li",k,[e(a,{to:"#_2-步骤"},{default:l(()=>s[2]||(s[2]=[i("2.步骤")])),_:1}),n("ul",null,[n("li",b,[e(a,{to:"#_2-1-主机配置"},{default:l(()=>s[3]||(s[3]=[i("2.1 主机配置")])),_:1})]),n("li",h,[e(a,{to:"#_2-2-配置软件源"},{default:l(()=>s[4]||(s[4]=[i("2.2 配置软件源")])),_:1})]),n("li",_,[e(a,{to:"#_2-3-安装-docker"},{default:l(()=>s[5]||(s[5]=[i("2.3 安装 Docker")])),_:1})])])]),n("li",g,[e(a,{to:"#_3-docker-基本命令"},{default:l(()=>s[6]||(s[6]=[i("3. Docker 基本命令")])),_:1}),n("ul",null,[n("li",f,[e(a,{to:"#_3-1-镜像管理"},{default:l(()=>s[7]||(s[7]=[i("3.1 镜像管理")])),_:1})])])])])]),s[9]||(s[9]=t(`<hr><h2 id="_1-实验前的准备" tabindex="-1"><a class="header-anchor" href="#_1-实验前的准备"><span>1.实验前的准备</span></a></h2><h3 id="_1-1-环境要求" tabindex="-1"><a class="header-anchor" href="#_1-1-环境要求"><span>1.1 环境要求</span></a></h3><ul><li>准备两台虚拟机 <ul><li>docker1：192.168.76.128</li><li>docker2：192.168.79.128</li></ul></li><li>关闭防火墙</li><li>确保网络互通</li></ul><h2 id="_2-步骤" tabindex="-1"><a class="header-anchor" href="#_2-步骤"><span>2.步骤</span></a></h2><h3 id="_2-1-主机配置" tabindex="-1"><a class="header-anchor" href="#_2-1-主机配置"><span>2.1 主机配置</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 配置主机名和网络 - docker1</span></span>
<span class="line"><span class="token comment"># 配置两台虚拟机的网卡</span></span>
<span class="line"><span class="token comment"># docker1机器</span></span>
<span class="line"><span class="token comment"># docker1 &gt; /etc/hostname</span></span>
<span class="line"><span class="token comment"># hostname docker1</span></span>
<span class="line"><span class="token comment"># systemctl restart network</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置主机名和网络 - docker2</span></span>
<span class="line"><span class="token comment"># docker2机器</span></span>
<span class="line"><span class="token comment"># docker2 &gt; /etc/hostname </span></span>
<span class="line"><span class="token comment"># hostname docker2</span></span>
<span class="line"><span class="token comment"># systemctl restart network</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置 SSH 免密登录</span></span>
<span class="line"><span class="token comment"># 做免密</span></span>
<span class="line"><span class="token comment"># docker1</span></span>
<span class="line"><span class="token comment"># ssh-keygen -t rsa</span></span>
<span class="line"><span class="token comment"># ssh-copy-id -i /root/.ssh/id_rsa.pub 192.168.76.129</span></span>
<span class="line"><span class="token comment"># ssh 192.168.76.129  /不用密码登陆上去说明成功</span></span>
<span class="line"><span class="token comment"># exit</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># docker2</span></span>
<span class="line"><span class="token comment"># ssh-keygen -t rsa</span></span>
<span class="line"><span class="token comment"># ssh-copy-id -i /root/.ssh/id_rsa.pub 192.168.76.128</span></span>
<span class="line"><span class="token comment"># ssh 192.168.76.128   /不用密码登陆上去说明成功</span></span>
<span class="line"><span class="token comment"># exit</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-配置软件源" tabindex="-1"><a class="header-anchor" href="#_2-2-配置软件源"><span>2.2 配置软件源</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 配置 Docker CE 源</span></span>
<span class="line"><span class="token comment"># wget -O /etc/yum.repos.d/docker-ce.repo https://download.docker.com/linux/centos/docker-ce.repo</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置阿里云源</span></span>
<span class="line"><span class="token comment"># vim /etc/yum.repos.d/aliyun.repo</span></span>
<span class="line"><span class="token punctuation">[</span>aliyun<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">name</span><span class="token operator">=</span>aliyun</span>
<span class="line"><span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://mirrors.aliyun.com/centos/7/os/x86_64/</span>
<span class="line"><span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line"><span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置 Docker 稳定版源</span></span>
<span class="line"><span class="token comment"># vim /etc/yum.repos.d/docker.repo</span></span>
<span class="line"><span class="token punctuation">[</span>docker-ce-stable<span class="token punctuation">]</span></span>
<span class="line"><span class="token assign-left variable">name</span><span class="token operator">=</span>Docker CE Stable - <span class="token variable">$basearch</span></span>
<span class="line"><span class="token assign-left variable">baseurl</span><span class="token operator">=</span>https://download.docker.com/linux/centos/7/<span class="token variable">$basearch</span>/stable</span>
<span class="line"><span class="token assign-left variable">enabled</span><span class="token operator">=</span><span class="token number">1</span></span>
<span class="line"><span class="token assign-left variable">gpgcheck</span><span class="token operator">=</span><span class="token number">0</span></span>
<span class="line"><span class="token assign-left variable">gpgkey</span><span class="token operator">=</span>https://download.docker.com/linux/centos/gpg</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 同步配置到其他节点</span></span>
<span class="line"><span class="token function">scp</span> /etc/yum.repos.d/docker* <span class="token number">192.168</span>.76.129:/etc/yum.repos.d/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新 YUM 缓存</span></span>
<span class="line">yum makecache</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-安装-docker" tabindex="-1"><a class="header-anchor" href="#_2-3-安装-docker"><span>2.3 安装 Docker</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装依赖包</span></span>
<span class="line"><span class="token function">wget</span> ftp://mirror.switch.ch/pool/4/mirror/scientificlinux/7x/external_products/extras/x86_64/container-selinux-2.9-4.el7.noarch.rpm</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装 Docker CE</span></span>
<span class="line">yum <span class="token parameter variable">-y</span> <span class="token function">install</span> docker-ce</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 启动 Docker 服务</span></span>
<span class="line">systemctl start <span class="token function">docker</span></span>
<span class="line">systemctl <span class="token builtin class-name">enable</span> <span class="token function">docker</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 验证安装</span></span>
<span class="line"><span class="token function">docker</span> version</span>
<span class="line"><span class="token function">docker</span> info</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-docker-基本命令" tabindex="-1"><a class="header-anchor" href="#_3-docker-基本命令"><span>3. Docker 基本命令</span></a></h2><h3 id="_3-1-镜像管理" tabindex="-1"><a class="header-anchor" href="#_3-1-镜像管理"><span>3.1 镜像管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 拉取镜像</span></span>
<span class="line"><span class="token function">docker</span> pull <span class="token operator">&lt;</span>镜像名<span class="token operator">&gt;</span><span class="token punctuation">[</span>:标签<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看镜像</span></span>
<span class="line"><span class="token function">docker</span> images</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看镜像历史</span></span>
<span class="line"><span class="token function">docker</span> <span class="token function">history</span> <span class="token operator">&lt;</span>镜像名<span class="token operator">&gt;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 导出导入镜像</span></span>
<span class="line"><span class="token function">docker</span> save <span class="token operator">&lt;</span>镜像名<span class="token operator">&gt;</span><span class="token punctuation">[</span>:标签<span class="token punctuation">]</span> <span class="token operator">&gt;</span> <span class="token operator">&lt;</span>文件名<span class="token operator">&gt;</span>.tar</span>
<span class="line"><span class="token function">docker</span> load <span class="token operator">&lt;</span> <span class="token operator">&lt;</span>文件名<span class="token operator">&gt;</span>.tar</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除镜像</span></span>
<span class="line"><span class="token function">docker</span> rmi <span class="token operator">&lt;</span>镜像名<span class="token operator">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,14))])}const E=c(d,[["render",x],["__file","Docker系列学习-02.安装docker.html.vue"]]),w=JSON.parse('{"path":"/flinux/Kubernetes/Docker%E7%B3%BB%E5%88%97%E5%AD%A6%E4%B9%A0/Docker%E7%B3%BB%E5%88%97%E5%AD%A6%E4%B9%A0-02.%E5%AE%89%E8%A3%85docker.html","title":"02. Docker安装","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"1.实验前的准备","slug":"_1-实验前的准备","link":"#_1-实验前的准备","children":[{"level":3,"title":"1.1 环境要求","slug":"_1-1-环境要求","link":"#_1-1-环境要求","children":[]}]},{"level":2,"title":"2.步骤","slug":"_2-步骤","link":"#_2-步骤","children":[{"level":3,"title":"2.1 主机配置","slug":"_2-1-主机配置","link":"#_2-1-主机配置","children":[]},{"level":3,"title":"2.2 配置软件源","slug":"_2-2-配置软件源","link":"#_2-2-配置软件源","children":[]},{"level":3,"title":"2.3 安装 Docker","slug":"_2-3-安装-docker","link":"#_2-3-安装-docker","children":[]}]},{"level":2,"title":"3. Docker 基本命令","slug":"_3-docker-基本命令","link":"#_3-docker-基本命令","children":[{"level":3,"title":"3.1 镜像管理","slug":"_3-1-镜像管理","link":"#_3-1-镜像管理","children":[]}]}],"git":{"updatedTime":1709276200000,"contributors":[{"name":"Linkefou","username":"Linkefou","email":"wlh724567296@163.com","commits":1},{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":2}]},"filePathRelative":"flinux/Kubernetes/Docker系列学习/Docker系列学习-02.安装docker.md"}');export{E as comp,w as data};
