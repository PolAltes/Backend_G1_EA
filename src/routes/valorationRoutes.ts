import express from 'express';
import * as valorationController from '../controllers/valorationController'

const router = express.Router();

/**
 * @openapi
 * /api/valorations:
 *   post:
 *     summary: Create a new valoration
 *     tags: [Valorations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - activity
 *               - user
 *               - value
 *             properties:
 *               activity:
 *                 type: string
 *               user:
 *                 type: string
 *               value:
 *                 type: number
 *     responses:
 *       201:
 *         description: Valoration created successfully
 *       400:
 *         description: Valoration already exists
 *       500:
 *         description: Error creating valoration
 */
router.post('/', valorationController.createValorationHandler);

/**
 * @openapi
 * /api/valorations/all:
 *   get:
 *     summary: Get all valorations
 *     tags: [Valorations]
 *     responses:
 *       201:
 *         description: Valorations found
 *       401:
 *        description: Could not find any valoration
 *       500:
 *        description: Server error
 */
router.get('/all',valorationController.getValorationsHandler);

/**
 * @openapi
 * /api/valorations:
 *   get:
 *     summary: Get valorations with pagination
 *     tags: [Valorations]
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of valorations per page
 *     responses:
 *       200:
 *         description: List of valorations with pagination metadata
 *       400:
 *         description: Invalid pagination parameters
 *       500:
 *         description: Error fetching valorations
 */
router.get('/',valorationController.getPaginatedValorationsHandler);

/**
 * @openapi
 * /api/valorations/{id}:
 *   get:
 *     summary: Get valoration by activity ID
 *     tags: [Valorations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Activity ID
 *     responses:
 *       200:
 *         description: Valoration data
 *       404:
 *         description: Activity not found
 *       500:
 *         description: Error fetching valorations
 */
router.get('/:id', valorationController.getActivityValorationHandler);

/**
 * @openapi
 * /api/valorations/{id}:
 *   put:
 *     summary: Update valoration by activity ID
 *     tags: [Valorations]
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
 *             properties:
 *                 user:
 *                   type: string
 *                 value:
 *                   type: string
 *                   enum: [1,2,3,4,5]
 *     responses:
 *       200:
 *         description: Valoration updated
 *       401:
 *         description: Could not find valoration
 *       500:
 *         description: Server error
 */
router.put('/:id', valorationController.updateValorationHandler);

/**
 * @openapi
 * /api/valorations/del:
 *   delete:
 *     summary: Delete a valoration by activity ID and user ID
 *     tags: [Valorations]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - activity
 *               - user
 *             properties:
 *               activity:
 *                 type: string
 *               user:
 *                 type: string
 *     responses:
 *       201:
 *         description: Valoration deleted
 *       401:
 *         description: Could not delete valoration
 *       500:
 *         description: Server error
 */
router.delete('/del',valorationController.deleteValorationHandler);

/**
 * @openapi
 * /api/valorations/{id}:
 *   delete:
 *     summary: Delete a valoration by its ID
 *     tags: [Valorations]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Valoration ID
 *     responses:
 *       201:
 *         description: Valoration deleted
 *       401:
 *         description: Could not delete valoration
 *       500:
 *         description: Server error
 */
router.delete('/:id',valorationController.deleteValorationByIdHandler);

export default router;