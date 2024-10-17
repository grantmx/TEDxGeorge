import braveOnes from "@/public/brave-ones-event.jpg"
import agency from "@/public/tedxgeorge_salon_leadership_agency.jpg"
import education from "@/public/tedxgeorge_salon_deconlizing_edu_tech.jpg"
import collapse from "@/public/tedxgeorge_salon_building_collapse.jpg"
import tedNext from "@/public/TEDxGeorgeLive.png"


export const eventsList = [
    {
        type: "TEDxGeorge Live",
        title: "TEDNext Global Livestream",
        src: tedNext.src,
        time: "3pm - 7pm",
        href: "/events/details/tednext-global-livestream",
        date: "24 October 2024",
        location: "Garden Route Innovation & Technology Hub",
        slug: "tednext-global-livestream",
        text: `
            <p>Join us for TEDxGeorge Live, where we'll be streaming the highly anticipated TEDNext 2024 event happening in Atlanta, GA, from October 22-24, 2024. TEDNext delves into "what's next" for individuals, communities, and the world, showcasing over 40 groundbreaking TED Talks, live performances, and immersive workshops.</p>
            <p>Hosted at the Garden Route Innovation & Technology Hub, this live stream event brings the global TED stage right to George. Engage with the world's most exciting ideas and connect with like-minded individuals as we explore the future of innovation, leadership, and global progress.</p>
            <p>Some of the key speakers at the upcoming TEDNext 2024 event include:<p>

            <ul class="mb-5">
                <li>Malcolm Gladwell - Bestselling author and renowned thinker, known for his insightful perspectives on human behavior and societal trends.</li>
                <li>Manoush Zomorodi - Acclaimed journalist and podcast host, exploring the intersection of technology and humanity.</li>
                <li>Jane McGonigal - A game designer and author, famous for her work on using gaming to solve real-world problems.</li>
            </ul>

            <p>Don't miss this unique opportunity to be part of the global TED community and join us for three days of inspiration, connection, and ideas worth spreading—right here in George!</p>
        
            <p><a href="mailto:rsvp@tedxgeorge.com?subject=TEDxGeorge Live RSVP">R.S.V.P. to secure your spot at TEDxGeorge Live</a> and be part of the TEDNext 2024 experience!</p>
        
            <hr class="my-5" />

            <h2 class="mb-5 display-1">
                Streaming Times
            </h2>
            
            <ul class="list-unstyled m-0">
                <li>
                    <h3 class="display-3 mb-1">
                        October 22
                    </h3>
                </li>
                <li>
                    <strong class="display-6">TED Theater Session 1: Wonder (8:30pm - 10pm CAT)</strong><br/>
                    <p>The world can offer a sense of possibility and wonder when we take a moment to let them in. For the opening session of TEDNext we celebrate the unexpected and show how wonder and awe can transform our thinking. Come prepared to be amazed.</p>
                </li>
                
                <li class="mt-5">
                    <h3 class="display-3 mb-1">
                        October 23
                    </h3>
                </li>
                <li>
                    <strong class="display-6">TED Theater Session 3: Work (5:45pm - 7:15pm CAT)</strong><br/>
                    <p>If change is the only constant in the modern workplace (and it sure seems like that's the case) then ... how do we thrive? This practical session offers wisdom and advice from business leaders and innovators who know how to stay one step ahead.</p>
                </li>
                
                <li class="mt-5">
                    <h3 class="display-3 mb-1">
                        October 24
                    </h3>
                </li>
                <li class="mb-4">
                    <strong class="display-6">TED Theater Session 5: Play (3pm - 4:30pm CAT)</strong><br/>
                    <p>Because play isn't a nice-to-have for a fulfilled life, it's a have-to-have. Whether we're talking digital innovation and invention or real world athletic mastery, this session will bring delight to life.</p>
                </li>
                <li>
                    <strong class="display-6">TED Theater Session 6: Grow (5:30pm - 7pm CAT)</strong><br/>
                    <p>We believe the right idea at the right time can bring people together to change the world — but only if minds are open and ready to keep learning. Come exemplify a growth mindset with a final session of TEDNext that will send you home ready to reach new heights.</p>
                </li>
            </ul>
        `
    },
    {
        type: "TEDxGeorge",
        title: "Brave Ones",
        src: braveOnes.src,
        href: "/events/brave-ones"
    },
    {
        type: "TEDxGeorge Salon",
        title: "Understanding The Value Of Self-Agency And Leadership In Africa",
        location: "George Museum",
        date: "8 August 2024",
        time: "6pm - 9pm",
        src: agency.src,
        href: "/events/details/the-value-of-self-agency-and-leadership-in-africa",
        slug: "the-value-of-self-agency-and-leadership-in-africa",
        text: `
            <p>Self-agency and leadership are pivotal for the continued development and empowerment of African nations. Self-agency, defined as the ability of individuals and communities to make independent choices and take action, is fundamental in fostering a sense of ownership and responsibility. In the African context, self-agency enables people to address local challenges with tailored solutions that resonate with their unique cultural, social, and economic circumstances. This grassroots approach to problem-solving can lead to more sustainable and effective outcomes, as individuals are more invested in the success of initiatives they have helped to create and implement. By empowering communities to take charge of their destinies, self-agency cultivates a resilient and innovative populace capable of driving significant change from within.</p>
            <p>At the upcoming TEDxGeorge Salon event, titled "The Value of Self-Agency and Leadership in Africa," we aim to delve into these themes and their critical importance to the continent's future. Our event will feature speakers and panelists who embody these principles, sharing their experiences and insights on how self-agency and leadership have shaped their journeys and contributed to their communities. Through engaging discussions and interactive sessions, attendees will explore how these values can be nurtured and amplified across Africa. This event is not just about highlighting success stories but also about inspiring actionable strategies that individuals and communities can adopt to foster self-agency and strong leadership. By bringing together thought leaders, activists, and community members, TEDxGeorge Salon seeks to ignite a collective movement towards sustainable and inclusive growth in Africa.</p>
        `
    },
    {
        type: "TEDxGeorge Salon",
        title: "How Modern Technology Decolonises University Education",
        date: "29 August 2024",
        location: "Nelson Mandela University, George Campus, Staff Lounge",
        time: "6pm - 9pm",
        src: education.src,
        href: "/events/details/modern-technology-decolonizes-university-education",
        slug: "modern-technology-decolonizes-university-education",
        text: `
            <p>The advent of modern technology is revolutionising university education, offering unprecedented opportunities to decolonise and democratise learning. Traditional educational models in many parts of the world, including Africa, have often been influenced by colonial legacies that emphasise Western perspectives and methodologies. Modern technology, however, provides tools to challenge and transform these paradigms. By leveraging digital platforms, online resources, and innovative teaching methods, universities can offer more inclusive and diverse curricula that reflect the rich cultural and intellectual heritage of African societies. This shift not only empowers students with a broader and more relevant education but also fosters a more critical and independent approach to learning, encouraging them to question and contribute to knowledge production actively.</p>
            <p>Our upcoming TEDxGeorge Salon event, titled "Modern Technology Decolonises University Education," will explore how these technological advancements are reshaping the educational landscape. The event will feature speakers and thought leaders who are at the forefront of integrating technology into university education to promote decolonisation. Attendees will hear about successful initiatives that have used digital tools to enhance access to education, diversify course content, and support collaborative learning environments. By highlighting these innovative approaches, TEDxGeorge Salon aims to inspire educators, policymakers, and students to embrace technology as a means to break free from outdated colonial frameworks and to build an educational system that is equitable, inclusive, and reflective of Africa's diverse identities and experiences.</p>
            <p>This event will serve as a platform for exchanging ideas, sharing best practices, and envisioning a future where technology empowers every student to reach their full potential.</p>
        `
    },
    {
        type: "TEDxGeorge Salon",
        title: "The George Building Collapse",
        location: "Regus",
        date: "26 September 2024",
        time: "6pm - 9pm",
        src: collapse.src,
        href: "/events/details/the-george-building-collapse",
        slug: "the-george-building-collapse",
        text: `
            <p>The George building collapse on May 6, 2024, was a devastating event that shook the community and highlighted critical issues in construction safety and regulatory oversight. The collapse occurred at the NEO Victoria apartment building, which was still under construction. Tragically, 34 construction workers lost their lives, and 16 others were injured. The rescue operation, which involved over 1,000 emergency responders, was a massive and complex effort that lasted nearly two weeks, concluding on May 17, 2024. The building's collapse prompted immediate investigations into the construction practices, with authorities scrutinizing the developers and contractors involved to determine whether safety standards were adhered to and to prevent such incidents in the future.</p>
            <p>Our upcoming TEDxGeorge Salon event, titled "The George Building Collapse," aims to explore the multifaceted impact of this tragedy and discuss ways to improve building safety and regulatory measures. The event will feature speakers who are experts in construction engineering, urban planning, and emergency response, as well as individuals who were directly affected by the collapse. By examining the causes and consequences of this disaster, the TEDxGeorge Salon seeks to foster a dialogue on preventing similar tragedies and enhancing resilience in our built environment. This event will not only honor the victims but also serve as a platform for learning and advocacy, driving forward the conversation on construction safety and community preparedness.</p>
        `
    },
    
]