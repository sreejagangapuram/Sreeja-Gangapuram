---
keywords: fastai
description: Booleans and Conditionals
title: (Day 3) Unit 3 Sections 5-7 Notes + Hacks 
toc: true
categories: [notebook]
nb_path: _notebooks/2022-12-04-teaching-time.ipynb
layout: notebook
---

<!--
#################################################
### THIS FILE WAS AUTOGENERATED! DO NOT EDIT! ###
#################################################
# file to edit: _notebooks/2022-12-04-teaching-time.ipynb
-->

<div class="container" id="notebook-container">
        
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li><mark>Boolean</mark>: a data type. it has two possible values. <ul>
<li>TRUE </li>
<li>FALSE </li>
<li>can only be 1 or 0 </li>
</ul>
</li>
<li><mark>Operators</mark><ul>
<li>a = b - equal to </li>
<li>a (not equal to symbol) b - not equal to</li>
<li>a &gt; b - greater than</li>
<li>a &lt; b - less than </li>
<li>a (is greater than or equal to symbol) b - greater than or equal to</li>
<li>a (is less than or equal to symbol) b - less than or equal to</li>
</ul>
</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><mark>EXERSICE</mark>: Use a boolean expression to determine if the average grade is above an 80 and print the result (True or False).</p>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">allGrades</span> <span class="o">=</span> <span class="p">[</span><span class="mi">90</span><span class="p">,</span> <span class="mi">65</span><span class="p">,</span> <span class="mi">60</span><span class="p">,</span> <span class="mi">75</span><span class="p">,</span> <span class="mi">95</span><span class="p">]</span>

<span class="c1"># used the sum and length functions, divided them</span>
<span class="n">allGradesAve</span> <span class="o">=</span> <span class="nb">sum</span><span class="p">(</span><span class="n">allGrades</span><span class="p">)</span><span class="o">/</span><span class="nb">len</span><span class="p">(</span><span class="n">allGrades</span><span class="p">)</span>

<span class="c1"># if and else statements to determine if average is less than or greater than 80</span>
<span class="k">if</span> <span class="n">allGradesAve</span> <span class="o">&gt;</span> <span class="mi">80</span><span class="p">:</span> 
    <span class="nb">print</span> <span class="p">(</span><span class="s2">&quot;True. The average grade is above an 80.&quot;</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span> 
    <span class="nb">print</span> <span class="p">(</span><span class="s2">&quot;False. The average grade is below an 80.&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>False. The average grade is below an 80.
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="Relational-operators-Example">Relational operators Example<a class="anchor-link" href="#Relational-operators-Example"> </a></h1>
</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="s2">&quot;100 == 100:&quot;</span><span class="p">,</span><span class="mi">100</span><span class="o">==</span><span class="mi">100</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Hello == Adios:&quot;</span><span class="p">,</span><span class="s2">&quot;greeting&quot;</span><span class="o">==</span><span class="s2">&quot;farewell&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Hello != Adios:&quot;</span><span class="p">,</span><span class="s2">&quot;greeting&quot;</span><span class="o">!=</span><span class="s2">&quot;farewell&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Hello == Hola:&quot;</span><span class="p">,</span><span class="s2">&quot;greeting&quot;</span><span class="o">==</span><span class="s2">&quot;greeting&quot;</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;5&gt;=4:&quot;</span><span class="p">,</span> <span class="mi">5</span><span class="o">&gt;=</span><span class="mi">4</span><span class="p">)</span>
<span class="nb">print</span> <span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">)</span>

<span class="c1"># Notice that relational operators can even work on lists!</span>
<span class="c1"># For lists, the relational operator compares each respective component until an answer is derived</span>

<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;] &gt; [&#39;x&#39;,&#39;y&#39;,&#39;z&#39;]:&quot;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;a&#39;</span><span class="p">,</span><span class="s1">&#39;b&#39;</span><span class="p">,</span><span class="s1">&#39;c&#39;</span><span class="p">]</span> <span class="o">&gt;</span> <span class="p">[</span><span class="s1">&#39;x&#39;</span><span class="p">,</span><span class="s1">&#39;y&#39;</span><span class="p">,</span><span class="s1">&#39;z&#39;</span><span class="p">])</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;[1,2,3,5] &gt; [1,2,3,4]:&quot;</span><span class="p">,</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">5</span><span class="p">]</span> <span class="o">&gt;</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">4</span><span class="p">])</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;[1,2,3,5] &lt; [1,2,3,4]:&quot;</span><span class="p">,</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">5</span><span class="p">]</span> <span class="o">&lt;</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">4</span><span class="p">])</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;[1,2,3,5] == [1,2,3,4]:&quot;</span><span class="p">,</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">5</span><span class="p">]</span> <span class="o">==</span> <span class="p">[</span><span class="mi">1</span><span class="p">,</span><span class="mi">2</span><span class="p">,</span><span class="mi">3</span><span class="p">,</span><span class="mi">4</span><span class="p">])</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>100 == 100: True
Hello == Adios: False
Hello != Adios: True
Hello == Hola: True
5&gt;=4: True

[&#39;a&#39;,&#39;b&#39;,&#39;c&#39;] &gt; [&#39;x&#39;,&#39;y&#39;,&#39;z&#39;]: False
[1,2,3,5] &gt; [1,2,3,4]: True
[1,2,3,5] &lt; [1,2,3,4]: False
[1,2,3,5] == [1,2,3,4]: False
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><mark>EXERSICE</mark>: Turn the following arithmetic phrases into either True or False statements as indicated USING LOGICAL OPERATORS</p>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="nb">print</span><span class="p">(</span><span class="s2">&quot;1 &gt; 2 or 5 &lt; 12:&quot;</span><span class="p">,</span><span class="mi">1</span> <span class="o">&gt;</span> <span class="mi">2</span> <span class="ow">or</span> <span class="mi">5</span> <span class="o">&lt;</span> <span class="mi">12</span><span class="p">)</span>
<span class="c1"># Output TRUE  using OR ^</span>

<span class="c1"># Output FALSE using NOT</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;24 &gt; 8:&quot;</span><span class="p">,</span> <span class="ow">not</span> <span class="mi">24</span> <span class="o">&gt;</span> <span class="mi">8</span><span class="p">)</span>

<span class="c1"># Output FALSE using AND</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;10 &gt; 20:&quot;</span><span class="p">,</span> <span class="mi">10</span> <span class="o">&gt;</span> <span class="mi">20</span> <span class="ow">and</span> <span class="mi">20</span> <span class="o">&lt;</span> <span class="mi">10</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>1 &gt; 2 or 5 &lt; 12: True
24 &gt; 8: False
10 &gt; 20: False
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li><mark>Selection</mark>: uses a condition<ul>
<li>result - TRUE or FALSE</li>
</ul>
</li>
<li><mark>Algorithm</mark>: set of instructions that accomplish a task </li>
</ul>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">x</span> <span class="o">=</span> <span class="mi">20</span>
<span class="n">y</span> <span class="o">=</span> <span class="mi">10</span>
<span class="k">if</span> <span class="n">x</span> <span class="o">&gt;</span> <span class="n">y</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;x is greater than y&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>x is greater than y
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">x</span> <span class="o">=</span> <span class="mi">0</span>
<span class="n">y</span> <span class="o">=</span> <span class="mi">10</span>
<span class="k">if</span> <span class="n">x</span> <span class="o">&gt;</span> <span class="n">y</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;x is greater than y&quot;</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;x is not greater than y&quot;</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>x is not greater than y
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Participation">Participation<a class="anchor-link" href="#Participation"> </a></h2><p><mark>EXERSICE</mark>: Calculate the total sum of two numbers, if it is equal to 200, print 200, if otherwise, print the sum.</p>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">num1</span> <span class="o">=</span> <span class="mi">1</span>
<span class="n">num2</span> <span class="o">=</span> <span class="mi">2</span>
<span class="nb">sum</span> <span class="o">=</span> <span class="n">num1</span> <span class="o">+</span> <span class="n">num2</span>

<span class="k">if</span> <span class="nb">sum</span> <span class="o">==</span> <span class="mi">200</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;200&quot;</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span>
    <span class="nb">print</span><span class="p">(</span><span class="nb">sum</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>3
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Analyzing-Code">Analyzing Code<a class="anchor-link" href="#Analyzing-Code"> </a></h2>
</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">score</span> <span class="o">=</span> <span class="mi">82</span>
<span class="k">if</span> <span class="p">(</span><span class="n">score</span> <span class="o">&gt;=</span> <span class="mi">90</span><span class="p">)</span>
<span class="p">{</span>
    <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="s2">&quot;You got an A, congrats!&quot;</span><span class="p">)</span>
<span class="p">}</span>
<span class="k">else</span>
<span class="p">{</span>
    <span class="k">if</span> <span class="p">(</span><span class="n">score</span> <span class="o">&gt;=</span> <span class="mi">75</span><span class="p">)</span>
    <span class="p">{</span>
        <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="s2">&quot;Please come to retake up to a 90 next week at tutorial!&quot;</span><span class="p">)</span>
    <span class="p">}</span>
    <span class="k">else</span>
    <span class="p">{</span>
        <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="s2">&quot;You have detention!&quot;</span><span class="p">)</span>
    <span class="p">}</span>
<span class="p">}</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Please come to retake up to a 90 next week at tutorial!
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">protein</span> <span class="o">=</span> <span class="mi">25</span>
<span class="n">carbs</span> <span class="o">=</span> <span class="mi">36</span>
<span class="n">sugar</span> <span class="o">=</span> <span class="mi">11</span>
<span class="k">if</span> <span class="p">(</span><span class="n">carbs</span> <span class="o">&gt;=</span> <span class="mi">55</span> <span class="o">||</span> <span class="n">protein</span> <span class="o">&lt;=</span> <span class="mi">20</span> <span class="o">||</span> <span class="n">sugar</span> <span class="o">&gt;=</span> <span class="mi">15</span><span class="p">)</span>
<span class="p">{</span>
    <span class="n">console</span><span class="o">.</span><span class="n">log</span><span class="p">(</span><span class="s2">&quot;Your lunch is too unhealthy, please pick a new one&quot;</span><span class="p">)</span>
<span class="p">}</span>
<span class="k">else</span>
<span class="p">{</span>
    <span class="k">if</span> <span class="p">(</span><span class="n">carbs</span> <span class="o">&lt;</span> <span class="mi">35</span> <span class="o">||</span> <span class="n">protein</span> <span class="o">&lt;</span> <span class="mi">25</span><span class="p">)</span>
    <span class="p">{</span>
    <span class="n">console</span><span class="o">.</span><span class="n">log</span> <span class="p">(</span><span class="s2">&quot;This lunch is alright but try to add some more carbs or protein&quot;</span><span class="p">)</span>
    <span class="p">}</span>
    <span class="k">else</span> 
    <span class="p">{</span>
    <span class="k">if</span> <span class="p">(</span><span class="n">sugar</span> <span class="o">&gt;=</span> <span class="mi">11</span><span class="p">)</span>
    <span class="p">{</span>
    <span class="n">console</span><span class="o">.</span><span class="n">log</span> <span class="p">(</span><span class="s2">&quot;Looks great but lets see if we can cut down on sugar, we don&#39;t want diabetes!&quot;</span><span class="p">)</span>
    <span class="p">}</span>
    <span class="k">else</span>
    <span class="p">{</span>
        <span class="n">console</span><span class="o">.</span><span class="n">log</span> <span class="p">(</span><span class="s2">&quot;Amazing, you created a healthy lunch!!!&quot;</span><span class="p">)</span>
    <span class="p">}</span>
    <span class="p">}</span>
<span class="p">}</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Looks great but lets see if we can cut down on sugar, we don&#39;t want diabetes!
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li><mark>NOTE</mark>: || = or in javascript </li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Writing-Nested-Code-Activity">Writing Nested Code Activity<a class="anchor-link" href="#Writing-Nested-Code-Activity"> </a></h2><ol>
<li>Write a program that fits these conditions using nested conditionals:<ul>
<li>If a person has at least 8 hours, they are experienced</li>
<li>If a person is experienced their salary is 90k, if they have ten hours or above their salary 150k</li>
<li>If a person is inexperienced their salary is always 50k</li>
<li>print the salary of the person at the end and whether they are experienced or not</li>
</ul>
</li>
</ol>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">hours</span> <span class="o">=</span> <span class="mi">30</span>
<span class="n">sal</span> <span class="o">=</span> <span class="s2">&quot;&quot;</span>
<span class="n">experienced</span> <span class="o">=</span> <span class="kc">True</span>
<span class="c1"># using operators to determine the salary</span>
<span class="k">if</span> <span class="p">(</span><span class="n">hours</span> <span class="o">&gt;=</span> <span class="mi">10</span><span class="p">):</span>
    <span class="n">sal</span> <span class="o">=</span> <span class="s2">&quot;150k&quot;</span>
<span class="k">elif</span> <span class="p">(</span><span class="n">hours</span> <span class="o">&gt;=</span> <span class="mi">8</span><span class="p">):</span>
    <span class="n">sal</span> <span class="o">=</span> <span class="s2">&quot;90k&quot;</span>
<span class="k">else</span><span class="p">:</span>
    <span class="n">sal</span> <span class="o">=</span> <span class="s2">&quot;50k&quot;</span>
    <span class="n">experienced</span> <span class="o">=</span> <span class="kc">False</span>
<span class="c1"># printing the final statement </span>
<span class="nb">print</span> <span class="p">(</span><span class="s1">&#39;The person has a salary of:&#39;</span> <span class="p">,</span> <span class="n">sal</span><span class="p">,</span><span class="s1">&#39;and has experience:&#39;</span> <span class="p">,</span> <span class="n">experienced</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>The person has a salary of: 150k and has experience: True
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Hacks-Assignments:">Hacks Assignments:<a class="anchor-link" href="#Hacks-Assignments:"> </a></h2><p><strong>Conditionals</strong>:</p>
<ul>
<li>Write a program that fits these conditions using nested conditionals:<ul>
<li>If the product is expired, print "this product is no good"</li>
<li>If the cost is above 50 dollars, and the product isn't expired, print "this product is too expensive"</li>
<li>If the cost is 25 dollars but under 50, and the product isn't expired, print "this is a regular product"</li>
<li>If the cost is under 25 dollars, print "this is a cheap product"</li>
</ul>
</li>
</ul>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">expired</span> <span class="o">=</span> <span class="kc">False</span>
<span class="n">cost</span> <span class="o">=</span> <span class="mi">50</span>

<span class="k">if</span><span class="p">(</span><span class="n">expired</span><span class="p">):</span>
    <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;this product is no good&#39;</span><span class="p">)</span>
<span class="k">else</span><span class="p">:</span>
    <span class="k">if</span> <span class="p">(</span><span class="n">cost</span> <span class="o">&gt;</span> <span class="mi">50</span><span class="p">):</span>
        <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;this product is too expensive&#39;</span><span class="p">)</span>
    <span class="k">elif</span> <span class="p">(</span><span class="n">cost</span> <span class="o">&lt;</span> <span class="mi">25</span><span class="p">):</span>
        <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;this is a cheap product&#39;</span><span class="p">)</span>
    <span class="k">else</span><span class="p">:</span>
        <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;this is a regular product&#39;</span><span class="p">)</span>
 
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>this is a regular product
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><strong>Boolean/Conditionals</strong>:</p>
<ul>
<li>Create a multiple choice quiz that ...<ul>
<li>uses Boolean expressions</li>
<li>uses Logical operators</li>
<li>uses Conditional statements</li>
<li>prompts quiz-taker with multiple options (only one can be right)</li>
<li>has at least 3 questions</li>
</ul>
</li>
<li>Points will be awarded for creativity, intricacy, and how well Boolean/Binary concepts have been intertwined</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="Book-Knowlege-Quiz">Book Knowlege Quiz<a class="anchor-link" href="#Book-Knowlege-Quiz"> </a></h1>
</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># used a dictionary with a question as the key and a list of multiple choice as values for the quiz</span>
<span class="n">quiz</span> <span class="o">=</span> <span class="p">{</span><span class="s2">&quot;Who is the author of It Ends With Us&quot;</span><span class="p">:[</span><span class="s2">&quot;a. Holly Jackson&quot;</span><span class="p">,</span><span class="s2">&quot;b. Colleen Hoover&quot;</span><span class="p">,</span> <span class="s2">&quot;c. Lisa Jewell&quot;</span><span class="p">,</span> <span class="s2">&quot;d. Jennifer Barnes&quot;</span><span class="p">],</span> <span class="s2">&quot;Who is the author of Percy Jackson&quot;</span><span class="p">:[</span><span class="s2">&quot;a. JK Rowling&quot;</span><span class="p">,</span> <span class="s2">&quot;b. Holly Jackson&quot;</span><span class="p">,</span><span class="s2">&quot;c. Rick Riordan&quot;</span><span class="p">,</span> <span class="s2">&quot;d. Colleen Hoover&quot;</span><span class="p">]</span>
<span class="p">,</span> <span class="s2">&quot;When was a Good Girl&#39;s Guide to Murder Published&quot;</span><span class="p">:[</span><span class="s2">&quot;a. 2019&quot;</span><span class="p">,</span><span class="s2">&quot;b. 2018&quot;</span><span class="p">,</span> <span class="s2">&quot;c. 2020&quot;</span><span class="p">,</span> <span class="s2">&quot;d. 2021&quot;</span><span class="p">],</span> <span class="s2">&quot;When was It Starts with Us Published&quot;</span><span class="p">:[</span><span class="s2">&quot;a. 2019&quot;</span><span class="p">,</span><span class="s2">&quot;b. 2020&quot;</span><span class="p">,</span> <span class="s2">&quot;c. 2021&quot;</span><span class="p">,</span> <span class="s2">&quot;d. 2022&quot;</span><span class="p">]}</span>

<span class="c1"># for the answers, used the question as the key and the multiple choice letter as the value </span>
<span class="n">answers</span> <span class="o">=</span> <span class="p">{</span><span class="s2">&quot;Who is the author of It Ends With Us&quot;</span><span class="p">:</span><span class="s2">&quot;b&quot;</span><span class="p">,</span> <span class="s2">&quot;Who is the author of Percy Jackson&quot;</span><span class="p">:</span><span class="s2">&quot;c&quot;</span><span class="p">,</span> <span class="s2">&quot;When was a Good Girl&#39;s Guide to Murder Published&quot;</span><span class="p">:</span><span class="s2">&quot;a&quot;</span><span class="p">,</span> <span class="s2">&quot;When was It Starts with Us Published&quot;</span><span class="p">:</span><span class="s2">&quot;d&quot;</span><span class="p">}</span>
<span class="n">count</span> <span class="o">=</span> <span class="mi">0</span>

<span class="c1"># iterating through the dictonary&#39;s keys and values </span>
<span class="k">for</span> <span class="n">k</span><span class="p">,</span><span class="n">v</span> <span class="ow">in</span> <span class="n">quiz</span><span class="o">.</span><span class="n">items</span><span class="p">():</span>

<span class="c1"># printing the key and it&#39;s values </span>
    <span class="nb">print</span><span class="p">(</span><span class="n">k</span><span class="p">)</span>
    <span class="nb">print</span><span class="p">(</span><span class="o">*</span><span class="n">v</span><span class="p">,</span> <span class="n">sep</span> <span class="o">=</span> <span class="s1">&#39;</span><span class="se">\n</span><span class="s1">&#39;</span><span class="p">)</span>

<span class="c1"># taking the user input for the answer, entering ab</span>
    <span class="n">user_input</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">&quot;Enter Your Answer&quot;</span><span class="p">)</span>

<span class="c1"># comparing that with the answer&#39;s value </span>
    <span class="k">if</span><span class="p">(</span><span class="n">answers</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="n">k</span><span class="p">)</span><span class="o">==</span><span class="n">user_input</span><span class="p">):</span>

        <span class="c1"># incrementing the count </span>
     <span class="n">count</span> <span class="o">=</span> <span class="n">count</span> <span class="o">+</span><span class="mi">1</span>

<span class="c1"># printing the user&#39;s score</span>
<span class="nb">print</span><span class="p">(</span><span class="s1">&#39;You got&#39;</span><span class="p">,</span> <span class="n">count</span><span class="p">,</span> <span class="s1">&#39;correct answers&#39;</span><span class="p">)</span>    
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Who is the author of It Ends With Us
a. Holly Jackson
b. Colleen Hoover
c. Lisa Jewell
d. Jennifer Barnes
Who is the author of Percy Jackson
a. JK Rowling
b. Holly Jackson
c. Rick Riordan
d. Colleen Hoover
When was a Good Girl&#39;s Guide to Murder Published
a. 2019
b. 2018
c. 2020
d. 2021
When was It Starts with Us Published
a. 2019
b. 2020
c. 2021
d. 2022
You got 4 correct answers
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

</div>
 

