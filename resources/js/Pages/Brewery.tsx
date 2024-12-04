import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import {Head, usePage} from '@inertiajs/react';
import NavLink from "@/Components/NavLink";

export default function Dashboard() {
    const results = usePage().props.results;
    const current: string = usePage().props.current as string;
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Brewery API
                </h2>
            }
        >
            <Head title="Brewery API"/>

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100 flex flex-1 justify-between">
                            {current <= 1 ?
                                <div></div> :
                                <div>
                                    <NavLink
                                        href={route('brewery.paginated', {page: parseInt(current) - 1})}
                                     active={false} className="font-bold">
                                        ⬅️ Prev
                                    </NavLink>
                                </div>
                            }
                            {current >= 1 ?
                                <div>
                                    <NavLink
                                        href={route('brewery.paginated', {page: parseInt(current) + 1})}
                                     active={false} className="font-bold">
                                        Next ➡️
                                    </NavLink>
                                </div> :
                                <div></div>
                            }
                        </div>
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <ul role="list" className="divide-y divide-gray-100"></ul>
                            {results.map((element: any, index: number) => (
                                <li className={`px-6 py-2 ${index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}`}>
                                    {element.name}
                                </li>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
