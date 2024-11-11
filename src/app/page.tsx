import "../style/page.css"
import Image from "next/image";

export default function Home() {
  return (
    <div className="top-h">

      <h1>Home</h1>
      <div className="main-hero">
          <Image
            className="box-1"
            src="/profile pic.jpeg"
            alt="Profile of Raaef Khan"
            height={376}
            width={322}
            />

            <div className="content">
                <h2>Hello I&apos;m</h2>
                  <h1>Raaef Khan</h1>
                <p>I am a passionate website developer and
                  <br />
                  Gonna be AI developer soon. </p>
            </div>
      </div>
    </div>

    
  );
};


