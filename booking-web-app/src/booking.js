// This file contains the JavaScript code that handles the form submission, saves booking details to local storage, and redirects to the confirmation page.

document.getElementById('bookingForm').addEventListener('submit', handleBooking);

function handleBooking(event) {
    event.preventDefault();

    const email = document.getElementById('userEmail').value;
    const packageSelection = document.getElementById('packageSelection').value;
    const paxNumber = document.getElementById('paxNumber').value;
    const checkinDate = document.getElementById('checkinDate').value;
    const checkoutDate = document.getElementById('checkoutDate').value;

    const bookingDetails = {
        email,
        packageSelection,
        paxNumber,
        checkinDate,
        checkoutDate
    };

    localStorage.setItem('bookingDetails', JSON.stringify(bookingDetails));
    window.location.href = 'confirmation.html';
}