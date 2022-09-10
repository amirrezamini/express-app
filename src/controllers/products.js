const products = []

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product')
}

exports.postAddProduct = (req, res, next) => {
    products.push({ title: req.body.title })
    res.redirect('/')
}

exports.getProducts = (req, res, next) => {
    res.render('Shop', {products})
}