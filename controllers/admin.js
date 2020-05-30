const Plan = require('../model/plan') //init Plan Model
const mainPage = require('../model/mainpage') //init
const Footer = require('../model/footer') //init

exports.getLogin = (req, res, next) => {
    res.render('admin/login', {
        pageTitle: 'Please Login',
        path: '/admin/login',
    });
}
exports.getIndex = (req, res, next) => {
    Plan.find().then(r => {

        res.render('admin/index', {
            pageTitle: 'Welcome Admin',
            path: '/admin/welcome',
            newClients: 0,
            basedClients: 0,
            profit: 0,
            plans: r.length,
            date: 'יום שישי'
        });
    }).catch(err => {
        console.log(err);
    })
}
/////////////////////////////////////////////////
/////////////START PLAN ADD/EDIT ////////////////
////////////////////////////////////////////////
exports.getPlan = (req, res, next) => {
    Plan.find().then(plan => {
        const x = 1;
        res.render('admin/plan', {
            pageTitle: 'My Plans',
            path: '/admin/plans',
            plan: plan,
            num: 1,
        });
    }).catch(err => console.log(err))
}
exports.getAddPlan = (req, res, next) => {
    res.render('admin/edit-plan', {
        pageTitle: 'Edit Plans',
        path: '/admin/edit',
        editMode: false,
        plan: ''
    });
}
exports.postAddPlan = (req, res, next) => {
    const typeSubscription = req.body.typeSubscription
    const subSubscription = req.body.subSubscription
    const description = req.body.description
    const price = req.body.price
    const advisor = 'הצטרף עוד היום!'
    const whichDays = {
        fromDay: req.body.fromDay,
        toDay: req.body.toDay
    }
    const openingTimes = {
        fromTime: req.body.fromTime,
        toTime: req.body.toTime
    }
    const advisorActivity = req.body.advisorActivity
    const submitForm = req.body.submitForm

    const plan = new Plan({
        typeSubscription: typeSubscription,
        subSubscription: subSubscription,
        description: description,
        price: price,
        advisor: advisor,
        whichDays: {
            fromDay: whichDays.fromDay,
            toDay: whichDays.toDay
        },
        openingTimes: {
            fromTime: openingTimes.fromTime,
            toTime: openingTimes.toTime
        },
        advisorActivity: advisorActivity,
        submitForm: submitForm
    })
    plan.save().then(result => {
        console.log('Success');
        res.redirect('/admin/welcome');

    }).catch(err => console.log(err))

}

exports.getEditPlan = (req, res, next) => {
    const id = req.params.id;
    Plan.findById(id)
        .then(plan => {

            res.render('admin/edit-plan', {
                pageTitle: 'Edit Plan',
                path: '/admin/edit',
                editMode: true,
                plan: plan
            })
        }).catch(err => console.log(err))
}

exports.postEditPlan = (req, res, next) => {
    const planId = req.body.planId
    const typeSubscription = req.body.typeSubscription
    const subSubscription = req.body.subSubscription
    const description = req.body.description
    const price = req.body.price
    const advisor = 'הצטרף עוד היום!'
    const whichDays = {
        fromDay: req.body.fromDay,
        toDay: req.body.toDay
    }
    const openingTimes = {
        fromTime: req.body.fromTime,
        toTime: req.body.toTime
    }
    const advisorActivity = req.body.advisorActivity
    const submitForm = req.body.submitForm
    Plan.findById(planId)
        .then(plan => {
            plan.typeSubscription = typeSubscription
            plan.subSubscription = subSubscription
            plan.description = description
            plan.price = price
            plan.advisor = advisor
            plan.whichDays.fromDay = whichDays.fromDay
            plan.whichDays.toDay = whichDays.toDay
            plan.openingTimes.fromTime = openingTimes.fromTime
            plan.openingTimes.toTime = openingTimes.toTime
            plan.advisorActivity = advisorActivity
            plan.submitForm = submitForm
            return plan.save()
        }).then(suc => {
            res.redirect('/admin/plans')
        })
        .catch(err => console.log(err))
}

exports.deleteById = (req, res, next) => {
    const id = req.body.planId
    Plan.findByIdAndRemove(id).then(suc => {
        res.redirect('/admin/plans');
    }).catch(err => console.log(err))
}

/////////////////////////////////////////////////
/////////////START LOOK SITE ///////////////////
////////////////////////////////////////////////

exports.getLookSite = (req, res, next) => {
    mainPage.find().then(looksite => {

        res.render('admin/looksite', {
            pageTitle: 'Look Site Panel',
            path: '/admin/looksite',
            looksite: looksite[0]
        });
    }).catch(err => console.log(err))
}

exports.postLookSite = (req, res, next) => {
    const bigTitle = req.body.bigtitle
    const smallTitle = req.body.smalltitle
    const descriptionMen = req.body.mendescription
    const descriptionWomen = req.body.womendescription
    const joinNow = req.body.joinnow
    const clickBtn = req.body.clickbtn
    const menTitle = req.body.mentitle
    const womenTitle = req.body.womentitle

    mainPage.find().then(mainpage => {

        mainpage[0].bigTitle = bigTitle,
            mainpage[0].smallTitle = smallTitle,
            mainpage[0].descriptionMen = descriptionMen,
            mainpage[0].descriptionWomen = descriptionWomen,
            mainpage[0].joinNow = joinNow,
            mainpage[0].clickBtn = clickBtn,
            mainpage[0].menTitle = menTitle,
            mainpage[0].womenTitle = womenTitle
        return mainpage[0].save()
    }).then(result => {
        console.log('Success');
        res.redirect('/admin/looksite');

    }).catch(err => console.log(err))

}
/////////////////////////////////////////////////
/////////////START GALLERY //////////////////////
////////////////////////////////////////////////
exports.getGallery = (req, res, next) => {
    res.render('admin/index', {
        pageTitle: 'Gallery Panel',
        path: '/admin/gallery',
        newClients: 0,
        basedClients: 0,
        profit: 0
    });
}
/////////////////////////////////////////////////
/////////////START FOOTER ///////////////////////
////////////////////////////////////////////////
exports.getFooter = (req, res, next) => {
    Footer.find().then(footer => {

        res.render('admin/footer', {
            pageTitle: 'Footer Panel',
            path: '/admin/footer',
            footer: footer[0]

        });
    })
        .catch(err => console.log(err))
}


exports.postFooter = (req, res, next) => {
    const leftTitle = req.body.lefttitle
    const rightTitle = req.body.righttitle
    const description = req.body.description
    const country = req.body.country
    const city = req.body.city
    const phone = req.body.phone
    const email = req.body.email

    Footer.find().then(footer => {

        footer[0].leftTitle = leftTitle,
            footer[0].rightTitle = rightTitle,
            footer[0].description = description,
            footer[0].country = country,
            footer[0].city = city,
            footer[0].phone = phone,
            footer[0].email = email
        return footer[0].save()
    }).then(suc => {
        res.redirect('/admin/footer')
    }).catch(err => console.log(err))
}
