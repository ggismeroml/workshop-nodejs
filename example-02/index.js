/*
 * Workshop NodeJS 
 * Ejemplo 02
 */

const https = require('https');
const fs = require('fs');

const https_options = {
    host: "api.mercadolibre.com",
    path: "/sites",
    method: 'GET',
    headers: {
    	'Content-type': 'application/json'
    }
};

const request = https.request(https_options, function(response) {

	    if(response.statusCode !== 200) {
	        throw new Error("Response not 200");
	    } else {

	        let item = "";

	        response.on('data', (chunk) => {
	            item += chunk;
	        });

	        response.on('end', () => {
	        	fs.writeFile('output.json', item, function(err) {
	        		if(err) {
	        			return console.log(err);
	        		}

	        		console.log("Sites > output.json");
	        	})
	        })
	    }
	}
);

request.on('error', (error) => {
	throw error;
});

request.end();