function errorThrown(message) {
    console.log(message);
}

try {
    const num = 10;
    if (typeof num !== 'string') {
        throw new Error('Need a string');
    }
} catch (e) {
    errorThrown(e.message);
}
