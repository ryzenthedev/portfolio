import { useState } from "react"
import { MdKeyboardArrowDown } from "react-icons/md"
import NavElements from "./navbar/navElements"
import { useLanguage } from "../context/languageContext"

export default function Navbar(){

    const { language, changeLanguage } = useLanguage()
    const [langMenuOpen, setLangMenuOpen] = useState(false)

    return (
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/80 border-b border-slate-200/70">
        <div className="max-w-8xl mx-auto flex flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="h-12 w-12 rounded-3xl bg-[#0f766e] text-white flex items-center justify-center font-semibold text-xl">R</div>
            <div>
              <p className="text-sm text-slate-500">Interface Developer</p>
              <h1 className="text-lg font-semibold text-slate-950">ryzenthedev</h1>
            </div>
          </div>

          <NavElements/>

          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(prev => !prev)}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              {language === 'tr' ? 'TR - Türkçe' : 'EN - English'}
              <MdKeyboardArrowDown size="20px" className={`${langMenuOpen ? 'rotate-180' : 'rotate-0'} transition-transform`} />
            </button>
            {langMenuOpen && (
              <div className="absolute right-0 z-20 mt-2 w-48 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <button
                  onClick={() => { changeLanguage('tr'); setLangMenuOpen(false) }}
                  className="w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
                >
                  TR - Türkçe
                </button>
                <button
                  onClick={() => { changeLanguage('en'); setLangMenuOpen(false) }}
                  className="w-full px-4 py-3 text-left text-sm text-slate-700 hover:bg-slate-50"
                >
                  EN - English
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    )

}
