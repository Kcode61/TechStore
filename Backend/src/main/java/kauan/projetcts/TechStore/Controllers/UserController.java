package kauan.projetcts.TechStore.Controllers;

import kauan.projetcts.TechStore.Domain.Produto;
import kauan.projetcts.TechStore.Domain.User;
import kauan.projetcts.TechStore.Domain.UserResponseDTO;
import kauan.projetcts.TechStore.Services.ProductService;
import kauan.projetcts.TechStore.Services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserService userService;

    @GetMapping("/me")
    public UserResponseDTO buscarUsuarioLogado(Authentication authentication) {
        return new UserResponseDTO(userService.GetUsuarioLogado(authentication));

    }

    @DeleteMapping("/me")
    public void deletarUsuario(Authentication authentication) {
        User user = userService.GetUsuarioLogado(authentication);
        userService.DeletarUser(user.getId());
    }

}
