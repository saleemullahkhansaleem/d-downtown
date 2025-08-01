// Team images
import { teamImages } from "./team";
export { teamImages };

// Floor Plan Images
import { floorPlanImages } from "./floor-plans";
export { floorPlanImages };

// Commercial Units Images
import { commercialUnitImages } from "./commercial-units";
export const commercialImages = {
  units: commercialUnitImages,
};

// Location Images
export const locationImages = {
  // Add location images here
};

// Brand Images
export const brandImages = {
  // Add brand logos here
};

// Default export for easy importing
export default {
  team: { teamImages },
  floorPlans: floorPlanImages,
  commercial: commercialImages,
  location: locationImages,
  brands: brandImages,
};
