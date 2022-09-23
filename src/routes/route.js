const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const bookController = require("../controllers/bookController");
const reviewController = require("../controllers/reviewController")
const commonMW = require("../middleware/auth");

router.post("/register", userController.createUser);

router.post("/login", userController.userLogin);

router.post("/books", commonMW.authenticate, bookController.createBook);

router.get("/books", commonMW.authenticate, bookController.getBooks);

router.get("/books/:bookId", commonMW.authenticate, bookController.getBookById);

router.put("/books/:bookId", commonMW.authenticate, bookController.updateBooks);

router.delete("/books/:bookId",commonMW.authenticate, bookController.deleteBook);

router.put("/books/:bookId/review/:reviewId", reviewController.updateReview)

router.post("/books/:bookId/review",  reviewController.postReview)

router.delete("/books/:bookId/review/:reviewId", reviewController.deleteReview)

// router.all("/*", function (req, res) {
//   res.status(400).send({
//     status: false,
//     message: "The api you request is not available",
//   });
// });

module.exports = router;
