let colorList = ["#D6F8FF", "#FBE6EF", "#FEEAB9", "#D1F8F0", "#FDDFD8"];
const chooseColor = ()=>{
    const index = Math.floor(Math.random()*(colorList.length));
    const color = colorList[index];
    colorList.splice(index,index);
    return color;
}
const Data = [
    {
        _id:Math.random().toString(),
        title:"Hey I am new data sets",
        author:"Om Gupta",
        color:chooseColor()
    },
    {
        _id:Math.random().toString(),
        title:"Lorem Ipsum Gypsum lipsum",
        author:"Om Gupta",
        color:chooseColor()
    },
    {
        _id:Math.random().toString(),
        title:"Lorem Ipsum Gypsum lipsum",
        author:"Om Gupta",
        color:chooseColor()
    },
    {
        _id:Math.random().toString(),
        title:"Lorem Ipsum Gypsum lipsum",
        author:"Om Gupta",
        color:chooseColor()
    },
    {
        _id:Math.random().toString(),
        title:"Lorem Ipsum Gypsum lipsum",
        author:"Om Gupta",
        color:chooseColor()
    },
];

export default Data;