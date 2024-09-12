import Head from "next/head";
import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import VerticalNavbar from "./components/VerticalNavbar";
import avatar from "../public/avatar.png";
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";
import Image from "next/image";
import web1 from "../public/web1.png";
import web2 from "../public/web2.png";
import web3 from "../public/web3.png";
import web4 from "../public/web4.png";
import SlideInImage from "./components/SlideInImage";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""} >
      <Head>
        <title>Faye Lau</title>
        <meta name="description" content="My Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <VerticalNavbar />
      <main id="about" className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Faye Lau</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-red-400 text- to-orange-400 text-white px-4 py-2 border-none rounded-md ml-8"
                  href="https://drive.google.com/file/d/1jP9J05z-f7sOU9DCHDCBRolegnloaA0K/view?usp=sharing"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-orange-400 font-medium dark:text-orange-200 md:text-6xl">
              Faye, Meiyi Lau
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Web Designer & Event Specialist
            </h3>
            <p className="text-md py-5 leading-8 text-gray-500 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
            Based in Canada, chasing simplicity as the essence of elegance in digital experiences.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-200">
            <a href="https://www.linkedin.com/in/fayelau/" target="_blank" rel="noopener noreferrer" class="animate-bounce">
              <AiFillLinkedin />
            </a>

            <a href="https://github.com/lau00077" target="_blank" rel="noopener noreferrer" class="animate-bounce">
              <AiFillGithub />
            </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-orange-200 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={avatar} layout="fill" objectFit="cover" />
            </div>
          </div>
         
        </section>
        <section>
          <div id="services">
            <h3 className="text-3xl py-1 dark:text-white ">SERVICES</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I’ve been freelancing as a web designer and developer, working remotely with agencies, startups, and awesome people to create cool digital products. If you need something designed, developed, or managed, I’m your go-to!
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including <span className="text-red-300"> Event Managememt, Web Design, and Photography.</span>
               
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Event Management &<br />Digital Marketing
              </h3>
              <p className="py-2">
                Seasoned event manager specializing in trade shows and conference planning, with a knack for savvy digital marketing strategies.
              </p>
              <h4 className="py-4 text-orange-400">Digital Marketing Tools</h4>
              <p className="text-gray-500 py-1">Google Analytics</p>
              <p className="text-gray-500 py-1">Google Search Console</p>
              <p className="text-gray-500 py-1">Moz</p>
              <p className="text-gray-500 py-1">Mailchimp</p>
              <p className="text-gray-500 py-1">HubSpot</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Web & UX/ UI Design
              </h3>
              <p className="py-2">
                Designing websites that don’t just look great but work like a charm.
              </p>
              <h4 className="py-4 text-orange-400">Design Tools</h4>
              <p className="text-gray-500 py-1">Photoshop</p>
              <p className="text-gray-500 py-1">Illustrator</p>
              <p className="text-gray-500 py-1">Figma</p>
              <p className="text-gray-500 py-1">Indesign</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Photography</h3>
              <p className="py-2">
              Need awesome photos? I’ll capture everything from your big events to family smiles or the next best product shot, making sure you look your absolute best (even on a Monday).
              </p>
              <h4 className="py-4 text-orange-400">Photography Types</h4>
              <p className="text-gray-500 py-1">Corporate Events</p>
              <p className="text-gray-500 py-1">Parties</p>
              <p className="text-gray-500 py-1">Portraits</p>
              <p className="text-gray-500 py-1">Graduation</p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div id="works">
            <h3 className="text-3xl py-1 dark:text-white ">WORKS</h3>
          </div>
          <div className="flex flex-col gap-5 py-8 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
            <div className="relative overflow-hidden w-full h-full">
            <SlideInImage
              className="rounded-lg object-contain"
              width={"100%"}
              height={"100%"}
              layout="responsive"
              src={web1}
            />
            </div>
            </div>
            <div className="basis-1/3 flex-1">
              <SlideInImage
                className="rounded-lg object-contain"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <SlideInImage
                className="rounded-lg object-contain"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <SlideInImage
                className="rounded-lg object-contain"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
          </div>
        </section>
        <section>
          <div id="contact">
            <h3 className="text-3xl py-1 dark:text-white ">CONTACT</h3>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            Whether you’re looking to start a new project, need help with an existing one, or just want to say hello, feel free to get in touch.</p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Email: <span />
              <a href="mailto:fayelmy@gmail.com" className="text-red-300  inline-block py-1"> fayelmy@gmail.com</a>
            </p>
          
          </div>
        </section>
      </main>
      <footer>
        <div className="bg-gray-800 text-white text-center py-5">
          <p>© 2024 Faye Lau. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}