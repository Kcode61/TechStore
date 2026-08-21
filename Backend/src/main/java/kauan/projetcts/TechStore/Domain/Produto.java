package kauan.projetcts.TechStore.Domain;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Getter;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;

@Getter
@Setter
public class Produto {
    @Id
    @GeneratedValue
    private String produtoNome;
    private String produtoDescricao;
    private int produtoValor;
    private double produtoReview;
    private ProdutoCategoria produtoCategoria;
    @ManyToOne
    @JoinColumn(name = "user_id")
    @JsonIgnore
    private User user;

}

