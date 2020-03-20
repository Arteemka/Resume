const contrInfPerson = document.getElementsByClassName("container_resume")[0];

fetch("../Data/data.json")
    .then(res => {
        return res.json();
    })
    .then(data => {
        infoPerson(data);
        contSection(data);
        clickSection();
        buttonSend(data);
    }).catch(() => {
        alert('Ошибка получения данных!');
    });

function clickSection() {
    const panelItem = document.querySelectorAll(".section_title");

    Array.from(panelItem).forEach(function(item) {
        item.addEventListener("click", function() {
            this.classList.toggle("icon-arrow-up");
        });
    });
}

function infoPerson(data) {
    const {
        fullName,
        position,
        phone,
        email,
        image,
        geoPoint
    } = data;
    const crtDivContInfPerson = document.createElement("DIV");
    const crtDivImgPerson = document.createElement("DIV");
    const crtImg = document.createElement("IMG");
    const crtDivInfPerson = document.createElement("DIV");
    const crtDivFullName = document.createElement("DIV");
    const crtDivPos = document.createElement("DIV");
    const crtDivNumbTel = document.createElement("DIV");
    const crtSpanIconTel = document.createElement("SPAN");
    const crtDivEmail = document.createElement("DIV");
    const crtSpanIconEmail = document.createElement("SPAN");
    const crtDivGeoPoint = document.createElement("DIV");
    const crtSpanIconGeoPoint = document.createElement("SPAN");

    crtDivContInfPerson.className = "container_info__person";
    contrInfPerson.append(crtDivContInfPerson);

    crtDivImgPerson.className = "image_person";
    crtImg.className = "photo";
    crtImg.src = `${image}`;

    crtDivInfPerson.className = "info_person";
    crtDivFullName.className = "fullName";
    crtDivPos.className = "position";
    crtDivNumbTel.className = "number_phone";
    crtSpanIconTel.className = "icon-phone";
    crtDivEmail.className = "email";
    crtSpanIconEmail.className = "icon-mail";
    crtDivGeoPoint.className = "geo_point";
    crtSpanIconGeoPoint.className = "icon-geo-point";

    crtDivContInfPerson.append(crtDivImgPerson);
    crtDivContInfPerson.append(crtDivInfPerson);

    crtDivImgPerson.append(crtImg);

    crtDivInfPerson.append(crtDivFullName);
    crtDivInfPerson.append(crtDivPos);
    crtDivInfPerson.append(crtDivNumbTel);
    crtDivNumbTel.appendChild(crtSpanIconTel);
    crtDivInfPerson.append(crtDivEmail);
    crtDivEmail.append(crtSpanIconEmail);
    crtDivInfPerson.append(crtDivGeoPoint);
    crtDivGeoPoint.append(crtSpanIconGeoPoint);

    crtDivFullName.textContent = `${fullName}`;
    crtDivPos.textContent = `${position}`;
    crtSpanIconTel.after(`${phone}`);
    crtSpanIconEmail.after(`${email}`);
    crtSpanIconGeoPoint.after(`${geoPoint}`);
}

function contSection(data) {
    const {
        section
    } = data;
    const crtDivSection = document.createElement("DIV");

    crtDivSection.className = "container_section";
    if (section) {
        contrInfPerson.append(crtDivSection);

        section.forEach(item => {
            sectionGr(crtDivSection, item)
        })
    }
}

function sectionGr(crtDivSection, list) {
    const {
        title,
        items
    } = list;
    const crtDivSectionGr = document.createElement("DIV");
    const crtDivSectionTitle = document.createElement("DIV");
    const crtDivSectionBody = document.createElement("DIV");
    const crtButtonTitle = document.createElement("BUTTON");

    crtButtonTitle.className = "button_title";
    list.isOpen ? (crtDivSectionTitle.className =
            "section_title icon-arrow-down icon-arrow-up") :
        (crtDivSectionTitle.className = "section_title icon-arrow-down");

    crtDivSectionBody.className = "section_body";
    crtDivSectionGr.className = "section_group";

    crtButtonTitle.textContent = `${title}`;

    crtDivSection.append(crtDivSectionGr);
    crtDivSectionGr.append(crtDivSectionTitle);
    crtDivSectionTitle.append(crtButtonTitle);
    crtDivSectionGr.append(crtDivSectionBody);

    items.forEach(item => {
        itemsContent(crtDivSectionBody, item)
    })
}

function itemsContent(crtDivSectionBody, list) {
    const {
        items,
        title,
        subTitle,
        from,
        to
    } = list;
    const crtItemSectionBody = document.createElement("DIV");
    const crtDivTitle = document.createElement("DIV");
    const crtDivSubTitle = document.createElement("DIV");
    const crtDivTimeWork = document.createElement("DIV");
    const crtUL = document.createElement("UL");

    crtItemSectionBody.className = "item_section__body";
    crtDivSectionBody.append(crtItemSectionBody);

    crtDivTitle.className = "title";
    crtDivSubTitle.className = "SubTitle";
    crtDivTimeWork.className = "timeWork";
    crtUL.className = "listItems_section";

    crtDivTitle.textContent = `${title}`;
    crtDivSubTitle.textContent = `${subTitle}`;
    crtDivTimeWork.textContent = `${from} - ${to}`;

    if (title) {
        crtItemSectionBody.append(crtDivTitle);
    }
    if (subTitle) {
        crtItemSectionBody.append(crtDivSubTitle);
    }
    if (from && to) {
        crtItemSectionBody.append(crtDivTimeWork);
    }
    if (items) {
        crtItemSectionBody.append(crtUL);

        items.forEach(item => {
            listToDo(crtUL, item);
        })
    }
}

function listToDo(crtUL, item) {
    const crtLi = document.createElement("LI");
    const crtSpan = document.createElement("SPAN");

    crtLi.className = "item_section";

    crtSpan.textContent = `${item}`;
    crtLi.append(crtSpan);
    crtUL.append(crtLi);
}

function buttonSend(data) {
    const {
        fullName,
        email,
        sex
    } = data;
    const d = new Date();
    let day = d.getDate();
    let month = d.getMonth() + 1;
    const year = d.getFullYear();
    const crtDivSend = document.createElement("DIV");
    const crtButton = document.createElement("BUTTON");
    const appealSToSex = sex === "male" ? "Уважаемый" : "Уважаемая";

    day = day < 10 ? "0" + day : day;
    month = month < 10 ? "0" + month : month;

    crtDivSend.className = "send";
    crtButton.className = "button_send";

    crtButton.textContent = "send";
    crtButton.setAttribute('onclick', `location.href='mailto:${email}?subject=Приглашение на собеседование&body=${appealSToSex} ${fullName}, приглашаем Вас на собеседование в компанию Artezio.%0A%0A${day}.${month}.${year}'`);

    contrInfPerson.append(crtDivSend);
    crtDivSend.append(crtButton);
}