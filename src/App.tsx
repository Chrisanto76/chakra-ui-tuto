import './App.css';
import { Box, Flex } from '@chakra-ui/react';

function App() {
	return (
		<div>
			<Flex justify="space-between" align="center">
				<Box bg="tomato" w="100px" h="200px" p={4} color="white">
					item 1
				</Box>
				<Box bg="green" w="100px" h="200px" p={4} color="white">
					item 2
				</Box>
				<Box bg="blue" w="200px" h="100px" p={4} color="white">
					item 3
				</Box>
				<Box bg="red" w="100px" h="200px" p={4} color="white">
					item 4
				</Box>
			</Flex>
		</div>
	);
}

export default App;
