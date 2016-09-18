

module.exports = {
    drop: function (req, res) {

        Order.destroy().exec(function (err) {
            if (err) {
                return res.negotiate(err);
            }

            Macaddress.destroy().exec(function (err) {
                if (err) {
                    return res.negotiate(err);
                }

                return res.ok();
            });
        });
    }
}

