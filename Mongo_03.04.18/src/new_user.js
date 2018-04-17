const User = require('./bd');
(async () => {
	let newUser = {login: 'Anna_Golubeva',password:'123654'};
	newUser = new User(newUser);
	await newUser.save();
	process.exit(0);
})();