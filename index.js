//Question 1
let arr1 = [3,7,34,90,12];
const lastelement1 = arr1[arr1.length-1];
console.log(lastelement1);
let arr2 = [true, "green", "where",12,56];
const lastelement2 = arr2[arr2.length-1];
console.log (lastelement2);
//Question 2
let myPets = ["Cow","Bird","Snake","Dog"];
let saloiPets = myPets.join();
console.log(saloiPets);
//Question3
let arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
arr3.sort();
 console.log(arr3);
 //Question4
 let arr = ["boy", "man", "girl", "school", "girl", "woman"];
 let saloiArr = arr.filter((item, index) => arr.indexOf(item) === index);
 console.log(saloiArr)
 //Question 5
 let arr5 = ["the","way","x",4]
 let findingFood = arr5.find(arr5 => arr5 == "Food");
 if (findingFood == "Food"){
    console.log(findingFood)
}
    else{
console.log("the search was not found")
    }
 //Question6
 let word = "renniw"
 let saloiSortedWord = word.split("");
 let result = saloiSortedWord.sort();
 let finalResult= result.join();
 let sortedString = finalResult.replace(/,/g,"");
 console.log(sortedString);
 //Question7
 let saloiFruits = ["apple","avocado","grape","guava","orange","watermelon","kiwi","banana","berries","mango"];
saloiFruits[5] ="Tomato";
console.log(saloiFruits);