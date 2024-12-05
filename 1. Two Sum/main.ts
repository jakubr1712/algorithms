function twoSum(nums: number[], target: number): number[] | null {
  if (nums.length < 2) return null;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

function twoSum2(nums: number[], target: number): number[] | null {
  const numToIndex = new Map<number, number>();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (numToIndex.has(complement)) {
      return [numToIndex.get(complement)!, i];
    }

    numToIndex.set(nums[i], i);
  }

  return null;
}
