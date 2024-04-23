export const ProfileHeader = ({ data }) => {
  return (
    <div className="flex items-center gap-5">
      <div className="w-[100px]  aspect-square overflow-hidden rounded-full p-1 group outline outline-4 outline-slate-300 hover:outline-primary transition-[outline-color] duration-300">
        <img
          src={data.profile_picture || "/placeholder-img.svg"}
          alt="Profile Picture"
          className="rounded-full object-cover w-full h-full"
        />
      </div>
      <div className="flex items-center justify-between  w-full">
        <div>
          <h1 className="text-lg lg:text-xl font-semibold">{data.fullname}</h1>
          <p>{data.email}</p>
        </div>
      </div>
    </div>
  );
};
