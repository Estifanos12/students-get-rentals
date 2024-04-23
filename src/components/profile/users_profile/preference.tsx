import { connectToDB } from "@/lib/mongoClient";
import { Preference as PreferenceModel } from "@/models/preference";

export const Preference = async ({ id }) => {
  await connectToDB();
  const preference = await PreferenceModel.findOne({ userId: id });

  return (
    <>
      <h2 className="text-foreground font-bold text-lg">Preferences</h2>
      <div className="mt-7">
        {preference ? (
          preference.preference === "SINGLE" ? (
            <div className="space-y-3">
              <p className="">
                <strong>Preference type</strong>: Joined as a single
              </p>
              <p className="">
                <strong>Job title </strong>:{" "}
                {preference.job_title || "No title"}
              </p>
              <p className="">
                <strong>Moving date</strong>:{" "}
                {new Date(preference.date).toDateString() || "No date"}
              </p>
              <p className="">
                <strong>Address</strong>: {preference.address || "No address"}
              </p>
              <p className="">
                <strong>Description</strong>:{" "}
                {preference.description || "No description"}
              </p>
              <div className="flex items-center gap-2">
                <p className="">
                  <strong>Identity</strong> :{" "}
                </p>
                <div className="py-2 flex flex-wrap items-center gap-5">
                  {Object.keys(preference.identity.toObject()).map((identity) =>
                    preference.identity[identity] === true ? (
                      <div
                        key={identity}
                        className="outline outline-1 outline-light bg-light dark:bg-gray-800 dark:outline-[0.5px] w-fit p-2 rounded-2xl"
                      >
                        <span className="text-xs text-muted-foreground font-bold">
                          {identity.replace("_", " ")}
                        </span>
                      </div>
                    ) : null
                  )}
                </div>
              </div>
            </div>
          ) : preference.preference === "NOT_RENTAL" ? (
            <div>
              <p className="">
                <strong>Preference type</strong>: Not looking for rental
              </p>
            </div>
          ) : (
            <div>
              <p className="">
                <strong>Preference type</strong>: Join as a{" "}
                {preference.preference === "GROUP" ? "group" : "full group"}
              </p>
              <p className="">
                <strong>No. of students</strong>: {preference.no_of_students}
              </p>
              <p className="">
                <strong>Approximate age</strong>: {preference.approximate_age}
              </p>
              <p className="">
                <strong>Group description</strong>:{" "}
                {preference.group_description}
              </p>
              <div className="flex items-center gap-2">
                <p className="">
                  <strong>Group Identity</strong> :{" "}
                </p>
                <div className="py-2 flex flex-wrap items-center gap-5">
                  {Object.keys(preference.group_identity.toObject()).map(
                    (group_identity) =>
                      preference.group_identity[group_identity] === true ? (
                        <div
                          key={group_identity}
                          className="outline outline-1 outline-light bg-light dark:bg-gray-800 dark:outline-[0.5px] w-fit p-2 rounded-2xl"
                        >
                          <span className="text-xs text-muted-foreground font-bold">
                            {group_identity.replace("_", " ")}
                          </span>
                        </div>
                      ) : null
                  )}
                </div>
              </div>
            </div>
          )
        ) : (
          <div>
            <p>No preference set.</p>
          </div>
        )}
      </div>
    </>
  );
};
