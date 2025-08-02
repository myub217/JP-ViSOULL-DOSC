// src/Home/common/ChatWidget.tsx
import { useEffect, useRef, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import clsx from 'clsx'

type Message = {
  from: 'user' | 'system'
  text: string
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const bottomRef = useRef<HTMLDivElement>(null)

  const toggleWidget = () => setIsOpen(prev => !prev)

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMessage: Message = { from: 'user', text: trimmed }
    setMessages(prev => [...prev, userMessage])
    setInput('')

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      })

      const data = await response.json()

      const reply: Message = {
        from: 'system',
        text: data.reply ?? '❌ ไม่สามารถตอบกลับได้ในขณะนี้',
      }

      setMessages(prev => [...prev, reply])
    } catch (err) {
      setMessages(prev => [
        ...prev,
        { from: 'system', text: '🚨 เกิดข้อผิดพลาดในการเชื่อมต่อเซิร์ฟเวอร์' },
      ])
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleSend()
  }

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={toggleWidget}
        className="p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary/80 transition"
        aria-label="Toggle Chat"
      >
        <MessageCircle size={24} />
      </button>

      <div
        className={clsx(
          'mt-2 w-80 max-h-[60vh] rounded-xl bg-white shadow-xl border border-gray-200 flex flex-col overflow-hidden transition-all duration-300',
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-4'
        )}
      >
        <div className="bg-primary text-white p-3 font-semibold text-sm">
          💬 ระบบตอบกลับอัตโนมัติ
        </div>

        <div className="flex-1 overflow-y-auto p-3 space-y-2 text-sm">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={clsx(
                'px-3 py-2 rounded-md whitespace-pre-line max-w-[90%]',
                msg.from === 'user'
                  ? 'bg-blue-100 text-right self-end ml-auto'
                  : 'bg-gray-100 text-left self-start mr-auto'
              )}
            >
              {msg.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        <div className="flex border-t p-2">
          <input
            type="text"
            className="flex-1 text-sm px-3 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="พิมพ์ข้อความของคุณ..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button
            onClick={handleSend}
            className="bg-primary text-white px-4 py-2 text-sm rounded-r hover:bg-primary/90 transition"
          >
            ส่ง
          </button>
        </div>
      </div>
    </div>
  )
}

export default ChatWidget