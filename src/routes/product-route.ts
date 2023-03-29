import {Router} from 'express';
import { deleteProduct, getOneProduct, getProducts, postProduct, updateProduct } from '../controllers/product-controller';

const router = Router();

router.get('/', getProducts);
router.get('/:id', getOneProduct);
router.delete('/:id', deleteProduct);
router.post('/', postProduct);
router.put('/:id', updateProduct);

export default router;