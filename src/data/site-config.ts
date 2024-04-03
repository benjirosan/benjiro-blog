export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: "Benjiro's Recovery Notes",
    subtitle: 'On trauma, shame, and addiction',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        /*   {
              text: 'Projects',
              href: '/projects'
          }, */
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'About',
            href: '/about'
        }
        /* {
            text: 'Tags',
            href: '/tags'
        } */
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
        /*  {
             text: 'Terms',
             href: '/terms'
         },
         {
             text: 'Download theme',
             href: 'https://github.com/JustGoodUI/dante-astro-theme'
         } */
    ],
    socialLinks: [
        /*    {
               text: 'Dribbble',
               href: 'https://dribbble.com/'
           },
           {
               text: 'Instagram',
               href: 'https://instagram.com/'
           },
           {
               text: 'X/Twitter',
               href: 'https://twitter.com/'
           } */
    ],
    hero: {
        title: 'Why I started this blog',
        text: "I'm in recovery and this blog is where I share what I'm learning about trauma, shame, and addiction. These are powerful, messy, and very real aspects of being a human being that negatively effect a person's quality of life. I feel moved to share what I'm learning in the hope that it may help someone else. With compassion, Benjiro",
        image: {
            /*   src: '/hero.jpeg',
              alt: 'A person sitting at a desk in front of a computer' */
        }/* ,
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ] */
    },
    subscribe: {
        title: 'Subscribe to the Newsletter',
        text: 'Get notified about the latest posts.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
