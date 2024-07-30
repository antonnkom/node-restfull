import https from 'node:https';

const getComments = (postId = null) => {
    let url = 'https://jsonplaceholder.typicode.com/comments';

    if (postId) {
        url += `?postId=${postId}`;
    }

    https.get(url, (res) => {
        let data = '';

        res.on('data', (chunk) => {
            data += chunk;
        });

        res.on('end', () => {
            const commentsArray = JSON.parse(data);

            if (postId) {
                console.log(`Post's id = ${postId} comments count: ${commentsArray.length}`);
                console.log(`First comment title: ${commentsArray[0].name}`);
            } else {
                console.log(`Comments in total: ${commentsArray.length}`);
            }

            console.log("\r\n");
        });

    }).on('error', (err) => {
        console.error(`Error: ${err}`);
    });
};

getComments();
getComments(1);
getComments(2);