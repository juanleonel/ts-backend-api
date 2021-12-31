import express from 'express';
import userRouter from '../routes/usuario';
import cors from 'cors';
const DEFAULT_PORT = '8000';
export default class Server {

    private app: express.Application;
    private port: string;
    private apiPaths = {
        usuarios: '/api/usuarios'
    };

    constructor() {
        this.app = express();
        this.port = process.env.PORT || DEFAULT_PORT;
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.apiPaths.usuarios, userRouter);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto..' + this.port);
        });
    }
}