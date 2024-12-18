export interface Navigation {
    name: string,
    section: string,
    href: string,
    current: boolean,
    subNavigation: {
        category: string,
        href: string,
        image?: string,
        current: boolean,
    }[]
}

const navigation: Navigation[] = [
    {
        name: 'products',
        section: 'products',
        href: '#',
        current: false,
        subNavigation: [
            {
                category: "pistols",
                href: "#",
                image: "./vercel.svg",
                current: false
            },
            {
                category: "revolvers",
                href: "#",
                image: "./vercel.svg",
                current: false
            },
            {
                category: "long guns",
                href: "#",
                image: "./vercel.svg",
                current: false
            },
        ]
    },
    {
        name: 'purpose',
        section: 'purpose',
        href: '#',
        current: false,
        subNavigation: [
            {
                category: "home defense",
                href: "#",
                image: "./vercel.svg",
                current: false
            },
            {
                category: "hunting",
                href: "#",
                image: "./vercel.svg",
                current: false
            },
            {
                category: "competition",
                href: "#",
                image: "./vercel.svg",
                current: false
            },
        ]

    },
    {
        name: 'learn',
        section: 'learn',
        href: '#',
        current: false,
        subNavigation: [
            {
                category: "our story",
                href: "#",
                current: false
            },
            {
                category: "our team",
                href: "#",
                current: false
            },
            {
                category: "careers",
                href: "#",
                current: false
            },
        ]
    },
    {
        name: 'support',
        section: 'support',
        href: '#',
        current: false,
        subNavigation: [
            {
                category: "contact us",
                href: "#",
                current: false
            },
            {
                category: "faq",
                href: "#",
                current: false
            },
            {
                category: "shipping",
                href: "#",
                current: false
            },
        ]
    }
]

export default navigation;