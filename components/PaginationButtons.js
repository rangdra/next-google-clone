import { useRouter } from "next/router";
import Link from "next/link";

const PaginationButtons = () => {
  const router = useRouter();
  const startIdx = Number(router.query.start || 0);
  return (
    <div className="flex justify-between max-w-lg text-blue-700 mb-120">
      {startIdx >= 10 && (
        <div className="relative flex flex-grow flex-col items-center cursor-pointer hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>{" "}
          <Link
            href={`/search?term=${router.query.term}&start=${startIdx - 10}`}
          >
            <a className="link-wrapped">Previous</a>
          </Link>{" "}
        </div>
      )}

      <div className="relative flex flex-grow flex-col items-center cursor-pointer hover:underline">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
        <Link href={`/search?term=${router.query.term}&start=${startIdx + 10}`}>
          <a className="link-wrapped">Next</a>
        </Link>{" "}
      </div>
    </div>
  );
};

export default PaginationButtons;
