import { FC } from 'react';
import YoutubePlayer from 'react-native-youtube-iframe';
import { useWindowDimensions } from 'react-native'
import { getVideoId } from '../../shared';

type Props = {
    uri: string
}

export const VideoPlayer: FC<Props> = ({uri}) => {

    const id = getVideoId(uri)
    const { width } = useWindowDimensions()

    return (
      <YoutubePlayer
        height={(width-16)/1.77}
        play={true}
        videoId={id}
      />
    );
}

