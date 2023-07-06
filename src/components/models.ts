// Deletar Depois
export interface Todo {
  id: number;
  content: string;
}

export interface Meta {
  totalCount: number;
}

export interface SelectOption {
  label: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any;
  disabled: boolean;
  description: string | null;
  category: string | null;
}

export interface User {
  _id: string | null;
  username: string;
  fullName: string;
  isEnabled: boolean;
  isAdmin: boolean;
  isProfessor: boolean;
}

export interface Teacher {
  _id: string | undefined;
  name: string;
  description: string;
  _img: string;
}

export interface Activity {
  _id: string | undefined;
  name: string;
  description: string;
  obsv: string;
  _img: string;
  valor: number;
  isGratuita: boolean;
  hasTema: boolean;
  hasProgram: boolean;
}

export interface ScheduleEvent {
  _id: string | undefined;
  atividade: Activity;
  professor: Teacher;
  tema: string;
  prgm: string;
  date: Date;
  tipoAtv: string;
  ytLink: string;
  destaque: boolean;
}
// Deletar Depois
