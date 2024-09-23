function updateCountdown(endDate) {
    // Current date and time
    const now = new Date();

    // Calculate the difference
    const distance = endDate - now;

    if (distance < 0) {
        document.getElementById('countdown').innerHTML = '.... Well, the time has passed!';
        return;
    }

    // Time calculations for years, months, weeks, days, hours, minutes, seconds, and milliseconds
    const years = endDate.getFullYear() - now.getFullYear();
    const months = endDate.getMonth() - now.getMonth() + (years * 12);
    const weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    const milliseconds = distance % 1000;

    // Display the result
    document.getElementById('countdown').innerHTML =
        years + ' years, ' +
        (months % 12) + ' months, ' +
        weeks + ' weeks, ' +
        days + ' days, ' +
        hours + ' hours, ' +
        minutes + ' minutes, ' +
        'and ' + seconds + ' seconds.';
}

function startCountdown(targetDate) {
    // Parse the target date
    const endDate = new Date(targetDate);

    // Update countdown every millisecond
    setInterval(function () {
        updateCountdown(endDate);
    }, 1);
}

// Start countdown with your specific date (e.g., "2027-08-25T12:00:00")
startCountdown("2027-01-01T12:00:00");