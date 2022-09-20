import Logo from '../../assets/images/default-monochrome-white.svg';

type ClientSignupProps = {
    setName: (name: string) => any,
    setUserId: (email: string) => any,
    sendName: () => any,
    signupUser: () => any,
    handleKeyPress: (e: string) => any,
    isEmailValid: boolean
}

const signupStateComponent = (props: ClientSignupProps) => {
    return (
        <div className="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full p-10 mt-16">
            <p tabIndex={0} className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800">Demo Signup Form</p>
            <div className="w-full flex items-center justify-between py-5">
            </div>
            <div>
                <label id="name" className="text-sm font-medium leading-none text-gray-800">
                Name
                </label>
                <input aria-labelledby="name" onKeyPress={event => props.handleKeyPress(event.key)} onChange={event => props.setUserId(event.target.value)} type="email" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
            </div>
            <div>
                <label id="email" className="text-sm font-medium leading-none text-gray-800">
                Email
                </label>
                <input aria-labelledby="email" onKeyPress={event => props.handleKeyPress(event.key)} onChange={event => props.setUserId(event.target.value)} type="email" className="bg-gray-200 border rounded  text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"/>
            </div>
            {!props.isEmailValid && <p>Email Not Valid</p>}
            <div className="mt-8">
                <button role="button" onClick={() => {props.sendName()}} className="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full">Validate</button>
            </div>
        </div>
    );
}

const ClientSignup = ({signupUser, setUserId, sendName, setName, handleKeyPress, isEmailValid}: ClientSignupProps) => {
	return (
        <div className="h-screen bg-blue py-24 px-4">
            <div className="flex flex-col items-center justify-center">
                <a href="https://app.rapidapps.dev" target="_blank">
                <img src={Logo} width="216" height="36" alt="Rapid Apps" />
                </a>
                {signupStateComponent({signupUser, setUserId, sendName, setName, handleKeyPress, isEmailValid})}
            </div>
        </div>
	);
};

export default ClientSignup;