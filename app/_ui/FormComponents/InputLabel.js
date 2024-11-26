export default function FormLabel({children, htmlFor}) {
    return (
        <label htmlFor={htmlFor} className="text-sm">
            {children}
        </label>
    );
}