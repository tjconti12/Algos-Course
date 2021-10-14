const maxSubarraySum = (arr, n) => {
    if (n > arr.length) return null;
    let max = 0;
    let total = 0;
    for (let i = 0; i < n; i++) {
        max += arr[i];
    }
    total = max;
    for (let i = 0; i < arr.length - n; i++) {
        total -= arr[i];
        total += arr[i + n];
        if (total > max) max = total;
    }
    return max;
}


module.exports = maxSubarraySum;