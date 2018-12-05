const express = require('express');
const router = express.Router();
const octokit = require('@octokit/rest')()

router.get('/avatars', (req, res) => {
	console.log('**** backend hit')
	// res.json({msg: "route works"})
	
	let mainArr = [];
	
	octokit.repos.listPublic({
		per_page: '20',
		since: '1000'
	}).then(results=>{
		for (let eachObj of results.data) {
			let regArr = [];
			let followers = [];
			let lowercaseLogin = eachObj.owner.login.toLowerCase();
			
			if (lowercaseLogin.startsWith('a')){
				let loginNameA = eachObj.owner.login
				
				regArr.push(eachObj.id)  // repo number in order of creation
				regArr.push(eachObj.owner.avatar_url)  // avatar image url
				regArr.push(eachObj.owner.login)   // name of repo owner if starting with 'a'
				octokit.users.listFollowersForUser({
					username: loginNameA
				}).then(results=>{
					for (let eachObj of results.data) {
						followers.push(eachObj.login)
					}
					regArr.push(followers)  // TODO: names of all followers and ...
					// console.log('**** regArr', regArr)
					mainArr.push(regArr)
					// console.log('**** mainArr', mainArr)
					console.log('***** A name')
				})
				.catch(err => res.status(404).json({error: 'something went wrong'}))
			}
			else {
				regArr.push(eachObj.id)  // repo number in order of creation
				regArr.push(eachObj.owner.avatar_url)  // avatar image url
				mainArr.push(regArr)
				console.log('***** Regular name')
			}
			// console.log('**** regArr', regArr)
		}
		// console.log('***** mainArr',mainArr)
		console.log('********************************************************* this hits')
		res.send(mainArr)
	})
	.catch(err => res.status(404).json({error: 'something went wrong'}))
})

module.exports = router;


