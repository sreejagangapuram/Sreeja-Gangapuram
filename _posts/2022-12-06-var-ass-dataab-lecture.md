---
keywords: fastai
title: (Day 1) Unit 3 Sections 1-2 - Variables, Assignments, and Data Abstractions
toc: true
permalink: /techtalk/books
nb_path: _notebooks/2022-2-27-var-ass-dataab-lecture.ipynb
layout: notebook
---

<!--
#################################################
### THIS FILE WAS AUTOGENERATED! DO NOT EDIT! ###
#################################################
# file to edit: _notebooks/2022-2-27-var-ass-dataab-lecture.ipynb
-->

<div class="container" id="notebook-container">
        
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Variables">Variables<a class="anchor-link" href="#Variables"> </a></h2><ul>
<li><mark>Variable</mark>: An abstraction can hold a value and organizes data by assigning a name <ul>
<li>Contains three parts<ul>
<li>Naming <ul>
<li>Make the name as general as possible <ul>
<li>Not too specific </li>
<li>Capitalized letters </li>
<li>Don’t make it too vague </li>
<li>Don’t put spaces </li>
</ul>
</li>
</ul>
</li>
<li>Types of data <ul>
<li>Integer: number </li>
<li>Text: word </li>
<li>Boolean: data - true or false </li>
</ul>
</li>
<li>Store a list of data <ul>
<li>Don’t create a lot of values </li>
<li>Make changes easily </li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><mark>Assignments</mark>: allows a program to change the value represented by a variable  <ul>
<li>See table for individual operators </li>
<li>Changing values </li>
</ul>
</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Examples">Examples<a class="anchor-link" href="#Examples"> </a></h2>
</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">name</span> <span class="o">=</span> <span class="s2">&quot;table1&quot;</span> <span class="c1">#string</span>
<span class="nb">print</span><span class="p">(</span><span class="n">name</span><span class="p">,</span> <span class="nb">type</span><span class="p">(</span><span class="n">name</span><span class="p">))</span>

<span class="n">number</span> <span class="o">=</span> <span class="mi">4</span> <span class="c1">#integer</span>
<span class="nb">print</span><span class="p">(</span><span class="n">number</span><span class="p">,</span> <span class="nb">type</span><span class="p">(</span><span class="n">number</span><span class="p">))</span>

<span class="n">isAbsent</span> <span class="o">=</span> <span class="kc">False</span>
<span class="nb">print</span><span class="p">(</span><span class="n">isAbsent</span><span class="p">,</span> <span class="nb">type</span><span class="p">(</span><span class="n">isAbsent</span><span class="p">))</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>table1 &lt;class &#39;str&#39;&gt;
4 &lt;class &#39;int&#39;&gt;
False &lt;class &#39;bool&#39;&gt;
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
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">colors</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;red&quot;</span><span class="p">,</span> <span class="s2">&quot;orange&quot;</span><span class="p">,</span> <span class="s2">&quot;yellow&quot;</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="n">colors</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>yellow
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
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">a</span> <span class="o">=</span> <span class="mi">1</span>
<span class="n">b</span> <span class="o">=</span> <span class="mi">2</span>
<span class="n">a</span> <span class="o">=</span> <span class="n">b</span>
<span class="nb">print</span><span class="p">(</span><span class="n">a</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>2
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
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">a</span> <span class="o">=</span> <span class="mi">1</span>
<span class="n">b</span> <span class="o">=</span> <span class="n">a</span>
<span class="n">a</span> <span class="o">=</span> <span class="mi">2</span>
<span class="nb">print</span><span class="p">(</span><span class="n">b</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>1
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
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">currentScore</span> <span class="o">=</span> <span class="mi">10</span>
<span class="n">highScore</span> <span class="o">=</span> <span class="n">currentScore</span>
<span class="n">currentScore</span> <span class="o">=</span> <span class="mi">7</span>
<span class="nb">print</span><span class="p">(</span><span class="n">highScore</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>10
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Problems-to-Solve">Problems to Solve<a class="anchor-link" href="#Problems-to-Solve"> </a></h2>
</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">num1</span> <span class="o">=</span> <span class="mi">5</span>
<span class="n">num2</span> <span class="o">=</span> <span class="mi">9</span>
<span class="n">num1</span> <span class="o">=</span> <span class="n">num2</span>

<span class="nb">print</span><span class="p">(</span><span class="n">num1</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">num2</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>9
9
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
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">num1</span> <span class="o">=</span> <span class="mi">15</span>
<span class="n">num2</span> <span class="o">=</span> <span class="mi">25</span>
<span class="n">num3</span> <span class="o">=</span> <span class="mi">42</span>
<span class="n">num2</span> <span class="o">=</span> <span class="n">num3</span>
<span class="n">num3</span> <span class="o">=</span> <span class="n">num1</span>
<span class="n">num1</span> <span class="o">=</span> <span class="n">num2</span>

<span class="nb">print</span><span class="p">(</span><span class="n">num1</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">num2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">num3</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>42
42
15
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Which of these will show the sum?</p>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">num2</span> <span class="o">+=</span> <span class="n">num1</span>
<span class="nb">print</span><span class="p">(</span><span class="n">num1</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">num2</span><span class="p">)</span>

<span class="nb">print</span><span class="p">(</span><span class="nb">str</span><span class="p">(</span><span class="n">num1</span><span class="p">)</span><span class="o">+</span> <span class="nb">str</span><span class="p">(</span><span class="n">num2</span><span class="p">))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">num1</span> <span class="o">+</span> <span class="n">num2</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>42
84
4284
126
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Data-Abstraction">Data Abstraction<a class="anchor-link" href="#Data-Abstraction"> </a></h2><ul>
<li>Take away aspects of data that aren’t used <ul>
<li>Variables and lists are used in data abstraction </li>
</ul>
</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Lists-&amp;-Strings">Lists &amp; Strings<a class="anchor-link" href="#Lists-&amp;-Strings"> </a></h2><ul>
<li>List - ordered sequence of elements<ul>
<li>Element - individual value in a list that is assigned to a unique index</li>
<li>Index - references the elements in a list or string </li>
<li>String - ordered sequence of characters </li>
</ul>
</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<ul>
<li><mark>Lists</mark><ul>
<li>Allow for data abstraction </li>
<li>Bundle variables together </li>
<li>Can keep adding elements </li>
</ul>
</li>
<li>List operations <ul>
<li>Assigning values to a list of indices </li>
<li>Create an empty list and assign it to a variable </li>
<li>Assign a copy of one list to another </li>
</ul>
</li>
<li>Lists help manage complexity <ul>
<li>Improves code readability </li>
<li>Don't need many variables </li>
<li>Can apply mathematical computation</li>
</ul>
</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="List-Examples">List Examples<a class="anchor-link" href="#List-Examples"> </a></h2>
</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">colorsList</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;pink&quot;</span><span class="p">,</span> <span class="s2">&quot;yellow&quot;</span><span class="p">,</span> <span class="s2">&quot;green&quot;</span><span class="p">,</span> <span class="s2">&quot;blue&quot;</span><span class="p">,</span> <span class="s2">&quot;orange&quot;</span><span class="p">]</span>

<span class="nb">print</span><span class="p">(</span><span class="n">colorsList</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>[&#39;pink&#39;, &#39;yellow&#39;, &#39;green&#39;, &#39;blue&#39;, &#39;orange&#39;]
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
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">colorsList</span><span class="o">=</span><span class="p">[]</span> <span class="c1"># can be used if you want to create a list that can be filled with values later</span>
</pre></div>

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
<div class=" highlight hl-ipython3"><pre><span></span><span class="c1"># copy of the list is made; the list isn&#39;t sorted in place</span>
<span class="k">def</span> <span class="nf">Reverse</span><span class="p">(</span><span class="n">lst</span><span class="p">):</span> <span class="c1"># defining variable: lst </span>
    <span class="n">new_lst</span> <span class="o">=</span> <span class="n">lst</span><span class="p">[::</span><span class="o">-</span><span class="mi">1</span><span class="p">]</span> 
    <span class="k">return</span> <span class="n">new_lst</span>
 
<span class="n">lst</span> <span class="o">=</span> <span class="p">[</span><span class="s2">&quot;pink&quot;</span><span class="p">,</span> <span class="s2">&quot;green&quot;</span><span class="p">,</span> <span class="s2">&quot;purple&quot;</span><span class="p">,</span> <span class="s2">&quot;yellow&quot;</span><span class="p">,</span> <span class="s2">&quot;orange&quot;</span><span class="p">,</span> <span class="s2">&quot;blue&quot;</span><span class="p">,</span> <span class="s2">&quot;black&quot;</span><span class="p">]</span>
<span class="nb">print</span><span class="p">(</span><span class="n">Reverse</span><span class="p">(</span><span class="n">lst</span><span class="p">))</span> <span class="c1"># reverse 1st</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>[&#39;black&#39;, &#39;blue&#39;, &#39;orange&#39;, &#39;yellow&#39;, &#39;purple&#39;, &#39;green&#39;, &#39;pink&#39;]
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Data-Abstraction-Practice">Data Abstraction Practice<a class="anchor-link" href="#Data-Abstraction-Practice"> </a></h2><blockquote><p>Manage the complexity of the given code below using a list. Re-write the code segment in a less complex way, but with the same result.</p>
</blockquote>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">color1</span><span class="o">=</span><span class="s2">&quot;green&quot;</span>
<span class="n">color2</span><span class="o">=</span><span class="s2">&quot;red&quot;</span>
<span class="n">color3</span><span class="o">=</span><span class="s2">&quot;pink&quot;</span>
<span class="n">color4</span><span class="o">=</span><span class="s2">&quot;purple&quot;</span>
<span class="n">color5</span><span class="o">=</span><span class="s2">&quot;blue&quot;</span>
<span class="n">color6</span><span class="o">=</span><span class="s2">&quot;brown&quot;</span>

<span class="nb">print</span><span class="p">(</span><span class="n">color1</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">color2</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">color3</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">color4</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">color5</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">color6</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>green
red
pink
purple
blue
brown
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p><strong>Answer</strong></p>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">colorList</span><span class="o">=</span><span class="p">[</span><span class="s2">&quot;green&quot;</span><span class="p">,</span> <span class="s2">&quot;red&quot;</span><span class="p">,</span> <span class="s2">&quot;pink&quot;</span><span class="p">,</span> <span class="s2">&quot;purple&quot;</span><span class="p">,</span> <span class="s2">&quot;blue&quot;</span><span class="p">,</span> <span class="s2">&quot;brown&quot;</span><span class="p">]</span>

<span class="k">for</span> <span class="n">i</span> <span class="ow">in</span> <span class="n">colorList</span><span class="p">:</span> 
    <span class="nb">print</span> <span class="p">(</span><span class="n">i</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>green
red
pink
purple
blue
brown
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="Homework">Homework<a class="anchor-link" href="#Homework"> </a></h1><p>You will turn in a program that utilizes lists and variables as it's primary function, options could be a quiz, a sorter, database, or wherever your imagination brings you. You will be graded on how well you understood the concepts and if you used anything other than just the simplest parts</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<p>Quiz template, if you do use it, fix the issues, and add more to it than it's current barebones state. I would recommend using it to create something related to school.</p>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">getpass</span><span class="o">,</span> <span class="nn">sys</span>
<span class="c1">#used three variables (q1, q2, q3) for the questions. </span>
<span class="n">q1</span> <span class="o">=</span> <span class="s2">&quot;Who is the author of A Good Girl&#39;s Guide To Murder?&quot;</span>
<span class="n">q2</span> <span class="o">=</span> <span class="s2">&quot;What is the rating of The Silent Patient?&quot;</span>
<span class="n">q3</span> <span class="o">=</span> <span class="s2">&quot;In what year were A Good Girl&#39;s Guide to Murder and The Silent Patient published?&quot;</span>

<span class="c1">#defining a dictionary using the above questions and answers. </span>
<span class="n">quiz</span> <span class="o">=</span> <span class="p">{</span> <span class="n">q1</span><span class="p">:</span> <span class="s2">&quot;Holly Jackson&quot;</span><span class="p">,</span> 
         <span class="n">q2</span><span class="p">:</span> <span class="s2">&quot;4.2&quot;</span><span class="p">,</span>
         <span class="n">q3</span><span class="p">:</span> <span class="s2">&quot;2019&quot;</span>
        <span class="p">}</span>
    

<span class="k">def</span> <span class="nf">question_and_answer</span><span class="p">(</span><span class="n">prompt</span><span class="p">):</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Question: &quot;</span> <span class="o">+</span> <span class="n">prompt</span><span class="p">)</span>
    <span class="n">msg</span> <span class="o">=</span> <span class="nb">input</span><span class="p">()</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Answer: &quot;</span> <span class="o">+</span> <span class="n">msg</span><span class="p">)</span>
    
<span class="k">def</span> <span class="nf">question_with_response</span><span class="p">(</span><span class="n">prompt</span><span class="p">):</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Question: &quot;</span> <span class="o">+</span> <span class="n">prompt</span><span class="p">)</span>
    <span class="n">msg</span> <span class="o">=</span> <span class="nb">input</span><span class="p">()</span>
    <span class="k">return</span> <span class="n">msg</span>

<span class="c1">#evaluating the answer using the get() function on the dictionary. &quot;Python dictionary method get() returns a value for the given key. If key is not available then returns default value None.&quot;</span>
<span class="k">def</span> <span class="nf">evaluate_answer</span><span class="p">(</span><span class="n">question</span><span class="p">,</span> <span class="n">response</span><span class="p">,</span> <span class="n">correct</span><span class="p">):</span>
    <span class="k">if</span> <span class="n">response</span> <span class="o">==</span> <span class="n">quiz</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="n">question</span><span class="p">):</span>
      <span class="nb">print</span><span class="p">(</span><span class="n">response</span> <span class="o">+</span> <span class="s2">&quot; is correct!&quot;</span><span class="p">)</span>
      <span class="n">correct</span> <span class="o">+=</span> <span class="mi">1</span>
    <span class="k">else</span><span class="p">:</span>
      <span class="nb">print</span><span class="p">(</span><span class="n">response</span> <span class="o">+</span> <span class="s2">&quot; is incorrect!&quot;</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">correct</span>
    


<span class="n">questions</span> <span class="o">=</span> <span class="mi">3</span>
<span class="n">correct</span> <span class="o">=</span> <span class="mi">0</span>

<span class="nb">print</span><span class="p">(</span><span class="s1">&#39;Hello, &#39;</span> <span class="o">+</span> <span class="n">getpass</span><span class="o">.</span><span class="n">getuser</span><span class="p">()</span> <span class="o">+</span> <span class="s2">&quot; running &quot;</span> <span class="o">+</span> <span class="n">sys</span><span class="o">.</span><span class="n">executable</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;You will be asked &quot;</span> <span class="o">+</span> <span class="nb">str</span><span class="p">(</span><span class="n">questions</span><span class="p">)</span> <span class="o">+</span> <span class="s2">&quot; questions.&quot;</span><span class="p">)</span>
<span class="n">question_and_answer</span><span class="p">(</span><span class="s2">&quot;Are you ready to take a test?&quot;</span><span class="p">)</span>

<span class="n">rsp</span> <span class="o">=</span> <span class="n">question_with_response</span><span class="p">(</span><span class="n">q1</span><span class="p">)</span>
<span class="n">correct</span> <span class="o">=</span> <span class="n">evaluate_answer</span><span class="p">(</span><span class="n">q1</span><span class="p">,</span> <span class="n">rsp</span><span class="p">,</span> <span class="n">correct</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">correct</span><span class="p">)</span>

<span class="n">rsp</span> <span class="o">=</span> <span class="n">question_with_response</span><span class="p">(</span><span class="n">q2</span><span class="p">)</span>
<span class="n">correct</span> <span class="o">=</span> <span class="n">evaluate_answer</span><span class="p">(</span><span class="n">q2</span><span class="p">,</span> <span class="n">rsp</span><span class="p">,</span> <span class="n">correct</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">correct</span><span class="p">)</span>


<span class="n">rsp</span> <span class="o">=</span> <span class="n">question_with_response</span><span class="p">(</span><span class="n">q3</span><span class="p">)</span>
<span class="n">correct</span> <span class="o">=</span> <span class="n">evaluate_answer</span><span class="p">(</span><span class="n">q3</span><span class="p">,</span> <span class="n">rsp</span><span class="p">,</span> <span class="n">correct</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">correct</span><span class="p">)</span>

<span class="nb">print</span><span class="p">(</span><span class="n">getpass</span><span class="o">.</span><span class="n">getuser</span><span class="p">()</span> <span class="o">+</span> <span class="s2">&quot; you scored &quot;</span> <span class="o">+</span> <span class="nb">str</span><span class="p">(</span><span class="n">correct</span><span class="p">)</span> <span class="o">+</span><span class="s2">&quot;/&quot;</span> <span class="o">+</span> <span class="nb">str</span><span class="p">(</span><span class="n">questions</span><span class="p">))</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>Hello, SreejaGangapuram running /usr/local/bin/python3
You will be asked 3 questions.
Question: Are you ready to take a test?
Answer: yes
Question: Who is the author of A Good Girl&#39;s Guide To Murder?
Holly Jackson is correct!
1
Question: What is the rating of The Silent Patient?
4.2 is correct!
2
Question: In what year were A Good Girl&#39;s Guide to Murder and The Silent Patient published?
2019 is correct!
3
SreejaGangapuram you scored 3/3
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

</div>
 
