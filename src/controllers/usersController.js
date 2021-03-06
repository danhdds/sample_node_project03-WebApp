usersModel = require('../models/userModel.js');

exports.renderMainUserPage = (req, res) => {

    res.render('index');

} // exports.getDebtController

exports.getUserBoardCharactersController = (req, res) => {

    //res.status(200).send("User Content."); // test auth
    res.render('userboard/characters', {});

};

exports.getUserBoardComicsController = (req, res) => {

    //res.status(200).send("User Content."); // test auth
    res.render('userboard/comics', {});

};

exports.editUser = (red, res) => {

    res.render('userboard/editUser', {});

}

exports.getUserFavoritesBoard = (req, res) => {

    res.render('userboard/favorites', {});

}

exports.upateUser = (req, res, next) => {


    if (req.body.usercheck == "true" && req.body.emailcheck == "false") {

        userModel.checkUsername(req, res, function (user, err, nouser) {

            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (user) {
                res.status(400).send({ message: "Falha! nome de usuário já em uso!" });
                return;
            }

            if (nouser) {

                userModel.updateUserDetails(req, res, function (err, result) {

                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    if (result) {
                        res.send({ message: "Usuário atualizado com sucesso!" });
                        return;
                    }

                });

            }


        });

    } // end if


    if (req.body.usercheck == "false" && req.body.emailcheck == "true") {

        userModel.checkEmail(req, res, function (user, err, nouser) {

            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (user) {
                res.status(400).send({ message: "Falha! email já em uso!" });
                return;
            }

            if (nouser) {

                userModel.updateUserDetails(req, res, function (err, result) {

                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    if (result) {
                        res.send({ message: "Usuário atualizado com sucesso!" });
                        return;
                    }

                });

            } // end if

        });

    } // end if

    if (req.body.usercheck == "false" && req.body.emailcheck == "false") {

        userModel.updateUserDetails(req, res, function (err, result) {

            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (result) {
                res.send({ message: "Usuário atualizado com sucesso!" });
                return;
            }

        });

    } // end if

    if (req.body.usercheck == "true" && req.body.emailcheck == "true") {


        userModel.checkUsername(req, res, function (user, err, nouser) {

            if (err) {
                res.status(500).send({ message: err });
                return;
            }

            if (user) {
                res.status(400).send({ message: "Falha! nome de usuário já em uso!" });
                return;
            }

            if (nouser) {

                userModel.checkEmail(req, res, function (user, err, nouser) {

                    if (err) {
                        res.status(500).send({ message: err });
                        return;
                    }

                    if (user) {
                        res.status(400).send({ message: "Falha! email já em uso!" });
                        return;
                    }

                    if (nouser) {

                        userModel.updateUserDetails(req, res, function (err, result) {

                            if (err) {
                                res.status(500).send({ message: err });
                                return;
                            }

                            if (result) {
                                res.send({ message: "Usuário atualizado com sucesso!" });
                                return;
                            }

                        });

                    } // end if

                });

            } // end if

        });

    } // end if

} // end upateUser

exports.getUserFavCharacters = (req, res) => {

    userModel.getFavoriteCharacters(req, res, function (err, characters) {

        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (characters){
            res.send({ characters });
            return;
        }

    });

} // end getUserFavCharacters

exports.getUserFavComics = (req, res) => {

    userModel.getFavoriteComics(req, res, function (err, comics) {

        if (err) {
            res.status(500).send({ message: err });
            return;
        }

        if (comics){
            res.send({ comics });
            return;
        }

    });

} // end getUserFavComics