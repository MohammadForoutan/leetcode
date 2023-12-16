function searchInsert(nums: number[], target: number): number {
  let i = 0;
  for (i = 0; i < nums.length; i++) {
    if (nums[i] >= target) return i;
  }
  return i;
}
