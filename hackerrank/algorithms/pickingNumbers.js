function pickingNumbers(a) {
    /*
    1) sort the array as array is unsorted
    2) init variable max_value for diff as max int value
    3) compare all adj pairs tin sorted array and keep track of min difference
    4) return max num of ints where ; the answer should be >= 2 because of the         constraints.
    */
    // BRUTE FORCE
    let pickingNumSet = new Set()
    // initialize new set
    let maxVal = 0;
    // keeping track of what we will need to return
    let sorted = a.sort()
    // sort the array
    for( let i = 0; i < sorted.length; i++){
    // loop through sortedrray
        var frequencyCount = 0;
        //initialize count with 0
        if (!pickingNumSet.has(sorted[i])){
        // if this set does not have each number
            pickingNumSet.add(sorted[i])
            // add it to the set
            console.log(pickingNumSet)
            for ( let j = 0; j<sorted.length; j++){
                if(sorted[j] == sorted[i] || sorted[j]==sorted[i] + 1){
                // if a[j] is equal to a[i] OR a[j] equal to a[i] + 1
                    frequencyCount++
                    // increment frequency count
                    console.log(frequencyCount)
                }
            }
            maxVal= Math.max(maxVal, frequencyCount) 
            //returns the largest of zero or more numbers.
            // so this would look like Math.max(0, [and whatever number the count was up to])
        }
    }
    return maxVal;

}