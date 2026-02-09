import { getDaysInMonth } from "date-fns";
import { getTodayDate } from "../assets/date-converter";

export const days = 7;
export const weeks = 5;
export const daysInMonth = getDaysInMonth(getTodayDate());
export const currentDate = getTodayDate();
