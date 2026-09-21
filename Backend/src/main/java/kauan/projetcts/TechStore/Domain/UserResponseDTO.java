package kauan.projetcts.TechStore.Domain;

public record UserResponseDTO(
        int id,
        String nome,
        String email,
        Cargo cargo
) {
    public UserResponseDTO(User user) {
        this(user.getId(), user.getNome(), user.getEmail(), user.getCargo());
    }
}