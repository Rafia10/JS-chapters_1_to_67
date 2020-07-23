// //Q1- Write a script to greet your website visitor using JS alert box. 

// alert("Hello! Visitor We are welcoming you in our website :)"
// +"How May I help you");

// //Q2- Write a script to display following message on your web page: 

// var username=prompt("Enter Your name:");
// var pass=prompt("Enter Password:");
// if( pass==='12345')
// {
//     alert("Welcome"+username);
// }
// else{
//     alert("Error!Please enter a valid password");
// }
// //Q3- Write a script to display following message on your web page: (Hint : Use line break)? 

// alert("Welcome to JS land "+"\n"+"Happy Coding");

// //Q4- Write a script to display following messages in sequence: 

// alert("Welcome To JS Land");
// alert("Happy Coding!"+"\n"+"Prevent this message from additional dialogs.")

// //Q5-Generate the following message through browser’s developer console: 
// alert("Hello... I can run JS through Browser developer Console");

// console.log("Hello!");

// //Q6- Make use of alerts in your new/existing HTML & CSS project. 

//function show_alert()
// {

//     alert("ThankYou! Your Feedback has been recorded!");
// }

// //Q7-Practice placement of <script></script> element in following sections of your project in exercise 6:
// //  a. Head
{/* <head>
<script src="app.js"> </script>
</head> */}

// //   b. Body (before your page’s HTML) 
{/* <html>
<script src="app.js">
           

           </script>
           </html> */}

// // c. Body (inside your page’s HTML) d. Body (after your page’s HTML) 
{/* <body>
<script src="app.js">
           

           </script>
           </body> */}
//Variables For Strings chap 2

//    //Q1- Declare a variable called username.

//    var user="Rafia";
//    alert(user);
//    document.writeln("Q1-"+user +"<br>");

//    //Q2-Declare a variable called myName & assign to it a string that represents your Full Name. 

//    var myname="Rafia";
//    var mylastname="Qadir";
//    alert(myname+" "+mylastname);
//    document.writeln("Q2-My Full name is: "+""+myname +" "+ mylastname +"<br>");

//    //Q3- Write script to
// //     a) Declare a JS variable, titled message. 
// //    b) Assign “Hello World” to variable message 
// //    c) Display the message in alert box. 

//   var message="Hello World";
//   alert(message);
//   document.write("Q3-"+message +"<br>");

//   //Q4- Write a script to save student’s bio data in JS variables and show the data in alert boxes. 

//  var stu_name="Rafia";
//  var stu_age="21 years old";
//  var course="Web And Mobile App Development";
//  alert(stu_name);
//  alert(stu_age);
//  alert(course);
// //  document.write("Q4-"+stu_name+"<br>"+"Age is:"+stu_age+"<br>"+"Course is: "+course);

//Q5- Write a script to display the following alert using one JS variable

//  var pattern="PIZZA";
//  for(var i=pattern.length; i>1;i--){
//     document.write("PIZZA"+"<br>" );
//  }

//  //Q6- Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com). Show the blow mentioned message in an alert box.(Hint: use string concatenation) 

//  var email="rafiamemon@gmail.com";
//  alert("My email address is:"+email);
//  document.write("Q6-My email address is "+email+"<br>");

//  //Q7- Declare a variable called book & give it the value “A smarter way to learn JavaScript”. Display the following message in an alert box: 

//  var book="A smarter way to learn Javascript";
//  alert("I am trying to learn from the book "+book);
//  document.write("Q7-I am trying to learn from the book "+book+"<br>");

//  //Q8- Write a script to display this in browser through JS

//  document.write("Q8-"+"Yah! i can write html content through Javascript"+"<br>");

//  //Q9-Store following string in a variable and show in alert and browser through JS 

//  var design="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";
//  alert(design);
//  document.write("Q9-"+design);

//Variable For Numbers

//     //1. Declare a variable called age & assign to it your age. Show your age in an alert box. 

//     var age="21 Years old";
//     alert(age);
//     document.write("My age is :"+ age+"<br>");

//    // 2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page. Show his/her number of visits on your web page. For example: “You have visited this site N times”. 

//    var visited=14;
//    alert("You have visited"+" "+visited+" "+"times");

//    //3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 

//    var birthyear="1998";
//    document.write("My Birth Year is :"+birthyear+"<br>"+"Data Type of Declared type of variable is number"+"<br>");

//    //A visitor visits an online clothing store www.xyzClothing.com . 
// //    Write a script to store in variables the following information: 
// //    a. Visitor’s name 
// //    b. Product title
// //     c. Quantity i.e. how many products a visitor wants to order Show the following message in your browser: 
// //    “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”

//    var visitor_name="John";
//    var product="T-shirt";
//    var quantity="2 large size";
//    document.write("<b>"+visitor_name+"</b>"+" "+"ordered the"+" "+"<b>"+quantity+" "+product+"</b>"+" "+"on xyz clothing store");

//Chapter 4 Variables Legal And Illegal

// 1. Declare 3 variables in one statement.                            
// var name="rafia",id="10",gender="female";
// var name, age,id;

// // Declare 5 legal & 5 illegal variable names. 

// //  var 0rafia, @name, stu age, var,;//illegal
//  var name,age,MyName,MyPass,stu_name //legal

//  //3. Display this in your browser
// //   a)  A heading stating “Rules for naming JS variables” 
// //  b)  Variable names can only contain ______, ______, ______ and ______.
// //   For example $my_1stVariable c) Variables must begin with a ______, ______ or _____.
// //    For example $name, _name or name d) Variable names are case _________
// //   e) Variable names should not be JS _________   

// document.write("<h1>"+"Ruling of naming JS variable"+"</h1>"+ "<br>"+
// "Variable names can only contain ,  numbers,$ and _. For example $my_1stVariable "+"<br>"+
// "c) Variables must begin with a $, number or _. For example $name, _name or name "+"<br>"+
// "d) Variable names are case sensitive"+"<br>"+
// "  e) Variable names should not be JS Keyword");

//chapter 5 Math Expressions

//1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  

//     var a=8;
//     var b=10;
//     var sum=a+b;
//     document.write("Sum of 8 & 10 is:"+" "+sum+"<br>");

//    // 2. Repeat task1 for subtraction, multiplication, division & modulus. 

//    var a=8;
//    var b=10;
//    var sum=a+b;
//    var sub=a-b;
//    var mul=a*b;
//    var divide=a/b;
//    var mod=a%b
//    document.write("Sum of 8 & 10 is:"+" "+sum+"<br>"+
//    "Subtraction of 8 & 10 is:"+" "+sub+"<br>"+
//    "Multiply of 8 & 10 is:"+" "+mul+"<br>"+
//    "Division of 8 & 10 is:"+" "+divide+"<br>"+
//    "Modulous of 8 & 10 is:"+" "+mod+"<br>");

//    //task3
//    var value=10;
//    document.write("Value after variable declaration is: "+"undefined"+"<br>");
//    document.write("Initial Value is :"+" "+value+"<br>");
//    value++;
//    document.write("value after increment is :"+" "+value+"<br>");
//    var add=value+7;
//    document.write("Value after addition of 7 is:"+" "+add+"<br>");
//    add--;
//    document.write("value after Decrement is :"+" "+add+"<br>");
//    var divide=10/3;
//    document.write("value after Division is :"+" "+divide+"<br>");
//    var mod=10%3;
//    document.write("The remainder is :"+" "+mod+"<br>");

//    //4-Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of 
//    //buying 5 tickets to a movie. Example output: 

//    var cost=600;
//    var calculate=cost*5;
//    document.write("The cost of buying 5 tickets for movie :"+" "+calculate+"<br>");

//    //5-Write a script to display multiplication table of any number in your browser. E.g 

//    var table=3;
//    document.write("<h2>"+"Table of "+table+"</h2>"+"<br>");
//    for(var i=1;i<=10;i++){
//        document.write("3"+"X"+i+"="+3*i+"<br>");
//    }

//    //6-The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here

//    var celsius=20;
//    var farenhite=10;
//    celsius=(farenhite-32)*5/9;
//    document.write(farenhite+"F"+"to"+celsius+"C"+"<br>");
//    farenhite=(celsius*9/5)+32;
//    document.write(celsius+"C"+"to"+farenhite+"F"+"<br>");

//    //task 7 ecommerce shopping cart
//    var item1_price=650;
//    var item2_price=100;
//    var quantity1=3;
//    var quantity2=7;
//    var shipping=100;
//    var total=item1_price*quantity1+item2_price*quantity2+shipping;
//    document.write("<h2>"+"Shopping Cart"+"</h2>"+"<br>");
//   document.write("Price of item1 is:"+" "+item1_price+"<br>");
//   document.write("Quantitity of item1 is:"+" "+quantity1+"<br>");
//   document.write("Price of item2 is:"+" "+item2_price+"<br>");
//   document.write("Quantitity of item2 is:"+" "+quantity2+"<br>");
//   document.write("Shipping charges is:"+" "+shipping+"<br>");
//   document.write("Total charges :"+" "+total+"<br>");

//   //8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

//  var tot_marks=500;
//  var marks_obt=400;
//  var percentage=marks_obt/tot_marks*100;
//  document.write("Total Marks:"+" "+tot_marks+"<br>"+"Marks Obtained:"+" "+marks_obt+"<br>"+"Your percentage is:"+""+percentage+"<br>"); 

//  //task9

//  var us_dollar=10;
//  var saudi=25;
//  var pkr=10*104.80+25*28;
//  document.write("<h1>"+"Currency in PKR"+"</h1>"+"<br>");
//  document.write("Total Currency in PKR"+" "+pkr+"<br>");

//  //10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 

//  var num=5;
//  var add=num+5,mul=num*10,div=num/2;
//  document.write("Initial valu is"+" "+num+"<br>"+add+"<br>"+mul+"<br>"+div);

//  //11The Age Calculator: Forgot how old someone is? Calculate it! 

//  var current_year=2020;
//  var mybirth_year=1998;
//  var age_cal=current_year-mybirth_year;
//  document.write("<h1>"+"Age  Calculator"+"</h1>"+"current year is "+
//  current_year+"<br>"+"My birth year is "+mybirth_year+"<br>"+"My age is"+" "+age_cal);

//  //12- The Geometrizer

//  var radius=20;
//  const pi=3.142;
//  var circumference=2*pi*radius;
//  var area=pi*radius*radius;
//  document.write("<h1>"+"The Geometrizer"+"</h1>"+"Radius:"+radius+"<br>"+
//"Circumference of circle:"+circumference+"<br>"+"Area of circle:"+area);

// //13-The Lifetime Supply Calculator

// var snack="chocolato";
// var age=15;
// var max_age=65;
// var amount=3;
// var total=age*max_age;
// document.write(total);
//                                 //Chapter 6-9/////////////////////////////////////////////////////////////

// // 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:  

//    var a=10;
//    ++a;
//    a++;
//    --a;
//    a--;
//    document.write("Result"+"<br>"+"Value of a is"+a+"<br>"+
//    "Value of ++a is"+ ++a +"<br>"+"Value of a++ is"+ a++ +"<br>"+
//    "Now the value of a is"+" "+"12"+"<br>"+
//    "Value of --a is"+ --a +"<br>"+"Now the value of a is"+" "+"11"+"<br>" +"Value of a-- is"+ a-- +"<br>"+
//    "Now the value of a is"+" "+"10"+"<br>" )


// //2. What will be the output in variables a, b & result after execution of the following script: 

// var a=2;
// var b=1;
// var result=--a - --b + ++b + b--;
// document.write("a is"+" "+a+"<br>"+"b is"+" "+b+"<br>"+"result is"+" "+result+"<br>");
//OUTPUT:
//a is 1
//b is 0
//result is:3

// //3. Write a program that takes input a name from user & greet the user

// var input=prompt("Hi user How are u?");
// alert(input);

// //5. Write a program to take input a number from user & display it’s multiplication table on your browser. 
// // If user does not enter a new number,
// //  multiplication table of 5 should be displayed by default. 

// var table=+prompt("Enter the number for multiplication table");
// document.write("<h2>"+"Table of "+table+"</h2>"+"<br>");

// for(var i=1;i<=10;i++){
//     document.write(table+"X"+i+"="+table*i+"<br>");


// }

// //default table
//     var table=5;
//     document.write("<h2>"+"Table of "+table+"</h2>"+"<br>");
//     for(var i=1;i<=10;i++){
//         document.write(table+"X"+i+"="+table*i+"<br>");
//     }

// //task6
// var urdu=+prompt("Enter your urdu marks");
// var eng=+prompt("Enter your english marks");
// var math=+prompt("Enter your maths marks");
// var total_urdu=100,total_eng=100,total_math=100;
// var tot_marks=total_urdu+total_eng+total_math;
// var tot_marks_obt= urdu+eng+math;
// var percentage_urdu=urdu/total_urdu*100,percentage_eng=eng/total_eng*100,percentage_math=math/total_math*100;
// var total_per=tot_marks_obt/tot_marks*100;

//  document.write("<table>"+"<tr>"+"<th>"+"Subjects"+"</th>"+" "
//  +"<th>"+"Total marks"+"</th>"+" "
//  +"<th>"+"Marks Obtained"+"</th>"+" "
//  +"<th>"+"Percentage"+"</th>"+"</tr>"+" "+
//  "<tr>"+
//  "<td>"+"Urdu"+"</td>"+" "+
//  "<td>"+total_urdu+"</td>"+" "+
//  "<td>"+urdu+"</td>"+" "+
//  "<td>"+percentage_urdu+"</td>"+" "+"</tr>"+
//  "<td>"+"English"+"</td>"+" "+
//  "<td>"+total_eng+"</td>"+" "+
//  "<td>"+eng+"</td>"+" "+
//  "<td>"+percentage_eng+"</td>"+" "+"</tr>"+
//  "<td>"+"Math"+"</td>"+" "+
//  "<td>"+total_math+"</td>"+" "+
//  "<td>"+math+"</td>"+" "+
//  "<td>"+percentage_math+"</td>"+" "+"</tr>"+
//  "<tr>"+"<td>"+"</td>"+"<td>"+tot_marks+"</td>"+"<td>"+tot_marks_obt+"</td>"+"<td>"+total_per+"</td>"+"</tr>"+
//  "</table>");


//chapter 9-10


//  1. Write a program to take “city” name as input from user. If user enters “Karachi”,
//   welcome the user like this: “Welcome to city of lights”                                   

// var city=prompt("Enter city name");
// if(city=="karachi"){
//     alert("Welcome to the city of light");
// }
// else
// {

//     alert("Your city is beautiful");
// }

// //2. Write a program to take “gender” as input from user. If the user is male,
// //  give the message: Good Morning Sir. 
// // If the user is female, give the message: Good Morning Ma’am

// var gender=prompt("Enter Your Gender");
// if (gender=="Male"){
//     alert("Good Morning Sir");
// }
// else
// {
//     alert("Good Morning Ma'am");
// }

//3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table: 

//   var signal=prompt("Enter Signal color");
//   if(signal=="red"){
//       alert("Must Stop");
//   }
//   else if(signal=="yellow"){
//       alert("Ready to move");
//   }
//   else if(signal=="green"){
//       alert("Move Now");
//   }

//   // 4. Write a program to take input remaining fuel in car (in litres) from user. 
// //   If the current fuel is less than 0.25litres,
// //    show the message “Please refill the fuel in your car” 

//    var rem_fuel=+prompt("Enter Remaining fuel value in your car");
//    if(rem_fuel<0.25){
//        alert("Please refill the fuel in your car");
//    }
//    else
//    {
//        alert("No need to hurry you have enough fuel");
//    }

//Q5 Run The Script

//     var a = 4; 
//     if (++a === 5)
//     { alert("given condition for variable a is true"); }

//  var b = 82;
//   if (b++ === 83)
//   { alert("given condition for variable b is true"); } 

//  var c = 12; 
//  if (c++ === 13)
//  { alert("condition 1 is true"); }
//   if (c === 13){ alert("condition 2 is true"); } 
//   if (++c < 14){ alert("condition 3 is true"); } 
//   if(c === 14){ alert("condition 4 is true"); } 

// var materialCost = 20000;
//  var laborCost = 2000;
//   var totalCost = materialCost + laborCost; 
//   if (totalCost === laborCost + materialCost)
//   { alert("The cost equals"); } 

//  if (true)
//  { alert("True"); }
//   if (false){ alert("False"); } 

// if("car" < "cat"){ alert("car is smaller than cat"); } 

// output shows that the given condition of variable is true.

// 6. Write a program to take input the marks obtained in three subjects & 
// total marks. Compute & show the resulting percentage 
// on your page. Take percentage & compute grade as per following table: 

// var urdu=+prompt("Enter your urdu marks");
// var eng=+prompt("Enter your english marks");
// var math=+prompt("Enter your maths marks");
// var total_urdu=100,total_eng=100,total_math=100;
// var tot_marks=total_urdu+total_eng+total_math;
// var tot_marks_obt= urdu+eng+math;
// var percentage_urdu=urdu/total_urdu*100,percentage_eng=eng/total_eng*100,percentage_math=math/total_math*100;
// var total_per=tot_marks_obt/tot_marks*100;

// if(tot_marks_obt>=80){
//     document.write("Grade A+" )
// }
// else if(tot_marks_obt>=70){
//     document.write("Grade A" )

// }
// else if(tot_marks_obt>=60){
//     document.write("Grade B" )

// }
// else if(tot_marks_obt>=55){
//     document.write("Grade C" )

// }
// else if(tot_marks_obt>=50){
//     document.write("Grade D" )

// }
// else{
//     document.write("You need to improve" )
// }
// document.write("Total marks"+" "+tot_marks+"<br>");
// document.write("Marks Obtained"+" "+tot_marks_obt+"<br>");
// document.write("Total Percentage"+" "+total_per+"<br>");

//7. Guess game: 
// var secret=+prompt("Enter a Secret number");
// if(secret===9){
//     alert("Bingo you have found the secret number");
// }
// else if(secret==10){
//     alert("You are closed enough");
// }
// else{
//     alert("oops! you didn't get the secret number ");
// }

// 8. Write a program to check whether the given number is divisible by 3.
//  Show the message to the user if the number is divisible by 3. 

// var a=+prompt("Enter Number")
// if(a%3==0){
//     alert("The number is divisilbe by 3")
// }
// else{
//     alert("Try another number");
// }

//9. Write a program that checks whether the given input is an even number or an odd number

// var number=+prompt("Enter Number");
// if(number%2===0){
//     alert("Number is Even");

// }
// else{
//     alert("Number is odd");
// }

//10. Write a program that takes temperature as input and shows a message based on following criteria 

// var temp=+prompt("Enter temperature");
// if(temp>=40){
//     alert("oh its too hot outside");
// }
// else if(temp>=30){
//     alert("The weather is normal today");
// }
// else if(temp>=20){
//     alert("The weather is Cool");
// }
// else if(temp>=10){
//     alert("OMG the weather is so cool");
// }

//11- Calculator
// var a=+prompt("Enter 1st num");
// var b=+prompt("Enter 2nd num");
// var sum=a+b, sub=a-b, mul=a*b,div=a/b, mod=a%b;
// alert("Sum is "+sum+"\n"+"Subtraction:"+sub+"\n"+"Multiplication"+mul+"\n"+"Division"
// +div+"\n"+"Modulo"+mod);

//  Chapter 12-13 if/else
//  1. Write a program that takes a character (number or string) in a variable & checks
//  whether the given input is a number, uppercase letter or lower
//  case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122). 

// var input=prompt("Enter any character");
// if (input>='A'&& input<='Z'){
//     alert("Uppercase Letter")
// }
// else if (input>='a'&& input<='z'){
//     alert("Lowercase Letter")
// }

// else if (input>=0 && input<=9){
//     alert("Digits")
// }
// else{

//     alert("Special Character");
// }

// 2. Write a JavaScript program that accept two 
// integers and display the larger. Also show if the two integers are equal. 

// var integer1=+prompt("Enter Integer1");
// var integer2=+prompt("Enter Integer2");
// if(integer1>integer2){
//     alert("integer1 is larger")
// }
// else if(integer1==integer2){
//     alert("Both are equal")
// }
// else{
//     alert("integer2 is larger")
// }

// 3. Write a program that takes input a number from user & 
// state whether the number is positive, negative or zero. 

// var num=+prompt("Enter value");
// if(num>0){
//     alert(num +"is positive")
// }
// else if(num<0){
//     alert(num +"is negative")
// }
// else 
// {
//     alert(num+"is 0")
// }

//4. Write a program that takes a character (i.e. string of length 1) 
//and returns true if it is a vowel, false otherwise 
// var char=prompt("Enter character");
// if(char=='a'||char=='e'||char=='i'||char=='o'||char=='u'){
//     alert(char+" "+"Character is Vowel")
// }
// else{
//     alert("false")
// }

//5-Validate Password


// var username=prompt("Enter Your name:");
// var pass=prompt("Enter Password:");
// if( pass==='12345')
// {
//     alert("Correct! The password you entered matches the original password"+" "+username);
// }
// else{
//     alert("Incorrect Password");
// }

//6-Fix the code

// var greeting;
//  var hour = 13; 
//  if (hour < 18)
//   { 
//     alert( "Good day");
//   }
//    else 
//    {
//     alert("Good evening") ; 
//    }

//Q7 Time

// var timing=prompt("Enter Time");
//   if(timing<=11){
//      document.write("The Time is " +timing +" am");
//   }
//   else if(timing==12){
//     document.write("The Time is " +timing +" pm");
//   }
//   else if(timing==13){
//     document.write("The Time is 1 pm");
//   }
//   else if(timing==14){
//     document.write("The Time is 2 pm");
//   }
//   else if(timing==15){
//     document.write("The Time is 3 pm");
//   }
//   else if(timing==16){
//     document.write("The Time is 4 pm");
//   }
//   else if(timing==17){
//     document.write("The Time is 5 pm");
//   }
//   else if(timing==18){
//     document.write("The Time is 6 pm");
//   }
//   else if(timing==19){
//     document.write("The Time is 7 pm");
//   }
//   else if(timing==20){
//     document.write("The Time is 8 pm");
//   }
//   else if(timing==21){
//     document.write("The Time is 9 pm");
//   }
//   else if(timing==22){
//     document.write("The Time is 10 pm");
//   }
//   else if(timing==23){
//     document.write("The Time is 11 pm");
//   }
//   else if(timing==24){
//     document.write("The Time is 12 am");
//   }


//////////////////////////Chapter 13-15  Arrays

// //1.Declare an empty array using JS literal notation to store student names in future

// var student=[" "," "," "];
// console.log(student)

// //2. Declare and initialize a strings array. 

// var names=["rafia","noman","fatima","areeba"];
// console.log(names)

// //3.  Declare and initialize a numbers array

//  var numbers=[1,2,3,4,5];
//  console.log(numbers)

//  //5.  Declare and initialize a boolean array

//  var boolean=[true,false];
//  console.log(boolean)
//  //6. Declare and initialize a mixed array. 
//  var mixed=["rafia",1," ",false];
//  console.log(mixed)

//  //7. Declare and Initialize an array and store available education qualifications in Pakistan 

//  var qualification=["SSC","HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
//  console.log(qualification[0]+"\n"+qualification[1]+"\n"+qualification[2]+"\n"+qualification[3]+"\n"
//  +qualification[4]+"\n"+qualification[5]+"\n"+qualification[6]+"\n"+qualification[7]+"\n")

//  //8.Two arrays

//  var stu=["rafia","paras","aisha","fatima"];
//  var score=[400,350,300,400];
//  var total=500;
//  console.log("Score of"+" "+stu[0]+"is"+ score[0]+" "+"Percentage is"+score[0]/total*100+"\n"+
//  "Score of"+" "+stu[1]+"is"+ score[1]+" "+"Percentage is"+score[1]/total*100+"\n"+
//  "Score of"+" "+stu[2]+"is"+ score[2]+" "+"Percentage is"+score[2]/total*100+"\n"+
//  "Score of"+" "+stu[3]+"is"+ score[3]+" "+"Percentage is"+score[3]/total*100+"\n")

//  //9.Color array
//  var color=["red","yellow","green","pink"];

//  color.unshift("white");
//  console.log(color)
//  //10
//  var color=["red","yellow","green","pink"];

//  color.push("white");
//  console.log(color)
//  //11
//  var color=["red","yellow","green","pink"];

//  color.unshift("Black","blue");
//  document.write(color)
//  //12 Delete first color
//  var color=["red","yellow","green","pink"];

//  color.shift("Black");
//  document.write(color)

//  //13 Delete last color
//  var color=["red","yellow","green","pink"];

//  color.pop("pink");
//  document.write(color)

//  //ask user to add desired color on desired position
//      var colors=["red","yellow","pink","blue"]
//     var col=prompt("Enter color")
//    if (colors.indexOf(col)==-1){
//       colors.unshift(col);
//    }
//   document.write(colors);

//   //. Write a program to store student scores in an array & 
//   //sort the array in ascending order using Array’s sort method.
//   var score=[320,230,480,120];
//   document.write("Ordered list"+score[4]+"<br>"+score[1]+"<br>"+score[0]+"<br>"+score[3]);

//   //11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.
//    var cities=["karachi","lahore","islamabad"];

//    console.log( cities.slice(0,2));
//   //12- Write a program to create a single string from the below mentioned array: 
//   var arr = ["This", "is " , "my " , "cat"]; 
//   arr.join(arr[0]+arr[1]+arr[2]+arr[3]);
//   console.log(arr);
 // //   13. Create a new array. Store values one by one in 
 //     such a way that you can access the values in the order in which 
 //      they were stored. (FIFO-First In First Out) 
//  var store = [" "," "," "];
//  var fruits=prompt("Enter Fruit");

//     alert(store.unshift(fruits));

// console.log(store)
//  alert(store.shift());

//  14-Create a new array. Store values one by one 
// in such a way that you can access the values in reverse order. (Last InFirst Out
// var store = [" "," "," "];
// //  var fruits=prompt("Enter Fruit");

//     alert(store.push(fruits));

// console.log(store)
//  alert(store.shift());




///////////////////////////////Chapter 17-20

// Declare and initialize an empty multidimensional array. (Array of arrays
//    var Arr=[[1,2],[3,4],[5,6]]

//Declare and initialize a multidimensional array representing the following matrix
// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]]
// document.write(arr[0]+"<br>"+arr[1]+"<br>"+arr[2]);

//. Write a program to print numeric counting from 1 to 10. 


//  for( var counting=1;counting<=10;counting++){
//      document.write(counting+"<br>");
//  }

//  //4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.  


//  var table=+prompt("Enter the number for multiplication table");
//  document.write("<h2>"+"Table of "+table+"</h2>"+"<br>");

// for(var i=1;i<=10;i++){

//     document.write(table+"X"+i+"="+table*i+"<br>");


// }
// Write a program to print items of the following array using for loop: fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 

// var  fruits = ["“apple”", "“banana”", "“mango”", "“orange”", "“strawberry”"]
// document.write("This is apple at index 0"+fruits[0]+"<br>"+
// "This is banana at index 1"+fruits[1]+"<br>"+
// "This is mango at index 2"+fruits[2]+"<br>"+
// "This is orange at index 3"+fruits[3]+"<br>"+
// "This is strawberry at index 4"+fruits[4]+"<br>")

// // Generate the following series in your browser. See example output.
// //counting 1 to 15
// for(var i=1;i<=15;i++){
//  document.write(i+"<br>");
// }
// //reverse counting
// for(var i=15;i>=1;i--){
//     document.write(i+"<br>");
//    }
//    //even series

//    for(var i=0;i<=20;i=i+2){
//     document.write(i+"<br>");
//    }
//    //odd series
//    for(var i=1;i<=20;i+=2){
//     document.write(i+"<br>");
//    }
//    //series
//    for(var i=2;i<=20;i=i+2){
//     document.write(i+"k"+"<br>");
//    }

//q7 Search item
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var search = prompt("Enter search value");
// if (A.indexOf(search) !== -1) {
//    alert("yes" + " "+search +" "+ "is" +" "+ "available");
// }
// else {
//    alert("search not found");
// }

 //8-largest element in array
//  function largest(number) {
// 	var large = number[0];
// 	for(var i=1; i<number.length; i++) {
// 		if(large < number[i]) {
// 			large = number[i];
// 		}
// 	}
// 	return large;
// }

// var input = [24, 53, 78, 91, 12];
// var output = largest(input);

// console.log(output);



// console.log(largest)

//9-smallest element
// function findSmallest(numbers) {
//     var small = numbers[0];
//      for (var i = 0; i < numbers.length; i++) {
//           if (numbers[i] < small) {
//             small = numbers[i];
//             console.log(small)
//           }
//      }
//        return small;
//    }

//    findSmallest([24, 53, 78, 91, 12]);
   // 3

   //Write a program to print multiples of 5 ranging 1 to 100. 
//    for(var num=5;num<=100;num+=5){
//        document.write(num+"<br>");
//    }

                /////////////////////////////////Chapter 21-25///////////////////////////
//Q1:  Write a program that takes two user inputs for first and last
// name using prompt and merge them in a new variable 
// titled fullName. Greet the user using his full name. 

// var fname=prompt("Enter Your Firstname");
// var lname=prompt("Enter Your Lastname");
// var fullname=fname+" "+lname;
// alert("Hello"+" "+fullname);

//Q2:Write a program to take a user input about his favorite mobile phone model. Find 
//and display the length of user input in your browser 

// var mobile=prompt("Enter your Favourite Mobile Phone Model");
// var length=mobile.length;
// document.write("My Favourite phone is :"+" "+mobile+" "+"and the "+" "+"Total length of your input is:"+" "+length);

//Q3: Write a program to find the index of letter “n” in the word “Pakistani” 
//and display the result in your browser . 

// var index="Pakistani";
// var search=index.indexOf("n");
// document.write("String:"+index+" "+" "+"<br>"+" Index of n is"+" "+search);

//Q4:Write a program to find the last index of letter “l” in the word 
//“Hello World” and display the result in your browser. 

// var index="Hello World";
// var search=index.lastIndexOf("l");
// document.write("String:"+index+" "+" "+"<br>"+" Last Index of l is"+" "+search);

//Q5:. Write a program to find the character at 3rd index in the word “Pakistani” 
//and display the result in your browser

// var index="Pakistani";
// var extract=index.slice(3,4);
// document.write("String:"+index+" "+" "+"<br>"+" Character in index 3 is"+" "+extract);
// }

//Q6:. Repeat Q1 using string concat() method

// var fname=prompt("Enter Your Firstname");
// var lname=prompt("Enter Your Lastname");
// var fullname=fname.concat(lname);
// alert(fullname);

//Q7  Write a program to replace the “Hyder” to “Islam” in 
//the word “Hyderabad” and display the result in your browser

// var text="hyderabad"
// for (var i = 0; i < text.length; i++)
//  {   if (text.slice(i, i + 9) === "hyderabad")
//   {     
//     document.write("Text before Replacement is"+" "+text+"<br>"+"Text After Replacement is"+" "+text.slice(0, 0) + "Islamabad" + text.slice(i + 9));

//      } 
//      }

// 8. Write a program to replace all occurrences of “and” in the string with “&” 
// and display the result in your browser. var message = “Ali and Sami are best friends.
//  They play cricket and football together.”; 



// var message = "Ali and Sami are best friends They play cricket and football together";

// for (var i = 0; i < message.length; i++)
//  {   if (message.slice(i, i + 3) === "and" )
//   {     
//     document.write("before Replacement:"+" "+message+"<br>"+" After Replacement :"+" "+message.slice(0, 3) + " "+"&" +
//      message.slice(i + 3));

//      } 
//      }

//9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser. 

// var string="472";
// document.write("value:"+" "+string+"<br>"+"Type:"+" "+"String"+"<br>");
// var num=parseInt(string);
// document.write("value:"+" "+string+"<br>"+"Type:"+" "+num +" "+"Is number");

//10. Write a program that takes user input. Convert and show the input in capital letters. 

// var input=prompt("Enter value");

// alert(input.toUpperCase());

//11.Write a program that takes user input. Convert and show the input in title case. 

// var input=prompt("Enter value").split(' ');
// for (var i = 0; i < input.length; i++) {
//   input[i] = input[i].charAt(0).toUpperCase() + input[i].slice(1); 
// alert("Titecase:"+" "+input);
//               }

//12.Write a program that converts the variable num to string. var num = 35.36 ; 
// Remove the dot to display “3536” display in your browser. 

// var num=35.36;
// var num2=35.36;
// var integer=Math.floor(num);
// var integer2=Math.ceil(num2);
// var string1=integer.toString();
// var string2=integer2.toString();
// var fstring=string1.concat(string2)
// document.write(fstring);

//13.Write a program to take user input and store username in a variable. 
// If the username contains any special symbol among [@ . , !], 
// prompt the user to enter a valid username. For character codes of [@ . 

// var username=prompt("Enter username");
// if(username==="@"&& username==="." && username===","&& username==="!"){
//   alert("Welcom"+username)

// }
// else
// {
//   alert("Please enter valid username")
//}

//14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array. After searching,
//  prompt the user whether the given item is found in the list or not. 
//  Note: Perform case insensitive search. Whether the user enters cookie, Cookie, 
//  COOKIE or coOkIE, program should inform about its availability. Example: 

// var bakery=prompt("Enter Your item:");
// bakery=bakery.toLowerCase();

// var arr=["cake","apple pie","cookie","chips","patties"];
// for(i=0;i<arr.length;i++){
//   if(bakery==arr[i]){
//     alert(bakery+" "+" "+"is found in our bakery at postion:"+" "+index);
//   }

//   else{
//     alert("not found")
//   }
// }


// 15.Write a program to take password as an input from user. 
// The password must qualify these requirements:
//  a. It should contain alphabets and numbers
//   b. It should not start with a number
//    c. It must at least 6 characters long If the password does not meet above requirements, 
//    prompt the user to enter a valid password. For character codes 
// of a-z, A-Z & 0-9, refer to ASCII table at the end of this document. 

// function CheckPassword() 
// { 
// var format=  /^(?=.*[0-9])[a-zA-Z0-9]{6}$/;
// var pass=prompt("Enter password");
// if(pass.match(format)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else
// { 
// alert('Wrong...!')
// return false;
// }
// } 
// alert(CheckPassword())

//16. Write a program to convert the following string to an array using string split method. 
//var university = “University of Karachi”; Display the elements of array in your browser. 

// var university="university of Karachi".split(' ')
// document.write(university);

//17. Write a program to display the last character of a user input. 

// var index=prompt("Enter Character");
// var search=index.lastIndexOf(index);
// document.write("String:"+index+" "+" "+"<br>"+" Last char of " +search+" is"+" "+search);


////////////////////////////////CHAPTER 26---30//////////////////////////////////////////////

// 1. Write a program that takes a positive integer from user 
// & display the following in your browser.
//  a. number 
//  b. round off value of the number 
//  c. floor value of the number
//   d. ceil value of the number  

// var integer=prompt("Enter Number ");
// alert(integer+"\n"+Math.round(integer)+"\n"+Math.floor(integer)+"\n"+Math.ceil(integer));


//2.Write a program that takes a negative floating point number from user
//  & display the following in your browser. 
//  a. number
//   b. round off value of the number 
//   c. floor value of the number
//    d. ceil value of the number 

// var integer=prompt("Enter Negative Number ");
//  alert(integer+"\n"+Math.round(integer)+"\n"+Math.floor(integer)+"\n"+Math.ceil(integer));

// 3. Write a program that displays the absolute value of a number. 
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5 

// var num=prompt("Enter number to find absolute value of it");
// alert("The absoute value of "+num+" "+" is"+" "+Math.abs(num))

//4. Write a program that simulates a dice using random() method of JS Math class.
// Display the value of dice in your browser.: 

// var dice=Math.random()*6;

//   var b=Math.floor(dice);
//   var c=b+1;
//   document.write("Random Dice value: "+c);

//5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your browser

// var coin=Math.random() *2;
//    var b=Math.floor(coin);
//    var c=b+1;
// if(c===2){
//     document.write("2"+"<br>"+"Random coin value: Heads "); 
// }
// else   
// {
//   document.write("1"+"<br>"+"Random coin value: Tails ");
// }  

//6. Write a program that shows a random number between 1 and 100 in your browser. 

// var number=Math.random()*100;
// var b=Math.floor(number);
// var c=b+1;
// document.write(c);

//7. Write a program that asks the user about his weight. 
//Parse the user input and display his weight in your browser. Possible user inputs can be: 
//a. 50 b. 50kgs c. 50.2kgs d. 50.2kilograms 

// var weight=prompt("Enter Your Weight");
// parseInt(weight);
// alert(weight);

//8. Write a program that stores a random secret number from 1 to 10 in a variable. 
//Ask the user to input a number between 1 and 10.If the user input equals the secret number, congratulate the user.

// var num=10;
// var input=+prompt("Enter secret no")
// if(input===num){
//   alert("Congrats You have found the number");
// }
// else{
//   alert("try again")
// }
///////////////////////////////////Chapter 31-34/////////////////////////////////////////////////

//1. Write a program that displays current date and time in your browser. 

// var today= new Date();
// alert(today);

//2. Write a program that alerts the current month in words. For example December.
// var month=new Array();
// month[0] = "January";
// month[1] = "February";
// month[2] = "March";
// month[3] = "April";
// month[4] = "May";
// month[5] = "June";
// month[6] = "July";
// month[7] = "August";
// month[8] = "September";
// month[9] = "October";
// month[10] = "November";
// month[11] = "December"; 

// var today=new Date();
// var m=month[today.getMonth()];
// alert(m)

//3. Write a program that alerts the first 3 letters of the current day, 
//for example if today is Sunday then alert will show Sun.

// var days=["sun","mon","tue","wed","thu","fri","sat"];
// var today=new Date();
// var d=days[today.getDay()];
// alert("Today is"+" "+d);

//4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today. 

// var days=["sun","mon","tue","wed","thu","fri","sat"];
// var today=new Date();
// var d=days[today.getDay()];
// if(d=="sat"||d=="sun"){
//   alert("Today is"+" "+d+" "+"Its a Fun day");
// }
// else{
//   alert("Its working day")
// }

// 5. Write a program that shows the message “First fifteen days of the month” 
// if the date is less than 16th of the month else shows “Last days of the month”

// var today=new Date();
// var get=today.getDate();
// if(get<16){
//   alert("First fifteen days of the month")
// }
// else{
//   alert("Last Sixteen days of Month")
// }

//6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and 
// assigns it to a variable that hasn't been declared beforehand. Use any variable
//  you like to represent the Date object. 

// var old_date=new Date();

// var milisec=old_date.getTime();
// var today=new Date();
// var minutes=1000*60;
// var t=today.getTime();
// var m=Math.round(t/minutes);


//  alert(today+"\n"+"Milisec from jan 1, 1970 is"+" "+milisec+"\n"+"minutes from jan 1,1970 is "+" "+m);



 //7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

//  var today=new Date();
//  var get=today.getHours();
//  if(get==0){
//    alert("Its midnight")
//  }
//  else if(get==12){
//    alert("Its"+" "+get+"Am")
//  }
//  else if(get==23){
//   alert("Its"+" "+get+"Pm")
//  }

// 8. Write a program that creates a Date object for the last day of 
// the last month of 2020 and assigns it to variable named laterDate. 

// var laterDate=new Date();
// var lastDay =  
// new Date(laterDate.getFullYear(), laterDate.getMonth() - 1, 31)
// alert(lastDay)

//9. Create a date object of the starting date of this Ramadan and alert the 
//number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// var oneday=24 * 60 * 60 * 1000;
// var date=new Date();
// var startDate=new Date(date.getFullYear(), date.getMonth()-1, -6); 
// //var get=startDate.getDate();
// var today=new Date();
// var get= Math.round(Math.abs((date - startDate) / oneday));
// alert(get+" "+" Days have passed since 24 April 2020");

//10. Write a program that displays in your browser the seconds that elapsed
// between the reference date and the beginning of 2015. 

// var date=new Date();
// var t1 = new Date(date.getFullYear()-5,date.getMonth()+6,5 );
// var t2 = new Date();
// var dif = t1.getTime() - t2.getTime();

// var Seconds =Math.round( dif / 1000);
// var res = Math.abs(Seconds);
// alert(res+" "+" seconds is passed since Dec 5 2015");

//11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour
// ahead and finally display the date object in your browser. 

// var current=new Date();
// var get=current.getHours();
// alert("Current Date is:"+current+" "+get+"\n");
// current.setHours(current.getHours()-1);
// alert("Last 1 hour go Date was:"+current)

//12.Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back? 

// var current=new Date();
// alert(current+"\n")
// var d = new Date();
// d.setFullYear(d.getFullYear()-100, d.getMonth() );
// alert("100 year back it was"+" "+d);

//13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 

// var age=new Date(prompt("Enter Your DOB","nov 29,1998"));
// var current=new Date();
// var cal_age=current.getFullYear()-age.getFullYear();
// var year=age.getFullYear();
// alert("Your age is:"+" "+cal_age +" "+"Your birth year is"+" "+year)

//14.Write a program to generate your K-Electric bill in your browser. All the amounts should be 
//rounded off to 2 decimal places.Display the following fields: 

// var name=prompt("Enter Customer Name");
// var month=new Date();
// var m=month.getMonth();
// var unit=prompt("Enter No of Unit");
// var charges_p_u=prompt("Enter charges per unit");
// var late_pay=350
//  var net_amount_with_due=unit*charges_p_u;
//  var gross_a_p=net_amount_with_due+late_pay;

//  alert("Customer Name:"+" "+name+"\n"+
//  "Month:"+" "+m+"\n"+ "Numbers of unit:"+" "+unit+"\n"+ "Charges per unit:"+" "+charges_p_u+"\n"+ 
//  "Net amount Payable:"+" "+net_amount_with_due+"\n"+ "Late payment surcharge:"+" "+late_pay+"\n"+ 
//  "Gross amount Payable:"+" "+gross_a_p+"\n"
//  )

///////////////////////////////////////////chapter 35-38///////////////////////////////////////////

//1. Write a function that displays current date & time in your browser. 
// function new_d(){
// var current=new Date();
// return current
// }
// alert(new_d());

//2. Write a function that takes first & last name and then it greets the user using his full name. 

//  function greeting(greet){
//    var fname=prompt("Enter firstname")
//    var lname=prompt("Enter lastname")
//    return "Hello"+" "+fname.concat(" "+lname);
//  }
//  alert(greeting());

//3.. Write a function that adds two numbers (input by user) and returns the sum of two numbers

// function sum(){
//   var num1=+prompt("Enter num 1")
//   var num2=+prompt("Enter num 2");
//      var add= num1+num2;
//      return add
// }
//  console.log(sum())

//4. Calculator:  Write a function that takes three arguments num1, num2 & operator & compute the desired operation.
// Return and show the desired result in your browser

// function cal(){
//   var n1=+prompt("Enter first num")
//   var n2=+prompt("Enter sec num");
//   var op=prompt("Enter desired opertaion")
//   if (op=="+"){
// return n1+n2
//   }
//   else if(op=="-"){
//     return n1-n2
//   }
//   else if(op=="*"){
//     return n1*n2
//   }
//   else if(op=="/"){
//     return n1/n2
//   }
//   else if(op=="%"){
//     return n1%n2
//   }
//   else{
//     return "Wrong operation"
//   }
// }
// alert(cal());

//5. Write a function that squares its argument. 

// function square(a){
//   return a*a
// }
// alert(square(6));

//6. Write a function that computes factorial of a number
// function fact(a,b,c,d,e){
//   return a*b*c*d*e 
// }
// alert(fact(5,4,3,2,1));

//7. Write a function that take start and end number as inputs & display counting in your browser. 

//  function counting(){
//    var start=+prompt("Enter starting value");
//    var end=+prompt("Enter Ending vaue");
//    for(var i=start;i<=end;i++){
//     console.log(i)
//    }
//  }
// counting();

//8. Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2 Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse() Inner function: calculateSquare()

// function hypotenuse(){
//  var per=+prompt("Enter perpendicular");
//  var base=+prompt("Enter base ");
//   var b=Math.pow(base,2);
//   var p=Math.pow(per,2)
//   var hypo=b+p

//     return hypo;
// }

//   function calsq(hypo){
//     return Math.sqrt(hypo);

//   }



//   console.log(hypotenuse()+"\n");
// console.log(calsq(hypo))

//9. Write a function that calculates the area of a rectangle.    
//   A = width * height     Pass width and height in following manner: 
// i. Arguments as value ii. Arguments as variables 

//By values
// function area(width,height){
//   return width*height
// }
// alert(area( "Area of rectangle is "+"  "+5,6.7));

//By variable
// function area(){
//   var v1=+prompt("Enter width");
//   var v2 =+prompt("Enter Height");
//  return v1*v2
// }
// alert(area());

//10. Write a JavaScript function that checks whether a passed string is palindrome or not?  
//  A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam. 

// function palindrome(){

//     var c=prompt("Enter a word");
//     var check="";
//     for (i=c.length-1;i>=0;i--){
//         check+=c[i]
//     }
//     if(c==check){
//       return c+" is palindrome"
//     }
//     else {
//       return  c+" is not palindrome"
//     }
    
//     }
// alert(palindrome());
//11. Write a JavaScript function that accepts a string as a parameter and 
//converts the first letter of each word of the string in upper case.  EXAMPLE STRING :
 //'the quick brown fox'  EXPECTED OUTPUT : 'The Quick Brown Fox' 

//  function first_letter(){
//    var str="the quick brown fox".split(' ');
//    alert("String:"+" "+str+"\n");
//    for (var i = 0; i < str.length; i++) {
//        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
//      alert("Expected Output:"+" "+str);
//                   }
//  }
//  first_letter();

//12. Write a JavaScript function that accepts a string as a parameter and 
//find the longest word within the string.  EXAMPLE STRING : 'Web Development Tutorial'  
//EXPECTED OUTPUT : 'Development'


//  function str(string){
//   var mess="Web Development Tutorial"
//   var get=mess.slice(3,15)
//   return get
// }
// console.log(str("Web Development Tutorial"));

//13. Write a JavaScript function that accepts two arguments, a string and a 
//letter and the function will count the number of 
//occurrences of the specified letter within the string.  Sample arguments : 'JSResourceS.com', 'o'  

// function char_count(string, letter) 
// {
//  var letter_Count = 0;
//  for (var index = 0; index < string.length; index++) 
//  {
//     if (string.charAt(index) == letter) 
//       {
//       letter_Count += 1;
//       }
//   }
//   return letter_Count;
// }

// console.log(char_count('JSResourceS.com', 'o')+" "+"Character occurs 2 times");

//14. The Geometrizer 

// function calcCircum(radius){
//     const pi=3.142;
//     var circumference=2*pi*radius
//     return circumference

// }
// console.log("The value of circumference of the circle is:"+" "+calcCircum(5)+"\n");
// function calcArea(radius){
//     const pi=3.142;
//     var area=pi*radius*radius;
//     return area
// }
// console.log("The value of area of the circle is:"+" "+calcArea(5));





////////////////////////////chapter 38 to 42//////////////////////////////////////////////////////

//1. Write a custom function power ( a, b ), to calculate the value of a raised to b. 
// function power(a,b){
//    return Math.pow(a,b);
   
// }
// alert(power(4,2));

// 2. Any year is entered through the keyboard. Write a function
//  to determine whether the year is a leap year or not. 

// function leapyear(){
//    var year=prompt("Enter any year");
//    if(year%4==0)
//    {
//       alert("Its a leap year");
//    }
//    else
//    {
//       alert("its not a leap year")
//    }
// }
// alert(leapyear());

// 3. If the lengths of the sides of a triangle are denoted by a, b, and c, 
// then area of triangle is given by area = S(S − a)(S − b)(S − c) 
// where, S = ( a + b + c ) / 2 Calculate area of triangle using 2 functions 




// function cal_s(a,b,c){
//    var s= (a+b+c)/2;
//    return s
//  }
//  alert("s"+"="+cal_s(2,2,2)+"\n"+"Area of Triangle is "+"" +area(2,2,2));
//  function area(a,b,c){
//    var s= (a+b+c)/2;
//    var area= s*(s-a)*(s-b)*(s-c);
//    return area
   
// }

// 4. Write a function that receives marks received by a student in 3 subjects and
//  returns the average and percentage of these marks. there should be 3
//  functions one is the mainFunction and other are for average and percentage.
//  Call those functions from mainFunction and display result in mainFunction. 

//  var eng=+prompt("Enter your English Marks:")
//     var math=+prompt("Enter your Math Marks:")
//     var urdu=+prompt("Enter your Urdu Marks:")

// function average(){
//    var average=eng+urdu+math/3;
//    return average
// }
//    function percentage(){
//       return (eng+urdu+math)/300*100
//    }
//    function marks(){

//       return average()+"\n"+percentage()
//    }
  

//       alert(average()+"\n"+percentage());

//5. You have learned the function indexOf. Code your own custom function that will perform
//the same functionality. You can code for single character as of now. 

// function index() {
//    var string = "Hello world, welcome to the JS land.";
//    var indexno= string.indexOf("JS");
//    document.getElementById("demo").innerHTML = indexno;
//    document.write(indexno)
//  }
//6. Write a function to delete all vowels from a sentence. Assume that the sentence 
//is not more than 25 characters long. 

// function remove_vowels(string) {
//    var regex= /a|e|i|o|u/gi;
//    var newstr=string.replace(regex, "");
//    document.getElementById("demo").innerHTML = newstr;
//    document.write(newstr)
//    }
//    remove_vowels("Hello world, welcome to the JS land.");

//7. Write a function with switch statement to count the number of occurrences of any two vowels
// in succession in a line of text. For example, in the sentence 
//“Pleases read this application and give me gratuity” Such occurrences are ea, ea, ui. 

// function findOccurrences() {
//    var str = "Pleases read this application and give me gratuity";
//    var count = 0;
//    let Vowel = false;
 
//    for (const letter of str.toLowerCase()) {
//      switch (letter) {
//        case 'a':
//        case 'e':
//        case 'i':
//        case 'o':
//        case 'u':
//          {
//            if (Vowel) {
//              count++;
//              Vowel = false;
//            } else {
//             Vowel = true;
//            }
//            break;
//          }
//        default:
//          Vowel = false
//      }
//    }
 
//    return count
//  }
 
//  console.log(findOccurrences());
   
//8. The distance between two cities (in km.) is input through the keyboard. Write four functions to convert 
//and print this distance in meters, feet, inches and centimeters. 

// var a=+prompt("Enter starting distance in km");
// var b=+prompt("Enter ending distance in km");
//  alert("First Distance is "+a+"\n"+"second Distance is "+b)

// function meter(){
// var meter=(a+b)*1000;
// return "Distance in Meters is "+meter;
// }

// function feet(){
//     var f=(a+b)*3280.84
//     return "Distance in feet is "+f;    
// }
    
//     function inches(){
//      var  inc=(a+b)* 39370.1
//         return "Distance in inches "+inc;
//         }
//         function centimeter(){

//            var cm=(a+b)* 100000
//            return "Distance in centimeter is "+cm;
//             }
            
//             console.log(meter()); 
//             console.log(feet());
//             console.log(inches());
//             console.log(centimeter());

//9. Write a program to calculate overtime pay of employees. 
//Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. 
//Assume that employees do not work for fractional part of an hour. 
 
// function overtime()
// {
// 	var  time_worked, over_time, overtime_pay=0;
// 	for (i = 1; i <= 4; i++)
// 	{
// 		var time_worked=prompt("Enter the time employee worked in hr ");
//         document.write(" The time employee worked in hr "+time_worked)
//         document.write("<br>")
// 		if (time_worked>40)
// 		{
// 			over_time = time_worked - 40;
// 			 overtime_pay = overtime_pay + (12 * over_time);
// 		}
// 	}
// 	return ("Total Overtime Pay Of 4 Employees Is "+ overtime_pay);
	
// }

//console.log(overtime())

//10. A cashier has currency notes of denominations 10, 50 and 100.
//  If the amount to be withdrawn is input through the keyboard in hundreds, 
//  find the total number of currency notes of
//  each denomination the cashier will have to give to the withdrawer. 

// function findNotes()
// {

//     var amount=prompt("Please input amount for withdraw :");
//     document.write("Your Enter Amount Is "+amount+"<br>")

//     //calculations
//     var a=(amount/100);
//     var b=Math.floor(a)
// 	document.write("Required notes of Rs. 100  :  "+b );
//     document.write("<br>")
//     var c=(amount % 100) / 50
//     var d=Math.floor(c)
//     document.write("Required notes of Rs. 50   :  "+d);
//     document.write("<br>")
//     var e=((amount % 100) % 50) / 10
//     var f=Math.floor(e)
//     document.write("Required notes of Rs. 10   :  "+f) ;
//     document.write("<br>")
//     var g= (((amount % 100) % 50) % 10);
//     document.write("Amount still remaining Rs. :  "+g);
//     document.write("<br>")
// 	 return g;
// }
// (findNotes())
//////////////////////////////chapter no 43 to 48///////////////////////////////////////////////////

//1. Show an alert box on click on a link.

// function message(){
//    document.getElementById("link")
// alert("Hello Dear user welcome to online cookbook website:)")
// }

//2. Display some Mobile images in browser. On click  on an image Show the message in alert to user. 
// function message2(){
//       document.getElementById("link")
//    alert("Thanks for purchasing phone from us:)")
//    }

// 3. Display 10 student records in table and each row should contain a delete button.
//  If you click on a button to delete a record, entire row should be deleted.  
  
// var element=document.getElementById("form-content").childNodes;
// var firstname=element[3].value=(prompt("Enter student's firstname"));

//    var lastname=element[5].value=(prompt("Enter student's lastname"));
   
//     var email=element[8].value=(prompt("Enter student's email address"));

// function submit(){
 

   
//    document.getElementById("fn").innerHTML=firstname
//    document.getElementById("ln").innerHTML=lastname 
//    document.getElementById("em").innerHTML=email  
   

  
// }
// function deleteItem(){
//    var del=document.getElementById("data").deleteRow(0)
//    console.log(del)
       
//    }


//4. Display an image in browser. Change the picture on mouseover and set the first picture on mouseout. 


// function swapPic(){
//    document.getElementById("before").src = "new.jpg";    
// }

// 5. Show a counter in browser. Counter should increase on click on increase button and decrease on 
// click on decrease button. And show updated counter value in browser. 

// var clicks = 0;
// function Click() {
//     clicks += 1;
//     document.getElementById("clicks").innerHTML = clicks;
// }
// function Click2() {
//    clicks --;
//    document.getElementById("clicks").innerHTML = clicks;
// }

/////////////////////////////////////chapter 49-52///////////////////////////////////////////////

//1. Create a signup form and display form data in your web page on submission. 

// var element=document.getElementById("form-content").childNodes;
// var firstname=element[3].value=("Rafia");

//    var lastname=element[5].value=("Memon");
   
//     var email=element[8].value=("rafia@10gmail.com");
// function submit(){
   
   
//    document.getElementById("demo").innerHTML=firstname +"<br>"+ lastname +"<br>"+email
  
// }

//2. Suppose in your webpage there is content area in which you have entered
 //your item details, but user can only see some details on first look. 
 //When user clicks on “Read more” button, full detail of that particular item will be displayed.

//  function readmore() { 
//        var readmore = 
//    "Slow lorises are a group of several species of trepsirrhine primates which make up the genus Nycticebus. They have a round head, narrow snout, large eyes, and a variety of   distinctive coloration patterns that are species-dependent. The hands and feet of  slow lorises have several adaptations that give them a pincer-like grip and enable them to grasp branches for long periods of time. Slow lorises have a toxic bite, a rare trait among mammals."
  
//     document.getElementById("expand").innerHTML = readmore; 
//    }
 
 
// 3. In previous assignment you have created a tabular data using javascript. Let’s modify that. 
// Create a form which takes student’s details and show each student detail in table. Each row of table
//  must contain a delete button and an edit button. On click on delete button entire row should be deleted. 
//  On click on edit button, a hidden form will appear with the values of that row.  

// var element=document.getElementById("form-content").childNodes;
// var firstname=element[3].value=(prompt("Enter student's firstname"));

//    var lastname=element[5].value=(prompt("Enter student's lastname"));
   
//     var email=element[8].value=(prompt("Enter student's email address"));
   
  


// function submit(){
 
   
//    document.getElementById("fn").innerHTML=firstname
//    document.getElementById("ln").innerHTML=lastname 
//    document.getElementById("em").innerHTML=email  
   

  
// }
// function deleteItem(){
//    var del=document.getElementById("data").deleteRow(0)
//    console.log(del)
       
//    }
//    function Edit(e){
//      var item=prompt("Enter new value",e.parentNode.firstChild.nodeValue)
//     e.parentNode.firstChild.nodeValue=item;
          

//       }




/////////////////////////////////////chapter 58-67/////////////////////////////////////////////// 

//i. Get element of id “main-content” and assign them in a variable. 
//ii. Display all child elements of “main-content” element.

// var dom= document.getElementById("main-content").childNodes;
// console.log(dom);

//iii. Get all elements of class “render” and show their innerHTML in browser. 

// var inner=document.getElementsByClassName("render")[0].innerHTML +
// document.getElementsByClassName("render")[1].innerHTML +
// document.getElementsByClassName("render")[2].innerHTML +
// document.getElementsByClassName("render")[3].innerHTML +
// document.getElementsByClassName("render")[4].innerHTML;
// console.log(inner);

//iv. Fill input value whose element id first-name using javascript.
// v. Repeat part iv for id ”last-name” and “email”.
 
// var firstname=document.getElementById("first-name").value=("Rafia");
// console.log(firstname)
// var lastname=document.getElementById("last-name").value=("Memon");
// console.log(lastname)
// var email=document.getElementById("email").value=("rafia@gmail.com");
// console.log(email)

//2.  use HTML code of question 1 and  show the result on browser.

//i. What is node type of  element having id “form-content”.

// var element=document.getElementById("form-content").nodeType;
// console.log(element);

//ii. Show node type of element having id “lastName” and its child node.

// var lname=document.getElementById("last-name").nodeType;
// console.log(lname);
// var child=document.getElementById("last-name").childNodes;
// console.log(child);
 
//iii. Update child node of element having id “lastName”.

// var child=document.getElementById("last-name")
// var textnode = document.createTextNode("Hello");         // Create a text node
// child.appendChild(textnode);
//  console.log(child);
// // after updating 
// var get=document.getElementById("last-name").childNodes;
// console.log(get);
//iv. Get First and last child of id “main-content”. 
// var get=document.getElementById("main-content").firstChild;
// var get2=document.getElementById("main-content").lastChild;
// console.log(get,get2)

//v. Get next and previous siblings of id “lastName”.

// var get1=document.getElementById("last-name").nextSibling;
// var get2=document.getElementById("last-name").previousSibling;
// console.log(get1);
// console.log(get2);

//vi. Get parent node and node type of element having id “email”

// var get1=document.getElementById("email").parentNode;
// console.log(get1);

