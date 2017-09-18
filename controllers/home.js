exports.index = (req, res) => {
    res.render('home/index', {
        title: 'Neural Network - index',
        url: '/file-upload'
    });
};

exports.file = (req, res) => {
    const formidable = require('formidable'),
        fs = require("fs"),
        getter = require("pixel-getter");

    let form = new formidable.IncomingForm();

    form.parse(req, function(err, fields, files) {

		// fs.readFile(files.uploadedFile.path, function(err, data) {
  //           if (err) throw err;

  //           // Encode to base64
  //           let encodedImage = new Buffer(data, 'binary').toString('base64');
  //       });

        getter.get(files.uploadedFile.path, function(err, pixels) {
        	if (err) throw err;
        	
        }, 1, 10000);
    });

    res.end('Successfully converted image to encoded Base64 format -> binary encoded form.');
};