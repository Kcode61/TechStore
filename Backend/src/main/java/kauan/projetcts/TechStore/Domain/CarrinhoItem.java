package kauan.projetcts.TechStore.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Setter
@Getter
@Entity
public class CarrinhoItem {
    @Id
    @GeneratedValue
    private int itemId;
    private int quantidade;
    @ManyToOne
    @JoinColumn(name = "produto_id")
    private Produto produto;
    @ManyToOne
    @JoinColumn(name = "carrinho_id")
    @JsonIgnore
    private Carrinho carrinho;
}
