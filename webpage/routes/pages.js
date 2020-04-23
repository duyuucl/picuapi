const express = require('express');
const router = express.Router();
const User = require('../core/user');
const pool = require('../core/pool');
const user = new User();
const path = require('path');
const multer = require('multer');

//storage Engine --img
const storage = multer.diskStorage({
    destination: './public/images',
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + 
        path.extname(file.originalname));
    }
});

// Init upload --img1
const upload1 = multer({
    storage: storage,
    limits:{fileSize: 10000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
}).single('img1');

// Init upload --img2
const upload2 = multer({
    storage: storage,
    limits:{fileSize: 10000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
}).single('img2');

// Init upload --img3
const upload3 = multer({
    storage: storage,
    limits:{fileSize: 10000000},
    fileFilter: function(req, file, cb){
      checkFileType(file, cb);
    }
}).single('img3');

// Check File Type --img
function checkFileType(file, cb){
    // Allowed ext
    const filetypes = /jpeg|jpg|png|gif/;
    // Check ext
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mime
    const mimetype = filetypes.test(file.mimetype);
  
    if(mimetype && extname){
      return cb(null,true);
    } else {
      cb('Error: Images Only!');
    }
}


//login page
router.get('/login', (req, res, next) => res.render('login.ejs'));

//home page
router.get('/home', (req, res, next) => res.render('home.ejs'));

//picu page
router.get('/picu', (req, res, next) => {
    let sql = 'SELECT Nav_name, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "2" AND Nav_name = Page_name;'
    pool.query(sql, (err, navs) => {
        if (err) {
        console.dir(err);
        }
        res.render('navigation.ejs', {navs})
    });
});

//your child page
router.get('/yourchild', (req, res, next) => {
    let sql = 'SELECT Nav_name, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "3" AND Nav_name = Page_name;'
    pool.query(sql, (err, navs) => {
        if (err) {
        console.dir(err);
        }
        res.render('adv-navigation.ejs', {navs})
    });
});

//team page
router.get('/team', (req, res, next) => {
    let sql = 'SELECT Nav_name, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "4" AND Nav_name = Page_name;'
    pool.query(sql, (err, navs) => {
        if (err) {
        console.dir(err);
        }
        res.render('adv-navigation.ejs', {navs})
    });
});

//visit page
router.get('/visit', (req, res, next) => {
    let sql = 'SELECT Nav_name, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "5" AND Nav_name = Page_name;'
    pool.query(sql, (err, navs) => {
        if (err) {
        console.dir(err);
        }
        res.render('navigation.ejs', {navs})
    });
});

//content page
router.get('/content', (req, res, next) => res.render('content.ejs'));

//edit content
router.get('/edit-content/:parentId', (req, res, next) => {
    var parentId = req.params.parentId;
    res.render('edit-content.ejs', {parentId})
});

//feedback page
router.get('/feedback', (req, res, next) => {
  let sql = 'SELECT * FROM feedback;';
  pool.query(sql, (err, feedback) => {
    if (err) {
    console.dir(err);
    }
    res.render('feedback.ejs', {feedback})
  });
});

//delete feedback
router.post('/feedback', (req, res, next) => {
  var id = req.body.feedback_id;
  let sql = 'DELETE FROM feedback WHERE feedback_id = "'+ id +'";';
  pool.query(sql, (err) => {
    if (err) {
    console.dir(err);
    }
    res.render('message.ejs', {message: 'The feedback message was successfully deleted!'});
  });
});

//user page
router.get('/user', (req, res, next) => {
  let sql = 'SELECT * FROM user;';
  pool.query(sql, (err, users) => {
    if (err) {
    console.dir(err);
    }
    res.render('user.ejs', {users})
  });
});

//post login data
router.post('/login', (req, res, next) => {
    user.login(req.body.email, req.body.password, function(result){
        if(result){
            req.session.user = result;
            req.session.opp = 1;
            res.redirect('/home')
        } else {
            res.send('Username/password incorrect!')
        }
    })
});

//get content data
router.get('/content/:parentId', (req, res, next) => {
    var parentId = req.params.parentId;
    let sql = 'SELECT Image1_path, Image2_path, Image3_path, Text FROM content WHERE Page_id = "' + parentId + '";';
    pool.query(sql, (err, contents) => {
        if (err) {
        console.dir(err);
        }
        res.render('content.ejs', {contents, parentId})
    });
});

//get sub-navigation data
router.get('/navigation/:parentId', (req, res, next) => {
  var parentId = req.params.parentId;
  let sql = 'SELECT Nav_name, page.Page_id AS id FROM navigation, page WHERE navigation.Page_id = "' + parentId + '" AND Nav_name = Page_name;';
  pool.query(sql, (err, navs) => {
      if (err) {
      console.dir(err);
      }
      res.render('sub-navigation.ejs', {parentId, navs})
  });
});

//upload images
// upload img1
router.post('/edit-content/upload-img1/:parentId',(req, res, next) => {
    var parentId = req.params.parentId;
    upload1(req, res, (err) => {
        if(err){
          res.render('edit-content.ejs', {
            parentId,
            msg: err
          });
        } else {
          if(req.file == undefined){
            res.render('edit-content.ejs', {
              parentId,
              msg: 'Error: No File Selected!'
            });
          } else {
            let sql = 'UPDATE `content` SET `Image1_path` = "'+ 
            req.file.destination +'/'+ req.file.filename+
            '" WHERE (`Page_id` = "' + parentId + '");';
            pool.query(sql, (err) => {
                if (err) {
                console.dir(err);
                } else {
                res.render('edit-content.ejs', {
                  parentId,
                  msg: 'Image 1 Uploaded!'
                }); }
            });
          }
        }
    });
});

// upload img2
router.post('/edit-content/upload-img2/:parentId',(req, res, next) => {
    var parentId = req.params.parentId;
    upload2(req, res, (err) => {
        if(err){
          res.render('edit-content.ejs', {
            msg: err,
            parentId
          });
        } else {
          if(req.file == undefined){
            res.render('edit-content.ejs', {
              msg: 'Error: No File Selected!',
              parentId
            });
          } else {
            let sql = 'UPDATE `content` SET `Image2_path` = "'+ 
            req.file.destination +'/'+ req.file.filename+
            '" WHERE (`Page_id` = "' + parentId + '");';
            pool.query(sql, (err) => {
                if (err) {
                console.dir(err);
                } else {
                res.render('edit-content.ejs', {
                    msg: 'Image 2 Uploaded!',
                    parentId
                }); }
            });
          }
        }
    });
});

// upload img3
router.post('/edit-content/upload-img3/:parentId',(req, res, next) => {
    var parentId = req.params.parentId;
    upload3(req, res, (err) => {
        if(err){
          res.render('edit-content.ejs', {
            msg: err,
            parentId
          });
        } else {
          if(req.file == undefined){
            res.render('edit-content.ejs', {
              msg: 'Error: No File Selected!',
              parentId
            });
          } else {
            let sql = 'UPDATE `content` SET `Image3_path` = "'+ 
            req.file.destination +'/'+ req.file.filename+
            '" WHERE (`Page_id` = "' + parentId + '");';
            pool.query(sql, (err) => {
                if (err) {
                console.dir(err);
                } else {
                res.render('edit-content.ejs', {
                    msg: 'Image 3 Uploaded!',
                    parentId
                }); }
            });
          }
        }
    });
});

//Upload text
router.post('/edit-content/upload-text/:parentId',(req, res, next) => {
  var parentId = req.params.parentId;
  let sql = 'UPDATE `content` SET `Text` = "'+ req.body.editor+ '" WHERE (`Page_id` = "' + parentId + '");';
  pool.query(sql, (err, navs) => {
      if (err) {
      console.dir(err);
      }
      res.render('edit-content.ejs', {
        msg: 'Text uploaded!',
        parentId
    })
  });
  console.log(req.body.editor)
});


module.exports = router;