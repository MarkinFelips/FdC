const Formulario = document.getElementById('Formulario');
const NomeInput = document.getElementsById('Nome');
const EmailInput = document.getElementsById('Email');
const MensagemInput = document.getElementById('Mensagem');
const NomeErro = document.getElementById('ErroNome');
const EmailErro = document.getElementById('ErroEmail');
const MensagemErro = document.getElementById('ErroMensagem');

    form.addEventListener('Enviar', (event) => {
    event.preventDefault();})

    let Valido = true;

    if(NomeInput.value.trim() === ''){
        NomeErro.textContent = 'Esse campo é obrigatório';
        NomeInput.classContent.add("invalido");
        Valido = false;
    } else {
        NomeErro.textContent = 'Esse campo é obrigatório';
        NomeInput.classList.remove('invalido')
    }

    if(EmailInput.value.trim() === ''){
        EmailErro.textContent = 'Esse campo é obrigatório';
        EmailInput.classList.add('invalido');
        Valido = false;
    } else if (!EmailInput.checkValidity()) {
        EmailErro.textContent = 'Por favor insira um e-mail válido';
        EmailInput.classList.add('invalido');
        Valido = false;
    } else {
        EmailErro.textContent = 'Esse campo é obrigatorio';
        EmailInput.classList.remove('invalido');
    }

    if (MensagemInput.value.trim() === '') {
        MensagemErro.textContent = 'Esse campo é obrigatorio';
        MensagemInput.classList.add('invalido');
        isValid = false;
      } else {
        MensagemErro.textContent = '';
        MensagemInput.classList.remove('invalido');
      }
    
    if (Valido) {
         alert('Mensagem enviada com sucesso!');
    };