app.get("/myplan", (req, res) =>
	{
		let htmlString = "<html><head><title>CS major</title></head><body>";
		htmlString += "<h3> Welcome to Corban!</h3>";
	htmlString += "<form action = 'http://localhost:8888/mathmajor' method = 'GET'>";
		htmlString += "<label> When do you plan to start? </label><input type='number' name='year'></br>";
		htmlString += "<label> Pick a major: </label><select name='major'>";
        htmlString += "<option value='cs'>Computer Science</option>";
		htmlString += "<option value='math'>Mathematics</option></select><br>";
		htmlString += "<input type='submit' /></br>";
		htmlString += "</form></body></html>";
		res.send(htmlString);
	});

	app.get("/mathmajor", (req, res) => 
	{
		let year = req.query.year;//url.parse(req.url).pathname.split("_")[1];
		console.log("Math" + " year " + year);
		res.send(start(year));
	});