# Sharma & Associates - Law Firm Website

A production-ready Next.js 14 website for Sharma & Associates, a leading law firm in Chennai, India.

## 🚀 Features

- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **TypeScript** for type safety
- **MDX** for blog content
- **React Hook Form + Zod** for form validation
- **Nodemailer** for contact form emails
- **SEO optimized** with meta tags and structured data
- **Fully responsive** design
- **Accessibility** compliant (WCAG)
- **Dark blue + gold** premium law firm theme

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form handler
│   ├── blog/              # Blog pages
│   │   └── [slug]/        # Dynamic blog post pages
│   ├── cases/             # Case studies page
│   ├── contact/           # Contact page
│   ├── lawyers/           # Lawyers team page
│   ├── practice/          # Practice areas page
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── contact/           # Contact form components
│   ├── home/              # Home page sections
│   ├── layout/            # Navbar, Footer
│   └── ui/                # Reusable UI components
├── content/               # MDX blog content
│   └── blog/              # Blog posts
├── data/                  # JSON data files
│   ├── caseStudies.json   # Case study data
│   ├── lawyers.json       # Lawyers data
│   ├── practiceAreas.json # Practice areas data
│   ├── siteConfig.json    # Site configuration
│   └── testimonials.json  # Client testimonials
├── lib/                   # Utility functions
│   ├── blog.ts            # Blog utilities
│   ├── utils.ts           # General utilities
│   └── validations.ts     # Zod schemas
└── types/                 # TypeScript types
    └── index.ts
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-repo/sharma-associates.git
cd sharma-associates
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env.local
```

4. Update `.env.local` with your values (see Environment Variables below)

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

## 🔧 Environment Variables

Create a `.env.local` file with the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-specific-password
SMTP_FROM=noreply@sharmaassociates.in
CONTACT_EMAIL=contact@sharmaassociates.in

# Site URL
NEXT_PUBLIC_SITE_URL=https://sharmaassociates.in

# Google Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Gmail SMTP Setup

1. Enable 2-Factor Authentication on your Google account
2. Go to Security > App Passwords
3. Generate a new app password for "Mail"
4. Use this password as `SMTP_PASSWORD`

## 📸 Adding Images

Place images in the `public/images/` folder:

```
public/
└── images/
    ├── hero-bg.jpg          # Hero section background
    ├── cta-bg.jpg           # CTA section background
    ├── about-firm.jpg       # About page image
    ├── og-image.jpg         # Open Graph image
    ├── lawyers/             # Lawyer photos
    │   ├── sharma.jpg
    │   ├── kavitha.jpg
    │   └── arjun.jpg
    ├── blog/                # Blog post images
    └── cases/               # Case study images
```

Recommended image sizes:
- Hero/CTA backgrounds: 1920x1080px
- Lawyer photos: 600x800px
- Blog images: 1200x630px
- OG image: 1200x630px

## 🚀 Deployment to Vercel

### Option 1: Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Option 2: Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Login to Vercel:
```bash
vercel login
```

3. Deploy:
```bash
vercel --prod
```

### Environment Variables on Vercel

Add the following in Vercel Dashboard > Settings > Environment Variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASSWORD`
- `SMTP_FROM`
- `CONTACT_EMAIL`
- `NEXT_PUBLIC_SITE_URL`
- `NEXT_PUBLIC_GA_ID` (optional)

## 📝 Managing Content

### Blog Posts

Add new blog posts as MDX files in `src/content/blog/`:

```mdx
---
title: "Your Blog Post Title"
excerpt: "A brief description of the post"
date: "2024-12-15"
author: "Mr. R. Sharma"
category: "Criminal Law"
image: "/images/blog/your-image.jpg"
readTime: "8 min read"
---

Your blog content in Markdown...
```

### Updating Data

Edit the JSON files in `src/data/` to update:

- **siteConfig.json**: Contact info, hours, stats
- **practiceAreas.json**: Practice areas
- **lawyers.json**: Lawyer profiles
- **testimonials.json**: Client testimonials
- **caseStudies.json**: Case studies

## 🎨 Customization

### Colors

Edit `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  primary: {
    // Navy blue tones
    800: '#1a365d',
    900: '#0d1f3c',
  },
  accent: {
    // Gold tones
    500: '#c9a227',
    600: '#b8860b',
  },
}
```

### Fonts

The site uses:
- **Playfair Display** for headings
- **Inter** for body text

Modify in `src/app/layout.tsx`.

## 📱 Pages

| Route | Description |
|-------|-------------|
| `/` | Home page with all sections |
| `/about` | About the firm |
| `/practice` | Practice areas |
| `/lawyers` | Lawyer profiles |
| `/cases` | Case studies |
| `/blog` | Blog listing |
| `/blog/[slug]` | Individual blog post |
| `/contact` | Contact form |

## 🔒 Security

- Form validation with Zod
- Sanitized email content
- Rate limiting recommended for production
- HTTPS enforced on Vercel

## 📄 License

This project is private and proprietary to Sharma & Associates.

## 🤝 Support

For technical support, contact the development team.

# lawyer
# lawyer
