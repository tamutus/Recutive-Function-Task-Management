import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreatelinksInputSchema } from './TaskCreatelinksInputSchema';
import { TaskTemplateCreateNestedOneWithoutImplementationsInputSchema } from './TaskTemplateCreateNestedOneWithoutImplementationsInputSchema';
import { TaskLinkCreateNestedManyWithoutPrecursorInputSchema } from './TaskLinkCreateNestedManyWithoutPrecursorInputSchema';
import { TaskLinkCreateNestedManyWithoutSuccessorInputSchema } from './TaskLinkCreateNestedManyWithoutSuccessorInputSchema';
import { ProjectsToTasksCreateNestedManyWithoutTaskInputSchema } from './ProjectsToTasksCreateNestedManyWithoutTaskInputSchema';
import { TaskWorkCreateNestedManyWithoutTaskInputSchema } from './TaskWorkCreateNestedManyWithoutTaskInputSchema';
import { SkillsToTasksCreateNestedManyWithoutTaskInputSchema } from './SkillsToTasksCreateNestedManyWithoutTaskInputSchema';
import { PrioritiesToTasksCreateNestedManyWithoutTaskInputSchema } from './PrioritiesToTasksCreateNestedManyWithoutTaskInputSchema';
import { TagsToTasksCreateNestedManyWithoutTaskInputSchema } from './TagsToTasksCreateNestedManyWithoutTaskInputSchema';
import { PrivateTagsToTasksCreateNestedManyWithoutTaskInputSchema } from './PrivateTagsToTasksCreateNestedManyWithoutTaskInputSchema';
import { PrivateEnergiesToTasksCreateNestedManyWithoutTaskInputSchema } from './PrivateEnergiesToTasksCreateNestedManyWithoutTaskInputSchema';
import { PersonCreateNestedOneWithoutTasksInputSchema } from './PersonCreateNestedOneWithoutTasksInputSchema';

export const TaskCreateWithoutEnergiesInputSchema: z.ZodType<Prisma.TaskCreateWithoutEnergiesInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => TaskCreatelinksInputSchema),z.string().array() ]).optional(),
  public: z.boolean().optional(),
  publicAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  startAt: z.coerce.date().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  dueAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  template: z.lazy(() => TaskTemplateCreateNestedOneWithoutImplementationsInputSchema).optional(),
  precursors: z.lazy(() => TaskLinkCreateNestedManyWithoutPrecursorInputSchema).optional(),
  successors: z.lazy(() => TaskLinkCreateNestedManyWithoutSuccessorInputSchema).optional(),
  projects: z.lazy(() => ProjectsToTasksCreateNestedManyWithoutTaskInputSchema).optional(),
  work: z.lazy(() => TaskWorkCreateNestedManyWithoutTaskInputSchema).optional(),
  skills: z.lazy(() => SkillsToTasksCreateNestedManyWithoutTaskInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTasksCreateNestedManyWithoutTaskInputSchema).optional(),
  tags: z.lazy(() => TagsToTasksCreateNestedManyWithoutTaskInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToTasksCreateNestedManyWithoutTaskInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTasksCreateNestedManyWithoutTaskInputSchema).optional(),
  person: z.lazy(() => PersonCreateNestedOneWithoutTasksInputSchema).optional()
}).strict();

export default TaskCreateWithoutEnergiesInputSchema;
