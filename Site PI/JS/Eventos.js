// Evento inicial - Deloitte
function ver_evento_inicial()
{
    save('nome_evento','Deloitte');
    save('qtd_fotos_eventos',4);

    // Carrega imagem inicial do evento selecionado
    ver_evento('iniciar');  
}

// Carrega imagens do evento selecionado
function Eventos_carregar()
{
    // Carrega objeto da lista
    var Lsta_eventos = document.getElementById('Lista_eventos');

    // Carrega opção da lista selecionado
    var evento_atual = Lsta_eventos.value;

    // Valida se evento selecionado é diferente do atual, se for igual, nada deve ser feito
    var evento_tual_validar = load('nome_evento','Sim');
   
    if(evento_tual_validar == evento_atual )
    {
        return('');
    }

    // Qtd máxima de fotos
    var qtd_eventos;

    // Atualiza evento selecionado
    switch (evento_atual) {
       
        case 'Deloitte':
            qtd_eventos = 4;
        break;

        case 'Petrobras':
            qtd_eventos = 2;
        break;   
        
        case 'Palestra_de_literatura':
            qtd_eventos = 2;
        break;    
        
        case 'Senac':
            qtd_eventos = 7;
        break; 
        
        case 'Bazar_bem_possivel':
            qtd_eventos = 3;
        break; 
        
        case 'Shopping_penha':
            qtd_eventos = 3;
        break;   
        
        case 'Estacio':
            qtd_eventos = 3;
        break;  
        
        case 'Clube_Pinheiros':
            qtd_eventos = 3;
        break;          

 	
      }

    // Atualiza evento atual
    save('nome_evento',evento_atual);
    
    // Atualiza quantidade máxima de fotos do evento atual
    save('qtd_fotos_eventos',qtd_eventos);
    
    // Carrega imagem inicial do evento selecionado
    ver_evento('iniciar');  
}

// Carrega próxima ação do evento
function ver_evento(tipo)
{
    var evento_qtd_fotos = load('qtd_fotos_eventos');
    
    // Decide qual grupo de imagens vão começar a ser exibidas
    switch (tipo) {
       
        case 'iniciar':
            inicial('eventos',1,evento_qtd_fotos);
        break;

        case 'esquerda':
            mudar_imagem('eventos','esquerda')
        break;
        
        case 'direita':
            mudar_imagem('eventos','direita')
        break;        
      }
}
