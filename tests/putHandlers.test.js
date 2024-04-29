// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
	"productsList": [
		{
			"id": 5,
			"quantity": 5
		}
	],
	"name": "Spaghetti"
};

test('Status code should be 200', async () => {
    let ResponseStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
			method: 'PUT',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		ResponseStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	

	expect(ResponseStatusCode).toBe(200);
});


test('Response body should contain...', async () => {
    let actualResponseBody;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/5`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        actualResponseBody = await response.json();
    } catch (error) {
        console.error(error);
    }
	
	
	expect(actualResponseBody["ok"]).toBe(true);
});