// Background images
export const backgroundImages = {
  hero: new URL("./hero-bg.webp", import.meta.url).href,
  mr: new URL("./mr.png", import.meta.url).href,
};

// Backward compatibility export
export const heroImages = backgroundImages.hero;

export default backgroundImages;
