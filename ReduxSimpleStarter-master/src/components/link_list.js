import React from 'react';
import UrlListItem from './url_list_item';

const LinkList = props => {
  const urlListItem = props.urls.map(urlInfo => {
    return (
      <UrlListItem
        site_name={urlInfo.site_name}
        key={urlInfo.site_name}
        url={urlInfo.url}
        onSiteSelect={props.onSiteSelect}
      />
    );
  });

  return <div>{urlListItem}</div>;
};

export default LinkList;
