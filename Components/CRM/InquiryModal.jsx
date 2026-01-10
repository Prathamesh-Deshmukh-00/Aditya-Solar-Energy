import React from 'react';
import { X, Calendar, User, Mail, Phone, Tag, FileText, MapPin, CreditCard } from 'lucide-react';

export default function InquiryModal({ isOpen, onClose, data, type = 'inquiry' }) {
    if (!isOpen || !data) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white w-full max-w-2xl rounded-2xl shadow-xl border border-gray-100 overflow-hidden animate-in zoom-in-95 duration-200">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-gray-50/50">
                    <h3 className="text-xl font-bold text-gray-800">
                        {type === 'inquiry' ? 'Inquiry Details' : 'Consultation Details'}
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* User Info Section */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Customer Info</h4>

                        <div className="flex items-center gap-3 text-gray-700">
                            <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                                <User className="w-4 h-4" />
                            </div>
                            <span className="font-medium">{data.name}</span>
                        </div>

                        {data.email && (
                            <div className="flex items-center gap-3 text-gray-700">
                                <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                                    <Mail className="w-4 h-4" />
                                </div>
                                <span>{data.email}</span>
                            </div>
                        )}

                        <div className="flex items-center gap-3 text-gray-700">
                            <div className="p-2 bg-green-50 text-green-600 rounded-lg">
                                <Phone className="w-4 h-4" />
                            </div>
                            <span>{data.mobile || data.phone}</span>
                        </div>

                        <div className="flex items-center gap-3 text-gray-700">
                            <div className="p-2 bg-gray-50 text-gray-600 rounded-lg">
                                <Calendar className="w-4 h-4" />
                            </div>
                            <span className="text-sm">
                                {new Date(data.createdAt).toLocaleString(undefined, {
                                    dateStyle: 'medium',
                                    timeStyle: 'short'
                                })}
                            </span>
                        </div>
                    </div>

                    {/* Details Section */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Requirement Details</h4>

                        {data.messageType && (
                            <div className="flex items-start gap-3 text-gray-700">
                                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg mt-0.5">
                                    <Tag className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-0.5">Type</p>
                                    <span className="font-medium capitalize">{data.messageType}</span>
                                </div>
                            </div>
                        )}

                        {data.service && (
                            <div className="flex items-start gap-3 text-gray-700">
                                <div className="p-2 bg-orange-50 text-orange-600 rounded-lg mt-0.5">
                                    <Tag className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-0.5">Service</p>
                                    <span className="font-medium capitalize">{data.service}</span>
                                </div>
                            </div>
                        )}

                        {data.bill && (
                            <div className="flex items-start gap-3 text-gray-700">
                                <div className="p-2 bg-emerald-50 text-emerald-600 rounded-lg mt-0.5">
                                    <CreditCard className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-0.5">Monthly Bill</p>
                                    <span className="font-medium capitalize">{data.bill}</span>
                                </div>
                            </div>
                        )}

                        {data.pincode && (
                            <div className="flex items-start gap-3 text-gray-700">
                                <div className="p-2 bg-red-50 text-red-600 rounded-lg mt-0.5">
                                    <MapPin className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-0.5">Pincode</p>
                                    <span className="font-medium capitalize">{data.pincode}</span>
                                </div>
                            </div>
                        )}

                        {data.description && (
                            <div className="flex items-start gap-3 text-gray-700">
                                <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg mt-0.5">
                                    <FileText className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-xs text-gray-500 mb-0.5">Message</p>
                                    <p className="text-sm leading-relaxed text-gray-600">{data.description}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Footer */}
                <div className="p-6 bg-gray-50/50 flex justify-end gap-3 border-t border-gray-100">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-600 font-medium hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        Close
                    </button>
                    <a
                        href={`tel:${data.mobile || data.phone}`}
                        className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                    >
                        <Phone className="w-4 h-4" />
                        <span>Call Now</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
