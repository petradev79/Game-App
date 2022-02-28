import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageType from '../types/image';
import './Autocomplete.css';

const Autocomplete: React.FC<{ suggestions: ImageType[] }> = ({
  suggestions,
}) => {
  const navigate = useNavigate();
  const [filteredSuggestions, setFilteredSuggestions] = useState<ImageType[]>(
    []
  );
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState('');

  const onChange = (e: { target: { value: string } }) => {
    const userInput = e.target.value;

    // Filter our suggestions that don't contain the user's input
    const unLinked = suggestions.filter(
      (suggestion) =>
        suggestion.title.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setInput(e.target.value);
    setFilteredSuggestions(unLinked);
    setActiveSuggestionIndex(0);
    setShowSuggestions(true);
  };

  const choseGameHandler = (id: number) => {
    navigate(`/game/:${id}`);
    setFilteredSuggestions([]);
    setInput('');
    setActiveSuggestionIndex(0);
    setShowSuggestions(false);
  };

  const onKeyDown = (e: { keyCode: number }) => {
    // User pressed the enter key
    if (e.keyCode === 13) {
      setInput(filteredSuggestions[activeSuggestionIndex].title);
      setActiveSuggestionIndex(0);
      setShowSuggestions(false);
    }
    // User pressed the up arrow
    else if (e.keyCode === 38) {
      if (activeSuggestionIndex === 0) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex - 1);
    }
    // User pressed the down arrow
    else if (e.keyCode === 40) {
      if (activeSuggestionIndex - 1 === filteredSuggestions.length) {
        return;
      }

      setActiveSuggestionIndex(activeSuggestionIndex + 1);
    }
  };

  const SuggestionsListComponent = () => {
    return filteredSuggestions.length ? (
      <ul className='suggestions'>
        {filteredSuggestions.map((suggestion, index) => {
          let className;

          // Flag the active suggestion with a class
          if (index === activeSuggestionIndex) {
            className = 'suggestion-active';
          }

          return (
            <li
              className={className}
              key={suggestion.id}
              onClick={() => choseGameHandler(suggestion.id)}
            >
              {suggestion.title}
            </li>
          );
        })}
      </ul>
    ) : (
      <div className='no-suggestions'>
        <span role='img' aria-label='tear emoji'>
          😪
        </span>{' '}
        <span>sorry no suggestions</span>
      </div>
    );
  };

  return (
    <div className='autocomplete'>
      <input
        type='text'
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={input}
        placeholder='Find game'
        className={
          filteredSuggestions.length && input
            ? 'has-suggestions autocomplete__input'
            : 'autocomplete__input'
        }
      />
      {showSuggestions && input && <SuggestionsListComponent />}
    </div>
  );
};

export default Autocomplete;
