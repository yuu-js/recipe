const Button = (props) => {
    const { children,variant = "bg-white"} = props;
    return (
        <button 
        className={`h-10 px-6 font-semibold rounded-md ${variant} text-black`}
        type="submit"
        >
        {children}
        </button>
    );
}

export default Button