import React from 'react';
import { Box, Flex, Text, Heading, Button } from '@chakra-ui/react';

function Pricing() {
	return (
		<Box>
			<Flex>
				<Box bg={'#F0EAFB'} p={'60px'}>
					<Text fontSize={'24px'} fontWeight={'800'}>
						Premium PRO
					</Text>
					<Heading as="h3" fontSize={'60px'} mt={'16px'}>
						$329
					</Heading>
					<Text color="#171923" fontSize={'18px'} fontWeight={'500'}>
						Billed just once
					</Text>
					<Button colorScheme="purple" size={'lg'} w={'282px'} mt={'24px'}>
						Get Started
					</Button>
				</Box>
				<Box></Box>
			</Flex>
		</Box>
	);
}

export default Pricing;
