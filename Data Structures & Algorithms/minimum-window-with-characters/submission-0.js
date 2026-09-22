class Solution {
    minWindow(s, t) {
        if (t.length === 0 || s.length === 0) return "";

        // Build required frequency map for t
        const freq = new Map();
        for (const ch of t) {
            freq.set(ch, (freq.get(ch) || 0) + 1);
        }

        const window = new Map();
        let formed = 0;
        const required = freq.size; // number of unique chars to match

        // ans = [window length, left, right]
        let ans = [Infinity, 0, 0];
        let l = 0;

        for (let r = 0; r < s.length; r++) {
            const ch = s[r];
            window.set(ch, (window.get(ch) || 0) + 1);

            if (freq.has(ch) && window.get(ch) === freq.get(ch)) {
                formed++;
            }

            // Try to contract while valid
            while (l <= r && formed === required) {
                // Update answer if smaller
                if (r - l + 1 < ans[0]) {
                    ans = [r - l + 1, l, r];
                }

                const leftChar = s[l];
                window.set(leftChar, window.get(leftChar) - 1);
                if (freq.has(leftChar) && window.get(leftChar) < freq.get(leftChar)) {
                    formed--;
                }
                l++;
            }
        }

        return ans[0] === Infinity ? "" : s.substring(ans[1], ans[2] + 1);
    }
}
