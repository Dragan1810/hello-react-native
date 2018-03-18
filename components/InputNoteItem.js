import React from "react";
import { StyleSheet, Text, FlatList, View, Dimensions } from "react-native";
import { Card, List, ListItem } from "react-native-elements";
import { format } from "date-fns";

const Prijemnica = ({ data }) => {
  console.log("ovde sam");
  const { basic } = styles;
  return (
    <Card title={data.Supplier.BusinessPartner}>
      <ListItem
        title={
          <View style={basic}>
            <Text>LOT prijema:</Text>
            <Text>{data.Code}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Datum prijema:</Text>
            <Text>{data.ArrivalDate}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Depo:</Text>
            <Text>{data.Depot}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Vrsta zivotinje:</Text>
            <Text>{data.AnimalType}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Pod vrsta zivotinje:</Text>
            <Text>{data.AnimalSubType}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Tezina na farmi:</Text>
            <Text>{data.FarmWeight}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Tezina na prijemu:</Text>
            <Text>{data.ReceivedWeight}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Kalo transporta:</Text>
            <Text>{data.TransportShrinkage}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Tezina nakon klanja:</Text>
            <Text>{data.WeightAfterProcessing}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Kolicina:</Text>
            <Text>{data.Quantity}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Vrsta placanja:</Text>
            <Text>{data.PaymentType}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Jedinicna cena:</Text>
            <Text>{data.UnitPrice}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Ukupna cena:</Text>
            <Text>{data.TotalValue}</Text>
          </View>
        }
        hideChevron={true}
      />
      <ListItem
        title={
          <View style={basic}>
            <Text>Opis:</Text>
            <Text>{data.Description}</Text>
          </View>
        }
        hideChevron={true}
      />
    </Card>
  );
};

export default Prijemnica;

/*
"Id": 9,
"Code": 1002,
"CompanyId": 22,
"Name": "Depo 2",
"Description": null,
"Boxes": null,
"CreatedById": 13,
"CreatedByName": "Ivan Ivanovic"
*/
