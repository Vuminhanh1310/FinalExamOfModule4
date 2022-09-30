import { Request, Response } from 'express';
export declare class customerController {
    static showHomeCreateCustomer(req: Request, res: Response): Promise<void>;
    static createEmployee(req: Request, res: Response): Promise<void>;
    static showList(req: Request, res: Response): Promise<void>;
    static deleteCustomer(req: Request, res: Response): Promise<void>;
    static showFormEditEmployee(req: Request, res: Response): Promise<void>;
    static editEmployee(req: Request, res: Response): Promise<void>;
    static showDetailOfEmployee(req: Request, res: Response): Promise<void>;
}
declare const _default: customerController;
export default _default;
