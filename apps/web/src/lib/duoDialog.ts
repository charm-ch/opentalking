export const DUO_DIALOG_AVATAR_IDS = [
  "custom-\u89c6\u9891\u521b\u4f5c-\u751f\u6210\u53cc\u4eba\u7728\u773c\u89c6\u9891-1-20260703-155817-381",
  "custom-\u89c6\u9891\u521b\u4f5c-\u751f\u6210\u53cc\u4eba\u7728\u773c\u89c6\u9891-20260703-155851-393",
] as const;

export type DuoDialogAvatarId = (typeof DUO_DIALOG_AVATAR_IDS)[number];
export type DuoDialogRole = "male" | "female";

export type DuoDialogLine = {
  id: string;
  role: DuoDialogRole;
  text: string;
};

type NextDuoDialogRole<T extends readonly DuoDialogLine[]> = T extends readonly []
  ? "female"
  : T extends readonly [...DuoDialogLine[], infer Last]
    ? Last extends { role: "female" }
      ? "male"
      : Last extends { role: "male" }
        ? "female"
        : DuoDialogRole
    : DuoDialogRole;

export function isDuoDialogAvatar<T extends string | null | undefined>(avatarId: T): T extends DuoDialogAvatarId ? true : false {
  return (typeof avatarId === "string" && (DUO_DIALOG_AVATAR_IDS as readonly string[]).includes(avatarId)) as T extends DuoDialogAvatarId ? true : false;
}

export function nextDuoDialogRole<const T extends readonly DuoDialogLine[]>(lines: T): NextDuoDialogRole<T> {
  const previous = lines.length > 0 ? lines[lines.length - 1]?.role : undefined;
  return (previous === "female" ? "male" : "female") as NextDuoDialogRole<T>;
}

export function formatDuoDialogScript(lines: readonly DuoDialogLine[]): string {
  return lines
    .map((line) => {
      const text = line.text.trim();
      if (!text) return "";
      return `${line.role === "male" ? "\u7537" : "\u5973"}\uFF1A${text}`;
    })
    .filter(Boolean)
    .join("\n");
}
