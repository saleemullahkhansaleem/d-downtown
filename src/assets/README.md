# Assets Organization

This directory contains all static assets for the D-DOWNTOWN project, organized by type for better maintainability.

## Directory Structure

```
src/assets/
├── backgrounds/     # Background images and hero images
├── icons/          # Icon images (SVG, PNG)
├── images/         # General images and team photos
│   └── team/       # Team member profile images
├── logos/          # Logo files (SVG, PNG)
└── index.ts        # Main export file
```

## Usage

### Importing Assets

```typescript
// Import specific asset categories
import { backgroundImages, logoImages, teamImages } from "../assets";

// Import specific images
import { backgroundImages } from "../assets";
const heroImage = backgroundImages.hero;

// Import team images
import { teamImages } from "../assets";
const ceoImage = teamImages.khawarAbbasi;
```

### Asset Categories

#### Backgrounds (`/backgrounds`)

- Hero background images
- General background images
- **Files**: `hero-bg.webp`, `mr.png`

#### Logos (`/logos`)

- Company logos
- Brand assets
- **Files**: `logo.svg`, `logo-full.svg`

#### Icons (`/icons`)

- Icon images (SVG, PNG)
- Currently empty - add icons as needed

#### Images (`/images`)

- General project images
- Team member photos (`/images/team/`)
- Commercial unit images (future)
- Location images (future)
- Brand images (future)

## Adding New Assets

1. **Background Images**: Add to `/backgrounds/` and update `backgrounds/index.ts`
2. **Logos**: Add to `/logos/` and update `logos/index.ts`
3. **Icons**: Add to `/icons/` and update `icons/index.ts`
4. **Team Photos**: Add to `/images/team/` and update `images/team/index.ts`
5. **Other Images**: Add to appropriate subdirectory and update corresponding index file

## File Naming Convention

- Use kebab-case for file names: `hero-background.webp`
- Use camelCase for export names: `heroBackground`
- Use descriptive names that indicate the content

## Image Formats

- **WebP**: Preferred for web images (better compression)
- **SVG**: For logos and icons (scalable)
- **PNG**: For images requiring transparency
- **JPG**: For photographs when WebP is not supported

## Best Practices

1. Optimize images before adding to the project
2. Use appropriate formats for the content type
3. Keep file sizes reasonable for web performance
4. Update index files when adding new assets
5. Use descriptive names for better maintainability
