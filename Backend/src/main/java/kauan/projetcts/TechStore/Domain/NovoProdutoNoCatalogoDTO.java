package kauan.projetcts.TechStore.Domain;

public record NovoProdutoNoCatalogoDTO(String nome, double review, int valor, String descricao, String imagem, ProdutoCategoria produtoCategoria ) {
}
