export default function get_errors_postagem(body) {
    const errors = []
    // Título
    if(!body.titulo ||
        typeof body.titulo == undefined ||
        body.titulo == null
    ) {
        errors.push({text: 'Título inválido'});
    } else if (body.titulo.length < 2) {
        errors.push({text: 'Título muito curto'});
    }
    // Título slug
    if(!body.titulo_slug ||
        typeof body.titulo_slug == undefined ||
        body.titulo_slug== null
    ) {
        errors.push({text: 'Título slug inválido'});
    } else if (body.titulo_slug.length < 2) {
        errors.push({text: 'Título slug muito curto'});
    }
    // Categoria
    if(body.categoria == 0 ||
        !body.categoria ||
        typeof body.categoria == undefined ||
        body.categoria == null
    ) {
        errors.push({text: 'Categoria inválida'});
    }
    // Conteúdo
    if(!body.conteudo ||
        typeof body.conteudo == undefined ||
        body.conteudo == null
    ) {
        errors.push({text: 'Conteúdo vazio'});
    } else if (body.conteudo.length < 2) {
        errors.push({text: 'Conteúdo muito curto'});
    }

    return errors
}