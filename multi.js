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