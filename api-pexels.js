import { createClient } from 'pexels';
import axios from 'axios';
import * as React from 'react';
import { View, Text, Button } from 'react-native';

export default function PexelsApi({navigation}){

    const client = createClient('563492ad6f91700001000001a783e5f426914ffbae822164d5f56516');
    const query1 = 'Strawberries';
    const query2 = 'Peaches';
    const query3 = 'Bananas';
    let resStrawberries, resPeaches, resBananas;
    const [photos, photosSet] = React.useState([]);

    // All requests made with the client will be authenticated

    client.photos.search({ query:query1, per_page: 8 }).then(photos => {resStrawberries = photos['photos'];});
    client.photos.search({ query:query2, per_page: 8 }).then(photos => {resPeaches = photos['photos']});
    client.photos.search({ query:query3, per_page: 8 }).then(photos => {resBananas = photos['photos']});


    const photosPost = () => {

        resStrawberries.forEach(element => {
            let name = 'strawberry';
            let url = element.src.tiny;
            let category = 1;               //Category 1 = 'Fruit'

            axios.post('http://localhost:19007/apipost', {
                name : name,
                img : url,
                category : category
            }).then(() => {
                console.log("success!");
            }).catch(err => {
                console.log(err);
            });
        });

        resPeaches.forEach(element => {
            let name = 'peach';
            let url = element.src.tiny;
            let category = 1;

            axios.post('http://localhost:19007/apipost', {
                name : name,
                img : url,
                category : category
            }).then(() => {
                console.log("success!");
            }).catch(err => {
                console.log(err);
            });
        });

        resBananas.forEach(element => {
            let name = 'banana';
            let url = element.src.tiny;
            let category = 1;

            axios.post('http://localhost:19007/apipost', {
                name : name,
                img : url,
                category : category
            }).then(() => {
                console.log("success!");
            }).catch(err => {
                console.log(err);
            });
        });
    }

    const photosGet = () => {
        axios.get('http://localhost:19007/apiget').then((response) => {
            console.log(response.data);
            photosSet(response.data);
        });
    }

    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
                onPress={photosPost}
                title="Request photos from Pexels"
                color="#841584"
            />
            <Button
                onPress={photosGet}
                title="Show photos from database"
                color="#841584"
            />

            <Text>
                {photos.map(photo => {
                    return (
                        <img key={photo.item_img} src={photo.item_img}></img>
                        )
                })}
            </Text>   
        </View>
    )

}