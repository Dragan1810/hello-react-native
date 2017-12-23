const currentHostName = "212.200.54.246:5001"
const currentCompanyID = 62

export const data = {
    production: {
        goveda : {
            Aklanja: `http://${currentHostName}/api/Slaughter/GetSlaughterItemTmpsByDate?slaughterDate=201712120000&${currentCompanyID}`,
            Pklanja: `http://${currentHostName}/api/Slaughter/GetSlaughtersByPage?CompanyId=${currentCompanyID}`
        },
        Pig : {
            Aklanja: `http://${currentHostName}/api/PigSlaughter/GetPigSlaughterItemTmpsByDate?pigSlaughterDate=201712120000&${currentCompanyID}`,
            Pklanja: `http://${currentHostName}/api/PigSlaughter/GetPigSlaughtersByPage?${currentCompanyID}&CurrentPage=1&ItemsPerPage=20`
        },
        Lamb : {
            Aklanja: `http://${currentHostName}/api/LambSlaughter/GetLambSlaughterItemTmpsByDate?lambSlaughterDate=201712120000&${currentCompanyID}`,
            Pklanja: `http://${currentHostName}/api/LambSlaughter/GetLambSlaughtersByPage?CompanyId=${currentCompanyID}`
        }
    },
    documents: {
        inputNote : "http://" + currentHostName + "/api/InputNote/GetInputNotesByPage?" + currentCompanyID + "&CurrentPage=1&ItemsPerPage=1"
    },
    magacin: {
        depot: "http://" + currentHostName + "/api/Depot/GetDepots?CompanyId=" + currentCompanyID,
        warehouse: "http://" + currentHostName + "/api/Warehouse/GetWarehouses?CompanyId=" + currentCompanyID,
        box: "http://" + currentHostName + "/api/Box/GetBoxes?CompanyId=" + currentCompanyID,
        stock: "http://" + currentHostName + "/api/Stock/GetStocks?CompanyId=" + currentCompanyID
    },
    kartoteka: {
        product: "http://" + currentHostName + "/api/Product/GetProducts?CompanyId=" + currentCompanyID,
        animal: "http://" + currentHostName + "/api/AnimalType/GetAnimalTypes?CompanyId=" + currentCompanyID,
        subAnimal: "http://" + currentHostName + "/api/AnimalSubType/GetProducts?CompanyId=" + currentCompanyID,
    },
    poslovniPartner: {
        businessPartner: "http://" + currentHostName + "/api/BusinessPartner/GetBusinessPartners?CompanyId=" + currentCompanyID,
    },
    company : {
        company: "http://" + currentHostName + "/api/Company/GetCompanies"
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