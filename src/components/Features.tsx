import { HStack, Icon, Text, StackProps, Box } from '@chakra-ui/react';
import { ElementType } from 'react';
import {
	HassleFree,
	MoneyBackGuaranteeIcon,
	MonthlySubscription,
} from '../icons/Icon';

interface FeatureProps extends StackProps {
	icon: ElementType;
}

export function Feature(props: FeatureProps) {
	const { icon, children, ...rest } = props;
	return (
		<HStack {...rest} spacing={'24px'}>
			<Icon as={icon} />
			<Text textAlign={'left'} fontSize={'18px'} fontWeight={'700'}>
				{children}
			</Text>
		</HStack>
	);
}

export default function Features() {
	return (
		<Box maxW={'1024px'} m={'auto'} pt={'60px'} pb={'32px'}>
			<HStack px={'48px'} spacing={'20px'}>
				<Feature icon={MoneyBackGuaranteeIcon}>
					30 days money back Guarantee
				</Feature>
				<Feature icon={HassleFree}>No setup fees 100% hassle-free</Feature>
				<Feature icon={MonthlySubscription}>
					No monthly subscription Pay once and for all
				</Feature>
			</HStack>
		</Box>
	);
}
