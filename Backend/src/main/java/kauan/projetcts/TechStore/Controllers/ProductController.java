package kauan.projetcts.TechStore.Controllers;

import kauan.projetcts.TechStore.Domain.NovoProdutoDTO;
import kauan.projetcts.TechStore.Domain.NovoProdutoNoCatalogoDTO;
import kauan.projetcts.TechStore.Domain.Produto;
import kauan.projetcts.TechStore.Services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/catalogo")
public class ProductController {
    @Autowired
    private ProductService productService;

    @PatchMapping("/{id}")
    public ResponseEntity<Produto> atualizarProduto(@PathVariable int id, @RequestBody NovoProdutoDTO novoProdutoDTO) {

        return ResponseEntity.ok(productService.atualizarProdutoDoCatalogo(id, novoProdutoDTO));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarProdutoDoCatalogo(@PathVariable int id) {
        productService.removerProdutoDoCatalogo(id);
        return ResponseEntity.ok("Produto removido com sucesso");
    }

    @GetMapping
    public ResponseEntity<List<Produto>> listarProdutos() {
        return ResponseEntity.ok(productService.listarProdutosDoCatalogo());
    }

    @PostMapping("/adicionarproduto")
    ResponseEntity<Produto> adicionarProduto(@RequestBody NovoProdutoNoCatalogoDTO dto) {
        return ResponseEntity.ok(productService.adicionarProdutoAoCatalogo(dto));
    }

    @GetMapping("/filtrarprodutos")
    public ResponseEntity<List<Produto>> filtrarProdutosPorReviews() {
        return ResponseEntity.ok(productService.filtrarProdutosPorReviews());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Produto> buscarProdutoPorId(@PathVariable int id) {
        return ResponseEntity.ok(productService.buscarProdutoPorId(id));
    }

}
