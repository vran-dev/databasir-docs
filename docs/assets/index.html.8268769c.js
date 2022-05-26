import{_ as e,r as t,o,c as p,a,b as l,e as s,d as r}from"./app.677c049c.js";const i={},c=a("h1",{id:"\u5982\u4F55\u6784\u5EFA\u5E76\u542F\u52A8\u9879\u76EE",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#\u5982\u4F55\u6784\u5EFA\u5E76\u542F\u52A8\u9879\u76EE","aria-hidden":"true"},"#"),s(" \u5982\u4F55\u6784\u5EFA\u5E76\u542F\u52A8\u9879\u76EE\uFF1F")],-1),d={href:"https://github.com/vran-dev/databasir",target:"_blank",rel:"noopener noreferrer"},u=s("Databasir"),k=s(" \u9879\u76EE\u7684\u524D\u540E\u7AEF\u662F\u72EC\u7ACB\u4ED3\u5E93\u7EF4\u62A4\u7684\uFF0C\u5206\u522B\u4F4D\u4E8E"),v=r(`<ul><li>\u540E\u7AEF\uFF1Ahttps://github.com/vran-dev/databasir</li><li>\u524D\u7AEF\uFF1Ahttps://github.com/vran-dev/databasir-frontend</li></ul><p>\u5728\u5F00\u53D1\u9636\u6BB5\u91C7\u7528\u7684\u662F\u524D\u540E\u7AEF\u5206\u79BB\u7684\u6A21\u5F0F\u8FDB\u884C\uFF0C\u4F46\u6700\u7EC8\u53D1\u884C\u7684\u5E94\u7528\u662F\u4E00\u4E2A\u5355\u4F53\uFF0C\u8FD9\u662F\u4E3A\u4E86\u6700\u5927\u7A0B\u5EA6\u7684\u51CF\u5C11\u7528\u6237\u7684\u90E8\u7F72\u590D\u6742\u5EA6\u3002</p><h2 id="\u540E\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u540E\u7AEF" aria-hidden="true">#</a> \u540E\u7AEF</h2><h3 id="\u73AF\u5883\u51C6\u5907" tabindex="-1"><a class="header-anchor" href="#\u73AF\u5883\u51C6\u5907" aria-hidden="true">#</a> \u73AF\u5883\u51C6\u5907</h3><ul><li>Java 11+</li><li>Mysql 5.7+</li></ul><h3 id="\u9879\u76EE\u6784\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u6784\u5EFA" aria-hidden="true">#</a> \u9879\u76EE\u6784\u5EFA</h3><ol><li>clone \u9879\u76EE</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://github.com/vran-dev/databasir.git
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u8FDB\u5165\u9879\u76EE\u6240\u5728\u76EE\u5F55</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> databasir
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u6784\u5EFA\u9879\u76EE</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./gradlew api:build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u9879\u76EE\u542F\u52A8" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u542F\u52A8" aria-hidden="true">#</a> \u9879\u76EE\u542F\u52A8</h3><ol><li>\u5728 <code>api/src/main/resources/application-local.properties</code> \u4E2D\u4FEE\u6539\u4EE5\u4E0B\u914D\u7F6E</li></ol><div class="language-properties ext-properties line-numbers-mode"><pre class="language-properties"><code><span class="token comment"># \u9ED8\u8BA4\u7AEF\u53E3</span>
<span class="token key attr-name">server.port</span><span class="token punctuation">=</span><span class="token value attr-value">8080</span>
<span class="token comment"># \u6570\u636E\u5E93\u8FDE\u63A5</span>
<span class="token key attr-name">databasir.db.url</span><span class="token punctuation">=</span><span class="token value attr-value">localhost:3306</span>
<span class="token comment"># \u6570\u636E\u5E93\u7528\u6237\u540D</span>
<span class="token key attr-name">databasir.db.username</span><span class="token punctuation">=</span><span class="token value attr-value">root</span>
<span class="token comment"># \u6570\u636E\u5E93\u5BC6\u7801</span>
<span class="token key attr-name">databasir.db.password</span><span class="token punctuation">=</span><span class="token value attr-value">123456</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u542F\u52A8\u9879\u76EE</li></ol><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>./gradlew api:run -Dspring.profiles.active<span class="token operator">=</span>local
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u542F\u52A8\u5B8C\u6210\u4EE5\u540E\u5728\u63A7\u5236\u53F0\u5C06\u770B\u5230\u4EE5\u4E0B\u4FE1\u606F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token builtin class-name">.</span>   ____          _            __ _ _
 /<span class="token punctuation">\\</span><span class="token punctuation">\\</span> / ___<span class="token string">&#39;_ __ _ _(_)_ __  __ _ \\ \\ \\ \\
( ( )\\___ | &#39;</span>_ <span class="token operator">|</span> <span class="token string">&#39;_| | &#39;</span>_ <span class="token punctuation">\\</span>/ _\` <span class="token operator">|</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span> <span class="token punctuation">\\</span>
 <span class="token punctuation">\\</span><span class="token punctuation">\\</span>/  ___<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">)</span><span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">|</span> <span class="token operator">||</span> <span class="token punctuation">(</span>_<span class="token operator">|</span> <span class="token operator">|</span>  <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span> <span class="token punctuation">)</span>
  &#39;  <span class="token operator">|</span>____<span class="token operator">|</span> .__<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token operator">|</span>_<span class="token operator">|</span> <span class="token operator">|</span>_<span class="token punctuation">\\</span>__, <span class="token operator">|</span> / / / /
 <span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">=</span><span class="token operator">|</span>_<span class="token operator">|</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">==</span><span class="token operator">|</span>___/<span class="token operator">=</span>/_/_/_/
 :: Spring Boot ::               <span class="token punctuation">(</span>v2.5.11<span class="token punctuation">)</span>
 ---
<span class="token number">2022</span>-05-26 09:37:41.353  INFO <span class="token number">9512</span> --- <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> c.d.c.i.e.s.SystemStartedEventSubscriber <span class="token builtin class-name">:</span> system data init finished
<span class="token number">2022</span>-05-26 09:37:41.411  INFO <span class="token number">9512</span> --- <span class="token punctuation">[</span>           main<span class="token punctuation">]</span> com.databasir.DatabasirApplication       <span class="token builtin class-name">:</span> Started DatabasirApplication <span class="token keyword">in</span> <span class="token number">9.265</span> seconds <span class="token punctuation">(</span>JVM running <span class="token keyword">for</span> <span class="token number">10.055</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u542F\u52A8\u5B8C\u6210\u4EE5\u540E\u5C31\u53EF\u4EE5\u901A\u8FC7 <code>http://localhost:8080</code> \u8BBF\u95EE\u5E94\u7528\uFF0C\u9ED8\u8BA4\u7684\u7528\u6237\u540D/\u5BC6\u7801\u4E3A databasir/databasir</p>`,20);function b(m,_){const n=t("ExternalLinkIcon");return o(),p("div",null,[c,a("p",null,[a("a",d,[u,l(n)]),k]),v])}var g=e(i,[["render",b],["__file","index.html.vue"]]);export{g as default};