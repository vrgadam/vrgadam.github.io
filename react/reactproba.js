(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
	"app": {
		"balloons": {
			"number": 16
		}
	}
}

},{}],2:[function(require,module,exports){
var Balloon = React.createClass({displayName: "Balloon",
        propTypes: {
            id: React.PropTypes.number.isRequired,
            name: React.PropTypes.string.isRequired,
            price: React.PropTypes.number
        },
        getDefaultProps: function() {
            var id = Math.floor((Math.random() * 1000) + 1);
            
            return {
                id: id,
                name: "Awesome Hot-air Balloon",
                price: 15000
            }
        },
        render: function () {
            
            var imgUrl = "img/" + (this.props.id % 9) + ".jpg";
            
            return ( 
                React.createElement("div", {className: "balloon-container"}, 
                    React.createElement("img", {className: "balloon-img", src: imgUrl, title: this.props.id}), 
                    React.createElement("h1", {className: "balloon-name"}, this.props.name), 
                    React.createElement("h2", {className: "balloon-price"}, "$", this.props.price), 
                    React.createElement("span", {className: "buy-button btn", "data-product-id": this.props.id}, "Buy")
                )
            );
        }
    });
    
    var BalloonListItem = React.createClass({displayName: "BalloonListItem",
        render: function () {
            return (
                React.createElement("div", {className: "one-third column"}, " ", React.createElement(Balloon, {id: this.props.id, name: this.props.name, price: this.props.price}), " ")
            );
        } 
    });
    var BalloonRow = React.createClass({displayName: "BalloonRow",

        render: function () {
            var balloons = [
                React.createElement(BalloonListItem, {id: this.props.firstId}), 
                React.createElement(BalloonListItem, {id: this.props.secondId}), 
                React.createElement(BalloonListItem, {id: this.props.thirdId}) 
            ];

            return (
                React.createElement("div", {className: "row"}, balloons)
            );
        } 
    });
        
    var BalloonList = React.createClass({displayName: "BalloonList",
        getDefaultProps: function() {
            return {
                numOfBalloons: 21
            }
        },
        propTypes: {
            numOfBalloons: React.PropTypes.number
        },
        render: function() {
            var balloonRows = [];
            for (var i = 0; i < this.props.numOfBalloons; i += 3) {
                balloonRows.push(React.createElement(BalloonRow, {firstId: i, secondId: i + 1, thirdId: i + 2}));
            }
            return (
                React.createElement("div", {className: "list-container"}, 
                    React.createElement("div", null, balloonRows)
                ) 
            );
        }
    });
    
module.exports.BalloonList = BalloonList;

},{}],3:[function(require,module,exports){
$(document).ready(function () {
	var CONFIG = require('../config/config.json');

    var balloons = require('./balloons.js');
    var texts = require('./texts.js');
    var app = $('#app-container')[0];
    var glassLayer = $('.glass-layer');
    var appHeader = $('.app-header');
    var header = $('.section.header');
    var menu = {
    	balloons: $('.menu-item.balloons')[0],
    	texts: $('.menu-item.text')[0],
    };

    $(menu.balloons).click(function() {
		React.render( React.createElement(balloons.BalloonList, {numOfBalloons: CONFIG.app.balloons.number}) , app);    	
    });
    $(menu.texts).click(function() {
		React.render( React.createElement(texts.Texts, null) , app);    	
    });

    $(document).scroll(function() {
    	glassLayer.css({ opacity: $(document).scrollTop() / 310 });
    	    	if ( appHeader.css('background-color') === 'rgba(0, 0, 0, 0)' && $(document).scrollTop() > 310 ) {
    		appHeader.css({ 'background-color': 'rgb(0, 0, 0)' }).addClass('docked');
    	}
    	if ( appHeader.css('background-color') === 'rgb(0, 0, 0)' && $(document).scrollTop() < 310 ) {
    		appHeader.css({ 'background-color': 'rgba(0, 0, 0, 0)' }).removeClass('docked');
    	}

    })
    React.render( React.createElement(balloons.BalloonList, {numOfBalloons: CONFIG.app.balloons.number}) , app);



});

},{"../config/config.json":1,"./balloons.js":2,"./texts.js":4}],4:[function(require,module,exports){
var Texts = React.createClass({displayName: "Texts",
    render: function() {
     
        return ( React.createElement("div", {className: "text-container"}, 
        		React.createElement("h1", {className: "text-title"}, "Are hot-air balloons really that good?"), 
	        	React.createElement("p", null, "The hot air balloon is the oldest successful human-carrying flight technology. The first untethered manned hot air balloon flight was performed by Jean-François Pilâtre de Rozier and François Laurent d Arlandes on November 21, 1783, in Paris, France, in a balloon created by the Montgolfier brothers. Hot air balloons that can be propelled through the air rather than simply drifting the wind are known as thermal airships."), 
	        	React.createElement("p", null, "Roof party fanny pack seitan heirloom selfies craft beer. Chia tousled tote bag crucifix. Occupy banh mi Odd Future ethical. Echo Park shabby chic mlkshk street art tilde fingerstache, chambray Etsy Pinterest cornhole XOXO. PBR Echo Park DIY occupy street art, YOLO synth crucifix direct trade disrupt beard tattooed. Gastropub twee polaroid trust fund deep v shabby chic kogi. Asymmetrical organic disrupt, actually small batch meditation Blue Bottle raw denim Odd Future typewriter."), 
	        	React.createElement("p", null, "Blue Bottle banh mi heirloom, kitsch chambray keffiyeh meh Shoreditch try-hard skateboard Etsy Thundercats hella. Raw denim Williamsburg crucifix, sriracha actually heirloom squid +1 Odd Future polaroid. Disrupt DIY ennui, narwhal McSweeney s slow-carb artisan selfies swag bitters Brooklyn vegan. DIY wolf tote bag, mixtape whatever gentrify narwhal mumblecore banjo aesthetic Wes Anderson Banksy letterpress. Asymmetrical authentic meditation Odd Future cred. Trust fund beard chia, tousled bitters bicycle rights mumblecore semiotics pour-over. Mumblecore Pinterest 8-bit, Shoreditch kitsch twee trust fund Austin before they sold out butcher street art."), 
	        	React.createElement("p", null, "Squid trust fund semiotics, XOXO ugh you probably havent heard of them bicycle rights sartorial. Echo Park pork belly Blue Bottle meggings fixie lo-fi leggings retro squid art party master cleanse. Plaid photo booth Kickstarter cornhole try-hard. Mumblecore photo booth migas, retro 8-bit try-hard Marfa cronut slow-carb beard butcher readymade kale chips YOLO. Occupy lomo post-ironic, church-key health goth kogi typewriter stumptown kale chips. Pug DIY crucifix McSweeneys wolf Thundercats, organic flexitarian Tumblr Portland Pinterest farm-to-table. Viral disrupt hashtag, chambray kitsch butcher ennui ethical 8-bit direct trade Wes Anderson Austin jean shorts."), 
	        	React.createElement("p", null, "90 s Thundercats roof party retro, skateboard gastropub before they sold out craft beer cold-pressed. American Apparel cronut cliche Portland, raw denim wolf asymmetrical tattooed. Beard sriracha paleo butcher locavore. Selvage drinking vinegar gastropub, skateboard actually fingerstache lo-fi church-key ennui chia. Mixtape irony seitan hoodie. Lumbersexual chillwave cray meh master cleanse XOXO. Fixie forage bitters cred, pug bicycle rights 3 wolf moon semiotics pop-up mixtape sartorial yr cold-pressed pork belly."), 
	        	React.createElement("p", null)
          ) 
        );
    }
});
module.exports.Texts = Texts;

},{}]},{},[3]);
