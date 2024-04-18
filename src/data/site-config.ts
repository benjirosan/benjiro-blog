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
    title: "Benjiro's Notes",
    subtitle: 'On trauma, shame, and recovery',
    description: 'Benjiro writes about trauma, shame, and recovery.',
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
        }/* ,
        {
            text: 'About',
            href: '/about'
        } */
        /* {
            text: 'Tags',
            href: '/tags'
        } */
    ],
    footerNavLinks: [
        /*  {
             text: 'About',
             href: '/about'
         }, */
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
        title: 'Trauma and shame affect many of us but often go unrecognized. These are big, powerful, and messy issues, which affect a person&#39;s quality of life. I share what I&#39;m learning about these topics in the hope that it may help someone else.',
        text: '',
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
        text: 'Get new posts and key updates via email',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
