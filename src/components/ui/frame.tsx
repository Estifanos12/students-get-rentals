import { YouTubeEmbed } from '@next/third-parties/google';

type FrameProps = {
  url: string;
};

const Frame = ({ url }: FrameProps) => {
  const id = url.split('/').pop();

  return (
    <div className='aspect-video p-5'>
      <YouTubeEmbed
        videoid={id as string}
        height={315}
        width={560}
        params='controls=0'
      />
    </div>
  );
};

export default Frame;
