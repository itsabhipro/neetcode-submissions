class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const map = new Map<number,number>()
        for(let num of nums){
            map.set(num,(map.get(num)||0)+1)
        }
        const result = []
        let freqList = Array.from(map).sort((a,b)=>a[1]-b[1])
        for(let i = freqList.length-1;i>=0&&result.length<k;i--){
            result.push(freqList[i][0])
        }
        return result
    }
}
