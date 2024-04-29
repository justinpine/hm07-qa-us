# Sprint 7 project

This project covered the "Introduction to JavaScript" chapter and encompassed writing tests for GET, POST, PUT, and DELETE requests using the Urban Grocers API. The project included 5 total tasks, with the first four tasks writing two tests each for the requests previously mentioned. 

The documentation source used was apiDoc, which can be accessed via the server URL provided on the project page and including"/docs" at the end of the URL. apiDoc was used to check endpoints and verify the various tests, including status codes and the response body of requests. 

The Postman platform was used to send the requests using the provided server URL. Postman be accessed via https://www.postman.com/ or downladed to be used on desktop. The GET, POST, PUT, and DELETE requests were tested using the provided server URL and the endpoints outlined in apiDoc. 

- The GET request used was {{server_url}}/api/v1/kits/1
    - After inputting the URL, endpoint and clicking "Send", the status code and response body are verified 

- The POST request used was {{server_url}}/api/v1/orders
    - JavaScript data was added to the body before sending the request
    - The status code and response body are verified after sending the request

- The PUT request used was {{server_url}}/api/v1/kits/5
    - I chose kit #5 to change, changing the quantity in the code body and changing the product name from "Pasta", to "Spaghetti" 
    - The staus code and response body are verified after sending the request
    - Checking the kit using the GET request shows the kit had been changed

- The DELETE request used was {{server_url}}/api/v1/kits/7
    - After inputting the URL, endpoint, and clicking "Send", the status code and response body are verified
    - Checking the kit using the GET request shows the kit is deleted

The templates for the tests provided in the project folder were opened via Visual Code which can be accessed at https://code.visualstudio.com/ and downloaded to be used on desktop. After opening each file, two tests were ran for each request mentioned above; one to check the response code, and the other to parse the response and check that the response body contains the expected data. The tests were ran using the terminal within Visual Code and the npx jest command. 

The project was completed using a Windows 10 Pro PC.