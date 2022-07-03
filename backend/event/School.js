const EventEmitter = require('events');

class School extends EventEmitter {
    startPeriod() {
        console.log('Start Period');

        // raise the event
        setTimeout(() => {
            this.emit('bellRing', {
                period: 'First,',
                text: 'next will be start...!',
            });
        }, 2000);
        // Output
        // First
        // Start Period
        // Last
        // Run!! First, next will be start...!
    }
}

module.exports = School;
