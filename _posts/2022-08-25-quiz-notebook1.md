---
keywords: fastai
description: Hello to Python Hacks
title: Vocabulary/Key Learning Quiz
categories: [week1]
nb_path: _notebooks/2022-08-25-quiz-notebook1.ipynb
layout: notebook
---

<!--
#################################################
### THIS FILE WAS AUTOGENERATED! DO NOT EDIT! ###
#################################################
# file to edit: _notebooks/2022-08-25-quiz-notebook1.ipynb
-->

<div class="container" id="notebook-container">
        
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="kn">import</span> <span class="nn">getpass</span><span class="o">,</span> <span class="nn">sys</span>

<span class="k">def</span> <span class="nf">question_and_answer</span><span class="p">(</span><span class="n">prompt</span><span class="p">):</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Question: &quot;</span> <span class="o">+</span> <span class="n">prompt</span><span class="p">)</span>
    <span class="n">msg</span> <span class="o">=</span> <span class="nb">input</span><span class="p">()</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Answer: &quot;</span> <span class="o">+</span> <span class="n">msg</span><span class="p">)</span>
    
<span class="k">def</span> <span class="nf">question_with_response</span><span class="p">(</span><span class="n">prompt</span><span class="p">):</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;Question: &quot;</span> <span class="o">+</span> <span class="n">prompt</span><span class="p">)</span>
    <span class="n">msg</span> <span class="o">=</span> <span class="nb">input</span><span class="p">()</span>
    <span class="k">return</span> <span class="n">msg</span>

<span class="k">def</span> <span class="nf">evaluate_answer</span><span class="p">(</span><span class="n">answer</span><span class="p">,</span> <span class="n">response</span><span class="p">,</span> <span class="n">correct</span><span class="p">):</span>
    <span class="k">if</span> <span class="n">response</span> <span class="o">==</span> <span class="n">answer</span><span class="p">:</span>
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

<span class="n">rsp</span> <span class="o">=</span> <span class="n">question_with_response</span><span class="p">(</span><span class="s2">&quot;Which key word in Python is used to define a function?&quot;</span><span class="p">)</span>
<span class="n">correct</span> <span class="o">=</span> <span class="n">evaluate_answer</span><span class="p">(</span><span class="s2">&quot;def&quot;</span><span class="p">,</span> <span class="n">rsp</span><span class="p">,</span> <span class="n">correct</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">correct</span><span class="p">)</span>

<span class="n">rsp</span> <span class="o">=</span> <span class="n">question_with_response</span><span class="p">(</span><span class="s2">&quot;What is a synonym for a procedure?&quot;</span><span class="p">)</span>
<span class="n">correct</span> <span class="o">=</span> <span class="n">evaluate_answer</span><span class="p">(</span><span class="s2">&quot;function&quot;</span><span class="p">,</span> <span class="n">rsp</span><span class="p">,</span> <span class="n">correct</span><span class="p">)</span>
<span class="nb">print</span><span class="p">(</span><span class="n">correct</span><span class="p">)</span>


<span class="n">rsp</span> <span class="o">=</span> <span class="n">question_with_response</span><span class="p">(</span><span class="s2">&quot;What do two or more lines of code form?&quot;</span><span class="p">)</span>
<span class="n">correct</span> <span class="o">=</span> <span class="n">evaluate_answer</span><span class="p">(</span><span class="s2">&quot;sequence&quot;</span><span class="p">,</span> <span class="n">rsp</span><span class="p">,</span> <span class="n">correct</span><span class="p">)</span>
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
Question: Which key word in Python is used to define a function?
def is correct!
1
Question: What is a synonym for a procedure?
function is correct!
2
Question: What do two or more lines of code form?
sequence is correct!
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
 
