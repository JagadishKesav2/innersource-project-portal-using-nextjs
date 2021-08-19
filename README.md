# nextjs PWA

Build a PWA with Next.js to achieve 100 lighthouse score.

## Getting Started

### Local Setup

```
yarn install
yarn build
yarn start
```

### Vercel Deployment Process

`npm install -g vercel` Installs vercel globally on the host

`vercel`  Brings up the vercel browser application 1st time for signup.

Upon success re-type `versel` for linking the project and also for deployment process.

Navigate to `.vercel` directory that gets created upon execution of the above step and find the `project.json` file.

Head over to `[vercel.com](https://vercel.com/account/tokens)`  to generate the token.

Sign-in to github and navigate profile settings and create 3 secret variables under the secrets menu -
```
VERCEL_TOKEN - as key and value would be the token obtained from earlier step
VERCEL_PROJECT_ID - as key and the value for the same would be obtained in the project.json file that was created by vercel in the earlier step with the key named projectId
VERCEL_ORG_ID - as ket and use the value of orgId present in project.json
```

### vercel - demo

Visit -> https://nextjs-100-iota.vercel.app/

