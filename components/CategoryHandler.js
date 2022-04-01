import { Typography } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { getCategory } from './api/apiUsage';
import useStyle from './styles/singlePostPageStyle';
export default function CategoryHandler({ categoryId }) {
    const classes = useStyle();
    const [category, setCategory] = useState([]);

    useEffect(() => {
        getCategory((isOk, data) => {
            if (!isOk)
                return data.errors.map((item) => toast.error(item.message))
            else return setCategory(data)
        });
    }, []);
    return (
        <>
            {category.map((item) => item.id === categoryId && <Typography className={classes.category}>{item.categoryName}</Typography>)}
        </>
    )
}
