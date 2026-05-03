import sortBy from "@/lib/utils/sortBy"
import { useMemo } from "react"
import { speakerList } from "@/lib/speakerList"


export default function useSpeakerTalks({ limit = null, sort = "last_name" }){ 
    const speakerTalks = useMemo(() =>  {
        
        return Object.values(speakerList).map((speaker) => {
            if( !Array.isArray(speaker.talks) || !speaker.talks.length ) return null

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

    }, [ speakerList ])

    console.log("speakerTalks", speakerTalks)

    const talks = useMemo(() => sortBy(speakerTalks, "date"), [ speakerTalks ])

    return{
        talks
    }
}