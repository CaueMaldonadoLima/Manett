'use client';

import * as React from 'react';
import EntriesDialog from './EntriesDialog';
import EntriesRow from './EntriesRow';
import EntriesListDialog from './EntriesListDialog';
import { MOCK_ENTRIES } from '@/mock/entries';

const PREVIEW_COUNT = 4;

export default function EntriesArea() {
  const preview = MOCK_ENTRIES.slice(0, PREVIEW_COUNT);

  return (
    <div className="flex flex-col py-5 px-8 space-y-4">
      <div className="flex items-center gap-2 space-y-0 border-b sm:flex-row">
        <div className="flex flex-row items-center justify-between w-full">
          <p className="text-xl">Entries</p>
          <div className="flex items-center gap-2">
            <EntriesDialog />
          </div>
        </div>
      </div>
        {preview.map((e) => (
          <EntriesRow key={e.id} entry={e} />
        ))}      
      <EntriesListDialog
        entries={MOCK_ENTRIES}
        triggerLabel="Show more"
        title="All Entries"
      />
    </div>
  );
}
