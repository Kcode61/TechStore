package kauan.projetcts.TechStore.Services;


import org.jspecify.annotations.NonNull;
import kauan.projetcts.TechStore.Domain.User;
import kauan.projetcts.TechStore.Domain.UserRepository;
import kauan.projetcts.TechStore.Exceptions.UserNotFoundException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthorizationService implements UserDetailsService {
    private final UserRepository userRepository;

    public AuthorizationService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public @NonNull UserDetails loadUserByUsername(@NonNull String email) throws UsernameNotFoundException {

        User user = userRepository.findByEmail(email);

        if (user == null) {
            throw new UsernameNotFoundException("Usuário não encontrado");
        }

        return user;
    }
}
