  // Function to remove duplicates from the given array.
 function removeDuplicates(arr) {
    let mArr = [];
    
    for(let i = 0; i < arr.length;i++){
        let flag = true;
        for(let j = 0; j < mArr.length; j++){
            if(mArr[j] === arr[i]){
                flag= false;
                break;
            }
        }
        if(flag){ mArr.push(arr[i])}
    }
    return mArr;
}

let arr=[32 ,40 ,43 ,60 ,72, 78 ,82, 82 ,82, 99]
console.log(removeDuplicates(arr));

