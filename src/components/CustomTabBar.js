import React from 'react';
import styled from 'styled-components/native';

import HomeIcon from '../assets/icons/home.svg';
import SearchIcon from '../assets/icons/search.svg';
import ProfileIcon from '../assets/icons/account.svg';


const TabArea = styled.View`
    background-color:#303846;   

    height:60px;

    flex-direction:row;
`;

const TabItem = styled.TouchableOpacity`
    flex:1;
    justify-content:center;
    align-items:center;
`;

const TabName = styled.Text`
    color:#FFF;
    font-size:10px;
`;

export default ({state, navigation}) => {

    const goTo = (screenName) => {
        navigation.navigate(screenName);
    }

    return(
        <TabArea>
            
            {/* Home */}
            <TabItem onPress={()=>goTo("Home")} >

                <HomeIcon
                    width="34"
                    height="34"
                    fill="#FFFFFF"
                    style={{
                        opacity:state.index === 0?1:0.5
                    }}
                />
                <TabName
                    style={{
                        opacity:state.index === 0?1:0.5
                    }}
                >
                    Início
                </TabName>

            </TabItem>

            {/* Search */}
            <TabItem onPress={()=>goTo("Search")} > 

                <SearchIcon
                    width="34"
                    height="34"
                    fill="#FFFFFF"
                    style={{
                        opacity:state.index === 1?1:0.5
                    }}
                />
                <TabName
                    style={{
                        opacity:state.index === 1?1:0.5
                    }}
                >
                    Buscar
                </TabName>

            </TabItem>

            {/* Profile */}
            <TabItem onPress={()=>goTo("Profile")} >

                <ProfileIcon
                    width="34"
                    height="34"
                    fill="#FFFFFF"
                    style={{
                        opacity:state.index === 2?1:0.5
                    }}
                />
                <TabName
                    style={{
                        opacity:state.index === 2?1:0.5
                    }}
                >
                    Perfil
                </TabName>

            </TabItem>

        </TabArea>
    );
}