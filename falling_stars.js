function stars(x)
{
    let s = '';
    for(let i = 0; i <= x; i++)
    {
        s += '**';
        console.log(s);
    }
}

stars(4);
