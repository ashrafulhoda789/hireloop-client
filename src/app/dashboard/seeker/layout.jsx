import { requireRole } from '@/lib/core/session';

const SeekerLayout = async ({ children }) => {
    await requireRole('seeker')
    return (
        <div className='flex gap-10 min-h-screen'>
            <div className='flex-1'>
                {children}
            </div>
        </div>
    );
};

export default SeekerLayout;