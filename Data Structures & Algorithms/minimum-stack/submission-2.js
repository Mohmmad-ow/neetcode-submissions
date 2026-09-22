class MinStack {
    constructor() {
        this.minStack = [];
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (this.stack.length == 0) {
            this.stack.push(val)
            this.minStack.push(val)
        } else {
            if (this.minStack[this.minStack.length - 1] > val) {
                this.stack.push(val)
                this.minStack.push(val)
            } else {
                this.stack.push(val)
                this.minStack.push(this.minStack[this.minStack.length-1])
            }
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (this.stack.length == 0) {
            return
        } else {
            this.stack.pop()
            this.minStack.pop()
        }
    }

    /**
     * @return {number}
     */
    top() {
        return this.stack[this.stack.length-1]
    }

    /**
     * @return {number}
     */
    getMin() {
        if (this.stack.length == 0) {
            return
        } else {
            return this.minStack[this.minStack.length-1]
        }
    }
}