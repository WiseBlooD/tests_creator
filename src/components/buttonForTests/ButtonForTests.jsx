import React, {useState} from 'react';
import axios from 'axios';
const ButtonForTest = ({button_text}) => {

    const [collectionName, setCollectionName] = useState('');
    const [document, setDocument] = useState('');

    const handleCreateDocument = async () => {
        try {
            await axios.post('/api/documents', { collectionName, document });
            console.log('Document created successfully');
        } catch (error) {
            console.error('Error creating document:', error);
        }
    };

    return (
        <div>
            <input type="text" value={collectionName} onChange={e => setCollectionName(e.target.value)} />
            <input type="text" value={document} onChange={e => setDocument(e.target.value)} />
            <button onClick={handleCreateDocument}>Create Document</button>
        </div>
    );
};

export default ButtonForTest;