# Quba Growth Lab – Landing Page

Next.js 14 (App Router) + Tailwind CSS 3 + TypeScript.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy

Push to GitHub, then import the repo on Vercel (zero config).

## Things to customise

Edit `lib/config.ts`:

- `BOOKING_URL` – your Calendly / Cal.com link for the strategy call
- `WHATSAPP_NUMBER` – optional, used for the lead form fallback
- `FORM_ENDPOINT` – optional Formspree/Getform URL. If empty, the form
  opens a pre-filled WhatsApp message (or email) so no lead is lost.
