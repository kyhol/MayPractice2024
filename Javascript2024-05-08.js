function sum(a,b, ...numbers) {

}

console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(1, 2, 3, 4, 5, 6)); // 21



// ... becomes array 

const check = (a, ...nums) => {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] % a !== 0) {
            return false
        }
    }
}

function checkDuplicates(arr) {
    let duplicates = {};
    let duplicateExists = false;

    arr.forEach(num => {
        if (duplicates[num]) {
            duplicateExists = true;
        } else {
            duplicates[num] = true;
        }
    });

    return duplicateExists;
}

// Example usage
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 1];

console.log(checkDuplicates(arr1)); // Output: false
console.log(checkDuplicates(arr2)); // Output: true

function check(a, ...args){
    for (let i=0;i<args.length;i++){
        if(args[i]===a){
            return true
        }

    }
    return false
}

console.log(check(1,2,3,2,5,6,7,8,9,10,1,12)); //true

function updateScore(currentScore, value, bonus) {
    if (bonus) {
        return currentScore + value * bonus;
    } else {
        return currentScore + value;
    }
}
updateScore(10, 5, 2); // 20
updateScore(10, 3); // 13