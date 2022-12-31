import { trackSummary } from "../src/main";

describe("trackSummary", () => {
  const points = [
    {
      lat: 12,
      lon: 36,
    },
    {
      lat: 20,
      lon: 60,
    },
  ];
  it("should return a valid result with the given parameter", () => {
    const result = trackSummary(points);
    const expected = {
      time: 90,
      distance: 7596.772503197975,
      pace: 0.00019745227323426527,
    };

    expect(result).toStrictEqual(expected);
  });
});
