package kauan.projetcts.TechStore.Services;

import kauan.projetcts.TechStore.Domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {
    @Autowired
    ProdutoRepository produtoRepository;

    public List<Produto> listarProdutosDoCatalogo() {
        return produtoRepository.findAll();
    }

    public void removerProdutoDoCatalogo(int id) {
        Optional<Produto> produtoBuscado = produtoRepository.findById(id);
        if (produtoBuscado.isEmpty()) {
            throw new RuntimeException("Produto não encontrado");
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

    public Produto atualizarProdutoDoCatalogo(int id, NovoProdutoDTO novoProdutoDTO) {

        Produto produtoBuscado = buscarProdutoPorId(id);

        produtoBuscado.setProdutoValor(novoProdutoDTO.novoValor());
        produtoBuscado.setProdutoNome(novoProdutoDTO.novoNome());
        produtoBuscado.setProdutoDescricao(novoProdutoDTO.novaDescricao());
        return produtoRepository.save(produtoBuscado);
    }
}
