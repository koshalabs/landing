import InputError from "./InputError";

export default function InputRow({children, errorText}) {
    return <div className="space-y-2">
        {children}
        {
            errorText && <InputError>{errorText}</InputError>
        }
    </div>
}