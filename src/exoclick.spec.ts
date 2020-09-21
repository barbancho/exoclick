import ExoClick from "./exoclick.class";

describe("Exoclick test suit", () => {
  it("should start tests", () => {
    expect(true).toBe(true);
  });

  it("should be defined", () => {
    expect(ExoClick).toBeDefined();
  });

  describe("highestOcurrence", () => {
    it("should be defined", () => {
      expect(ExoClick.highestOccurrence).toBeDefined();
    });
    it("should not break if empty data", () => {
      expect(ExoClick.highestOccurrence([])).toEqual([]);
      expect(ExoClick.highestOccurrence([2, 0, 2, 2, 2, 4, 2])).toEqual([2]);
    });
    it("should comply with proposed examples", () => {
      expect(ExoClick.highestOccurrence([2, 3, 2, 2, 2, 4, 2])).toEqual([2]);
      expect(ExoClick.highestOccurrence([2, 3, 2, 3, 2, 3, 4])).toEqual([2, 3]);
      expect(
        ExoClick.highestOccurrence(["a", "b", "c", "a", "a", "a", "a"])
      ).toEqual(["a"]);
      expect(ExoClick.highestOccurrence(["a", "a", 2, 2, 2, "a", 4])).toEqual([
        "a",
        2,
      ]);
    });
  });

  describe("maxSubarraySum", () => {
    it("should be defined", () => {
      expect(ExoClick.maxSubarraySum).toBeDefined();
    });
    it("should not break if empty data", () => {
      expect(ExoClick.maxSubarraySum([], 4)).toBeNull();
      expect(ExoClick.maxSubarraySum([4, 2, 1, 6, 0], 0)).toBeNull();
    });
    it("should comply with proposed examples", () => {
      expect(ExoClick.maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)).toBe(17);
      expect(ExoClick.maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)).toBe(10);
      expect(ExoClick.maxSubarraySum([4, 2, 1, 6], 1)).toBe(6);
      expect(ExoClick.maxSubarraySum([4, 2, 1, 6, 2], 4)).toBe(13);
    });
  });

  describe("averagePair", () => {
    it("should be defined", () => {
      expect(ExoClick.averagePair).toBeDefined();
    });
    it("should not break if empty data", () => {
      expect(ExoClick.averagePair([], 4)).toBe(false);
      expect(ExoClick.averagePair([-1, 0, 3, 4, 5, 6], 0)).toBe(false);
    });
    it("should comply with proposed examples", () => {
      expect(ExoClick.averagePair([1, 2, 3], 2.5)).toBe(true);
      expect(ExoClick.averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)).toBe(
        true
      );
      expect(ExoClick.averagePair([-1, 0, 3, 4, 5, 6], 4.1)).toBe(false);
    });
  });
});
