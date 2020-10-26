var container = document.querySelector(".jsx-4246064035.container");
var playbtn = document.querySelector(".jsx-590763821.btn-play");
var trailer = document.querySelector(".jsx-386591904.img-wrapper.has-trailer");
var permit = document.querySelector(".ant-checkbox-wrapper").lastChild.childNodes[0];

var div = document.createElement("div");
div.style.display = "flex";
div.style.alignItems = "center";
div.style.backgroundImage = "linear-gradient(to right, #3B6FAF, #232530)";
div.style.width = "max-content";
div.style.borderRadius = "5px";
div.style.paddingLeft = "1rem";
div.style.paddingRight = "1rem";
div.style.marginBottom = "2rem";

div.innerHTML = `<div style="margin: 0.5rem"><svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="36" height="36" fill="url(#pattern0)"/>
<mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="36" height="36">
<rect width="36" height="36" fill="url(#pattern1)"/>
</mask>
<g mask="url(#mask0)">
<rect width="36" height="36" fill="white"/>
</g>
<defs>
<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.015625)"/>
</pattern>
<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0" transform="scale(0.015625)"/>
</pattern>
<image id="image0" width="64" height="64" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAABEVJREFUeAHtWk1IFVEU9llquJCC0EjIUHCThNYiiIpAKAlp1dYiWoQ73Ug7iVqECzfuCorATZGEBC2ioFXSojIqEFoVVPYHFkRFkH3f440czzsztzf65um798L35t7ze8+5P3PnzeQWFxdrfC61PgfP2DeuNAG5XG4zbJwGeoBuoAV4CcwCDzDD7uKausD+MSj3ArTdBXwEaPsZcA32F3BNX7gE0gJe+4F3ANdRHKbA21aqD+oA1I2zSzp995dqW8qvJPhxR+dkx79C9qB0nFSnLEAdaSOpPp5kL4mXKgHoWF9C5/7G8OZBb03qDHmUASibFLDF63PZtvglJwAdawLeqg5yHQ4CO4AGYC9wE9AdfQRardWRQvDclCmj9aZBOwDQdycwBHwHpBz71BRnO46eJgF0Lh2zIx2WA9BHlSz1zlqypJFnyI9a8pDrAHQShizZJFqaBEyqTg7HOYAcR/Sekv+C9hatQxpAnkwudZNmzLCSn9R2Xe00CZhTTjuTnECWt0W9pie0DmQmlF3qtGg52Qafy0EmbE7y/6eeJgHflFPnuoM89wfZ0T9oL90aWQdIkzKDrgAgzz1B6iy4dDSfU7TU8kIp7FZtq3kVRN6zo8ID2MmoUajLQxllqeMq2vdzl4Lmp0nArDIyotpFTWT9N4hjinFGtGWd5LGCjhAxq9r3E1MqiainhKsNW8cBOe1YvwjUJemC3wj8AKQuDzyEpFGm0WGrDjL0KfVYP5KkZ/FK3gNoBGXacM6zebflJKKBr4+250EjZCBTkbx1pQ+AvqQO6zcseRctbQK2w+GC0QluZBeAessx6ANK5zLahAxmIEa3HnK0rTdL6vL22WzpuWipEkCjKL1A3Hn9FXjc5BpkB9DmpiWDvYM2IWldSocnS9qiTSkX1T+DfkjqlFLPUVgWPH5ukm1HfSf4t4BdMXIcmesAj7ectpRjwFF5WqjsiQi4HgVeAz3AfuAUsBWwCh+7TwBvLKZFQ7y/ltELCWgH8TYQN6JRtqvhyhgZa3s0+G1oWOu5GoJNioExt23AzxVATkE0vShc6q05/HwAeBSNCg8tWRRubrJUwu88E8BpslSwLkgre8Fmuyb8pjkKlz05WToICcgy22vRV5gBa3FUsuyT9zNA/guTT3yJzwKrNlgV84sIlt2PVy2idWLI+yXABMysk8EqRzdneOzdB/APS15ZsjqjV9rPY8Q6Yv0hsmxPKNezQVbPAi4/YQ/IT3qPf8IM8Hjw86GHGRBmgOcZCEvA8wmQ/4bH6xyEJeD18CP4MAPCDPA8A2EJeD4BwiYYlkBYAp5nwPslUPRuUE+IrN7ZZeVHx2clgJ+qtwrBn6JezmoWfuQn+/lYrCVwv5xRVth2cWz8WlICHWwG3gN8Q1RNYExFH1QXvRqDUA3WI5NwCTgM8Mvw9VwY+EPgHAb6kw7ETIAWqua2tQdUc7xFsf0DRs99ztQ5ErsAAAAASUVORK5CYII="/>
</defs>
</svg>
</div><div style="margin: 0.5rem">Alef'i yakından takip etmene çok sevindik, şimdi abone olursan, <b>1 hafta abonelik de bizden hediye!</b></div>`;

container.prepend(div);

playbtn.style.display = "flex";
playbtn.style.padding = "0";
playbtn.style.alignItems = "center";
playbtn.removeAttribute("href");

playbtn.innerHTML = `<div style="background-image:linear-gradient(to top right, #3B6FAF, #232530);display: flex;padding: 1rem;"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="32" height="32" fill="url(#pattern2)"></rect>
<mask id="mask1" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
<rect width="32" height="32" fill="url(#pattern3)"></rect>
</mask>
<g mask="url(#mask1)">
<rect width="32" height="32" fill="white"></rect>
</g>
<defs>
<pattern id="pattern2" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image1" transform="scale(0.0078125)"></use>
</pattern>
<pattern id="pattern3" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image1" transform="scale(0.0078125)"></use>
</pattern>
<image id="image1" width="128" height="128" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAAAXNSR0IArs4c6QAACJNJREFUeAHtXWmoVVUU7jVnNiCVNKpk9SMbXlhqkY1kRUoT9KNyTNMwDIyEBH8lSBGNBBZZUWSolBoNGlnoE8p5QhISFYrql5AFTfb6Pl6Xc5/v3nvO3Wvtvc+wNizOvvvsvdY63/ruuuecde69Hd3d3Udpto6OjpOg7y7ISMgoyDDIXsiWOtkAu4fx2lpkBDo0CYDgn4PjWQEZnnJce7B/HmQp7OsyMMWw7e6NgBoBEPyroXo5hCTI2rZi4lxw4LOsC2yeLgIqBEDw+8OtA5ABju6tw7rpIMJux/W2zBGBox3XHbnsUQy4Bp+6rodsBpFmQ7R8ol5rKQiIMwACdgJs7IOcnWIr6+61mDgR2YA6rXlGQOPd9iB81Ao+D3c0ZAeINZUvrPlFQIMAnR5c5DnF6yDBJxBNcnlwtdgqNQgw2CMEd0L3LpDgAY82Kq067wRgcHhy+QFIsBgiOdGsdKCbHbzGSeAhKGfKDtF+gpEpdt9AD2pRBsA78hS4Eir4PGqeD3wKuwshIe3SdimbiABA5JhIqEyDXV4p8P6BNQECUgIITIuXDoGGr0GC5yC8F2HNAYEiE4CHS/+fhPAu4lUcsNYeAkUnQO1oL0XnG5BgHuTY2qBt0xEQXQUA7NNh4mC6maAzNsLaeFwpfBfUakGNlSUD1MPPsvQWkPMJSEf9Duv3RaCMBOBR8qmkFyBrwIFBHLDWGIGyEqB2tDeiw8vFybUB2/ZGoOwE4NGeCnkTJFgJGdj78O1VFQhQi/JYdFhYur82YNue6+gq4XAGDnYpSPAehFcwlW9VygD1weZDLMwGY+oHq9ivKgEY63Mhn4MEr0FOrmLwecxVJkAt5jPQ2Q4SXFcbqNLWCNAT7QuxWQsSLIAcbwSoEgLJsfLNMAeyCSS4Mhkud88yQN/4XoahDSDB05BYzzv09crTiBGgMbDHYXg+ZD1IcHHjKeUYNQK0juMI7N4KEjwOKWVhyQjQmgDc2w/yMuQLcOB8DpSpGQGyR/MWTN0JEkzIviT/M40A7cXoNEx/GyT4CHJWe0vzOdsI4BaXu7GMt5LvcVuen1VGAPdYnImlH4IE70CYGQrZjADysI2HCp4b3CpXFV6DEUAHc14drAYJXoHwqqEwzQigFyreJ5gJ2QYS8BfSCtGMAPphuggqu0CC+ZDcF5bK+L0A/ZC6a9yOpQ/jOwo73VX4XWkZwC++V0A9q4tzILnEOpdO+Y1JcO38GFgAWQcSDA1uPcWgESAFIMXd10IXTxD5BFJumhEgbCj47CGfQVwF4TOJ0ZsRIE4IboNZ3kp+KI75xKoRIMEidI/fS3gXJFgG4fcVojQjQBTYexm9D6+YDcb1Gg30wggQCOgUM/zO4gqQYBGE32UM1owAwaDOZGgSZrGwdFOm2QqTjAAKICqruAD6vgQJXoTwdw68NiOAV3idlbOwNAvCB1KvcdaSYaERIANIEadcAtt8NJ1k8NKMAF5gVVXKXz3jx8EbEH5fQbUZAVTh9KrsEWjnuYHqVYIRwGvM1JXzp3Hf0tRqBNBEM4yue5EF+OuoKs0eCFGBMbiSf2BxFB402SS1bBlAimCc9TwxfErDtGUADRTj6GAWGIIs8IPEvGUACXpx1zILTJO6YASQIhh3/XCpeSOAFMG464dKzRsBpAjGXT8Yl4Sin7ExAsQNYHTrRoDoIRA5sA9XAYclGowAEvTir/1e6oIRQIpg3PUbpObtRpAUwXjr/4bpQfgI4L+pOjfLAM7QRV+4RBp8HoERIHocnRz4C6uedVp5xCIjwBGAFOTlbLz7d2j4agTQQDGsjsUI/qtaJo0AWkiG0bMGZqZqmjICaKLpV9dCqB+Dd//vmmaMAJpo+tHFuv8sBH46hH3VxpqytfwisAeu8X+QxTd8mh2iZYBmyMQd74b5lyCdPoPPQ7QMQBTy1Q7AnUkI/Fch3LIMEALl7DYWYerloYJPtywDZA+Oz5m/QPlUBP5jn0Ya6bYM0AiVsGPLYG5YjODzMC0DhA12vbWDeDETgX+/fjB03wgQGvEee6uwmYLg/xjHfGLVPgISLEL0eBdvBgJ/ex6CzwO2DBAi7D02urCZiMDvDWcy3ZJlgHSMpDP+hAJ+j++GvAWfB2YZgCj4a1uhmrdyd/kzIdNsGUCGX7PVfFT7GciIPAefzlsGIAq6zXsBR9NdywB6aAYr4Oi5bBlAC8ugBRwtp6nHMoAcTf5oU9ACjtzlRIOdAyRYtNuLVsBp19FW8y0DtEKn+b6oBZzmbrW/xzJAe5jlooDTnsutZxsBWuNTvzc3BZx6p6R9+whIRzB3BZx0l7PPsAzQGqsu7M5dAae1y+3ttQzQGK9cF3Aau+w2ahmgL265L+D0ddl9xDJAgl1hCjiJy/KeZYAeDAtVwJGHPdFQ9QxQyAJOEj55r8oZoLAFHHnYEw1VzQCFLuAk4ZP3qpYBSlHAkYc90VClDFCaAk4SPnmvChmgdAUcedgTDWUnQCkLOEn45L2yfgSUuoAjD3uioYwZYD0Ob0Iev4SRwJ6fXpkyQK2AM9qCn51gZckAlSrgZA9v+syiZ4BKFnDSw5p9RpEzQGULONnDmz5TmgH4DgzdKl/A0QRc9IcRdAT/WnUIm/6aTrXQZQWcFuC47JJmANrc72LYYY0VcBxAS1uiQQC+K302FnDG4dJuMuRXn4aqqFuDAPs9AmcFHI/gUrXGVcA2Dz5aAccDqI1UapwEngjF+yEDGxlwGLMCjgNorkvEHwH4XP4Dxp93daBunRVw6sAI1RVnADqKS0FeBvJkcABfO7TVWPOY3cN3QE64RJwBaB+B+w2bOyA/83Ub7VvMvRnr+Vcoe9tYZ1OVEFDJADVfkAnOQ38lpLM21mS7G+NzEfTlTfbbcCAEVAlAn0GCftiMhYyAjIQMg/DdvRmy5f/tRgT/X/StRUbgP5n1FDBGP03kAAAAAElFTkSuQmCC"></image>
</defs>
</svg></div><div style="margin-left: 2rem;margin-right: 2rem;">Fragmanı Oynat</div></a>`;

playbtn.addEventListener("click", () => {
    trailer.click();
});

var modalContainer = document.createElement("div");
modalContainer.style.position = "fixed";
modalContainer.style.width = "100%";
modalContainer.style.height = "100vh";
modalContainer.style.backgroundColor = "rgba(0,0,0,0.5)";
modalContainer.style.display = "none";
modalContainer.style.zIndex = "2";

var permitModal = document.createElement("div");
permitModal.className = "permitModal";
permitModal.style.position = "fixed";
permitModal.style.background = "#2e2f41";
permitModal.style.padding = "2rem";
permitModal.style.color = "white";
permitModal.style.margin = "15%";
permitModal.innerText =
    "BluTV tarafından sunulan ürün ve hizmetlere ilişkin avantajlardan yararlanmak ve ihtiyaçlarıma özel fırsatların geliştirilmesi, özel günlerimin kutlanması ile reklam, kampanya, promosyon ve tanıtım yapılması amacıyla tarafıma ticari elektronik ileti gönderilmesini, kabul ediyorum. Hesabım sayfasında bulunan Bildirim Tercihleri menüsünden vermiş olduğunuz ticari elektronik onayınızı her zaman geri alabilirsiniz. ";
permitModal.style.zIndex = "2";

modalContainer.append(permitModal);

permit.removeAttribute("href");

permit.addEventListener("click", () => {
    modalContainer.style.display = "block";
    // document.querySelector(".jsx-4246064035.container").prepend(permitModal);
    document.body.prepend(modalContainer);
});

modalContainer.addEventListener("click", (e) => {
    if (e.target.className != "permitModal") {
        modalContainer.style.display = "none";
    }
});
