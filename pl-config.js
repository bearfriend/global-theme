// TODO: scope all this better

var _globalTheme = {};

_globalTheme.Color = function(hex) {
	var self = this;
	hex = hex.charAt(0) == '#' ? hex : '#'+hex
	this.hex = new String(hex);
	Object.defineProperty(this.hex, 'rgb', {
			get: function() {
					return self.toRgb();
			}
	});
	return this.hex;
};
	
_globalTheme.Color.prototype.toRgb = function() {
	hex = this.hex.substr(1);
	var bigint = parseInt((hex.length == 3
						   ? hex.split('').map(function(v) {
							   return v+''+v;
						   }).join('')
						   : hex), 16);
	
	return [bigint >> 16 & 255,
			bigint >> 8 & 255,
			bigint & 255].join();
	
};

// factory
_globalTheme.color = function(hex) {
	return new _globalTheme.Color(hex);
};

CoreStyle.g.theme = {
	colors: {
		palette: [
			_globalTheme.color('7A2E4A'),
			_globalTheme.color('2A3950'),
			_globalTheme.color('704E44')
		],
		get text() {
			return {
				main: '#333',
				dim: '#666',
				dimDim: '#777'				
			}
		},
		set text(v) {
			return false;
		},
		links: {
			get main() {
				return _globalTheme.colors.palette[1]
			},
			set main(v) {
				return false;
			},
			get hover() {
				return _globalTheme.colors.palette[2]
			},
			set hover(v) {
				return false;
			}
		}
	}
};

_globalTheme = CoreStyle.g.theme;


(function(document) {

	function removeOldAlert() {
		var oldAlert = document.getElementById("alert");
		if (oldAlert) {
			document.body.removeChild(oldAlert);
		}
	}

	function addAlert(aMsg) {
		removeOldAlert();
		var newAlert = document.createElement("div");
		newAlert.setAttribute("role", "alert");
		newAlert.setAttribute("id", "alert");
		var msg = document.createTextNode(aMsg);
		newAlert.appendChild(msg);
		document.body.appendChild(newAlert);
	}
	
	window.addEventListener('decorator-invalid',function(e) {
		//e.detail.input.focus();
		addAlert(e.detail.error);
	});
	
})(window.document);
