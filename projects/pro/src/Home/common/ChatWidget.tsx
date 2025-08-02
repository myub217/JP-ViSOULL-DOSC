// ✅ src/Home/common/ChatWidget.tsx — Floating Chat Button (เชื่อมต่อ LINE / Messenger / อื่นๆ)

import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const ChatWidget = () => {
  const [open, setOpen] = useState(false);

  const toggleChat = () => setOpen((prev) => !prev);

  return (
    <>
      {/* ✅ Floating Button */}
      <button
        onClick={toggleChat}
        aria-label="เปิดปิดแชท"
        className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-secondary text-white shadow-lg hover:bg-secondary/90 transition"
      >
        {open ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
      </button>

      {/* ✅ Chat Panel (เชื่อมต่อภายนอก LINE OA หรือ Messenger) */}
      {open && (
        <div className="fixed bottom-20 right-6 z-50 w-72 max-w-xs rounded-xl border border-base-300 bg-white dark:bg-base-100 shadow-lg p-4">
          <h3 className="text-base font-semibold mb-2">แชทกับเรา</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://lin.ee/gVptUhR"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-md bg-green-500 text-white text-center hover:bg-green-600 transition"
              >
                📱 LINE: @462FQFC
              </a>
            </li>
            <li>
              <a
                href="https://m.me/61573307616115"
                target="_blank"
                rel="noopener noreferrer"
                className="block p-2 rounded-md bg-blue-600 text-white text-center hover:bg-blue-700 transition"
              >
                💬 Messenger
              </a>
            </li>
            <li>
              <a
                href="mailto:contact@jpsystem.dev"
                className="block p-2 rounded-md bg-neutral-800 text-white text-center hover:bg-neutral-700 transition"
              >
                📧 Email
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default ChatWidget;