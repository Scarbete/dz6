import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getProductsList = createAsyncThunk (
    "products", async () => {return axios.get("https://fakerapi.it/api/v1/products?_quantity=20")
        .then(resp => resp.data.data)
    }
)

const productsSlice = createSlice({
    name: "products",
    initialState: {
        products: [
            {
                "_id": "64",
                "name": "enim labore anim",
                "price": "$282",
                "picture": "http://placehold.it/300x250",
                "color": "brown",
                "description": "Pariatur pariatur amet sit nulla culpa commodo minim enim cupidatat aute quis do nostrud exercitation. Proident irure ut Lorem fugiat nostrud minim occaecat aliqua irure ea elit Lorem cillum labore. Nisi ullamco reprehenderit nostrud quis culpa excepteur amet in sint occaecat aliquip id enim officia. Consequat sunt pariatur eiusmod ut ad esse sint laboris sit veniam nisi officia aliqua. Officia irure mollit excepteur cupidatat. Lorem incididunt in et eu.\r\n",
                "category": "dolore",
                "tags": ["Lorem", "nisi", "consectetur", "eu", "occaecat", "proident", "occaecat"]
            },
            {
                "_id": "45",
                "name": "est labore do",
                "price": "$141",
                "picture": "http://placehold.it/300x250",
                "color": "blue",
                "description": "In aliqua nisi consectetur velit occaecat labore esse officia ad consequat aute enim anim magna. Ipsum eiusmod incididunt commodo minim minim deserunt aute sunt cillum consequat. Ullamco labore est voluptate quis qui culpa duis dolore ut voluptate duis ullamco. Ipsum incididunt reprehenderit sit laborum. Irure eu nostrud ea minim amet. Sint ipsum ea consequat sint amet ea sit id esse ex nulla consectetur exercitation.\r\n",
                "category": "cillum",
                "tags": ["velit", "excepteur", "reprehenderit", "duis", "exercitation", "voluptate", "dolor"]
            },
            {
                "_id": "31",
                "name": "dolore labore ex",
                "price": "$166",
                "picture": "http://placehold.it/300x250",
                "color": "green",
                "description": "Ut consequat proident est anim pariatur exercitation cupidatat deserunt eiusmod aute. Et qui commodo nisi dolor do incididunt magna enim officia labore aliquip ad et eu. Reprehenderit veniam aliqua officia excepteur aliqua in nostrud. Lorem aute occaecat amet ex enim. Occaecat in commodo tempor et tempor pariatur et minim. Irure culpa reprehenderit et commodo aliquip quis enim consectetur sit nostrud consequat.\r\n",
                "category": "reprehenderit",
                "tags": ["sit", "consequat", "ad", "ut", "anim", "in", "cupidatat"]
            },
            {
                "_id": "647",
                "name": "enim proident tempor",
                "price": "$244",
                "picture": "http://placehold.it/300x250",
                "color": "blue",
                "description": "Aliqua consectetur pariatur ea tempor sunt amet consequat ullamco aliqua. Commodo adipisicing nostrud culpa aliquip sint. Qui eu ex nulla tempor enim. Sit cillum nulla cillum sit tempor culpa sint voluptate ut proident laborum duis sit. Eu sint est id ad ut voluptate non. Lorem pariatur reprehenderit ea minim minim id. Pariatur sit pariatur est ea sunt.\r\n",
                "category": "ullamco",
                "tags": ["sunt", "duis", "est", "consequat", "est", "ea", "dolore"]
            },
            {
                "_id": "71",
                "name": "fugiat qui eu",
                "price": "$269",
                "picture": "http://placehold.it/300x250",
                "color": "green",
                "description": "Adipisicing aliquip laborum anim eiusmod occaecat non laborum id do consequat irure ea anim esse. Irure ut pariatur consequat ut. Excepteur aliquip adipisicing id mollit laborum consequat incididunt. In dolor veniam reprehenderit ullamco elit. Ad ad nulla duis excepteur non pariatur sint occaecat nostrud qui consectetur nostrud ea. Magna et aute nostrud quis commodo.\r\n",
                "category": "ad",
                "tags": ["dolore", "et", "proident", "do", "ut", "laborum", "velit"]
            },
            {
                "_id": "61",
                "name": "excepteur velit officia",
                "price": "$142",
                "picture": "http://placehold.it/300x250",
                "color": "green",
                "description": "Ullamco aliqua irure incididunt mollit anim. Cupidatat do incididunt eu qui labore cupidatat ipsum. Sint labore voluptate incididunt deserunt amet tempor proident id officia. Elit eiusmod consequat in mollit nisi occaecat deserunt aliquip labore aliquip.\r\n",
                "category": "ut",
                "tags": ["consectetur", "dolore", "velit", "id", "do", "magna", "id"]
            },
            {
                "_id": "58",
                "name": "labore elit dolore",
                "price": "$293",
                "picture": "http://placehold.it/300x250",
                "color": "brown",
                "description": "Magna aliqua ullamco consectetur cillum amet Lorem laboris aliquip laborum id. Reprehenderit eu commodo consectetur pariatur exercitation dolore aliqua. Aute sunt enim aliquip est do magna et reprehenderit laboris consequat non mollit dolor.\r\n",
                "category": "aute",
                "tags": ["nulla", "incididunt", "nostrud", "do", "nulla", "proident", "in"]
            },
            {
                "_id": "25",
                "name": "ut voluptate ex",
                "price": "$175",
                "picture": "http://placehold.it/300x250",
                "color": "green",
                "description": "Magna ut cillum duis esse qui Lorem. Ullamco ut aliqua exercitation est id occaecat velit ipsum do ex dolor veniam. Fugiat occaecat tempor occaecat sit consequat adipisicing occaecat. Cillum laboris sit ipsum ex non quis laboris enim nisi ad esse nulla anim. Dolor minim enim ex exercitation cillum eu amet.\r\n",
                "category": "nisi",
                "tags": ["ut", "fugiat", "officia", "duis", "Lorem", "adipisicing", "nisi"]
            },
            {
                "_id": "84",
                "name": "ea qui incididunt",
                "price": "$112",
                "picture": "http://placehold.it/300x250",
                "color": "blue",
                "description": "Voluptate dolor minim exercitation non qui irure anim non esse ea. Adipisicing esse ullamco eu nostrud adipisicing sunt in cillum sunt ut reprehenderit laboris ex. Fugiat ea anim tempor dolore culpa sit nisi elit dolore cillum. Cupidatat fugiat anim do laborum. Occaecat reprehenderit elit voluptate et ipsum dolor ullamco laboris. Do amet Lorem irure officia ullamco consequat.\r\n",
                "category": "magna",
                "tags": ["duis", "anim", "nostrud", "aute", "ullamco", "nisi", "ut"]
            },
            {
                "_id": "12",
                "name": "do sunt id",
                "price": "$144",
                "picture": "http://placehold.it/300x250",
                "color": "yellow",
                "description": "Quis ullamco et minim mollit qui exercitation reprehenderit irure et consequat nisi. Anim minim mollit occaecat reprehenderit deserunt. Fugiat excepteur do laborum nisi enim cillum. Irure magna ad anim cillum quis nulla veniam commodo pariatur Lorem dolor excepteur.\r\n",
                "category": "deserunt",
                "tags": ["tempor", "deserunt", "et", "consequat", "enim", "ea", "cupidatat"]
            },
            {
                "_id": "1",
                "price": "$169",
                "picture": "http://placehold.it/300x250",
                "color": "green",
                "description": "Cupidatat laborum labore cillum irure deserunt. Aute cupidatat labore est enim pariatur ipsum dolor eiusmod deserunt pariatur. Esse nostrud eu dolor commodo nulla esse cupidatat est in ullamco amet eu proident.\r\n",
                "category": "dolor",
                "tags": ["quis", "esse", "est", "ipsum", "ullamco", "consequat", "duis"]
            },
            {
                "_id": "98",
                "name": "est officia cillum",
                "price": "$202",
                "picture": "http://placehold.it/300x250",
                "color": "blue",
                "description": "Deserunt qui veniam magna elit. In laboris tempor irure do ex et ex. Amet sit ad exercitation deserunt proident ad est elit. Id voluptate adipisicing esse amet.\r\n",
                "category": "magna",
                "tags": ["fugiat", "anim", "occaecat", "duis", "exercitation", "eiusmod", "aliqua"]
            },
            {
                "_id": "764",
                "name": "velit duis minim",
                "price": "$105",
                "picture": "http://placehold.it/300x250",
                "color": "brown",
                "description": "Laborum laboris excepteur minim sint. Fugiat dolor ea id in. Aute aliqua culpa veniam consequat veniam aliqua mollit dolore nostrud laborum pariatur et cillum. Voluptate qui voluptate tempor est cupidatat eu cillum voluptate adipisicing magna.\r\n",
                "category": "nulla",
                "tags": ["dolore", "consectetur", "consequat", "commodo", "tempor", "dolor", "culpa"]
            },
            {
                "_id": "98",
                "name": "officia do consectetur",
                "price": "$46",
                "picture": "http://placehold.it/300x250",
                "color": "pink",
                "description": "Incididunt culpa mollit cupidatat laborum velit amet occaecat dolore cillum mollit exercitation minim magna pariatur. Fugiat excepteur esse proident laboris eu deserunt labore nisi. Consequat aute aliquip labore velit.\r\n",
                "category": "pariatur",
                "tags": ["cillum", "commodo", "amet", "elit", "in", "incididunt", "est"]
            },
            {
                "_id": "35",
                "name": "dolore ut nulla",
                "price": "$196",
                "picture": "http://placehold.it/300x250",
                "color": "yellow",
                "description": "Elit sunt eiusmod minim esse mollit nulla. Eiusmod aute cillum ipsum nisi commodo amet in voluptate minim. Ut et commodo laborum excepteur consectetur adipisicing ipsum magna ullamco ad nostrud sunt consectetur labore. Dolor proident ad aute deserunt id nulla exercitation in do sit minim. Amet fugiat aliqua voluptate et amet ad amet qui fugiat veniam ipsum eiusmod. Esse velit incididunt excepteur magna sunt amet. Officia consectetur est cupidatat aute elit esse excepteur nostrud consectetur commodo amet aute.\r\n",
                "category": "minim",
                "tags": ["velit", "dolor", "commodo", "consequat", "amet", "quis", "ullamco"]
            },
            {
                "_id": "22",
                "name": "irure et ad",
                "price": "$116",
                "picture": "http://placehold.it/300x250",
                "color": "blue",
                "description": "Enim dolor fugiat ut laborum ex irure voluptate irure dolor nulla laborum. Mollit sint veniam cupidatat mollit aliqua duis nisi. Aliquip cillum duis ullamco deserunt.\r\n",
                "category": "sunt",
                "tags": ["consequat", "commodo", "enim", "proident", "ullamco", "velit", "eu"]
            },
            {
                "_id": "45",
                "name": "qui labore sunt",
                "price": "$49",
                "picture": "http://placehold.it/300x250",
                "color": "pink",
                "description": "Esse culpa cupidatat mollit proident amet tempor labore nulla occaecat anim veniam. Pariatur irure sit mollit aute enim laboris laborum quis culpa pariatur eu dolor. Ea do eu occaecat amet et voluptate mollit irure sint pariatur tempor occaecat aliqua magna. Exercitation consequat do qui cillum est officia ad. Deserunt consequat dolore consectetur non aute. Ut eiusmod Lorem fugiat proident in do excepteur sint eiusmod deserunt occaecat cillum aliqua. Incididunt laboris dolore exercitation laboris laboris est sit elit sint duis duis veniam.\r\n",
                "category": "reprehenderit",
                "tags": ["fugiat", "magna", "incididunt", "officia", "magna", "magna", "eiusmod"]
            },
            {
                "_id": "85",
                "name": "officia ullamco incididunt",
                "price": "$162",
                "picture": "http://placehold.it/300x250",
                "color": "yellow",
                "description": "Labore non enim ad in est deserunt velit. Mollit laborum proident officia voluptate non ut consectetur nulla laboris incididunt minim. Reprehenderit eu labore laborum et. Sit cillum labore veniam ea. Incididunt ullamco sint veniam aliqua minim reprehenderit ipsum nisi Lorem sint ad. Pariatur ex dolor ullamco elit sit amet ut id officia occaecat.\r\n",
                "category": "elit",
                "tags": ["non", "sint", "quis", "ad", "irure", "aute", "exercitation"]
            },
            {
                "_id": "51",
                "name": "esse magna laborum",
                "price": "$144",
                "picture": "http://placehold.it/300x250",
                "color": "green",
                "description": "Velit reprehenderit ut dolore eiusmod quis laboris id amet fugiat aliquip laboris. Nisi reprehenderit exercitation dolor commodo nulla excepteur occaecat eu voluptate sint reprehenderit occaecat pariatur. Ullamco consectetur esse veniam aliquip. Ad ea anim deserunt aute ipsum fugiat ad. Aliqua ex ex anim consectetur irure ut fugiat esse ea irure minim exercitation duis. Fugiat tempor adipisicing occaecat quis cillum. Non nostrud labore exercitation duis eu ullamco officia amet.\r\n",
                "category": "commodo",
                "tags": ["labore", "ipsum", "adipisicing", "officia", "mollit", "ullamco", "labore"]
            },
            {
                "_id": "10",
                "name": "sit cupidatat sit",
                "price": "$27",
                "picture": "http://placehold.it/300x250",
                "color": "brown",
                "description": "Proident fugiat velit sunt amet pariatur eiusmod excepteur pariatur voluptate. Consectetur commodo ipsum excepteur do. Mollit aliqua officia magna labore do sunt ex adipisicing dolor ipsum cillum id.\r\n",
                "category": "est",
                "tags": ["ipsum", "cupidatat", "deserunt", "elit", "dolor", "eiusmod", "ea"]
            }
        ]
    },
    reducers: {}
})
export default productsSlice.reducer