import styled from 'styled-components'
import GIF from '../../assets/Home Video.mp4'

const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={GIF} type='video/mp4' autoPlay muted loop />
    </VideoContainer>
  )
}

const VideoContainer = styled.div`
    width: 100%;

    video {
        width: 100%;
        height: auto;

        @media screen and (max-width: 64em) {
            min-height: 40vh;
        }
    }
`

export default CoverVideo
