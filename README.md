<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Password Generator</title>
    <!-- Bootstrap CSS -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="style.css">
    <style>
        /* Custom Card Design */
.custom-card {
    background-color: #fff;
    border-radius: 10px;
    padding: 20px;
    transition: all 0.3s ease;
}

.custom-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

/* Header Styling */
.custom-header {
    background: linear-gradient(45deg, #007BFF, #6A11CB);
    border-radius: 10px 10px 0 0;
}

/* Custom Input, Button and Label Styling */
.custom-label {
    font-weight: bold;
    color: #6c757d;
}

.custom-input {
    border-radius: 5px;
    border: 1px solid #ddd;
    transition: border-color 0.3s;
}

.custom-input:focus {
    border-color: #007BFF;
}

.custom-btn {
    background: linear-gradient(45deg, #007BFF, #6A11CB);
    border: none;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    transition: background 0.3s ease;
}

.custom-btn:hover {
    background: linear-gradient(45deg, #6A11CB, #007BFF);
    box-shadow: 0 4px 15px rgba(0, 123, 255, 0.5);
}

/* Checkbox Styling */
.custom-check {
    width: 20px;
    height: 20px;
}

/* Password Display Styling */
.custom-password-display {
    background-color: #f9f9f9;
    font-weight: bold;
    word-wrap: break-word;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
}

/* Footer Button */
.custom-footer-btn {
    margin-top: 15px;
}

/* Hover Effects */
.custom-password-display {
    cursor: pointer;
    </style>
</head>
<body>
    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow-lg rounded custom-card">
                    <div class="card-header text-center bg-gradient-primary text-white custom-header">
                        <h2>Password Generator</h2>
                    </div>
                    <div class="card-body">
                        <div class="form-group">
                            <label for="length" class="custom-label">Password Length:</label>
                            <input type="number" class="form-control custom-input" id="length" value="12" min="4" max="30">
                        </div>
                        
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="uppercase" checked>
                            <label class="form-check-label custom-label" for="uppercase">Include Uppercase Letters</label>
                        </div>

                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="numbers" checked>
                            <label class="form-check-label custom-label" for="numbers">Include Numbers</label>
                        </div>

                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input custom-check" id="special" checked>
                            <label class="form-check-label custom-label" for="special">Include Special Characters</label>
                        </div>

                        <button id="generateBtn" class="btn btn-block btn-gradient-primary custom-btn">Generate Password</button>
                    </div>
                    <div class="card-footer text-center">
                        <p id="passwordDisplay" class="alert alert-secondary custom-password-display">Your generated password will appear here</p>
                        <button id="copyBtn" class="btn btn-secondary custom-btn">Copy to Clipboard</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS and dependencies -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script src="script.js">
    // JavaScript for Password Generator
const passwordDisplay = document.getElementById('passwordDisplay');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');

generateBtn.addEventListener('click', () => {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSpecial = document.getElementById('special').checked;

    const password = generatePassword(length, includeUppercase, includeNumbers, includeSpecial);
    passwordDisplay.textContent = password;
});

copyBtn.addEventListener('click', () => {
    const textArea = document.createElement('textarea');
    textArea.value = passwordDisplay.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    alert('Password copied to clipboard!');
});

function generatePassword(length, includeUppercase, includeNumbers, includeSpecial) {
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const specialChars = '!@#$%^&*()-_=+[]{}|;:",.<>?/~`';

    let characterPool = lowercaseChars;

    if (includeUppercase) {
        characterPool += uppercaseChars;
    }
    if (includeNumbers) {
        characterPool += numberChars;
    }
    if (includeSpecial) {
        characterPool += specialChars;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    return password;
}</script>
</body>
</html>
