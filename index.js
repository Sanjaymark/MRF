const apiUrl = "https://gitlab.com/gvanderput/gerard-movie-filtering/-/raw/master/data/movies.json";

async function fetchdata(api,cb)
{
    const response = await fetch(api);
    const data = await response.json();
    cb(data);
}

function displaydata(data)
{
    console.log(data);

    const withoutDes = data.map((val,ind,array)=>{
        obj = {...val}
        delete obj["description"];
        return obj;
    })

    console.log(withoutDes);

    const released2020 = withoutDes.filter((e)=> e.year == 2020)

    console.log(released2020);

    // const votes = withoutDes.reduce((acc,val)=>{
    //     return(acc + val.votes)
    // },0);

    // console.log(votes);

    const highestVotes = withoutDes.reduce((acc,val,ind)=>{
        if(val.votes > acc.votes)
        {
            return val;
        }
        else
        {
            return acc
        }

        
    }, withoutDes[0])

    console.log(highestVotes)

    const lowestVotes = data.reduce((acc, val)=>{
        if(val.votes < acc.votes)
        {
            return val;
        }
        else
        {
            return acc
        }

    }, data[0]);

    console.log(lowestVotes);

    const votes2 = data.map((val)=>{
        return val.votes * 2;
    });

    console.log(votes2)
}

const data = fetchdata(apiUrl, displaydata);