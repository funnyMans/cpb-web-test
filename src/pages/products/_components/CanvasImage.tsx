import React, { useEffect, useState } from "react"
import { Stage, Layer, Image } from "react-konva"

interface IProps {
  image: string
  width: number
  height: number
  draggable: boolean
}

const CanvasComponent = (props: IProps) => {
  const [ownImage, setOwnImage] = useState<HTMLImageElement>()

  useEffect(() => {
    const img = new window.Image()
    img.src = props.image
    img.onload = () => {
      setOwnImage(img)
    }
  }, [props.image])
  return (
    <Stage width={props.width} height={props.height}>
      <Layer>
        <Image {...props} image={ownImage} />
      </Layer>
    </Stage>
  )
}

export default CanvasComponent
