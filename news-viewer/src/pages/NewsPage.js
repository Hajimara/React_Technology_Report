import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {

    const category = match.params.category || 'all';

    return (
        <>
            <Categories></Categories>
            <NewsList category={category}></NewsList>
        </>
    )
}

export default NewsPage;