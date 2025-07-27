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

/**
 * @swagger
 * /api/songs:
 *   post:
 *     summary: Create a new song
 *     tags: [Songs]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - path
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the song
 *               path:
 *                 type: string
 *                 description: URL or path to the song file
 *     responses:
 *       201:
 *         description: Song created successfully
 *       500:
 *         description: Server error
 */
router.post('/', createSong);

/**
 * @swagger
 * /api/songs:
 *   get:
 *     summary: Get all songs
 *     tags: [Songs]
 *     responses:
 *       200:
 *         description: List of all songs
 *       500:
 *         description: Server error
 */
router.get('/', getAllSongs);

/**
 * @swagger
 * /api/songs/{id}:
 *   get:
 *     summary: Get a song by ID
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Song ID
 *     responses:
 *       200:
 *         description: Song details
 *       404:
 *         description: Song not found
 *       500:
 *         description: Server error
 */
router.get('/:id', getSongById);

/**
 * @swagger
 * /api/songs/{id}:
 *   put:
 *     summary: Update a song
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Song ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               path:
 *                 type: string
 *     responses:
 *       200:
 *         description: Song updated successfully
 *       404:
 *         description: Song not found
 *       500:
 *         description: Server error
 */
router.put('/:id', updateSong);

/**
 * @swagger
 * /api/songs/{id}:
 *   delete:
 *     summary: Delete a song
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Song ID
 *     responses:
 *       200:
 *         description: Song deleted successfully
 *       404:
 *         description: Song not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', deleteSong);

/**
 * @swagger
 * /api/songs/{id}/play:
 *   put:
 *     summary: Increment play count for a song
 *     tags: [Songs]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Song ID
 *     responses:
 *       200:
 *         description: Play count incremented successfully
 *       404:
 *         description: Song not found
 *       500:
 *         description: Server error
 */
router.put('/:id/play', incrementPlays);

export default router;
