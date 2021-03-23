const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('start', (start, end) => {
    console.log(`started with ${start} through ${end}`);
});

eventEmitter.emit('start', 1, 100);