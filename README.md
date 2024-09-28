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
    <script src="script.js"></script>
</body>
</html>
