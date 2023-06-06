import { useCallback, useEffect, useState } from "react";
import data from "../../api/mock-data.json"
type TSection={
    lessonId:string
    title:string,
    imgUrl:string,
    sectionId:string
  }
export function useSection(sectionId:string|undefined){
const [section,setSection]=useState<TSection[]>()
const [isLoading,setLoading]=useState(true)
const [error,setError]=useState<Error|undefined>()
const fetchData = useCallback(()=>{
    const currentSection = data.data.filter(section=>section.sectionId===sectionId)
    if(currentSection.length==0)setError(new Error("this section don't have any lessons yet"))
    setSection(currentSection)
    setLoading(false)
},[sectionId,data])
useEffect(()=>{
        fetchData()
},[fetchData])
return {section,isLoading,error}
}