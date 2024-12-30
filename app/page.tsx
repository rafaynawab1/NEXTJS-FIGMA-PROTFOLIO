import Image from "next/image";
import insta from "../instagram.png";
import link from "../linkin.png";
import twitter from "../twitter.png";
import pic from "../me.jpg";


export default function Home() {
  return (
    <>
      <div className="bg-black min-h-screen flex flex-col">
        {/* Navbar */}
        <div className="text-white text-justify h-16 text-4xl bg-lime-500 w-11/12 px-11 py-5 rounded-lg flex justify-between items-center">
          <b>Home</b>
          {/* Nav Logos */}
          <div className="flex space-x-6">
            <Image src={insta} alt="Instagram logo" width={50} height={50} />
            <Image src={link} alt="LinkedIn logo" width={50} height={50} />
            <Image src={twitter} alt="Twitter logo" width={50} height={50} />
          </div>
        </div>

        {/* Name Section */}
        <div className="text-slate-100 mt-32 ml-40 text-4xl">
          <b>Abdul Rafay</b>
        </div>

        {/* Profile Picture */}
        <div className="flex justify-end mt mr-32  "><div className="">
          <Image src={pic} alt="pic" width={250} height={250} className="rounded-full border-2 border-white" />
       </div> </div>

        {/* Introduction Section */}
        <div className="-mt-60">
        <div className="text-slate-100 mt-8 text-xl ml-32 text-center max-w-3xl px-6">
          <p>
            Hi, I am Abdul Rafay, a 17-year-old web development enthusiast and
            student at Governor House. I am currently gaining hands-on experience
            through courses in Web 3.0, AI Agents, and Web Applications. My
            primary focus is on mastering front-end and back-end technologies
            like HTML, CSS, JavaScript, Next.js, and Python. I am passionate about
            building modern, dynamic websites and exploring new technologies to
            push the boundaries of web development.
          </p>
        </div>

        {/* Button Section */}
        <div className="text-white font-semibold ml-44 mt-10 bg-lime-600 text-3xl w-64 h-14 rounded-md shadow-[0_0_50px_3px_rgba(102,255,102,0.4)]">
          <div className="mt-2 ml-2 ">
            <a href="http://localhost:3000/" target="_blank">
            <div className="">  Lets get started.</div>
            </a>
          </div>
        </div>
        <br />

        {/* Main Courses Section */}
        <div className="text-white ml-36 mt-10">
          <b>Main Courses</b>
        </div>

        <div className="text-lime-500 mt-10 ml-28 text-2xl w-36 h-16 border-2 border-gray-500 p-1">
          <div className="mt-3 ml-5">Web 3.0</div>
        </div>

        <div className="text-lime-500 -mt-16 ml-72 text-2xl w-36 h-16 border-2 border-gray-500 p-1">
          <div className="mt-3 ml-5"><b>AI Agents</b></div>
        </div>

        <div className="ml-20">
          <div className="text-lime-500 -mt-16 ml-96 text-2xl w-60 h-16 border-2 border-gray-500 p-1">
            <div className="mt-3 ml-4"><b>Web Applications</b></div>
          </div>
        </div>

        <div className="ml-96">
          <div className="text-lime-500 -mt-16 ml-96 text-2xl w-32 h-16 border-2 border-gray-500 p-1">
            <div className="mt-3 ml-5"><b>Python</b></div>
          </div>
        </div>

        <br />

        {/* Created By Section with Glow */}
        <div className="ml-96">
          <div className="ml-80">
            <div className="text-white ml-96 font-semibold glow-effect text-center bg-lime-600 w-36 h-8 rounded-md shadow-[0_0_50px_3px_rgba(102,255,102,0.4)]">
              Created By Rafay
            </div>
          </div>
       </div> </div>
        <br />
    
      </div>
</>
  )
}

