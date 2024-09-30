import { speakerList } from "./speakerList";


export const agenda = [
    {
        title: "Welcome to TEDx George",
        start: "8:00 AM",
        end: "9:00 AM",
        description: "Register, grab a coffee and muffin, strike up conversation and get ready for the show!",
    },
    {
        title: "Morning Session #1",
        start: "9:00 AM",
        end: "10:35 AM",
        description: "Get ready for a morning of inspiration and motivation with our first set of speakers.",
        speakers: [
            speakerList["Alexandra"],
            speakerList["Thandy"],
            speakerList["Edmondo"],
            speakerList["Germaine"]
        ]
    },
    {
        title: "Morning Break",
        start: "10:35 AM",
        end: "11:00 AM",
        description: "Take a break, write on the Algoa FM Idea Wall, grab a snack and network with other attendees.",
    },
    {
        title: "Morning Session #2",
        start: "11:05 AM",
        end: "12 Noon",
        description: "Get ready for a morning of inspiration and motivation with our second set of speakers.",
        speakers: [
            speakerList["Caville"],
            speakerList["Elsie"],
            speakerList["Malaka"]
        ]
    },
    {
        title: "Lunch",
        start: "12 Noon",
        end: "1:00 PM",
        description: "Enjoy a free catered lunch from our partner Colon Property. One drink included on us!",
    },
    {
        title: "Afternoon Session #1",
        start: "1:05 PM",
        end: "2:20 PM",
        description: "Get ready for a afternoon of inspiration and motivation with our third set of speakers.",
        speakers: [
            speakerList["Jonathan"],
            speakerList["Brenda"],
            speakerList["Locadia"],
            speakerList["Nikki"]
        ]
    },
    {
        title: "Afternoon Break",
        start: "2:20 PM",
        end: "3:00 PM",
        description: "Take a break, write on the Algoa FM Idea Wall, grab a snack and network with other attendees.",
    },
    {
        title: "Afternoon Session #2",
        start: "3:05 PM",
        end: "4:00 PM",
        description: "Get ready for a afternoon of inspiration and motivation with our fourth set of speakers.",
        speakers: [
            speakerList["Dr. Ansua"],
            speakerList["Anthony"],
            speakerList["Betty's"]
        ]
    },
    {
        title: "Evening WineDown @ Attic Atelier",
        start: "7:00 PM",
        end: "10:00 PM",
        description: "For General Plus, VIP, speakers and staff: Join us for a complementary wine and tapas evening event after TEDxGeorge @ 7pm at the Attic Atelier",
    }
]