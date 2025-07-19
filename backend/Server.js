const express = require('express');
const app=  express();
const cors = require('cors');
const db = require('./DB'); // Ensure this path is correct

app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("Backend Working")
})

const commantData = db.commantData
app.post('/send', async (req, res) => {
  const { name, email, comment } = req.body;
  try {
    
    const addCommant = new commantData({
      name,
      email,
      comment
    });
    await addCommant.save();
    console.log("Data saved successfully");
    res.status(201).send('Comment added successfully');
    alert(res.status(201).send('Comment added successfully'));
    
   
  } catch (err) {
    res.status(500).send('Error registering user');
  }
});

app.get('/getdata', async(req,res)=>{

  const allData = await commantData.find({},{_id:0, __v:0});
  res.status(200).json(allData);
  console.log(allData);
 
})



app.listen(3000,()=>{
    console.log("Server is running on port 3000");  
})