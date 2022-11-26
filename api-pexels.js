import { createClient } from 'pexels';
import axios from 'axios';
import * as React from 'react';

function PexelsApi({navigation}){

    const client = createClient('563492ad6f91700001000001a783e5f426914ffbae822164d5f56516');
    const query1 = 'Strawberries';
    const query2 = 'Peaches';
    const query3 = 'Bananas';
    let resStrawberries, resPeaches, resBananas;
    const [photos, photosSet] = React.useState([]);

    // All requests made with the client will be authenticated

    client.photos.search({ query1, per_page: 8 }).then(photos => {resStrawberries = photos});
    client.photos.search({ query2, per_page: 8 }).then(photos => {resPeaches = photos});
    client.photos.search({ query3, per_page: 8 }).then(photos => {resBananas = photos});

    let jStrawberries = JSON.parse(resStrawberries);
    let jPeaches = JSON.parse(resPeaches);
    let jBananas = JSON.parse(resBananas);


    const photosPost = () => {

        jStrawberries.forEach(element => {
            let name = 'strawberry';
            let url = element.src.tiny;
            let category = 1;               //Category 1 = 'Fruit'

            axios.post('https://node-server-udw2.onrender.com/apipost', {
                name : name,
                img : url,
                category : category
            }).then(() => {
                console.log("success");
            });
        });

        jPeaches.forEach(element => {
            let name = 'peach';
            let url = element.src.tiny;
            let category = 1;

            axios.post('https://node-server-udw2.onrender.com/apipost', {
                name : name,
                img : url,
                category : category
            }).then(() => {
                console.log("success");
            });
        });

        jBananas.forEach(element => {
            let name = 'banana';
            let url = element.src.tiny;
            let category = 1;

            axios.post('https://node-server-udw2.onrender.com/apipost', {
                name : name,
                img : url,
                category : category
            }).then(() => {
                console.log("success");
            });
        });

    }

    const photosGet = () => {
        axios.get('https://node-server-udw2.onrender.com/apiget').then((response) => {
            console.log(response.data);
            photosSet(response.data);
        });
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
                onPress={photosPost}
                title="Request photos"
                color="#841584"
            />
            <Button
                onPress={photosGet}
                title="Get Photos"
                color="#841584"
            />

            <Text>
                {photos.map(photo => {
                    return (
                        <img src={photo.object_img}></img>
                        )
                })}
            </Text>   
        </View>
    )

}