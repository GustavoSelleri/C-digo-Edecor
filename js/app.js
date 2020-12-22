const BASE_URL = `http://localhost:1337`;

async function carregarDados(colecao) {
    const resposta = await fetch(BASE_URL + colecao)
    const dados = await resposta.json();
    return dados;
}

async function buscarProdutos() {
    const products = await carregarDados(`/products`);
    return produto;
}

async function buscarProdutosEspecificos(chave, valor) {
    const buscarProdutosEmPromocao = await carregarDados(`/products?${chave}=${valor}`);
    return produtosEmPromocao;
}

async function buscarCategorias() {
    const categorias = await carregarDados(`/categories`);
    return categorias;
}

async function buscarProdutosPorCategoria(categoria) {
    const categorias = await carregarDados(`/categories?slug=${categoria}`)
    return categorias[0].products;
}

async function incluirProdutosEmPromocaoNoDOM() {
    const produtos = await buscarProdutosEmPromocao(`sale`, `true`),
        containerPromocao = document.querySelector(".featured__container");

    for(const produto of produtos){
        const { name, price, image} = produto,
        preco = price.toLocaleString("pt-br", { style: "currency", currency: "BRL" })
        console.log(name);
        console.log(preco);
        console.log(image.url);

        containerPromocao.innerHTML += `
        <article class="juice">
        <div class="juice__sale">Promoção</div>
        <img src="${BASE_URL}${image.url}" alt="" class="juice__img" />
        <span class="juice__name">${name}</span>
        <span class="juice__price">${preco}</span>
        <a href="#" class="button-light"
          >Adicionar ao carrinho <i class="bx bx-right-arrow-alt button-icon"></i
        ></a>
      </article>
        `
    }
    
}

incluirProdutosEmPromocaoNoDOM()
//buscarProdutos();
//buscarCategorias();
//buscarProdutosPorCategoria(`novidades`);