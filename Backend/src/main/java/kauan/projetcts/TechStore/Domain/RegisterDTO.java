package kauan.projetcts.TechStore.Domain;


import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record RegisterDTO(@Email @NotBlank String email, @Size(min = 8, max = 16) String password,
                          @NotBlank String name) {
}