// DZ 1

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myBlend(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  myBlend(arr);
  console.log(arr);

  //DZ 2
  const company = {
    name: 'Велика Компанія',
    type: 'Головна компанія',
    platform: 'Платформа для продажу квитків',
    sellsSolution: 'Рішення для продажу квитків',
    clients: [
        {
            name: 'Клієнт 1',
            type: 'subCompany',
            uses: 'ПО для продажу квитків1',
            sells: 'Рішення для продажу квитків1',
            partners: [
                {
                    name: 'Клієнт 1.1',
                    type: 'subCompany_1.1',
                    uses: 'Рішення для продажу квитків1.1',
                    sells: 'Рішення для продажу квитків1.1',
                },
                {
                    name: 'Клієнт 1.2',
                    type: 'subCompany_1.2',
                    uses: 'Рішення для продажу квитків1.2',
                    sells: 'Рішення для продажу квитків1.2',
                    partners: [
                        {
                            name: 'Клієнт 1.2.3',
                            type: 'subCompany_1.2.3',
                            uses: 'Рішення для продажу квитків1.2.3',
                            sells: 'Рішення для продажу квитків1.2.3',
                        }
                    ]
                }
            ]
        },
        {
            name: 'Клієнт 2',
            type: 'subCompany_2',
            uses: 'ПО для продажу квитків2',
            sells: 'Рішення для продажу квитків2'
        }
    ]
};

function findValueByKey(companyName) {
    function search(companyObj, name) {
        if (companyObj.name === name) {
            return companyObj;
        }
        if (companyObj.partners) {
            for (const partner of companyObj.partners) {
                const result = search(partner, name);
                if (result) {
                    return result;
                }
            }
        }
    }

    for (const client of company.clients) {
        if (client.name === companyName) {
            return client;
        }
        if (client.partners) {
            const result = search(client, companyName);
            if (result) {
                return result;
            }
        }
    }

    return 'Company not found';
}

console.log(findValueByKey('Клієнт 3'));