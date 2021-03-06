import { Request, Response } from "express"

export const getUsuarios = (req: Request, res: Response) => {
    res.json({
        msg: 'Getusuarios'
    });
}
export const getUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'Getusuario',
        id
    });
}

export const postUsuario = (req: Request, res: Response) => {
    const { body } = req;
    res.json({
        msg: 'Postusuario',
        body
    });
}

export const putUsuario = (req: Request, res: Response) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuario',
        body,
        id
    });
}

export const deleteUsuario = (req: Request, res: Response) => {
    const { id } = req.params; 
    res.json({
        msg: 'deleteUsuario',
        id
    });
}