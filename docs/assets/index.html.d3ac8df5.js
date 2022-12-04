import{_ as n,o as s,c as a,a as e}from"./app.6f03b585.js";const t={},p=e(`<h2 id="docker-compose-\u5FEB\u901F\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#docker-compose-\u5FEB\u901F\u542F\u52A8" aria-hidden="true">#</a> Docker Compose \u5FEB\u901F\u542F\u52A8</h2><ol><li>\u521B\u5EFA <code>docker-compose.yaml</code> \u5E76\u7C98\u8D34\u4EE5\u4E0B\u5185\u5BB9</li></ol><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&quot;3.7&quot;</span>

<span class="token key atrule">services</span><span class="token punctuation">:</span>
  <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span>8.0.29
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 3306<span class="token punctuation">:</span><span class="token number">3306</span>
    <span class="token key atrule">command</span><span class="token punctuation">:</span> <span class="token punctuation">-</span><span class="token punctuation">-</span>init<span class="token punctuation">-</span>file /data/app/init.sql
    <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span>  /root/app/databasir/init.sql<span class="token punctuation">:</span>/data/app/init.sql
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">MYSQL_ROOT_USER</span><span class="token punctuation">:</span> root
      <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
      <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> databasir
    <span class="token key atrule">healthcheck</span><span class="token punctuation">:</span>
      <span class="token key atrule">test</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&quot;CMD&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;mysqladmin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ping&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;-h&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;localhost&quot;</span><span class="token punctuation">]</span>
      <span class="token key atrule">timeout</span><span class="token punctuation">:</span> 20s
      <span class="token key atrule">retries</span><span class="token punctuation">:</span> <span class="token number">10</span>


  <span class="token key atrule">databasir</span><span class="token punctuation">:</span>
    <span class="token key atrule">image</span><span class="token punctuation">:</span> vrantt/databasir<span class="token punctuation">:</span>latest
    <span class="token key atrule">links</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> mysql
    <span class="token key atrule">ports</span><span class="token punctuation">:</span>
      <span class="token punctuation">-</span> 8080<span class="token punctuation">:</span><span class="token number">8080</span>
    <span class="token key atrule">environment</span><span class="token punctuation">:</span>
      <span class="token key atrule">DATABASIR_DB_URL</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">3306</span>
      <span class="token key atrule">DATABASIR_DB_USERNAME</span><span class="token punctuation">:</span> root
      <span class="token key atrule">DATABASIR_DB_PASSWORD</span><span class="token punctuation">:</span> <span class="token number">123456</span>
      <span class="token key atrule">DATABASIR_JWT_SECRET</span><span class="token punctuation">:</span> <span class="token number">123123123</span>
    <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
      <span class="token key atrule">mysql</span><span class="token punctuation">:</span>
        <span class="token key atrule">condition</span><span class="token punctuation">:</span> service_healthy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u542F\u52A8</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker-compose</span> up -d
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u8BBF\u95EE <code>localhost:8080</code> \u5E76\u4F7F\u7528 databasir / databasir \u767B\u5F55</li></ol>`,6),l=[p];function i(c,o){return s(),a("div",null,l)}var r=n(t,[["render",i],["__file","index.html.vue"]]);export{r as default};
