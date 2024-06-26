import { useSession } from "layouts/SessionContext";
import { ScrollArea } from "./ui/scroll-area";

const ViewSession = (props: { clearSession: ()=>void }) => {
  const { sessions } = useSession();

  return (
    <div className="w-full max-w-md bg-inherit rounded-md p-4">
      <div className="text-fuchsia-500 mb-4 font-normal text-xl tracking-widest pt-2">
        SESSIONS
      </div>
      <ScrollArea>
        <ul className="h-60 flex flex-col gap-3">
          {sessions.length === 0 && (
            <li>
              <p className="text-fuchsia-500">No sessions yet...</p>
            </li>
          )}

          {sessions.map((session, index) => (
            <li key={index}>
              <p className="text-fuchsia-500">
                Start Time:{" "}
                <span className="text-white">{session.startTime}</span>
              </p>
              <p className="text-fuchsia-500">
                Duration:{" "}
                <span className="text-white"> {session.duration} seconds</span>
              </p>
              <p className="text-fuchsia-500">
                Status: <span className="text-white">{session.status}</span>
              </p>
            </li>
          ))}
        </ul>
      </ScrollArea>
      <button
          onClick={props.clearSession}
          className="bg-fuchsia-500 mt-2 w-full hover:bg-fuchsia-600 duration-150 ease-in-out text-white font-semibold py-2 px-4 rounded"
        >
          Clear Sessions
        </button>
    </div>
  );
};

export default ViewSession;
