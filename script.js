function switchFunctionality(functionality) {
    let ipAddress;
    if (functionality === 'car') {
        // Set the IP address of the ESP32 CAM for car control
        ipAddress = "http://192.168.184.113"; // Example IP for car control
    } else if (functionality === 'picture') {
        // Set the IP address of the ESP32 CAM for picture taking
        ipAddress = "http://192.168.184.239"; // Example IP for picture taking
    }

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
        
        // Create a hidden link element
        const link = document.createElement('a');
        link.href = ipAddress;
        link.target = '_blank';

        // Trigger a click event on the link to open the new tab
        link.dispatchEvent(new MouseEvent('click'));
    })
    .catch(error => {
        console.error(error);
        // Handle errors (if needed)
    });
}
