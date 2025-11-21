import React from 'react';
import { Shield, Mail, Lock, UserCheck, Bell, RefreshCw, X } from 'lucide-react';
import { useTranslation } from "react-i18next";

export default function PrivacyPolicy({ setClick }) {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-8 sm:py-12 md:py-16 px-4 relative">
        {/* Back Button */}
        <div className="absolute top-4 left-4 group cursor-pointer">
          <X
            className="w-6 h-6 sm:w-8 sm:h-8"
            onClick={() => setClick(false)}
          />
          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 bg-black text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Back
          </span>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4" />
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2">
            {t("privacyPolicy.title")}
          </h1>
          <p className="text-blue-100 text-lg">{t("privacyPolicy.company")}</p>
          <p className="text-blue-100 mt-2">{t("privacyPolicy.effectiveDate")}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Website Info */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8 border-l-4 border-blue-600">
          <p className="text-gray-700 mb-2">
            <strong>{t("privacyPolicy.websiteInfo.website")}:</strong>{" "}
            <a
              href="https://aditya-solar-services.vercel.app/"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://aditya-solar-services.vercel.app/
            </a>
          </p>
          <p className="text-gray-700">
            <strong>{t("privacyPolicy.websiteInfo.email")}:</strong>{" "}
            <a
              href="mailto:adityasolarservices01@gmail.com"
              className="text-blue-600 hover:underline"
            >
              adityasolarservices01@gmail.com
            </a>
          </p>
        </div>

        {/* Section 1 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <UserCheck className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {t("privacyPolicy.sections.infoCollect.title")}
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              {t("privacyPolicy.sections.infoCollect.intro")}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>{t("privacyPolicy.sections.infoCollect.points.1")}</li>
              <li>{t("privacyPolicy.sections.infoCollect.points.2")}</li>
            </ul>
            <div className="mt-4 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="text-gray-700 font-medium">
                {t("privacyPolicy.sections.infoCollect.note")}
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <Bell className="w-6 h-6 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {t("privacyPolicy.sections.useInfo.title")}
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700 mb-4">
              {t("privacyPolicy.sections.useInfo.intro")}
            </p>
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>{t("privacyPolicy.sections.useInfo.points.1")}</li>
              <li>{t("privacyPolicy.sections.useInfo.points.2")}</li>
              <li>{t("privacyPolicy.sections.useInfo.points.3")}</li>
              <li>{t("privacyPolicy.sections.useInfo.points.4")}</li>
            </ul>
            <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
              <p className="text-gray-700">
                {t("privacyPolicy.sections.useInfo.note")}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {t("privacyPolicy.sections.choicesSecurity.title")}
            </h2>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <ul className="list-disc ml-6 space-y-2 text-gray-700">
              <li>
                {t("privacyPolicy.sections.choicesSecurity.points.1")}{" "}
                <a
                  href="mailto:adityasolarservices01@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  adityasolarservices01@gmail.com
                </a>
              </li>
              <li>{t("privacyPolicy.sections.choicesSecurity.points.2")}</li>
              <li>{t("privacyPolicy.sections.choicesSecurity.points.3")}</li>
            </ul>

            <div className="mt-6 p-6 bg-gradient-to-r from-orange-50 to-red-50 rounded-lg border border-orange-200">
              <h3 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                <Mail className="w-5 h-5 mr-2 text-orange-600" />
                {t("privacyPolicy.sections.choicesSecurity.grievance.title")}
              </h3>
              <p className="text-gray-700">
                <strong>Name:</strong>{" "}
                {t("privacyPolicy.sections.choicesSecurity.grievance.name")}
              </p>
              <p className="text-gray-700">
                <strong>Address:</strong>{" "}
                {t("privacyPolicy.sections.choicesSecurity.grievance.address")}
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:adityasolarservices01@gmail.com"
                  className="text-blue-600 hover:underline"
                >
                  adityasolarservices01@gmail.com
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section className="mb-10">
          <div className="flex items-center mb-4">
            <div className="bg-indigo-100 p-3 rounded-full mr-4">
              <RefreshCw className="w-6 h-6 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              {t("privacyPolicy.sections.updatePolicy.title")}
            </h2>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-gray-700">
              {t("privacyPolicy.sections.updatePolicy.desc")}
            </p>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-12 p-6 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg text-white text-center">
          <p className="text-lg font-semibold mb-2">
            {t("privacyPolicy.footer.question")}
          </p>
          <p className="text-blue-100 mb-4">{t("privacyPolicy.footer.help")}</p>
          <a
            href="mailto:adityasolarservices01@gmail.com"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            <Mail className="w-5 h-5 mr-2" />
            {t("privacyPolicy.footer.button")}
          </a>
        </div>
      </div>
    </div>
  );
}
