// JavaScript dedicado ao controle de troca de imagens que são exibidas nos slides shows
// Páginas que utilizam:
    // Trabalhos
    // Reuniões
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
function load(nome)
{
    // Carregar informação local
    var load = parseInt(localStorage.getItem(nome));

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

// Carrega caption da label referente a imagem - REUNIÃO
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
            caption = "Reunião em 11 DE DEZ 2011 (4/6)";
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