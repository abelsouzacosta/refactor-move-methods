type Point = {
  lat: number;
  lon: number;
};

type Summary = {
  time: number;
  distance: number;
  pace: number;
};

export function trackSummary(points: Array<Point>): Summary {
  let totalTime = calculateTime();
  let totalDistance = calculateDistance();
  let pace = totalTime / 60 / totalDistance;

  return {
    time: totalTime,
    distance: totalDistance,
    pace,
  };

  function calculateDistance(): number {
    let result = 0;

    for (let count = 1; count < points.length; count += 1) {
      result += distance(points[count - 1], points[count]);
    }

    return result;
  }

  function calculateTime(): number {
    let totalTime = 0;

    for (let count = 0; count <= points.length; count += 1) {
      totalTime += 30;
    }

    return totalTime;
  }

  function distance(p1: Point, p2: Point): number {
    const EARTH_RADIUS = 3959;
    const dLat = radians(p2.lat) - radians(p1.lat);
    const dLon = radians(p2.lon) - radians(p1.lon);

    const a =
      Math.pow(Math.sin(dLat / 2), 2) +
      Math.cos(radians(p2.lat)) +
      Math.cos(radians(p1.lat)) +
      Math.pow(Math.sin(dLon / 2), 2);

    const ONEMINUSA = 1 - a;

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(Math.abs(ONEMINUSA)));

    return EARTH_RADIUS * c;
  }

  function radians(degrees: number) {
    return degrees * (Math.PI / 180);
  }
}
