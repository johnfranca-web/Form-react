import { BadgeCheck } from "lucide-react";

export default function VideoCard({ video }) {
  const { title, channel, views, time, duration, thumbnail, avatar, verified } = video;

  return (
    <div className="flex w-full cursor-pointer flex-col">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-gray-200">
        <img
          src={thumbnail}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-[1.02]"
        />
        <span className="absolute bottom-1 right-1 rounded bg-black/80 px-1 py-0.5 text-xs font-medium text-white">
          {duration}
        </span>
      </div>
      <div className="mt-3 flex gap-3">
        <img
          src={avatar}
          alt={channel}
          className="h-9 w-9 flex-shrink-0 rounded-full"
        />
        <div className="min-w-0">
          <h3 className="line-clamp-2 text-sm font-medium leading-5 text-gray-900">
            {title}
          </h3>
          <div className="mt-1 flex items-center gap-1 text-xs text-gray-600">
            <span className="truncate">{channel}</span>
            {verified && <BadgeCheck size={13} className="flex-shrink-0 text-gray-500" />}
          </div>
          <p className="text-xs text-gray-600">
            {views} &middot; {time}
          </p>
        </div>
      </div>
    </div>
  );
}
