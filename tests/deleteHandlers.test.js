// eslint-disable-next-line no-undef
const config = require('../config');

test('Status code should be 200 after kit deletion', async () => {
	let actualStatusCode;
	try {
		const response = await fetch(`${config.API_URL}/api/v1/kits/7`, {
			method: 'DELETE',
		});
		actualStatusCode = response.status;
	} catch (error) {
		console.error(error);
	}
	

	expect(actualStatusCode).toBe(200);
});


test('Deleted kit should return 404', async () => {
    let actualStatusCode;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/7`);
        actualStatusCode = await response.status;
    } catch (error) {
        console.error(error);
    }
	
	
	expect(actualStatusCode).toBe(404);
});