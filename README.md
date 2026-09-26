# Kitchen Log

A simple hotel kitchen checklist portal for daily day/night checks, weekly cleaning and inventory, and monthly equipment reviews.

Website: https://kitchen-log-vercel.vercel.app/

## Features

- Daily, weekly and monthly checklist sections
- Owner-managed checklist creation, editing, ordering and confirmed deletion
- Day/night shifts for daily checklists
- Completed checks, issue notes and saved activity
- Weekly inventory and monthly equipment review in the original templates
- Supabase sign-in and access restricted to approved kitchen members
- Slack notification previews (Slack delivery is not connected)

## Run locally

Use a current Node.js LTS release.

```sh
npm install
npm run build
```

Serve the generated `dist` folder with a static web server. The root HTML loads `/app.js`, so opening it directly as a local file is not supported.

## Vercel deployment

The existing `kitchen-log-vercel` Vercel project is connected to **abidzafar000/Kitchen-log**. The connection was confirmed in Vercel's Git settings. Use `main` as the production branch.

The included `vercel.json` supplies:

- Framework: Other
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

Pushes to the configured production branch can trigger production deployments. Check the commit's Vercel status and the project's Deployments page before considering an update live.

## Database and authentication

This source connects to the existing Kitchen Log Supabase project. Its schema and access policies were provisioned separately; this repository is not a fresh database bootstrap.

The frontend contains only a Supabase publishable key. Database access is restricted by row-level security and authenticated database functions. Never commit a service-role key, password or access token.

In Supabase **Authentication → URL Configuration**, use the deployed HTTPS origin as the Site URL and add the same origin to Redirect URLs. Users must confirm their email and have approved kitchen access.

## Validation

Frontend syntax, 21 frontend logic checks and 19 transactional database checks passed during development. The repository's npm build and deployed sign-in flow still need verification in Vercel. The transactional database test fixtures were rolled back.
