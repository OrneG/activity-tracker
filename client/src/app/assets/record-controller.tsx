'use server'
import { getDateString, getTodayDate} from "./date-converter";

const baseUrl = 'http://localhost:3000'

export async function getRecords(activityId: number, year: number, month: number) {
    console.log('Record for:', year, month);
    const response = await fetch(`${baseUrl}/activities/${activityId}/records?year=${year}&month=${month}`);

    const data = await response.json();
    console.log('Records:', data);
    return data;
}

export async function createRecord(activityId: number, calification: number) {
    const recordEntryDate = getDateString(getTodayDate());
    const requestParameters = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'calification': calification,
            'date': recordEntryDate})
        };

    await fetch(`${baseUrl}/activities/${activityId}/records`, requestParameters);
}

export async function deleteRecord(id: number ) {
    const requestParameters = {
        method: 'DELETE',
    };

    await fetch(`${baseUrl}/records/${id}`, requestParameters);
}
