const express = require('express');

const adminController = require('../controllers/admin')

const router = express.Router();

router.get('/', adminController.getLogin)
// router.get('/login-admin', adminController.postLogin)
router.get('/welcome', adminController.getIndex)
router.get('/looksite', adminController.getLookSite)
router.get('/gallery', adminController.getGallery)
router.get('/plans', adminController.getPlan)
router.get('/footer', adminController.getFooter)
router.get('/add-plan', adminController.getAddPlan)
router.get('/edit-plan/:id', adminController.getEditPlan)
router.post('/add-the-plan', adminController.postAddPlan);
router.post('/edit-looksite', adminController.postLookSite);
router.post('/edit-the-plan', adminController.postEditPlan);
router.post('/edit-footer', adminController.postFooter);
router.post('/delete-plan', adminController.deleteById)
// router.get('/blog', adminController.getBlogIndex)
// router.get('/blog/list', adminController.getBlogList)
// router.post('/contact-me', adminController.postContact)

module.exports = router