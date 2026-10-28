package kauan.projetcts.TechStore.Exceptions;

public class ProductAlreadyReviewedException extends RuntimeException {
    public ProductAlreadyReviewedException(String message) {
        super(message);
    }
}
