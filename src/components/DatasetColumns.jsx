import React, { useMemo, useState, useEffect } from 'react';

const columns = useMemo(() => {
  [
    {
      Header: 'Created',
      accessor: 'data.created',
    },
    {
      Header: 'Name',
      accessor: 'data.name',
    },
    {
      Header: 'Description',
      accessor: 'data.description',
    },
    {
      Header: 'Files',
      accessor: 'data.files',
    },
    {
      Header: 'ID',
      accessor: 'data.id',
    },
    {
      Header: 'Last Used',
      accessor: 'data.last_used',
    },
    {
      Header: 'Size',
      accessor: 'data.size',
    },
    {
      Header: 'Tags',
      accessor: 'data.tags',
    },
    {
      Header: 'Type',
      accessor: 'data.type',
    },
  ],
    [];
});
