import { _children } from "../../../types";
import Sidebar from "./sidebar";

export default function Frame({ children }: _children) {
  return (
    <div className="w-screen h-screen bg-gray-100">
      <div className="flex h-full w-full">
        <div className="fixed top-0">
          <Sidebar />
        </div>
        <div>
          <div>navbar</div>
          {children}
        </div>
      </div>
    </div>
  );
}
