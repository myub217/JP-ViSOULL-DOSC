// ✅ src/components/common/SocialIcons.tsx — Production Ready with SVG for LINE & Messenger

import { FC } from "react";

const socials = [
  {
    href: "https://m.me/61573307616115?hash=AbZf0L5cSZ8XvIYw&source=qr_link_share",
    label: "Messenger",
    svg: (
      <svg viewBox="0 0 32 32" fill="currentColor" className="w-5 h-5">
        <path d="M16 2.903c-7.15 0-12.96 4.903-12.96 10.946 0 3.44 1.89 6.495 4.944 8.518v4.77l4.518-2.491c1.021.15 2.047.225 3.083.223 7.149 0 12.958-4.904 12.958-10.948S23.15 2.903 16 2.903zm.375 12.948l-3.027-3.234-6.731 3.234 7.457-7.944 3.004 3.234 6.754-3.234-7.457 7.944z" />
      </svg>
    ),
  },
  {
    href: "https://lin.ee/gVptUhR",
    label: "LINE",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M2.004 11.917c0-4.971 4.94-9.005 11-9.005s11 4.034 11 9.005-4.94 9.005-11 9.005c-1.048 0-2.061-.137-3.01-.392L2 22l.004-10.083zm13.245-1.272c0-.2-.06-.352-.18-.473s-.294-.181-.522-.181h-1.515v3.012h.62v-.98h.522c.227 0 .4-.061.52-.18.12-.12.18-.274.18-.462zm-2.553 2.12v-3.013h-.627v1.237h-.982v-1.237h-.625v3.013h.625v-1.258h.982v1.258zm-3.401 0v-2.496h.935v-.517H6.643v.517h.933v2.496zm-2.445 0v-2.496h.933v-.517H4.2v.517h.933v2.496z" />
      </svg>
    ),
  },
  {
    href: "https://jp-system.dev",
    label: "Website",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.476 2 2 6.486 2 12s4.476 10 10 10 10-4.486 10-10S17.524 2 12 2zm0 18a7.95 7.95 0 01-6.364-3.132c.288-.49.654-.957 1.095-1.39a9.993 9.993 0 0010.538 0c.44.433.807.9 1.094 1.39A7.95 7.95 0 0112 20zm0-16a7.948 7.948 0 016.364 3.13c-.287.492-.654.96-1.096 1.392a9.993 9.993 0 00-10.538 0A7.948 7.948 0 0112 4z" />
      </svg>
    ),
  },
] as const;

const SocialIcons: FC = () => (
  <div className="flex items-center gap-4">
    {socials.map(({ href, label, svg }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        title={label}
        className="text-base-content/60 hover:text-primary transition-colors duration-200"
      >
        {svg}
      </a>
    ))}
  </div>
);

export default SocialIcons;
