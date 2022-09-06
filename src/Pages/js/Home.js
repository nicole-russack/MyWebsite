import React from 'react';
import { render } from 'react-dom'
import { VideoScroll } from 'react-video-scroll'
import background from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/BackgroundWebpageImage.png';
import video from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/oculus.mp4'
import ReactPlayer from 'react-player'
import giff from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/gifILike.gif'
import othergif from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/ezgif-1-6a23d0d75f.mp4'
import mp4gif from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/ScreenRecording.mp4'
import newtry from '/Users/nicolerussack/nicole-russack-webpage/src/Assets/Screen Recording 2022-08-27 at 12.33.41 PM.mov'

const Home = () => {
  const setStyles = (wrapperEl, videoEl, playbackRate) => {
      wrapperEl.style.marginTop = `calc(180% - ${Math.floor(videoEl.duration) *
        playbackRate +
        'px'})`
  }

  return (
    <div id='homeContainer' style = {{display: 'flex',
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



        <div style ={{zIndex:"2", backgroundColor:"#010041",height:'300px',width:'900px', alignItems: 'center',
      justifyContent: 'center', padding:'80px', borderRadius:'30px'}}>
        <h1 style = {{fontSize: 80, color: 'white', textAlign: 'center'}}>Hi I'm Nicole!</h1>
        <h1 style = {{fontSize: 80, color: 'white', borderRadius: 1,textAlign: 'center'}}>Welcome</h1>
        </div>
        <div style ={{zIndex:"1",backgroundColor:"#FFEC00",height:'300px',width:'900px', padding:'40px', borderRadius:'30px', position:'relative',
      top:-250, right:-50}}>
        </div>
        
      </div>
   



<VideoScroll
            onLoad={props =>
              setStyles(props.wrapperEl, props.videoEl, props.playbackRate)
            }
            playbackRate={200}
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
            <source src={othergif} type="video/mp4"/>
        </video>
        </VideoScroll>
    </div>
        
    </div>
  );
};
  
export default Home;