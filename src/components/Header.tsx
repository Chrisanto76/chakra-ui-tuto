import { Box, Text, Heading } from '@chakra-ui/react';

function Header() {
	return (
		<div>
			<Box
				as="section"
				color="#F7FAFC"
				bg={'#6B46C1'}
				pt={'90px'}
				pb={'198px'}
				px={'32px'}
			>
				<Heading fontWeight="800" fontSize={'48px'}>
					Simple pricing for your business
				</Heading>
				<Text fontSize={'24px'} fontWeight={'500'}>
					Plans that are carefully crafted to suit your business.
				</Text>
			</Box>
		</div>
	);
}

export default Header;
