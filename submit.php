<?php
// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the JSON data sent from the frontend
    $data = json_decode(file_get_contents('php://input'), true);

    // Extract the form fields
    $firstName = $data['firstName'] ?? '';
    $lastName = $data['lastName'] ?? '';
    $email = $data['email'] ?? '';
    $password = $data['password'] ?? '';

    // Validate the inputs (simple validation for example purposes)
    if (empty($firstName) || empty($lastName) || empty($email) || empty($password)) {
        // Send an error response
        echo json_encode([
            'success' => false,
            'message' => 'Please fill out all fields.'
        ]);
        exit;
    }

    // Here, you can add logic to save the data to a database (e.g., MySQL).
    // Example: Connect to the database and insert the form data.

    // Simulate a successful response for now
    echo json_encode([
        'success' => true,
        'message' => 'Form submitted successfully!'
    ]);
} else {
    // If the request method is not POST, return an error
    echo json_encode([
        'success' => false,
        'message' => 'Invalid request method.'
    ]);
}
?>