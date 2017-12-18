export const data = {
    production: {
        goveda : {
            Aklanja: "http://212.200.54.246:5001/api/Slaughter/GetSlaughterItemTmpsByDate?slaughterDate=201712120000&CompanyId=95",
            Pklanja: "http://212.200.54.246:5001/api/Slaughter/GetSlaughtersByPage?CompanyId=95&CurrentPage=1&ItemsPerPage=20"
        },
        Pig : {
            Aklanja: "http://212.200.54.246:5001/api/PigSlaughter/GetPigSlaughterItemTmpsByDate?pigSlaughterDate=201712120000&CompanyId=95",
            Pklanja: "http://212.200.54.246:5001/api/PigSlaughter/GetPigSlaughtersByPage?CompanyId=95&CurrentPage=1&ItemsPerPage=20"
        },
        Lamb : {
            Aklanja: "http://212.200.54.246:5001/api/LambSlaughter/GetLambSlaughterItemTmpsByDate?lambSlaughterDate=201712120000&CompanyId=95",
            Pklanja: "http://212.200.54.246:5001/api/LambSlaughter/GetLambSlaughtersByPage?CompanyId=95&CurrentPage=1&ItemsPerPage=20"
        }
    },
    documents: {
        inputNote : "http://212.200.54.246:5001/api/InputNote/GetInputNotesByPage?CompanyId=95&CurrentPage=1&ItemsPerPage=1"
    },
    magacin: {
        depot: "http://212.200.54.246:5001/api/Depot/GetDepots",
        warehouse: "http://212.200.54.246:5001/api/Warehouse/GetWarehouses",
        box: "http://212.200.54.246:5001/api/Box/GetBoxes",
        stock: "http://212.200.54.246:5001/api/Stock/GetStocks"
    },
    kartoteka: {
        product: "http://212.200.54.246:5001/api/Product/GetProducts",
        animal: "To be",
        subAnimal: "To be"
    },
    poslovniPartner: {
        businessPartner: "http://212.200.54.246:5001/api/BusinessPartner/GetBusinessPartners"
    },
    company : {
        company: "http://212.200.54.246:5001/api/Company/GetCompanies"
    }
}

/*

BusinessPartnerBankAccount
BusinessPartnerLocation
BusinessPartnerPhone
ClawbackFromBuyer
ClawbackFromSupplier
CompanyBankAccount
Company
CompanyPhone
Conto
Country
CreditNote
DeliveryNote
ExchangeRate
InputCalculation
InputInvoice
KepuBook
ManuelWarrant
Municipality
OrganizationUnit
OutputInvoice
PriceLeveling
Pricing
ProductCard
ProductGroup
ProductSubItem
Section
Values

*/