import "./ProjectCard.scss"

type Project = {
  id: number
  title: string
  date: string
  image: string
}

type Props = {
  project: Project
}

function ProjectCard({ project }: Props) {
  return (
    <div className="project-card">
      <div className="project-card__image-wrapper">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-card__infos">
        <p className="project-card__title">{project.title}</p>
        <p className="project-card__date">{project.date}</p>
      </div>
    </div>
  )
}

export default ProjectCard
