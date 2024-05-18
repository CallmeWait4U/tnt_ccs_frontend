import { useMutation } from '@tanstack/react-query'
import { Card, Col, Row } from 'antd'
import React, { useState } from 'react'
import { Button, Input, MessageList } from 'react-chat-elements'
import {
  useGetMessageByCustomer,
  useSendMessage
} from '../../../api/Customer/chat'

const MessageBox = (uuid) => {
  // const { Title } = Typography
  const { data: messageList, refetch } = useGetMessageByCustomer(uuid)
  const { mutate: sendMessage } = useMutation({
    mutationFn: useSendMessage,
    onSuccess: () => {
      console.log('send message success')
      setMessage('')
      refetch()
      // After sending the message, you can fetch the updated message list if needed
    }
  })
  const [message, setMessage] = useState('')

  const handleMessageSend = () => {
    if (message.trim() !== '') {
      sendMessage({
        receiverUUID: uuid.uuid,
        content: message
      })
    }
  }

  return (
    <Card>
      {messageList && (
        <MessageList
          className='message-list'
          lockable={true}
          toBottomHeight={'100%'}
          dataSource={messageList.items
            .slice()
            .reverse()
            .map((message) => ({
              position: message.isSender ? 'right' : 'left',
              type: 'text',
              text: message.content,
              date: new Date(message.createdAt),
              title: message.senderUsername
            }))}
        />
      )}
      <Row>
        <Col span={22}>
          <Input
            placeholder='Type here...'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            multiline={true}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                handleMessageSend()
              }
            }}
          />
        </Col>
        <Col>
          <Button
            text={'Send'}
            onClick={() => handleMessageSend()}
            title='Send'
          />
        </Col>
      </Row>
    </Card>
  )
}

export default MessageBox
