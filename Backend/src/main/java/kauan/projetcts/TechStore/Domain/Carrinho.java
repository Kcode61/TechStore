package kauan.projetcts.TechStore.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Carrinho {
    @GeneratedValue
    @Id
    private int id;
    private double valorTotal = 0;
    @OneToMany(mappedBy = "carrinho", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<CarrinhoItem> carrinhoItemList = new ArrayList<>();
    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;
}
