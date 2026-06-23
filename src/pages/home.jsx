import { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs"
import { MdOutlineCode, MdOutlineWorkOutline } from "react-icons/md"

/* DATA */
import { MainContext as data, useContext as useData } from "../context/userData"
import Technologies from "../data/technologies";
import Project from "../data/projects.js";
import { useLanguage } from "../context/languageContext"

export default function Main(){

    const { user } = useData(data)
    const { t } = useLanguage()
    const highlights = Project.active.slice(0, 3)

    useEffect(() => {
      document.title = t('navbar.home')
    }, [t])

    return (
      <div className="mt-8 max-w-8xl w-11/12 sm:w-10/12 mx-auto">

        <section className="hero-card hero-grid p-6 sm:p-8 lg:p-10" data-aos="fade-up">
          <div className="identity-panel">
            <div className="portrait-frame">
              <img src={user?.avatarUrl || `${process.env.PUBLIC_URL}/image/profile.png`} alt="Discord profil fotoğrafı" />
            </div>
            <div className="identity-meta">
              <p className="eyebrow">Profile</p>
              <h2>ryzenthedev</h2>
              <span>{user?.discord_user?.username || 'ryzenthedev'}</span>
            </div>
            <div className="identity-tags">
              <span>React</span>
              <span>Node.js</span>
              <span>Interface</span>
            </div>
          </div>

          <div className="hero-copy">
            <span className="badge">Yazılım geliştirici</span>
            <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-slate-950">{t('home.greeting')}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{t('home.description')}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/about" className="button-primary">
                {t('home.learnMore')}
                <BsArrowRight size="18px"/>
              </Link>
              <Link to="/projects" className="button-secondary">
                <MdOutlineWorkOutline size="19px" />
                {t('projects.title')}
              </Link>
            </div>
          </div>
        </section>

        <section className="section-block" data-aos="fade-up">
          <div className="section-title">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{t('home.technologies')}</p>
              <h2 className="mt-3 font-semibold text-slate-950">Kullandığım teknolojiler ve araçlar</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Technologies.data.map(tech => (
              <div key={tech.name} className="section-card tech-card flex items-center justify-between gap-4 hover:-translate-y-1 transition">
                <div className="flex items-center gap-4">
                  <div className="tech-icon">{tech.icon}</div>
                  <div>
                    <h3 className="font-semibold text-slate-950">{tech.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-block" data-aos="fade-up">
          <div className="section-title">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">{t('home.githubRepos')}</p>
              <h2 className="mt-3 font-semibold text-slate-950">Öne çıkan işler</h2>
            </div>
            <Link className="button-secondary compact-button" to="/projects">
              <MdOutlineCode size="19px" />
              Detaylar
            </Link>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {highlights.map(item => (
              <article key={item.name} className="section-card repo-card space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold text-slate-950">{item.name}</h3>
                  <span className="badge">{item.language}</span>
                </div>
                <p className="text-slate-600 text-sm min-h-[3rem]">{item.description}</p>
                <a className="inline-flex items-center gap-2 text-[#0f766e] font-semibold hover:text-[#115e59]" target="_blank" rel="noreferrer" href={item.link}>
                  GitHub'da aç
                </a>
              </article>
            ))}
          </div>
        </section>
      </div>
    )

}
