package kauan.projetcts.TechStore.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@Entity
public class Carrinho {
    @GeneratedValue
    @Id
    private int id;
    @OneToMany(
            mappedBy = "carrinho",
            cascade = CascadeType.ALL,
            orphanRemoval = true
    )
    @JsonIgnore
    private List<CarrinhoItem> carrinhoItemList;
    @OneToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;
}
