'use client'
import { FormEvent, useState } from "react"
import styles from './kontakt.module.css'
import Link from "next/link"

export const ContactForm = ({a}: any) => {
    const [isSubmitted, setSubmitted] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        // const formData = new FormData(e.target);
        // if (formData.get("oranges") !== "") {
        //   // Form submission is spam
        //   console.log("Spam on Contact")
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
                <h1>{a}</h1>
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
            type="hidden" placeholder='oranges' />

        <textarea
            className={styles.formText}
            value={message}
            placeholder="Message"
            onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <div className={styles.btnContainer}>
            <button className={styles.formBtnSubmit} onSubmit={onSubmit}>Submit</button>
            <button className={styles.formBtnAcademy}><Link href="https://akademijanis.edu.rs" target='_blank'>ATVSS Site</Link></button>
        </div>
       
      </form>)
     
    )
  }
