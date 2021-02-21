class CheckerboardPainter {
  static get inputProperties() {
    return [
      '--checkerboard-spacing',
      '--checkerboard-size',
      '--checkerboard-color',
      '--checkerboard-stroke-color',
      '--checkerboard-stroke-width',
    ]
  }
  paint(ctx, geom, properties) {
    const size = parseInt(properties.get('--checkerboard-size').toString())

    const spacing = parseInt(
      properties.get('--checkerboard-spacing').toString()
    )

    const strokeColor = properties.get('--checkerboard-stroke-color').toString()

    const checkerboardColor = properties.get('--checkerboard-color').toString()

    const fillColors = checkerboardColor && checkerboardColor.split(', ')

    const checkerboardStrokeWidth = properties
      .get('--checkerboard-stroke-width')
      .toString()

    const strokeWidth = checkerboardStrokeWidth
      ? parseInt(checkerboardStrokeWidth)
      : 1

    for (let y = 0; y < geom.height / size; y++) {
      for (let x = 0; x < Math.floor(geom.width / (size + spacing)); x++) {
        ctx.beginPath()
        ctx.rect(
          x * (size + spacing) + spacing / 2,
          y * (size + spacing - strokeWidth * 2) + strokeWidth,
          size,
          size
        )

        if (strokeColor) {
          ctx.strokeStyle = strokeColor
          ctx.lineWidth = strokeWidth
          ctx.stroke()
        }

        if (fillColors) {
          ctx.fillStyle = fillColors[(x + y) % fillColors.length]
          ctx.fill()
        }
      }
    }
  }
}

registerPaint('checkerboard', CheckerboardPainter)
