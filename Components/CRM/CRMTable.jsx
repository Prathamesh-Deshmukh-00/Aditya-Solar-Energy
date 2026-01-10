import React, { useState } from 'react';
import { Search, Trash2, Eye, Filter } from 'lucide-react';

export default function CRMTable({
    data,
    title,
    columns,
    onDelete,
    onView,
    searchTerm,
    setSearchTerm,
    filterType,
    setFilterType,
    filterOptions = []
}) {
    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <h2 className="text-xl font-bold text-gray-800">{title}</h2>

                <div className="flex flex-col sm:flex-row gap-3">
                    {/* Search */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-64"
                        />
                    </div>

                    {/* Filter */}
                    {filterOptions.length > 0 && (
                        <div className="relative">
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                            <select
                                value={filterType}
                                onChange={(e) => setFilterType(e.target.value)}
                                className="pl-9 pr-8 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white cursor-pointer"
                            >
                                <option value="all">All Types</option>
                                {filterOptions.map(opt => (
                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50 text-gray-500 text-xs uppercase tracking-wider">
                            {columns.map((col, idx) => (
                                <th key={idx} className="px-6 py-4 font-semibold border-b border-gray-100">
                                    {col.header}
                                </th>
                            ))}
                            <th className="px-6 py-4 font-semibold border-b border-gray-100 text-right">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {data.length === 0 ? (
                            <tr>
                                <td colSpan={columns.length + 1} className="px-6 py-12 text-center text-gray-400">
                                    <div className="flex flex-col items-center justify-center">
                                        <div className="bg-gray-50 p-4 rounded-full mb-3">
                                            <Search className="w-6 h-6 text-gray-300" />
                                        </div>
                                        <p>No records found</p>
                                    </div>
                                </td>
                            </tr>
                        ) : (
                            data.map((item) => (
                                <tr key={item._id} className="hover:bg-gray-50/50 transition-colors group">
                                    {columns.map((col, idx) => (
                                        <td key={idx} className="px-6 py-4 text-sm text-gray-600 whitespace-nowrap">
                                            {col.render ? col.render(item) : item[col.key]}
                                        </td>
                                    ))}
                                    <td className="px-6 py-4 text-right whitespace-nowrap">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button
                                                onClick={() => onView(item)}
                                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                title="View Details"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button
                                                onClick={() => onDelete(item._id)}
                                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                title="Delete"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            {/* Footer / Pagination (Simple count for now) */}
            <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-400">
                Showing {data.length} records
            </div>
        </div>
    );
}
