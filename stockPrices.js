//I want my function to go through each number, and subtract numbers from it that are only to its right, and return the highest result after going through each number. If there are none, return 0.
//Get max number of array, get min, minus min from max, return result.

// let stock = [2,3,5];

// const best = stock.reduce((a,b) => Math.max(a,b), -Infinity);


// const best = stock.reduce((a,b) => Math.min(a,b), +Infinity);

// console.log(best)

//I didn't understand the problem in time.

//Answer Walkthrough:

function best(stockArr) {
    //I'm going to keep a score of the max possible prophet. I'll start at 0, cause the instructions say that is the least max. 

    //loop through stock and look at each number
        //then for each number, loop through all the numbers ahead of it
        //do the difference between this number and the outer loop
        //if that difference is greater than my current max prophet variable, update the max prophet ariable to
        //that number.
    //when I'm all done looping, return the max prophet variable.
    let maxProfit = 0
    for(let i = 0; i < stockArr.length; i++) {
        let currentBuyNumber = stockArr[i];

        for(let k = i + 1; k <stockArr.length; k++) {
            let currentSellNumber = stockArr[k];
            let currentProfit = currentSellNumber - currentBuyNumber
            if(currentProfit > maxProfit) {
                maxProfit = currentProfit
            }
        }
    }
    return maxProfit
}

// console.log(best([5, 1, 2, 8, 4]));