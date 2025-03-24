# Modern Frontend Template

A minimal template for frontend projects using:

- Vite
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui
- Ladle (for component development)

## Features

- ⚡️ **Fast development** with Vite's Hot Module Replacement
- 🧩 **Component-driven development** with Ladle
- 🎨 **Beautiful UI components** with shadcn/ui and Tailwind CSS
- 📝 **Type safety** with TypeScript

## Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone this repository or use it as a template:

```bash
# Using Git
git clone https://github.com/yourusername/modern-frontend-template.git
cd modern-frontend-template

# Or create a new project from this template
# (This depends on your preferred method for project initialization)
```

2. Install dependencies:

```bash
npm install
# or
yarn
```

### Development

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Start the Ladle component explorer:

```bash
npm run ladle
# or
yarn ladle
```

### Building for Production

Build the application:

```bash
npm run build
# or
yarn build
```

Build the Ladle component documentation:

```bash
npm run ladle:build
# or
yarn ladle:build
```

## Project Structure

```
/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── ui/          # shadcn/ui components
│   │   └── *.stories.tsx # Component stories for Ladle
│   ├── lib/             # Utility functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global CSS including Tailwind
├── .ladle/              # Ladle configuration
├── components.json      # shadcn/ui configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## Adding shadcn/ui Components

This template includes a few shadcn/ui components already. To add more components:

```bash
npx shadcn-ui add [component-name]
```

For example:

```bash
npx shadcn add alert
npx shadcn add dropdown-menu
```

## Creating New Components

1. Create your component in `src/components/`
2. Create a story file with the same name ending in `.stories.tsx`
3. View your component in Ladle with `npm run ladle`

## Customization

### Tailwind Configuration

Edit `tailwind.config.js` to customize your design tokens.

### shadcn/ui Theme

The default shadcn/ui theme is included. You can modify colors in:

- `src/index.css` (CSS variables)
- `tailwind.config.js` (Tailwind configuration)

## License

This project is licensed under the MIT License - see the LICENSE file for details.
