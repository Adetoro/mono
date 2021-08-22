const express =  require('express');
const cors = require('cors');

const app = express();
const port = 3005;

// ALLOW EXPRESS SERVER READ JSON
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// MIDDLEWARE TO ALLOW ACCESS TO SERVER
app.use(cors())

//DATABASE
const DB = [
    {
        id: 1,
        name: 'GTBank',
        logo: 'bankslist/logos/GTB.png' 

    },
    {
        id: 2,
        name: 'Zenith Bank',
        logo: 'bankslist/logos/ZenithBank.png'

    },
    {
        id: 3,
        name: 'Fidelity Bank',
        logo: 'bankslist/logos/FidelityBank.png'

    },
    {
        id: 4,
        name: 'Kuda Bank',
        logo: 'bankslist/logos/KudaBank.png'

    },
    {
        id: 5,
        name: 'Polaris Bank',
        logo: 'bankslist/logos/PolarisBank.png'

    },
    {
        id: 6,
        name: 'Wallets Africa',
        logo: 'bankslist/logos/WalletsAfrica.png'

    },
    {
        id: 7,
        name: 'Access Bank',
        logo: 'bankslist/logos/AccessBank.png'

    },
    {
        id: 8,
        name: 'FCMB',
        logo: 'bankslist/logos/FCMB.png'

    },
    {
        id: 9,
        name: 'Barter',
        logo: 'bankslist/logos/Barter.png'

    },
    {
        id: 10,
        name: 'Standard Chatered',
        logo: 'bankslist/logos/StandardChatered.png'

    },
    {
        id: 11,
        name: 'Stanbic IBTC',
        logo: 'bankslist/logos/StanbicIBTC.png'

    },
    {
        id: 12,
        name: 'Union Bank',
        logo: 'bankslist/logos/UnionBank.png'

    },
    {
        id: 13,
        name: 'First Bank',
        logo: 'bankslist/logos/FirstBank.png'

    },
]

app.get('/', (req, res) => {
    res.json("it's working");
  });

//GET LIST OF BANKS WITH IMAGES
app.get('/banks', (req, res) => {
    if(DB){
        return res.json(DB)
    }
    else{
        res.status(400).json('Banklist not found')
    }
   
  
 });




app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
