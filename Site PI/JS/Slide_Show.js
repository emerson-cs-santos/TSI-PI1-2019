// JavaScript dedicado ao controle de troca de imagens que são exibidas nos slides shows

// Define foto inicial - TRABALHO
function inicial()
{
    // Define qual imagem será a inicial
    var imagem_inicial = 1;

    // Define quantidade máxima de fotos
    var qtd_maxima = 5;    
    
    var image = document.getElementById("img_Trabalhos");
    image.src = trabalho_caminho(imagem_inicial); 

    document.getElementById("label_Trabalhos").innerHTML = trabalho_caption(imagem_inicial);

    // Salva imagem atual definida acima
    save('trabalho',imagem_inicial);

    // salva quantidade máxima de fotos
    save('quantidade_maxima_de_fotos',qtd_maxima);
}

// Carrega Foto anterior em relação a atual - TRABALHO
function anterior()
{
    // Carrega posição atual da foto
    var atual = load('trabalho');

    // Carrega quantidade máxima de fotos
    var maximo = load('quantidade_maxima_de_fotos');

    // Se a foto atual for a primeira, ir para a última
    if(atual == 1)
    {
        atual = maximo;
    }
    else // Subtrair mais 1 para seguir para a próxima imagem
    {
        atual = atual - 1;
    }

    // atualiza slide show
    var image = document.getElementById("img_Trabalhos");
    var caminho_atual = trabalho_caminho(atual); 

    image.src = caminho_atual;      

    // Atualiza caption da label
    document.getElementById("label_Trabalhos").innerHTML = trabalho_caption(atual);

    // salva nova posição atual da foto
    save('trabalho',atual);
}

// Carrega Foto seguinte em relação a atual - TRABALHO
function proximo()
{
    // Carrega posição atual da foto
    var atual = load('trabalho');

    // Carrega quantidade máxima de fotos
    var maximo = load('quantidade_maxima_de_fotos')

    // Se a foto atual for a última (5) volta para a primeira
    if(atual == maximo)
    {
        atual = 1;
    }
    else // Somar mais 1 para seguir para a próxima imagem
    {
        atual = atual + 1;
    }

    // Carrega Elemento da imagem
    var image = document.getElementById("img_Trabalhos");  

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
        image.src = trabalho_caminho(atual);
        image.classList.remove('opacidade');
        image.classList.add('Efeito_troca_imagem_aparece');
    },3000);    

    // Remove classe que faz imagem aparecer aos poucos
    setTimeout(function () {
        image.classList.remove('Efeito_troca_imagem_aparece');
    },5000);     
       
    // Atualiza caption da label
    document.getElementById("label_Trabalhos").innerHTML = trabalho_caption(atual);

    // salva nova posição atual da foto
    save('trabalho',atual);
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
      }

    return(caminho);
}

// Carrega caption da label referente a imagem - TRABALHO
function trabalho_caption(N_trabalho)
{
    var caption = '';

    switch (N_trabalho) {
       
        case 1:
            caption = "Trabalho 1";
        break;

        case 2:
            caption = "Trabalho 2";
        break;

        case 3:
            caption = "Trabalho 3";
        break;

        case 4:
            caption = "Trabalho 4";
        break;

        case 5:
            caption = "Trabalho 5";
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