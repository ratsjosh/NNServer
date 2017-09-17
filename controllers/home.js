exports.index = (req, res) => {
    res.render('home/index', { title: 'Neural Network - index', url: '/file-upload' });
};

exports.file = (req, res) => {
    const formidable = require('formidable');

    let form = new formidable.IncomingForm();

    form.parse(req, function (err, fields, files) {
        console.log(files);
    });
};