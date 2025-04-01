import express from 'express';
import * as friendListController from '../controllers/friendListController';

const router = express.Router();

/**
 * @openapi
 * /api/friendLists:
 *   post:
 *     summary: Create a new Friend List
 *     tags: [Friend Lists]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - user
 *               - friends
 *             properties:
 *               user:
 *                 type: objectId
 *               friends:
 *                 type: array
 *                 items:
 *                   type: objectId
 *     responses:
 *       201:
 *         description: Canción creada exitosamente
 *       400:
 *        description: Error creando la canción
 *       500:
 *        description: Error del servidor
 */
router.post('/', friendListController.generateFriendListHandler);

/**
 * @openapi
 * /api/friendLists:
 *   get:
 *     summary: Get all friend lists
 *     tags: [Friend Lists]
 *     responses:
 *       201:
 *         description: Listas de amigos encontradas
 *       401:
 *        description: No se encontraron listas de amigos
 *       500:
 *        description: Error del servidor
 */
router.get('/', friendListController.getAllFriendListsHandler);

/**
 * @openapi
 * /api/friendLists/{id}:
 *   get:
 *     summary: Get the friend list of a user
 *     tags: [Friend Lists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Lista encontrada exitosamente
 *       400:
 *        description: Lista no encontrada
 *       500:
 *        description: Error del servidor
 */
router.get('/:id',friendListController.getUserFriendListHandler);

/**
 * @openapi
 * /api/friendLists/{id}:
 *   put:
 *     summary: Update a friend list
 *     tags: [Friend Lists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - string
 *             properties:
 *               user:
 *                 type: string
 *     responses:
 *       201:
 *         description: Lista actualizada exitosamente
 *       400:
 *        description: Error actualizando la lista
 *       500:
 *        description: Error del servidor
 */
router.put('/:id',friendListController.updateUserFriendListHandler);

/**
 * @openapi
 * /api/friendLists/{id}:
 *   delete:
 *     summary: Delete a friend list
 *     tags: [Friend Lists]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Lista borrada exitosamente
 *       400:
 *        description: Error borrando la lista
 *       500:
 *        description: Error del servidor
 */
router.delete('/:id',friendListController.deleteUserFriendListHandler);

export default router;