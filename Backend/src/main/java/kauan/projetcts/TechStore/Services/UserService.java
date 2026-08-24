package kauan.projetcts.TechStore.Services;

import kauan.projetcts.TechStore.Domain.User;
import kauan.projetcts.TechStore.Domain.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public User GetUsuarioLogado(Authentication authentication) {
        String email = authentication.getName();
        return userRepository.findByEmail(email);
    }

    public User SalvarUser(User user) {
        return userRepository.save(user);
    }

    public void DeletarUser(int id) {
        userRepository.deleteById(id);
    }
}
