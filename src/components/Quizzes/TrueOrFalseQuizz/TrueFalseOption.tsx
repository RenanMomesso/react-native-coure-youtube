import Button3D from '@components/Button3D';
import React from 'react';
import { View } from 'react-native';

const TrueOrFalseQuizzOption: React.FC = () => {
    const [selected, setSelected] = React.useState<boolean>(false)

    

    return (
        <View style={{ flexDirection: 'row', marginVertical: 20, flex: 1, gap: 8 }}>
            <Button3D
                fullHeight
                fullwidth
                onPress={() => { }}
                key={1}
                bgColor={'#f75555'}
                text={'False'}
                bgShadowColor={'#eb326d'}
            />
            <Button3D
                fullHeight
                fullwidth
                onPress={() => { }}
                key={2}
                bgColor={'#12d18e'}
                text={'True'}
                bgShadowColor={'#00b878'}
            />
        </View>
    )
}

export default TrueOrFalseQuizzOption;