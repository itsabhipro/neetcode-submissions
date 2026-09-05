class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const size = nums.length
        const result = new Array(size)
        let initilizer = 1
        for(let i = 0;i< size;i++){
            
            result[i] = initilizer
            initilizer *= nums[i]
        }
        initilizer = 1
        for(let i=size-1;i>=0;i--){
            result[i] *= initilizer
            initilizer *= nums[i]
        }
        return result
    }
}
