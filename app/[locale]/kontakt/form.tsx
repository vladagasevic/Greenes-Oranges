'use client'
import { FormEvent, useState } from "react"
import styles from './kontakt.module.css'
import Link from "next/link"

export const ContactForm = () => {
    const [isSubmitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        // const formData = new FormData(e.target);
        // if (formData.get("favorite_color") !== "") {
        //   // Form submission is spam
        //   console.log("Spam on Conntact")
        //   return;
        // }

        try{
            const res = await fetch('/api/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name, email, message
                }),
                headers: {
                    'content-type': 'application/json'
                }
            }) 

        } catch(err:any) {
            console.error('Err', err)
        }
        
        setSubmitted(true)
    }

    return (
        isSubmitted ? (
            <div>
                <h1><FormattedMessage id="pages.kontakt.hvala" /></h1>
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

        <input
            className={styles.orangeesPot}
            value={""}
            type="hidden" placeholder='Orangees' />

        <textarea
            className={styles.formText}
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className={styles.btnContainer}>
            <button className={styles.formBtnSubmit} onSubmit={onSubmit}>Submit</button>
            <button className={styles.formBtnAcademy}><Link href="https://akademijanis.edu.rs" target='_blank'>Sajt Akademije</Link></button>
        </div>
       
      </form>)
     
    )
  }
