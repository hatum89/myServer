import express, {Application, Request, Response} from 'express';
import cors from 'cors';
import routesProduct from '../routes/product-route';
import db from "../db/connection-db";

// console.log(db);

class conexion {
  private app: express.Application;
  private port: string;

  constructor(){
    this.app = express();
    this.port = process.env.PORT || '3001';
    this.listen();
    this.parserMethod();
    this.routes();
    this.dbConnect();
  }

  listen() {
    this.app.listen(this.port, () => {
        console.log('la aplicacion esta corriendo en el puerto', this.port);
    });
  }

  routes() {
    this.app.get('/', (req: Request, resp: Response) => {
        resp.json({
           message: 'Api Working'
        });
    });
    this.app.use('/api/products', routesProduct);
  }

  parserMethod(){
    // parseamos el body
    this.app.use(express.json());
    //cors 
    this.app.use(cors())
  }
  
  async dbConnect(){
  try {
    await db.authenticate();
    console.log('Conexion exitosa.');
  } catch (error) {
    console.error('Falla en la conexion:', error);
  }
  }
}

export default conexion;