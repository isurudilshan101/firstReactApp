const express=required('express');
const app=express();
const bodyParser=reqire('body-parser');
const PORT=4000;
const cors=reqire('cors');

app.user(cors());
app.use(bodyParser.urlenconded({extended:true}));
app.use(bodyParser.json());

app.listen(PORT,function()
{
    console.log('Server is running on port: ',PORT)
});