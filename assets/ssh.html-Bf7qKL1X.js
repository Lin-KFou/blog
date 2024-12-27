import{_ as t,c as p,a as n,d as e,e as l,f as r,r as c,o,b as i}from"./app-BCC5ysrj.js";const d={},m={class:"vuepress-toc"},u={class:"vuepress-toc-item"},h={class:"vuepress-toc-item"},v={class:"vuepress-toc-item"},b={class:"vuepress-toc-item"},k={class:"vuepress-toc-item"},f={class:"vuepress-toc-item"},g={class:"vuepress-toc-item"},_={class:"vuepress-toc-item"},S={class:"vuepress-toc-item"},x={class:"vuepress-toc-item"},H={class:"vuepress-toc-item"},y={class:"vuepress-toc-item"},w={class:"vuepress-toc-item"},q={class:"vuepress-toc-item"},j={class:"vuepress-toc-item"};function P(C,s){const a=c("router-link");return o(),p("div",null,[s[15]||(s[15]=n("h1",{id:"linux-ssh命令",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#linux-ssh命令"},[n("span",null,"linux ssh命令")])],-1)),n("nav",m,[n("ul",null,[n("li",u,[e(a,{to:"#简介"},{default:l(()=>s[0]||(s[0]=[i("简介")])),_:1}),n("ul",null,[n("li",h,[e(a,{to:"#基本特点"},{default:l(()=>s[1]||(s[1]=[i("基本特点")])),_:1})])])]),n("li",v,[e(a,{to:"#ssh的加密技术"},{default:l(()=>s[2]||(s[2]=[i("SSH的加密技术")])),_:1}),n("ul",null,[n("li",b,[e(a,{to:"#ssh1-vs-ssh2"},{default:l(()=>s[3]||(s[3]=[i("SSH1 vs SSH2")])),_:1})])])]),n("li",k,[e(a,{to:"#基本配置"},{default:l(()=>s[4]||(s[4]=[i("基本配置")])),_:1}),n("ul",null,[n("li",f,[e(a,{to:"#服务端配置"},{default:l(()=>s[5]||(s[5]=[i("服务端配置")])),_:1})]),n("li",g,[e(a,{to:"#客户端命令"},{default:l(()=>s[6]||(s[6]=[i("客户端命令")])),_:1})]),n("li",_,[e(a,{to:"#文件传输"},{default:l(()=>s[7]||(s[7]=[i("文件传输")])),_:1})])])]),n("li",S,[e(a,{to:"#免密登录配置"},{default:l(()=>s[8]||(s[8]=[i("免密登录配置")])),_:1}),n("ul",null,[n("li",x,[e(a,{to:"#_1-生成密钥对"},{default:l(()=>s[9]||(s[9]=[i("1. 生成密钥对")])),_:1})]),n("li",H,[e(a,{to:"#_2-分发公钥"},{default:l(()=>s[10]||(s[10]=[i("2. 分发公钥")])),_:1})])])]),n("li",y,[e(a,{to:"#故障排查"},{default:l(()=>s[11]||(s[11]=[i("故障排查")])),_:1}),n("ul",null,[n("li",w,[e(a,{to:"#_1-连接测试"},{default:l(()=>s[12]||(s[12]=[i("1. 连接测试")])),_:1})]),n("li",q,[e(a,{to:"#_2-调试模式"},{default:l(()=>s[13]||(s[13]=[i("2. 调试模式")])),_:1})])])]),n("li",j,[e(a,{to:"#安全建议"},{default:l(()=>s[14]||(s[14]=[i("安全建议")])),_:1})])])]),s[16]||(s[16]=r(`<hr><h2 id="简介" tabindex="-1"><a class="header-anchor" href="#简介"><span>简介</span></a></h2><p>SSH (Secure Shell) 是一种加密的网络传输协议，可以在不安全的网络中为网络服务提供安全的传输环境。</p><h3 id="基本特点" tabindex="-1"><a class="header-anchor" href="#基本特点"><span>基本特点</span></a></h3><ul><li>默认端口：22</li><li>进程名：sshd (守护进程)</li><li>主要组件： <ul><li>openssh：提供 SSH 服务</li><li>openssl：提供加密程序</li></ul></li></ul><h2 id="ssh的加密技术" tabindex="-1"><a class="header-anchor" href="#ssh的加密技术"><span>SSH的加密技术</span></a></h2><h3 id="ssh1-vs-ssh2" tabindex="-1"><a class="header-anchor" href="#ssh1-vs-ssh2"><span>SSH1 vs SSH2</span></a></h3><ol><li><p><strong>SSH1</strong></p><ul><li>不验证客户端密钥</li><li>安全性较低</li></ul></li><li><p><strong>SSH2</strong></p><ul><li>使用 Diffie-Hellman 密钥交换</li><li>支持 RSA 和 DSA 密钥</li><li>RSA：支持加密和数字签名</li><li>DSA：仅支持数字签名</li></ul></li></ol><h2 id="基本配置" tabindex="-1"><a class="header-anchor" href="#基本配置"><span>基本配置</span></a></h2><h3 id="服务端配置" tabindex="-1"><a class="header-anchor" href="#服务端配置"><span>服务端配置</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 查看配置文件</span></span>
<span class="line"><span class="token function">vim</span> /etc/ssh/sshd_config</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 服务管理</span></span>
<span class="line">systemctl start sshd    <span class="token comment"># 启动</span></span>
<span class="line">systemctl stop sshd     <span class="token comment"># 停止</span></span>
<span class="line">systemctl restart sshd  <span class="token comment"># 重启</span></span>
<span class="line">systemctl reload sshd   <span class="token comment"># 重载配置</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="客户端命令" tabindex="-1"><a class="header-anchor" href="#客户端命令"><span>客户端命令</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 远程登录</span></span>
<span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-p22</span> username@hostname</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 远程执行命令</span></span>
<span class="line"><span class="token function">ssh</span> username@hostname <span class="token string">&quot;ls /root&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 远程执行脚本</span></span>
<span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-t</span> username@hostname <span class="token string">&quot;bash /path/to/script.sh&quot;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看已知主机</span></span>
<span class="line"><span class="token function">cat</span> ~/.ssh/known_hosts</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="文件传输" tabindex="-1"><a class="header-anchor" href="#文件传输"><span>文件传输</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># SCP 命令</span></span>
<span class="line"><span class="token function">scp</span> <span class="token parameter variable">-P22</span> <span class="token parameter variable">-r</span> local_file username@hostname:/remote_path  <span class="token comment"># 上传</span></span>
<span class="line"><span class="token function">scp</span> <span class="token parameter variable">-P22</span> username@hostname:/remote_file local_path     <span class="token comment"># 下载</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># SFTP 命令</span></span>
<span class="line"><span class="token function">sftp</span> <span class="token parameter variable">-P22</span> username@hostname</span>
<span class="line">put local_file                  <span class="token comment"># 上传文件</span></span>
<span class="line">get remote_file                 <span class="token comment"># 下载文件</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="免密登录配置" tabindex="-1"><a class="header-anchor" href="#免密登录配置"><span>免密登录配置</span></a></h2><h3 id="_1-生成密钥对" tabindex="-1"><a class="header-anchor" href="#_1-生成密钥对"><span>1. 生成密钥对</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 进入 .ssh 目录</span></span>
<span class="line"><span class="token builtin class-name">cd</span> ~/.ssh</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 生成密钥对</span></span>
<span class="line">ssh-keygen <span class="token parameter variable">-t</span> rsa</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-分发公钥" tabindex="-1"><a class="header-anchor" href="#_2-分发公钥"><span>2. 分发公钥</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 复制公钥到目标服务器</span></span>
<span class="line">ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub username@hostname</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 指定端口</span></span>
<span class="line">ssh-copy-id <span class="token parameter variable">-i</span> ~/.ssh/id_rsa.pub <span class="token parameter variable">-p</span> port username@hostname</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="故障排查" tabindex="-1"><a class="header-anchor" href="#故障排查"><span>故障排查</span></a></h2><h3 id="_1-连接测试" tabindex="-1"><a class="header-anchor" href="#_1-连接测试"><span>1. 连接测试</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 测试网络连通性</span></span>
<span class="line"><span class="token function">ping</span> <span class="token function">hostname</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 测试端口连通性</span></span>
<span class="line">telnet <span class="token function">hostname</span> <span class="token number">22</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 查看服务状态</span></span>
<span class="line">systemctl status sshd</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-调试模式" tabindex="-1"><a class="header-anchor" href="#_2-调试模式"><span>2. 调试模式</span></a></h3><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre><code><span class="line"><span class="token comment"># 开启详细日志</span></span>
<span class="line"><span class="token function">ssh</span> <span class="token parameter variable">-vvv</span> username@hostname</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 检查防火墙</span></span>
<span class="line">systemctl status firewalld</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安全建议" tabindex="-1"><a class="header-anchor" href="#安全建议"><span>安全建议</span></a></h2><ol><li><p><strong>基本防护</strong></p><ul><li>修改默认端口</li><li>禁用 root 远程登录</li><li>使用密钥认证</li></ul></li><li><p><strong>访问控制</strong></p><ul><li>限制登录 IP</li><li>设置登录超时</li><li>限制登录失败次数</li></ul></li></ol><blockquote><p><strong>注意：</strong></p><ul><li>定期更新系统和 SSH 服务</li><li>保护好私钥文件</li><li>监控异常登录</li></ul></blockquote><hr><blockquote><p><strong>参考资料：</strong></p><ul><li><a href="https://www.openssh.com/manual.html" target="_blank" rel="noopener noreferrer">OpenSSH 文档</a></li><li><a href="https://www.ssh.com/ssh/protocol/" target="_blank" rel="noopener noreferrer">SSH 安全指南</a></li></ul></blockquote>`,30))])}const A=t(d,[["render",P],["__file","ssh.html.vue"]]),V=JSON.parse('{"path":"/flinux/Commands/ssh/ssh.html","title":"linux ssh命令","lang":"zh-CN","frontmatter":{},"headers":[{"level":2,"title":"简介","slug":"简介","link":"#简介","children":[{"level":3,"title":"基本特点","slug":"基本特点","link":"#基本特点","children":[]}]},{"level":2,"title":"SSH的加密技术","slug":"ssh的加密技术","link":"#ssh的加密技术","children":[{"level":3,"title":"SSH1 vs SSH2","slug":"ssh1-vs-ssh2","link":"#ssh1-vs-ssh2","children":[]}]},{"level":2,"title":"基本配置","slug":"基本配置","link":"#基本配置","children":[{"level":3,"title":"服务端配置","slug":"服务端配置","link":"#服务端配置","children":[]},{"level":3,"title":"客户端命令","slug":"客户端命令","link":"#客户端命令","children":[]},{"level":3,"title":"文件传输","slug":"文件传输","link":"#文件传输","children":[]}]},{"level":2,"title":"免密登录配置","slug":"免密登录配置","link":"#免密登录配置","children":[{"level":3,"title":"1. 生成密钥对","slug":"_1-生成密钥对","link":"#_1-生成密钥对","children":[]},{"level":3,"title":"2. 分发公钥","slug":"_2-分发公钥","link":"#_2-分发公钥","children":[]}]},{"level":2,"title":"故障排查","slug":"故障排查","link":"#故障排查","children":[{"level":3,"title":"1. 连接测试","slug":"_1-连接测试","link":"#_1-连接测试","children":[]},{"level":3,"title":"2. 调试模式","slug":"_2-调试模式","link":"#_2-调试模式","children":[]}]},{"level":2,"title":"安全建议","slug":"安全建议","link":"#安全建议","children":[]}],"git":{"updatedTime":1704443882000,"contributors":[{"name":"Linkefou","username":"Linkefou","email":"wlh724567296@163.com","commits":1},{"name":"wanglinhao","username":"wanglinhao","email":"wanglinhao@wegooooo.com","commits":2}]},"filePathRelative":"flinux/Commands/ssh/ssh.md"}');export{A as comp,V as data};
