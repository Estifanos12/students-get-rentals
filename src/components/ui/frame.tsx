import { YouTubeEmbed } from "@next/third-parties/google";

type FrameProps = {
  url: string;
};

const Frame = ({ url }: FrameProps) => {
  const id = url.split("/").pop();

  return (
    <div className="aspect-video p-5">
      <YouTubeEmbed videoid={id as string} params="controls=1" />
    </div>
  );
};

export default Frame;
