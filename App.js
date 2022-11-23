import {StyleSheet, View} from 'react-native';
import Video from 'react-native-video';

// Within your render function, assuming you have a file called
// "background.mp4" in your project. You can include multiple videos
// on a single screen if you like.

function App() {
  return (
    <View style={styles.videoContainer}>
      <Video
        source={{
          // uri: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
          // uri: 'https://msairecordclient001001-usge.streaming.media.usgovcloudapi.net/9da3a113-b3ba-4d9c-9daa-033382ff3ad6/24e2d39b-f94e-4844-89ac-4d545cb26089.ism/manifest(format=m3u8-cmaf).m3u8',
          // type: 'm3u8',
          // uri: 'https://msairecordclient001001-usge.streaming.media.usgovcloudapi.net/9da3a113-b3ba-4d9c-9daa-033382ff3ad6/24e2d39b-f94e-4844-89ac-4d545cb26089.ism/manifest(format=m3u8-aapl).m3u8',
          // uri: 'https://msairecordclient001001-usge.streaming.media.usgovcloudapi.net/9da3a113-b3ba-4d9c-9daa-033382ff3ad6/24e2d39b-f94e-4844-89ac-4d545cb26089.ism/manifest(format=m3u8-aapl-v3).m3u8',
          // uri: 'https://msairecordclient001001-usge.streaming.media.usgovcloudapi.net/9da3a113-b3ba-4d9c-9daa-033382ff3ad6/24e2d39b-f94e-4844-89ac-4d545cb26089.ism/manifest(format=mpd-time-csf).mpd',
          uri: 'https://msairecordclient001001-usge.streaming.media.usgovcloudapi.net/9da3a113-b3ba-4d9c-9daa-033382ff3ad6/24e2d39b-f94e-4844-89ac-4d545cb26089.ism/manifest(format=mpd-time-cmaf)',
          type: 'mpd',
        }} // Can be a URL or a local file.
        resizeMode="contain"
        volume={0.2}
        ref={ref => {
          this.player = ref;
        }} // Store reference
        onBuffer={this.onBuffer} // Callback when remote video is buffering
        onError={this.videoError} // Callback when video cannot be loaded
        style={styles.backgroundVideo}
      />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  videoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    width: '100%',
    height: '50%',
  },
  backgroundVideo: {
    flex: 1,
    width: 360,
  },
});
