import { format } from 'date-fns';

export function getFirstDayOfWeek(date: Date) {

    const year = getCurrentYear(date);
    const month = date.getMonth();

    const firstOfMonth = new Date(year, month, 1);

    return getWeekDay(firstOfMonth);
}

export function getCurrentMonth(date: Date) {
    return date.getMonth() + 1;
}

export function getCurrentYear(date: Date) {
    return date.getFullYear();
}

export function getdateString(date: Date) {
    return format(date, 'yyyy-MM-dd');
}

export function getDateFromString(dateString: string) {
    const [year, month, day] = dateString.split('-').map(Number);
    return new Date(year, month - 1, day);
}

export function getMonthName(date: Date) {
    return date.toLocaleString('en-EN', { month: 'long' })
}

export function getWeekDay(date: Date) {
    return date.getDay();
}

export function getWeekDayNumber(date: Date) {
    return date.getDate();
}

export function getPreviousMonth(date: Date) {
    const previousMonth = getCurrentMonth(date) - 1;
    return previousMonth;
}

export function getTodayDate() {
    return new Date();
}

export function getFollowingMonth(date: Date) {
    const followingMonth = getCurrentMonth(date) + 1;
    return followingMonth;
}
