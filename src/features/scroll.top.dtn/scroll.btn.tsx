import { IconArrowUp } from '@tabler/icons-react'
import { useWindowScroll } from '@mantine/hooks'
import { Affix, Button, Text, Transition, rem,UnstyledButton } from '@mantine/core'

export  const  ScrollTopBtn = () =>  {
	const [scroll, scrollTo] = useWindowScroll()
	return (
		<>
			<Affix position={{ bottom: rem(30), right: rem(30) }}>
				<Transition transition="slide-up" mounted={scroll.y > 0}>
					{(transitionStyles) => (
						<Button
							radius="xl"
							style={{ ...transitionStyles, height: '3.8rem' }}
							onClick={() => scrollTo({ y: 0 })}
						>
							<IconArrowUp size="1.5rem" />
						</Button>
					)}
				</Transition>
			</Affix>
		</>
	)
}
