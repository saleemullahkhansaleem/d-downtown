// Video Assets
export const videoAssets = {
  // Main drone videos
  aerialOverview: "/src/assets/videos/aerial-overview.mp4",
  commercialWalkthrough: "/src/assets/videos/commercial-walkthrough.mp4",
  infrastructureProgress: "/src/assets/videos/infrastructure-progress.mp4",

  // Thumbnail images for videos
  aerialThumbnail: "/src/assets/videos/thumbnails/aerial-thumbnail.webp",
  walkthroughThumbnail:
    "/src/assets/videos/thumbnails/walkthrough-thumbnail.webp",
  infrastructureThumbnail:
    "/src/assets/videos/thumbnails/infrastructure-thumbnail.webp",
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
