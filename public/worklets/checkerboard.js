class CheckerboardPainter {
  static get inputProperties() {
    return ['--checkerboard-spacing', '--checkerboard-size']
  }
  paint(ctx, geom, properties) {
    const size = parseInt(properties.get('--checkerboard-size').toString())
    const spacing = parseInt(
      properties.get('--checkerboard-spacing').toString()
    )
    const colors = ['#BF43A1', '#F26463', '#F1DD6D', '#24748F', '#2BACB3']
    for (let y = 0; y < geom.height / size; y++) {
      for (let x = 0; x < geom.width / size; x++) {
        ctx.fillStyle = colors[(x + y) % colors.length]
        ctx.beginPath()
        ctx.rect(x * (size + spacing), y * (size + spacing), size, size)
        ctx.fill()
      }
    }
  }
}

// Register our class under a specific name
registerPaint('checkerboard', CheckerboardPainter)
