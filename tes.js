const reformatData = (data) => {
  const newCustomersData = data.customers
    .map((customer) => ({
      ID: customer.ID,
      firstName: customer.firstName,
      lastName: customer.lastName,
      customerValue: customer.orders.reduce((accOrder, order) => {
        return (
          accOrder +
          order.items.reduce((acc, item) => {
            return acc + item.price * item.quantity;
          }, 0)
        );
      }, 0),
      itemsOrdered: customer.orders.reduce((accOrder, order) => {
        return (
          accOrder +
          order.items.reduce((acc, item) => {
            return acc + item.quantity;
          }, 0)
        );
      }, 0),
    }))
    .sort((a, b) => a.ID - b.ID);
  const newData = {
    customers: newCustomersData,
    totalCustomerValue: newCustomersData.reduce((acc, customer) => {
      return acc + customer.customerValue;
    }, 0),
    totalItemsOrdered: newCustomersData.reduce((acc, customer) => {
      return acc + customer.itemsOrdered;
    }, 0),
  };
  return newData;
};

const data = {
  customers: [
    {
      ID: 7,
      firstName: "Pascal",
      lastName: "Schüler",
      email: "pschueler@wemakefuture.com",
      orders: [
        {
          orderID: 13043,
          items: [
            {
              sku: "343-sfasd",
              itemName: "Badewanne",
              quantity: 1,
              price: 499.0,
            },
            {
              sku: "532-iuzm",
              itemName: "Staubsauger",
              quantity: 2,
              price: 29.99,
            },
            {
              sku: "898-qecx",
              itemName: "Monitorstand",
              quantity: 1,
              price: 49.15,
            },
            {
              sku: "656-uzuz",
              itemName: "Textblock",
              quantity: 5,
              price: 8.99,
            },
          ],
        },
      ],
    },
    {
      ID: 2,
      firstName: "Franziska",
      lastName: "Müller",
      email: "fmueller@wemakefuture.com",
      orders: [
        {
          orderID: 25433,
          items: [
            {
              sku: "322-gdybn",
              itemName: "Teekanne",
              quantity: 1,
              price: 76.0,
            },
            {
              sku: "531-ndgfg",
              itemName: "Regenschirm",
              quantity: 1,
              price: 19.99,
            },
          ],
        },
        {
          orderID: 56443,
          items: [
            {
              sku: "974-kllo",
              itemName: "Kekse (vegan)",
              quantity: 10,
              price: 2.0,
            },
            {
              sku: "511-zheh",
              itemName: "Handballschuhe",
              quantity: 1,
              price: 129.99,
            },
            {
              sku: "616-fdbd",
              itemName: "USB-C Ladekabel",
              quantity: 2,
              price: 7.99,
            },
            {
              sku: "732-dfsv",
              itemName: "Kaffeebohnen",
              quantity: 1,
              price: 11.99,
            },
          ],
        },
      ],
    },
    {
      ID: 4,
      firstName: "Marc",
      lastName: "Keil",
      email: "mkeil@wemakefuture.com",
      orders: [
        {
          orderID: 31411,
          items: [
            {
              sku: "521-llul",
              itemName: "Headset",
              quantity: 1,
              price: 259.0,
            },
            {
              sku: "645-rnttn",
              itemName: "Leaque of Legends T-Shirt",
              quantity: 1,
              price: 29.99,
            },
          ],
        },
        {
          orderID: 34355,
          items: [
            {
              sku: "56f-dgdg",
              itemName: "Tastatur",
              quantity: 1,
              price: 78.99,
            },
            {
              sku: "424-dffbb",
              itemName: "T-Shirt",
              quantity: 2,
              price: 15.99,
            },
          ],
        },
      ],
    },
    {
      ID: 1,
      firstName: "Sebastian",
      lastName: "Mertens",
      email: "smertens@wemakefuture.com",
      orders: [
        {
          orderID: 13252,
          items: [
            {
              sku: "343-sfasd",
              itemName: "MacBook Pro",
              quantity: 2,
              price: 1499.0,
            },
            {
              sku: "532-iuzm",
              itemName: "Mate Tee",
              quantity: 5,
              price: 2.99,
            },
            {
              sku: "898-qecx",
              itemName: "Dogecoin",
              quantity: 1200,
              price: 0.29,
            },
            {
              sku: "12dsf9hh",
              itemName: "Kaffeetasse",
              quantity: 1,
              price: 4.99,
            },
          ],
        },
      ],
    },
    {
      ID: 5,
      firstName: "Bjorn",
      lastName: "van der Akker",
      email: "bvdakker@wemakefuture.com",
      orders: [
        {
          orderID: 15125,
          items: [
            {
              sku: "235-gebe",
              itemName: "Käse",
              quantity: 5,
              price: 5.99,
            },
            {
              sku: "734-avae",
              itemName: "Reiseführer Italien",
              quantity: 1,
              price: 15.99,
            },
            {
              sku: "155-wbeb",
              itemName: "Reiseführer Deutschland",
              quantity: 1,
              price: 15.99,
            },
            {
              sku: "411-gwvw",
              itemName: "Noch mehr Käse",
              quantity: 2,
              price: 4.99,
            },
          ],
        },
      ],
    },
    {
      ID: 3,
      firstName: "Simone",
      lastName: "Moglianesi",
      email: "smoglianesi@wemakefuture.com",
      orders: [
        {
          orderID: 25266,
          items: [
            {
              sku: "141-sbfs",
              itemName: "Nvidia Geforce RTX 3090",
              quantity: 1,
              price: 1699.0,
            },
            {
              sku: "754-sdvr",
              itemName: "Hundefutter",
              quantity: 13,
              price: 7.0,
            },
          ],
        },
        {
          orderID: 23542,
          items: [
            {
              sku: "142-nnge",
              itemName: "Pizza",
              quantity: 4,
              price: 6.99,
            },
            {
              sku: "131-vtbb",
              itemName: "Pasta",
              quantity: 2,
              price: 8.99,
            },
          ],
        },
      ],
    },
    {
      ID: 6,
      firstName: "Dominik",
      lastName: "Arnold",
      email: "darnold@wemakefuture.com",
      orders: [
        {
          orderID: 35436,
          items: [
            {
              sku: "343-sfasd",
              itemName: "JavaScript für Fortgeschrittene",
              quantity: 1,
              price: 49.0,
            },
            {
              sku: "532-iuzm",
              itemName: "Staubsauger",
              quantity: 2,
              price: 29.99,
            },
            {
              sku: "898-qecx",
              itemName: "Monitorstand",
              quantity: 1,
              price: 49.15,
            },
            {
              sku: "12dsf9hh",
              itemName: "Textblock",
              quantity: 5,
              price: 8.99,
            },
          ],
        },
      ],
    },
  ],
};

console.log(reformatData(data));
