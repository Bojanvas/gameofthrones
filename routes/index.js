var game = require('../game.json');

exports.home =  function(req,res){
    var gameofthrones = game.gameofthrones;
    res.render('home' , {
        title:'Game of Thrones',
        gameofthrones  : gameofthrones
    });
};
exports.parts = function(req,res){
    var ses = req.params.id;
    var gameofthrones = game.gameofthrones;
    if(ses >=1 && ses <=6){
        var season = gameofthrones[ses-1];
        var title = season.title;
        var main = season.main_characters;
    res.render('page', {
       season:season,
        title:title,
        main: main,
        gameofthrones:gameofthrones
    
    });
    }else {   res.send('Noothing found hereee!!!!')      }
};
exports.notfound = function(req,res){
    res.render('notfound')
};