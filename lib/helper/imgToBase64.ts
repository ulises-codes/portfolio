export const imgToBase64 = async (url: string): Promise<string> => {
  const img = await fetch(url)

  const buffer = await img.arrayBuffer()

  const prefix = 'data:text/plain;base64,'

  if (typeof window !== 'undefined') {
    console.log(
      Buffer.from(buffer).toString('base64') ===
        btoa(String.fromCharCode(...new Uint8Array(buffer)))
    )

    return prefix + btoa(String.fromCharCode(...new Uint8Array(buffer)))
  }

  return prefix + Buffer.from(buffer).toString('base64')
}
