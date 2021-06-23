import demo from './app';

test('test', () => {
  const val = 5;
  const result = demo(5);
  expect(result).toBe(val);
});
