export default class ExoClick {
  static highestOccurrence(
    input: Array<string | number>
  ): Array<string | number> {
    if (input.length <= 1) return input;
    const raw: {
      freqMap: Map<string | number, number>;
      maxFreq: number;
    } = input.reduce(
      (acc, val) => {
        if ((val || val === 0) && !acc.freqMap.has(val)) {
          acc.freqMap.set(val, 1);
        } else {
          const currFreq = acc.freqMap.get(val) + 1;
          acc.freqMap.set(val, currFreq);
          if (currFreq > acc.maxFreq) acc.maxFreq = currFreq;
        }
        return acc;
      },
      { freqMap: new Map(), maxFreq: 1 }
    );

    const results: Array<string | number> = [];
    for (const [val, freq] of raw.freqMap) {
      if (freq === raw.maxFreq) results.push(val);
    }

    return results;
  }

  static maxSubarraySum(input: number[], num: number): number | null {
    if (!num || !input.length) return null;
    let currSum = input.slice(0, num).reduce((a, v) => (a += v));
    let maxSum = currSum;
    if (input.length <= num) return maxSum;
    for (let i = num; i < input.length; i++) {
      currSum += input[i] - input[i - num];
      if (currSum > maxSum) maxSum = currSum;
    }
    return maxSum;
  }

  static averagePair(input: number[], target: number): boolean {
    if (
      input.length < 2 ||
      input[0] >= target ||
      input[input.length - 1] <= target
    )
      return false;

    let lowIdx = this.getTopLowIdx(input, target);
    let highIdx = lowIdx + 1;
    while (lowIdx >= 0 && highIdx < input.length) {
      const mean = (input[lowIdx] + input[highIdx]) / 2;
      if (mean === target) return true;
      if (mean < target) highIdx++;
      else lowIdx--;
    }
    return false;
  }

  private static getTopLowIdx(
    arr: number[],
    num: number,
    high = arr.length - 1,
    low = 0
  ): number {
    const mid = low + ~~((high - low) / 2);
    if (arr[mid] > num) return this.getTopLowIdx(arr, num, mid + 1, low);
    if (arr[mid + 1] < num) return this.getTopLowIdx(arr, num, high, mid);
    return mid;
  }
}
