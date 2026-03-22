# Xyphora AI Website

A modern, attractive website for Xyphora AI - an AI development company.

## Features

- **Dark/Light Mode Toggle** - Users can switch between themes
- **Interactive Chatbot** - AI-powered inquiry chatbot for client questions
- **Responsive Design** - Works on all devices (mobile, tablet, desktop)
- **Smooth Animations** - Professional animations using Framer Motion
- **Modern UI** - Clean design with purple & cyan brand colors

## File Structure

```
xyphora-ai-website/
├── page.tsx              # Main website page (all sections)
├── layout.tsx            # Root layout with theme provider
├── globals.css           # Global styles and CSS variables
├── chatbot.tsx           # Interactive chatbot component
├── theme-provider.tsx    # Theme context provider
├── favicon.ico           # Website favicon
├── package.json          # Dependencies
├── README.md             # This file
└── xyphora-ai-brand/     # Brand assets (logos, colors, etc.)
```

## Installation

1. Create a new Next.js project:
```bash
npx create-next-app@latest xyphora-ai --typescript --tailwind --eslint
```

2. Copy all files to your project:
```
page.tsx      → src/app/page.tsx
layout.tsx    → src/app/layout.tsx
globals.css   → src/app/globals.css
chatbot.tsx   → src/components/chatbot.tsx
theme-provider.tsx → src/components/theme-provider.tsx
favicon.ico   → public/favicon.ico
```

3. Install dependencies:
```bash
npm install next-themes framer-motion lucide-react
npm install @radix-ui/react-slot class-variance-authority clsx tailwind-merge
```

4. Install shadcn/ui components:
```bash
npx shadcn@latest add button input textarea
```

5. Run the development server:
```bash
npm run dev
```

## Website Sections

1. **Navigation** - Sticky header with logo, links, theme toggle
2. **Hero Section** - Animated background, headline, CTAs
3. **Services** - 4 service cards (Web, App, Integration, Custom AI)
4. **Why Choose Us** - Stats and features
5. **About** - Company info and tech stack
6. **Portfolio** - Project showcase
7. **Testimonials** - Client reviews
8. **Contact** - Contact form and information
9. **Footer** - Links and social media
10. **Chatbot** - Floating AI assistant (bottom-right corner)

## Brand Colors

| Color | HEX | Usage |
|-------|-----|-------|
| Deep Purple | `#4A1D96` | Primary brand color |
| Electric Cyan | `#00D4FF` | Accent color |
| Dark Navy | `#0A1628` | Dark mode background |
| Soft Lavender | `#E8D5FF` | Light accents |

## Customization

### Change Colors
Edit `globals.css` to modify the color scheme:

```css
:root {
  --primary: #4A1D96;
  --accent: #E8D5FF;
}

.dark {
  --primary: #00D4FF;
  --background: #0A1628;
}
```

### Edit Chatbot Responses
Modify the `getBotResponse()` function in `chatbot.tsx` to customize bot answers.

### Update Content
Edit the content directly in `page.tsx`:
- Change testimonials
- Update portfolio projects
- Modify service descriptions
- Edit contact information

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: next-themes

## License

© 2025 Xyphora AI. All rights reserved.
