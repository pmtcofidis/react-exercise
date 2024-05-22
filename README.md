# Introduction

This repository is a base for an exercise where we want candidates to demonstrate their technical skills.

Clone the repo and execute the exercise. In the end, share the code with us via your own personal repo 

# The challenge

 - Goal:
    
    The idea is to create a credit simulator, like a wizard where we will have multiple steps:
    -    1 (Amount): based in the limits (response from the api), you must have a text box to input the total amount that the client want to to request, and also a slider where the bounderies are the limits. Limits validation should be done before jump into next step. Limits should be visible in screen.
    -  2 (Months): the user should select the number of months that want to pay starting from 3 months to 12. It should be able to select using a slider and also an input. 
    -  3 (Resume): it should be visible all the data selected in the previous steps

 - Tech notes:
    - The ideia is to use a component lib, you can choose any one at your choice
    - We want to see how you handle hooks, state among other tecnical details
    - Use Typescript
    - We have already a api mock in place so you can consume. Just run `pnpm run mock`. The endpoint is at http://localhost:3001/limits