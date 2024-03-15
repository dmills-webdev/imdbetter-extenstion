# IMDBetter

IMDBetter is a non-serious chrome extension that rescores films/shows on IMDB without 10s or 1s being taken into account.

IMDB uses a secret set of score adjustments, using a weighted and trimmed mean to try and stop extreme voting from one off voters skewing the results. This extension instead simply strips out any votes of 1 or 10 and then shows a flat mean of the scores that are left.

To test the corresponding backend locally add ```"permissions": ["http://localhost/*"]``` back into [manifest.json](/manifest.json) and swith out the apiURL variable in [content.js](/scripts/content.js).