export default function SampleButton() {
    function handleClick() {
        alert('I am clicked!');
    }
    return (
        <button id="sample_button" onClick={handleClick}>Click me</button>
    )
}