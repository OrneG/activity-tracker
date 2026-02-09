'use server'
import { getDateString, getTodayDate} from "./date-converter";

const baseUrl = 'http://190.2.56.166:8080'

export async function getActivities(userId: number, type: string) {
    console.log('Activity filter by:', type);
    const response = await fetch(`${baseUrl}/users/${userId}/activities?type=${type}`);

    const data = await response.json();
    console.log('Activities:', data);
    return data;
}

export async function createActivity(type: string, userId: number) {
    const activityEntryDate = getDateString(getTodayDate());
    const requestParameters = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'type': type,
            'date': activityEntryDate,
            'userId': userId})
        };

    await fetch(`${baseUrl}/activities`, requestParameters);
}

export async function deleteActivity(id: number ) {
    const requestParameters = {
        method: 'DELETE',
    };

    await fetch(`${baseUrl}/activities/${id}`, requestParameters);
}
