const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function calc_idade(str) {
    const hoje = new Date();
    const nascimento = new Date(str);

    const idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    const dia = hoje.getDate() - nascimento.getDate();

    if (mes < 0 || (mes === 0 && dia < 0)) {
        return idade - 1;
    }

    return idade;
}

export default function get_errors_user(body) {
    const errors = []
    // Nome
    if(!body.nome ||
        typeof body.nome == undefined ||
        body.nome == null
    ) {
        errors.push({text: 'Nome inválido'});
    } else if (body.nome.length < 2) {
        errors.push({text: 'Nome muito curto'});
    }
    // Sobrenome
    if(!body.sobrenome ||
        typeof body.sobrenome == undefined ||
        body.sobrenome == null
    ) {
        errors.push({text: 'Sobrenome inválido'});
    } else if (body.sobrenome.length < 2) {
        errors.push({text: 'Sobrenome muito curto'});
    }
    // Data nascimento
    if(!body.data_nasc ||
        typeof body.data_nasc == undefined ||
        body.data_nasc == null
    ) {
        errors.push({text: 'Data de nascimento inválida'});
    } else if (calc_idade(body.data_nasc) < 16) {
        errors.push({text: 'Deve ter pelo menos 16 anos'});
    }
    // Email
    if(!emailRegex.test(body.email)) {
        errors.push({text: 'Email inválido'});
    }
    // Senha
    if(body.senha != body.senha2) {
        errors.push({text: 'As senhas não coincidem'});
    } else if (body.senha.length < 8) {
        errors.push({text: 'A senha deve ter pelo menos 8 dígitos'});
    }
    // Check
    if(!body.check) {
        errors.push({text: 'Você deve concordar com os termos e política'});
    }
    return errors
}