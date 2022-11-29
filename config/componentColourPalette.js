import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    header: {
        flex: 0.05,
        borderBottomColor: 'grey',
        borderBottomWidth: 0.2,
        flexDirection: 'row'
    },
    body: {
        flex: 0.95, 
        alignItems: 'center',
        paddingTop: 50, 
    },

    //Dark green button
    darkButton: {
        backgroundColor: '#00cc00',
        color: '#e5eedb',
        flexDirection: 'row',
        padding: '10%',
        borderRadius: 50,
        fontSize: 2,
        fontWeight: 'light',
        justifyContent: 'center',
        alignItems: 'center',
        height:150,
        width:200
      },

    //Light green button
    lightButton: {
        backgroundColor: '#e5eedb',
        color: '#00cc00', 
        flexDirection: 'row',
        padding: '10%',
        borderRadius: 50,
        fontSize: 2,
        fontWeight: 'light',
        justifyContent: 'center',
        alignItems: 'center',
        height:150,
        width:200
    },

    fruitButton: {
        backgroundColor: '#ff6361',
        flexDirection: 'row',
        padding: '10%',
        fontSize: 2,
        fontWeight: 'light',
        justifyContent: 'center',
        alignItems: 'center',
        height:150,
        width:'100%'
    },

    animalButton: {
        backgroundColor: '#58508d',
        flexDirection: 'row',
        padding: '10%',
        fontSize: 2,
        fontWeight: 'light',
        justifyContent: 'center',
        alignItems: 'center',
        height:150,
        width:'100%'
    },

    randomButton: {
        backgroundColor: '#ffa600',
        flexDirection: 'row',
        padding: '10%',
        fontSize: 2,
        fontWeight: 'light',
        justifyContent: 'center',
        alignItems: 'center',
        height:150,
        width:'100%'
    },

    
    cHomeButton: {
        backgroundColor: '#003f5c',
        flexDirection: 'row',
        padding: '10%',
        fontSize: 2,
        fontWeight: 'light',
        justifyContent: 'center',
        alignItems: 'center',
        height:150,
        width:'100%'
    },

    lightIcon: {
        color: '#e5eedb',
        marginRight: 2,
        alignItems: 'flex-start'
    },

    darkIcon: {
        color: '#00cc00',
        marginRight: 2,
        alignItems: 'flex-start'
    },

    catIcon: {
        color: '#fff',
        margin: 2,
        alignItems: 'flex-start'
    },

    buttonText: {
        color: '#fff',
        margin: 10, 
        fontSize: 40

    },
<<<<<<< HEAD
    codeText:{
        marginTop:10,
        alignSelf:'center',
        color:'green',
        borderColor:'green',
        borderWidth:4,
        fontSize:20,
        padding:5,
        textAlign:'center'
    
      },
    
      
      TextComponentStyle: {
        borderRadius: 5,
        borderWidth: 4,
        borderColor: 'green',
        
        backgroundColor : 'white',
        padding: 10,
        
        fontSize: 15,
        
        margin: 10
        
      },
    
      ButtonComponentStyle: { 
        
        width: "60%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop:20,
        backgroundColor: "green",
        alignSelf:'center'
        
      },
    
      Img: {
        borderRadius: 5,
        borderWidth: 6,
        borderColor: 'green',
        height:'40%',
        width:'80%',
        padding: 10,
        fontSize: 15,
        alignSelf:'center',
        marginTop: "auto",
        resizeMode: "contain"
      }
=======
>>>>>>> 6c81d82ebd305abb8c0fa0146bc94079c00cafef

});

export { styles } 