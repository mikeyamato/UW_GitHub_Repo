const express = require('express');
const router = express.Router();
const octokit = require('@octokit/rest')()

router.get('/avatars', (req, res) => {
	console.log('**** backend hit')
	// res.json({msg: "route works"})
	
	octokit.repos.listPublic({
		per_page: 2,
		since: '1000'
	}).then(results=>{
		
		let mainArr = [];
		for (let eachObj of results.data) {
			let regArr = [];
			let followers = [];
			
			if (eachObj.owner.login.startsWith('a') || eachObj.owner.login.startsWith('A')){
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
				})
				.catch(err => res.status(404).json({error: 'something went wrong'}))
			}
			else {
				regArr.push(eachObj.id)  // repo number in order of creation
				regArr.push(eachObj.owner.avatar_url)  // avatar image url
				mainArr.push(regArr)
			}
			// console.log('**** regArr', regArr)
			
		}
		// console.log('***** mainArr',mainArr)
		res.send(mainArr)
	})
	.catch(err => res.status(404).json({error: 'something went wrong'}))
})

module.exports = router;


