"use client"

import { useSession } from '@/lib/auth-client';
import { Spinner } from "@heroui/react";
import { Briefcase, Persons, Thunderbolt, CircleCheck } from '@gravity-ui/icons';
import { DashboardStat } from '@/components/dashboard/DashboardStat';

const RecruiterDashboardPage = () => {
    const { data: session, isPending } = useSession()
    const user = session?.user

    if (isPending) {
        return (
            <div className="flex items-center gap-4">
                <Spinner />
            </div>
        );
    }

    const recruiterStats = [
        { title: "Total Job Posts", value: "48", icon: Briefcase },
        { title: "Total Applicants", value: "1,284", icon: Persons },
        { title: "Active Jobs", value: "18", icon: Thunderbolt },
        { title: "Jobs Closed", value: "32", icon: CircleCheck },
    ];

    return (
        <div>
            <h2 className='text-xl p-4 md:text-2xl lg:text-3xl font-bold'> Welcome back, {user?.name}</h2>
            <DashboardStat statsData={recruiterStats}/>
        </div>
    );
};

export default RecruiterDashboardPage;