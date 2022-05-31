import{_ as o,r as p,o as c,c as i,b as n,d as e,a as t,e as s}from"./app.dd19160e.js";const l={},u=t(`<h1 id="\u5982\u4F55\u6269\u5C55\u5BFC\u51FA\u6587\u4EF6\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u6269\u5C55\u5BFC\u51FA\u6587\u4EF6\u7C7B\u578B" aria-hidden="true">#</a> \u5982\u4F55\u6269\u5C55\u5BFC\u51FA\u6587\u4EF6\u7C7B\u578B\uFF1F</h1><blockquote><p>Note: \u672C\u8282\u5185\u5BB9\u9ED8\u8BA4\u8BFB\u8005\u6709 Java \u5F00\u53D1\u80FD\u529B</p></blockquote><h2 id="\u5B9E\u73B0\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6B65\u9AA4" aria-hidden="true">#</a> \u5B9E\u73B0\u6B65\u9AA4</h2><h3 id="\u4E00\u3001\u6269\u5C55\u6587\u4EF6\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u6269\u5C55\u6587\u4EF6\u7C7B\u578B" aria-hidden="true">#</a> \u4E00\u3001\u6269\u5C55\u6587\u4EF6\u7C7B\u578B</h3><p>\u5728 <code>com.databasir.core.domain.document.generator.DocumentFileType</code> \u4E2D\u65B0\u589E\u6587\u4EF6\u7C7B\u578B</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">DocumentFileType</span> <span class="token punctuation">{</span>

    <span class="token function">MARKDOWN</span><span class="token punctuation">(</span><span class="token string">&quot;md&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Markdown&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">PLANT_UML_ER_SVG</span><span class="token punctuation">(</span><span class="token string">&quot;svg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;UML SVG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">PLANT_UML_ER_PNG</span><span class="token punctuation">(</span><span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;UML PNG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> fileExtension<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>DocumentFilType</code> \u662F\u4E00\u4E2A\u679A\u4E3E\u7C7B\u578B\uFF0C\u6784\u9020\u5668\u9700\u8981\u4F20\u5165\u4E24\u4E2A\u53C2\u6570</p><table><thead><tr><th>\u540D\u79F0</th><th>\u8BF4\u660E</th><th></th></tr></thead><tbody><tr><td>fileExtension</td><td>\u4EE3\u8868\u5BFC\u51FA\u6587\u4EF6\u7684\u540E\u7F00\uFF0C\u7528\u6237\u5BFC\u51FA\u9879\u76EE\u6587\u4EF6\u65F6\u7CFB\u7EDF\u4F1A\u4F7F\u7528 <code>\u9879\u76EE\u540D + &quot;.&quot; + {{fileExtension}}</code> \u53BB\u547D\u540D\u6587\u4EF6</td><td></td></tr><tr><td>name</td><td>\u5C55\u793A\u7ED9\u7528\u6237\u7684\u6807\u7B7E</td><td></td></tr></tbody></table><p>\u6BD4\u5982\u6211\u73B0\u5728\u8981\u65B0\u589E\u4E00\u4E2A excel \u683C\u5F0F\u7684\u5BFC\u51FA\u7C7B\u578B\uFF0C\u90A3\u4E48\u65B0\u589E\u4E00\u4E2A\u679A\u4E3E\u503C <code>EXCEL</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Getter</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">DocumentFileType</span> <span class="token punctuation">{</span>

    <span class="token function">MARKDOWN</span><span class="token punctuation">(</span><span class="token string">&quot;md&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Markdown&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">PLANT_UML_ER_SVG</span><span class="token punctuation">(</span><span class="token string">&quot;svg&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;UML SVG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>

    <span class="token function">PLANT_UML_ER_PNG</span><span class="token punctuation">(</span><span class="token string">&quot;png&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;UML PNG&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    
    <span class="token function">EXCEL</span><span class="token punctuation">(</span><span class="token string">&quot;xlsx&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Excel&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> fileExtension<span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u4E8C\u3001\u5B9E\u73B0\u6587\u4EF6\u751F\u6210\u903B\u8F91" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u5B9E\u73B0\u6587\u4EF6\u751F\u6210\u903B\u8F91" aria-hidden="true">#</a> \u4E8C\u3001\u5B9E\u73B0\u6587\u4EF6\u751F\u6210\u903B\u8F91</h3><p>\u63A5\u4E0B\u6765\u5C31\u662F\u5B9A\u4E49\u4E00\u4E2A\u7C7B\uFF0C\u8BE5\u7C7B\u9700\u8981\u5B9E\u73B0\u63A5\u53E3 <code>com.databasir.core.domain.document.generator.DocumentFileGenerator</code></p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">DocumentFileGenerator</span> <span class="token punctuation">{</span>

    <span class="token keyword">boolean</span> <span class="token function">support</span><span class="token punctuation">(</span><span class="token class-name">DocumentFileType</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">void</span> <span class="token function">generate</span><span class="token punctuation">(</span><span class="token class-name">DocumentFileGenerateContext</span> context<span class="token punctuation">,</span> <span class="token class-name">OutputStream</span> outputStream<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@Getter</span>
    <span class="token annotation punctuation">@Builder</span>
    <span class="token keyword">class</span> <span class="token class-name">DocumentFileGenerateContext</span> <span class="token punctuation">{</span>

        <span class="token annotation punctuation">@NonNull</span>
        <span class="token keyword">private</span> <span class="token class-name">DocumentFileType</span> documentFileType<span class="token punctuation">;</span>

        <span class="token annotation punctuation">@NonNull</span>
        <span class="token keyword">private</span> <span class="token class-name">DatabaseDocumentResponse</span> databaseDocument<span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5176\u4E2D</p><ul><li>support \u65B9\u6CD5\u6807\u8BC6\u8BE5\u7C7B\u652F\u6301\u751F\u6210\u7684\u6587\u4EF6\u7C7B\u578B</li><li>generate \u662F\u5177\u4F53\u7684\u751F\u6210\u903B\u8F91</li></ul>`,15),d=s("\u7EE7\u7EED\u5B8C\u5584\u7684 excel \u5BFC\u51FA\u7684\u6269\u5C55\uFF0C\u8BB0\u4F4F\u5B9E\u73B0\u7C7B\u4E00\u5B9A\u8981\u52A0\u4E0Aspring \u7684 "),r=n("code",null,"@Component",-1),k=s(" \u6CE8\u89E3\uFF0C\u4E0D\u7136 "),v={href:"https://github.com/vran-dev/databasir",target:"_blank",rel:"noopener noreferrer"},m=s("Databasir"),b=s(" \u65E0\u6CD5\u627E\u5230\u8BE5\u5B9E\u73B0\u7C7B"),h=t(`<div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span></span><span class="token class-name">RequiredArgsConstructor</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">lombok<span class="token punctuation">.</span>extern<span class="token punctuation">.</span>slf4j<span class="token punctuation">.</span></span><span class="token class-name">Slf4j</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>stereotype<span class="token punctuation">.</span></span><span class="token class-name">Component</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Component</span>
<span class="token annotation punctuation">@Slf4j</span>
<span class="token annotation punctuation">@RequiredArgsConstructor</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MarkdownDocumentFileGenerator</span> <span class="token keyword">implements</span> <span class="token class-name">DocumentFileGenerator</span> <span class="token punctuation">{</span>
    
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">boolean</span> <span class="token function">support</span><span class="token punctuation">(</span><span class="token class-name">DocumentFileType</span> type<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// \u8FD9\u91CC\u8868\u793A\u8BE5\u5B9E\u73B0\u7C7B\u662F\u652F\u6301 EXCEL \u683C\u5F0F\u5BFC\u51FA\u7684</span>
        <span class="token keyword">return</span> type <span class="token operator">==</span> <span class="token class-name">DocumentFileType</span><span class="token punctuation">.</span>EXCEL<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">generate</span><span class="token punctuation">(</span><span class="token class-name">DocumentFileGenerateContext</span> context<span class="token punctuation">,</span> <span class="token class-name">OutputStream</span> outputStream<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">Path</span> path <span class="token operator">=</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token comment">// excel path</span>
        <span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span> bytes <span class="token operator">=</span> <span class="token class-name">Files</span><span class="token punctuation">.</span><span class="token function">readAllBytes</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// \u5C06\u6587\u4EF6\u7684\u5B57\u8282\u6D41\u901A\u8FC7 stream \u5199\u51FA\u5373\u53EF</span>
        outputStream<span class="token punctuation">.</span><span class="token function">write</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u793A\u4F8B" aria-hidden="true">#</a> \u793A\u4F8B</h2>`,2),g={href:"https://github.com/vran-dev/databasir",target:"_blank",rel:"noopener noreferrer"},_=s("Databasir"),y=s(" \u76EE\u524D\u5DF2\u7ECF\u63D0\u4F9B\u4E86 markdown\u3001png\u3001svg \u4E09\u79CD\u683C\u5F0F\u7684\u6587\u4EF6\u5BFC\u51FA\uFF0C\u5176\u4E2D png \u548C svg \u6587\u4EF6\u662F\u57FA\u4E8E plantuml \u5BFC\u51FA\u7684\u5B9E\u4F53\u5173\u7CFB\u56FE\u3002"),f=n("p",null,"\u5BF9\u5E94\u7684\u6E90\u7801\u5982\u4E0B\uFF0C\u8BFB\u8005\u53EF\u4EE5\u53C2\u8003",-1),w=n("ul",null,[n("li",null,[s("SVG\uFF1A"),n("code",null,"com.databasir.core.domain.document.generator.plantuml.PlantUmlErSvgFileGenerator")]),n("li",null,[s("PNG\uFF1A"),n("code",null,"com.databasir.core.domain.document.generator.plantuml.PlantUmlPngFileGenerator")]),n("li",null,[s("Markdown\uFF1A"),n("code",null,"com.databasir.core.domain.document.generator.MarkdownDocumentFileGenerator")])],-1);function q(x,D){const a=p("ExternalLinkIcon");return c(),i("div",null,[u,n("p",null,[d,r,k,n("a",v,[m,e(a)]),b]),h,n("p",null,[n("a",g,[_,e(a)]),y]),f,w])}var E=o(l,[["render",q],["__file","index.html.vue"]]);export{E as default};
