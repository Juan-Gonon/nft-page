import { useWindowSize } from '@react-hook/window-size'
import Confetti from 'react-confetti'

export const MyConfetti = () => {
  const { width, height } = useWindowSize()
  return (
    <Confetti
      numberOfPieces={180}
      width={width}
      height={height}
      gravity={0.03}
    />
  )
}
