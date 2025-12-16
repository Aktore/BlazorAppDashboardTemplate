//window.tabulatorTableInterop = {
//    myTable: function (elementId, data) {
//        new Tabulator("#" + elementId, {
//            data: data,
//            layout: "fitColumns",
//            columns: [
//                { title: "ID", field: "id" },
//                { title: "Name", field: "name" },
//                { title: "Price", field: "price" }
//            ]
//        });
//    }
//};

window.editTableInterop = {
    editableTable: async function (elementId, url) {
        // деректерді json файлынан оқимыз
        const response = await fetch(url);
        let data = await response.json();
        data = (Array.isArray(data) ? data : []).map(r => ({
            ...r,
            // car-ды boolean етіп келтіру
            car: (r?.car === true) || (String(r?.car).trim().toLowerCase() === "true") || (Number(r?.car) === 1)
        }));
        console.log("Returning data:", data);
        // кастом dateEditor
        var dateEditor = function (cell, onRendered, success, cancel) {
            var cellValue = luxon.DateTime.fromFormat(cell.getValue(), "dd/MM/yyyy").toFormat("yyyy-MM-dd"),
                input = document.createElement("input");

            input.setAttribute("type", "date");
            input.style.padding = "4px";
            input.style.width = "100%";
            input.style.boxSizing = "border-box";
            input.value = cellValue;

            onRendered(function () {
                input.focus();
                input.style.height = "100%";
            });

            function onChange() {
                if (input.value != cellValue) {
                    success(luxon.DateTime.fromFormat(input.value, "yyyy-MM-dd").toFormat("dd/MM/yyyy"));
                } else {
                    cancel();
                }
            }

            input.addEventListener("blur", onChange);
            input.addEventListener("keydown", function (e) {
                if (e.keyCode == 13) { onChange(); }
                if (e.keyCode == 27) { cancel(); }
            });

            return input;
        };

        // кестені құру
        window.editedTable = new Tabulator("#" + elementId, {
            height: "311px",  
            rowHeader: { formatter: "rownum", headerSort: false, hozAlign: "center", resizable: false, frozen: true },
            responsiveLayout: "collapse",  // шағын экранда бағандарды жасыру
            resizableColumns: true,        // қолданушы баған енін өзгерте алады
            data: data,
            layout: "fitColumns",          // бағандарды контейнерге тарату
            columns: [
                { title: "Name", field: "name", width: 150, editor: "input" },
                { title: "Location", field: "location", width: 130, editor: "list", editorParams: { values: { "Astana": "Астана", "Shymkent": "Шымкент", "unknown": "Unknown" }, autocomplete: "true", allowEmpty: true, listOnEmpty: true } },
                { title: "Progress", field: "progress", sorter: "number", hozAlign: "left", formatter: "progress", width: 230, editor: true },
                { title: "Gender", field: "gender", width: 130, editor: "list", editorParams: { values: { "male": "Male", "female": "Female", "unknown": "Unknown" } } },
                { title: "Rating", field: "rating", formatter: "star", hozAlign: "center", width: 100, editor: true },
                { title: "Date Of Birth", field: "dob", hozAlign: "center", sorter: "date", width: 140, editor: dateEditor },
                { title: "Driver", field: "car", hozAlign: "center", width: 130, editor: true, formatter: "tickCross" },
            ],
        });
        console.log("Edited table created:", window.editedTable);
    },
    getData: function () {
        if (!window.editedTable) {
            console.warn("Edited table not defined yet");
            return JSON.stringify([]);
        }
        const raw = window.editedTable.getData() || [];
        const rows = raw.map(r => ({
            ...r,
            car: !!r.car   // міндетті түрде true/false
        }));
        return JSON.stringify(rows);
    }
};