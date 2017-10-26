import React from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions } from 'react-native';
import { Card, List, ListItem } from 'react-native-elements';


const WarehouseItem = ({data}) => {
    return(
        <Card title={data.Name}>
            <ListItem title={data.CompanyId} />
            <ListItem title={data.CreatedByName} />
        </Card>
    )
}
export default WarehouseItem;

/*
public int WarehouseCode { get; set; }

        [Required] // Basic warehouse data
        public string WarehouseName { get; set; }
        public string Address { get; set; }
        public int TypeId { get; set; }
        public string Type { get; set; }

        public Company Company { get; set; }

        public Conto Conto { get; set; }
        public Conto ContoPriceDiff { get; set; }

        public bool Active { get; set; }

        /// <summary>
        /// User that created or updated warehouse last
        /// </summary>
        public User CreatedBy { get; set; }

        // Timestamps
        public DateTime CreatedAt { get; set; }
        public DateTime UpdatedAt { get; set; }
*/