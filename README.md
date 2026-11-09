# HomeFeed Social

A standalone social app starter for the HomeFeed ecosystem. It is intentionally separate from the existing HomeFeed website and does not modify or connect to its production backend.

## Pages
- `/` Feed
- `/explore` Explore people, posts, and places
- `/create` Create a post with free-form caption, optional media URL, optional location, and optional @user tags
- `/notifications` Activity notifications placeholder
- `/messages` Messaging placeholder
- `/profile/:username` Profile page
- `/login` and `/signup` Authentication

Posts are independent of property listings. Property details can be written directly in a caption; no listing reference is required.

## Run locally
1. Install Node.js 20+ and MongoDB (local or hosted development database).
2. Backend: `cd backend && cp .env.example .env && npm install && npm run dev`
3. Frontend in another terminal: `cd frontend && npm install && cp .env.example .env && npm run dev`
4. Open `http://localhost:5173`.

Never commit `.env`, credentials, tokens, or real user data. Media currently uses URLs; connect a managed storage provider before accepting uploads. This is a development starter, not production-ready. Add validation, rate limits, moderation, tests, upload security, and deployment configuration before launch.
