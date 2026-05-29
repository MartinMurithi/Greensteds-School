/**
 * Font CSS variables — defined here for TypeScript reference.
 * Actual font loading is handled in layout.tsx via <link> tags
 * for build-environment compatibility.
 *
 * On Vercel production, switch to next/font/google for optimal performance.
 * See README.md for instructions.
 */
export const fontVariables = "--font-playfair: 'Playfair Display', Georgia, serif; --font-inter: 'Inter', system-ui, sans-serif;";

// CSS class names to apply to <html> element
export const playfairClass = "font-playfair-loaded";
export const interClass    = "font-inter-loaded";
