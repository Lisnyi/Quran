export function getVideoId (url:string): string {
    const elements = url.split('/')
    return elements[elements.length-1]
}