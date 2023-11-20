import { Box, Text, Heading } from '@chakra-ui/react';

function Header() {
	return (
		<div>
			<Box color="#F7FAFC" bg={'#6B46C1'}>
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
