import express from "express";
import mongoose from "mongoose";
import Profile from "./userDetail.js";
import Frame from "./Frame.js";
import Mount from "./Mount.js";
import cors from "cors";
import bycrypt from "bcrypt";
import Glass from "./Glass.js";
import Hardboard from "./Hardboard.js";
import Tax from "./Tax.js";
import Counter from "./counter.js";
import Creation from "./Creation.js";
// import Quatation from "./Quotation.js";
import Quotation from "./Quotation.js";
import Items from "./Item.js";
import Invoice from "./Invoice.js";
import Painting from "./Painting.js";

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;

const mongourl =
  "mongodb+srv://Vignesh:fNKwJWynI5Yu4Veg@cluster0.bbf1qbc.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connnected");
  })
  .catch((e) => console.log(e));

const db = mongoose.connection;

app.get("/", (req, res) => {
  console.log("hello");
});

app.post("/Signup", async (req, res) => {
  const { username, password } = req.body;
  const data = {
    username: username,
    password: password,
  };

  const encryptedPassword = await bycrypt.hash(password, 10);
  try {
    const user = await Profile.create({
      username,
      password: encryptedPassword,
    });
    console.log(55, user);
    return res.send({ status: "ok" });
  } catch (e) {
    console.log(e);
  }
  console.log(1, 2, 3, Profile);
});

app.post("/Login", async (req, res) => {
  const { username, password } = req.body;

  const user = await Profile.findOne({
    username,
  });
  console.log(70, user);
  if (!user) {
    return res.json({ status: "user not found" });
  }
  if (await bycrypt.compare(password, user.password)) {
    if (res.status(200)) {
      return res.json({ status: "ok", data: "ok" });
    } else {
      return res.json({ status: "error" });
    }
  }
  return res.json({ status: "Invalid credential" });
});

//Frame Api
app.post("/frame", async (req, res) => {
  const { name, width, height, rate } = req.body;

  const data = {
    // slNo: slNo,
    name: name,
    width: width,
    height: height,
    rate: rate,
  };

  try {
    const frame = await Frame.create({
      // slNo,
      name,
      width,
      height,
      rate,
    });
    console.log(frame);
    if (frame) {
      res.send({ data: frame });
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }

  console.log(1, 2, 3, Frame);
});

app.get("/frameData", async (req, res) => {
  try {
    const frameData = await Frame.find({});
    res.send({ data: frameData });
  } catch (e) {
    console.log(e);
  }
});

app.put("/frameData/:_id", async (req, res) => {
  try {
    const frame = await Frame.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log(frame);
    if (frame) {
      res.send({ data: frame });
      console.log(frame);
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/frameData/:_id", async (req, res) => {
  console.log(req.params.id);

  try {
    const frame = await Frame.findByIdAndDelete(req.params._id);
    console.log(frame);
    if (!frame) {
      res.send({ message: "Successfully delete" });
    } else {
      res.send({ message: "error" });
    }
  } catch (e) {
    console.log(e);
  }
  console.log(1, 2, 3, Frame);
});

//Mount Api
app.post("/mount", async (req, res) => {
  const { name, width, height, rate } = req.body;
  const data = {
    // slNo: slNo,
    name: name,
    width: width,
    height: height,
    rate: rate,
  };

  try {
    const mount = await Mount.create({
      // slNo,
      name,
      width,
      height,
      rate,
    });
    console.log(mount);
    if (mount) {
      res.send({ data: mount });
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }
  console.log(1, 2, 3, Mount);
});

app.get("/mountData", async (req, res) => {
  try {
    const mountData = await Mount.find({});
    res.send({ data: mountData });
  } catch (e) {
    console.log(e);
  }
});

app.put("/mountData/:_id", async (req, res) => {
  try {
    const mount = await Mount.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    console.log(mount);
    if (mount) {
      res.send({ data: mount });
      // console.log(frame);
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/mountData/:_id", async (req, res) => {
  try {
    const mount = await Mount.findByIdAndDelete(req.params._id);
    // console.log(frame);
    if (!mount) {
      res.send({ message: "Successfully delete" });
    } else {
      res.send({ message: "error" });
    }
  } catch (e) {
    console.log(e);
  }
});

//Glass Api
app.post("/glass", async (req, res) => {
  const { name, width, height, rate } = req.body;
  const data = {
    // slNo: slNo,
    name: name,
    width: width,
    height: height,
    rate: rate,
  };

  try {
    const glass = await Glass.create({
      // slNo,
      name,
      width,
      height,
      rate,
    });
    // console.log(frame);
    if (glass) {
      res.send({ data: glass });
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }
  console.log(1, 2, 3, Glass);
});

app.get("/glassData", async (req, res) => {
  try {
    const glassData = await Glass.find({});
    res.send({ data: glassData });
  } catch (e) {
    console.log(e);
  }
});

app.put("/glassData/:_id", async (req, res) => {
  try {
    const glass = await Glass.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // console.log(frame);
    if (glass) {
      res.send({ data: glass });
      // console.log(frame);
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/glassData/:_id", async (req, res) => {
  try {
    const glass = await Glass.findByIdAndDelete(req.params._id);
    // console.log(frame);
    if (!glass) {
      res.send({ message: "Successfully delete" });
    } else {
      res.send({ message: "error" });
    }
  } catch (e) {
    console.log(e);
  }
});

//Hardboard Api
app.post("/hardboard", async (req, res) => {
  const { name, width, height, rate } = req.body;
  const data = {
    // slNo: slNo,
    name: name,
    width: width,
    height: height,
    rate: rate,
  };

  try {
    const hardboard = await Hardboard.create({
      // slNo,
      name,
      width,
      height,
      rate,
    });
    console.log(hardboard);
    if (hardboard) {
      res.send({ data: hardboard });
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }
  // console.log(1, 2, 3, Glass);
});

app.get("/hardboardData", async (req, res) => {
  try {
    const hardboardData = await Hardboard.find({});
    res.send({ data: hardboardData });
  } catch (e) {
    console.log(e);
  }
});

app.put("/hardboardData/:_id", async (req, res) => {
  try {
    const hardboard = await Hardboard.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // console.log(frame);
    if (hardboard) {
      res.send({ data: hardboard });
      // console.log(frame);
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/hardboardData/:_id", async (req, res) => {
  try {
    const hardboard = await Hardboard.findByIdAndDelete(req.params._id);
    // console.log(frame);
    if (!hardboard) {
      res.send({ message: "Successfully delete" });
    } else {
      res.send({ message: "error" });
    }
  } catch (e) {
    console.log(e);
  }
});

//Tax Api
app.post("/tax", async (req, res) => {
  const { taxpercentage } = req.body;
  const data = {
    taxpercentage: taxpercentage,
  };

  try {
    const tax = await Tax.create({
      taxpercentage,
      // name,
      // width,
      // height,
      // rate,
    });
    console.log(tax);
    if (tax) {
      res.send({ data: tax });
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }
  // console.log(1, 2, 3, Glass);
});

app.get("/taxData", async (req, res) => {
  try {
    const taxData = await Tax.find({});
    res.send({ data: taxData });
  } catch (e) {
    console.log(e);
  }
});

app.put("/taxData/:_id", async (req, res) => {
  try {
    const taxData = await Tax.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // console.log(frame);
    if (taxData) {
      res.send({ data: taxData });
      // console.log(frame);
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/taxData/:_id", async (req, res) => {
  try {
    const taxData = await Tax.findByIdAndDelete(req.params._id);
    // console.log(frame);
    if (!taxData) {
      res.send({ message: "Successfully delete" });
    } else {
      res.send({ message: "error" });
    }
  } catch (e) {
    console.log(e);
  }
});

{
  /* Creation*/
}

app.post("/creation", async (req, res) => {
  const {
    firstname,
    middlename,
    lastname,
    address,
    billingaddress,
    phonenumber,
    additionphonenumber,
    dob,
    emailid,
    gender,
  } = req.body;

  const data = {
    firstname: firstname,
    middlename: middlename,
    lastname: lastname,
    address: address,
    billingaddress: billingaddress,
    phonenumber: phonenumber,
    additionphonenumber: additionphonenumber,
    dob: dob,
    emailid: emailid,
    gender: gender,
  };

  try {
    const creation = await Creation.create({
      firstname,
      middlename,
      lastname,
      address,
      billingaddress,
      phonenumber,
      additionphonenumber,
      dob,
      emailid,
      gender,
    });
    console.log(creation);
    if (creation) {
      res.send({ data: creation });
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }
  // console.log(1, 2, 3, Glass);
});

app.get("/creationData", async (req, res) => {
  try {
    const creationData = await Creation.find({});
    res.send({ data: creationData });
  } catch (e) {
    console.log(e);
  }
});

app.put("/creationData/:_id", async (req, res) => {
  try {
    const creation = await Creation.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body,
      },
      { new: true }
    );
    // console.log(frame);
    if (creation) {
      res.send({ data: creation });
      // console.log(frame);
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/creationData/:_id", async (req, res) => {
  try {
    const creation = await Creation.findByIdAndDelete(req.params._id);
    // console.log(frame);
    if (!creation) {
      res.send({ message: "Successfully delete" });
    } else {
      res.send({ message: "error" });
    }
  } catch (e) {
    console.log(e);
  }
});

app.listen(5000, () => {
  console.log("hi");
});

//Quotation Api
app.post("/quotation", async (req, res) => {
  const {
    quotationNo,
    date,
    customername,
    billingaddress,
    items,
    grandTotal,
    total,
  } = req.body;

  const data = {
    quotationNo: quotationNo,
    date: date,
    customername: customername,
    billingaddress: billingaddress,
    items: items,
    total: total,
    grandTotal: grandTotal,
  };
  try {
    const quotation = await Quotation.create(data);
    console.log(19, quotation);
    if (quotation) {
      res.send({ data: quotation });
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/quotationData", async (req, res) => {
  try {
    const quotationData = await Quotation.find({});
    res.send({ data: quotationData });
  } catch (e) {
    console.log(e);
  }
});

app.put("/quotationData/:_id", async (req, res) => {
  try {
    const quotation = await Quotation.findByIdAndUpdate(
      req.params._id,

      {
        $set: req.body,
      },
      { new: true }
    );
    if (quotation) {
      res.send({ data: quotation });
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/quotationData/:_id", async (req, res) => {
  try {
    const quotation = await Quotation.findByIdAndDelete(req.params._id);
    if (!quotation) {
      res.send({ message: "Successfully delete" });
    } else {
      res.send({ message: "error" });
    }
  } catch (e) {
    console.log(e);
  }
});

// Invoice Api
app.get("/invoiceData", async (req, res) => {
  try {
    const invoiceData = await Quotation.find({});
    res.send({ data: invoiceData });
  } catch (e) {
    console.log(e);
  }
});

app.put("/invoiceData/:_id", async (req, res) => {
  try {
    console.log(643, Invoice);
    const invoice = await Quotation.findByIdAndUpdate(
      req.params._id,

      {
        $set: req.body,
      },
      { new: true }
    );
    if (invoice) {
      res.send({ data: invoice });
    }
    console.log(1, invoice);
  } catch (error) {
    console.log(error);
  }
});

app.delete("/invoiceData/:_id", async (req, res) => {
  try {
    console.log(617, req.params._id);
    const invoice = await Quotation.findByIdAndDelete(req.params._id);
    if (!invoice) {
      res.send({ message: "Successfully delete" });
    } else {
      res.send({ message: "error" });
    }
  } catch (e) {
    console.log(e);
  }
});
//Painting Api

app.post("/painting", async (req, res) => {
  const {
    paintingName,
    artistName,
    purchaseRate,
    sellingRate,
    tax,
    // totalAmount,
  } = req.body;

  const data = {
    paintingName: paintingName,
    artistName: artistName,
    purchaseRate: purchaseRate,
    sellingRate: sellingRate,
    tax: tax,
    // totalAmount: totalAmount,
  };

  try {
    const painting = await Painting.create(data);
    console.log(689, painting);
    if (painting) {
      res.send({ data: painting });
    } else {
      res.send({ message: "not ok" });
    }
  } catch (e) {
    console.log(e);
  }
  console.log(698, Painting);
});

app.get("/paintingData", async (req, res) => {
  try {
    const PaintingData = await Painting.find({});
    res.send({ data: PaintingData });
  } catch (e) {
    console.log(e);
  }
});

app.put("/paintingData/:_id", async (req, res) => {
  try {
    const painting = await Painting.findByIdAndUpdate(
      req.params._id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (painting) {
      res.send({ data: painting });
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/paintingData/:_id", async (req, res) => {
  console.log(req.params.id);

  try {
    const painting = await Painting.findByIdAndDelete(req.params._id);

    if (!painting) {
      res.send({ message: "Successfully delete" });
    } else {
      res.send({ message: "error" });
    }
  } catch (e) {
    console.log(e);
  }
});

app.get("/getData", async (req, res) => {
  try {
    const frameData = await Frame.find({});
    const mountData = await Mount.find({});
    const hardboardData = await Hardboard.find({});
    const glassData = await Glass.find({});
    const creationData = await Creation.find({});
    const taxData = await Tax.find({});
    const paintingData = await Painting.find({});

    res.send({
      frameData,
      mountData,
      hardboardData,
      glassData,
      creationData,
      taxData,
      paintingData,
    });
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => console.log(`Listening to localhost: ${port}`));
