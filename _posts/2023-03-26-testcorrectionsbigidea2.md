---
toc: true
layout: post
description: My corrections on the Big Idea 2 MC. 
categories: [markdown, week 27]
title: Big Idea 2 MC Test Corrections 
--- 
# Score  
<img src="{{site.baseurl}}/images/ass.png" alt="AP COMPUTER SCIENCE PRINCIPLES" width="500" height="500"> 

# Corrections 
## Question 20 - Expression to count restaurants: Which of the following expressions will evaluate to true if the restaurant should be counted and evaluates to false otherwise? (Skill 2.B: Implement and apply an algorithm)

<img src="{{site.baseurl}}/images/oop.png" alt="AP COMPUTER SCIENCE PRINCIPLES" width="500" height="500"> 

I got this question wrong, I put A, (avgRating ≥ 4.0) AND ((prcRange = "lo") AND (prcRange = "med")). A is wrong because prcRange is not allowed to be equivalent to both "lo" and "med," so this expression will always evaluate to false. The correct answer is B, (avgRating ≥ 4.0) AND ((prcRange = "lo") OR (prcRange = "med")), because only establishments with the appropriate price range (when prcRange equals "lo" or "med") and customer review (when avgRating  4.0) will have this expression evaluate to true.

## Question 21 - Museum photograph spreadsheet: Assume that applying either of the filters will not change the relative order of the rows remaining in the spreadsheet. Which of the following sequences of steps can be used to identify the desired entry? Select two answers. (Skill 2.B: Implement and apply an algorithm)

<img src="{{site.baseurl}}/images/oop1.png" alt="AP COMPUTER SCIENCE PRINCIPLES" width="500" height="500"> 

I got this question wrong. I put B, filter by photographer, then filter by year, then sort by year. This is correct because any submissions with unknown photographers will be removed by the photographer filter. Any items with ambiguous years will be removed by the year filter. In column C, the remaining entries can be sorted by year, which will place the image with the lowest year number in the first row of the spreadsheet. But I forgot to add the second answer of D, sort by year, then filter by year, then filter by photographer. D is also correct because the spreadsheet's column C will be sorted from least to largest if you choose to sort by year. Any items with ambiguous years will be removed by the year filter. Any submissions with unknown photographers will be removed by the photographer filter. The photo with the lowest year number will be in the first row of the spreadsheet because the filters have no effect on the order of the entries.


## Question 23 - Radio show spreadsheet: For a given row in the spreadsheet, suppose genre contains the genre as a string and day contains the day as a string. Which of the following expressions will evaluate to true if the show should be counted and evaluates to false otherwise? (Skill 2.B: Implement and apply an algorithm). 

<img src="{{site.baseurl}}/images/oop2.png" alt="AP COMPUTER SCIENCE PRINCIPLES" width="500" height="500"> 

I got this question wrong. I put A, (genre = "talk") AND ((day = "Saturday") AND (day = "Sunday")).  A Is incorrect because it is not possible for day to be equal to both "Saturday" and "Sunday", so the second AND operator should be an OR operator. The correct answer is B, (genre = "talk") AND ((day = "Saturday") OR (day = "Sunday")) because talk is the required genre and Saturday or Sunday is the required day in order for a program to be counted. 


## Question 24 - next binary ID number: Each student that enrolls at a school is assigned a unique ID number, which is stored as a binary number. The ID numbers increase sequentially by 1 with each newly enrolled student. If the ID number assigned to the last student who enrolled was the binary number 1001 0011, what binary number will be assigned to the next student who enrolls? (Skill 2.B: Implement and apply an algorithm). 

<img src="{{site.baseurl}}/images/oop3.png" alt="AP COMPUTER SCIENCE PRINCIPLES" width="500" height="500"> 

I got this question wrong. I put C, 1101 0100. The correct answer is C, 1001 0100. I incorrectly identified the bianary number. 

# Reflection 
All of the questions I got wrong on the quiz are from Skill 2.B: Implement and apply an algorithm. There is a clear pattern. I should rewatch the college board videos for Skill 2.B: Implement and apply an algorithm again and write notes on them to ensure I don't get the same skill incorrect on the AP test. I should also probably redo all of the MC problems for this skill. 



