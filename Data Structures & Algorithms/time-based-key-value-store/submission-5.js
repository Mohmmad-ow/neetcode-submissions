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
        let list = this.keyStore.get(key)
        if (list === undefined) {
            return ""
        }
        if (list.length === 1) {
            return list[0][0] <= timestamp ? list[0][1] : ""
        }
        if (list[0][0] > timestamp) {
            return ""
        }
        console.log(list)
        let l = 0, r = list.length-1
        while (l < r) {
            let mid = Math.floor((l+r) / 2)
            if (list[mid][0] === timestamp) {
                return list[mid][1]
            } else if (list[mid][0] < timestamp) {
                if (list[mid+1][0] > timestamp) {
                    return list[mid][1]
                }
                l = mid + 1
            } else {
                r = mid-1
            }
        }
        console.log(timestamp)
        console.log(l, r, "\n")
        if (l === r && l !== -1 && l <= list.length-1) {
            return list[l][1]
        } else {
            return ""
        }

    }
}
