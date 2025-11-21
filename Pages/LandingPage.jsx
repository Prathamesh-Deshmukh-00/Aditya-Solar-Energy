import React, { useState } from 'react'
import  {AdityaSolarServices ,PrivacyPolicy,TermsOfUse, SolarSquarePromo, Footer} from "../Components/index.js"
import { Shield, Mail, Lock, UserCheck, Bell, RefreshCw } from 'lucide-react';
// import PrivacyPolicy from "../Components/Privacypolicy.jsx"

function LandingPage() {
  const [click , setClick] = useState(false);
  const [temrmsuse , setTermuse ] = useState(false);
  return (
    <>
    {

  temrmsuse ? <TermsOfUse setTermuse = {setTermuse}/> : click ? <PrivacyPolicy setClick = {setClick}  />  : <AdityaSolarServices setClick = {setClick} setTermuse={setTermuse}/> 

    }
    
    </>
  )

}

export  {LandingPage};