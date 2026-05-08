import { MainContext as data, useContext as useData } from "../context/userData"
import { useLanguage } from "../context/languageContext"

import { MdOutlineMapsHomeWork, MdCake, MdOutlineEmail } from "react-icons/md"
import { BsGenderMale } from "react-icons/bs"

export default function About(){

    const { user } = useData(data)
    const { t } = useLanguage()

    return (
      <div className="mt-8 max-w-8xl w-11/12 sm:w-10/12 mx-auto" data-aos="fade-up">
        <title>{t('about.title')}</title>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] items-start">
          <section className="hero-card p-8 sm:p-10">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{t('about.title')}</p>
            <h1 className="mt-4 text-4xl font-bold text-slate-950">{t('about.title')}</h1>
            <p className="mt-5 text-slate-600 leading-8" dangerouslySetInnerHTML={{__html: t('about.description')}}></p>

            <div className="stats-grid mt-10">
              <div className="card-quiet rounded-3xl p-6">
                <div className="flex items-center gap-3 text-white text-lg font-semibold"><MdOutlineMapsHomeWork size="26px"/> {t('about.liveIn')}</div>
              </div>
              <div className="card-quiet rounded-3xl p-6">
                <div className="flex items-center gap-3 text-white text-lg font-semibold"><MdCake size="26px"/> {t('about.birthday')}</div>
              </div>
              <div className="card-quiet rounded-3xl p-6">
                <div className="flex items-center gap-3 text-white text-lg font-semibold"><BsGenderMale size="26px"/> {t('about.gender')}</div>
              </div>
            </div>
          </section>

          <div className="glass-card p-8 sm:p-10 flex flex-col items-center text-center gap-5">
            {user ? (
              <img className="h-72 w-72 rounded-[32px] object-cover" src={`https://cdn.discordapp.com/avatars/${user.discord_user.id}/${user.discord_user.avatar}.png?size=4096`} alt={user.discord_user?.username || 'Profile'} />
            ) : (
              <div className="h-72 w-72 rounded-[32px] bg-slate-200 animate-pulse" />
            )}
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Profil</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">{user?.discord_user?.username || 'Kullanıcı Adı Yükleniyor'}</h2>
            </div>
            <div className="w-full rounded-3xl border border-slate-200 bg-white/90 p-6 text-left">
              <div className="flex items-center gap-3 text-slate-700"><MdOutlineEmail size="22px" /> <span>seriferenbilgic@gmail.com</span></div>
            </div>
          </div>
        </div>
      </div>
    )

}
