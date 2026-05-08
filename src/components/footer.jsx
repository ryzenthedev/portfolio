import { AiOutlineHeart } from "react-icons/ai"
import { MainContext as data, useContext as useData } from "../context/userData"
import { useLanguage } from "../context/languageContext"

export default function Footer(){

    const { user } = useData(data)
    const { t } = useLanguage()

    return (
        <footer className="mt-20 border-t border-slate-200/70 bg-white/80 py-8">
            <div className="max-w-8xl mx-auto flex flex-col gap-4 px-6 text-center text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-semibold text-slate-900">{t('footer.name')}</p>
                <p className="flex items-center justify-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${user ? 'bg-emerald-500' : 'bg-rose-500'}`}/>
                    {t('footer.dataMatching')}
                </p>
                <p className="flex items-center justify-center gap-2">
                    {t('footer.createdWith')} <AiOutlineHeart className="text-rose-500"/> {t('footer.by')} <span className="font-semibold text-slate-900">{t('footer.name')}</span>
                </p>
            </div>
        </footer>
    )

}
