
// 1 No Assignment 
function kilometerToMeter (meter){
    var meter = meter * 1000;
    return meter;
} 
var result = kilometerToMeter(4);
console.log(result);

// 2 No Assignment
  function budgetCalculator (colck, phone, laptop){
      var result = ((colck * 50) + (phone * 100) + (laptop * 500));
      return result;
  }

var sum = budgetCalculator (6, 7, 10);
console.log(sum);


// 3 No Assignment
function hotelCost (date){
    var taka = 0;
    if(date <=10){
        taka = date * 100;
    }
    else if(date<=20){
        var firstday =10 * 100;
        var remaining = date -10;
        var secondday = remaining * 80;
        var total = firstday + secondday;
    }
    else{
        var firstday = 10 * 100;
        var secondday = 10 * 80;
        var remaining = date - 20;
        var thirdday = remaining * 50;
        taka = firstday + secondday + thirdday;
    }return taka;
}
var total = hotelCost(32);
console.log(total);

// 4 No Assignment 
var megaFriend = ['tonny', 'trisha', 'tinni', 'sakil'];
var max = megaFriend [0];
for (i = 0; i<megaFriend.length; i++){
    var element = megaFriend[i];
    if(element>max){
        max = element;
    }
}
console.log(max);


