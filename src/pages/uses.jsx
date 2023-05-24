import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href} target="_blank" rel="noopener noreferrer">
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  );
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - My favourite tools</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="16” MacBook Pro, M2, 32GB RAM (2022)" href={"https://www.apple.com/au/shop/buy-mac/macbook-pro/16-inch"}>
              I was using an Intel-based 16” MacBook Pro prior to this and the
              difference is night and day. I’ve never heard the fans turn on a
              single time, even under the incredibly heavy loads I put it
              through with our various launch simulations.
            </Tool>
            <Tool title="AirPods Max" href={"https://www.apple.com/au/airpods-max/"}>
              Music plays a vital role in my daily routine,
              whether I`m working on complex coding challenges or
              diving into an engaging study session. With my AirPods Max,
              I`m enveloped in my favorite melodies and tunes.
              They create a personal soundscape that fosters my focus and enhances my productivity,
              turning work and study hours into an enjoyable journey.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="PyCharm Professional"
                  href={"https://www.jetbrains.com/pycharm/"}
                  target="_blank"
                  rel="noopener noreferrer"
            >
              As a software developer, I need a robust and reliable IDE,
              and PyCharm Professional hits the mark. Its intelligent code
              assistance and extensive range of handy features streamline my
              coding workflow, making it easier to write, debug, and refactor Python code.
              The overall result? A significant boost in productivity and a smoother coding
              experience.
            </Tool>
            <Tool title="DataGrip" href={"https://www.jetbrains.com/datagrip/"}>
              Managing databases is an integral part of my work, and DataGrip is my
              go-to tool for that. It supports various databases and provides smart
              code completion, on-the-fly error detection, and even version control
              system integration. It`s more than just a database tool - it`s a comprehensive
              solution that makes handling databases intuitive and hassle-free.
            </Tool>
            <Tool title="iTerm2" href={"https://iterm2.com/"}>
              iTerm2 enhances my command-line experience with its array of powerful features.
              The split-pane views, search functionality, and extensive customization options
              it provides all contribute to a superior terminal experience. Whether it`s scripting
              or running development servers, iTerm2 proves itself as an invaluable asset in my toolkit.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma" href={"https://www.figma.com/"}>
              When it comes to design tools, Figma has become my go-to. Beyond just a design tool,
              it`s our virtual whiteboard for brainstorming, prototyping, and collaboration.
              The seamless real-time collaboration feature is a game-changer,
              enabling us to work together on designs no matter where we are.
            </Tool>
            <Tool title="MidJourney AI" href={"https://www.midjourney.com/home/?callbackUrl=%2Fapp%2F"}>
              When I need original, creative images and graphics for my apps,
              MidJourney AI is my go-to tool. It`s like having a personal graphic
              designer at my disposal. Its AI capabilities help me to generate stunning
              visuals that are unique and resonate with my user base.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Trello" href="https://trello.com">
              Trello is my go-to task management and project collaboration tool.
              Its intuitive board, list, and card interface allows me to organize
              and prioritize my tasks and projects effectively. With features like due dates,
              checklists, labels, and integrations, Trello helps me stay on top of my work
              and collaborate with team members seamlessly.
            </Tool>
            <Tool title="ChatGPT" href={"https://chat.openai.com/"}>
              I find ChatGPT incredibly useful for brainstorming, code review,
              and as a writing assistant. It`s like having an AI-powered co-worker who`s always
              ready to provide insights and assist with the development process. It really has become
              an essential part of my productivity toolkit.
            </Tool>
          </ToolsSection>
          {/*
          <ToolsSection title="Books">
            <Tool title="Joys of Compounding">
              It’s not the newest kid on the block but it’s still the fastest.
              The Sublime Text of the application launcher world.
            </Tool>
            <Tool title="The Pragmatic Programmer">
              Using a daily notes system instead of trying to keep things
              organized by topics has been super powerful for me. And with
              Reflect, it’s still easy for me to keep all of that stuff
              discoverable by topic even though all of my writing happens in the
              daily note.
            </Tool>
            <Tool title="ReWork">
              Great tool for scheduling meetings while protecting my calendar
              and making sure I still have lots of time for deep work during the
              week.
            </Tool>
            <Tool title="Incerto">
              Simple tool for blocking distracting websites when I need to just
              do the work and get some momentum going.
            </Tool>
          </ToolsSection>
          */}
        </div>
      </SimpleLayout>
    </>
  )
}
