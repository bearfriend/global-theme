// TODO: scope all this better

var _globalTheme = {};

_globalTheme.Color = function(hex) {
	this.hex = new String(hex);
	this.hex.toRgb = this.toRgb;
	return '#'+this.hex;
};
_globalTheme.Color.prototype.toRgb = function() {
	
	var bigint = parseInt((this.length == 3
						   ? this.split('').map(function(v) {
							   return v+''+v;
						   }).join('')
						   : this), 16);
	
	return [bigint >> 16 & 255,
			bigint >> 8 & 255,
			bigint & 255].join();
	
};

CoreStyle.g.theme = {
	colors: {
		palette: ['#7A2E4A','#2A3950','#704E44', new _globalTheme.Color('fea')],
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
