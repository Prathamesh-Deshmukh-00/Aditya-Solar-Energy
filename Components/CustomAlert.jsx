import React, { useEffect } from 'react';
import { X, CheckCircle, AlertTriangle, Info } from 'lucide-react';

const CustomAlert = ({ isOpen, type, message, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const getAlertStyle = () => {
        switch (type) {
            case 'success':
                return {
                    bg: 'bg-green-50',
                    border: 'border-green-400',
                    text: 'text-green-800',
                    icon: <CheckCircle className="w-6 h-6 text-green-500" />
                };
            case 'error':
                return {
                    bg: 'bg-red-50',
                    border: 'border-red-400',
                    text: 'text-red-800',
                    icon: <AlertTriangle className="w-6 h-6 text-red-500" />
                };
            case 'warning':
                return {
                    bg: 'bg-yellow-50',
                    border: 'border-yellow-400',
                    text: 'text-yellow-800',
                    icon: <AlertTriangle className="w-6 h-6 text-yellow-500" />
                };
            default:
                return {
                    bg: 'bg-blue-50',
                    border: 'border-blue-400',
                    text: 'text-blue-800',
                    icon: <Info className="w-6 h-6 text-blue-500" />
                };
        }
    };

    const style = getAlertStyle();

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm">
            <div
                className={`relative w-full max-w-md p-6 rounded-2xl shadow-2xl border ${style.bg} ${style.border} transform transition-all animate-in fade-in zoom-in duration-300`}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-0.5">
                        {style.icon}
                    </div>
                    <div className="flex-1">
                        <h3 className={`font-bold text-lg mb-1 ${style.text} capitalize`}>
                            {type === 'success' ? 'Success' : type === 'error' ? 'Error' : 'Attention'}
                        </h3>
                        <p className={`${style.text} opacity-90 text-sm leading-relaxed`}>
                            {message}
                        </p>
                    </div>
                </div>

                <div className="mt-6 flex justify-end">
                    <button
                        onClick={onClose}
                        className={`px-6 py-2 rounded-xl font-semibold text-sm transition-transform hover:scale-105 active:scale-95 ${type === 'success'
                                ? 'bg-green-500 text-white hover:bg-green-600'
                                : type === 'error'
                                    ? 'bg-red-500 text-white hover:bg-red-600'
                                    : 'bg-yellow-500 text-white hover:bg-yellow-600'
                            }`}
                    >
                        Okay, Got it
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CustomAlert;
