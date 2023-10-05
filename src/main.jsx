import React from 'react';
import NavBarHeader from './ui-components/NavBarHeader';
import {
    Entity1,
    ContactUs, EditProfile, NavBarHeader2, SideBar 
} from './ui-components';

// import Profile from '../assets/profile.jpg'
import { Grid, Card, View, useTheme  } from '@aws-amplify/ui-react';
import { DraggableNode2, DraggableNode3, DraggableSelect } from './Prototype/Nodes/index';
import Target from './Prototype/Target/target';

function Main() {
    const { tokens } = useTheme();
  return (
    <section>
    <NavBarHeader2 width="100%"/>
    <Grid templateColumns="0.1fr 1fr" gap={tokens.space.small}>
        <View width="fit-content" backgroundColor={tokens.colors.blue[10]}>
            {/* <SideBar /> */}
            <DraggableSelect />
            <DraggableNode2 />
            <DraggableNode3 />
            <SideBar />
            
        </View>
        <View width="100%" backgroundColor={tokens.colors.neutral[10]} style={{ display: "flex", alignItems: 'center', justifyContent: 'center'}}>
            <Target />
        </View>
    </Grid>
   
    
    </section>
    // <Grid
    //   templateColumns="1fr 1fr"
    //   templateRows="5.5rem 10rem 10rem"
    //   gap={tokens.space.small}
    // >
    //   <View columnSpan={[1, 1, 1, 2]} height="100px" backgroundColor={tokens.colors.orange[10]}>
    //     <NavBarHeader2 width="100%"/>
    //   </View>
    //   <View rowSpan={2} backgroundColor={tokens.colors.orange[20]}>
        
    //   </View>
    //   <View backgroundColor={tokens.colors.orange[40]}>
    //     <TableExample />
    //   </View>
    //   <View backgroundColor={tokens.colors.orange[60]}></View>
    // </Grid>

    // <section>
    //     <NavBarHeader width="100%" />
    //     <ContactUs />
    // </section>
  );
}

export default Main;
