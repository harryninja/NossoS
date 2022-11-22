import express from 'express';
import controller from '../controllers/briefing';
import extractJWT from '../middleware/extractJWT';

const router = express.Router();

router.get('/briefing', controller.getAllEvents);
router.get('/briefing/:id', controller.getBriefing);
router.post('/briefing', controller.registerEvent);
router.delete('/briefing/:id', controller.getBriefing);

router.get('/test', () => {
    console.log('funciona');
});

export = router;
