import {Request, Response }from 'express';
import product from '../models/product';

export const getProducts = async (req: Request, resp: Response) => {
   const listProducts = await product.findAll();
    
   resp.json({
      listProducts,
      message: 'get products'
   });
}

export const getOneProduct = async (req: Request, resp: Response) => { 
    const id = req.params.id;
    const productOne = await product.findByPk(id);
    
    if(productOne){
      resp.json(productOne);
    } else {
      resp.status(404).json({
        message:`No existe el producto con la id = ${id}`
      });
    }
}

export const deleteProduct = async (req: Request, resp: Response) => {
    const id = req.params.id;
    const productOne = await product.findByPk(id);
    if(!productOne){
       resp.status(404).json({
        message:`No existe el producto con la id = ${id}`
       });
    } else {
        await productOne.destroy();
        resp.json({
            message:`el producto con la id = ${id} ha sido eliminado`
          });
    }
}

export const postProduct = async (req: Request, resp: Response) => {
    const { body } = req;
    try {
        const productBody = await product.create(body);
        resp.json({
            message: 'Producto agregado con exito',
            body
        });
    } catch (error) {
        console.log(error);
        resp.json({
            message: 'Upps ocurrio un error comunicarse con soporte',
        });
    }

}

export const updateProduct = async (req: Request, resp: Response) => {
    const { id } = req.params;
    const { body } = req;
    const productUpdate = await product.findByPk(id);

    try {
        if(productUpdate ){
            productUpdate.update(body);
            resp.json({
                message: 'El producto fue actualizado con exito',
                body
            });
        } else {
          resp.status(404).json({
            message: `el producto con la id = ${id} no se ha actualizado`
          });
        }
    } catch (error) {
        console.log(error);
        resp.json({
            message: 'Upps ocurrio un error comunicarse con soporte',
        });
    }
}