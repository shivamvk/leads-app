const models = require('../models');

exports.get_landing = function(req, res, next){
    res.render('index', { title: 'Buzz App' });
}

exports.submit_email = function(req, res, next){
    return models.leads.create({
        email: req.body.email,
    }).then(lead=>{
        console.log(lead);
        res.redirect("/leads");
    });
}

exports.get_all_leads = function(req, res, next){
    return models.leads.findAll().then(leads=>{
        res.render('leads', {
            title: "All leads",
            leads: leads
        })
    });
}

exports.get_lead_by_id = function(req, res, next){
    return models.leads.findOne({
        where: {
            id: req.params.lead_id,
        }
    }).then(lead=>{
        res.render('lead', {
            lead : lead
        });
    });
}

exports.show_edit_lead = function(req, res, next){
    return models.leads.findOne({
        where: {
            id: req.params.lead_id,
        }
    }).then(lead=>{
        res.render('edit_lead', {
            lead : lead
        });
    });
}

exports.edit_lead = function(req, res, next){
    return models.leads.update({
        email: req.body.email,
    },{
        where: {
            id: req.params.lead_id,
        }
    }).then(result=>{
        res.redirect("/lead/" + req.params.lead_id);
    });
}