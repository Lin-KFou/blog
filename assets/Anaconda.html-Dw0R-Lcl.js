import{_ as t,c,a as s,d as e,e as l,f as p,r as d,o as r,b as i}from"./app-BCC5ysrj.js";const o={},u={class:"vuepress-toc"},m={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"};function f(_,n){const a=d("router-link");return r(),c("div",null,[n[6]||(n[6]=s("h1",{id:"anaconda命令",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#anaconda命令"},[s("span",null,"Anaconda命令")])],-1)),s("nav",u,[s("ul",null,[s("li",m,[e(a,{to:"#基本命令"},{default:l(()=>n[0]||(n[0]=[i("基本命令")])),_:1}),s("ul",null,[s("li",v,[e(a,{to:"#环境管理"},{default:l(()=>n[1]||(n[1]=[i("环境管理")])),_:1})]),s("li",b,[e(a,{to:"#包管理"},{default:l(()=>n[2]||(n[2]=[i("包管理")])),_:1})]),s("li",h,[e(a,{to:"#jupyter-相关"},{default:l(()=>n[3]||(n[3]=[i("Jupyter 相关")])),_:1})]),s("li",k,[e(a,{to:"#镜像源配置"},{default:l(()=>n[4]||(n[4]=[i("镜像源配置")])),_:1})])])]),s("li",g,[e(a,{to:"#最佳实践"},{default:l(()=>n[5]||(n[5]=[i("最佳实践")])),_:1})])])]),n[7]||(n[7]=p(`<hr><h2 id="基本命令" tabindex="-1"><a class="header-anchor" href="#基本命令"><span>基本命令</span></a></h2><h3 id="环境管理" tabindex="-1"><a class="header-anchor" href="#环境管理"><span>环境管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看所有环境</span></span>
<span class="line">conda <span class="token function">env</span> list</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 创建新环境</span></span>
<span class="line">conda create <span class="token parameter variable">-n</span> myenv <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.8</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 激活环境</span></span>
<span class="line">conda activate myenv</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 退出环境</span></span>
<span class="line">conda deactivate</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="包管理" tabindex="-1"><a class="header-anchor" href="#包管理"><span>包管理</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看所有包</span></span>
<span class="line">conda list</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装包</span></span>
<span class="line">conda <span class="token function">install</span> package_name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新包</span></span>
<span class="line">conda update package_name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 删除包</span></span>
<span class="line">conda remove package_name</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 更新所有包</span></span>
<span class="line">conda update <span class="token parameter variable">--all</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="jupyter-相关" tabindex="-1"><a class="header-anchor" href="#jupyter-相关"><span>Jupyter 相关</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 安装 Jupyter</span></span>
<span class="line">conda <span class="token function">install</span> jupyter</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 安装 JupyterLab</span></span>
<span class="line">conda <span class="token function">install</span> <span class="token parameter variable">-c</span> conda-forge jupyterlab</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 重构 JupyterLab</span></span>
<span class="line">jupyter-lab build</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="镜像源配置" tabindex="-1"><a class="header-anchor" href="#镜像源配置"><span>镜像源配置</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看当前源</span></span>
<span class="line">conda config <span class="token parameter variable">--show</span> channels</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 添加清华源</span></span>
<span class="line">conda config <span class="token parameter variable">--add</span> channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/free/</span>
<span class="line">conda config <span class="token parameter variable">--add</span> channels https://mirrors.tuna.tsinghua.edu.cn/anaconda/pkgs/main/</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 显示源地址</span></span>
<span class="line">conda config <span class="token parameter variable">--set</span> show_channel_urls <span class="token function">yes</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="最佳实践" tabindex="-1"><a class="header-anchor" href="#最佳实践"><span>最佳实践</span></a></h2><ol><li><p><strong>环境管理</strong></p><ul><li>为不同项目创建独立环境</li><li>定期清理不用的环境</li><li>导出环境配置文件</li></ul></li><li><p><strong>包管理</strong></p><ul><li>使用 conda-forge 源</li><li>定期更新包</li><li>保持环境整洁</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li>创建环境指定 Python 版本</li><li>注意包的依赖关系</li><li>定期备份环境</li></ul></blockquote><hr><blockquote><p><strong>参考资料：</strong></p><ul><li><a href="https://docs.conda.io/" target="_blank" rel="noopener noreferrer">Conda 文档</a></li><li><a href="https://docs.anaconda.com/" target="_blank" rel="noopener noreferrer">Anaconda 文档</a></li></ul></blockquote>`,15))])}const x=t(o,[["render",f],["__file","Anaconda.html.vue"]]),j=JSON.parse('{"path":"/flinux/Anaconda/Anaconda.html","title":"Anaconda命令","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"基本命令","slug":"基本命令","link":"#基本命令","children":[{"level":3,"title":"环境管理","slug":"环境管理","link":"#环境管理","children":[]},{"level":3,"title":"包管理","slug":"包管理","link":"#包管理","children":[]},{"level":3,"title":"Jupyter 相关","slug":"jupyter-相关","link":"#jupyter-相关","children":[]},{"level":3,"title":"镜像源配置","slug":"镜像源配置","link":"#镜像源配置","children":[]}]},{"level":2,"title":"最佳实践","slug":"最佳实践","link":"#最佳实践","children":[]}],"git":{"updatedTime":1701020615000,"contributors":[{"name":"Linkefou","username":"Linkefou","email":"wlh724567296@163.com","commits":1}]},"filePathRelative":"flinux/Anaconda/Anaconda.md"}');export{x as comp,j as data};
