import { NoteData, Tag } from "../App";
import { NoteForm } from "../components/NoteForm";
import { useNote } from "./NoteLayout";

type EditTypeProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

const EditNote = ({ onSubmit, onAddTag, availableTags }: EditTypeProps) => {
  const note = useNote();
  return (
    <>
      <h1 className="mb-4">Edit note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  );
};

export default EditNote;
