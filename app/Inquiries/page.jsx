'use client';
import React, { useState, useEffect } from 'react';
import { Users, Filter, LayoutGrid, MessageSquare } from 'lucide-react';
import StatsCard from '../../Components/CRM/StatsCard';
import CRMTable from '../../Components/CRM/CRMTable';
import InquiryModal from '../../Components/CRM/InquiryModal';
import { CustomAlert } from '../../Components/index';

export default function InquiriesPage() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filterType, setFilterType] = useState('all');
    const [selectedItem, setSelectedItem] = useState(null);
    const [alertState, setAlertState] = useState({ isOpen: false, type: 'info', message: '' });

    const fetchData = async () => {
        try {
            const response = await fetch('/api/contact');
            const result = await response.json();
            if (Array.isArray(result)) {
                setData(result);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
            showAlert('error', 'Failed to fetch inquiries');
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
        if (!confirm('Are you sure you want to delete this inquiry?')) return;

        try {
            const response = await fetch(`/api/contact?id=${id}`, { method: 'DELETE' });
            const result = await response.json();

            if (response.ok) {
                showAlert('success', 'Inquiry deleted successfully');
                setData(data.filter(item => item._id !== id));
            } else {
                throw new Error(result.error);
            }
        } catch (error) {
            showAlert('error', 'Failed to delete inquiry');
        }
    };

    const filteredData = data.filter(item => {
        const matchesSearch =
            item.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.mobile?.includes(searchTerm);

        const matchesFilter = filterType === 'all' || item.messageType === filterType;

        return matchesSearch && matchesFilter;
    });

    const columns = [
        { header: 'Date', key: 'createdAt', render: (item) => new Date(item.createdAt).toLocaleDateString() },
        {
            header: 'Customer', key: 'name', render: (item) => (
                <div>
                    <div className="font-medium text-gray-900">{item.name}</div>
                    <div className="text-xs text-gray-500">{item.email}</div>
                </div>
            )
        },
        { header: 'Mobile', key: 'mobile' },
        {
            header: 'Type', key: 'messageType', render: (item) => (
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.messageType === 'service' ? 'bg-blue-100 text-blue-700' : 'bg-purple-100 text-purple-700'
                    }`}>
                    {item.messageType}
                </span>
            )
        },
        {
            header: 'Status', key: 'status', render: () => (
                <span className="px-2 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                    New
                </span>
            )
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 p-6 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800">Inquiries Dashboard</h1>
                        <p className="text-gray-500">Manage your contact form submissions</p>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    <StatsCard
                        title="Total Inquiries"
                        value={data.length}
                        icon={LayoutGrid}
                        color="blue"
                    />
                    <StatsCard
                        title="Service Requests"
                        value={data.filter(i => i.messageType === 'service').length}
                        icon={Filter}
                        color="purple"
                    />
                    <StatsCard
                        title="Sales Inquiries"
                        value={data.filter(i => i.messageType === 'sales').length}
                        icon={Users}
                        color="orange"
                    />
                    <StatsCard
                        title="New Today"
                        value={data.filter(i => new Date(i.createdAt).toDateString() === new Date().toDateString()).length}
                        icon={MessageSquare}
                        color="green"
                    />
                </div>

                {/* Table */}
                <CRMTable
                    title="Recent Inquiries"
                    data={filteredData}
                    columns={columns}
                    onDelete={handleDelete}
                    onView={setSelectedItem}
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    filterType={filterType}
                    setFilterType={setFilterType}
                    filterOptions={[
                        { value: 'service', label: 'Service Request' },
                        { value: 'sales', label: 'Sales Inquiry' }
                    ]}
                />
            </div>

            <InquiryModal
                isOpen={!!selectedItem}
                onClose={() => setSelectedItem(null)}
                data={selectedItem}
                type="inquiry"
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
