import "@styles/_card.scss";
import { FC, ReactNode, ReactSVGElement } from "react";
import { Link } from "react-router-dom";
interface ILessonCardProps {
  lessonId: string;
  title: string;
  children: ReactNode;
}
export interface ITechCardProps {
  documentationUrl: string;
  Icon: ReactNode;
  description: string;
  techName: string;
}
const Tech: FC<ITechCardProps> = ({
  description,
  documentationUrl,
  Icon,
  techName,
}) => (
  <a href={documentationUrl} about={`Documentação para ${techName}`} target="_blank">
    <div className="tech-card">
      {Icon}
      <div>
        <h3 className={`tech-card-title ${techName.toLowerCase()}`}>
          {techName}
        </h3>
        <p className="tech-card-description">{description}</p>
      </div>
    </div>
  </a>
);
const Lesson: FC<ILessonCardProps> = ({
  children,
  title,
  lessonId,
}: ILessonCardProps) => {
  return (
    <Link to={`lesson/${lessonId}`}>
      <div className="card">
        <h1 className="card-title">{title}</h1>
        {children}
      </div>
    </Link>
  );
};

export default { Lesson, Tech };
