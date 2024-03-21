
let Rooms= [['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9], ['XXX', 2]]
let NeededChairs= 4;
let Answer=chairsCount(Rooms,NeededChairs)

// Expected result: [0, 1, 3]
console.log("Answer:",Answer);

function chairsCount(arr,need){
    let ans=[];
    if(need==0){ // if no need of chairs 
        return 1;
    }
    for(let i=0;i<arr.length;i++){
        let occupants=arr[i][0].length;
         if(occupants < arr[i][1]){
            let availableChairs=arr[i][1]-occupants;
            need=need-availableChairs;
            ans.push(availableChairs)
            if(need==0){
                return ans;
            }
        }
        else {
            ans.push(0); 
        }
     }
    // console.log("ans:",ans)
     return 0;
}