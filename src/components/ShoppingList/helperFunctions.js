//let cart = [{"title":"Kryddig Fisksoppa","info":"med chili och rosmarin","id":4,"category":"Fisk","ingredients":["Röding","Morot","Paprika","Vitlök","Peppar","Salt","Chili","Purjolök","Broccoli","Sallad"],"nutricionValue":["109","6.7g","11g","3g"],"price":149,"calories":"109","fat":"6.7g","carbs":"11g","protein":"3g","image":"https://images.unsplash.com/photo-1600441397207-1913d3c09b2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},{"title":"Kryddig Fisksoppa","info":"med chili och rosmarin","id":4,"category":"Fisk","price":149,"calories":"109","fat":"6.7g","carbs":"11g","protein":"3g","image":"https://images.unsplash.com/photo-1600441397207-1913d3c09b2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},{"title":"Kryddig Fisksoppa","info":"med chili och rosmarin","id":4,"category":"Fisk","price":149,"calories":"109","fat":"6.7g","carbs":"11g","protein":"3g","image":"https://images.unsplash.com/photo-1600441397207-1913d3c09b2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},{"title":"Krämig Fisksoppa","info":"med ost och pumpafrön","id":5,"category":"Fisk","ingredients":["Lax","Morot","Paprika","Vitlök","Peppar","Salt","Chili","Purjolök","Broccoli","Sallad"],"nutricionValue":["109","6.7g","11g","3g"],"price":149,"calories":"109","fat":"6.7g","carbs":"11g","protein":"3g","image":"https://images.unsplash.com/photo-1580214082631-40518c0208fe?ixlib=rb-1.2.1&auto=format&fit=crop&w=1652&q=80"},{"title":"Grön Soppa och Curry","info":"med brocolli, kale och avocado","id":3,"category":"Vegansk","ingredients":["Brocolli","Avokado","Kale","Lök","Peppar","Salt","Chili","Purjolök","Broccoli","Sallad"],"nutricionValue":["157","10.3g","7g","4g"],"price":149,"calories":"157","fat":"10.3g","carbs":"7g","protein":"4g","image":"https://images.unsplash.com/photo-1594756202469-9ff9799b2e4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1535&q=80"},{"title":"Kryddig Fisksoppa","info":"med chili och rosmarin","id":4,"category":"Fisk","price":149,"calories":"109","fat":"6.7g","carbs":"11g","protein":"3g","image":"https://images.unsplash.com/photo-1600441397207-1913d3c09b2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},{"title":"Kryddig Fisksoppa","info":"med chili och rosmarin","id":4,"category":"Fisk","price":149,"calories":"109","fat":"6.7g","carbs":"11g","protein":"3g","image":"https://images.unsplash.com/photo-1600441397207-1913d3c09b2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"},{"title":"Kryddig Fisksoppa","info":"med chili och rosmarin","id":4,"category":"Fisk","price":149,"calories":"109","fat":"6.7g","carbs":"11g","protein":"3g","image":"https://images.unsplash.com/photo-1600441397207-1913d3c09b2a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80"}]


// skriv en funktion som tar in en array av objekt enligt ovan
// önskad output:

/*
{"Kryddig Fisksoppa": 6,
 "Grön Soppa och Curry": 1,}
 */

export const calculateCart = (cart) => {
    console.log(cart)
    
    
    let amountObject = cart.reduce( ( acc , cur ) => {
    
    if (acc[cur.title]) {
        //key fanns, öka med 1
        acc[cur.title] += 1;
    } else {
        //key fanns ej, skapa
        acc[cur.title] = 1;
    }
    
    //console.log(cur.title)
    return acc 
}, {});
    let newCart = Object.keys(amountObject).map(title => {
        let tempSoup = cart.find((soup) => soup.title == title)
        return { ...tempSoup, amount: amountObject[title] }
    })
    return newCart;
}
//export calculateCart;

