import React, { createContext, useState } from 'react'
import { Message } from '../UI/Components'

export const MessageContext = createContext()

export const MessageProvider = ({ children }) => {
	const [message, setMessage] = useState({type: '', message: ''})

	console.log('yoyoyo')
	return (
		<MessageContext.Provider value={setMessage}>
			<Message message={message} />
			{children}
		</MessageContext.Provider>
	)
}

export default MessageContext