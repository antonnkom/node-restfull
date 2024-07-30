import https from 'node:https';

https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        const postsArray = JSON.parse(data);
        const result = postsArray.filter(post => post.userId === 1);
        console.log(result.length);
    });
}).on('error', (err) => {
    console.error(`Error: ${err}`);
});