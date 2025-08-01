import ToolTip from "@/components/feedback/ToolTip";

export const features = {
    frontRowSeats: {
        title: "Premium Row Seat Choice",
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
        type: "Early Bird (July Only)",
        discount: null,
        price: "R 249",
        priceRaw: 249,
        allocation: 100,
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
        type: "General",
        discount: 0,
        price: "R 399",
        priceRaw: 399,
        allocation: 0,
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
        price: "R 599",
        priceRaw: 599,
        allocation: 0,
        description: "Main Stage Access + Backstage Lounge Pass + Free Tee",
        features: Object.keys(features).map(key => {
            let included;

            switch(key){
                default: included = true; break;
            }

            return {
                title: features[key].title,
                included
            }
        })
    },
]