package kauan.projetcts.TechStore.Domain;


public record RegisterDTO(String email, String password, Cargo role, String name) {
    public RegisterDTO {
        if (role == null) {
            role = Cargo.USER;
        }
    }
}