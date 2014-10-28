CoreStyle.g.theme = _globalTheme = {
	colors: {
		palette: ['#7A2E4A','#2A3950','#704E44'],
		get text() {
			return {
				main: '#333',
				dim: '#666',
				dimDim: '#777'
			}
		},
		links: {
			get main() {
				return _globalTheme.colors.palette[1]
			},
			get hover() {
				return _globalTheme.colors.palette[2]
			}
		}
	}
};
