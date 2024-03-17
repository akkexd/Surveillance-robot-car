function switchFunctionality(functionality) {
    let ipAddress;
    if (functionality === 'car') {
        // Set the IP address of the ESP32 CAM for car control
        ipAddress = "http://192.168.1.88"; // Example IP for car control
    } else if (functionality === 'picture') {
        // Set the IP address of the ESP32 CAM for picture taking
        ipAddress = "http://192.168.1.101"; // Example IP for picture taking
    }

    // Open the IP address in a new tab
    window.open(ipAddress, '_blank');

    // Send AJAX request to the backend server
    fetch('/switch_functionality', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ipAddress: ipAddress, functionality: functionality })
    })
    .then(response => response.json())
    .then(data => {
        // Update UI based on response (if needed)
        console.log(data);
    })
    .catch(error => {
        console.error(error);
        // Handle errors (if needed)
    });
}
