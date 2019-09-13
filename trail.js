const nekoClient = require('./test/nekoxyz.js/index.js')
const neko = new nekoClient();

async function test() {
            var data = await neko.data;
            var user1= "https://vignette.wikia.nocookie.net/darling-in-the-franxx/images/b/b3/Zero_Two_appearance.jpg/revision/latest?cb=20180807204943"
            var user2 = "https://i.pinimg.com/originals/47/c5/c8/47c5c89fe1b0e6c972534b11cfc8d5f0.jpg"

            var url="https://i.pinimg.com/originals/47/c5/c8/47c5c89fe1b0e6c972534b11cfc8d5f0.jpg"
            var text="hMEOW"
            console.log(await neko.imagegen.ship(user1,user2))
            console.log(await neko.food())

          }
          
          test();