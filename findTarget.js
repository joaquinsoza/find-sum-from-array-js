//Input: nums = [2,7,11,15], target = 9
//Output: [0,1] (Because nums[0] + nums[1] == 9, we return [0, 1])

// [3,2,4]
// 6
// [4,3,2]

// Second iteration, just after zoom call
console.log("===========================")
const nums = [2,7,11,15]
const target = 9
const numsLength = nums.length
let map = {}
let res = []
let resIndex = []

for (let x = 0; x < numsLength; x++){

  if(map[nums[x]]){
    res.push([map[nums[x]], nums[x]])
    resIndex.push(nums.indexOf(map[nums[x]]), nums.indexOf(nums[x]))
  }else{
    map[target - nums[x]] = nums[x]
  }
}

if(res[0] == undefined){
  console.log("Target can't be accomplished")
}
else{
  console.log("Array", nums)
  console.log("Target", target)
  console.log("Result", res[0])
  console.log("Result Index", resIndex)
}
console.log("===========================")
