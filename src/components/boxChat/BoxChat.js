import Chat, { Bubble, useMessages } from '@chatui/core'
import '@chatui/core/dist/index.css'
import { FiSearch } from 'react-icons/fi'

const ChatBox = () => {
  const { messages, appendMsg, setTyping } = useMessages([
    {
      type: 'text',
      hasTime: true,
      content: { text: 'Chào cô' },
      position: 'right'
    },
    {
      type: 'text',
      content: { text: 'Tôi muốn mua 1 áo dài.' }
    },
    {
      type: 'text',
      content: { text: 'Cảm ơn cô đã gửi tin nhắn cho chúng tôi!' },
      position: 'right'
    }
  ])

  function handleSend(type, val) {
    if (type === 'text' && val.trim()) {
      appendMsg({
        type: 'text',
        content: { text: val },
        position: 'right'
      })

      setTyping(true)

      setTimeout(() => {
        appendMsg({
          type: 'text',
          content: { text: 'Bala bala' }
        })
      }, 1000)
    }
  }

  function renderMessageContent(msg) {
    const { content } = msg
    return (
      <Bubble
        content={content.text}
        style={{ background: '#5E9CFF', color: 'white' }}
      />
    )
  }

  return (
    <Chat
      placeholder='Type your message...'
      style={{ width: '100%', hight: '100%', background: 'white' }}
      navbar={{
        title: (
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <h3 style={{ marginRight: '10px' }}>Nguyễn Thị Mai Loan</h3>
            <FiSearch />
          </div>
        )
      }}
      messages={messages}
      renderMessageContent={renderMessageContent}
      onSend={handleSend}
      locale='vietnamese'
    />
  )
}

export default ChatBox
