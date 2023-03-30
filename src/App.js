/* eslint-disable react/jsx-no-undef */
import './App.css';

/***
 * header
 *  -navbar
 *    -logo
 *    -home
 *    -about
 *    -contact
 *    -cart
 *  =>body
 *     -food card
 *      -deatils(price,star,catagory)
 * 
 *  =>footer 
 *      -links
 *      =address
 */
const Title = () => (
    <a href="/">
    <img 
    className="logo"
    alt="logo" 
    src="http://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4" 
    />
    </a>
);

const Header = () => {
  return(
    
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
    
  )

}

const restaurntList = 

  [
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "686250",
        "name": "Jay Bhavani Vadapav",
        "uuid": "06f5d9ad-42eb-41f9-931f-ce0a2722a051",
        "city": "60",
        "area": "Kalawad Road",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "1d75b94524157862cf974d3d86765bfd",
        "cuisines": [
          "Fast Food",
          "Pizzas",
          "Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 27,
        "minDeliveryTime": 27,
        "maxDeliveryTime": 27,
        "slaString": "27 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "jay-bhavani-vadapav-kalawad-road-kalawad-road",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "UNIVERCITY ROAD, AKASHVANI CHOWK  OPP.SNK SCHOOL, SHANTI HEIGHTS  GROUND FLOOR, SHOP NO 08, RAJKOT 360005",
        "locality": "Univercity Road",
        "parentId": 4428,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "Free Item",
          "shortDescriptionList": [
            {
              "meta": "Free Bombay vadapav regular",
              "discountType": "Freebie",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Free Bombay vadapav regular on orders above Rs 249",
              "discountType": "Freebie",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "",
          "shortDescriptionList": [
            {
              "meta": "Free Item",
              "discountType": "Freebie",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "Free Bombay vadapav regular on orders above Rs 249",
              "discountType": "Freebie",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6156546~p=1~eid=00000187-3222-32a7-06fe-2a5a00b00175",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "686250",
          "deliveryTime": 27,
          "minDeliveryTime": 27,
          "maxDeliveryTime": 27,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "--",
        "totalRatings": 0,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "237666",
        "name": "McDonald's",
        "uuid": "a9750d81-f00a-41b5-a200-6e8aa5b6aeaa",
        "city": "60",
        "area": "150 Feet Ring Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "7bb739d7f6ae8b4ce8ed590765dffd2f",
        "cuisines": [
          "Burgers",
          "Beverages",
          "Cafe",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 13,
        "minDeliveryTime": 13,
        "maxDeliveryTime": 13,
        "slaString": "13 MINS",
        "lastMileTravel": 0.8999999761581421,
        "slugs": {
          "restaurant": "mcdonalds-reliance-mall-kalawad-road",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "Hardcastle Restaurants Pvt Ltd,McDonalds Family Restaurants,Reliance Mall, Ground Flr, Shop RSM 3A, Plot No 2/A,Survey No 30, 150 Feet Ring Rd, Opposite Big Bazaar,Nana Mava, Rajkot, Gujarat 360",
        "locality": "Reliance Mall",
        "parentId": 630,
        "unserviceable": false,
        "veg": false,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "FLAT100 off",
          "shortDescriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "₹100 OFF",
          "shortDescriptionList": [
            {
              "meta": "Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "FLAT100 off | Use FLATDEAL",
              "discountType": "Flat",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "237666",
          "deliveryTime": 13,
          "minDeliveryTime": 13,
          "maxDeliveryTime": 13,
          "lastMileTravel": 0.8999999761581421,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "74052",
        "name": "Pizza Hut",
        "uuid": "26b00355-a0e0-4c53-8700-940e9cd1de3d",
        "city": "60",
        "area": "150 Feet Ring Road",
        "totalRatingsString": "5000+ ratings",
        "cloudinaryImageId": "gl7jqrufgbsrvgxqsu46",
        "cuisines": [
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 60000,
        "costForTwoString": "₹600 FOR TWO",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "slaString": "23 MINS",
        "lastMileTravel": 1.2999999523162842,
        "slugs": {
          "restaurant": "pizza-hut-test-rajkot-test-rajkot",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "Shop No 6, Solitaire Building, 150 ft Ring Road, Nr Big Bazaar, Rajkot",
        "locality": "Kalawad Road",
        "parentId": 721,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1.2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "74052",
          "deliveryTime": 23,
          "minDeliveryTime": 23,
          "maxDeliveryTime": 23,
          "lastMileTravel": 1.2999999523162842,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.7",
        "totalRatings": 5000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "690924",
        "name": "The Great Punjabi Dhaba - Race Course Road",
        "uuid": "1494600e-dc66-4824-bc5c-a60f6d34adbf",
        "city": "60",
        "area": "Race Course Road",
        "totalRatingsString": "Too Few Ratings",
        "cloudinaryImageId": "f9c55ee74c46bf63c1c3eb72249cbe93",
        "cuisines": [
          "Punjabi",
          "Chinese",
          "Beverages",
          "North Indian"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "slaString": "22 MINS",
        "lastMileTravel": 4.099999904632568,
        "slugs": {
          "restaurant": "the-great-punjabi-dhaba-race-course-road-race-course-road",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "Shop no.4, Pride Empire Building, Nr. Life Building, Race Course Road, Rajkot",
        "locality": "Kalawad Road",
        "parentId": 413954,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "10% off",
          "shortDescriptionList": [
            {
              "meta": "10% off | Use PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off | Use code PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "10% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "10% off | Use code PARTY",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 2400,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 2400,
          "message": "",
          "title": "Delivery Charge",
          "amount": "2400",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6269304~p=4~eid=00000187-3222-32a7-06fe-2a5b00b00412",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "690924",
          "deliveryTime": 22,
          "minDeliveryTime": 22,
          "maxDeliveryTime": 22,
          "lastMileTravel": 4.099999904632568,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "--",
        "totalRatings": 0,
        "new": true
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "209564",
        "name": "Naples Pizza - Mavdi",
        "uuid": "1563fd57-b6e6-4fe8-a69b-e58d39b1ddd6",
        "city": "60",
        "area": "Mavdi",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "gjnlaglqvmesju9oxx6c",
        "cuisines": [
          "Pastas",
          "Chinese",
          "Ice Cream",
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.8999999761581421,
        "slugs": {
          "restaurant": "naples-pizza-mavdi-mavdi",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "Naples Pizza,1st Floor, Above IFB Showroom, Street no.8 corner, Chandreshnagar main road, Mavdi, Rajkot",
        "locality": "Chandreshnagar Main Road",
        "parentId": 313851,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "209564",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.8999999761581421,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.8",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "307158",
        "name": "Jugaadi Adda",
        "uuid": "ab4aca74-cf5c-417a-b6d8-d2be4653aed7",
        "city": "60",
        "area": "150 Ft Ring Road",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "txjvs4kqxcye4ddi0fhd",
        "cuisines": [
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 2.0999999046325684,
        "slugs": {
          "restaurant": "jugaadi\tadda-kalawad-road-kalawad-road",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "Near India circle, Near Santosh Dairy, Below Shraddha Hospital, Blue Bird Complex, University Road, Rajkot",
        "locality": "University Road",
        "parentId": 111758,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "307158",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 2.0999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.4",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "84304",
        "name": "Rajmandir Food Zone - Astron Chowk",
        "uuid": "863def00-80d6-4354-83a2-233cfa33e02a",
        "city": "60",
        "area": "Astron Chowk",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "m6hrehrzr0mwfzjbsnav",
        "cuisines": [
          "Burgers",
          "Pizzas"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 17,
        "minDeliveryTime": 17,
        "maxDeliveryTime": 17,
        "slaString": "17 MINS",
        "lastMileTravel": 2.9000000953674316,
        "slugs": {
          "restaurant": "rajmandir-food-zone-sardar-nagar-kalawad-road",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "SHALIMAR COMPLEX SHOP NO. G-3, NEAR ASTRON CHOWK,SARDAR NAGAR(WEST), TAGOR MARG,RAJKOT., District - Rajkot Municipal Corporation, STATE - Gujarat\t",
        "locality": "Tagore Road",
        "parentId": 165747,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "25% off",
          "shortDescriptionList": [
            {
              "meta": "25% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "25% off up to ₹65 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "25% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "25% off up to ₹65 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6058635~p=7~eid=00000187-3222-32a7-06fe-2a5c00b00746",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.9 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "84304",
          "deliveryTime": 17,
          "minDeliveryTime": 17,
          "maxDeliveryTime": 17,
          "lastMileTravel": 2.9000000953674316,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.4",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "615592",
        "name": "Pizza Studio",
        "uuid": "e1e7e76e-ce38-44bd-9a8f-0b47c28e1afe",
        "city": "60",
        "area": "Mavdi",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "wgxga4jd5abmd4saa5to",
        "cuisines": [
          "Pizzas",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 0.8999999761581421,
        "slugs": {
          "restaurant": "pizza-studio-bhaktinagar-bhaktinagar",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "C-8 Corner, Chandreshnagar Road, Nr. Firebrigade Road, Rajkot 360004",
        "locality": "Chandreshnagar Road",
        "parentId": 8628,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.8 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "615592",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 0.8999999761581421,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.4",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "652659",
        "name": "La Pino'z Pizza",
        "uuid": "77609f72-e433-47c6-b514-6ed592b27d3c",
        "city": "60",
        "area": "Kalawad Road",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "d20fdc8c86aa8bd0638f47dd013d46f9",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Mexican",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 2.5999999046325684,
        "slugs": {
          "restaurant": "la-pinoz-pizza-opp-patel-dining-hall-kalawad-road",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "G-165, VRUNDAVAN SOCIETY, OPP. PATEL DINING HALL,, KALAWAD ROAD, RAJKOT 360005",
        "locality": "Vrundavan Society",
        "parentId": 4961,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6266023~p=13~eid=00000187-3222-32a7-06fe-2a5e00b00d2b",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2.5 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "652659",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 2.5999999046325684,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.0",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "337457",
        "name": "Chicago Pizza",
        "uuid": "baffca1f-9481-42d3-9063-d04a7dddd959",
        "city": "60",
        "area": "Nana Mava",
        "totalRatingsString": "500+ ratings",
        "cloudinaryImageId": "n4av1s4v7w0hb8woiava",
        "cuisines": [
          "Pizzas",
          "Pastas"
        ],
        "tags": [
          
        ],
        "costForTwo": 30000,
        "costForTwoString": "₹300 FOR TWO",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "slaString": "20 MINS",
        "lastMileTravel": 0.30000001192092896,
        "slugs": {
          "restaurant": "chicago-pizza-kalawad-road-kalawad-road",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "FIRST FLOOR, 104, THE MILLENIUM, OPP.  TWIN STAR, 150 FT. RING ROAD, Rajkot",
        "locality": "Kalawad Road",
        "parentId": 60277,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "337457",
          "deliveryTime": 20,
          "minDeliveryTime": 20,
          "maxDeliveryTime": 20,
          "lastMileTravel": 0.30000001192092896,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.6",
        "totalRatings": 500,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "423750",
        "name": "La Milano Pizzeria",
        "uuid": "4989d5a3-56f6-4737-9587-34aaaaefe7b6",
        "city": "60",
        "area": "Kotecha Nagar",
        "totalRatingsString": "1000+ ratings",
        "cloudinaryImageId": "l6lbiv7depomzzuewcg0",
        "cuisines": [
          "Pizzas",
          "Pastas",
          "Desserts"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 16,
        "minDeliveryTime": 16,
        "maxDeliveryTime": 16,
        "slaString": "16 MINS",
        "lastMileTravel": 1,
        "slugs": {
          "restaurant": "la-milano-pizzeria-kalawad-road-kalawad-road",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "Shop 1-2 Maa sharda complex meghmaya nagar nana mava main road Rajkot 360004",
        "locality": "Meghmaya Nagar",
        "parentId": 22533,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "1 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "423750",
          "deliveryTime": 16,
          "minDeliveryTime": 16,
          "maxDeliveryTime": 16,
          "lastMileTravel": 1,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "3.9",
        "totalRatings": 1000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "510241",
        "name": "Martino'z Pizza",
        "uuid": "8604a513-e096-4877-8327-f366099f1753",
        "city": "60",
        "area": "Nana Mava Main Road",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "g0htvlt3pnn6vm6msay0",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Fast Food"
        ],
        "tags": [
          
        ],
        "costForTwo": 40000,
        "costForTwoString": "₹400 FOR TWO",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "slaString": "14 MINS",
        "lastMileTravel": 0.4000000059604645,
        "slugs": {
          "restaurant": "martino'z-pizza-kalawad-road-kalawad-road",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "Plot No 1 & 2, Royal Avenue-1, Near Nana Mauva Circle, Nana Mauva Main Road, Opp, Silver Heights, 150 Ft. Ring Road Rajkot Gujarat",
        "locality": "Kalawad Road",
        "parentId": 298896,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "40% off",
          "shortDescriptionList": [
            {
              "meta": "40% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "40% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "40% off up to ₹80 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.4 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "510241",
          "deliveryTime": 14,
          "minDeliveryTime": 14,
          "maxDeliveryTime": 14,
          "lastMileTravel": 0.4000000059604645,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.2",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "94667",
        "name": "Rajdhani Restaurant",
        "uuid": "8a0ca1cc-db30-48f0-8677-0ac6d5045e8a",
        "city": "60",
        "area": "150 Ft Ring Road",
        "totalRatingsString": "10000+ ratings",
        "cloudinaryImageId": "e37z2qgkg1kajzvipzc5",
        "cuisines": [
          "Chinese",
          "North Indian",
          "South Indian",
          "Pizzas",
          "Biryani"
        ],
        "tags": [
          
        ],
        "costForTwo": 25000,
        "costForTwoString": "₹250 FOR TWO",
        "deliveryTime": 18,
        "minDeliveryTime": 18,
        "maxDeliveryTime": 18,
        "slaString": "18 MINS",
        "lastMileTravel": 2,
        "slugs": {
          "restaurant": "rajdhani-restaurant-150-ring-road-kalawad-road",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "Indira Circle, 150 Feet Ring Road, Rajkot",
        "locality": "Kalawad Road",
        "parentId": 165492,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "60% off",
          "shortDescriptionList": [
            {
              "meta": "60% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "60% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "60% off up to ₹120 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "2 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "94667",
          "deliveryTime": 18,
          "minDeliveryTime": 18,
          "maxDeliveryTime": 18,
          "lastMileTravel": 2,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.1",
        "totalRatings": 10000,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "484518",
        "name": "New Santosh Bhel",
        "uuid": "51f048bb-617a-421d-b5ce-234103aaeda3",
        "city": "60",
        "area": "Mavdi",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "in2ussaqt8jnoxnosf5y",
        "cuisines": [
          "Chaat",
          "Snacks"
        ],
        "tags": [
          
        ],
        "costForTwo": 20000,
        "costForTwoString": "₹200 FOR TWO",
        "deliveryTime": 14,
        "minDeliveryTime": 14,
        "maxDeliveryTime": 14,
        "slaString": "14 MINS",
        "lastMileTravel": 0.699999988079071,
        "slugs": {
          "restaurant": "santosh-bhel-kalawad-road-kalawad-road-3",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "3 Puja Park, Block no.42, Mayani Chowk, Opp. Bekbon, Rajkot",
        "locality": "Kalawad Road",
        "parentId": 390203,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "0.6 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "484518",
          "deliveryTime": 14,
          "minDeliveryTime": 14,
          "maxDeliveryTime": 14,
          "lastMileTravel": 0.699999988079071,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": false,
        "avgRating": "4.5",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    },
    {
      "type": "restaurant",
      "data": {
        "type": "F",
        "id": "569424",
        "name": "Naisha's Kitchen",
        "uuid": "1378ba14-d9af-4c73-90a2-8c93a2903a53",
        "city": "60",
        "area": "Mahavir Nagar",
        "totalRatingsString": "100+ ratings",
        "cloudinaryImageId": "hxfpl9kbj9epquu1xwk5",
        "cuisines": [
          "Fast Food",
          "Snacks",
          "Beverages"
        ],
        "tags": [
          
        ],
        "costForTwo": 10000,
        "costForTwoString": "₹100 FOR TWO",
        "deliveryTime": 32,
        "minDeliveryTime": 32,
        "maxDeliveryTime": 32,
        "slaString": "32 MINS",
        "lastMileTravel": 3,
        "slugs": {
          "restaurant": "tedda-food-kalawad-road-kalawad-road",
          "city": "rajkot"
        },
        "cityState": "60",
        "address": "Khodiyar krupa, 1, behind nirmala school, Sojitra Nagar, Mahavir Nagar, Rajkot, Gujarat 360007, India",
        "locality": "Sojitra Nagar",
        "parentId": 341895,
        "unserviceable": false,
        "veg": true,
        "select": false,
        "favorite": false,
        "tradeCampaignHeaders": [
          
        ],
        "aggregatedDiscountInfo": {
          "header": "50% off",
          "shortDescriptionList": [
            {
              "meta": "50% off | Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "aggregatedDiscountInfoV2": {
          "header": "50% OFF",
          "shortDescriptionList": [
            {
              "meta": "Use TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "descriptionList": [
            {
              "meta": "50% off up to ₹100 | Use code TRYNEW",
              "discountType": "Percentage",
              "operationType": "RESTAURANT"
            }
          ],
          "subHeader": "",
          "headerType": 0,
          "superFreedel": ""
        },
        "ribbon": [
          {
            "type": "PROMOTED"
          }
        ],
        "chain": [
          
        ],
        "feeDetails": {
          "fees": [
            {
              "name": "distance",
              "fee": 1900,
              "message": ""
            },
            {
              "name": "time",
              "fee": 0,
              "message": ""
            },
            {
              "name": "special",
              "fee": 0,
              "message": ""
            }
          ],
          "totalFees": 1900,
          "message": "",
          "title": "Delivery Charge",
          "amount": "1900",
          "icon": ""
        },
        "availability": {
          "opened": true,
          "nextOpenMessage": "",
          "nextCloseMessage": ""
        },
        "longDistanceEnabled": 0,
        "rainMode": "NONE",
        "thirdPartyAddress": false,
        "thirdPartyVendor": "",
        "adTrackingID": "cid=6129124~p=19~eid=00000187-3222-32a7-06fe-2a6000b0137f",
        "badges": {
          "imageBased": [
            
          ],
          "textBased": [
            
          ],
          "textExtendedBadges": [
            
          ]
        },
        "lastMileTravelString": "3 kms",
        "hasSurge": false,
        "sla": {
          "restaurantId": "569424",
          "deliveryTime": 32,
          "minDeliveryTime": 32,
          "maxDeliveryTime": 32,
          "lastMileTravel": 3,
          "lastMileDistance": 0,
          "serviceability": "SERVICEABLE",
          "rainMode": "NONE",
          "longDistance": "NOT_LONG_DISTANCE",
          "preferentialService": false,
          "iconType": "EMPTY"
        },
        "promoted": true,
        "avgRating": "4.1",
        "totalRatings": 100,
        "new": false
      },
      "subtype": "basic"
    }
  ];



// const rcard = {
//   name: "Burger Beast",
//   image : "https://www.eatthis.com/wp-content/uploads/sites/4/2022/04/burger-fries.jpg?quality=82&strip=all",
//   cusines : ["Burger" , "USA"],
//   rating : "4.7",
// }

const RestaurntCard = ({restaurant}) => {
  console.log()
  return(
    <div className="card">
    <img alt='logo' src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/"+ restaurant.data?.cloudinaryImageId
       }
       />
      <h2>{restaurant.data?.name}</h2>
      <h3>{restaurant.data?.cuisines.join(" , ")}</h3>
      <h4>{restaurant.data?.lastMileTravelString} minutes</h4>
</div>
  );
};



const Body =() =>{
  return(
    <div className='restaurant-list'>
      <RestaurntCard restaurant = {restaurntList[0]} />
      
      <RestaurntCard restaurant = {restaurntList[1]} />
      <RestaurntCard restaurant = {restaurntList[2]}  />
      <RestaurntCard restaurant = {restaurntList[3]}  />
      <RestaurntCard restaurant = {restaurntList[4]}  />
      <RestaurntCard restaurant = {restaurntList[5]}  />
      <RestaurntCard restaurant = {restaurntList[6]} />
      <RestaurntCard restaurant = {restaurntList[7]} />
      <RestaurntCard restaurant = {restaurntList[8]}  />
      <RestaurntCard restaurant = {restaurntList[9]}  />
      <RestaurntCard restaurant = {restaurntList[10]}  />
      <RestaurntCard restaurant = {restaurntList[11]}  />
      <RestaurntCard restaurant = {restaurntList[12]} />
      <RestaurntCard restaurant = {restaurntList[13]} />
      <RestaurntCard restaurant = {restaurntList[14]}  />
     
      
      
    </div>
  )
}


const Footer = () =>{
  return(
    <h5>Footer</h5>
  )
}

const AppLayout = () =>{
  return(
    <>
    <Header />
    <Body />
    <Footer />
    </>
  )
}

function App() {
  return (
   
      
         
         <AppLayout />
        
       
      
    
  );
}

export default App;
