import { home } from '@/routes';
import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import {
    Calendar,
    Clock,
    MapPin,
    User,
    BookOpen,
    GraduationCap
} from 'lucide-react';

interface PageProps {
    lectures: Array<any>;
    auth: {
        user: {
            role: string;
        };
    };
    [key: string]: any;
}

export default function Home({ lectures }: Readonly<{ lectures: Array<any> }>) {
    const { auth } = usePage<PageProps>().props;
    const isStudent = auth.user.role === 'student';

    const formatTime = (dateString: string): string => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };


    return (
        <AppLayout breadcrumbs={[{ title: 'Home', href: home().url }]}>
            <Head title="Home" />

            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100">
                            Your Schedule
                        </h1>
                        <p className="text-neutral-500 dark:text-neutral-400">
                            Upcoming lectures and classes
                        </p>
                    </div>
                </div>

                {lectures.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-12 text-center">
                        <div className="rounded-full bg-neutral-100 p-4 dark:bg-neutral-800">
                            <Calendar className="h-8 w-8 text-neutral-400" />
                        </div>
                        <h3 className="mt-4 text-lg font-semibold text-neutral-900 dark:text-neutral-100">
                            No lectures scheduled
                        </h3>
                        <p className="mt-2 text-neutral-500 dark:text-neutral-400">
                            You don't have any upcoming lectures at this time.
                        </p>
                    </div>
                ) : (
                    <div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm dark:border-neutral-700 dark:bg-neutral-800">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-sm">
                                <thead className="bg-neutral-50 text-neutral-500 dark:bg-neutral-700/50 dark:text-neutral-400">
                                    <tr>
                                        <th className="px-6 py-4 font-medium">Subject</th>
                                        <th className="px-6 py-4 font-medium">Room</th>
                                        <th className="px-6 py-4 font-medium">Schedule</th>
                                        <th className="px-6 py-4 font-medium">
                                            {isStudent ? 'Professor' : 'Class'}
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-neutral-200 dark:divide-neutral-700">
                                    {lectures.map((lecture) => (
                                        <tr
                                            key={lecture.id}
                                            className="hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="rounded-lg bg-blue-100 p-2 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                                        <BookOpen className="h-5 w-5" />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-neutral-900 dark:text-neutral-100">
                                                            {lecture.subject?.name}
                                                        </div>
                                                        <div className="text-xs text-neutral-500 text-nowrap">
                                                            {lecture.subject?.code}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-300">
                                                    <MapPin className="h-4 w-4 text-neutral-400" />
                                                    {lecture.room}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex flex-col gap-1">
                                                    <div className="flex items-center gap-2 font-medium text-neutral-900 dark:text-neutral-100">
                                                        <Calendar className="h-4 w-4 text-neutral-400" />
                                                        {lecture.day_of_week}
                                                    </div>
                                                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                                                        <Clock className="h-3 w-3" />
                                                        {formatTime(lecture.start_time)} - {formatTime(lecture.end_time)}
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2">
                                                    {isStudent ? (
                                                        <>
                                                            <div className="rounded-full bg-neutral-100 p-1 dark:bg-neutral-700">
                                                                <User className="h-4 w-4 text-neutral-500" />
                                                            </div>
                                                            <span className="text-neutral-700 dark:text-neutral-300">
                                                                {lecture.professor?.name}
                                                            </span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <div className="rounded-full bg-neutral-100 p-1 dark:bg-neutral-700">
                                                                <GraduationCap className="h-4 w-4 text-neutral-500" />
                                                            </div>
                                                            <span className="text-neutral-700 dark:text-neutral-300">
                                                                {lecture.class?.name}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
            </div>
        </AppLayout>
    );
}
