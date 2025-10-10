'use client';

import { getCurrentYear, getDateFromString, getMonthName, getTodayDate } from '../assets/date-converter';
import CalendarMatrix from '../components/calendar-matrix';
import { foodList } from '../assets/month-activity';
import { PiForkKnifeBold, PiPersonSimpleRunBold } from 'react-icons/pi';
import { GiBanjo } from 'react-icons/gi';
import { useState } from 'react';


const currentDate = getTodayDate()
const activityDate = foodList.length && getDateFromString(foodList[0].date);
const date = activityDate ? activityDate : currentDate;
const monthName = getMonthName(date);
const year = getCurrentYear(date);

export default function Calendar() {
    const [selectedActivity, setSelectedActivity] = useState('food');

    return (
        <section className='calendar'>
            <h2>{monthName} {year}</h2>
            <select name='activity-type' className='activity-type'>
                <option value='food'>
                    <div className='icon'>
                        <PiForkKnifeBold />
                    </div>
                    <div className='title'>Food</div>
                </option>
                <option value='exercise'>
                    <div className='icon'>
                        <PiPersonSimpleRunBold />
                    </div>
                    <div className='title'>Exercise</div>
                </option>
                <option value='banjo'>
                    <div className='icon'>
                        <GiBanjo />
                    </div>
                    <div className='title'>Banjo</div>
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
            <CalendarMatrix date={date} activities={[...foodList]} />
        </section>
    );
}