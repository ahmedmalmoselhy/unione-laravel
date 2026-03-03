import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar';
import { index as administrationIndex } from '@/routes/administration';
import { index as classesIndex } from '@/routes/classes';
import { index as departmentsIndex } from '@/routes/departments';
import { index as employeesIndex } from '@/routes/employees';
import { index as facultiesIndex } from '@/routes/faculties';
import { index as lecturesIndex } from '@/routes/lectures';
import { index as professorsIndex } from '@/routes/professors';
import { index as studentsIndex } from '@/routes/students';
import { index as subjectsIndex } from '@/routes/subjects';
import { dashboard, home } from '@/routes';
import { type NavItem, type SharedData } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, BriefcaseBusiness, Building2, Folder, GraduationCap, LayoutGrid, School, ShieldCheck, SquareUserRound, Users } from 'lucide-react';
import AppLogo from './app-logo';

export function AppSidebar() {
    const { auth } = usePage<SharedData>().props;
    const isAdmin = auth.user.role === 'admin';

    const mainNavItems: NavItem[] = [
        ...(isAdmin ? [{
            title: 'Dashboard',
            href: dashboard(),
            icon: LayoutGrid,
        }, {
            title: 'Faculties',
            href: facultiesIndex(),
            icon: Building2,
        }, {
            title: 'Departments',
            href: departmentsIndex(),
            icon: School,
        }, {
            title: 'Subjects',
            href: subjectsIndex(),
            icon: BookOpen,
        }, {
            title: 'Classes',
            href: classesIndex(),
            icon: GraduationCap,
        }, {
            title: 'Lectures',
            href: lecturesIndex(),
            icon: Users,
        }, {
            title: 'Professors',
            href: professorsIndex(),
            icon: SquareUserRound,
        }, {
            title: 'Students',
            href: studentsIndex(),
            icon: Users,
        }, {
            title: 'Employees',
            href: employeesIndex(),
            icon: BriefcaseBusiness,
        }, {
            title: 'Administration',
            href: administrationIndex(),
            icon: ShieldCheck,
        }] : []),
    ];

    const footerNavItems: NavItem[] = [
        {
            title: 'Repository',
            href: 'https://github.com/laravel/react-starter-kit',
            icon: Folder,
        },
        {
            title: 'Documentation',
            href: 'https://laravel.com/docs/starter-kits#react',
            icon: BookOpen,
        },
    ];

    return (
        <Sidebar collapsible="icon" variant="inset">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href={isAdmin ? dashboard() : home()} prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter>
                <NavFooter items={footerNavItems} className="mt-auto" />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
