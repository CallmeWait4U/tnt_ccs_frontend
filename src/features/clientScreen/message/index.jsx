import { useMutation } from '@tanstack/react-query'
import { Card, Col, Row } from 'antd'
import React, { useState } from 'react'
import { Button, Input, MessageList } from 'react-chat-elements'
import { useGetMessage, useSendMessage } from '../../../api/Customer/chat'

const ClientMessage = () => {
  const { data: messageList, refetch } = useGetMessage()
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
        // receiverUUID: '0f01e4a8-c28b-417a-868a-ae54cfe20438',
        receiverUUID: 'ae9911ca-871a-4049-970c-e99e07ac740a',
        content: message
      })
    }
    setMessage('')
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
              title: message.isSender ? null : message.senderUsername
            }))}
        />
      )}
      <Row style={{ paddingTop: '8px' }}>
        <Col
          span={23}
          style={{ border: '2px solid #d9d9d9', borderRadius: '6px' }}
        >
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
        <Col
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}
        >
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

export default ClientMessage
