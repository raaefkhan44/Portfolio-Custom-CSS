import "../../styles/project.css";
import Image from "next/image";
import "../globals.css"

export default function Project() {
  return (
    <div className="project-box">
      <h1 className="project-heading">My Projects</h1>
      <div className="main-div">
        <div className="project-item">
          <Image
            src="/count-down-timer.png"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />
          <h3>Count-down Timer</h3> 
          <p>
            A website powered by Next.js and TypeScript, featuring an
            interactive countdown function for tracking events.
          </p>
          <button type="button">
            <a
              href="https://01-countdown-timer-azure.vercel.app/"
              target="_blank"
            >
              View Timer
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/cv.png"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />

          <h3>Static Interactive Resume</h3>
          <p>
            An interactive resume built with TypeScript, HTML, and CSS, enabling
            users to dynamically showcase their skills.
          </p>
          <button type="button">
            <a
              href="https://static-interative-resume-builder.vercel.app/"
              target="_blank"
            >
              View Resume
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/todo list.png"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />
          <h3>Todo List</h3>
          <p>
            A task management application built with React and TypeScript,
            designed for efficient organization and productivity.
          </p>
          <button type="button">
            <a
              href="https://03-todo-list.vercel.app/"
              target="_blank"
            >
              View List
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/calculator.PNG"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />
          <h3>Simple Calculator</h3>
          <p>
          The Simple Calculator is an intuitive web application designed for basic arithmetic operations. Users can perform addition, subtraction, multiplication, and division with ease. The interface features two input fields for entering numbers, a display for the result, and clearly labeled buttons for each operation.
          </p>
          <button type="button">
            <a
              href="https://04-simple-calculator.vercel.app/"
              target="_blank"
            >
              View calculator
            </a>
          </button>
        </div>
        
        <div className="project-item">
          <Image
            src="/digital clock.PNG"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />
          <h3>Digital Clock</h3>
          <p>
          The Digital Clock is a user-friendly component that displays the current time in a clear and visually appealing format. It offers two modes: a 24-hour format for those who prefer military time, and a 12-hour format for a traditional view. The clock updates every second, ensuring real-time accuracy.
          </p>
          <button type="button">
            <a
              href="https://05-digital-clock.vercel.app/"
              target="_blank"
            >
              View Clock
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/number guessing.PNG"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />
          <h3>Number Guessing Game</h3>
          <p>
          The Number Guessing Game challenges players to guess a randomly generated number between 1 and 10. Players receive feedback on their guesses and can track their attempts until they correctly identify the number.
          </p>
          <button type="button">
            <a
              href="https://06-number-guessing-game.vercel.app/"
              target="_blank"
            >
              View Game
            </a>
          </button>
        </div>

        <div className="project-item">
          <Image
            src="/birthday_wish.PNG"
            alt="Portfolio Item Image"
            width={300}
            height={250}
            className="portfolio-image"
          />
          <h3>Birthday Wish</h3>
          <p>
          A birthday wish is a heartfelt message sent to someone on their special day, expressing good wishes, happiness, and love. It is a way to celebrate their life and make them feel valued and appreciated.
          </p>
          <button type="button">
            <a
              href="https://08-birthday-wish.vercel.app/"
              target="_blank"
            >
              View Birthday Wish
            </a>
          </button>
        </div>
 

      </div>
    </div>
  );
}