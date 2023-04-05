console.log('Script is Running');

//common share
let txtGlitch = document.getElementById('txt_Glitch');
let ownerName = document.getElementById('owner_name');
let image = document.getElementById('image');
let endOfDeal = document.getElementById('end_of_deal');
let soldOutItems = document.getElementById('sold_out_items');
let description = document.getElementById('description');
let shortDescription = document.querySelectorAll('.shortDescription');
let firstName = document.querySelectorAll('.first_name');
let lastName = document.querySelectorAll('.last_name');
let blankImg = document.getElementById('blank_img');

// Get data from data.json
let xhr = new XMLHttpRequest();
xhr.open('GET', "./data.json", true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);

        txtGlitch.innerHTML = json.coverName;
        ownerName.innerHTML = json.ownerName;
        endOfDeal.innerHTML = json.projectIndividualNfts[1].nftAuction.expiry;
        soldOutItems.innerHTML = json.projectIndividualNfts[0].qty;

        //commmon share's block image
        let img = document.createElement('img');
        img.src = json.coverFileUrl;
        image.append(img);

        //buyer's guide block image
        let imgBlank = document.createElement('img');
        imgBlank.src = json.projectIndividualNfts[0].purchaseList[0].blockChainDetails.ipfsFileUrl;
        imgBlank.style.width = '100%';
        imgBlank.style.height = '100%';
        blankImg.append(imgBlank);
    }
}

xhr.send();

let benefitSecDescription = document.getElementById('benefit_sec_description');
let add = document.getElementById('add');
let add2 = document.getElementById('add2');
let add3 = document.getElementById('add3');
let add4 = document.getElementById('add4');
let investmentMore = document.getElementById('investment_more');
let termsReadMore = document.getElementById('terms_read_more');
let riskMoreRead = document.getElementById('risk_more_read');
let buyingProcess = document.getElementById('buying_process');

let xhr2 = new XMLHttpRequest();
xhr2.open('GET', "./data_2.json", true);

xhr2.onload = function () {
    if (this.status === 200) {
        let json2 = JSON.parse(this.responseText);
        // add.classList.add('accordion')

        // open multiple sections -> Benefits of Investment
        function investMore() {
            // add.classList.remove('accordion');
            investmentMore.innerHTML = '-';

            for (desp of json2.data.projectDetails.documents) {
                add.innerHTML += `<div class="d_flex justify_between investment_steps_2 margin_auto">
                                        <div>
                                            <h4 class="sub_h_secondary common_properties description">${desp.description}</h4>
                                        </div>
                                        <div class="sign read_more_btn">+</div>
                                    </div>`;
            }
        }

        // open multiple sections -> Terms of Investment
        function moreCondition() {
            termsReadMore.innerHTML = '-';

            for (desp of json2.data.projectDetails.documents) {
                add2.innerHTML += `<div class="d_flex justify_between investment_steps_2 margin_auto">
                                    <div>
                                        <h4 class="sub_h_secondary common_properties description">${desp.description}</h4>
                                    </div>
                                    <div class="sign read_more_btn">+</div>
                                </div>`;
            }
        }

        // open multiple sections -> Risks of Investment
        function moreRisk() {
            riskMoreRead.innerHTML = '-';

            for (desp of json2.data.projectDetails.documents) {
                add3.innerHTML += `<div class="d_flex justify_between investment_steps_2 margin_auto">
                                    <div>
                                        <h4 class="sub_h_secondary common_properties description">${desp.description}</h4>
                                    </div>
                                    <div class="sign read_more_btn">+</div>
                                </div>`;
            }
        }

        // open multiple sections -> How to buy
        function buyGuide() {
            buyingProcess.innerHTML = '-';

            for (desp of json2.data.projectDetails.highlights) {
                add4.innerHTML += `<div class="d_flex justify_between investment_steps_2">
                                    <div>
                                        <h4 class="sub_h_secondary common_properties description width_auto">${desp.description}</h4>
                                    </div>
                                    <div class="sign read_more_btn">+</div>
                                </div>`;
            }
        }

        // investmentMore.style.transform;

        // close multiple sections -> Benefits of Investment
        function lessInvest() {
            // add.classList.add('accordion');
            investmentMore.innerHTML = '+';
            add.innerHTML = '';
        }

        // close multiple sections -> Terms of Investment
        function lessTerm() {
            termsReadMore.innerHTML = '+';
            add2.innerHTML = '';
        }

        // close multiple sections -> Risks of Investment
        function lessRisk() {
            riskMoreRead.innerHTML = '+';
            add3.innerHTML = '';
        }

        // close multiple sections -> How to buy
        function buyGuideClose() {
            buyingProcess.innerHTML = '+';
            add4.innerHTML = '';
        }

        //Benefits of Investment
        investmentMore.addEventListener('click', () => {
            if (investmentMore.innerHTML == '+') {
                investMore();
            }
            else {
                lessInvest();
            }
        });

        //Terms of Investment
        termsReadMore.addEventListener('click', () => {
            if (termsReadMore.innerHTML == '+') {
                moreCondition();
            }
            else {
                lessTerm();
            }
        });

        //Risks of Investment
        riskMoreRead.addEventListener('click', () => {
            if (riskMoreRead.innerHTML == '+') {
                moreRisk();
            }
            else {
                lessRisk();
            }
        });

        //Risks of Investment
        buyingProcess.addEventListener('click', () => {
            if (buyingProcess.innerHTML == '+') {
                buyGuide();
            }
            else {
                buyGuideClose();
            }
        });

        let html = '';
        let courses = document.getElementById('courses');

        for (participants of json2.data.projectDetails.participants) {
            html += `<div class="more_suggestion_container">
                        <div class="unpalsh_img">
                            <img src="${participants.fileUrl}" alt="">
                        </div>
                        <div class="d_flex justify_evenly background_transparent justify_evenly">
                            <div class="background_transparent sub_logo">
                                <img src="./image/unsplash_FjvXUeYf1AA.png" alt="">
                            </div>
                            <div class="background_transparent">
                                <p class="common_properties string background_transparent">${participants.fileName}</p>
                                <div class="d_flex background_transparent">
                                    <p class="common_properties sub_string background_transparent">Owned by –</p>
                                    <pre class="common_properties sub_string background_transparent first_name">${participants.firstName + ' '}</pre>
                                    <p class="common_properties sub_string background_transparent last_name"> ${participants.lastName}</p>
                                </div>
                            </div>
                        </div>
                        <div class="d_flex justify_between align_center price_and_buyBtn">
                            <p class="price">Price – INR ${participants.price}</p>
                            <div class="d_flex align_center buy_btn">
                                <button type="button" name="" value="" class="price" id="btn">Buy Now</button>
                            </div>
                        </div>
                    </div>`;

            courses.innerHTML = html;
        }
    }
}
xhr2.send();