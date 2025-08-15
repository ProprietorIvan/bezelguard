# Email Setup Instructions

This application uses a dual approach for handling email submissions from contact forms:

1. **NodeMailer API** - Primary method when running in development mode or with API routes enabled
2. **Formspree** - Fallback method when deployed as a static site with `output: export`

## API Route Method

When running in development mode or with API routes enabled, the application uses NodeMailer to send emails.

### Gmail Setup

1. If using Gmail, you'll need to create an App Password:
   - Go to your Google Account: https://myaccount.google.com/
   - Navigate to Security
   - Under "Signing in to Google," select "2-Step Verification" and turn it on
   - Go back to the Security page and select "App passwords"
   - Select "Mail" and "Other (Custom name)" and provide a name like "Riviera Yachts Website"
   - Click "Generate"
   - Use the generated password in your `.env.local` file

### Environment Variables

The following environment variables need to be set in `.env.local`:

```
SMTP_USER=ivanrogacheov@gmail.com
SMTP_PASSWORD=your-app-password-from-google
SMTP_FROM=Riviera Yachts <ivanrogacheov@gmail.com>
NEXT_PUBLIC_WEBSITE_URL=https://www.rivierayachts.com
```

Replace `your-app-password-from-google` with the password generated in the previous step.

## Formspree Method

When deployed as a static site with `output: export` in Next.js config, the application automatically falls back to using Formspree.

### Formspree Setup

1. A Formspree form has been set up with the ID: `mwkgyglj`
2. This form currently forwards submissions to: `ivanrogacheov@gmail.com`
3. The form includes custom fields for all the form data captured in the application

### Changing Formspree Configuration

To change the Formspree form or destination email:

1. Create a new form at [Formspree.io](https://formspree.io/)
2. Replace the form ID in the following files:
   - src/pages/contact/index.tsx
   - src/components/AskContactsForQuote.tsx
   - src/components/QuoteResult.tsx

## Testing

To test if emails are working:

1. Fill out any contact form on the website
2. Submit the form
3. Check the email inbox for the confirmation email
4. Also check the server console logs for any errors

## Deployment Configuration

### For Static Site Export (Vercel, Netlify, etc.)

When deploying as a static site:

- Keep `output: 'export'` in next.config.js
- Forms will automatically use Formspree

### For Server-Side Rendering

When deploying with server capabilities:

- Remove or comment out `output: 'export'` in next.config.js
- Set the required environment variables for NodeMailer
- Forms will use the NodeMailer API route

## Troubleshooting

If emails are not being sent:

1. Check that `SMTP_PASSWORD` is correctly set
2. Verify Gmail doesn't have any security blocks in place
3. Check the server logs for error messages
4. Ensure the Gmail account has "Less secure app access" enabled or is using an App Password
5. If using Gmail in a production environment, be aware of Gmail's sending limits
