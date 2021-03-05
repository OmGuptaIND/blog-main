let colorList = ["#D6F8FF", "#FBE6EF", "#FEEAB9", "#D1F8F0", "#FDDFD8"];
const chooseColor = ()=>{
    const index = Math.floor(Math.random()*(colorList.length));
    const color = colorList[index];
    colorList.splice(index,index);
    console.log(colorList);
    return color;
}

const Data = [
    {
        _id: Math.random().toString(),
        imgURL:"images/two.jpeg",
        title:"Finance",
        color: chooseColor(),
    },
    {
        _id: Math.random().toString(),
        imgURL:"images/four.jpeg",
        title:"Politics",
        color: chooseColor(),
    },
    {
        _id: Math.random().toString(),
        imgURL:"images/one.jpeg",
        title:"Crypto",
        color: chooseColor(),
    },
    {
        _id: Math.random().toString(),
        imgURL:"images/three.jpeg",
        title:"Creativity",
        color: chooseColor(),
    },
];

export default Data;