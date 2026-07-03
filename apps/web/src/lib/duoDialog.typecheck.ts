import {
  DUO_DIALOG_AVATAR_IDS,
  formatDuoDialogScript,
  isDuoDialogAvatar,
  nextDuoDialogRole,
  type DuoDialogLine,
} from "./duoDialog";

const firstRole: "female" = nextDuoDialogRole([]);
const secondRole: "male" = nextDuoDialogRole([{ id: "1", role: "female", text: "hello" }]);
const thirdRole: "female" = nextDuoDialogRole([
  { id: "1", role: "female", text: "hello" },
  { id: "2", role: "male", text: "hi" },
]);

const line: DuoDialogLine = { id: "line-1", role: "male", text: "ok" };
const knownAvatar: boolean = isDuoDialogAvatar(DUO_DIALOG_AVATAR_IDS[0]);
const unknownAvatar: false = isDuoDialogAvatar("anchor");
const formattedScript: string = formatDuoDialogScript([line]);

void firstRole;
void secondRole;
void thirdRole;
void line;
void knownAvatar;
void unknownAvatar;
void formattedScript;
