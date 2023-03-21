export function TruncateText(text: string) {
    if (text.length > 320)
    
    return `${text.slice(0 , 320)}...`
}