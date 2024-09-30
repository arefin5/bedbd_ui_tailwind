// Warning
// this function is only for Client (frontend) component 
// do not use in server component
// it has navigator object which only work on browser
export default function copyToClipboard(text) {
    async function copy(txt) {
        try {
            await navigator.clipboard.writeText(txt);
          } catch (err) {
            console.error('Failed to copy text: ', err);
          }
    }
    copy(text)    
}
