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
        if (user.getCarrinho() == null) {
            Carrinho carrinho = new Carrinho();
            carrinho.setUser(user);
            user.setCarrinho(carrinho);
        }

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

    public CarrinhoResponse adicionarQuantidade(int id, User user) {

        if (user.getCarrinho() == null) {
            return new CarrinhoResponse("Carrinho não encontrado", null);
        }

        List<CarrinhoItem> itensDoCarrinho = user.getCarrinho().getCarrinhoItemList();

        Optional<Produto> produtoBuscado = produtoRepository.findById(id);

        if (produtoBuscado.isEmpty()) {
            return new CarrinhoResponse("Produto não encontrado", null);
        }

        Produto produto = produtoBuscado.get();

        for (CarrinhoItem carrinhoItem : itensDoCarrinho) {

            if (carrinhoItem.getProduto().getId() == produto.getId()) {

                carrinhoItem.setQuantidade(carrinhoItem.getQuantidade() + 1);

                userRepository.save(user);

                return new CarrinhoResponse(null, carrinhoItem);
            }
        }

        return new CarrinhoResponse("Produto não está no carrinho", null);
    }

    public String esvaziarCarrinho(User user) {

        if (user.getCarrinho() == null) {
            return "Carrinho já está vazio";
        }

        user.getCarrinho().getCarrinhoItemList().clear();

        user.getCarrinho().setValorTotal(0);

        userRepository.save(user);

        return "Carrinho esvaziado com sucesso";
    }

    public double calcularValorTotal(User user) {

        Carrinho carrinho = user.getCarrinho();

        if (carrinho == null) {
            return 0;
        }

        double total = 0;

        for (CarrinhoItem item : carrinho.getCarrinhoItemList()) {
            total += item.getProduto().getProdutoValor() * item.getQuantidade();
        }

        carrinho.setValorTotal(total);
        userRepository.save(user);

        return total;
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
