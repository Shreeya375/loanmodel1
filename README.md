Note: I spoke with Athena reviewers and tech staff about technical issues with Git and commits. All of the code was written in VS Code and then I uploaded to this repository. I ran into Git download and admin issues while setting it up locally, which may help explain the commit history. I’m new to Git and wasn’t aware of these issues. Getting it figured out for the next projects. Thanks for understanding!


Loan Model 

This is a website that takes inputs from the user such as the loan amount, total amount of savings, and debt accumulated. It then calculates your risk level from low to high. This program was coded from HTML, CSS, and Java Script. 


Purpose: I built this to practice using HTML, CSS, and js. It came together to build a simple and interactive website for users to play with. It shows how basic financial inputs can be used to calculate a debt to income ratio that can be interpreted in an efficient way. 

How it works:
This program gives points in 3 categories. 
Expenses: Lower the expenses the lower the risk
Savings: The more savings, the lower the risk
Debt: lower the debt, lower the risk

The total score is converted into a number from 1-5. 


Code Layout:

index.html
This file contains the layout of the website. It creates each element you see on the screen including buttons, text, inputs, and windows.

script.js 
Contains the main logic of the risk calculator. It reads the numbers the user enters. 
It calculates the debt to income ratio, and adds up the score based on those values. It updates the risk bar with a color (red - negative, orange - okay, - green - positive). Displays a short description of why that result was given. 

