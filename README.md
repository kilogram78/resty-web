# Resty Web Application

Next.js web application for the Resty booking platform.

## Features

- User authentication (Sign up / Sign in)
- Dashboard for different user roles
- Lodge search and booking (coming soon)
- Admin dashboards (coming soon)
- Agent tools (coming soon)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Backend**: Supabase
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase project

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment variables**
   
   Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
web/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── login/             # Login page
│   ├── signup/            # Signup page
│   └── dashboard/         # User dashboard
├── lib/                    # Utility functions
│   └── supabase/          # Supabase client configuration
│       ├── client.ts      # Browser client
│       ├── server.ts     # Server client
│       └── middleware.ts # Auth middleware
└── middleware.ts          # Next.js middleware for auth
```

## Deployment

### Vercel

1. Push your code to GitHub
2. Import the repository in Vercel
3. Set root directory to `web`
4. Add environment variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
5. Deploy

The `vercel.json` file is already configured for optimal Next.js deployment.

## Development

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon key | Yes |

## Next Steps

- Implement lodge search functionality
- Add booking flow
- Create admin dashboards
- Add payment integration
- Implement notifications
