'use server'

const baseUrl = 'http://localhost:3000'

export async function getActivities(userId: number) {
    const response = await fetch(`${baseUrl}/users/${userId}/activities`);

    const data = await response.json();
    console.log('Activities:', data);
    return data;
}

export async function createActivity(type: string, title: string) {
    const requestParameters = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            'type': type,
            'title': title})
        };

    await fetch(`${baseUrl}/activities`, requestParameters);
}

export async function deleteActivity(id: number ) {
    const requestParameters = {
        method: 'DELETE',
    };

    await fetch(`${baseUrl}/activities/${id}`, requestParameters);
}
