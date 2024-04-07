'use client';

// import DashboardLayout from '@/components/DemoDashboardLayout'
import React, { useState } from 'react'
import DashboardLayout from '@/components/DashboardLayout';
import Profile from '@/components/Profile/Profile';
const page = () => {
    const [tableData, setTableData] = useState([
        {
            id: '5146846548465',
            name: 'Cameron Williamson',
            whatsapp: '08071798413',
            email: 'trungkienspktnd@gmail.com',
            date: '2/19/21',
            status: 'Completed',
            location: 'Dugbe, Molete, Akobo, Eleyele, Bodija'
        },
        {
            id: '1345705945446',
            name: 'Jane Cooper',
            whatsapp: '08071798413',
            email: 'trungkienspktnd@gmail.com',
            date: '2/19/21',
            status: 'In review',
            location: 'Dugbe,Molete, Akobo,...'
        },
        {
            id: '1243467984543',
            name: 'Wade Warren',
            whatsapp: '08071798413',
            email: 'trungkienspktnd@gmail.com',
            date: '2/19/21',
            status: 'Completed',
            location: 'Dugbe,Molete, Akobo,...'
        },
        {
            id: '1345705945446',
            name: 'Cameron Williamson',
            whatsapp: '08071798413',
            email: 'trungkienspktnd@gmail.com',
            date: '2/19/21',
            status: 'In review',
            location: 'Dugbe,Molete, Akobo,...'
        },
        {
            id: '1243467984543',
            name: 'Wade Warren',
            whatsapp: '08071798413',
            email: 'trungkienspktnd@gmail.com',
            date: '2/19/21',
            status: 'Completed',
            location: 'Dugbe,Molete, Akobo,...'
        },
        {
            id: '1345705945446',
            name: 'Cameron Williamson',
            whatsapp: '08071798413',
            email: 'trungkienspktnd@gmail.com',
            date: '2/19/21',
            status: 'In review',
            location: 'Dugbe,Molete, Akobo,...'
        },

    ])
    const [searchQuery, setSearchQuery] = useState('');
    const [showModal, setShowModal] = useState<boolean>(false)

    const handleSearch = (e: any) => {
        const query = e.target.value;
        setSearchQuery(query)

        const filteredData = tableData.filter((row) => row.name.toLowerCase().includes(query.toLowerCase()));
        setTableData(filteredData)
    }
    return (
        <DashboardLayout>
        <Profile/>
        </DashboardLayout>
    )
}

export default page