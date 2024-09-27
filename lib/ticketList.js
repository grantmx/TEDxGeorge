import ToolTip from "@/components/feedback/ToolTip";

export const features = {
    streamingVenue: {
        title: "Streaming Venue",
        included: true,
        toolTip: <ToolTip type="info" text="Watch the Main Stage livestream in HD from our overflow venue." />
    },
    frontRowSeats: {
        title: "Front Row Seat Choice",
        included: true
    },
    freeTee: {
        title: "TEDxGeorge T-Shirt (FREE)",
        included: true,
        toolTip: <ToolTip type="info" text="Get a FREE TEDxGeorge T-Shirt to remember the event" />
    },
    backstagePass: {
        title: "Backstage Lounge Pass",
        included: true,
        toolTip: <ToolTip type="info" text="Enjoy complementary refreshments at the backstage lounge" />
    },
    afterParty: {
        title: "Evening WineDown (Wine & Tapas)",
        included: true,
        toolTip: <ToolTip type="info" text="Join us for a complementary wine and tapas evening event with the speakers and sponsors after TEDxGeorge @ 7pm at the Attic Atelier" />
    },
    mainStageTalks: {
        title: "Main Stage Access",
        included: true
    },
    lunch: {
        title: "Catered Lunch (FREE)",
        included: true,
        toolTip: <ToolTip type="info" text="Enjoy a free catered lunch from our sponsor. One drink included on us!" />
    },
    tedxSalon:{
        title: "TEDxGeorge Salon Events (FREE)",
        included: true,
        href: "/events"
    },
    kidsZone: {
        title: "Kids Zone Access (FREE)",
        included: true,
        toolTip: <ToolTip type="info" text="For Ages 5-12 years: Drop your kids off at the Kids Zone for a fun day of activities while you enjoy TEDxGeorge." />,
    },
    exhibition: {
        title: "Exhibition Xperience",
        included: true
    },
    breakoutSessions: {
        title: "Meet the Speakers",
        included: true,
        href: "/speakers"
    },
    goodieBag: {
        title: "Goodie Bag + Lanyard",
        included: true,
        toolTip: <ToolTip type="info" text="Get TEDxGeorge Stickers and swag from us and our awesome partners" />
    },
}


export const ticketList = [
    {
        type: "Streaming",
        discount: 0.4,
        price: "R 249",
        priceRaw: 249,
        allocation: 100,
        description: "Watch from our Streaming Venue",
        features: Object.keys(features).map(key => {
            let included;

            switch(key){
                case "mainStageTalks": included = false; break;
                case "freeTee": included = false; break;
                case "afterParty": included = false; break;
                case "lunch": included = false; break;
                case "frontRowSeats": included = false; break;
                case "backstagePass": included = false; break;
                case "teeShirt": included = false; break;
                case "teeShirt": included = false; break;
                default: included = true; break;
            }

            return {
                title: features[key].title,
                included
            }
        })
    },
    {
        type: "General",
        discount: 0.4,
        price: "R 499",
        priceRaw: 499,
        allocation: 70,
        description: "Main Stage Access",
        features: Object.keys(features).map(key => {
            let included;

            switch(key){
                case "afterParty": included = false; break;
                case "freeTee": included = false; break;
                case "frontRowSeats": included = false; break;
                case "backstagePass": included = false; break;
                case "teeShirt": included = false; break;
                case "streamingVenue": included = false; break;
                default: included = true; break;
            }

            return {
                title: features[key].title,
                included
            }
        })
    },
    {
        type: "General +",
        discount: null,
        price: "R 799",
        priceRaw: 799,
        allocation: 20,
        description: "Main Stage Access + Evening WineDown @ Attic Atelier",
        features: Object.keys(features).map(key => {
            let included;

            switch(key){
                case "frontRowSeats": included = false; break;
                case "freeTee": included = false; break;
                case "backstagePass": included = false; break;
                case "streamingVenue": included = false; break;
                case "teeShirt": included = false; break;
                default: included = true; break;
            }

            return {
                title: features[key].title,
                included
            }
        })
    },
    {
        type: "VIP",
        discount: null,
        price: "R 1,499",
        priceRaw: 1499,
        allocation: 10,
        description: "Exclusive Access",
        features: Object.keys(features).map(key => {
            let included;

            switch(key){
                // case "streamingVenue": included = false; break;
                default: included = true; break;
            }

            return {
                title: features[key].title,
                included
            }
        })
    }
]