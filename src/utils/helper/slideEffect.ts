/* eslint-disable @typescript-eslint/no-explicit-any */
type Direction = 'fwd' | 'back'

interface ImageIndices {
  first: number
  second: number
}

type SetImageNumber = React.Dispatch<React.SetStateAction<ImageIndices>>

export const changeSlideHandler = (
  dir: Direction,
  setImageNumber: SetImageNumber,
  obj: any[],
): void => {
  if (dir === 'fwd') {
    setImageNumber(({ first, second }) => {
      const newIndex = (first + 1) % obj.length
      const newSecondIndex = (second + 1) % obj.length

      return { first: newIndex, second: newSecondIndex }
    })
  } else if (dir === 'back') {
    setImageNumber(({ first, second }) => {
      const newIndex = (first - 1 + obj.length) % obj.length
      const newSecondIndex = (second - 1 + obj.length) % obj.length

      return { first: newIndex, second: newSecondIndex }
    })
  }
}
