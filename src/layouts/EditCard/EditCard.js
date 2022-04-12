import React, { useState } from 'react';
import './styles.css';
import { Button, Textarea } from '../../components';
import { useDispatch } from 'react-redux';
import { closeEditCard, editCard } from '../../redux/slices/listSlice';

export const EditCard = ({ value, idCard, idList }) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const handleTextarea = text => {
    setText(text);
  };
  const handleSaveEditCard = () => {
    dispatch(editCard({ idCard, idList, text }));
    dispatch(closeEditCard({ idCard, idList }));
  };
  return (
    <div className="wrapper__edit-card">
      <div className="edit__card">
        <Textarea
          value={value}
          type="edit__card"
          handleTextarea={handleTextarea}
        />
      </div>
      <Button type="edit__button" handleSaveEditCard={handleSaveEditCard}>
        Save
      </Button>
    </div>
  );
};
