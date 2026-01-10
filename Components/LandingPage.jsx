import React, { useState, useEffect } from 'react';
import { Phone, Info, Clock, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import {
  SolarSquarePromo,
  Footer,
  ModernSolarFAQ,
  Header,
  SolarTimeline,
  SolarBuyingGuide,
  OnGridSolarSystem,
  Services,
  HeroScrollContent,
  VideoCarousel,
  CustomAlert
} from "./index.js";

export default function AdityaSolarServices({ setClick, setTermuse }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pincode: '',
    service: '',
    bill: ''
  });
  const [showStickyFooter, setShowStickyFooter] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [alertState, setAlertState] = useState({
    isOpen: false,
    type: 'info',
    message: ''
  });

  const { t } = useTranslation();

  const showAlert = (type, message) => {
    setAlertState({ isOpen: true, type, message });
  };

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('hero-form');
      if (formSection) {
        const rect = formSection.getBoundingClientRect();
        setShowStickyFooter(rect.top > window.innerHeight || rect.bottom < 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const billRanges = [
    { value: '<1500', label: t('adityaSolarServices.form.fields.bill.options.lt1500') },
    { value: '1500-2500', label: t('adityaSolarServices.form.fields.bill.options.bt1500_2500') },
    { value: '2500-4000', label: t('adityaSolarServices.form.fields.bill.options.bt2500_4000') },
    { value: '4000-8000', label: t('adityaSolarServices.form.fields.bill.options.bt4000_8000') },
    { value: '>8000', label: t('adityaSolarServices.form.fields.bill.options.gt8000') }
  ];

  const handleNumberInput = (e, field) => {
    const value = e.target.value.replace(/\D/g, '');
    // Limit to 10 digits for phone
    if (field === 'phone' && value.length > 10) return;
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    // Validate terms
    if (!termsAccepted) {
      showAlert('warning', "Please agree to the Terms of Service & Privacy Policy to proceed.");
      return;
    }

    // Validate required fields
    if (!formData.name || !formData.phone || !formData.bill) {
      showAlert('warning', t('adityaSolarServices.form.alert.fillFields'));
      return;
    }

    // Validate Indian Phone Number
    const indianPhoneRegex = /^[6-9]\d{9}$/;
    if (!indianPhoneRegex.test(formData.phone)) {
      showAlert('warning', "Please enter a valid 10-digit Indian mobile number (starts with 6-9).");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      // Success
      showAlert('success', t('adityaSolarServices.form.alert.thankYou'));
      setFormData({ name: '', phone: '', pincode: '', service: '', bill: '' });
      setTermsAccepted(false);
    } catch (error) {
      console.error('Submission error:', error);
      showAlert('error', 'Failed to submit inquiry. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen min-w-full bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 py-6 sm:py-8 md:py-12">
        <div className="max-w-7xl mx-auto px-3 sm:px-5 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
            {/* Left Section */}
            <div className="space-y-5 sm:space-y-6">
              <HeroScrollContent />
              <VideoCarousel />

              {/* Contact Cards */}
              <div className="hidden lg:grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-6 h-6 text-orange-400" />
                    <div>
                      <p className="text-xs text-blue-200 font-medium">{t('adityaSolarServices.contactCards.callNow')}</p>
                      <a href="tel:9284287565" className="text-lg font-bold text-white hover:text-orange-400">
                        9284287565
                      </a>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-orange-400" />
                    <div>
                      <p className="text-xs text-blue-200 font-medium">{t('adityaSolarServices.contactCards.businessHours')}</p>
                      <p className="text-sm font-bold w-xl text-white">{t('adityaSolarServices.contactCards.hours')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div id="hero-form" className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-2xl p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1">
                {t('adityaSolarServices.heroSection.title')}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm mb-5 sm:mb-6">
                {t('adityaSolarServices.heroSection.subtitle')}
              </p>

              <div className="space-y-3 sm:space-y-4">
                {/* Full Name */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    {t('adityaSolarServices.form.fields.name.label')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder={t('adityaSolarServices.form.fields.name.placeholder')}
                  />
                </div>

                {/* WhatsApp */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    {t('adityaSolarServices.form.fields.phone.label')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleNumberInput(e, 'phone')}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder={t('adityaSolarServices.form.fields.phone.placeholder')}
                  />
                </div>

                {/* Pincode */}
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1">
                    {t('adityaSolarServices.form.fields.pincode.label')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={formData.pincode}
                    onChange={(e) => handleNumberInput(e, 'pincode')}
                    className="w-full px-3 py-2 sm:px-4 sm:py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none text-sm"
                    placeholder={t('adityaSolarServices.form.fields.pincode.placeholder')}
                  />
                </div>

                {/* Bill */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs sm:text-sm font-medium text-gray-700">
                      {t('adityaSolarServices.form.fields.bill.label')} <span className="text-red-500">*</span>
                    </label>
                    <Info className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    {billRanges.map((range) => (
                      <button
                        key={range.value}
                        onClick={() => setFormData({ ...formData, bill: range.value })}
                        className={`px-2 sm:px-3 py-2 rounded-lg border text-xs sm:text-sm font-medium text-left transition ${formData.bill === range.value
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-blue-300'
                          }`}
                      >
                        {range.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Terms */}
                <div className="flex items-start space-x-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={termsAccepted}
                    onChange={(e) => setTermsAccepted(e.target.checked)}
                    required
                  />
                  <label htmlFor="terms" className="text-xs text-gray-600 leading-snug">
                    {t('adityaSolarServices.form.fields.terms.text')}{' '}
                    <a href="#" onClick={() => setTermuse(true)} className="text-blue-600 underline">
                      {t('adityaSolarServices.form.fields.terms.tos')}
                    </a>{' '}
                    &{' '}
                    <a href="#" onClick={() => setClick(true)} className="text-blue-600 underline">
                      {t('adityaSolarServices.form.fields.terms.privacy')}
                    </a>
                  </label>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold py-3 sm:py-3.5 rounded-full hover:shadow-xl transform hover:scale-[1.02] transition text-sm sm:text-base ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                    }`}
                >
                  {isSubmitting ? 'Submitting...' : t('adityaSolarServices.form.button')}
                </button>
              </div>
            </div>
          </div>

          {/* Google Review */}
          <div className="flex items-center justify-center mt-6 sm:mt-8 space-x-3 sm:space-x-4 flex-wrap">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="text-white font-medium text-xs sm:text-sm">
              {t('adityaSolarServices.heroSection.rating.text')}
            </span>
          </div>
        </div>
      </section>

      {/* Sticky Footer (Mobile Only) */}
      {showStickyFooter && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2.5 sm:py-3 px-3 sm:px-4 shadow-2xl md:hidden z-50">
          <div className="flex items-center justify-between max-w-xl mx-auto">
            <span className="font-semibold text-xs sm:text-sm">
              {t('adityaSolarServices.stickyFooter.text')}
            </span>
            <a
              href="#hero-form"
              className="bg-orange-500 text-white px-4 sm:px-5 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm hover:bg-orange-600"
            >
              {t('adityaSolarServices.stickyFooter.button')}
            </a>
          </div>
        </div>
      )}

      {/* Styled Alert Popup */}
      <CustomAlert
        isOpen={alertState.isOpen}
        type={alertState.type}
        message={alertState.message}
        onClose={() => setAlertState({ ...alertState, isOpen: false })}
      />
    </div>
  );
}
