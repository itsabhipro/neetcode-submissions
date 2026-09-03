class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const mapForS = new Map<string,number>()
        const mapForT = new Map<string,number>()
        let result = true
        const noi = Math.max(s.length,t.length)
        for(let i=0;i<noi;i++){
            if(i< s.length){
                mapForS.set(s[i],mapForS.get(s[i])?mapForS.get(s[i])+1:1)
            }
            if(i < t.length){
                mapForT.set(t[i],mapForT.get(t[i])?mapForT.get(t[i])+1:1)
            }
        }
        const finalSelection = mapForS.size < mapForT.size ? mapForT:mapForS
        finalSelection.forEach((_,key)=>{
            result = result && mapForS.get(key) === mapForT.get(key)
            return result
        })
        return result  
    }
}
