// Main assets index - exports all asset categories
export { default as backgroundImages } from "./backgrounds";
export { default as logoImages } from "./logos";
export { default as iconImages } from "./icons";
export { teamImages } from "./images/team";
export { videoAssets, videoMetadata } from "./videos";

// Re-export specific images for backward compatibility
export { backgroundImages as heroImages } from "./backgrounds";
