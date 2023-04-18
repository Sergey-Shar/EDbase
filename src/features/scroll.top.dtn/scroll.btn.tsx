import { IconArrowUp } from '@tabler/icons-react'
import { useWindowScroll } from '@mantine/hooks'
import { Affix, Button, Transition, rem } from '@mantine/core'
import { useStyles } from './styles'

export const ScrollTopBtn = () => {
	const [scroll, scrollTo] = useWindowScroll()
	const { classes } = useStyles()
	return (
		<>
			<Affix position={{ bottom: rem(30), right: rem(30) }}>
				<Transition transition="slide-up" mounted={scroll.y > 0}>
					{(transitionStyles) => (
						<Button
							aria-label="кнопка для
							 автоматического скрола 
								вверх с изображением стрелочки вверх"
							className={classes.button}
							radius="xl"
							style={{ ...transitionStyles, height: '3.8rem' }}
							onClick={() => scrollTo({ y: 0 })}
						>
							<IconArrowUp aria-hidden="true" size="1.5rem" />
						</Button>
					)}
				</Transition>
			</Affix>
		</>
	)
}
