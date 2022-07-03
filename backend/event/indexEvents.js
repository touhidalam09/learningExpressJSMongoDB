const School = require('./School');

const school = new School();

console.log('First');
school.on('bellRing', ({ period, text }) => {
    console.log(`Run!! ${period} ${text}`);
});
school.startPeriod();

console.log('Last');
