import{_ as n,o as s,c as a,a as t}from"./app.29c80318.js";const p={},e=t(`<h2 id="v1-0-6-\u5347\u7EA7\u6307\u5357" tabindex="-1"><a class="header-anchor" href="#v1-0-6-\u5347\u7EA7\u6307\u5357" aria-hidden="true">#</a> V1.0.6 \u5347\u7EA7\u6307\u5357</h2><h2 id="\u9002\u7528\u5BF9\u8C61" tabindex="-1"><a class="header-anchor" href="#\u9002\u7528\u5BF9\u8C61" aria-hidden="true">#</a> \u9002\u7528\u5BF9\u8C61</h2><p>\u5F53\u524D\u90E8\u7F72\u7248\u672C\u4F4E\u4E8E V1.0.6 \u7684\u7528\u6237</p><h2 id="\u6570\u636E\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u8FC1\u79FB" aria-hidden="true">#</a> \u6570\u636E\u8FC1\u79FB</h2><p>\u7531\u4E8E V1.0.6 \u5F15\u5165\u4E86\u5143\u6570\u636E\u641C\u7D22\u529F\u80FD\uFF0C\u9700\u8981\u5BF9\u5386\u53F2\u6570\u636E\u505A\u5168\u6587\u7D22\u5F15\u624D\u80FD\u5F97\u5230\u641C\u7D22\u7ED3\u679C\uFF0C\u6240\u4EE5\u9700\u8981\u6570\u636E\u8FC1\u79FB\u3002</p><p>SQL \u5982\u4E0B\uFF1A</p><div class="language-sql ext-sql line-numbers-mode"><pre class="language-sql"><code><span class="token comment">-- migration group info</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> document_full_text<span class="token punctuation">(</span>group_id<span class="token punctuation">,</span> group_name<span class="token punctuation">,</span> group_description<span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> <span class="token identifier"><span class="token punctuation">\`</span>group<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>group<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>name<span class="token punctuation">,</span> <span class="token identifier"><span class="token punctuation">\`</span>group<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>description
<span class="token keyword">FROM</span> <span class="token identifier"><span class="token punctuation">\`</span>group<span class="token punctuation">\`</span></span>
         <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> document_full_text dft <span class="token keyword">ON</span> <span class="token identifier"><span class="token punctuation">\`</span>group<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>id <span class="token operator">=</span> dft<span class="token punctuation">.</span>group_id
<span class="token keyword">WHERE</span> dft<span class="token punctuation">.</span>group_id <span class="token operator">IS</span> <span class="token boolean">NULL</span>
  <span class="token operator">AND</span> <span class="token identifier"><span class="token punctuation">\`</span>group<span class="token punctuation">\`</span></span><span class="token punctuation">.</span>deleted <span class="token operator">=</span> <span class="token boolean">FALSE</span><span class="token punctuation">;</span>

<span class="token comment">-- migration project info</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> document_full_text<span class="token punctuation">(</span>group_id<span class="token punctuation">,</span> project_id<span class="token punctuation">,</span> project_name<span class="token punctuation">,</span> project_description<span class="token punctuation">,</span> database_name<span class="token punctuation">,</span> schema_name<span class="token punctuation">,</span>
                               database_type<span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> project<span class="token punctuation">.</span>group_id<span class="token punctuation">,</span>
       project<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
       project<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
       project<span class="token punctuation">.</span>description<span class="token punctuation">,</span>
       ds<span class="token punctuation">.</span>database_name<span class="token punctuation">,</span>
       ds<span class="token punctuation">.</span>schema_name<span class="token punctuation">,</span>
       ds<span class="token punctuation">.</span>database_type
<span class="token keyword">FROM</span> project
         <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> document_full_text <span class="token keyword">ON</span> project<span class="token punctuation">.</span>id <span class="token operator">=</span> document_full_text<span class="token punctuation">.</span>project_id
         <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> <span class="token identifier"><span class="token punctuation">\`</span>group<span class="token punctuation">\`</span></span> g <span class="token keyword">ON</span> project<span class="token punctuation">.</span>group_id <span class="token operator">=</span> g<span class="token punctuation">.</span>id
         <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> data_source ds <span class="token keyword">ON</span> project<span class="token punctuation">.</span>id <span class="token operator">=</span> ds<span class="token punctuation">.</span>project_id
<span class="token keyword">WHERE</span> project<span class="token punctuation">.</span>deleted <span class="token operator">=</span> <span class="token boolean">FALSE</span>
  <span class="token operator">AND</span> g<span class="token punctuation">.</span>deleted <span class="token operator">=</span> <span class="token boolean">FALSE</span>
  <span class="token operator">AND</span> document_full_text<span class="token punctuation">.</span>table_document_id <span class="token operator">IS</span> <span class="token boolean">NULL</span>
  <span class="token operator">AND</span> document_full_text<span class="token punctuation">.</span>project_id <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>


<span class="token comment">-- migration column</span>
<span class="token keyword">INSERT</span> <span class="token keyword">INTO</span> document_full_text<span class="token punctuation">(</span>group_id<span class="token punctuation">,</span> project_id<span class="token punctuation">,</span> database_document_id<span class="token punctuation">,</span> database_document_version<span class="token punctuation">,</span>
                               table_document_id<span class="token punctuation">,</span> table_column_document_id<span class="token punctuation">,</span> database_name<span class="token punctuation">,</span> schema_name<span class="token punctuation">,</span>
                               database_product_name<span class="token punctuation">,</span> table_name<span class="token punctuation">,</span> table_comment<span class="token punctuation">,</span> col_name<span class="token punctuation">,</span> col_comment<span class="token punctuation">)</span>
<span class="token keyword">SELECT</span> pj<span class="token punctuation">.</span>group_id<span class="token punctuation">,</span>
       pj<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
       dd<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
       dd<span class="token punctuation">.</span>version<span class="token punctuation">,</span>
       td<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
       tcd<span class="token punctuation">.</span>id<span class="token punctuation">,</span>
       ds<span class="token punctuation">.</span>database_type<span class="token punctuation">,</span>
       ds<span class="token punctuation">.</span>schema_name<span class="token punctuation">,</span>
       dd<span class="token punctuation">.</span>product_name<span class="token punctuation">,</span>
       td<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
       td<span class="token punctuation">.</span><span class="token keyword">comment</span><span class="token punctuation">,</span>
       tcd<span class="token punctuation">.</span>name<span class="token punctuation">,</span>
       tcd<span class="token punctuation">.</span><span class="token keyword">comment</span>
<span class="token keyword">FROM</span> table_column_document tcd
         <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> document_full_text dft <span class="token keyword">ON</span> dft<span class="token punctuation">.</span>table_column_document_id <span class="token operator">=</span> tcd<span class="token punctuation">.</span>id
         <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> table_document td <span class="token keyword">ON</span> tcd<span class="token punctuation">.</span>table_document_id <span class="token operator">=</span> td<span class="token punctuation">.</span>id
         <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> database_document dd <span class="token keyword">ON</span> tcd<span class="token punctuation">.</span>database_document_id <span class="token operator">=</span> dd<span class="token punctuation">.</span>id
         <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> project pj <span class="token keyword">ON</span> dd<span class="token punctuation">.</span>project_id <span class="token operator">=</span> pj<span class="token punctuation">.</span>id
         <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> data_source ds <span class="token keyword">ON</span> pj<span class="token punctuation">.</span>id <span class="token operator">=</span> ds<span class="token punctuation">.</span>project_id
<span class="token keyword">WHERE</span> pj<span class="token punctuation">.</span>deleted <span class="token operator">=</span> <span class="token boolean">FALSE</span>
  <span class="token operator">AND</span> dd<span class="token punctuation">.</span>is_archive <span class="token operator">=</span> <span class="token boolean">FALSE</span>
  <span class="token operator">AND</span> dft<span class="token punctuation">.</span>table_column_document_id <span class="token operator">IS</span> <span class="token boolean">NULL</span>
  <span class="token operator">AND</span> dft<span class="token punctuation">.</span>project_id <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment">-- update table description;</span>

<span class="token keyword">UPDATE</span> document_full_text
    <span class="token keyword">LEFT</span> <span class="token keyword">JOIN</span> document_description dd <span class="token keyword">ON</span> document_full_text<span class="token punctuation">.</span>project_id <span class="token operator">=</span> dd<span class="token punctuation">.</span>project_id
<span class="token keyword">SET</span> table_description<span class="token operator">=</span>dd<span class="token punctuation">.</span>content
<span class="token keyword">WHERE</span> dd<span class="token punctuation">.</span>table_name <span class="token operator">=</span> document_full_text<span class="token punctuation">.</span>table_name
  <span class="token operator">AND</span> dd<span class="token punctuation">.</span>project_id <span class="token operator">=</span> document_full_text<span class="token punctuation">.</span>project_id
  <span class="token operator">AND</span> dd<span class="token punctuation">.</span>column_name <span class="token operator">IS</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>

<span class="token comment">-- update column description;</span>
<span class="token keyword">UPDATE</span> document_full_text
    <span class="token keyword">INNER</span> <span class="token keyword">JOIN</span> document_description dd <span class="token keyword">ON</span> document_full_text<span class="token punctuation">.</span>project_id <span class="token operator">=</span> dd<span class="token punctuation">.</span>project_id
<span class="token keyword">SET</span> col_description<span class="token operator">=</span>dd<span class="token punctuation">.</span>content
<span class="token keyword">WHERE</span> dd<span class="token punctuation">.</span>table_name <span class="token operator">=</span> document_full_text<span class="token punctuation">.</span>table_name
  <span class="token operator">AND</span> dd<span class="token punctuation">.</span>column_name <span class="token operator">=</span> document_full_text<span class="token punctuation">.</span>col_name
  <span class="token operator">AND</span> dd<span class="token punctuation">.</span>project_id <span class="token operator">=</span> document_full_text<span class="token punctuation">.</span>project_id
  <span class="token operator">AND</span> dd<span class="token punctuation">.</span>column_name <span class="token operator">IS</span> <span class="token operator">NOT</span> <span class="token boolean">NULL</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),o=[e];function c(l,i){return s(),a("div",null,o)}var d=n(p,[["render",c],["__file","v1.0.6-migration.html.vue"]]);export{d as default};
