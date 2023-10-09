// import * as tf from '@tensorflow/tfjs'
// import * as handpose from '@tensorflow-models/handpose'
// import '@tensorflow/tfjs-backend-webgl'
// import Webcam from 'react-webcam'
// import { GestureDescription, GestureEstimator, Finger, FingerCurl } from 'fingerpose'
// import { useCallback, useRef, useState } from 'react'
// import AnimatedCard from '@sl-codeblaster/react-3d-animated-card'
// import { animated } from 'react-spring'
// import { use3dEffect } from 'use-3d-effect'
import {Helmet} from "react-helmet"
import './App.css'

function App() {
//   const videoConstraints = {
//     width: 1280,
//     height: 720,
//     facingMode: "user"
//   };

//   const [isHandVisible, setIsРandVisible] = useState(false)
//   const [imgSrc, setImgSrc] = useState<string | undefined>(undefined)
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const webcamRef = useRef<any>(null)
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   const canvasRef = useRef<any>(null)

//   const runHandpose = async () => {
//     const net = await handpose.load()
//     console.log('Handpose loaded')

//     setInterval(() => {
//       detect(net)
//     }, 1000)
//   }

//   const detect = async (net: handpose.HandPose) => {
//     if(typeof webcamRef.current !== 'undefined' && webcamRef.current !== null && webcamRef.current.video !== 'undefined') {
//       const video = webcamRef.current.video
//       const videoWidth = webcamRef.current.video.videoWidth
//       const videoheight = webcamRef.current.video.videHeight

//       webcamRef.current.videoWidth = videoWidth
//       webcamRef.current.videoHeight = videoheight

//       canvasRef.current.width = videoWidth
//       canvasRef.current.height = videoheight

//       const hand = await net.estimateHands(video, true)

//       const fist = new GestureDescription('fist')
//       // все пальцы для кулака должны быть согнуты
//       fist.addCurl(Finger.Index, FingerCurl.FullCurl)
//       fist.addCurl(Finger.Middle, FingerCurl.FullCurl)
//       fist.addCurl(Finger.Ring, FingerCurl.FullCurl)
//       fist.addCurl(Finger.Pinky, FingerCurl.FullCurl)

//       // большой палец может быть как не согнут, там и согнут наполовину
//       fist.addCurl(Finger.Thumb, FingerCurl.HalfCurl)
//       fist.addCurl(Finger.Thumb, FingerCurl.NoCurl)

//       const openPalm = new GestureDescription('opan_palm')
//       // все пальцы для успешного детекта открытой ладони не должны быть согнуты
//       openPalm.addCurl(Finger.Index, FingerCurl.NoCurl)
//       openPalm.addCurl(Finger.Middle, FingerCurl.NoCurl)
//       openPalm.addCurl(Finger.Ring, FingerCurl.NoCurl)
//       openPalm.addCurl(Finger.Pinky, FingerCurl.NoCurl)
//       openPalm.addCurl(Finger.Thumb, FingerCurl.NoCurl)

//       const gestures = [fist, openPalm]
//       const fistPose = new GestureEstimator(gestures)

//       if(hand[0] === undefined) {
//         setIsРandVisible(false)
//         return
//       } else {
//         // console.log(hand[0].annotations.indexFinger > rock.estimator.options.HALF_CURL_START_LIMIT)
//         // const gesture = await fingerPose.estimate(hand[0].landmarks)
//         // console.log(fistPose.estimate(hand[0].landmarks))
//         const landmarks = fistPose.estimate(hand[0].landmarks)

//         if(landmarks.poseData[0][1] === 'No Curl' &&
//         landmarks.poseData[1][1] === 'Full Curl' &&
//         landmarks.poseData[2][1] === 'Full Curl' &&
//         landmarks.poseData[3][1] === 'Full Curl' &&
//         landmarks.poseData[4][1] === 'Full Curl') {
//           setIsРandVisible(false)
//         } else if (landmarks.poseData[0][1] === 'No Curl' &&
//         landmarks.poseData[1][1] === 'No Curl' &&
//         landmarks.poseData[2][1] === 'No Curl' &&
//         landmarks.poseData[3][1] === 'No Curl' &&
//         landmarks.poseData[4][1] === 'No Curl') {
//           setIsРandVisible(true)
//         }
//       }
//     }
//   }

//   runHandpose()

//   const capture = useCallback(() => {
//     const imgSrc = webcamRef.current.getScreenshot()
//     setImgSrc(imgSrc)
//   }, [webcamRef])

//   const ref = useRef(null)
//   const {style, ...mouseHandlers} = use3dEffect(ref)

const url = 'https://static.friendlee.pro/extra/0.png'

  return (
    <>
    {/* <img src={imgSrc} alt="" style={{position: "absolute", top: 0, left: 0, width: 1280, height: 720}} />
    {!imgSrc && <>
      <Webcam
      ref={webcamRef}
      screenshotFormat="image/jpeg"
      audio={false}
      style={{
        position: "absolute",
        marginLeft: "auto",
        marginRight: "auto",
        left: 0,
        right: 0,
        textAlign: "center",
        zIndex: 9,
        width: 640,
        height: 480
      }}
      width={640}
      height={480}
      videoConstraints={videoConstraints}
      screenshotQuality={1}
    />

    <canvas ref={canvasRef} style={{
      position: "absolute",
      marginLeft: "auto",
      marginRight: "auto",
      left: 0,
      right: 0,
      textAlign: "center",
      zIndex: 9,
      width: 640,
      height:  480
    }} width={640} height={480} />
    </>} */}

    <Helmet>
        <meta charSet="utf-8" />
        <title>My Title</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta property="og:image" content={url}/>
    </Helmet>

{/* <animated.div
      ref={ref}
      style={{
        background: '#000000', color: 'white', padding: '2em',
        width: "250px",
        height: "400px",
        ...style
      }}
      {...mouseHandlers}
    >
      Hover over me!
    </animated.div> */}

    test

    {/* {isHandVisible && !imgSrc && <button style={{
      position: "absolute",
      top: 100
    }} onClick={capture}>Click me!</button>} */}
    </>
  )
}

export default App
