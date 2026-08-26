// import { useMemo, useState } from "react";
// import Navbar from "./components/Navbar";
// import Sidebar from "./components/Sidebar";
// import CategoryBar from "./components/CategoryBar";
// import VideoGrid from "./components/VideoGrid";
// import { videos, categories } from "./data/videos";

// export default function App() {
//   const [mobileNavOpen, setMobileNavOpen] = useState(false);
//   const [searchOpen, setSearchOpen] = useState(false);
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredVideos = useMemo(() => {
//     if (activeCategory === "All") return videos;
//     // Simple demo filter: category "React JS" matches React-related titles, etc.
//     // For categories with no direct match in the sample data, show a subset.
//     const keyword = activeCategory.toLowerCase();
//     const matched = videos.filter(
//       (v) =>
//         v.title.toLowerCase().includes(keyword) ||
//         v.channel.toLowerCase().includes(keyword)
//     );
//     return matched.length > 0 ? matched : videos.slice(0, 4);
//   }, [activeCategory]);

//   return (
//     <div className="min-h-screen bg-white">
//       <Navbar
//         onMenuClick={() => setMobileNavOpen(true)}
//         searchOpen={searchOpen}
//         setSearchOpen={setSearchOpen}
//       />

//       {/* Mobile drawer sidebar */}
//       <Sidebar mode="overlay" open={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />
//       {/* Desktop mini sidebar (md) */}
//       <Sidebar mode="mini" />
//       {/* Desktop full sidebar (lg+) */}
//       <Sidebar mode="full" />

//       <main className="pt-14 md:pl-[72px] lg:pl-60">
//         <CategoryBar categories={categories} active={activeCategory} onSelect={setActiveCategory} />
//         <div className="px-4 py-4 sm:px-6">
//           <VideoGrid videos={filteredVideos} />
//         </div>
//       </main>
//     </div>
//   );
// }


import Counter from './components/counter'

const App = () => {
  return (
    <Counter /> 
  )
}

export default App