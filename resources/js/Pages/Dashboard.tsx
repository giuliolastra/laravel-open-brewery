import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';

export default function Dashboard() {
    const token = usePage().props.token;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <p>
                                <div className={"text-2xl font-bold"}>Welcome!</div>

                            Here's your <strong>Token</strong>: "<span className={"font-mono"}>{token}</span>"
                            </p>
                            <p className={"mt-5"}>
                                <h2 className={"text-xl"}>API</h2>
                                <ul className={"mx-4"}>
                                    <li className={"list-disc"}>
                                        <div className={"font-mono"}>/api/brew?page=1</div>
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
