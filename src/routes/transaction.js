module.exports = [
    {
        route: 'sales',
        name: 'sales',
        moduleId: './modules/sales-cr/index',
        nav: true,
        title: 'Penjualan',
        auth: true,
        settings: {
            group: "transaction",
            permission: { "GIS.01" : 1, "GLM.01" : 1, "WHO.01" : 1, "SIB.01":1, "MMS.01" : 1  }
     },
    {
        route: 'salesReturn',
        name: 'salesReturn',
        moduleId: './modules/sales-return-cr/index',
        nav: true,
        title: 'Retur Penjualan',
        auth: true,
        settings: {
            group: "transaction",
            permission: { "GIS.01" : 1, "GLM.01" : 1, "WHO.01" : 1, "SIB.01":1, "MMS.01" : 1  }
        }
    },
    {
        route: 'void-sales',
        name: 'void-sales',
        moduleId: './modules/void-sales-cr/index',
        nav: true,
        title: 'Void Penjualan',
        auth: true,
        settings: {
            group: "transaction",
            permission: { "GIS.01" : 1, "GLM.01" : 1, "WHO.01" : 1, "SIB.01":1, "MMS.01" : 1  }
        }
    }]
