import {
	Award,
	CheckSquare,
	Home,
	LucideIcon,
	Settings,
	Users,
} from 'lucide-react'

export interface ImenuItem {
	icon: LucideIcon
	name: string
	link: string
}

export const MENU: ImenuItem[] = [
	{
		icon: Home,
		name: 'Home',
		link: '/',
	},
	{
		icon: Users,
		name: 'Users',
		link: '/users',
	},
	{
		icon: CheckSquare,
		name: 'Todo list',
		link: '/todo',
	},
	{
		icon: Award,
		name: 'Achievements',
		link: '/achievements',
	},
	{
		icon: Settings,
		name: 'Settings',
		link: '/settings',
	},
]
