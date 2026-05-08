import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs"
import { FaRegStar } from "react-icons/fa"
import { BiGitRepoForked } from "react-icons/bi"

/* DATA */
import { MainContext as data, useContext as useData } from "../context/userData"
import Technologies from "../data/technologies";
import Colors from "../style/githubLangColors"
import about from "../data/variables.js";
import { useLanguage } from "../context/languageContext"

export default function Main(){

    const { user, github } = useData(data)
    const { t } = useLanguage()

    return (
      <div className="mt-8 max-w-8xl w-11/12 sm:w-10/12 mx-auto">
        <title>Anasayfa</title>

        <section className="hero-card relative overflow-hidden p-8 sm:p-10" data-aos="fade-up">
          <span className="badge">New interface</span>
          <h1 className="mt-6 text-4xl sm:text-5xl font-bold text-slate-950">{t('home.greeting')}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{t('home.description')}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/about" className="button-primary">
              {t('home.learnMore')}
              <BsArrowRight size="18px"/>
            </Link>
            <Link to="/projects" className="button-secondary">
              {t('projects.title')}
            </Link>
          </div>
        </section>

        <section className="section-block" data-aos="fade-up">
          <div className="section-title">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{t('home.technologies')}</p>
              <h2 className="mt-3 font-semibold text-slate-950">Kullandığım teknolojiler ve araçlar</h2>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {Technologies.data.map(tech => (
              <div key={tech.name} className="section-card flex items-center justify-between gap-4 hover:-translate-y-1 transition">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-3xl bg-[#eff6ff] text-[#2563eb] flex items-center justify-center text-xl">{tech.icon}</div>
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
              <p className="text-sm uppercase tracking-[0.35em] text-slate-500">{t('home.githubRepos')}</p>
              <h2 className="mt-3 font-semibold text-slate-950">Açık kaynak depolarım</h2>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {github?.map(repo => (
              <article key={repo.id} className="section-card space-y-4">
                <div className="flex items-start justify-between gap-3">
                  <a target="_blank" rel="noreferrer" href={`https://github.com/${about.github}/${repo.name}`} className="text-lg font-semibold text-slate-950 hover:text-[#2563eb]">{repo.name}</a>
                  <span className="badge">{t('home.public')}</span>
                </div>
                <p className="text-slate-600 text-sm min-h-[3rem]">{repo.description || 'No description available.'}</p>
                <div className="grid gap-3 sm:grid-cols-3 text-sm text-slate-600">
                  <span className="inline-flex items-center gap-2"><span className={`h-3 w-3 rounded-full`} style={{backgroundColor: Colors[repo.language]?.color || '#94a3b8'}}></span>{repo.language || 'N/A'}</span>
                  <span className="inline-flex items-center gap-2"><FaRegStar />{repo.stargazers_count}</span>
                  <span className="inline-flex items-center gap-2"><BiGitRepoForked />{repo.forks}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>
    )

}
