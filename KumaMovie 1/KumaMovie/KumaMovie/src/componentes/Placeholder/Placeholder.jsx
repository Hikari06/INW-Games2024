import React, { useState } from 'react';
import articles from '..//..//../articles.json';


const Placeholder = () => {
  const [query, setQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setQuery(value);
    
    // Show suggestions only if there's a query
    if (value.trim() !== '') {
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  };

  const filteredArticles = articles.filter(article => {
    const title = article.title || '';
    const content = article.content || '';
    
    // Make suggestions more precise with each letter
    const queryLower = query.toLowerCase();
    return (
      title.toLowerCase().startsWith(queryLower) ||
      content.toLowerCase().startsWith(queryLower)
    );
  });

  return (
    <div>
      <input 
        type="text" 
        placeholder="Search articles..." 
        value={query}
        onChange={handleInputChange}
        className='rounded-3xl text-primary-ocre h-10 mt-5 ml-10 mr-10'
      />
      {showSuggestions && (
        <div className="suggestions-dropdown">
          {filteredArticles.length > 0 ? (
            filteredArticles.map(article => (
              <div key={article.id} className="suggestion-item">
                <h2>{article.title}</h2>
              </div>
            ))
          ) : (
            <div className="suggestion-item">
              <p>No articles found.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Placeholder;