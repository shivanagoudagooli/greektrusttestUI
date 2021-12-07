const app = require("express")();
const PORT = process.env.PORT || 3000;

app.get("", (req,res) => {
    res.send("Hello word1");
});
app.listen(PORT, () => {
    console.log(`APP up at port ${PORT}`);
})