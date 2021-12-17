import Image from "next/image"
import { useMoralis } from "react-moralis"
function Login() {
    const { authenticate } = useMoralis()
    return (
        <div className="relative bg-black">
            <div className="absolute z-50 flex flex-col items-center justify-center w-full space-y-4 h-4/6">
                <Image src="https://links.papareact.com/3pi" height={200} width={200} className="object-cover rounded-full" />
                <button className="p-5 font-bold bg-yellow-500 rounded-lg animate-pulse" onClick={authenticate}>Login to the METAVERSE</button>
            </div>
            <div className="w-full h-screen">
                <Image src="https://links.papareact.com/55n" layout="fill" objectFit="cover" />
            </div>
        </div>
    )
}

export default Login
