import { expect, test } from 'vitest';
import { isDigitsOnly, isValidMAC, isValidIP } from './string-validators';

test('123 to equal true', () => {
  expect(isDigitsOnly('123')).toBe(true);
});

test('123.45 to equal false', () => {
  expect(isDigitsOnly('123.45')).toBe(false);
});

test('34aB56 to equal false', () => {
  expect(isDigitsOnly('34aB56')).toBe(false);
});

test('ABcdEF to equal false', () => {
  expect(isDigitsOnly('ABcdEf')).toBe(false);
});

test('72:7C:66:E9:AA:65 equal to true', () => {
  expect(isValidMAC('72:7C:66:E9:AA:65')).toBe(true);
});

test('723:7C:66:E9:AA:65 equal to false', () => {
  expect(isValidMAC('723:7C:66:E9:AA:65')).toBe(false);
});

test('72:7C:66:E9AA:65 equal to false', () => {
  expect(isValidMAC('723:7C:66:E9AA:65')).toBe(false);
});

test('sdfsdf727C66:E9AA:65 equal to false', () => {
  expect(isValidMAC('sdfsdf727C66:E9AA:65')).toBe(false);
});

test('115.42.150.37 equal to true', () => {
  expect(isValidIP('115.42.150.37')).toBe(true);
});

test('192.168.0.1 equal to true', () => {
  expect(isValidIP('192.168.0.1')).toBe(true);
});

test('110.234.52.124 equal to true', () => {
  expect(isValidIP('110.234.52.124')).toBe(true);
});

test('210.110 equal to false', () => {
  expect(isValidIP('210.110')).toBe(false);
});

test('255 equal to false', () => {
  expect(isValidIP('255')).toBe(false);
});

test('y.y.y.y equal to false', () => {
  expect(isValidIP('y.y.y.y')).toBe(false);
});

test('255.0.0.y equal to false', () => {
  expect(isValidIP('255.0.0.y')).toBe(false);
});

test('666.10.10.20 equal to false', () => {
  expect(isValidIP('666.10.10.20')).toBe(false);
});

test('4444.11.11.11 equal to false', () => {
  expect(isValidIP('4444.11.11.11')).toBe(false);
});

test('33.3333.33.3 equal to false', () => {
  expect(isValidIP('33.3333.33.3')).toBe(false);
});
