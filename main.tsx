# TDI Factor + Clerk update

This version wires the preview into Clerk so the site opens behind a real login instead of the fake mock login.

## What changed
- Added `@clerk/react`
- Wrapped the app in `ClerkProvider`
- Replaced the fake login form with Clerk's real `<SignIn />` component
- Kept the dashboard and coin detail behind signed-in state
- Added `.env.example` so Vercel can use your Clerk publishable key

## Important
Right now, if sign-up is enabled in Clerk, the sign-in box can also let new users sign up. After you create your own first user, you can turn sign-up off in Clerk if you want the site to be invite-only.
