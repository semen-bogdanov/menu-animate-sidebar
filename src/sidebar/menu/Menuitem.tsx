import { useAtomValue } from 'jotai'
import { isCollapsedAtom } from '../../store'
import { ImenuItem } from './menu.data'

export function MenuItem({ item }: { item: ImenuItem }) {
	const isCollapsed = useAtomValue(isCollapsedAtom)

	return (
		<a href={item.link} rel='noreferrer noreferrer' target='_blank'>
			<item.icon />
			{!isCollapsed && <span>{item.name}</span>}
		</a>
	)
}
