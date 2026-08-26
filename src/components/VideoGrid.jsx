import VideoCard from "./VideoCard";

export default function VideoGrid({ videos }) {
  if (videos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center text-gray-500">
        <p className="text-lg font-medium">No videos in this category yet</p>
        <p className="text-sm">Try a different filter.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {videos.map((video) => (
        <VideoCard key={video.id} video={video} />
      ))}
    </div>
  );
}
