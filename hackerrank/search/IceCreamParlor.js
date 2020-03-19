// Complete the icecreamParlor function below.
function icecreamParlor(m, arr) {
    // option 1: brute force walking through all pairs (O(n^2))
    // option 2: Hashmap look for complement in hashmap (O(n))
    // option 3: Binary Search: sort menu and look via binary search
    
    // need to return original indices and sorting will lose those

    //storing results in empty array
    let results = []
    // setting variable map equal to an object
    const map = {};
    for (let i =0; i< arr.length; i++){
        const a = arr[i]
        const pair = map[a];
        if(pair){
            console.log(pair, 'pair in loop')
            results = [pair, i+1]
            break;
        }
        console.log(map, 'hashmap')
        map[m-a] = i +1
    }
    console.log(results, 'Check out results outside loop')
    return results;
}
