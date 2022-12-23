export default function myImageLoader({ src, width, quality }) {
    return `https://storage.googleapis.com/${src}?w=${width}&q=${quality || 75}`
  }