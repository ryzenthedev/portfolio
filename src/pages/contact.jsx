import { useLanguage } from "../context/languageContext"

import { AiOutlineSend, AiOutlineLoading3Quarters, AiOutlineCheck } from "react-icons/ai"
import { MdOutlineEmail } from "react-icons/md"
import { useEffect, useRef, useState } from "react"

export default function Contact(){

    const message = useRef(null)
    const [msg, setMsg] = useState("")
    const [status, setStatus] = useState({type: "NOTHING"})
    const [error, setError] = useState(null)
    const { t } = useLanguage()

    useEffect(() => {
        if (!message.current) return
        message.current.style.height = "0px"
        message.current.style.height = `${message.current.scrollHeight}px`
    }, [msg])

    return (
      <div className="mt-8 max-w-8xl w-11/12 sm:w-10/12 mx-auto" data-aos="fade-up">
        <title>{t('contact.title')}</title>

        <div className="grid gap-8 lg:grid-cols-[0.95fr_0.85fr] items-start">
          <section className="hero-card p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{t('contact.title')}</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-950">{t('contact.header')}</h1>
            <p className="mt-5 text-slate-600 leading-8">{t('contact.subheader')}</p>
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-slate-700">
              <div className="flex items-center gap-3 text-lg font-medium"><MdOutlineEmail size="24px" /> seriferenbilgic@gmail.com</div>
              <p className="mt-4 text-sm text-slate-600">Mesajınızı bırakın, en kısa sürede dönüş yapayım.</p>
            </div>
          </section>

          <section className="glass-card p-8 sm:p-10">
            <form action="https://formspree.io/f/xaykrwpy" method="POST" onSubmit={async(event) => {
              event.preventDefault()
              setStatus({type: "WAIT"})
              setError(null)

              let sendedData = await fetch("https://formspree.io/f/xaykrwpy", {
                method: "POST",
                body: JSON.stringify({
                  username: event.target.username.value,
                  email: event.target.email.value,
                  message: event.target.message.value
                }),
                headers: {
                  'Accept': 'application/json'
                }
              })

              if (sendedData.ok) {
                setStatus({type: "SUCCESS"})
              } else {
                const result = await sendedData.json()
                if (result.errors) {
                  setStatus({type: "NOTHING"})
                  setError(result.errors.map(error => error.message).join(", ") + ".")
                } else {
                  setStatus({type: "NOTHING"})
                  setError("An unknown error occurred.")
                }
              }
            }}>

              {error && (
                <div className="mb-6 rounded-3xl bg-rose-50 border border-rose-200 p-5 text-sm text-rose-700">{error}</div>
              )}

              <label className="block mb-3">
                <span className="field-label">{t('contact.name')}</span>
                <input required name="username" className="input-field" />
              </label>

              <label className="block mb-3">
                <span className="field-label">{t('contact.email')}</span>
                <input required type="email" name="email" className="input-field" />
              </label>

              <label className="block mb-6">
                <span className="field-label">{t('contact.message')}</span>
                <textarea required minLength={25} onChange={(event) => setMsg(event.target.value)} ref={message} name="message" className="textarea-field min-h-[12rem]" />
              </label>

              <button type="submit" className={`button-primary w-full justify-center ${status.type !== "NOTHING" ? 'opacity-70 pointer-events-none' : ''}`}>
                {status.type === 'WAIT' ? (
                  <><AiOutlineLoading3Quarters size="18px" className="spin"/> {t('contact.sending')}</>
                ) : status.type === 'SUCCESS' ? (
                  <><AiOutlineCheck size="20px"/> {t('contact.success')}</>
                ) : (
                  <><AiOutlineSend size="20px"/> {t('contact.send')}</>
                )}
              </button>
            </form>
          </section>
        </div>
      </div>
    )

}
