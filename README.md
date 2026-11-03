# Cake Stories website

One-page website for Cake Stories, T. Dasarahalli, Bengaluru. Plain HTML, CSS and JavaScript. No build step.

## Files
- `index.html` the page
- `styles.css` the design
- `script.js` fills the page from the config
- `site-config.js` **the only file the owner edits** (phone, prices, hours, flavours, photos, reviews)
- `images/` cake photos

## Put it online with GitHub Pages
1. Create a new public repository, for example `cake-stories`.
2. Upload all files and the `images` folder to the repository.
3. Open Settings, then Pages. Under "Build and deployment" choose "Deploy from a branch", branch `main`, folder `/ (root)`, and Save.
4. After a minute the site is live at `https://<github-username>.github.io/cake-stories/`.

## Update the site
- **Phone number:** change `phone` and `phoneDisplay` in `site-config.js`. Use digits only with country code, for example `919876543210`.
- **Prices, flavours, hours:** edit the matching lines in `site-config.js`.
- **Cake photos:** upload the photo into `images/`, then add a line to `gallery`. Use photos under 500 KB each (JPG).
- **Reviews:** copy name and text from Google into `reviews`. Optionally add the review's Google Maps share link in `url`.
- On GitHub, open the file, click the pencil icon, edit, and click "Commit changes". The site updates in about a minute.

## Note
The cake pictures in `images/` are placeholder illustrations. Replace them with real photos.
