function removeDuplicates(nums: number[]): number {
    nums.sort((n1, n2) => n1 - n2);
    nums = [...new Set(nums)]
    return nums.length;
};
