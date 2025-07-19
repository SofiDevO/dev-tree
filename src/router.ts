import {Router} from 'express';
import createAccount from './handlers';

const router = Router();



//! authentication and registration
router.post('/auth/register', (req, res, next) => {
	createAccount(req, res).catch(next);
});





export default router;