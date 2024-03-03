## ISAC-BTU
[![Deployment](https://github.com/VinayIN/isac/actions/workflows/merge.yml/badge.svg)](https://github.com/VinayIN/isac/actions/workflows/merge.yml)

[![Testing & Preview](https://github.com/VinayIN/isac/actions/workflows/pull-request.yml/badge.svg)](https://github.com/VinayIN/isac/actions/workflows/pull-request.yml)

Visit here for the website: https://isacotbus-btu.web.app/
Visit here for the database: https://isacottbus.retool.com/app/dataviewer

### Development guidelines
1. Never push to `main` branch. Always merge PR to this branch.
    - Doing a merge will automatically deploy the recent build code to production
2. Always create a branch for doing a development and then create a `PR to main branch`.
3. Before accepting to merge, check if the `github action is success`

### Setup:
1. Setup `firebase hosting` (Admin)

- Refer to this link for more: https://firebase.google.com/docs/hosting/
- Install firebase cli
```bash
npm install -g firebase-tools
```
- login to firebase and link your project `isac-btu`
```bash
firebase login
firebase init
# Set public folder to out
```
- Deploy the service using `npm run deploy`

2. Setup `node.js, next.js` (Contributors) 

- Refer this documentation to install nextjs https://beta.nextjs.org/docs/installation. (optional)
- Requires node.js version 16+ (Install using this link: https://nodejs.org/en/)
- `cd` into isac/ and run `npm install`

### Some commands
1. `npm run lint`: Check the linting of the source code.
2. `npm run build`: Builds the app for production to the `.next` folder.
3. `npm run export`: Exports the static file from `.next` folder to `out` folder.
4. `npm run deploy` : Need `npm run export` & `npm run build` before running this command.
