


export default async function sitemap() {
    return[
        {
            url: 'https://tedxgeorge.com/',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/about",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/events",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/speakers",
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: "https://tedxgeorge.com/partners",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
    ]
}