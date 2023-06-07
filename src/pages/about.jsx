import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
  MediumIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photos/image-5.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank" // Add this attribute to open link in a new tab
        rel="noopener noreferrer" // Add these attributes for security and accessibility
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Who am I?</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Ibrahim. I inspire the world through AI.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                After completing my Master`s degree in Biotechnology at the University of Adelaide in 2018,
                I encountered challenges finding work in my field. Determined to explore new opportunities,
                I decided to venture into programming. I began learning R and Python for data science,
                leveraging my background in data analysis. However, as I delved deeper, I discovered my passion
                for building practical solutions that can make a difference in people`s lives.
                This led me organically towards software development.
              </p>
              <p>
                Along this journey, I stumbled upon the fascinating world of machine learning and artificial
                intelligence. From my very first encounter with developing models using frameworks like Keras,
                I realized that AI was the path I wanted to pursue. Today, I`m more excited than ever about the
                possibilities that AI brings, with tools like ChatGPT and MidJourney AI pushing the boundaries of
                what we can achieve. I created this site to share my enthusiasm for AI and software development,
                with the hope of inspiring others to create amazing work.
              </p>
              <p>
                Outside of work and programming, I`m also a football (soccer) referee. I`ve been captivated by the
                beautiful game since I can remember, and I consider myself fortunate to still be involved in it as a referee.
                What could be better than getting paid to participate in something you`ve loved since childhood?
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://twitter.com/IbrahimSaidi94" icon={TwitterIcon}>
                Follow on Twitter
              </SocialLink>
              <SocialLink href="https://medium.com/@ibrahimsaidi94" icon={MediumIcon} className="mt-4">
                Follow on Medium
              </SocialLink>
              <SocialLink href="https://github.com/Saidiibrahim" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/ibrahimsaidi/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:ibrahim.aka.ajax@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                ibrahim.aka.ajax@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
