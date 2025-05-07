export default function get_errors_categoria(body) {
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
    // Nome Slug
    if(!body.nome_slug || 
        typeof body.nome_slug == undefined || 
        body.nome_slug == null) {
            errors.push({text: 'Nome Slug inválido'});
    } else if (body.nome_slug.length < 2) {
        errors.push({text: 'Nome muito curto'});
    }

    return errors
}
