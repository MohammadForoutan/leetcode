const removeDuplicates = (nums: number[]): number => {
    let k: number = 0;

    while(k < nums.length) {
        if(nums[k] === nums[k+1]) {
            nums.splice(k, 1) // remove duplicate imtes
            k--; // count unique items (remove if duplicate)
        }
        k++; // count unique items (add if not duplicate)
    }
    return k;
};
