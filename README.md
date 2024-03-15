# IMDBetter

IMDBetter is a non-serious chrome extension that rescores films/shows on IMDB without 10s or 1s being taken into account.

IMDB uses a secret set of score adjustments, using a weighted and trimmed mean to try and stop extreme voting from one off voters skewing the results. This extension instead simply strips out any votes of 1 or 10 and then shows a flat mean of the scores that are left.

## Installation

1. Download and extract the repo folder.
1. Go to [chrome's extension management page](chrome://extensions/) and make sure you have Developer mode enabled.
1. Press 'Load unpacked', select the folder from before.
1. That's it! Go to any title on IMDB and after a slight delay you should see a new adjusted score will be added next to the original one (that should now be crossed out.)

## Development

To test the corresponding backend locally add ```"permissions": ["http://localhost/*"]``` back into [manifest.json](/manifest.json) and swith out the apiURL variable in [content.js](/scripts/content.js).