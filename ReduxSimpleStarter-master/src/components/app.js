import _ from 'lodash';
import React, {Component} from 'react';
import SearchBar from './search_bar';
import LinkList from './link_list';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      urls: [],
    };
  }

  keywordSearch(term) {
    this.setState({
      urls: [
        {
          site_name: 'naver',
          url:
            'https://search.naver.com/search.naver?query=' +
            term +
            '&where=m&amp;sm=mtp_hty',
        },
        {
          site_name: 'google',
          url: 'https://www.google.com/search?q=' + term,
        },
        {
          site_name: 'daum',
          url:
            'https://search.daum.net/search?w=tot&nil_mtopsearch=btn&DA=YZR&q=' +
            term,
        },
        {
          site_name: 'bing',
          url: 'https://www.bing.com/search?q=' + term,
        },
        {
          site_name: 'duckduckgo',
          url: 'https://duckduckgo.com/?q=' + term + '&t=h_&ia=web',
        },
      ],
    });
  }

  onSiteSelect(url) {
    window.open(url, '_blank');
  }

  render() {
    const keywordSearch = _.debounce(term => {
      this.keywordSearch(term);
    }, 300);

    return (
      <div>
        <div>
          <h2>검색을 쉽게하자</h2>
        </div>
        <SearchBar onSearchTermChange={keywordSearch} />
        <LinkList
          urls={this.state.urls}
          onSiteSelect={url => this.onSiteSelect(url)}
        />
      </div>
    );
  }
}
