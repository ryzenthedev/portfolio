import { AiOutlineShareAlt } from "react-icons/ai"
import { HiOutlineExternalLink } from "react-icons/hi"
import { RiShieldUserLine } from "react-icons/ri"
import { useEffect } from "react"
import Project from "../data/projects.js"
import { useLanguage } from "../context/languageContext"

export default function Projects(){

    const { t } = useLanguage()

    useEffect(() => {
      document.title = t('projects.title')
    }, [t])

    return (
      <div className="mt-8 max-w-8xl w-11/12 sm:w-10/12 mx-auto">

        <section className="hero-card p-8 sm:p-10 mb-10" data-aos="fade-up">
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-slate-600">
            <AiOutlineShareAlt /> {t('projects.title')}
          </div>
          <h1 className="mt-5 text-4xl sm:text-5xl font-bold text-slate-950">Son projelerimi keşfedin</h1>
          <p className="mt-5 max-w-3xl text-slate-600 leading-8">Burada açık kaynak, kişisel çalışma ve takım projelerinden seçtiğim işleri bulabilirsiniz. Her proje modern tasarım ve temiz kod prensipleriyle hazırlandı.</p>
        </section>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3" data-aos="fade-up">
          {Project.active.map(project => (
            <article key={project.name} className="section-card group overflow-hidden">
              <div className="project-mark">
                <span>{project.name.slice(0, 2).toUpperCase()}</span>
              </div>
              <div className="mt-5 space-y-4">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-950">{project.name}</h2>
                  <p className="mt-2 text-slate-600">{project.description}</p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-3 text-slate-700">
                  <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium"><RiShieldUserLine /> {project.role || t('projects.role')}</span>
                  {project.link && (
                    <a className="inline-flex items-center gap-2 text-[#0f766e] font-semibold hover:text-[#115e59]" target="_blank" rel="noreferrer" href={project.link}>
                      <HiOutlineExternalLink size="20px" /> {t('projects.view')}
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    )

}
