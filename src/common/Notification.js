function Notification(res, _this, callback) {
    if(res.data.status == 200) {
        _this.$message({
            message: res.data.msg,
            type: 'success'
        });
        if(callback) callback('success');

    }else {
        _this.$message.error(res.data.msg);
        if(callback) callback('success');
    }
}

export default Notification;