package kauan.projetcts.TechStore.Controllers;

import kauan.projetcts.TechStore.Domain.Carrinho;
import kauan.projetcts.TechStore.Domain.CarrinhoItem;
import kauan.projetcts.TechStore.Domain.User;
import kauan.projetcts.TechStore.Services.CarrinhoService;
import kauan.projetcts.TechStore.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/carrinho")
public class CarrinhoController {
    @Autowired
    private CarrinhoService carrinhoService;
    @Autowired
    private UserService userService;

    @GetMapping()
    public Carrinho listarItensDoCarrinho(Authentication authentication) {
        User user = userService.GetUsuarioLogado(authentication);
        return carrinhoService.listarItensDoCarrinho(user);
    }

    @PostMapping("/{id}")
    public CarrinhoItem adicionarItemAoCarrinho(Authentication authentication, @PathVariable int id) {
        User user = userService.GetUsuarioLogado(authentication);
        return carrinhoService.adicionarItemAoCarrinho(id, user).carrinhoItem();
    }

    @DeleteMapping("/{id}")
    public String removerItemDoCarrinho(Authentication authentication, @PathVariable int id) {
        User user = userService.GetUsuarioLogado(authentication);
        return carrinhoService.removerItemDoCarrinho(id, user);
    }

    @GetMapping("/listarTotal")
    public Double listarValorTotalDoCarrinho(Authentication authentication) {
        User user = userService.GetUsuarioLogado(authentication);
        return carrinhoService.calcularValorTotal(user);
    }
}
