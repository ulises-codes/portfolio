export const imgToBase64 = async (url: string): Promise<string> => {
  const img = await fetch(url)

  const buffer = await img.arrayBuffer()

  return String.fromCharCode(...new Uint8Array(buffer))
}
