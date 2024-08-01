import ToolTip from "@/components/feedback/ToolTip";

export const features = {
    streamingVenue: {
        title: "Streaming Venue + Crafts",
        included: true,
        toolTip: <ToolTip type="info" text="Watch the Main Stage livestream in HD from our overflow venue and enjoy a free craft while you watch" />
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
        title: "After Party (Wine & Tapas)",
        included: true,
        toolTip: <ToolTip type="info" text="Join us for a complementary wine and tapas After Party with the speakers and sponsors directly after TEDxGeorge" />
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
        price: "R 499",
        priceRaw: 499,
        allocation: 60,
        description: "Main Stage",
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
        price: "R 799",
        priceRaw: 799,
        allocation: 30,
        description: "Main Stage + After Party",
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