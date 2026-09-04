class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let result = ""
        let iter = 0
        for(let str of strs){
            if(iter === strs.length -1){
                result = `${result}${str||"%??"}`
            }else{
                result = `${result}${str||"%??"}%34%`
            }
            iter++
        }
        console.log(result)
        return result
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        if(str.length===0) return []
        const result = str.split("%34%").map((val)=>val==="%??"?"":val)
        console.log(result)
        return result
    }
}
