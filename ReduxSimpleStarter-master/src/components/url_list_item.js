import React, {Component} from 'react';

const UrlListItem = ({site_name, url, onSiteSelect}) => {
  return <li onClick={() => onSiteSelect(url)}>{site_name}</li>;
};

export default UrlListItem;
