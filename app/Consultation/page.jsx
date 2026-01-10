'use client';
import React, { useState, useEffect } from 'react';
import { IndianRupee, MapPin, Zap, Filter } from 'lucide-react';
import StatsCard from '../../Components/CRM/StatsCard';
import CRMTable from '../../Components/CRM/CRMTable';
import InquiryModal from '../../Components/CRM/InquiryModal';
import { CustomAlert } from '../../Components/index';

export default function ConsultationPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);
    const [alertState, setAlertState] = useState({ isOpen: false, type: 'info', message: '' });

    const fetchData = async () => {
        try {
            const response = await fetch('/api/inquiry');
            const result = await response.json();
            if (Array.isArray(result)) {
                setData(result);
            }
        } catch (error) {
            console.error('Error fetching consultations:', error);
            showAlert('error', 'Failed to fetch consultations');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const showAlert = (type, message) => {
        setAlertState({ isOpen: true, type, message });
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this consultation?')) return;

        try {
            const response = await fetch(`/api/inquiry?id=${id}`, { method: 'DELETE' });
            const result = await response.json();

            if (response.ok) {
                showAlert('success', 'Consultation deleted successfully');
                setData(data.filter(item => item._id !== id));
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            showAlert('error', 'Failed to delete consultation');
        }
    };

    const filteredData = data.filter(item => {
        const matchesSearch =
            item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.phone?.includes(searchTerm) ||
            item.pincode?.includes(searchTerm);

        // Logic for bill filtering can be added here if needed
        const matchesFilter = filterType === 'all' || item.bill === filterType;

        return matchesSearch && matchesFilter;
    });

    const columns = [
        { header: 'Date', key: 'createdAt', render: (item) => new Date(item.createdAt).toLocaleDateString() },
        {
            header: 'Customer', key: 'name', render: (item) => (
                <div className="font-medium text-gray-900">{item.name}</div>
            )
        },
        { header: 'Phone', key: 'phone' },
        { header: 'Pincode', key: 'pincode' },
        {
            header: 'Monthly Bill', key: 'bill', render: (item) => (
                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-orange-100 text-orange-700">
                    ₹ {item.bill}
                </span>
            )
        },
        {
            header: 'Service', key: 'service', render: (item) => (
                <span className="text-sm text-gray-600">
                    {item.service || 'General'}
                </span>
            )
        }
    ];

    const billOptions = [
        { value: '<1500', label: '< ₹1500' },
        { value: '1500-2500', label: '₹1500 - ₹2500' },
        { value: '2500-4000', label: '₹2500 - ₹4000' },
        { value: '4000-8000', label: '₹4000 - ₹8000' },
        { value: '>8000', label: '> ₹8000' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Consultation Dashboard</h1>
                        <p className="text-gray-500">Manage your solar consultation requests</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatsCard
                        title="Total Requests"
                        value={data.length}
                        icon={Zap}
                        color="orange"
                    />
                    <StatsCard
                        title="High Value (>4k Bill)"
                        value={data.filter(i => {
                            const bill = i.bill;
                            return bill === '4000-8000' || bill === '>8000';
                        }).length}
                        icon={IndianRupee}
                        color="green"
                    />
                    <StatsCard
                        title="Local Inquiries"
                        value={data.filter(i => i.pincode?.startsWith('44')).length}
                        icon={MapPin}
                        color="blue"
                    />
                    <StatsCard
                        title="New Today"
                        value={data.filter(i => new Date(i.createdAt).toDateString() === new Date().toDateString()).length}
                        icon={Filter}
                        color="purple"
                    />
                </div>

                {/* Table */}
                <CRMTable
                    title="Recent Consultations"
                    data={filteredData}
                    columns={columns}
                    onDelete={handleDelete}
                    onView={setSelectedItem}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filterType={filterType}
                    setFilterType={setFilterType}
                    filterOptions={billOptions}
                />
            </div>

            <InquiryModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                data={selectedItem}
                type="consultation"
            />

            <CustomAlert
                isOpen={alertState.isOpen}
                type={alertState.type}
                message={alertState.message}
                onClose={() => setAlertState({ ...alertState, isOpen: false })}
            />
        </div>
    );
}
