import Card from '../../components/Card'
import { useSection } from '../../hooks/useSection'
type TSectionProps={
  sectionId:string
}
function FirstSectionPage({sectionId}:TSectionProps) {
  const {section,isLoading} = useSection(sectionId)
  return (
    <div className="app">
      {
        section && !isLoading?(
          <>
          {
            section.map((section)=>(
              <Card.Lesson title={section.title} key={`lesson-${section.lessonId}`} lessonId={section.lessonId}>
                <img src={section.imgUrl} alt={section.title} className='card-image'/>
              </Card.Lesson>
            ))
          }
      </>
        ):(<p>loading</p>)
      }
      
    </div>
    
  )
}

export default FirstSectionPage
