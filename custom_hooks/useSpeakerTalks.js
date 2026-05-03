import sortBy from "@/lib/utils/sortBy"
import { useMemo } from "react"
import { speakerList } from "@/lib/speakerList"


export default function useSpeakerTalks({ limit = null, sort = "last_name" }){ 
    const speakerTalks = useMemo(() =>  {
        let limiter = 0

        return Object.values(speakerList).map((speaker, index) => {
            if( !Array.isArray(speaker.talks) || !speaker.talks.length ) return null

            if( limit && limiter >= limit ) return null;
        
            limiter++

            return speaker.talks.map((talk) => {
                return {
                    ...talk,
                    speaker: {
                        name: speaker.first_name + " " + speaker.last_name,
                        slug: speaker.slug
                    }
                }
            })
            
        }).flat().filter(Boolean)

    }, [ speakerList, limit ])


    const talks = useMemo(() => sortBy(speakerTalks, "date"), [ speakerTalks ])

    return{
        talks
    }
}