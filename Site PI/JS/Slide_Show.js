// JavaScript dedicado ao controle de troca de imagens que são exibidas nos slides shows
// Páginas que utilizam:
    // Trabalhos
    // Reuniões
    // Outros eventos
    // Index

// Define foto inicial
function inicial(origem,inicial,maximo)
{
    // origem - Qual é a página que está chamando a função
    // inicial - Qual é o número da pagina inicial
    // maximo - Qual é o número máximo de imagens que a página possui
    
    // Define qual imagem será a inicial
    var imagem_inicial = inicial;

    // Define quantidade máxima de fotos
    var qtd_maxima = maximo;

    // Variavel para o caminho da imagem
    var image;

    // Carrega o nome da id da imagem da página atual
    var id_imagem = id_imagem_nome(origem);

    // Carrega o nome da id da imagem da página atual
    var id_label = id_label_nome(origem);  

    // Carrega objeto da imagem do HTML
    image = document.getElementById(id_imagem);
    
    // Carrega imagem inicial
    image.src = imagem_caminho(origem,imagem_inicial); 
    
    // Carrega título inical
    document.getElementById(id_label).innerHTML = label_caption(origem,imagem_inicial);
      
    // Carrega o nome da propriedade que é utlizada no local store
    var Nome_numero_imagem_atual   = carregar_tipo_save_load_Atual(origem);
    var Nome_qtd_maxima_fotos      = carregar_tipo_save_load_Qtd_Maximo(origem);
    
    // Salva imagem atual definida acima
    save(Nome_numero_imagem_atual,imagem_inicial);

    // salva quantidade máxima de fotos
    save(Nome_qtd_maxima_fotos,qtd_maxima);
}

// Carrega Foto anterior/proxima em relação a atual
function mudar_imagem(origem,direcao)
{
    // origem - Qual é a página que está chamando a função

    // Carrega o nome da propriedade que é utlizada no local store
    var Nome_numero_imagem_atual   = carregar_tipo_save_load_Atual(origem);
    var Nome_qtd_maxima_fotos      = carregar_tipo_save_load_Qtd_Maximo(origem);    
   
    // Carrega posição atual da foto
    var atual = load(Nome_numero_imagem_atual);

    // Carrega quantidade máxima de fotos
    var maximo = load(Nome_qtd_maxima_fotos);

    if(direcao == 'esquerda') 
    {
        // Se a foto atual for a primeira, ir para a última
        if(atual == 1)
        {
            atual = maximo;
        }
        else // Subtrair mais 1 para seguir para a imagem anterior
        {
            atual = atual - 1;
        } 
    }
    else  
    {
        // Se a foto atual for a última (5) volta para a primeira
        if(atual == maximo)
        {
            atual = 1;
        }
        else // Somar mais 1 para seguir para a próxima imagem
        {
            atual = atual + 1;
        }
    }

    // Carrega o nome da id da imagem da página atual
    var id_imagem = id_imagem_nome(origem);

    // Carrega o nome da id da imagem da página atual
    var id_label = id_label_nome(origem)  ;     

    // Carrega Elemento da imagem
    var image = document.getElementById(id_imagem);
   
    // Controla o efeito de opacidade ao mudar a imagem
    opacidade_control(image,atual,origem);  
    
    // Atualiza caption da label
    document.getElementById(id_label).innerHTML = label_caption(origem,atual);  

    // salva nova posição atual da foto
    save(Nome_numero_imagem_atual,atual);
}

// Carrega nome da propriedade salva no local storage que está com o número da imagem atual página,
// cada página tem um próprio
function carregar_tipo_save_load_Atual(origem)
{
    var Nome_numero_imagem_atual;
    
    switch (origem) {
       
        // Página de trabalho que chamou função
        case 'trabalho':
            Nome_numero_imagem_atual = 'trabalho_imagem_atual';
        break;

        // Página de reunião que chamou função
        case 'reuniao':
            Nome_numero_imagem_atual = 'reuniao_imagem_atual';         
        break;

        // Página de eventos que chamou função
        case 'eventos':
            Nome_numero_imagem_atual = 'eventos_imagem_atual';         
        break; 
        
        // Página de eventos que chamou função
        case 'index':
            Nome_numero_imagem_atual = 'index_imagem_atual';         
        break;             

      }

    return(Nome_numero_imagem_atual);
}

// Carrega nome da propriedade salva no local storage que está com o número máximo de imagens atual página,
// cada página tem um próprio
function carregar_tipo_save_load_Qtd_Maximo(origem)
{
   var Nome_qtd_maxima_fotos;
   
    switch (origem) {
       
        // Página de trabalho que chamou função
        case 'trabalho':
            Nome_qtd_maxima_fotos    = 'trabalho_quantidade_maxima_de_fotos';
        break;

        // Página de reunião que chamou função
        case 'reuniao':
            Nome_qtd_maxima_fotos    = 'reuniao_quantidade_maxima_de_fotos';            
        break;

        // Página de eventos que chamou função
        case 'eventos':
            Nome_qtd_maxima_fotos    = 'eventos_quantidade_maxima_de_fotos';            
        break;        

        // Página de eventos que chamou função
        case 'index':
            Nome_qtd_maxima_fotos    = 'index_quantidade_maxima_de_fotos';            
        break;          

      }

    return(Nome_qtd_maxima_fotos);
}

// Carrega o nome da ID da imagem da página quo chamou o botão do slide show
function id_imagem_nome(origem)
{
   var id_imagem;

    switch (origem) {
       
        // Página de trabalho que chamou função
        case 'trabalho':
            id_imagem = 'img_Trabalhos';
        break;

        // Página de reunião que chamou função
        case 'reuniao':
            id_imagem = 'img_reuniao';   
        break;

        // Página de eventos que chamou função
        case 'eventos':
            id_imagem = 'img_eventos';   
        break;   
        
        // Página index que chamou função
        case 'index':
            id_imagem = 'img_Index';   
        break;          

      }

    return(id_imagem);
}

// Carrega o nome da ID da label da página quo chamou o botão do slide show
function id_label_nome(origem)
{
    var id_label;

    switch (origem) {
       
        // Página de trabalho que chamou função
        case 'trabalho':
            id_label = 'label_Trabalhos';
        break;

        // Página de reunião que chamou função
        case 'reuniao':
            id_label = 'label_reuniao';   
        break;

        // Página de eventos que chamou função
        case 'eventos':
            id_label = 'label_eventos';   
        break;     
        
        // Página de eventos que chamou função
        case 'index':
            id_label = 'label_index';   
        break;         

      }

    return(id_label);
}

// Controla o efeito de opacidade ao mudar a imagem
function opacidade_control(image,atual,origem)
{
   // image - objeto da imagem
   // atual - localidação atual das imagens, número da ordem de exibição
   // origem - Qual página pertence
   
    // Faz imagem desaparecer aos poucos
    image.classList.add('Efeito_troca_imagem_desaparece');

    // Remove classe que faz imagem desaparecer aos poucos
    setTimeout(function () {
        image.classList.remove('Efeito_troca_imagem_desaparece');
    },2000);

    // Apaga imagem
    setTimeout(function () {
        image.classList.add('opacidade');
    },2000);    

    // Aparece com nova imagem aos poucos e remove o apagador de imagem(opacidade)
    setTimeout(function () {
        image.src = imagem_caminho(origem,atual);
        image.classList.remove('opacidade');
        image.classList.add('Efeito_troca_imagem_aparece');
    },2000);    

    // Remove classe que faz imagem aparecer aos poucos
    setTimeout(function () {
        image.classList.remove('Efeito_troca_imagem_aparece');
    },3500);
    
}

// Carrega qual caminho de qual página será utililzado
function imagem_caminho(origem,numero_imagem)
{
   var caminho = '';

    switch (origem) {
       
        case 'trabalho':
            caminho = trabalho_caminho(numero_imagem);
        break;

        case 'reuniao':
            caminho = reuniao_caminho(numero_imagem);
        break;

        case 'eventos':
            caminho = eventos_caminho(numero_imagem);
        break;

        case 'index':
            caminho = index_caminho(numero_imagem);    
        break;
         
      }

    return(caminho);
}

// Carrega qual caption do titulo na lbael de qual página será utililzado
function label_caption(origem,numero_imagem)
{
   var label_caption = '';

    switch (origem) {
       
        case 'trabalho':
            label_caption = trabalho_caption(numero_imagem); 
        break;

        case 'reuniao':
            label_caption = reuniao_caption(numero_imagem); 
        break;

        case 'eventos':
            label_caption = eventos_caption(numero_imagem); 
        break;    
        
        case 'index':
            label_caption = index_caption(numero_imagem); 
        break;         
         
      }

    return(label_caption);
}

// Carrega caminho da imagem pertinente a imagem - TRABALHO
function trabalho_caminho(N_trabalho)
{
   var caminho = '';

    switch (N_trabalho) {
       
        case 1:
            caminho = "Imagens/Trabalhos_1.jpg";
        break;

        case 2:
            caminho = "Imagens/Trabalhos_2.jpg";
        break;

        case 3:
            caminho = "Imagens/Trabalhos_3.jpg";
        break;

        case 4:
            caminho = "Imagens/Trabalhos_4.jpg";
        break;

        case 5:
            caminho = "Imagens/Trabalhos_5.jpg";
        break;  

		case 6:
            caminho = "Imagens/Trabalhos_6.jpg";
        break; 
		
		case 7:
            caminho = "Imagens/Trabalhos_7.jpg";
        break;		
		
		case 8:
            caminho = "Imagens/Trabalhos_8.jpg";
        break;
		
		case 9:
            caminho = "Imagens/Trabalhos_9.jpg";
        break;

		case 10:
            caminho = "Imagens/Trabalhos_10.jpg";
        break;			
      }

    return(caminho);
}

// Carrega caption da label referente a imagem - TRABALHO
function trabalho_caption(N_trabalho)
{
    var caption = '';

    switch (N_trabalho) {
       
        case 1:
            caption = "Capas para almofadas (1/10)";
        break;

        case 2:
            caption = "Capas para livros e agendas (2/10)";
        break;

        case 3:
            caption = "Panos de prato (3/10)";
        break;

        case 4:
            caption = "Bolsas (4/10)";
        break;

        case 5:
            caption = "Reciclagem de disco de Vinil (5/10)";
        break;   

        case 6:
            caption = "Bijuterias e Pedraria (6/10)";
        break;
		
		case 7:
            caption = "Trabalhos Manuais (7/10)";
        break;  

		case 8:
            caption = "Pulseira de imã (8/10)";
        break; 
		
		case 9:
            caption = "Brincos artesanais (9/10)";
        break; 

		case 10:
            caption = "Colcha em Patchwork, retalhos em tecido (10/10)";
        break; 		
      }    

    return(caption);
}

// Salva valor de variaval para uso posterior a executação do javascript
function save(nome,valor)
{
    // Salvar informação localmente
    localStorage.setItem(nome,valor);
}

// Carrega valor de variaval que se perdeu após a executação do javascript
function load(nome,string)
{
    // Carregar informação local 
    var load;

    // Retornar string - Foi salvo como string e não precisa converter ao ser carregado
    if(string == 'Sim')
    {
        load = localStorage.getItem(nome);
    }
    else // Número - Foi salvo como string e precisa ser convertido ao ser carregado
    {
        load = parseInt(localStorage.getItem(nome));
    }

    return(load);
}

// Carrega caminho da imagem pertinente a imagem - REUNIÃO
function reuniao_caminho(N_reuniao)
{
   var caminho = '';

    switch (N_reuniao) {
       
        case 1:
            caminho = "Imagens/Reuniao_1.jpg";
        break;

        case 2:
            caminho = "Imagens/Reuniao_2.jpg";
        break;

        case 3:
            caminho = "Imagens/Reuniao_3.jpg";
        break;

        case 4:
            caminho = "Imagens/Reuniao_4.jpg";
        break;

        case 5:
            caminho = "Imagens/Reuniao_5.jpg";
        break;  

		case 6:
            caminho = "Imagens/Reuniao_6.jpg";
        break; 
				
      }

    return(caminho);
}

// Carrega caption da label referente ao caption- REUNIÃO
function reuniao_caption(N_reuniao)
{
    var caption = '';

    switch (N_reuniao) {
       
        case 1:
            caption = "Reunião do grupo em 28/JUN/2012 (1/6)";
        break;

        case 2:
            caption = "Reunião do grupo em 08/FEV/2012 (2/6)";
        break;

        case 3:
            caption = "Reunião para ver andamento da obra (3/6)";
        break;

        case 4:
            caption = "Reunião em 11 de DEZ 2011 (4/6)";
        break;

        case 5:
            caption = "Reunião do grupo em 28/FEV/2011  (5/6)";
        break;   

        case 6:
            caption = "Reunião do grupo em 22/JAN/2018 (6/6)";
        break;
				
      }    

    return(caption);
}

// Carrega caminho da imagem pertinente a imagem - INDEX
function index_caminho(N_index)
{
   var caminho = '';

    switch (N_index) {
       
        case 1:
            caminho = "Imagens/Index_1.jpg";
        break;

        case 2:
            caminho = "Imagens/Index_2.jpg";
        break;

        case 3:
            caminho = "Imagens/Index_3.jpg";
        break;

        case 4:
            caminho = "Imagens/Index_4.jpg";
        break;

        case 5:
            caminho = "Imagens/Index_5.jpg";
        break;  

		case 6:
            caminho = "Imagens/Index_6.jpg";
        break; 

		case 7:
            caminho = "Imagens/Index_7.jpg";
        break; 
        
        case 8:
            caminho = "Imagens/Index_8.jpg";
        break; 

		case 9:
            caminho = "Imagens/Index_9.jpg";
        break; 
        
		case 10:
            caminho = "Imagens/Index_10.jpg";
        break;         
				
      }

    return(caminho);
}

// Carrega caption da label referente ao caption - INDEX
function index_caption(N_index)
{
    var caption = '';

    switch (N_index) {
       
        case 1:
            caption = "Trabalhos para comunidade (1/10)";
        break;

        case 2:
            caption = "Reciclagem (2/10)";
        break;

        case 3:
            caption = "Brechó (3/10)";
        break;

        case 4:
            caption = "Eventos (4/10)";
        break;

        case 5:
            caption = "Literatura  (5/10)";
        break;   

        case 6:
            caption = "História do bairro (6/10)";
        break;

        case 7:
            caption = "Trabalho em grupo (7/10)";
        break;
        
        case 8:
            caption = "Bazar bem possível (8/10)";
        break;
        
        case 9:
            caption = "Artesanato (9/10)";
        break;
        
        case 10:
            caption = "Clube pinheiros (10/10)";
        break;        
				
      }    

    return(caption);
}

// Carrega caminho da imagem pertinente a imagem - Eventos
function eventos_caminho(N_evento)
{
    var caminho = '';

    var evento = load('nome_evento','Sim');

    switch (evento) {
        
        case 'Deloitte':
            caminho = deloitte_caminho(N_evento);
        break;

        case 'Petrobras':
            caminho = petrobras_caminho(N_evento);
        break;   
        
        case 'Palestra_de_literatura':
            caminho = palestra_de_literatura_caminho(N_evento);
        break;        
        
        case 'Senac':
            caminho = senac_caminho(N_evento);
        break;   
        
        case 'Bazar_bem_possivel':
            caminho = bazar_bem_possivel_caminho(N_evento);
        break;  
        
        case 'Shopping_penha':
            caminho = shopping_penha_caminho(N_evento);
        break;         
        
        case 'Estacio':
            caminho = estacio_caminho(N_evento);
        break;  
        
        case 'Clube_Pinheiros':
            caminho = clube_Pinheiros_caminho(N_evento);
        break;            
            
    }

    return(caminho);
}

// Carrega caminho da imagem dos eventos da Deloitte
function deloitte_caminho(N_evento)
{
    var caminho = '';

    switch (N_evento) {
        
        case 1:
            caminho = "Imagens/Deloitte_1.jpg";
        break;

        case 2:
            caminho = "Imagens/Deloitte_2.jpg";
        break;     
        
        case 3:
            caminho = "Imagens/Deloitte_3.jpg";
        break;   
        
        case 4:
            caminho = "Imagens/Deloitte_4.jpg";
        break;          
            
    }

    return(caminho);
}

// Carrega caminho da imagem dos eventos da Petrobras
function petrobras_caminho(N_evento)
{
    var caminho = '';

    switch (N_evento) {
        
        case 1:
            caminho = "Imagens/Petrobras_1.jpg";
        break;

        case 2:
            caminho = "Imagens/Petrobras_2.jpg";
        break;              
            
    }

    return(caminho);
}

// Carrega caminho da imagem dos eventos da Palestra de literatura
function palestra_de_literatura_caminho(N_evento)
{
    var caminho = '';

    switch (N_evento) {
        
        case 1:
            caminho = "Imagens/Palestra_Literatura_1.jpg";
        break;

        case 2:
            caminho = "Imagens/Palestra_Literatura_2.jpg";
        break;              
            
    }

    return(caminho);
}

// Carrega caminho da imagem dos eventos do Senac
function senac_caminho(N_evento)
{
    var caminho = '';

    switch (N_evento) {
        
        case 1:
            caminho = "Imagens/Senac_1.jpg";
        break;

        case 2:
            caminho = "Imagens/Senac_2.jpg";
        break;    
        
        case 3:
            caminho = "Imagens/Senac_3.jpg";
        break;
        
        case 4:
            caminho = "Imagens/Senac_4.jpg";
        break; 
        
        case 5:
            caminho = "Imagens/Senac_5.jpg";
        break;    
        
        case 6:
            caminho = "Imagens/Senac_6.jpg";
        break; 
        
        case 7:
            caminho = "Imagens/Senac_7.jpg";
        break;         
            
    }

    return(caminho);
}

// Carrega caminho da imagem dos eventos do Bazar do bem possivel
function bazar_bem_possivel_caminho(N_evento)
{
    var caminho = '';

    switch (N_evento) {
        
        case 1:
            caminho = "Imagens/Bazar_Bem_Possivel_1.jpg";
        break;

        case 2:
            caminho = "Imagens/Bazar_Bem_Possivel_2.jpg";
        break;    
        
        case 3:
            caminho = "Imagens/Bazar_Bem_Possivel_3.jpg";
        break;       
            
    }

    return(caminho);
}

// Carrega caminho da imagem dos eventos do Shopping Penha
function shopping_penha_caminho(N_evento)
{
    var caminho = '';

    switch (N_evento) {
        
        case 1:
            caminho = "Imagens/Shopping_penha_1.jpg";
        break;

        case 2:
            caminho = "Imagens/Shopping_penha_2.jpg";
        break;    
        
        case 3:
            caminho = "Imagens/Shopping_penha_3.jpg";
        break;       
            
    }

    return(caminho);
}

// Carrega caminho da imagem dos eventos da Estácio
function estacio_caminho(N_evento)
{
    var caminho = '';

    switch (N_evento) {
        
        case 1:
            caminho = "Imagens/estacio_1.jpg";
        break;

        case 2:
            caminho = "Imagens/estacio_2.jpg";
        break;    
        
        case 3:
            caminho = "Imagens/estacio_3.jpg";
        break;       
            
    }

    return(caminho);
}

// Carrega caminho da imagem dos eventos do clube Pinheiros
function clube_Pinheiros_caminho(N_evento)
{
    var caminho = '';

    switch (N_evento) {
        
        case 1:
            caminho = "Imagens/Clube_Pinheiros_1.jpg";
        break;

        case 2:
            caminho = "Imagens/Clube_Pinheiros_2.jpg";
        break;    
        
        case 3:
            caminho = "Imagens/Clube_Pinheiros_3.jpg";
        break;       
            
    }

    return(caminho);
}


// Carrega caminho da imagem pertinente a imagem - Eventos
function eventos_caption(N_evento)
{
    var caption = '';

    var evento = load('nome_evento','Sim');

    switch (evento) {
        
        case 'Deloitte':
            caption = deloitte_caption(N_evento);
        break;

        case 'Petrobras':
            caption = petrobras_caption(N_evento);
        break;   
        
        case 'Palestra_de_literatura':
            caption = palestra_de_literatura_caption(N_evento);
        break; 
        
        case 'Senac':
            caption = senac_caption(N_evento);
        break;    
        
        case 'Bazar_bem_possivel':
            caption = bazar_bem_possivel_caption(N_evento);
        break;    
        
        case 'Shopping_penha':
            caption = shopping_penha_caption(N_evento);
        break;       
        
        case 'Estacio':
            caption = estacio_caption(N_evento);
        break; 
        
        case 'Clube_Pinheiros':
            caption = clube_Pinheiros_caption(N_evento);
        break;         
            
    }

    return(caption);
}

// Carrega caminho da imagem dos eventos da deloitte
function deloitte_caption(N_evento)
{
    var caption = '';

    switch (N_evento) {
        
        case 1:
            caption = "Deloitte: bazar de natal 2012 (1/4)";
        break;

        case 2:
            caption = "Deloitte: bazar de natal 2012 (2/4)";
        break;    
        
        case 3:
            caption = "Deloitte: ipacday / 2012 (3/4)";
        break;  
        
        case 4:
            caption = "Deloitte ipacday / 2012 (4/4)";
        break;          
            
    }

    return(caption);
}

// Carrega caminho da imagem dos eventos da Petrobras
function petrobras_caption(N_evento)
{
    var caption = '';

    switch (N_evento) {
        
        case 1:
            caption = "Petrobras: Bazar solidário 2012 (1/2)";
        break;

        case 2:
            caption = "Petrobras: Bazar solidário 2012  (2/2)";
        break;    
            
    }

    return(caption);
}

// Carrega caminho da imagem dos eventos da Palestra de literatura
function palestra_de_literatura_caption(N_evento)
{
    var caption = '';

    switch (N_evento) {
        
        case 1:
            caption = "Palestra de literatura (1/2)";
        break;

        case 2:
            caption = "Palestra de literatura (2/2)";
        break;    
            
    }

    return(caption);
}

// Carrega caminho da imagem dos eventos do Senac
function senac_caption(N_evento)
{
    var caption = '';

    switch (N_evento) {
        
        case 1:
            caption = "Senac: Oficina de feltro 2012 (1/7)";
        break;

        case 2:
            caption = "Senac: Oficina de feltro 2012 (2/7)";
        break; 
        
        case 3:
            caption = "Senac: Oficina de feltro 2012 (3/7)";
        break;  
        
        case 4:
            caption = "Senac: Dia da responsabilidade social 2012 (4/7)";
        break; 
        
        case 5:
            caption = "Senac: Dia da responsabilidade social 2012 (5/7)";
        break;     
        
        case 6:
            caption = "Senac: Semana do meio ambiente/2012 (6/7)";
        break;  
        
        case 7:
            caption = "Senac: Semana do meio ambiente/2012 (7/7)";
        break;          
            
    }

    return(caption);
}

// Carrega caminho da imagem dos eventos do Bazar do bem possivel
function bazar_bem_possivel_caption(N_evento)
{
    var caption = '';

    switch (N_evento) {
        
        case 1:
            caption = "Bazar do bem possível (1/3)";
        break;

        case 2:
            caption = "Bazar do bem possível (2/3)";
        break; 
        
        case 3:
            caption = "Bazar do bem possível (3/3)";
        break;         
            
    }

    return(caption);
}

// Carrega caminho da imagem dos eventos do Bazar do Shopping penha
function shopping_penha_caption(N_evento)
{
    var caption = '';

    switch (N_evento) {
        
        case 1:
            caption = "Shopping penha: 14/fev/2012 (1/3)";
        break;

        case 2:
            caption = "Shopping penha: 14/fev/2012 (2/3)";
        break; 
        
        case 3:
            caption = "Shopping penha: 14/fev/2012 (3/3)";
        break;         
            
    }

    return(caption);
}

// Carrega caminho da imagem dos eventos do Bazar da Estacio
function estacio_caption(N_evento)
{
    var caption = '';

    switch (N_evento) {
        
        case 1:
            caption = "Estácio: Exposição de Artesanato 2017 (1/3)";
        break;

        case 2:
            caption = "Estácio: Exposição de Artesanato 2017 (2/3)";
        break; 
        
        case 3:
            caption = "Estácio: Exposição de Artesanato 2017 (3/3)";
        break;         
            
    }

    return(caption);
}

// Carrega caminho da imagem dos eventos do Clube Pinheiros
function clube_Pinheiros_caption(N_evento)
{
    var caption = '';

    switch (N_evento) {
        
        case 1:
            caption = "Clube Pinheiros 2018 (1/3)";
        break;

        case 2:
            caption = "Clube Pinheiros 2018 (2/3)";
        break; 
        
        case 3:
            caption = "Clube Pinheiros 2018 (3/3)";
        break;         
            
    }

    return(caption);
}