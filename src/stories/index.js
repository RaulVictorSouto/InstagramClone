import { Box, Image } from "native-base";
import React from 'react'

export default function Stories({data}){
    return(
        <Box flex = {1} marginBottom={4} padding={2} borderRadius={4}>
            <Box
                padding="0.5"
                borderRadius={32}
                bg={{
                    linearGradient: {
                        colors:['#4c669f', '#3b5998', '#192f6a']
                    }
                }}
            >
            <Image
                source={{ uri: data.avatarUrl }}
                width={16}
                height={16}
                borderRadius={32}
                alt="Avatar url"
            />

            </Box>
        </Box>
    )
}