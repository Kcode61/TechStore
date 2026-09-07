package kauan.projetcts.TechStore.Domain;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CarrinhoItemRepository extends JpaRepository<CarrinhoItem, Integer> {
    List<CarrinhoItem> findByProduto_Id(int produtoId);
}
