import styles from '../Sidebar.module.scss'
import { MENU } from './menu.data'
import { MenuItem } from './Menuitem'

export function Menu() {
	return (
		<nav className={styles.menu}>
			{MENU.map(item => (
				<MenuItem item={item} key={item.link} />
			))}
		</nav>
	)
}
