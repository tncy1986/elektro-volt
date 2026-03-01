# Firmen-Seite - Next.js Application

This is a modern Next.js application for an electrical services company.

## Project Documentation

- Full architecture & flow documentation: [PROJECT_DOCUMENTATION.md](./PROJECT_DOCUMENTATION.md)
- Image license tracking: [IMAGE_LICENSES.md](./IMAGE_LICENSES.md)

## Features

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Google Gemini AI** integration for emergency analysis
- **Responsive Design** - works on mobile, tablet, and desktop
- **SEO Optimized** with proper metadata

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables:
   - Copy `.env.local` and update with your values
   - Add your `GEMINI_API_KEY` for AI features

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

### Build

Build for production:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## Project Structure

```
firmen-seite/
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── layout.tsx         # Root layout with Header/Footer
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── WhyUs.tsx
│   ├── Contact.tsx
│   └── EmergencyAssistant.tsx
├── lib/                   # Utilities and configuration
│   ├── config.ts          # Single source of truth for company data
│   └── geminiService.ts   # Gemini AI integration
└── public/               # Static assets
```

## Environment Variables

All company information can be customized via environment variables:

- `NEXT_PUBLIC_COMPANY_NAME` - Company name
- `NEXT_PUBLIC_COMPANY_PHONE` - Phone number
- `NEXT_PUBLIC_COMPANY_EMAIL` - Email address
- `GEMINI_API_KEY` - Google Gemini API key (server-side)

## Routes

- `/` - Home page
- `/leistungen` - Services page
- `/ueber-uns` - About page
- `/kontakt` - Contact page
- `/impressum` - Imprint
- `/datenschutz` - Privacy policy

## API Routes

- `POST /api/analyze-emergency` - Analyze electrical emergencies with AI

## Technologies

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Lucide React](https://lucide.dev/) - Icons
- [Google Gemini AI](https://ai.google.dev/) - AI assistance

## License

This is a demo application.
