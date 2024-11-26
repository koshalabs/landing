export default function FormInput({type, id, register, required, error, disabled, styles, ...props}) {
    return (
        <input
            disabled={disabled} 
            type={type} 
            id={id}
            className={`${
                error ? 
                `border-error`
                : 
                "border-inputBorder"
            }
            border placeholder-placeholder rounded-lg py-3 px-4 w-full text-sm focus:outline-offset-0 focus:outline-none transition-all hover:border-inputBorderHover focus:border-koshaBlue ${styles}`}
            {...register?.(id, required)}
            {...props}
        />
    );
}