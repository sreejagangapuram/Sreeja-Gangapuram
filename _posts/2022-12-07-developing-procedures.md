---
keywords: fastai
description: Developing and Writing Procedures Lesson
title: Unit 3 Sections 12-13
toc: true
badges: false
categories: [lessons]
nb_path: _notebooks/2022-12-07-developing-procedures.ipynb
layout: notebook
---

<!--
#################################################
### THIS FILE WAS AUTOGENERATED! DO NOT EDIT! ###
#################################################
# file to edit: _notebooks/2022-12-07-developing-procedures.ipynb
-->

<div class="container" id="notebook-container">
        
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Calling-Procedures">Calling Procedures<a class="anchor-link" href="#Calling-Procedures"> </a></h2><p>Slide 1:</p>
<ul>
<li>A <strong>procedure</strong> is a named group of programming instructions that may have parameters and return values.</li>
<li>Procedures are referred to by different names, such as <strong>method</strong> or <strong>function</strong>, depending on the programing language.</li>
<li>Parameters are input values of a procedure. <strong>Arguments</strong> specify the values of the parameters when procedure is called.</li>
<li>A procedure call interrupts the <strong>sequential</strong> execution of statements causing the program to execute the statements within the procedure before continuing. One the last statement in the procedure (or a return statement) has executed, flow or control is returned to the point immediately following where the procedure was <strong>called</strong>.</li>
</ul>
<p>Slide 2:</p>
<ul>
<li>When calling procedures, it's important to take notice to whether it returns data, or a block of <strong>statements</strong>.</li>
<li>If the procedure just returns a block of statements, you call the procedure by referring to the procedure name, and <strong>inputting</strong> the arguments.</li>
<li>If the procedure returns some sort of data like a <strong>boolean</strong> or <strong>value</strong>, then you will assign that value to a variable</li>
</ul>
<p>Slide 3:</p>
<ul>
<li>Assume the Temperature outside is Fahrenheit. </li>
<li>The procedure <strong>convertFahrenheit</strong> is intended to convert from Fahrenheit to Celsius.</li>
<li>Convert the following <strong>psuedocode</strong> to python</li>
</ul>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">convertFahrenheit</span><span class="p">(</span><span class="n">temperature</span><span class="p">):</span>
    <span class="n">celsius</span> <span class="o">=</span>  <span class="n">temperature</span> <span class="o">-</span> <span class="mi">32</span> 
    <span class="n">celsius</span> <span class="o">=</span> <span class="n">celsius</span> <span class="o">*</span> <span class="mi">5</span><span class="o">/</span><span class="mi">9</span> 
    <span class="k">return</span> <span class="n">celsius</span>

<span class="n">outsideTemp</span> <span class="o">=</span> <span class="nb">input</span><span class="p">(</span><span class="s2">&quot;What is the temperature Outside?&quot;</span><span class="p">)</span>
<span class="n">outsideTemp</span> <span class="o">=</span> <span class="p">(</span><span class="n">convertFahrenheit</span><span class="p">(</span><span class="nb">int</span><span class="p">(</span><span class="n">outsideTemp</span><span class="p">)))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">outsideTemp</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>-6.666666666666667
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Developing-Procedures">Developing Procedures<a class="anchor-link" href="#Developing-Procedures"> </a></h2><p>Slide 8:</p>
<p>Picking a <strong>descriptive</strong> name is important in case you revisit the code later on (separate words with capitals)
There are 2 different types of procedures- ones that return a value and those that simply execute a block of statements
Steps of developing procedure: picking a useful name, thinking of parameters (what data does the procedure need to know), making a flowchart or writing procedure in pseudocode, and actually developing the procedure.</p>
<p>Slide 9:</p>
<p>In this example, a teacher is writing a program that will replace the grade on a previous quiz if the new grade is better than the previous.</p>
<ul>
<li>What would be a good name for this procedure?</li>
<li>What parameters do we need for this procedure?</li>
<li>Try writing this procedure out in python based on the given pseudocode</li>
</ul>

</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="k">def</span> <span class="nf">gradeCalculation</span> <span class="p">(</span><span class="n">score</span><span class="p">):</span>
    <span class="nb">print</span><span class="p">(</span><span class="s2">&quot;What was the quiz grade?&quot;</span><span class="p">)</span>
    <span class="n">quizGrade</span> <span class="o">=</span> <span class="nb">input</span><span class="p">()</span>
    <span class="n">quizGrade</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="n">quizGrade</span><span class="p">)</span>
    <span class="n">currentGrade</span> <span class="o">=</span> <span class="n">score</span> <span class="o">/</span> <span class="mi">40</span> 
    <span class="n">currentGrade</span> <span class="o">=</span> <span class="n">currentGrade</span> <span class="o">*</span> <span class="mi">100</span>
    <span class="k">if</span> <span class="n">currentGrade</span> <span class="o">&gt;</span> <span class="n">quizGrade</span><span class="p">:</span>
        <span class="n">quizGrade</span> <span class="o">=</span> <span class="n">currentGrade</span>
        <span class="nb">print</span><span class="p">(</span><span class="n">quizGrade</span><span class="p">)</span>
    <span class="k">else</span><span class="p">:</span> 
        <span class="nb">print</span><span class="p">(</span><span class="n">currentGrade</span><span class="p">)</span>
        
<span class="nb">print</span><span class="p">(</span><span class="s2">&quot;What was the overall grade&quot;</span><span class="p">)</span>

<span class="n">finalScore</span> <span class="o">=</span> <span class="nb">input</span><span class="p">()</span>
<span class="n">finalScore</span> <span class="o">=</span> <span class="p">(</span><span class="n">gradeCalculation</span><span class="p">(</span><span class="nb">int</span><span class="p">(</span><span class="n">finalScore</span><span class="p">)))</span>
<span class="nb">print</span><span class="p">(</span><span class="n">finalScore</span><span class="p">)</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>What was the overall grade
What was the quiz grade?
50.0
None
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Procedural-Abstraction">Procedural Abstraction<a class="anchor-link" href="#Procedural-Abstraction"> </a></h2><ul>
<li>One type of abstraction is <strong>procedural</strong> abstraction which provides a name for a process and allows a procedure to be used only knowing what it does and not how it does it</li>
<li>This is very helpful in managing <strong>complexity</strong> in a program</li>
<li>Subdivision of a program into separate subprograms is called <strong>modularity</strong></li>
<li>A procedural abstraction may <strong>extract</strong> shared features to generalize functionality instead of duplicating code. This allows for program reuse, which helps manage complexity</li>
<li>When a pre-written procedure is called, you don’t necessarily need to know the details of this, just what it does and how to call it</li>
<li>Simply, procedural abstraction is naming and calling a <strong>prewritten</strong> procedure</li>
<li>Making sure to include the right arguments so the <strong>procedure</strong> can do what its supposed to do is crucial</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Complexity-Example">Complexity Example<a class="anchor-link" href="#Complexity-Example"> </a></h2><p>One of the biggest advantages of procedural abstraction is managing complexity.</p>
<p>Think about the process of simplifying the code?
What do you think the advantage of the code segment on the left is?</p>
<table>
<thead><tr>
<th>Code Segment 1</th>
<th>Code Segment 2</th>
</tr>
</thead>
<tbody>
<tr>
<td>ROTATE_LEFT()</td>
<td>detourLeft()</td>
</tr>
</tbody>
</table>
<p>MOVE_FORWARD()|turnCorner()| 
ROTATE_RIGHT  |MOVE_FORWARD()| 
MOVE_FORWARD()|MOVE_FORWARD()|
MOVE_FORWARD()
ROTATE_RIGHT()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()
ROTATE_LEFT()
MOVE_FORWARD()
MOVE_FORWARD
MOVE_FORWARD()</p>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h2 id="Hacks">Hacks<a class="anchor-link" href="#Hacks"> </a></h2><ul>
<li>Write a python procedure about something which can help you in school, for example the teacher’s function we spoke about earlier.</li>
<li>Points will be awarded based on creativity and functionality</li>
<li>0.1 points will be deducted for late submissions</li>
<li>Submit the notes with all blanks filled in (scored out of 0.5 points) and the python procedure (scored out of 0.5 points) by Monday 12/12 at 11:59 PM.</li>
</ul>

</div>
</div>
</div>
<div class="cell border-box-sizing text_cell rendered"><div class="inner_cell">
<div class="text_cell_render border-box-sizing rendered_html">
<h1 id="Graduation-Requirement-Checker">Graduation Requirement Checker<a class="anchor-link" href="#Graduation-Requirement-Checker"> </a></h1>
</div>
</div>
</div>
    {% raw %}
    
<div class="cell border-box-sizing code_cell rendered">
<div class="input">

<div class="inner_cell">
    <div class="input_area">
<div class=" highlight hl-ipython3"><pre><span></span><span class="n">courseReqs</span> <span class="o">=</span> <span class="p">{</span><span class="s1">&#39;history&#39;</span><span class="p">:</span> <span class="mi">20</span><span class="p">,</span> <span class="s1">&#39;english&#39;</span><span class="p">:</span> <span class="mi">40</span><span class="p">,</span> <span class="s1">&#39;math&#39;</span><span class="p">:</span> <span class="mi">30</span><span class="p">,</span> <span class="s1">&#39;science&#39;</span><span class="p">:</span><span class="mi">20</span><span class="p">,</span>
<span class="s1">&#39;secondary language&#39;</span><span class="p">:</span><span class="mi">20</span><span class="p">,</span> <span class="s1">&#39;arts&#39;</span><span class="p">:</span><span class="mi">10</span><span class="p">,</span> <span class="s1">&#39;college prep elective&#39;</span><span class="p">:</span> <span class="mi">10</span><span class="p">}</span>
<span class="n">questions</span> <span class="o">=</span> <span class="p">{</span>
   <span class="s1">&#39;history&#39;</span><span class="p">:</span><span class="s1">&#39;How many History credits do you have?&#39;</span> <span class="p">,</span>
   <span class="s1">&#39;english&#39;</span><span class="p">:</span><span class="s1">&#39;How many English credits do you have?&#39;</span><span class="p">,</span>
   <span class="s1">&#39;math&#39;</span><span class="p">:</span><span class="s1">&#39;How many Math credits do you have?&#39;</span><span class="p">,</span>

   <span class="s1">&#39;science&#39;</span><span class="p">:</span><span class="s1">&#39;How many Science credits do you have?&#39;</span><span class="p">,</span>
   <span class="s1">&#39;secondary language&#39;</span><span class="p">:</span><span class="s1">&#39;How many Secondary Language credits do you have?&#39;</span><span class="p">,</span>
   <span class="s1">&#39;arts&#39;</span><span class="p">:</span><span class="s1">&#39;How many Arts credits do you have?&#39;</span><span class="p">,</span>
   <span class="s1">&#39;college prep elective&#39;</span><span class="p">:</span><span class="s1">&#39;How many College prep elective credits do you have?&#39;</span>
<span class="p">}</span>
<span class="n">requirementsNotMet</span> <span class="o">=</span> <span class="p">[]</span>
<span class="k">def</span> <span class="nf">canIGraduateHighSchool</span><span class="p">():</span>

    <span class="c1">#requirementsNotMet = []</span>
    
    <span class="n">historyCredits</span> <span class="o">=</span> <span class="n">getCredits</span><span class="p">(</span><span class="s1">&#39;history&#39;</span><span class="p">)</span>
    <span class="n">englishCredits</span> <span class="o">=</span> <span class="n">getCredits</span><span class="p">(</span><span class="s1">&#39;english&#39;</span><span class="p">)</span>
    <span class="n">mathCredits</span> <span class="o">=</span> <span class="n">getCredits</span><span class="p">(</span><span class="s1">&#39;math&#39;</span><span class="p">)</span>
    <span class="n">scienceCredits</span> <span class="o">=</span> <span class="n">getCredits</span><span class="p">(</span><span class="s1">&#39;science&#39;</span><span class="p">)</span>
    <span class="n">secLangCredits</span> <span class="o">=</span> <span class="n">getCredits</span><span class="p">(</span><span class="s1">&#39;secondary language&#39;</span><span class="p">)</span>
    <span class="n">artCredits</span> <span class="o">=</span> <span class="n">getCredits</span><span class="p">(</span><span class="s1">&#39;arts&#39;</span><span class="p">)</span>
    <span class="n">collegePrepCredits</span> <span class="o">=</span> <span class="n">getCredits</span><span class="p">(</span><span class="s1">&#39;college prep elective&#39;</span><span class="p">)</span>
    
    <span class="n">validateCreditRequirement</span><span class="p">(</span><span class="s1">&#39;history&#39;</span><span class="p">,</span> <span class="n">historyCredits</span><span class="p">)</span>
    <span class="n">validateCreditRequirement</span><span class="p">(</span><span class="s1">&#39;english&#39;</span><span class="p">,</span> <span class="n">englishCredits</span><span class="p">)</span>
    <span class="n">validateCreditRequirement</span><span class="p">(</span><span class="s1">&#39;math&#39;</span><span class="p">,</span> <span class="n">mathCredits</span><span class="p">)</span>
    <span class="n">validateCreditRequirement</span><span class="p">(</span><span class="s1">&#39;science&#39;</span><span class="p">,</span> <span class="n">scienceCredits</span><span class="p">)</span>
    <span class="n">validateCreditRequirement</span><span class="p">(</span><span class="s1">&#39;secondary language&#39;</span><span class="p">,</span> <span class="n">secLangCredits</span><span class="p">)</span>
    <span class="n">validateCreditRequirement</span><span class="p">(</span><span class="s1">&#39;arts&#39;</span><span class="p">,</span> <span class="n">artCredits</span><span class="p">)</span>
    <span class="n">validateCreditRequirement</span><span class="p">(</span><span class="s1">&#39;college prep elective&#39;</span><span class="p">,</span> <span class="n">collegePrepCredits</span><span class="p">)</span>
   
   

    <span class="k">if</span> <span class="n">requirementsNotMet</span><span class="p">:</span> 
       <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;These requirements are not met: &#39;</span><span class="p">,</span><span class="n">requirementsNotMet</span><span class="p">)</span>
    <span class="k">else</span><span class="p">:</span>
       <span class="nb">print</span><span class="p">(</span><span class="s1">&#39;Yay! You have met the requirements, You can Graduate High School!&#39;</span><span class="p">)</span>

<span class="k">def</span> <span class="nf">getCredits</span><span class="p">(</span><span class="n">subject</span><span class="p">):</span>
    <span class="n">question</span> <span class="o">=</span> <span class="n">questions</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="n">subject</span><span class="p">)</span>
    <span class="n">credits</span> <span class="o">=</span> <span class="nb">int</span><span class="p">(</span><span class="nb">input</span><span class="p">(</span><span class="n">question</span><span class="p">))</span>
    <span class="nb">print</span><span class="p">(</span><span class="n">question</span><span class="p">,</span> <span class="n">credits</span><span class="p">)</span>
    <span class="k">return</span> <span class="n">credits</span>

<span class="k">def</span> <span class="nf">validateCreditRequirement</span><span class="p">(</span><span class="n">subject</span><span class="p">,</span> <span class="n">studentCredits</span><span class="p">):</span>
    <span class="k">if</span><span class="p">(</span><span class="n">studentCredits</span> <span class="o">&lt;</span> <span class="n">courseReqs</span><span class="o">.</span><span class="n">get</span><span class="p">(</span><span class="n">subject</span><span class="p">)):</span>
        <span class="n">requirementsNotMet</span><span class="o">.</span><span class="n">append</span><span class="p">(</span><span class="n">subject</span><span class="p">)</span>
   

<span class="n">canIGraduateHighSchool</span><span class="p">()</span>
</pre></div>

    </div>
</div>
</div>

<div class="output_wrapper">
<div class="output">

<div class="output_area">

<div class="output_subarea output_stream output_stdout output_text">
<pre>How many History credits do you have? 20
How many English credits do you have? 30
How many Math credits do you have? 30
How many Science credits do you have? 20
How many Secondary Language credits do you have? 20
How many Arts credits do you have? 5
How many College prep elective credits do you have? 10
These requirements are not met:  [&#39;english&#39;, &#39;arts&#39;]
</pre>
</div>
</div>

</div>
</div>

</div>
    {% endraw %}

</div>
 
