var fs = require("fs")

module.exports = {

	// Port
	port		:	3000,


	// IPv4/ IPv6 address to bin on. (BSP: "::1")
	address		: 	"0.0.0.0",


	// HTTPS
	https: {
		enabled: false,
		// key: __dirname + "/ssl/server.key",
		// cert: __dirname + "/ssl/server.crt",
	},

}
