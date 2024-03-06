# Challenging-Quiz
This website starts with the homepage to either view highscores or start the quiz.
<img width="1280" alt="Screen Shot 2024-03-06 at 2 43 38 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/7a2667ae-0139-4abf-9a55-8de93a46d1e1">
If one gets it wrong, the response will be 'Sorry! You will get it next fime!' and the console will say "incorrect"
<img width="1280" alt="Screen Shot 2024-03-06 at 2 43 51 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/d4f7effd-aa5f-4b44-a4dc-03a917218523">
If one gets the one correct answer, the rseponse will be 'Excellent! You know your stuff!' and the console will say "correct"
<img width="1280" alt="Screen Shot 2024-03-06 at 2 43 59 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/ba5ad867-fa79-4b70-a4c5-4c7f13593193">
When the quiz is finished, one will get their score (maximum is 60), and be asked to input their identifying information with the score.
<img width="1280" alt="Screen Shot 2024-03-06 at 2 44 18 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/f4a4739c-a1c2-4657-aa3b-a8b3c75ef0f5">
When one presses the button to submit it, then they will be directed to the highscores page. It's orange, but turns blue when one hovers over it to return to the homepage. 
<img width="1280" alt="Screen Shot 2024-03-06 at 2 46 12 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/a2e8a136-9007-461e-8c58-603e15a1e857">
While the name and score are not displayed on the page, it is available in the console application
<img width="1280" alt="Screen Shot 2024-03-06 at 2 46 43 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/5456ee6d-8dea-4c45-88a1-cf22190ac979">
When one returns to the homepage, one can select to either take the quiz again, or go see highscores (also hovers blue)
<img width="1280" alt="Screen Shot 2024-03-06 at 2 47 13 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/f05a3cc5-0529-47fb-81fa-b1649c20b50d">
On the HTML, I created ids and classes to almost everything on the page to allow each component to be used in JavaScript via <script> source. I put everythig except the highscores page here, starting with "hidden" class for the "quiz" and "input Name" pages. 
<img width="1280" alt="Screen Shot 2024-03-06 at 2 50 07 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/294578b0-55bf-433f-9065-3ea8f31f599f">
At the top of the JavaScript page, I created most of the variables that I expect to use. The first function I created was the event-listener to allow the "Start Quiz" button to direct to the quiz section, with a couple window.location.replace(html page) to allow redirecting by event-listeners.
<img width="1280" alt="Screen Shot 2024-03-06 at 3 08 12 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/9a33ec71-1bec-4c4c-8fee-b84408dda445">
There is also href directed to the CSS page, where I also created formats, including format, text boxes, border radius, gif images, etc. 
<img width="1280" alt="Screen Shot 2024-03-06 at 2 51 28 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/186acbc4-28ec-4d2b-a995-891525d79176">
In addition to the other CSS features (most notably making "hidden" be "display: none"), I also created an array of quiz questions, converting the answers into integers instead of strings.
<img width="1280" alt="Screen Shot 2024-03-06 at 2 53 18 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/45f2991b-bbd9-4814-9dab-5a239d85f0e7">
For the scoresheet, I created a table that I ran out of time to utilize, but added a background gif to fill the page 4 times, and allow a button to return to the home page.
<img width="1280" alt="Screen Shot 2024-03-06 at 2 54 23 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/c6db777a-1a11-498b-9738-b8049c7510c1">
After many tries, I figured out a way to not onlly local-Storage the name and score, but also carry it over to the scoresheet console application page. 
<img width="1280" alt="Screen Shot 2024-03-06 at 2 55 00 AM" src="https://github.com/calvinyueWillTry/Challenging-Quiz/assets/158237430/e81a9300-b135-4809-9085-5fd88472a47b">
