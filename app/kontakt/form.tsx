'use client'
import { FormEvent, useState } from "react"
import styles from './kontakt.module.css'

export const ContactForm = () => {
    const [isSubmitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log('Data', name, email, message)
        setSubmitted(true)
    }

    return (
        isSubmitted ? (
            <div>
                <h1>Hvala Vam na poruci!</h1>
            </div>
        ) : (
      <form onSubmit={onSubmit} className={styles.formContainer}>
        <input
            className={styles.formName}
            value={name} //binding input field with variable
            onChange = {(e) => setName(e.target.value)}
            type="text" 
            placeholder='Name' />
        <input
            className={styles.formEmail}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email" placeholder='Email' />
        <textarea
            className={styles.formText}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className={styles.formBtn} onSubmit={onSubmit}>Submit</button>
      </form>)
    )
  }