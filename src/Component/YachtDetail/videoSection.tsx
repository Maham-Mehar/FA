import React from "react";
import { Yacht } from "../YachtDetail/hero";

type Props = {
  data: Yacht | null;
};

// Utility function to convert YouTube watch URLs to embed URLs
const getEmbedLink = (url: string): string => {
  try {
    const parsedUrl = new URL(url);
    const videoId = parsedUrl.searchParams.get("v");

    if (url.includes("youtube.com/watch") && videoId) {
      return `https://www.youtube.com/embed/${videoId}`;
    }

    // Add more conditions for other platforms if needed
    return url;
  } catch (error) {
    console.warn("Invalid video URL:", url);
    return url;
  }
};

const VideoSection: React.FC<Props> = ({ data }) => {
  if (!data?.videoLink) return null;

  const isMp4 = data.videoLink.includes(".mp4");
  const embedUrl = getEmbedLink(data.videoLink);

  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex justify-center">
        {data.videoLink && (
          <div className="relative w-full max-w-7xl h-[300px] md:h-[360px] lg:h-[400px] xl:h-[550px] overflow-hidden shadow-lg rounded-lg">
            {isMp4 ? (
              <video
                controls
                className="w-full h-full rounded-lg"
                poster="/images/video-placeholder.jpg"
              >
                <source src={data.videoLink} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <iframe
                src={embedUrl}
                className="w-full aspect-video rounded-lg"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="Yacht Video"
              />
            )}
          </div>
        )}

      </div>
    </section>
  );
};

export default VideoSection;
