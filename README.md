# bmiCalculator
Trying to create bmi calculator api both in JavaScript and TypeScript


Nodejs BMI Calculator

Problem Statement:

Given the following JSON data:

[{"Gender": "Male", "HeightCm": 171, "WeightKg": 96 }, { "Gender": "Male", "HeightCm": 161, "WeightKg":
85 }, { "Gender": "Male", "HeightCm": 180, "WeightKg": 77 }, { "Gender": "Female", "HeightCm": 166,
"WeightKg": 62}, {"Gender": "Female", "HeightCm": 150, "WeightKg": 70}, {"Gender": "Female", 
"HeightCm": 167, "WeightKg": 82} as the input with weight and height parameters of a person, 

We have to perform the following:

1) Calculate the BMI (Body Mass Index) using Formula 1, BMI Category and Health risk from Table 1 of the person and add them as 3 new columns
2) Count the total number of overweight people using ranges in the column BMI Category of Table 1, check this is consistent programmatically and add any other observations in the documentation
3) Create build, tests to make sure the code is working as expected and this can be added to an automation build / test / deployment pipeline

Formula 1 - BMI
2 2 BMI(kg/m ) = mass(kg) / height(m)
The BMI (Body Mass Index) in (kg/m2 ) is equal to the weight in kilograms (kg) divided 
by your height in meters squared (m)2 . For example, if you are 175cm
3
(1.75m) in height and 75kg in weight, you can calculate your BMI as follows: 75kg / 
(1.75m2) = 24.49kg/m2
Table 1 - BMI Category and the Health Risk.
BMI Category
Underweight Normal weight Overweight Moderately obese Severely obese Very 
severely obese
Challenge
BMI Range (kg/m2)
18.4 and below 
18.5 - 24.9 
25 - 29.9
30 - 34.9
35 - 39.9
40 and above
Health risk
Malnutrition risk, Low risk, Enhanced risk, Medium risk, High 
risk Very high risk