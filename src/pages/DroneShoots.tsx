import { useState, useEffect } from "react";
import {
  Camera,
  Video,
  MapPin,
  Star,
  Play,
  Download,
  Share2,
  Award,
  CheckCircle,
  MessageSquareText,
  X,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
} from "lucide-react";
import { PageHero, CTASection, SEO } from "../components";
import { videoAssets, videoMetadata } from "../assets/videos";

const DroneShoots = () => {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [videoError, setVideoError] = useState<string | null>(null);
  const [videoDurations, setVideoDurations] = useState<{
    [key: string]: string;
  }>({});

  // Function to format duration from seconds
  const formatDuration = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // Function to get video duration
  const getVideoDuration = (videoUrl: string, videoId: string) => {
    const video = document.createElement("video");
    video.src = videoUrl;
    video.preload = "metadata";

    video.onloadedmetadata = () => {
      const duration = formatDuration(video.duration);
      setVideoDurations((prev) => ({
        ...prev,
        [videoId]: duration,
      }));
    };
  };

  // Load video durations on component mount
  useEffect(() => {
    visualContent.forEach((content) => {
      getVideoDuration(content.videoUrl, content.id);
    });
  }, []);

  // Prevent body scrolling when video modal is open
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedVideo]);
  const droneServices = [
    {
      icon: Camera,
      title: "Aerial Photography",
      description:
        "High-resolution aerial shots showcasing D-DOWNTOWN's architectural excellence and strategic location",
      features: ["4K Resolution", "360° Coverage", "Professional Editing"],
    },
    {
      icon: Video,
      title: "Cinematic Videos",
      description:
        "Immersive video content capturing the dynamic atmosphere and commercial potential of our project",
      features: [
        "Smooth Transitions",
        "Professional Narration",
        "Multiple Angles",
      ],
    },
    {
      icon: MapPin,
      title: "Location Showcase",
      description:
        "Comprehensive visual documentation of our prime location and surrounding landmarks",
      features: [
        "Landmark Integration",
        "Accessibility Views",
        "Traffic Flow Analysis",
      ],
    },
  ];

  const visualContent = [
    {
      id: "aerialOverview",
      title: videoMetadata.aerialOverview.title,
      description: videoMetadata.aerialOverview.description,
      videoUrl: videoAssets.aerialOverview,
    },
    {
      id: "commercialWalkthrough",
      title: videoMetadata.commercialWalkthrough.title,
      description: videoMetadata.commercialWalkthrough.description,
      videoUrl: videoAssets.commercialWalkthrough,
    },
    {
      id: "infrastructureProgress",
      title: videoMetadata.infrastructureProgress.title,
      description: videoMetadata.infrastructureProgress.description,
      videoUrl: videoAssets.infrastructureProgress,
    },
  ];

  const testimonials = [
    {
      name: "Ahmed Khan",
      role: "Commercial Investor",
      content:
        "The drone footage helped me visualize the project's scale and potential. The location connectivity is perfectly captured.",
      rating: 5,
    },
    {
      name: "Fatima Ali",
      role: "Retail Business Owner",
      content:
        "The aerial views show exactly how accessible D-DOWNTOWN is from surrounding residential areas. Perfect for my business.",
      rating: 5,
    },
    {
      name: "Muhammad Hassan",
      role: "Property Consultant",
      content:
        "Professional quality visuals that effectively communicate the project's value proposition to potential investors.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-amber-50">
      <SEO
        title="Drone Shoots - D-DOWNTOWN Aerial Views & Progress"
        description="Experience D-DOWNTOWN from above with stunning drone footage. View aerial perspectives of our commercial development progress and strategic location in Rawalpindi."
        keywords="drone shoots, aerial views, D-DOWNTOWN progress, commercial development footage, Rawalpindi aerial, construction progress, aerial photography"
        url="/drone-shoots"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "VideoObject",
          name: "D-DOWNTOWN Drone Shoots",
          description:
            "Aerial views and progress footage of D-DOWNTOWN commercial development",
          url: "https://d-downtown.com/drone-shoots",
          uploadDate: "2024-12-15",
          publisher: {
            "@type": "Organization",
            name: "D-DOWNTOWN",
          },
          contentUrl: "https://d-downtown.com/drone-shoots",
          thumbnailUrl: "https://d-downtown.com/drone-thumbnail.jpg",
        }}
      />
      {/* Hero Section */}
      <PageHero
        icon={Camera}
        badgeText="Aerial Visuals"
        title="Experience D-DOWNTOWN from"
        gradientText="Above"
        description="Immerse yourself in stunning aerial photography and cinematic videos that showcase the scale, beauty, and strategic advantage of Rawalpindi's premier commercial hub."
        iconColor="text-amber-600"
      />

      {/* Main Content */}
      <section className="px-4 py-16">
        <div className="container mx-auto max-w-6xl">
          {/* Services Overview */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-amber-100 px-4 py-2 rounded-full mb-4">
              <Award className="w-5 h-5 text-blue-600" />
              <span className="text-blue-800 font-semibold text-sm">
                Professional Aerial Services
              </span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive Visual Documentation
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our professional drone services provide investors and businesses
              with detailed visual insights into every aspect of the D-DOWNTOWN
              project.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {droneServices.map((service, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-100 to-amber-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Visual Content Gallery */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Featured Visual Content
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore our collection of professional aerial footage and visual
                content showcasing D-DOWNTOWN's commercial excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {visualContent.map((content, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="w-full h-48 rounded-xl mb-4 relative overflow-hidden cursor-pointer group bg-gray-200"
                    onClick={() => setSelectedVideo(content.videoUrl)}
                  >
                    <img
                      src={
                        content.id === "aerialOverview"
                          ? videoAssets.aerialThumbnail
                          : content.id === "commercialWalkthrough"
                          ? videoAssets.walkthroughThumbnail
                          : videoAssets.infrastructureThumbnail
                      }
                      alt={content.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/30 transition-colors">
                        <Play className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded text-sm">
                      {videoDurations[content.id] || "Loading..."}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {content.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {content.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      Duration: {videoDurations[content.id] || "Loading..."}
                    </div>
                    <div className="flex space-x-2">
                      <button
                        className="p-2 bg-blue-100 rounded-lg hover:bg-blue-200 transition-colors"
                        onClick={() => setSelectedVideo(content.videoUrl)}
                      >
                        <Play className="w-4 h-4 text-blue-600" />
                      </button>
                      <button className="p-2 bg-green-100 rounded-lg hover:bg-green-200 transition-colors">
                        <Share2 className="w-4 h-4 text-green-600" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-8 text-white shadow-2xl mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-blue-100 max-w-2xl mx-auto">
                See how our professional aerial visuals have helped investors
                and businesses make informed decisions about D-DOWNTOWN.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                >
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-amber-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-blue-100 text-sm leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <p className="font-semibold text-white">
                      {testimonial.name}
                    </p>
                    <p className="text-blue-200 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/20">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Technical Excellence
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our drone services utilize cutting-edge technology to deliver
                professional-grade visual content that meets international
                standards.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl">
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">4K</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    Ultra-High Definition Resolution
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-green-50 to-green-100 rounded-xl">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">GPS</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    Precise Location Mapping
                  </span>
                </div>
                <div className="flex items-center space-x-3 p-4 bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl">
                  <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">HDR</span>
                  </div>
                  <span className="text-gray-800 font-medium">
                    High Dynamic Range Imaging
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-600 to-amber-800 rounded-3xl p-8 text-white shadow-2xl">
              <h2 className="text-3xl font-bold mb-6">Project Highlights</h2>
              <p className="text-amber-100 leading-relaxed mb-6">
                Our aerial visuals capture the essence of what makes D-DOWNTOWN
                Rawalpindi's most promising commercial investment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-amber-100">
                    Strategic location near Askari 14 and Adyala Road
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-amber-100">
                    6 well-planned commercial plazas with modern infrastructure
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-amber-100">
                    Surrounded by high footfall residential communities
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-amber-100">
                    RDA approved with complete legal compliance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Ready to See D-DOWNTOWN from Above?"
        subtitle="Professional Aerial Visuals"
        description="Get exclusive access to our comprehensive aerial footage and visual content. Contact us to schedule a personalized viewing session or request specific visual content for your investment analysis."
        badgeText="Get Visuals"
        badgeIcon={Camera}
        primaryAction={{
          text: "Schedule Viewing",
          href: "/contact-us",
          icon: MessageSquareText,
        }}
        secondaryAction={{
          text: "Download Brochure",
          href: "/contact-us",
          icon: Download,
        }}
      />

      {/* Video Modal */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedVideo(null);
              setIsFullscreen(false);
              setIsMuted(false);
            }
          }}
        >
          <div
            className={`relative bg-black rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 object-contain h-full ${
              isFullscreen ? "w-full h-full" : "max-w-6xl w-full max-h-[90vh]"
            }`}
          >
            {/* Video Header */}
            <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
              >
                {isMuted ? (
                  <VolumeX className="w-5 h-5" />
                ) : (
                  <Volume2 className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-5 h-5" />
                ) : (
                  <Maximize2 className="w-5 h-5" />
                )}
              </button>
              <button
                onClick={() => {
                  setSelectedVideo(null);
                  setIsFullscreen(false);
                  setIsMuted(false);
                  setIsVideoLoading(false);
                  setVideoError(null);
                }}
                className="p-2 bg-white/20 backdrop-blur-sm rounded-lg text-white hover:bg-white/30 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Video Player */}
            <video
              src={selectedVideo}
              className="w-full h-full object-contain"
              controls
              autoPlay
              muted={isMuted}
              preload="auto"
              controlsList="nodownload"
              onLoadStart={() => {
                setIsVideoLoading(true);
                setVideoError(null);
              }}
              onLoadedMetadata={(e) => {
                setIsVideoLoading(false);
                // Auto-play when video loads
                e.currentTarget.play().catch(() => {
                  // Handle autoplay restrictions
                });
              }}
              onCanPlay={(e) => {
                setIsVideoLoading(false);
                // Force controls to be visible
                e.currentTarget.controls = true;
              }}
              onError={(e) => {
                setIsVideoLoading(false);
                setVideoError("Failed to load video. Please try again.");
                console.error("Video loading error:", e);
              }}
            >
              Your browser does not support the video tag.
            </video>

            {/* Loading Overlay */}
            {isVideoLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p className="text-sm">Loading video...</p>
                </div>
              </div>
            )}

            {/* Error Overlay */}
            {videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                <div className="text-white text-center bg-red-600/80 p-6 rounded-lg">
                  <p className="text-sm mb-4">{videoError}</p>
                  <button
                    onClick={() => {
                      setVideoError(null);
                      setIsVideoLoading(true);
                      // Reload the video
                      const video = document.querySelector("video");
                      if (video) {
                        video.load();
                      }
                    }}
                    className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Retry
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DroneShoots;
