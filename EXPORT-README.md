# MULA project source export

This archive includes the website source, package lockfile, project configuration,
booking widget (including the latest fixes), required image/font assets, and the
mockup sandbox source.

Not included: node_modules, build output, Git history, local tooling, credentials,
live database records/CMS edits, and unused original uploads/design drafts.
The uploads folder was empty when exported. This is a source handoff, not a full
backup of the deployed website or its database.

## Run locally
Use Node.js 20 or newer.
1. Run npm ci from this folder.
2. Supply DATABASE_URL (PostgreSQL) and SESSION_SECRET securely in the environment.
   They are deliberately not included in this archive. Do not commit their values.
3. For a new empty database, review shared/schema.ts, then run npm run db:push.
   Do not run this against an existing production database without reviewing changes.
4. Run npm run dev. The default port is 5000.

Build: npm run build
Production server: npm start (requires the environment variables above).

A new database does not contain the live site's admin content. Migrating that data
requires a separate, authorized export. This archive does not perform a migration.

## Booking integration
The panel still connects to the live Flux service. Test submissions can create real
appointments. Intercept booking requests or use a suitable test environment when testing.
The /#afspraak direct link and repeat-booking country fallback are included.

## GitHub
Unzip first, then upload the source files if using GitHub's browser uploader.
Uploading this ZIP itself only stores the ZIP; GitHub does not unpack it automatically.
