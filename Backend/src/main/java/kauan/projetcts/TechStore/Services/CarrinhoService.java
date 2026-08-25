package kauan.projetcts.TechStore.Services;

import kauan.projetcts.TechStore.Domain.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CarrinhoService {
    @Autowired
    ProdutoRepository produtoRepository;
    @Autowired
    UserRepository userRepository;

    public CarrinhoResponse adicionarItemAoCarrinho(int id, User user) {
        List<CarrinhoItem> itensDoCarrinho = user.getCarrinho().getCarrinhoItemList();
        Optional<Produto> produtoBuscado = produtoRepository.findById(id);
        if (produtoBuscado.isPresent()) {
            Produto produto = produtoBuscado.get();
            for (CarrinhoItem carrinhoItem : itensDoCarrinho) {
                if (carrinhoItem.getProduto().getId() == produto.getId()) {
                    carrinhoItem.setQuantidade(carrinhoItem.getQuantidade() + 1);
                    userRepository.save(user);
                    return new CarrinhoResponse(null, carrinhoItem);
                }

            }

            CarrinhoItem carrinhoItem = new CarrinhoItem();
            carrinhoItem.setProduto(produto);
            carrinhoItem.setQuantidade(1);
            carrinhoItem.setCarrinho(user.getCarrinho());
            itensDoCarrinho.add(carrinhoItem);
            userRepository.save(user);
            return new CarrinhoResponse(null, carrinhoItem);
        }
        return new CarrinhoResponse("Produto não encontrado", null);
    }

    public Carrinho listarItensDoCarrinho(User user) {
        return user.getCarrinho();
    }

    public String removerItemDoCarrinho(int id, User user) {
        List<CarrinhoItem> itensDoCarrinho = user.getCarrinho().getCarrinhoItemList();
        boolean removido = itensDoCarrinho.removeIf(carrinhoItem1 -> carrinhoItem1.getItemId() == id);
        userRepository.save(user);
        if (removido) {
            return "Sucesso ao excluir item";
        }
        return "Falha ao excluir item, tente novamente mais tarde";
    }
}
