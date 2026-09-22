class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.get(key) === undefined) {
            this.keyStore.set(key, [])
        }
        this.keyStore.get(key).push([timestamp, value])

    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        let list = this.keyStore.get(key) || []
        let l = 0, r = list.length-1
        let res = ""

        while (l <= r) {
            const mid = Math.floor((l + r) / 2);
            if (list[mid][0] <= timestamp) {
                res = list[mid][1]
                l = mid + 1
            } else {
                r = mid - 1
            }
        }
        return res
    }
}
