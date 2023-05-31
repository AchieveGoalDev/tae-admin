import { interpolateLab, interpolateNumber } from "d3-interpolate";
import { tweened } from "svelte/motion";

export function buildTween(stateArray, duration) {
  
  let interpolator;

  if (typeof stateArray[0] === "number") {
    interpolator = interpolateNumber;
  } else {
    interpolator = interpolateLab;
  }

  const result = tweened(stateArray, { duration, interpolate: interpolator });
  return result;
}
