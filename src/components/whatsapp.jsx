import { FaWhatsapp } from "react-icons/fa"

export default function WhatsAppBtn(){

const phoneNumber = "919876543210"
// 🔴 ADD YOUR NUMBER HERE
// format: countrycode + number
// example India: 91XXXXXXXXXX

const openWhatsApp = () => {
  window.open(`https://wa.me/${phoneNumber}`, "_blank")
}

return(

<button
onClick={openWhatsApp}
className="fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 w-12 h-12 flex items-center justify-center rounded-full shadow-lg transition"
>

<FaWhatsapp size={26} color="white"/>

</button>

)

}