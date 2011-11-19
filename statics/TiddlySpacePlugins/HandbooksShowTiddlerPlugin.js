/***
|''Name''|Handbooks Show Tiddler Plugin|
|''Version''|0.1 GW|
|Requires|TiddlySpaceAdmin ErrorHandlerPlugin|
|''Description''|shows a tiddler only if user is not logged in|

!!Code
***/

//{{{

config.macros.HandbooksShowTiddlerAnon = {
	handler: function(place, macroName, params, wikifier, paramString, tiddler) {
		
		config.extensions.tiddlyweb.getUserInfo(function(user) {
			if(user.anon) { config.macros.tiddler.handler(place, macroName, params, wikifier, paramString, tiddler); }
			else {};
		    })
    }
};

config.macros.HandbooksShowTiddlerNotAnon = {
	handler: function(place, macroName, params, wikifier, paramString, tiddler) {
		
		config.extensions.tiddlyweb.getUserInfo(function(user) {
			if(user.anon) {  }
			else {config.macros.tiddler.handler(place, macroName, params, wikifier, paramString, tiddler);};
		    })
    }
};


//}}}
