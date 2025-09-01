import React from 'react';
import './Ilayout.css'

function ArticleOption() 
{
    return (
        <div>
            <form>
                <div className = 'inline-layout'>
                    <label htmlFor = 'title'>Title</label>
                    <input type = "text" 
                           id = "title"
                           placeholder = 'Enter a descriptive title'
                    />
                </div>

                <div>
                    <label htmlFor = 'abstract'>Abstract</label>
                    <textarea id = "abstract"
                              style = {{width: '100%', height: '80px', padding: '10px', marginBottom: '20px', boxSizing: 'border-box'}}  
                              placeholder = 'Enter a 1-paragraph abstract'
                    />       
                </div>

                <div>
                    <label htmlFor = 'articleText'>Article Text</label>
                    <textarea id = "articleText"
                              style = {{width: '100%', height: '150px', padding: '10px', marginBottom: '20px', boxSizing: 'border-box'}}
                              placeholder = 'Enter a 1-paragraph abstract'
                    />
                </div>

                <div>
                    <label htmlFor = 'tags'>Tags</label>
                    <input type = "text"
                           id = "tag"
                           style = {{width: '100%', padding: '10px', marginBottom: '20px', boxSizing: 'border-box'}}
                           placeholder = 'Please add up to 3 tags to describe what your article is about e.g., Java'
                    />
                </div>
            </form>
        </div>
    )
}

export default ArticleOption;