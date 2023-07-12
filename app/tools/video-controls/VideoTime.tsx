import React from "react"

type VideoTimeProps = {
  videoTime: number
}

export default function VideoTime(props: VideoTimeProps) {
  const { videoTime } = props

  function formatVideoTime() {
    let minutes = Math.floor(videoTime / 60)
    let seconds = Math.floor(videoTime % 60)
    let minutesString: string = ""
    let secondsString: string = ""

    if (minutes < 10) {
      minutesString = "0" + minutes
    } else {
      minutesString = minutes.toString()
    }

    if (seconds < 10) {
      secondsString = "0" + seconds
    } else {
      secondsString = seconds.toString()
    }

    return minutesString + ":" + secondsString
  }

  return (
    <div className="flex items-center text-white w-14 h-full pl-4">
      {formatVideoTime()}
    </div>
  )
}