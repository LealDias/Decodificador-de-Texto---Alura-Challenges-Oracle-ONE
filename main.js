
document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('textarea');
    const outputBox = document.querySelector('.output-box');
    const resultContent = document.querySelector('.result-content');
    const copyButton = document.querySelector('.copy-button');
    const encryptBtn = document.querySelector('.encrypt-btn');
    const decryptBtn = document.querySelector('.decrypt-btn');
  
    encryptBtn.addEventListener('click', encryptText);
    decryptBtn.addEventListener('click', decryptText);
    copyButton.addEventListener('click', copyText);
  
    function encryptText() {
      const originalText = textarea.value;
      if (validateInput(originalText)) {
        const encryptedText = encrypt(originalText.toLowerCase());
        displayResult(encryptedText);
        toggleCopyButton(true);
      } else {
        showModal('Por favor, digite apenas letras minúsculas sem acentos ou caracteres especiais');
      }
    }
  
    function decryptText() {
      const encryptedText = textarea.value;
      if (validateInput(encryptedText)) {
        const decryptedText = decrypt(encryptedText.toLowerCase());
        displayResult(decryptedText);
        toggleCopyButton(true);
      } else {
        showModal('Por favor, digite apenas letras minúsculas sem acentos ou caracteres especiais');
      }
    }
  
    function validateInput(text) {
      return /^[a-z]+$/.test(text.replace(/\s/g, ''));
    }
  
    function displayResult(result) {
      const imageUrl = 'imgs/granted.png';
      const resultHtml = `<img src="${imageUrl}" alt="Imagem de resultado" style="width: 150px;"><p>${result}</p>`;
      resultContent.innerHTML = resultHtml;
    }
  
    function toggleCopyButton(show) {
      copyButton.style.display = show ? 'block' : 'none';
    }
  
    function showModal(message) {
      alert(message);
    }
  
    function encrypt(text) {
      const mapping = {
        'e': 'enter',
        'i': 'imes',
        'a': 'ai',
        'o': 'ober',
        'u': 'ufat'
      };
  
      return text.replace(/[eioua]/g, match => mapping[match]);
    }
  
    function decrypt(text) {
      const mapping = {
        'enter': 'e',
        'imes': 'i',
        'ai': 'a',
        'ober': 'o',
        'ufat': 'u'
      };
  
      return text.replace(/(enter|imes|ai|ober|ufat)/g, match => mapping[match]);
    }
  
    function copyText() {
      const textToCopy = resultContent.querySelector('p').innerText;
    
      const tempTextArea = document.createElement('textarea');
      tempTextArea.value = textToCopy;
      tempTextArea.style.position = 'fixed';
      tempTextArea.style.opacity = 0;
    
      document.body.appendChild(tempTextArea);
      tempTextArea.select();
      document.execCommand('copy');
      document.body.removeChild(tempTextArea);
    
      alert('Texto copiado com sucesso!');
    }


  });