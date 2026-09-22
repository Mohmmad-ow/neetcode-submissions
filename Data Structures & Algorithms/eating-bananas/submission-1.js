class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let min = 1, max = Math.max(...piles)
        let res = max

        while (min <= max) {
            let hours = 0
            let k = Math.floor((min + max) / 2)


            for (const p of piles) {
                hours += Math.ceil(p / k);
            }
            if (hours <= h) {
                res = k;
                max = k - 1;
            } else {
                min = k + 1;
            }

        }
        return res

    }
}
