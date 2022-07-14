const router = require('express').Router();

router.get('/', (req, res) => {
  try {
			res.sendFile('/home/runner/boilerplate-project-headerparser/views/index.html');
		}
		catch (err) {
		  res.status(500).send(err)
		}
});

router.get('/api/whoami', (req, res) => {
 try {
			let ipAddress = req.connection.remoteAddress;
      let language = req.headers["accept-language"];
      let userAgent = req.headers["user-agent"];
      res.json({ipaddress: ipAddress, language: 
                language, software: userAgent});
		}
		catch (err) {
		  res.status(500).send(err)
		}
});

module.exports = router;