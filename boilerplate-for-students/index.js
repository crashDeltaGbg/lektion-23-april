const { app } = require('./core');
const routes = require('./router.js');

app.use('/lights', routes);

app.use('/blinds', routes);

app.use('/AC', routes);

app.use('/vacuum', routes);

app.use('/speakers', routes);

app.use('/locks', routes);

app.use('/cams', routes);

app.listen(8000, () => {
	console.log('API for smart home 1.1 up n running.');
});
