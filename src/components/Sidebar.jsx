import { primaryLinks, secondaryLinks, exploreLinks, subscriptions } from "../data/sidebar";

function MiniLink({ icon: Icon, label, active }) {
  return (
    <button
      className={`flex w-full flex-col items-center gap-0.5 rounded-lg py-4 text-[10px] hover:bg-gray-100 ${
        active ? "font-semibold text-gray-900" : "text-gray-700"
      }`}
    >
      <Icon size={22} />
      <span>{label}</span>
    </button>
  );
}

function FullLink({ icon: Icon, label, active }) {
  return (
    <button
      className={`flex w-full items-center gap-5 rounded-lg px-3 py-2.5 text-sm hover:bg-gray-100 ${
        active ? "bg-gray-100 font-medium text-gray-900" : "text-gray-800"
      }`}
    >
      <Icon size={20} />
      <span>{label}</span>
    </button>
  );
}

function SectionDivider() {
  return <hr className="my-3 border-gray-200" />;
}

export default function Sidebar({ mode, open, onClose }) {
  // mode: "full" (desktop expanded), "mini" (desktop collapsed), "overlay" (mobile drawer)

  if (mode === "mini") {
    return (
      <aside className="fixed top-14 left-0 hidden h-[calc(100vh-56px)] w-[72px] overflow-y-auto bg-white pt-1 md:block lg:hidden">
        {primaryLinks.map((l) => (
          <MiniLink key={l.label} {...l} active={l.label === "Home"} />
        ))}
      </aside>
    );
  }

  const content = (
    <div className="h-full overflow-y-auto px-2 pb-6">
      <div className="pt-1">
        {primaryLinks.map((l) => (
          <FullLink key={l.label} {...l} active={l.label === "Home"} />
        ))}
      </div>
      <SectionDivider />
      <div>
        {secondaryLinks.map((l) => (
          <FullLink key={l.label} {...l} />
        ))}
      </div>
      <SectionDivider />
      <p className="px-3 pb-1 text-sm font-semibold text-gray-900">Subscriptions</p>
      <div>
        {subscriptions.map((s) => (
          <button
            key={s.name}
            className="flex w-full items-center gap-5 rounded-lg px-3 py-2 text-sm text-gray-800 hover:bg-gray-100"
          >
            <img src={s.avatar} alt={s.name} className="h-6 w-6 rounded-full" />
            <span className="truncate">{s.name}</span>
          </button>
        ))}
      </div>
      <SectionDivider />
      <p className="px-3 pb-1 text-sm font-semibold text-gray-900">Explore</p>
      <div>
        {exploreLinks.map((l) => (
          <FullLink key={l.label} {...l} />
        ))}
      </div>
      <SectionDivider />
      <div className="px-3 text-xs leading-5 text-gray-500">
        <p>About Press Copyright Contact us Creators</p>
        <p className="mt-2">Advertise Developers Terms Privacy Policy &amp; Safety</p>
        <p className="mt-3">&copy; 2026 YouTube Clone — built for a course assignment</p>
      </div>
    </div>
  );

  if (mode === "overlay") {
    return (
      <>
        <div
          className={`fixed inset-0 z-40 bg-black/40 transition-opacity md:hidden ${
            open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
          onClick={onClose}
        />
        <aside
          className={`fixed top-0 left-0 z-50 h-full w-64 transform bg-white pt-14 shadow-xl transition-transform duration-200 md:hidden ${
            open ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {content}
        </aside>
      </>
    );
  }

  // full desktop sidebar
  return (
    <aside className="fixed top-14 left-0 hidden h-[calc(100vh-56px)] w-60 bg-white pt-1 lg:block">
      {content}
    </aside>
  );
}
