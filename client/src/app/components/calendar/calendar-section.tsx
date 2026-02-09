import { FaFaceGrinStars, FaFaceSmile, FaFaceMeh, FaFaceMehBlank, FaTableTennisPaddleBall, FaFaceFrown } from "react-icons/fa6";
import { TbPlayVolleyball } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { GiBanjo } from 'react-icons/gi';

export interface CalendarSectionProps {
    dayNumber: number | null;
    activity: {
        type: string;
        date: string;
        calification: number;
    }
}

export default function CalendarSection({ dayNumber, activity }: CalendarSectionProps) {

    const activityRecorded = activity.calification !== 0;
    const exerciseEmoji = { 1: <FaTableTennisPaddleBall />, 2: <TbPlayVolleyball />, 3: <CgGym /> }
    const foodEmoji = {
        1: { 'icon': <FaFaceFrown />, 'className': 'food-frown' },
        2: { 'icon': <FaFaceMeh />, 'className': 'food-meh' },
        3: { 'icon': <FaFaceMehBlank />, 'className': 'food-meh-blank' },
        4: { 'icon': <FaFaceSmile />, 'className': 'food-smile' },
        5: { 'icon': <FaFaceGrinStars />, 'className': 'food-grin-stars' }
    }

    const exerciseRating = exerciseEmoji[activity.calification as keyof typeof exerciseEmoji];
    const foodRating = foodEmoji[activity.calification as keyof typeof foodEmoji];
    const activityRating = activity.type === "comida" ? foodRating.icon : exerciseRating
    const inactive = dayNumber === null;

    const classes = `calendar-section ${inactive ? 'inactive' :
            activityRecorded ?
                activity.type === "comida" ? foodRating.className
                    : "activity-done"
                : ""
        }`;

    return <div className={classes}>
        {activityRecorded ? activityRating : dayNumber}
    </div>
}