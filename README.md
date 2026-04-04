# Gatsby + Tailwind CSS + shadcn/ui

A modern, production-ready Gatsby starter with Tailwind CSS and shadcn/ui components pre-configured.

## ✨ Features

- **Gatsby 5** - Latest version with improved performance and features
- **TypeScript** - Full TypeScript support for type safety
- **Tailwind CSS v4** - Latest version with CSS-first configuration
- **shadcn/ui** - Beautiful, accessible component library built on Radix UI
- **Path Aliases** - Clean imports with `@/` prefix
- **Dark Mode Ready** - CSS variables configured for easy theming with `@theme` directive

## 🚀 Quick Start

1. **Install dependencies**

   ```bash
   npm install
   ```

2. **Start development server**

   ```bash
   npm run develop
   ```

   Your site is now running at `http://localhost:8000`

3. **Build for production**

   ```bash
   npm run build
   ```

4. **Serve production build**

   ```bash
   npm run serve
   ```

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/           # shadcn/ui components
│   │       ├── button.tsx
│   │       └── card.tsx
│   ├── lib/
│   │   └── utils.ts      # Utility functions (cn helper)
│   ├── pages/
│   │   ├── index.tsx     # Home page
│   │   └── 404.tsx       # 404 page
│   └── styles/
│       └── global.css    # Global styles with Tailwind directives
├── gatsby-config.ts      # Gatsby configuration
├── gatsby-node.ts        # Webpack aliases configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── components.json       # shadcn/ui configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Adding shadcn/ui Components

You can add more shadcn/ui components using the CLI:

```bash
npx shadcn-ui@latest add [component-name]
```

For example:

```bash
npx shadcn-ui@latest add dialog
npx shadcn-ui@latest add dropdown-menu
npx shadcn-ui@latest add input
```

Browse all available components at [ui.shadcn.com](https://ui.shadcn.com)

## 🛠️ Configuration

### Tailwind CSS

Tailwind is configured in `tailwind.config.js` with:

- CSS variables for theming
- Custom color palette
- Dark mode support
- Custom animations

### Path Aliases

Import components using the `@/` prefix:

```typescript
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
```

### TypeScript

TypeScript is configured with strict mode and path aliases in `tsconfig.json`

## 📚 Learn More

- [Gatsby Documentation](https://www.gatsbyjs.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## � Deployment

This site can be deployed to any static hosting service:

- [Netlify](https://www.netlify.com/)
- [Vercel](https://vercel.com/)
- [GitHub Pages](https://pages.github.com/)
- [Gatsby Cloud](https://www.gatsbyjs.com/products/cloud/)

## 📝 Available Scripts

- `npm run develop` - Start development server
- `npm run build` - Build for production
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache
- `npm run typecheck` - Run TypeScript type checking
