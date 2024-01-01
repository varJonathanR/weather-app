export function EpochToDate(epoch) {
    const date = new Date(epoch * 1000);
    const currentDate = new Date();

    const isTomorrow = date.getDate() === currentDate.getDate() + 1 &&
                        date.getMonth === currentDate.getMonth() &&
                        date.getFullYear() === currentDate.getFullYear();

    if(isTomorrow) {
        return "Tomorrow"
    } else {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const day = days[date.getUTCDay()];
        const dayDate = date.getUTCDate();
        const month = months[date.getUTCMonth()];

        return `${day}, ${dayDate} ${month}`;
    }
}