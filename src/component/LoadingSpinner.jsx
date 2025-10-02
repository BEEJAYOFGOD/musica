import Logo from "../../src/assets/icons/Logo.svg";
const LoadingSpinner = () => {
    return (
        <div className="min-h-screen w-screen flex justify-center items-center">
            <div>
                <img
                    className="mx-auto w-22 animate-bounce"
                    src={Logo}
                    alt="logo"
                />
            </div>
        </div>
    );
};

export default LoadingSpinner;
