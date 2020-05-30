const express = require('express');

const mainController = require('../controllers/main')

const router = express.Router();

router.get('/', mainController.getIndex)
router.get('/contact-me', mainController.getContact)
router.get('/blog', mainController.getBlogIndex)
router.get('/blog/list', mainController.getBlogList)
router.post('/contact-me', mainController.postContact)

module.exports = router