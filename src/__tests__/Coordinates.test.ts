import {
  canvas2Cartesian,
  cartesian2Canvas,
  cartesian2Polar,
  polar2Cartesian
} from "../Coordinates";

jest.mock("react-native-reanimated");

test("canvas2Cartesian 1", () => {
  const point = canvas2Cartesian({ x: 500, y: 200 }, { x: 500, y: 200 });
  expect(point.x[" __value"]).toBe(0);
  expect(point.y[" __value"]).toBe(-0);
});

test("canvas2Cartesian 2", () => {
  const point = canvas2Cartesian({ x: 0, y: 0 }, { x: 500, y: 200 });
  expect(point.x[" __value"]).toBe(-500);
  expect(point.y[" __value"]).toBe(200);
});

test("canvas2Cartesian 3", () => {
  const point = canvas2Cartesian({ x: 600, y: 300 }, { x: 500, y: 200 });
  expect(point.x[" __value"]).toBe(100);
  expect(point.y[" __value"]).toBe(-100);
});

test("cartesian2Canvas 1", () => {
  const point = cartesian2Canvas({ x: 0, y: 0 }, { x: 500, y: 200 });
  expect(point.x[" __value"]).toBe(500);
  expect(point.y[" __value"]).toBe(200);
});

test("cartesian2Canvas 2", () => {
  const point = cartesian2Canvas({ x: -500, y: 200 }, { x: 500, y: 200 });
  expect(point.x[" __value"]).toBe(0);
  expect(point.y[" __value"]).toBe(0);
});

test("canvas2Cartesian 3", () => {
  const point = cartesian2Canvas({ x: 100, y: -100 }, { x: 500, y: 200 });
  expect(point.x[" __value"]).toBe(600);
  expect(point.y[" __value"]).toBe(300);
});

test("canvas2Cartesian 3", () => {
  const point = cartesian2Canvas({ x: 100, y: -100 }, { x: 500, y: 200 });
  expect(point.x[" __value"]).toBe(600);
  expect(point.y[" __value"]).toBe(300);
});

test("cartesian2Polar", () => {
  const x = 0;
  const y = 100;
  const center = { x: 100, y: 100 };
  const { alpha, radius } = cartesian2Polar(canvas2Cartesian({ x, y }, center));
  expect(alpha[" __value"]).toBe(Math.PI);
  expect(radius[" __value"]).toBe(100);
  const { x: x1, y: y1 } = cartesian2Canvas(
    polar2Cartesian({ alpha, radius }),
    center
  );
  expect(x1[" __value"]).toBe(0);
  expect(Math.round(y1[" __value"])).toBe(100);
});