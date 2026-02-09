
import CalendarSection, { CalendarSectionProps } from "./calendar-section";
import { daysInMonth, days, weeks } from "@/app/utils/calendar-utils";
import { getCurrentYear, getCurrentMonth, getFirstDayOfWeek } from "@/app/assets/date-converter";

interface CalendarMatrixProps {
    date: Date;
    activities: CalendarSectionProps['activity'][];
}

export default function CalendarMatrix({ date, activities }: CalendarMatrixProps) {

    const weekDay = getFirstDayOfWeek(date);
    function getDayNumber(x: number, y: number) {
        const dayNumber = y * days + x + 1 - weekDay;
        return dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : null;
    }

    function checkActivity(dateString: string, dayNumber: number | null) {
        const [year, month, day] = dateString.split('-');
        if (Number(year) !== getCurrentYear(date) || Number(month) !== getCurrentMonth(date)) return false;

        const normalizedDay = day?.startsWith('0') ? day.slice(1) : day;
        const sameDay = normalizedDay === String(dayNumber)
        return sameDay;
    }

    function createCalendarMatrix() {
        return Array.from({ length: weeks }).map((_, y) =>
            Array.from({ length: days }).map((_, x) => {
                const sectionKey = `${x}-${y}`;
                const dayNumber = getDayNumber(x, y);
                const activity = activities.find(activity => checkActivity(activity.date, dayNumber));
                return (
                    <CalendarSection
                        key={sectionKey}
                        dayNumber={dayNumber}
                        activity={activity ?? { type: '', date: '', calification: 0 }}
                    />
                );
            })
        );
    }

    return (
        <section className='calendar-matrix'>
            {createCalendarMatrix()}
        </section>
    );
}