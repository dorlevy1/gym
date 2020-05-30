const mainPage = require('../model/mainpage')
const Plan = require('../model/plan')
const Contact = require('../model/contact')
const Footer = require('../model/footer')
exports.getIndex = (req, res, next) => {
    mainPage.find().then(main => {
        Plan.find().then(plan => {
            Footer.find().then(footer => {

                res.render('index-boxing', {
                    pageTitle: 'Gym',
                    path: '/',
                    main: main[0],
                    plan: plan,
                    footer: footer[0]
                });
            })
        })
    }).catch(err => console.log(err))
}
exports.getContact = (req, res, next) => {
    res.render('contact-me', {
        pageTitle: 'Contact',
        path: '/contact-me',
    });
}


exports.postContact = (req, res, next) => {
    const name = req.body.name;
    const email = req.body.email;
    const number = req.body.number;
    const message = req.body.message;
    const contact = new Contact({
        name: name,
        email: email,
        number: number,
        message: message,
    });
    contact
        .save()
        .then(result => {
            console.log('success');

            res.redirect('/');
        })
        .catch(err =>
            console.log(err))
}

exports.getBlogIndex = (req, res, next) => {

    res.render('blog-details', {
        pageTitle: 'Our Blog',
        path: '/blog'
    })
}
exports.getBlogList = (req, res, next) => {

    res.render('blog-listing', {
        pageTitle: 'Our Blog',
        path: '/blog'
    })
}