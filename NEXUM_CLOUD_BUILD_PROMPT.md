# NEXUM CLOUD — MASTER BUILD PROMPT

Act as the lead product designer, creative developer, frontend engineer, 3D/WebGL engineer and QA engineer for Nexum Cloud.

## Mission
Build a premium Russian-language digital studio website that is itself a technology showcase. It must preserve the editorial, Apple/iOS-glass, premium-studio character of the former Nexum Digital site, but become substantially more interactive and technically demonstrative.

The website is not a static agency brochure. It is a living showroom for Nexum capabilities: web products, UI, 3D, WebGL, motion, AI, automation and digital systems.

## Visual direction
- Light-first, white / warm-neutral palette.
- Apple editorial + premium digital studio.
- Liquid-glass navigation and controls, restrained shadows, thin borders.
- Large typography, generous whitespace, cinematic composition.
- No generic SaaS dashboard aesthetic.
- No excessive gradients, neon, cyberpunk or dark gaming styling.
- Russian copy throughout the public experience.
- Responsive from 320px to 1920px.

## Technology
- React + TypeScript + Vite.
- Three.js / React Three Fiber / Drei for realtime 3D.
- GSAP may be used for production motion.
- 3D assets must be replaceable through a predictable public asset structure.
- Prefer progressive enhancement and graceful fallback when WebGL is unavailable.

## Required experience
1. Hero: editorial statement + interactive realtime 3D scene.
2. Capability manifesto explaining that the site itself demonstrates technology.
3. Services/capabilities grid.
4. Interactive showcase sections, not just static cards.
5. Dedicated 3D / WebGL / Motion / AI / Products capability areas.
6. Project showcase architecture that can later host Nexum.dev, Nexum Core and Gruzli.
7. Contact CTA.
8. Smooth but restrained motion and scroll choreography.
9. Visible technical labels/metadata where useful, as a creative-director detail.
10. Strong mobile experience with reduced 3D complexity when needed.

## 3D direction
Create reusable scene primitives:
- glass / crystal object
- particles
- floating geometry
- gradient / environment lighting
- camera interaction
- pointer response
- scroll-driven scene state

Do not rely on external copyrighted models. The initial experience should work with procedural geometry. Later .glb/.gltf assets can be dropped into /public/assets/3d.

## Engineering rules
- Components must be modular.
- Avoid giant monolithic JSX.
- No fixed-position overlap hacks.
- No horizontal overflow.
- Respect prefers-reduced-motion.
- Avoid unnecessary rerenders.
- Keep DPR bounded for performance.
- Use Suspense/error-safe boundaries around complex 3D where practical.
- Never claim a build/test passed unless actually verified.
- After every meaningful implementation, inspect the resulting source and run available validation.
- Separate confirmed facts from assumptions.

## Quality target
The result should feel closer to a digital exhibition / Apple product launch / high-end interactive studio than a conventional agency template.

## Definition of done
The page builds successfully, has no obvious TypeScript issues, has no horizontal overflow, has a functional responsive layout, and the first screen immediately communicates that Nexum can create sophisticated digital experiences.
