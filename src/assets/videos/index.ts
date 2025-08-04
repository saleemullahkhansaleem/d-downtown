// Video Assets
import aerialOverviewVideo from "./aerial-overview.mp4";
import commercialWalkthroughVideo from "./commercial-walkthrough.mp4";
import infrastructureProgressVideo from "./infrastructure-progress.mp4";

// Thumbnail images for videos
import aerialThumbnailImage from "./thumbnails/aerial-thumbnail.webp";
import walkthroughThumbnailImage from "./thumbnails/walkthrough-thumbnail.webp";
import infrastructureThumbnailImage from "./thumbnails/infrastructure-thumbnail.webp";

export const videoAssets = {
  // Main drone videos
  aerialOverview: aerialOverviewVideo,
  commercialWalkthrough: commercialWalkthroughVideo,
  infrastructureProgress: infrastructureProgressVideo,

  // Thumbnail images for videos
  aerialThumbnail: aerialThumbnailImage,
  walkthroughThumbnail: walkthroughThumbnailImage,
  infrastructureThumbnail: infrastructureThumbnailImage,
};

// Video metadata
export const videoMetadata = {
  aerialOverview: {
    title: "D-DOWNTOWN Aerial Overview",
    description:
      "Comprehensive aerial view showing both interior and exterior perspectives of all 6 commercial plazas, highlighting the strategic layout and surrounding area",
    duration: "3:30",
    size: "13.0 MB",
    format: "MP4",
    resolution: "4K",
  },
  commercialWalkthrough: {
    title: "Detailed Commercial Walkthrough",
    description:
      "In-depth visual tour showcasing premium commercial spaces, unit layouts, and modern infrastructure with close-up details of every aspect",
    duration: "5:45",
    size: "18.0 MB",
    format: "MP4",
    resolution: "4K",
  },
  infrastructureProgress: {
    title: "Facade & Structure Showcase",
    description:
      "Professional showcase of D-DOWNTOWN's architectural facade, building structure, and construction progress with modern design elements",
    duration: "1:45",
    size: "2.0 MB",
    format: "MP4",
    resolution: "4K",
  },
};

export default {
  videoAssets,
  videoMetadata,
};
