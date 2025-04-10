import { contacts, facts, hobbies } from "../../utils/constants";
import Buttons from "../decoration/Buttons";

export default function AboutMe() {
  return (
    <section className="lg:mr-2 p-8 lg:p-5 mt-5 dark:text-gray-300">
      {/* Header Section */}
      <header>
        <h1 className="relative w-max font-mono text-6xl font-bold md:ml-12
          before:absolute before:inset-0 before:animate-typewriter before:bg-white before:dark:bg-[#11181A]
          after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-violet-400">
          Oebelus,
        </h1>
      </header>

      <main className="mt-10 text-xl dark:text-gray-200 text-gray-700">
        <div className="relative flex items-center py-5">
          <div className="flex-grow border-t border-gray-400" />
          <span className="mx-4 flex-shrink text-3xl font-semibold">
            <span className="text-violet-600">&gt;</span> About Me:
          </span>
          <div className="flex-grow border-t border-gray-400" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          {/* Left Column */}
          <div className="lg:col-span-3 space-y-4">
            {/* Bio */}
            <div className="border-2 border-violet-600 dark:border-zinc-500 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm overflow-hidden">
              <div className="bg-violet-600 dark:bg-[#906CCF] justify-between text-white px-3 py-2 flex items-center">
                <span className="flex items-center gap-2">
                  <img src="gifs/bio.png" alt="bio" />
                  <span className="text-xs font-mono">bio.txt</span>
                </span>
                <Buttons />
              </div>
              <div className="p-4 text-base">
                <p>- I am Imane. And this is my pet:</p>
                <img className="animate-crab w-40 mx-auto mt-4 mb-2" src="pet.png" alt="crab" />
              </div>
            </div>

            {/* Hobbies */}
            <div className="border-2 border-violet-600 dark:border-zinc-500 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm overflow-hidden">
              <div className="bg-violet-600 dark:bg-[#906CCF] justify-between text-white px-3 py-2 flex items-center">
                <span className="flex items-center gap-2">
                  <img src="gifs/hobbies.png" alt="hobbies" />
                  <span className="text-xs font-mono">hobbies.txt</span>
                </span>
                <Buttons />
              </div>
              <div className="p-4 text-base">
                <ul className="mt-2 mx-2 flex flex-col gap-2">
                  {hobbies.map((hobby) => (
                    <li>{hobby}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Middle */}
          <div className="lg:col-span-6 space-y-4">
            {/* Lily's Pictures */}
            <div className="border-2 border-violet-600 dark:border-zinc-500 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm overflow-hidden">
              <div className="bg-violet-600 dark:bg-[#906CCF] justify-between text-white px-3 py-2 flex items-center">
                <span className="flex items-center gap-2">
                  <img src="gifs/lily.png" alt="lily" />
                  <span className="text-xs font-mono">lily.jpg</span>
                </span>
                <Buttons />
              </div>
              <div className="p-2 mb-4">
                <p className="text-sm mt-4 ml-2">Here are some pictures of my best friend Lily:</p>
                <div className="mt-4 flex flex-col md:flex-row gap-4 h-48 px-4 z-[999]">
                  <img
                    src="lily/1.jpg"
                    alt="Lily 1"
                    className="rounded-lg border border-violet-600 dark:border-zinc-500 md:w-2/5 h-full object-cover transform rotate-2"
                  />
                  <img
                    src="lily/2.jpg"
                    alt="Lily 2"
                    className="rounded-lg border border-violet-600 dark:border-zinc-500 md:w-3/5 h-full object-cover transform -rotate-3"
                  />
                </div>
              </div>
            </div>

            {/* Facts */}
            <div className="border-2 border-violet-600 dark:border-zinc-500 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm overflow-hidden">
              <div className="bg-violet-600 dark:bg-[#906CCF] text-white justify-between px-3 py-2 flex items-center">
                <span className="flex items-center gap-2">
                  <img src="gifs/facts.png" alt="facts" />
                  <span className="text-xs font-mono">facts.jpg</span>
                </span>
                  <Buttons />
              </div>
              <div className="p-4 text-base">
                <p>Fun facts about me:</p>
                <ul className="mt-2 pl-2 space-y-1">
                  {facts.map((fact, index) => (
                    <li key={index} className="flex items-start">
                      - {fact}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-3 space-y-4">
            {/* Interests */}
            <div className="border-2 border-violet-600 dark:border-zinc-500 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm overflow-hidden">
              <div className="bg-violet-600 dark:bg-[#906CCF] justify-between text-white px-3 py-2 flex items-center">
                <span className="flex items-center gap-2">
                  <img src="gifs/interests.png" alt="interests" />
                  <span className="text-xs font-mono">interests.txt</span>
                </span>
                <Buttons />
              </div>
              <div className="p-4 text-base">
                <p>
                  I am interested in many things <span className="dark:text-violet-400 text-violet-600">{"<"}
                  I wish I had more than 24 hours a day{">"}</span>.
                  Current interests include: <br/><br/>
                    <p className="mx-2">- Theory of Computation;</p>
                    <p className="mx-2">- Logic;</p>
                    <p className="mx-2">- Electronics.</p>
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="border-2 border-violet-600 dark:border-zinc-500 rounded-lg bg-white/10 dark:bg-gray-800/30 backdrop-blur-sm overflow-hidden">
              <div className="bg-violet-600 dark:bg-[#906CCF] justify-between text-white px-3 py-2 flex items-center">
                <span className="flex items-center gap-2">
                  <img src="gifs/socials.png" alt="socials" />
                  <span className="text-xs font-mono">socials.txt</span>
                </span>
                <Buttons />
              </div>
              <div className="p-4 text-base">
                <ul className="space-y-2 text-lg dark:text-gray-300">
                {
                    contacts.map((contact) => (
                    <li key={contact.id}><span className="text-violet-600">{'>'}</span> <a href={contact.link}>{contact.name}</a></li>
                    ))
                }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}