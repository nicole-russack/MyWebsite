import React from 'react';
import { render } from 'react-dom'
import { VideoScroll } from 'react-video-scroll'
import background from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/BackgroundWebpageImage.png';
import video from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/oculus.mp4'
import ReactPlayer from 'react-player'
import giff from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/gifILike.gif'
import othergif from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/ezgif-1-6a23d0d75f.mp4'
import mp4gif from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/ScreenRecording.mp4'

const Home = () => {
  const setStyles = (wrapperEl, videoEl, playbackRate) => {
      wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
        playbackRate +
        'px'})`
      wrapperEl.style.marginBottom = `calc(180% - ${Math.floor(videoEl.duration) *
        playbackRate +
        'px'})`
  }

  return (
    <div style = {{display: 'flex',
    height:'100vh',
    flexDirection: 'row',
    flex: 1}}
    >
    <div style = {{display: 'flex',
    height:'100vh',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1}}>
       
      <div
      style = {{display: 'flex',
      height:'100%',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      flexDirection: 'column'}}>



        <div>
        <h1 style = {{fontSize: 80, color: 'white'}}>Hi I'm Nicole!!</h1>
        </div>
        <div>
        <h1 style = {{fontSize: 80, color: 'white', borderRadius: 1,}}>Welcome to my site</h1>
        </div>
      </div>
   



<VideoScroll
            onLoad={props =>
              setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
            }
            playbackRate={1}
          >
<video autoPlay loop muted
        style={{
            position:"absolute",
            width:"100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit:"cover",
            transform:"translate(-50%, -50%)",
            zIndex:"-1",
            overflow:"hidden",
        }}
        >
            <source src={mp4gif} type="video/mp4"/>
        </video>
        </VideoScroll>
    </div>
        
    </div>
  );
};
  
export default Home;