const mongoose = require('mongoose');

//Link đến database mongo altes
const dbConfig = `mongodb+srv://thangledinh:nhun@cluster0.bdfqr.mongodb.net/test`;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

//Kết nối database
mongoose.connect(dbConfig, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
    if(err){
        //Hiển thị thông báo khi kết nối database lỗi
        console.log('Connect database failed: ' + err);
    }else{
        //Thông báo kết nối thành công
        console.log('Connected to database');
    }
});