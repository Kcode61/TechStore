package kauan.projetcts.TechStore.Controllers;

import jakarta.validation.Valid;

import kauan.projetcts.TechStore.Domain.AuthenticationDTO;
import kauan.projetcts.TechStore.Domain.RegisterDTO;
import kauan.projetcts.TechStore.Domain.User;
import kauan.projetcts.TechStore.Domain.UserRepository;
import kauan.projetcts.TechStore.Security.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import kauan.projetcts.TechStore.Domain.Carrinho;
@RestController
@RequestMapping("/auth")
public class AuthenticationController {
    private final PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserRepository userRepository;
    @Autowired
    TokenService tokenService;

    public AuthenticationController(PasswordEncoder passwordEncoder) {
        this.passwordEncoder = passwordEncoder;
    }

    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Valid AuthenticationDTO data) {
        try {
            var auth = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(data.email(), data.password()));

            var token = tokenService.generateToken((User) auth.getPrincipal());

            return ResponseEntity.ok(token);
        } catch (Exception e) {
            e.printStackTrace();
            throw e;
        }
    }

   @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Valid RegisterDTO data) {

    if (this.userRepository.findByEmail(data.email()) != null) {
        return ResponseEntity.badRequest().build();
    }

    String encryptedPassword = passwordEncoder.encode(data.password());

    User newUser = new User(
            data.email(),
            encryptedPassword,
            data.role(),
            data.name()
    );

    Carrinho carrinho = new Carrinho();

    carrinho.setUser(newUser);
    newUser.setCarrinho(carrinho);

    this.userRepository.save(newUser);

    return ResponseEntity.ok().build();
}
}