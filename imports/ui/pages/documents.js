import React from 'react';
import DocumentsList from '../containers/documents-list.js';
import { AddDocument } from '../components/add-document.js';

export const Documents = () => (
    <div>
      <h4>Documents</h4>
      <AddDocument />
      <DocumentsList />
    </div>
);
