import { Router } from 'express';
import {
  createSong,
  getAllSongs,
  getSongById,
  updateSong,
  deleteSong,
  incrementPlays
} from '../controllers/songController';

const router = Router();

router.post('/', createSong);
router.get('/', getAllSongs);
router.get('/:id', getSongById);
router.put('/:id', updateSong);
router.delete('/:id', deleteSong);
router.put('/:id/play', incrementPlays);

export default router;
