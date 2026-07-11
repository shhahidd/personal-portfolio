import { projectsData } from "../../data/bio";
import BioContent from "./BioContent";

export default function Projects({ title }: { title?: string }) {
  return (
    <div className="flex flex-col">
      <BioContent bioData={projectsData} title={title} />
      <div className="flex justify-center mt-6 mb-2">
        <a
          href="https://github.com/shhahidd?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 px-6 py-2.5 rounded-full border border-current opacity-70 hover:opacity-100 transition-all duration-300 hover:scale-105 font-sans text-sm font-medium"
          aria-label="View more projects on GitHub"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="transition-transform duration-300 group-hover:rotate-12"
          >
            <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.02.005 2.047.138 3.006.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.479 5.92.43.372.823 1.102.823 2.222 0 1.606-.015 2.898-.015 3.293 0 .322.216.694.825.576C20.565 21.796 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
          </svg>
          View More
        </a>
      </div>
    </div>
  );
}
