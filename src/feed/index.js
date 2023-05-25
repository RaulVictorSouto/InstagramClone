import React from "react";
import { Box, Image, Text, Heading, Icon } from "native-base";
import { Feather } from "@expo/vector-icons"

export default function Feed({data}){
    return(
        <Box 
            flex={1} 
            flexDirection="column" 
            marginBottom={4}
            backgroundcolour="#fff"
            padding={2}
            borderRadius = {4}
        >
        
        <Box>
            <Image
                source={{uri: data.avatarUrl}}
                alt="Post fedd"
                w="100%"
                h={120}
                >
            </Image>
        </Box>

        <Box marginY={3}>
            <Heading size='sm' paddingBottom={1}>Aprendendo com o sujeito Programador</Heading>
            <Text numberOfLines={2}>Descubra as lições valiosas que o mundo da programação pode ensinar sobre resolução de problemas e pensamento lógico</Text>
        </Box>

        <Box 
        marginY={1}
        flexDir="row"
        bacgroundColor="rgba(226, 232, 240, 0.4)"
        alignSelf="flex-start"
        borderRadius="6"
        paddingX={3}
        paddingY={1}
        >

            <Icon
                as = {Feather}
                name = "user"
                size={5}
                color="#000"
                marginRight={2}
            />
            <Text numberOfLines={1}> 
                {data.fullName}
            </Text>
        </Box>
        </Box>
    )
}