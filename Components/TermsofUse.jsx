import React, { useState } from 'react';
import { FileText, Mail, Phone, Wallet, Clock, FileCheck, AlertCircle ,X} from 'lucide-react';

export default function TermsOfUse({setTermuse}) {
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleContactClick = (e) => {
    e.preventDefault();
    setShowConfirmation(true);
  };

  const confirmContact = () => {
    window.location.href = 'mailto:adityasolarservices01@gmail.com';
    setShowConfirmation(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-yellow-50">
      
{/* Header */}
<div className="bg-gradient-to-r from-orange-600 to-yellow-600 text-white py-8 sm:py-12 md:py-16 px-4 relative">
  {/* X Button on top-left */}
  <div className="absolute top-4 left-4 group cursor-pointer">
    <X onClick={()=>{setTermuse(false)}} className="w-6 h-6 sm:w-8 sm:h-8" />
    <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      Back
    </span>
  </div>

  <div className="max-w-4xl mx-auto">
    <div className="flex items-center justify-center mb-3 sm:mb-4">
      <FileText className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16" />
    </div>
    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 px-2">
      Terms of Use
    </h1>
    <p className="text-center text-orange-100 text-base sm:text-lg">
      Aditya Solar Energy
    </p>
    <p className="text-center text-orange-100 mt-2 text-sm sm:text-base">
      Effective Date: October 12, 2025
    </p>
  </div>
</div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 md:py-12">
        {/* Website Info */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8 border-l-4 border-orange-600">
          <p className="text-sm sm:text-base text-gray-700 mb-2 break-words">
            <strong>Website:</strong>{' '}
            <a 
              href="https://aditya-solar-services.vercel.app/" 
              className="text-orange-600 hover:underline break-all"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://aditya-solar-services.vercel.app/
            </a>
          </p>
          <p className="text-sm sm:text-base text-gray-700 break-words">
            <strong>Contact Email:</strong>{' '}
            <a 
              href="mailto:adityasolarservices01@gmail.com" 
              className="text-orange-600 hover:underline break-all"
            >
              adityasolarservices01@gmail.com
            </a>
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-8 sm:mb-10">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-blue-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
              <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              1. Contact Permissions
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <p className="text-sm sm:text-base text-gray-700 mb-4">
              By registering or submitting your information with us, you authorize Aditya Solar Energy to contact you via email, phone, WhatsApp, or SMS to:
            </p>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Provide our services,
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Share product knowledge,
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-blue-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Inform about promotions and offers.
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 sm:p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                This applies even if you are registered under DND/DNC/NCPR.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-8 sm:mb-10">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-green-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
              <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-green-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              2. Prepayment & Refunds
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  The user is required to make a small prepayment to confirm any service or project.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-green-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Advance payment is non-refundable under any circumstances.
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 sm:p-4 bg-red-50 border-l-4 border-red-400 rounded flex items-start">
              <AlertCircle className="w-5 h-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
              <p className="text-sm sm:text-base text-gray-700 font-medium">
                Important: All advance payments are non-refundable.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-8 sm:mb-10">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-purple-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              3. Shipping / Project Timeline
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  The project timeline typically ranges from 45 to 90 days.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-purple-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  In case of unforeseen delays, the timeline may be extended. Customers will be promptly notified of any such extensions.
                </p>
              </div>
            </div>
            <div className="mt-4 p-3 sm:p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
              <p className="text-sm sm:text-base text-gray-700">
                We are committed to keeping you informed throughout your project journey.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-8 sm:mb-10">
          <div className="flex items-center mb-3 sm:mb-4">
            <div className="bg-indigo-100 p-2 sm:p-3 rounded-full mr-3 sm:mr-4 flex-shrink-0">
              <FileCheck className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-600" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
              4. Other Terms
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  By using our website, you agree to provide accurate information during registration or while submitting forms.
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-600 mr-3 mt-1 text-lg flex-shrink-0">•</span>
                <p className="text-sm sm:text-base text-gray-700">
                  Aditya Solar Energy reserves the right to modify these Terms of Use at any time. Updates will be posted on the website, and continued use of the website constitutes acceptance of the updated terms.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-8 sm:mt-12 p-4 sm:p-6 bg-gradient-to-r from-orange-600 to-yellow-600 rounded-lg text-white text-center">
          <p className="text-base sm:text-lg font-semibold mb-2">
            Questions About Our Terms of Use?
          </p>
          <p className="text-sm sm:text-base text-orange-100 mb-4">
            We're here to help. Contact us anytime.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-flex items-center bg-white text-orange-600 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-orange-50 transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Contact Us
          </button>
        </div>

        {/* Confirmation Modal */}
        {showConfirmation && (
         <div className="fixed inset-0 bg-white/10 backdrop-blur-md flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-orange-600 mr-2" />
                <h3 className="text-xl font-bold text-gray-800">Confirm Contact</h3>
              </div>
              <p className="text-gray-700 mb-6">
                Do you want to send an email to Aditya Solar Energy?
              </p>
              <div className="flex gap-3 justify-end">
                <button
                  onClick={() => setShowConfirmation(false)}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg font-medium hover:bg-gray-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmContact}
                  className="px-4 py-2 bg-orange-600 text-white rounded-lg font-medium hover:bg-orange-700 transition-colors"
                >
                  Yes, Contact
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}