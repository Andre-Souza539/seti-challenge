console.log("Script Cadastro Jogador Iniciado");

document.getElementById('submit').disabled = false;


/* Cadastros Proibidos */
const usersDB = ["cloud","lx2018","kiwi"];


/* validações de campos */

function validaNome() {
    nome = document.getElementById('nome').value;
    if(nome != ""){
        console.log("Nome Válido");
        document.getElementById("nomeLabel").innerHTML=`<span>Nome completo: ok<span>`;
    } else {
        console.log("Nome Inválido");
        document.getElementById("nomeLabel").innerHTML=`<span style="color: red;">Nome completo: *</span>`
    }
}

function validaDataNascimento(){
    dataNasc = document.getElementById('nasc').value;
    if(dataNasc != ""){
        console.log("Data Válida");
        document.getElementById("dataLabel").innerHTML=`<span>Data de nascimento: ok</span>`;
    } else {
        console.log("Data Inválida");

        document.getElementById("dataLabel").innerHTML=`<span style="color:red;">Data de nascimento: *</span>`;
    }

}

function validaUser() { 
    var user = document.getElementById("username").value;

    if(user != ""){
        if(usersDB.includes(user.toLowerCase())){
            var err = "Erro: Usuario Já Cadastrado";
            document.getElementById("userLabel").innerHTML=`<span style="color:red;">Username: *<span>`;
            document.getElementById("username").classList.add("invalid");
            console.log(err);
            return false;
        } else if(!usersDB.includes(user)){ 
            var msg = "Usuário Ok";
            console.log(msg);
            document.getElementById("userLabel").innerHTML=`<span>Username: ok<span>`;
            document.getElementById("username").classList.remove("invalid");
            return true;
        }
    } else {
        var err = "Erro: O campo Username precisa ser preenchido";
        console.log(err);
        return false;
    }   
}

function validaEmail(){
    var email = document.getElementById("email").value;
    if(email == ""){
        document.getElementById("emailLabel").innerHTML = `<span style="color:red;">E-mail: *<span>`
    }
    else {
        document.getElementById("emailLabel").innerHTML = `<span>E-mail: ok<span>`
    }

}

function validaConfirmacaoSenha(){
    var senha = document.getElementById("pass").value;
    var contraSenha = document.getElementById("confirm_pass").value;

    if(senha == contraSenha){
        document.getElementById("confirmPassLabel").innerHTML = `<span>Confirme sua Senha: ok!<span>`;
    } else {
        document.getElementById("confirmPassLabel").innerHTML = `<span style="color:red;">Confirme sua Senha: Senhas Diferentes*<span>`;
    }
    

}

function validaForcaSenha(){
    var tamMin = senhaMinima();
    var temChar = temCharEspecial();
    var temNum = temNumero();

    if(tamMin && temChar && temNum) {
        document.getElementById("passLabel").innerHTML = `<span>Senha: ok<span>`;
    }
    
    console.log(tamMin);
    console.log(temChar);
    console.log(temNum);
}

function senhaMinima(){
    var senha = document.getElementById("pass").value;
    var tamMin = false;

    if(senha.length < 6){
        document.getElementById("passLabel").innerHTML = `<span style="color:red;">Senha: Muito Curta!<span>`;
        return tamMin;
    } else {
        var tamMin = true;
        return tamMin;
    }    
    
}

function temCharEspecial(){
    var senha = document.getElementById("pass").value;
    var charEspecial = /[!?@]/;
    condicao = charEspecial.test(senha);
    if(!condicao){
        document.getElementById("passLabel").innerHTML = `<span style="color:red;">Senha: Precisa de Caracter Especial!<span>`
    }
    return condicao;
}

function temNumero(){
    var senha = document.getElementById("pass").value;
    var num = /\d/
    condicao = num.test(senha)
    if(!condicao){
        document.getElementById("passLabel").innerHTML = `<span style="color:red;">Senha: Precisa de 1 número!<span>`
    }
    return condicao;
}



/* Função para validar todos os campos e enviar o formulário */
function enviarForm(){
    if (validaCampos()){
        if(validaSenha() && validaUser()){
            var msg = "Tudo Ok Usuário Cadastrado!"
            console.log(msg)
            document.getElementById("form").submit();
        } else {
            var msg = "Erro: "
            console.log(msg);
        }
    } else { 
        return false;
    }
    
}

/* Funcao para validar que todos os campos serão preenchidos */
function validaCampos() {
    var campoNome = document.getElementById("Nome").value;
    var campoNasc = document.getElementById("Nasc").value;
    var campoUser = document.getElementById("User").value;
    var campoEmail = document.getElementById("Email").value;
    var campoPass = document.getElementById("Pass").value;
    var campoConfirm = document.getElementById("Confirm").value;

    if(campoNome !== "" && campoNasc !== "" && campoUser !== "" && campoEmail !== "" && campoPass !== "" && campoConfirm !== ""){
        return true;
    } else {
        alert("Todos os Campos precisam ser preenchidos")
        return false;
    }
}
/* Valida se o Campo Senha e o Campo Confirmação de Senha Batem */
