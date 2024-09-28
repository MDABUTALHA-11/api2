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
}
