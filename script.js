document.getElementById('generate').addEventListener('click', generatePassword);

function generatePassword() {
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    const length12 = document.getElementById('length-12').checked;
    const length16 = document.getElementById('length-16').checked;

    const length = length16 ? 16 : 12;
    const charset = getCharset(uppercase, lowercase, numbers, symbols);

    if (charset.length === 0) {
        alert("Please select at least one option!");
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('password').value = password;
}

function getCharset(uppercase, lowercase, numbers, symbols) {
    let charset = '';
    if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charset += '0123456789';
    if (symbols) charset += '!@#$%^&*()_+~`|}{[]:;?><,./-=';
    return charset;
}
