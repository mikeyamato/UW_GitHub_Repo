Thomas Mercer

Create an application that displays the avatar of public GitHub repository owners.

For owners with logins that start with a or A, display a list of the repository owner’s followers when a user hovers over the avatar image.

Requirements:
* Use a Node service API to query the GitHub repositories API.✅
* Do not query GitHub repositories API directly from the client application.✅
* Do not return unnecessary data to the client application.
* Use Vue, React, or Angular as the client framework.✅
* Use Bootstrap for UI components.✅
* Start with repository 1000.
* Try to fit as many avatars on one screen as possible. (i.e. Without scrolling.)
* The application should run on localhost with the “npm start” command.✅

Bonus Features (Don’t do these if doing so will compromise meeting the deadline with the required features.):
* Display a detail view of the repository owner when a user clicks on an avatar.
* Add a filter to show only certain avatars based on whatever criteria you come up with.
* Minimize calls to the GitHub API to avoid rate limiting.

You do not need obtain any OAuth or security credentials for this application. If you get rate limited by the GitHub API and receive errors when getting images, that is fine, but handle errors gracefully.

You do not need to put this application on a public server.

When finished, send notification and Include any files / links to all source code and documentation. A public GitHub repository link is ideal, but not required.