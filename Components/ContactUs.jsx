import { useState } from 'react';
import { Phone, Mail, MapPin, Send, Sun, Clock, Zap, Menu, X, Home, Info, Briefcase, PhoneCall } from 'lucide-react';
import {ModernSolarFAQ} from "./index.js";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    messageType: 'service',
    description: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    if (formData.name && formData.email && formData.mobile && formData.description) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          mobile: '',
          messageType: 'service',
          description: ''
        });
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
  

      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-12 lg:py-20">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 sm:mb-3">Get In Touch</h2>
            <p className="text-sm sm:text-base lg:text-xl opacity-95 mb-2 px-2">We're here to help with all your solar energy needs</p>
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm">
              <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Reliable • Efficient • Sustainable</span>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 80L60 70C120 60 240 40 360 30C480 20 600 20 720 25C840 30 960 40 1080 45C1200 50 1320 50 1380 50L1440 50V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z" fill="#F9FAFB"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto px-4 py-6 sm:py-8 lg:py-12 w-full">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
             {/* Left Column - Inquiry Form */}
          <div className="lg:top-24 h-fit">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-5 sm:p-6 lg:p-8 border border-gray-100">
              <div className="mb-5 sm:mb-6">
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 flex items-center gap-2 sm:gap-3">
                  <div className="bg-gradient-to-br from-orange-500 to-yellow-500 p-2 rounded-lg flex-shrink-0">
                    <Send className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span>Send Inquiry</span>
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">We'll respond within 24 hours</p>
              </div>

              {submitted && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-400 text-green-800 px-4 py-3 sm:py-4 rounded-xl mb-5 sm:mb-6 shadow-sm">
                  <p className="font-semibold text-sm sm:text-base">✓ Success!</p>
                  <p className="text-xs sm:text-sm">Your inquiry has been submitted.</p>
                </div>
              )}

              <div className="space-y-4 sm:space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-sm sm:text-base"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-sm sm:text-base"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition text-sm sm:text-base"
                    placeholder="10-digit mobile number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Inquiry Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="messageType"
                    value={formData.messageType}
                    onChange={handleChange}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none bg-white transition text-sm sm:text-base"
                  >
                    <option value="service">Service Request</option>
                    <option value="sales">Sales Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border-2 border-gray-200 rounded-lg sm:rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none resize-none transition text-sm sm:text-base"
                    placeholder="Tell us about your requirements..."
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 text-white font-bold py-3 sm:py-4 px-6 rounded-lg sm:rounded-xl hover:from-orange-600 hover:via-yellow-600 hover:to-orange-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center gap-2 text-sm sm:text-base"
                >
                  <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                  Submit Inquiry
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Info & Map */}
          <div className="space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-800">Contact Information</h3>
            
            <div className="space-y-4">
              {/* Phone Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-md flex-shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">Call Us Anytime</h4>
                    <a href="tel:9422809337" className="block text-orange-600 hover:text-orange-700 text-base sm:text-lg font-medium mb-1 transition break-all">
                      +91 94228 09337
                    </a>
                    <a href="tel:9284287565" className="block text-orange-600 hover:text-orange-700 text-base sm:text-lg font-medium transition break-all">
                      +91 92842 87565
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-md flex-shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">Email Us</h4>
                    <a href="mailto:adityasolarservices01@gmail.com" className="text-blue-600 hover:text-blue-700 break-all font-medium transition text-sm sm:text-base">
                      adityasolarservices01@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Address Card */}
              <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow border border-gray-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-green-500 to-green-600 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-md flex-shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">Visit Us</h4>
                    <p className="text-gray-700 mb-3 leading-relaxed text-sm sm:text-base">
                      Telhara, Akola, Maharashtra, India 444108
                    </p>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 border border-purple-100">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2.5 sm:p-3 rounded-lg sm:rounded-xl shadow-md flex-shrink-0">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 mb-2 text-base sm:text-lg">Business Hours</h4>
                    <p className="text-gray-700 text-sm sm:text-base">Monday - Saturday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-700 text-sm sm:text-base">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

          
          </div>

         
        </div>
{/* Google Map */}
<div className="bg-white mt-10 h-60 sm:h-80 rounded-xl sm:rounded-2xl shadow-lg overflow-hidden border border-gray-100">
  <div className="p-3 sm:p-4 bg-gradient-to-r from-orange-500 to-yellow-500">
    <h4 className="font-semibold text-white text-base sm:text-lg flex items-center gap-2">
      <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
      Our Location
    </h4>
  </div>
  <div className="relative w-full h-full">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d70436.43592912049!2d76.78887563043867!3d21.030297351475575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDAyJzM3LjIiTiA3NsKwNTAnNDcuMyJF!5e0!3m2!1sen!2sin!4v1760686481183!5m2!1sen!2sin"
      className="absolute top-0 left-0 w-full h-full"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </div>
</div>




      </main>

      
             {/* Freqreltly asked questions  */}
             <ModernSolarFAQ/>


    </div>
  );
}