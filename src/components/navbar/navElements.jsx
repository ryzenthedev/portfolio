import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { BsArrowLeft, BsArrowRight } from "react-icons/bs"
import { MdKeyboardArrowRight } from "react-icons/md"
import { Animated } from "react-animated-css"
import NavElement from "../../data/navbar.js"
import { useLanguage } from "../../context/languageContext"

export default function NavElements(){

    const [navOpened, setNavOpened] = useState(false)
    const [langMenuOpen, setLangMenuOpen] = useState(false)
    const { pathname } = useLocation();
    const { t, language, changeLanguage } = useLanguage()

    useEffect(() => {
        setNavOpened(false)
    }, [pathname])

    return (
        <>
            <div className="hidden md:flex items-center gap-2">
                {NavElement.links.map(element => (
                    <Link
                        key={element.key}
                        to={element.to}
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-4 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                    >
                        {element.icon}
                        <span>{t(`navbar.${element.key}`)}</span>
                    </Link>
                ))}
            </div>

            <div className="md:hidden">
                <button
                    onClick={() => setNavOpened(!navOpened)}
                    className="h-12 w-12 rounded-3xl bg-[#0f766e] text-white flex items-center justify-center transition hover:bg-[#115e59]"
                >
                    <BsArrowLeft size="23px"/>
                </button>
            </div>

            <Animated className="phoneNav flex md:hidden overflow-auto justify-end bg-slate-950/90" animationIn="fadeInRight" animationOut="fadeOutRight" animationInDuration={300} animationOutDuration={500} isVisible={navOpened}>
                <div className="relative p-5 h-full w-[85%] max-w-xs overflow-auto bg-white">
                    <div className="flex justify-between items-center w-full">
                        <button onClick={() => setNavOpened(!navOpened)} className="h-12 w-12 rounded-3xl bg-slate-900 text-white flex items-center justify-center transition hover:bg-slate-800">
                            <BsArrowRight size="23px"/>
                        </button>
                    </div>
                    <div className="mt-6 mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700">
                        <div className="flex flex-col gap-3">
                            <span className="font-semibold">{language === 'tr' ? 'Dil' : 'Language'}</span>
                            <div className="relative w-full">
                                <button
                                    onClick={() => setLangMenuOpen(prev => !prev)}
                                    className="w-full rounded-full border border-slate-300 bg-white px-3 py-2 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                                >
                                    {language === 'tr' ? 'TR - Türkçe' : 'EN - English'}
                                </button>
                                {langMenuOpen && (
                                    <div className="absolute left-0 top-full z-20 mt-2 w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                                        <button
                                            onClick={() => { changeLanguage('tr'); setLangMenuOpen(false); setNavOpened(false); }}
                                            className="w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
                                        >TR - Türkçe</button>
                                        <button
                                            onClick={() => { changeLanguage('en'); setLangMenuOpen(false); setNavOpened(false); }}
                                            className="w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
                                        >EN - English</button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="space-y-3">
                        {NavElement.links.map(element => (
                            <Link key={element.key} to={element.to} className="block rounded-3xl border border-slate-200 bg-slate-100 p-4 text-slate-900 font-semibold transition hover:bg-slate-50">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="inline-flex items-center gap-2">
                                        {element.icon}
                                        {t(`navbar.${element.key}`)}
                                    </div>
                                    <MdKeyboardArrowRight size="22px" color="#0f172a"/>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </Animated>
        </>
    )

}
