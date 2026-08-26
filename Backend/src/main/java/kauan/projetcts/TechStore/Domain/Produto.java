package kauan.projetcts.TechStore.Domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import net.minidev.json.annotate.JsonIgnore;

@Getter
@Setter
@Entity
public class Produto {
    @Id
    @GeneratedValue
    private int id;
    private String produtoNome;
    private String produtoDescricao;
    private int produtoValor;
    private double produtoReview;
    private int reviewsCount;
    private String produtoImage;
    private ProdutoCategoria produtoCategoria;


}

