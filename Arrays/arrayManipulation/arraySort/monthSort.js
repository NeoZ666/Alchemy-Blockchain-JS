const MONTHS = [
    'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
    'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'
];

function sortByMonth(events) {
    events.sort((a,b)=>{
        if (MONTHS.indexOf(a.month)<MONTHS.indexOf(b.month)) {
            return -1;
        }
        if (MONTHS.indexOf(a.month)>MONTHS.indexOf(b.month)) {
            return 1;
        }
    })
}

module.exports = sortByMonth;
