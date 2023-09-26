import app from './config/express';

const main = () => {
    try {
        app.listen(3000);
        console.log('Server running')
    } catch (err) {
        console.log(err)
    }
}

main();