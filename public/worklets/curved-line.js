class CurvedLine {
  static get inputProperties() {
    return [
      '--curved-lineColor',
      '--curved-lineSpread',
      '--curved-lineWidth',
      '--curved-lineHeight',
    ]
  }

  paint(ctx, size, properties) {
    const lineWidth = parseInt(properties.get('--curved-lineWidth')) || 3
    const lineHeight =
      parseInt(properties.get('--curved-lineHeight')) || size.width
    const color = String(properties.get('--curved-lineColor')) || 'black'
    const spread = parseInt(properties.get('--curved-lineSpread')) || 50

    const offset = 0
    const midPoint = lineHeight / 2

    ctx.lineWidth = lineWidth
    ctx.strokeStyle = color
    ctx.beginPath()
    ctx.moveTo(0, 0)

    let curStep = spread
    while (curStep < size.height + spread) {
      const cp1x = lineHeight * 1.5 + offset
      const cp1y = curStep
      const cp2x = 0 - midPoint + offset
      const cp2y = curStep + spread
      const x = midPoint + offset
      const y = curStep + spread * 2

      ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y)
      curStep = curStep + spread * 3
    }
    ctx.stroke()
  }
}

registerPaint('curved-line', CurvedLine)
