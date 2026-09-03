class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let uniqueMap =new Map<number,number>()
        let flag = 0
        for(let i=0;i<nums.length;i++){
            if(uniqueMap.has(nums[i]) ){
                flag++
            }else{
                uniqueMap.set(nums[i],i)
            }  
        }
        if(flag > 0){
            return true
        }
        return false
    }
}
