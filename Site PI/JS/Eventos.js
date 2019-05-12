// Carrega lista de eventos na direita da página
function Eventos_carregar()
{
    var Grupo_Lista_atual = document.getElementById('Grupos_eventos');

    var Lsta_eventos = document.getElementById('Eventos');

    if(Grupo_Lista_atual.value == 'Deloitte')
    {
        // create new option element
        var opt = document.createElement('option');

        // create text node to add to option element (opt)
        opt.appendChild( document.createTextNode('New Option Text') );

        // set value property of opt
        opt.value = 'option value'; 

        // add opt to end of select box (sel)
        Lsta_eventos.appendChild(opt); 
    }

    if(Grupo_Lista_atual.value == 'Petrobras')
    {
        // remove 2nd option in select box (sel)
        Lsta_eventos.removeChild( Lsta_eventos.options[2] ); 
    }    


    
}

// Ao clicar uma uma opção do grupo de eventos, será removido as opções da segunda lista, depois adicionado as novas e então será clicado na primeira opção para carregar a primeira imagem e deixar pronto para navegação.
// usar local storage para apenas remover e adicionar novos eventos, se usuario clicar em grupo de evento diferente. USar outro local storage para saber qual evento está selecionado e apenas carregas as fotos, quando for selecionado um evento diferente.
// criar função para adicionar opções - Vai ser chamanda no init, ver como deixar a primeira opção selecionada
// criar função para remover
// no clique da segunda lista, chamar a função inicial de imagens e depois controlar com os botões
