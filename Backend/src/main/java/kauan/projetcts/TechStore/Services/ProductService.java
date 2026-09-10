package kauan.projetcts.TechStore.Services;

import kauan.projetcts.TechStore.Domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProdutoRepository produtoRepository;
    @Autowired
    CarrinhoItemRepository carrinhoItemRepository;
    @Autowired
    UserRepository userRepository;

    public List<Produto> listarProdutosDoCatalogo() {
        return produtoRepository.findAll();
    }

    public void adicionarReview(double novaNota, int id) {
        Optional<Produto> produtoBuscado = produtoRepository.findById(id);

        if (produtoBuscado.isEmpty()) {
            throw new RuntimeException("Produto não encontrado");
        }

        Produto produto = produtoBuscado.get();

        double mediaAtual = produto.getProdutoReview();
        int quantidadeAtual = produto.getReviewsCount();

        double novaMedia = ((mediaAtual * quantidadeAtual) + novaNota) / (quantidadeAtual + 1);

        produto.setProdutoReview(novaMedia);
        produto.setReviewsCount(quantidadeAtual + 1);

        produtoRepository.save(produto);
    }

    public void removerProdutoDoCatalogo(int id) {
        Optional<Produto> produtoBuscado = produtoRepository.findById(id);
        if (produtoBuscado.isEmpty()) {
            throw new RuntimeException("Produto não encontrado");
        }

        var itens = carrinhoItemRepository.findByProduto_Id(id);
        for (CarrinhoItem item : itens) {
            Carrinho carrinho = item.getCarrinho();
            if (carrinho != null) {
                carrinho.getCarrinhoItemList().removeIf(ci -> ci.getItemId() == item.getItemId());
                if (carrinho.getUser() != null) {
                    userRepository.save(carrinho.getUser());
                }
            } else {

                carrinhoItemRepository.delete(item);
            }
        }

        produtoRepository.deleteById(id);
    }

    public Produto buscarProdutoPorId(int id) {
        Optional<Produto> produtoBuscado = produtoRepository.findById(id);
        if (produtoBuscado.isEmpty()) {
            throw new RuntimeException("Produto não encontrado");
        }
        return produtoBuscado.get();
    }

    public Produto adicionarProdutoAoCatalogo(NovoProdutoNoCatalogoDTO dto) {

        Produto produtoNovo = new Produto();

        produtoNovo.setProdutoNome(dto.nome());
        produtoNovo.setProdutoValor(dto.valor());
        produtoNovo.setProdutoCategoria(dto.produtoCategoria());
        produtoNovo.setProdutoDescricao(dto.descricao());
        produtoNovo.setProdutoImage(dto.imagem());
        produtoNovo.setProdutoReview(dto.review());

        return produtoRepository.save(produtoNovo);
    }

    public List<Produto> filtrarProdutosPorReviews() {
        List<Produto> catalogo = produtoRepository.findAll();

        return catalogo.stream().sorted(Comparator.comparing(Produto::getReviewsCount).reversed()).limit(10).toList();
    }

    public Produto atualizarProdutoDoCatalogo(int id, NovoProdutoDTO novoProdutoDTO) {

        Produto produtoBuscado = buscarProdutoPorId(id);

        produtoBuscado.setProdutoValor(novoProdutoDTO.novoValor());
        produtoBuscado.setProdutoNome(novoProdutoDTO.novoNome());
        produtoBuscado.setProdutoDescricao(novoProdutoDTO.novaDescricao());
        return produtoRepository.save(produtoBuscado);
    }
}
