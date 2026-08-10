# BrainBrick — GitHub Pages Deployment

Repository target:

`https://github.com/Pitu01/brainbrick`

Expected website:

`https://pitu01.github.io/brainbrick/`

## One-time GitHub setup

1. Create/open the repository `brainbrick` under GitHub username `Pitu01`.
2. Upload this project to the repository root.
3. Commit the files to the `main` branch.
4. Open **Settings → Pages**.
5. Under the build/deployment section, select **GitHub Actions**.
6. Push to `main` or manually run the **Deploy BrainBrick to GitHub Pages** workflow.
7. GitHub will publish the `dist` build.

## Local check

```bash
npm install
npm run build
npm run dev
```

Local URL:

`http://localhost:5173/brainbrick/`

## Important

The Vite base is set to `/brainbrick/`, matching the planned repository name.

If the repository name is changed, update the `base` value in `vite.config.js`.

The site uses placeholder visuals where real product/workshop photographs have not yet been supplied.

Contact details currently configured:

- Email: ppbiswas100@gmail.com
- WhatsApp: +91 96650 83964
- Location: Life Republic, Pune-411057
