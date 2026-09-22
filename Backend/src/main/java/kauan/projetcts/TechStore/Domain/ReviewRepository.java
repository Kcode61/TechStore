package kauan.projetcts.TechStore.Domain;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    boolean existsByUserIdAndProdutoId(int userId, int produtoId);

    void deleteByProdutoId(int produtoId);
}