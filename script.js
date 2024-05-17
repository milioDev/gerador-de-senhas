const passwordInput = document.getElementById('password');
const copyBtn = document.getElementById('copy-btn');
const lengthInput = document.getElementById('length');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const generateBtn = document.getElementById('generate-btn');

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_+~`|}{[]:;?><,./-=';

function generatePassword() {
  let characters = '';
  const length = lengthInput.value;

  if (uppercaseCheckbox.checked) {
    characters += uppercase;
  }

  if (lowercaseCheckbox.checked) {
    characters += lowercase;
  }

  if (numbersCheckbox.checked) {
    characters += numbers;
  }

  if (symbolsCheckbox.checked) {
    characters += symbols;
  }

  let password = '';
  for (let i = 0; i < length; i++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  passwordInput.value = password;
}

generateBtn.addEventListener('click', generatePassword);

copyBtn.addEventListener('click', () => {
  passwordInput.select();
  document.execCommand('copy');
  alert('Senha copiada para a área de transferência!');
});