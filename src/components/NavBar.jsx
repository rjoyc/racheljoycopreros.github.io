export default function NavBar({ aboutLink, resumeLink, workLink }) {
  return (
    <div className="flex justify-between">
      <div>
        <a href={workLink}>
          <img src="src\assets\temp-logo.svg" alt="R logo"></img>
        </a>
      </div>
      <div>
        <span>
          <a
            className="font-semibold pr-12 hover:underline hover:underline-offset-4 hover:cursor-pointer"
            href={workLink}
          >
            work
          </a>
          <a
            className="font-semibold pr-12 hover:underline hover:underline-offset-4 hover:cursor-pointer"
            href={aboutLink}
          >
            about
          </a>
          <a
            className="font-semibold hover:underline hover:underline-offset-4 hover:cursor-pointer"
            href={resumeLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </a>
        </span>
      </div>
    </div>
  );
}
