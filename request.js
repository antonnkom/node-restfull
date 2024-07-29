import https from 'node:https';

https.get('https://jsonplaceholder.typicode.com/users', (res) => {
    console.log(res.statusCode);
    // console.log("\r\nPayload:");

    let data = '';

    res.on('data', (chunk) => {
        data += chunk;

        console.log(typeof chunk);
        console.log(chunk.length);
        console.log(chunk);
        console.log("\r\n");
    });

    res.on('end', () => {
        const usersArray = JSON.parse(data);
        // console.log(usersArray?.[0]);
    });
}).on('error', (err) => {
    console.error(`Error: ${err}`);
});