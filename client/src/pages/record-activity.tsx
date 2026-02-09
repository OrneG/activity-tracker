import { currentDate } from "@/app/utils/calendar-utils";

export default function RecordActivity() {

    return (
        <main>
            <h2>Record Activity for {currentDate.toDateString()}</h2>
        </main>
    );
}