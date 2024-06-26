import braveOnes from "@/public/brave-ones-event.jpg"
import agency from "@/public/tedxgeorge_salon_leadership_agency.jpg"
import education from "@/public/tedxgeorge_salon_deconlizing_edu_tech.jpg"
import collapse from "@/public/tedxgeorge_salon_building_collapse.jpg"


export const eventsList = [
    {
        type: "TEDxGeorge",
        title: "Brave Ones",
        src: braveOnes.src,
        href: "/about"
    },
    {
        type: "TEDxGeorge Salon",
        title: "The Value Of Self-Agency And Leadership In Africa",
        location: "George Museum",
        date: "25 July 2024",
        time: "6pm - 9pm",
        src: agency.src,
        href: "/events/details/the-value-of-self-agency-and-leadership-in-africa",
        slug: "the-value-of-self-agency-and-leadership-in-africa",
        text: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec.</p>
            <p>Consectetur adipiscing elit. Nullam auctor, nunc nec consectetur adipiscing elit. Nullam auctor, nunc nec.</p>
        `
    },
    {
        type: "TEDxGeorge Salon",
        title: "Modern Technology Decolonizes University Education",
        date: "28 August 2024",
        location: "Nelson Mandela University, George Campus",
        time: "6pm - 9pm",
        src: education.src,
        href: "/events/details/modern-technology-decolonizes-university-education",
        slug: "modern-technology-decolonizes-university-education",
        text: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec.</p>
            <p>Consectetur adipiscing elit. Nullam auctor, nunc nec consectetur adipiscing elit. Nullam auctor, nunc nec.</p>
        `
    },
    {
        type: "TEDxGeorge Salon",
        title: "The George Building Collapse",
        location: "George Town Hall",
        date: "26 September 2024",
        time: "6pm - 9pm",
        src: collapse.src,
        href: "/events/details/the-george-building-collapse",
        slug: "the-george-building-collapse",
        text: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec.</p>
            <p>Consectetur adipiscing elit. Nullam auctor, nunc nec consectetur adipiscing elit. Nullam auctor, nunc nec.</p>
        `
    },
    
]