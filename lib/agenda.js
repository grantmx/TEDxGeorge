import { speakerList } from "./speakerList";


export const agenda = [
    {
        title: "Registration",
        start: "8 am",
        end: "9 am",
        description: "Register, grab a coffee and muffin, strike up conversation and get ready for the show!",
    },
    {
        title: "Morning Session #1",
        start: "9 am",
        end: "10:35 am",
        description: "Get ready for a morning of inspiration and motivation with our first set of speakers.",
        speakers: [
            speakerList["Michelle"],
            speakerList["Edmondo"],
            speakerList["Thandy"],
            speakerList["Germaine"]
        ]
    },
    {
        title: "Morning Break",
        start: "10:35 am",
        end: "11:00 am",
        description: "Take a break, write on the Algoa FM Idea Wall, grab a snack and network with other attendees.",
    },
    {
        title: "Morning Session #2",
        start: "11:05 an",
        end: "12 Noon",
        description: "Get ready for a morning of inspiration and motivation with our second set of speakers.",
    },
    {
        title: "Lunch",
        start: "12 Noon",
        end: "1:00 pm",
        description: "Enjoy a free catered lunch from our partner Colon Property. One drink included on us!",
    },
    {
        title: "Afternoon Session #1",
        start: "1:05 pm",
        end: "2:20 pm",
        description: "Get ready for a afternoon of inspiration and motivation with our third set of speakers.",
    },
    {
        title: "Afternoon Break",
        start: "2:20 pm",
        end: "3:00 pm",
        description: "Take a break, write on the Algoa FM Idea Wall, grab a snack and network with other attendees.",
    },
    {
        title: "Afternoon Session #2",
        start: "3:05 pm",
        end: "4:00 pm",
        description: "Get ready for a afternoon of inspiration and motivation with our fourth set of speakers.",
    },
    {
        title: "Evening WineDown @ Attic Atelier",
        start: "7:00 pm",
        end: "10:00 pm",
        description: "",
    }
]