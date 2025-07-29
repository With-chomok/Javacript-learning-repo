const price = 3800;

if (price >= 4000){
    const discount = price *  50 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    
}
else if (price >= 3000){
    const discount = price * 40 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    
}
else if (price >= 2500){
    const discount = price * 35 / 100;
    const payAmount = price - discount;
    console.log(payAmount);
    
}

else {
    console.log(price);
    
}


// rastaurant tasks 
age =60;

if (age < 12){
    console.log("He eat free");
}else if(age < 20 && age > 12) {
    console.log("he eat rice but don't get extra service");
}else if (age < 40 && age > 20) {
    console.log("He get All service this Restaurent");
}else {
    console.log("you can go because you not select.");
}


// grade point 

mark = 93;

if(mark >= 80){
    console.log("A+");
}
else if (mark >= 70 && mark < 80){
    console.log("A");
}
else if (mark >= 60 && mark < 70){
    console.log("A");
}
else if (mark >= 50 && mark < 60){
    console.log("B");
}
else if (mark >= 40 && mark < 50){
    console.log("C");
    
}else if (mark >= 33 && mark < 40) {
    console.log("D");
    
}else {
    console.log("You are fail");
}
