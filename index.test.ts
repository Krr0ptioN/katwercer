import { convertTimeStringToMilliseconds } from './index';

describe('convertTimeStringToMilliseconds', () => {
    test('should convert time string to milliseconds', () => {
        // Test 1: 1 hour
        expect(convertTimeStringToMilliseconds('1h')).toBe(3600000);

        // Test 2: 1 days, 1 hours
        expect(convertTimeStringToMilliseconds('1d1h')).toBe(90000000);

        // Test 3: 3 weeks, 5 days
        expect(convertTimeStringToMilliseconds('3w5d')).toBe(2246400000);

        // Test 4: 3 year, 6 months, 2 days
        expect(convertTimeStringToMilliseconds('3y6M2d')).toBe(110332800000);
    });
});
