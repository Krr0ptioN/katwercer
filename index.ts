
const TIME_REGEX =
    /(?:(\d+)y)?(?:(\d+)M)?(?:(\d+)w)?(?:(\d+)d)?(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?/;

type TimeUnit =
    | 'years'
    | 'months'
    | 'weeks'
    | 'days'
    | 'hours'
    | 'minutes'
    | 'seconds';
const MILLISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;
const DAYS_IN_MONTH = 30; // Average number of days in a month (approximation for simplicity)
const DAYS_IN_YEAR = 365; // Approximation (considering non-leap years)

const millisecondsInTimeUnit: Record<TimeUnit, number> = {
    years: // 1000 * 60 * 60 * 24 * 365
        MILLISECONDS_IN_SECOND *
        SECONDS_IN_MINUTE *
        MINUTES_IN_HOUR *
        HOURS_IN_DAY *
        DAYS_IN_YEAR,
    months:
        MILLISECONDS_IN_SECOND *
        SECONDS_IN_MINUTE *
        MINUTES_IN_HOUR *
        HOURS_IN_DAY *
        DAYS_IN_MONTH,
    weeks:
        MILLISECONDS_IN_SECOND *
        SECONDS_IN_MINUTE *
        MINUTES_IN_HOUR *
        HOURS_IN_DAY *
        DAYS_IN_WEEK,
    days:
        MILLISECONDS_IN_SECOND *
        SECONDS_IN_MINUTE *
        MINUTES_IN_HOUR *
        HOURS_IN_DAY,
    hours: MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR,
    minutes: MILLISECONDS_IN_SECOND * SECONDS_IN_MINUTE,
    seconds: MILLISECONDS_IN_SECOND,
};

type ParsedTime = Partial<Record<TimeUnit, number>>;

function parseTimePart(match: string | undefined): number {
    return match ? parseInt(match) : 0;
}

function parseTimeUnits(matches: RegExpMatchArray | null): ParsedTime {
    const [_, years, months, weeks, days, hours, minutes, seconds] =
        matches || [];

    return {
        years: parseTimePart(years),
        months: parseTimePart(months),
        weeks: parseTimePart(weeks),
        days: parseTimePart(days),
        hours: parseTimePart(hours),
        minutes: parseTimePart(minutes),
        seconds: parseTimePart(seconds),
    };
}

/**
 * Convert the time string to milliseconds.
 *
 * @param timeString The time string to be converted.
 * @returns The total number of milliseconds.
 *
 * y: year
 * M: month
 * w: week
 * d: day
 * h: hour
 * m: minute
 * s: second
 *
 * @example
 * const timeString = '1h 30m';
 * const milliseconds = convertTimeStringToMilliseconds(timeString);
 * console.log(milliseconds); // Output: 5400000 (1 hour and 30 minutes in milliseconds)
 */

export function convertTimeStringToMilliseconds(timeString: string): number {
    const matches = timeString.match(TIME_REGEX);
    const time = parseTimeUnits(matches);

    let totalMilliseconds = 0;
    for (const unit of Object.keys(time) as TimeUnit[]) {
        totalMilliseconds += (time[unit] || 0) * millisecondsInTimeUnit[unit];
    }

    return totalMilliseconds;
}
