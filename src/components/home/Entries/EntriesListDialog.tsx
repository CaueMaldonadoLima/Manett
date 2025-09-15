'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import EntriesRow from './EntriesRow';
import type { Entry } from '@/types/entries';

type Props = {
  entries: Entry[];
  triggerLabel?: string;
  title?: string;
  description?: string;
};

export default function EntriesListDialog({
  entries,
  triggerLabel = 'Show more',
  title = 'All Entries',
  description,
}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerLabel}</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[700px] p-0">
        <div className="px-6 pt-6">
          <DialogHeader className="text-left">
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>
              {description ?? `Showing ${entries.length} items`}
            </DialogDescription>
          </DialogHeader>
        </div>
        <div className="max-h-[70vh] overflow-y-auto px-6 pb-4 space-y-4">
          {entries.map((e) => (
            <EntriesRow key={e.id} entry={e} />
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
