export default function Button({children, ...props}){
    return <button
        class='bg-blue-800 rounded-md p-1 px-2 mr-4 text-white'
        {...props}
    >
        {children}
    </button>
}