class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const vistedElementMap = new Map<number,number>()
        for(let i=0; i< nums.length;i++){
            if(vistedElementMap.has(nums[i])){
                return [vistedElementMap.get(nums[i]),i] as number[]
            }
            vistedElementMap.set(target-nums[i],i)
        }
        console.log(vistedElementMap)
        return []
    }
}
