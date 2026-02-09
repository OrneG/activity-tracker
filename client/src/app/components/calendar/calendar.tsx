'use client';

import { getCurrentYear, getDateFromString, getMonthName, getTodayDate } from '../../assets/date-converter';
import CalendarMatrix from './calendar-matrix';
import { exerciseList, foodList } from '../../assets/month-activity';
import { useState } from 'react';

export default function Calendar() {
    const [activityValue, setActivityValue] = useState('');
    const activityList = activityValue === 'food' ? foodList : exerciseList;

    const currentDate = getTodayDate()
    const activityDate = activityList.length && getDateFromString(activityList[0].date);
    const date = activityDate ? activityDate : currentDate;
    const monthName = getMonthName(date);
    const year = getCurrentYear(date);

    return (
        <section className='calendar'>
            <h2>{monthName} {year}</h2>
            <select name='activity-type' className='activity-type' defaultValue={activityValue} onChange={(event) => setActivityValue(event.target.value)}>
                <option value='food'>Food
                </option>
                <option value='exercise'>Exercise
                </option>
                <option value='banjo'>Banjo
                </option>
            </select>
            <ul className='week-days'>
                <li>Su</li>
                <li>Mo</li>
                <li>Tu</li>
                <li>We</li>
                <li>Th</li>
                <li>Fr</li>
                <li>Sa</li>
            </ul>
            <CalendarMatrix date={date} activities={[...activityList]} />
        </section>
    );
}