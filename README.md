# AUTOMA SECURITY — Next.js frontend

## Run
```bash
npm install
npm run dev        # http://localhost:3000
```
If you ever see odd cache errors: delete the `.next` folder and restart.

## Configure the two product links (edit `.env.local`, then restart)
- `NEXT_PUBLIC_ANTIVIRUS_EXE_URL`  → direct URL of the hosted .exe
- `NEXT_PUBLIC_SCANNER_EXTERNAL_URL` → URL of the hosted scanner site

If empty, the buttons show a "not configured" message instead of faking anything.

All dashboard/admin data comes from `lib/mock-data.ts` and is labeled as sample data.
Login/register/contact forms are frontend-only (no backend yet).
