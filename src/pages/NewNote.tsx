import { NoteData, Tag } from "../App";
import { NoteForm } from "../components/NoteForm";

type NewTypeProps = {
  onSubmit: (data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const NewNote = ({ onSubmit, onAddTag, availableTags }: NewTypeProps) => {
  return (
    <>
      <h1 className="mb-4">New note</h1>
      <NoteForm
        onSubmit={onSubmit}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default NewNote;
