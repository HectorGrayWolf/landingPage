
// Items data
const itemsPortfolio = [
    {
        title: "LOG CABIN",
        image: "cabin.png",
        description: "LOG CABIN Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        title: "TASTY CAKE",
        image: "cake.png",
        description: "TASTY CAKE. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        title: "CIRCUS TENT",
        image: "circus.png",
        description: "CIRCUS TENT, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        title: "CONTROLLER",
        image: "game.png",
        description: "CONTROLLER, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        title: "LOCKED SAFE",
        image: "safe.png",
        description: "LOCKED SAFE, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
    {
        title: "SUBMARINE",
        image: "submarine.png",
        description: "SUBMARINE, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam."
    },
]

// Operations to print items on DOM
let allItems = ''
const addImgPortfolio = item => {
    var elem = `<div class="col-md-6 col-lg-4 mb-5">
                    <div id="placehere" class="portfolio-item mx-auto rounded-0" data-toggle="modal" data-target="#portfolio" title="${item.title}">
                        <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div class="portfolio-item-caption-content d-flex align-items-center justify-content-center text-white">
                                <i class="fas fa-plus fa-4x"></i>
                            </div>
                        </div>
                        <img class="img-fluid" src="../public/img/${item.image}" alt="...">
                    </div>
                </div>`
    allItems += elem;
}

itemsPortfolio.map(item => {
    addImgPortfolio(item, item);
})
document.getElementById("placehere").innerHTML = allItems;

