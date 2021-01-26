
var dropedFile;

function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

$(function () {




    // // preventing page from redirecting
    // $("html").on("dragover", function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     $(".drop_message").text("Déposer ici");
    // });

    // $("html").on("drop", function (e) { e.preventDefault(); e.stopPropagation(); });

    // // Drag enter
    // $('.upload-area').on('dragenter', function (e) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     $(".drop_message").text("Laissez tomber");
    //     // $("h1").text("Drop");
    // });

    // // Drag over
    // $('.upload-area').on('dragover', function (e) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     $(".drop_message").text("Déposer ici");
    // });

    // // Drop
    // $('.upload-area').on('drop', function (e) {
    //     e.stopPropagation();
    //     e.preventDefault();
    //     $(".drop_message").text("Téléchargement...");
    //     $(".select").fadeOut()

    //     // $("h1").text("Upload");

    //     var file = e.originalEvent.dataTransfer.files;
    //     console.log(file);
    //     dropedFile = file;
    //     var fd = new FormData();

    //     fd.append('file', file[0]);

    //     uploadData(fd);
    // });

    // // Open file selector on div click
    // $("#uploadfile").click(function () {
    //     $("#file").click();
    // });

    // // file selected
    // $("#file").change(function () {
    //     var fd = new FormData();

    //     var files = $('#file')[0].files[0];

    //     fd.append('file', files);

    //     uploadData(fd);
    // });
});

// Sending AJAX request and upload file
// function uploadData(formdata) {

//     $.ajax({
//         url: 'http://localhost/upload/upload.php',
//         type: 'post',
//         data: formdata,
//         contentType: false,
//         processData: false,
//         dataType: 'json',
//         success: function (response) {

//             setTimeout(() => {

//                 let result = {
//                     id: uuid(),
//                     filename: dropedFile[0].name,
//                     pages: 1,
//                     invoice: [
//                         {
//                             "amount": 4.11,
//                             "amount_untaxed": 4.11,
//                             "currency": "USD",
//                             "date": "Sun, 03 Aug 2014 00:00:00 GMT",
//                             "desc": "Invoice from Amazon Web Services",
//                             "invoice_number": "42183017",
//                             "issuer": "Amazon Web Services",
//                             "partner_name": "Amazon Web Services, Inc.",
//                             "partner_website": "aws.amazon.com"
//                         }
//                     ],
//                     images: [
//                         "assets/invoices/excel-ss.png"
//                     ]
//                 };

//                 addFile(result)


//                 $(".drop_message").text("Téléversé");

//             }, 2000);

//             // addThumbnail(response);
//         }
//     });
// }

// Added thumbnail
function addThumbnail(data) {
    $("#uploadfile h1").remove();
    var len = $("#uploadfile div.thumbnail").length;

    var num = Number(len);
    num = num + 1;

    var name = data.name;
    var size = convertSize(data.size);
    var src = data.src;

    // Creating an thumbnail
    $("#uploadfile").append('<div id="thumbnail_' + num + '" class="thumbnail"></div>');
    $("#thumbnail_" + num).append('<img src="' + src + '" width="100%" height="78%">');
    $("#thumbnail_" + num).append('<span class="size">' + size + '<span>');

}

// Bytes conversion
function convertSize(size) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (size == 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(size) / Math.log(1024)));
    return Math.round(size / Math.pow(1024, i), 2) + ' ' + sizes[i];
}
