import { FaUserGroup } from "react-icons/fa6";
import { IoMdPerson } from "react-icons/io";
export const GroupBadge = () => {
  return (
    <div className="px-3 py-1 bg-primary text-white flex items-center gap-1 rounded-3xl text-sm">
      <FaUserGroup className=" w-3 h-3" />
      <span>Group</span>
    </div>
  );
};

export const SingleBadge = () => {
  return (
    <div className="px-3 py-1 bg-primary text-white flex items-center gap-1 rounded-3xl text-sm">
      <IoMdPerson className=" w-3 h-3" />
      <span>Single</span>
    </div>
  );
};
