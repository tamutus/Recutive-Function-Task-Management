import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskCreatelinksInputSchema } from './TaskCreatelinksInputSchema';
import { TaskLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema } from './TaskLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema';
import { ProjectsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema } from './ProjectsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema';
import { TaskWorkUncheckedCreateNestedManyWithoutTaskInputSchema } from './TaskWorkUncheckedCreateNestedManyWithoutTaskInputSchema';
import { SkillsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema } from './SkillsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema';
import { PrioritiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema } from './PrioritiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema';
import { TagsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema } from './TagsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema';
import { PrivateTagsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema } from './PrivateTagsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema';
import { EnergiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema } from './EnergiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema';
import { PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema } from './PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema';

export const TaskUncheckedCreateWithoutPrecursorsInputSchema: z.ZodType<Prisma.TaskUncheckedCreateWithoutPrecursorsInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => TaskCreatelinksInputSchema),z.string().array() ]).optional(),
  templateId: z.number().int().optional().nullable(),
  personId: z.number().int().optional().nullable(),
  public: z.boolean().optional(),
  publicAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  startAt: z.coerce.date().optional().nullable(),
  startedAt: z.coerce.date().optional().nullable(),
  dueAt: z.coerce.date().optional().nullable(),
  endedAt: z.coerce.date().optional().nullable(),
  successors: z.lazy(() => TaskLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema).optional(),
  projects: z.lazy(() => ProjectsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  work: z.lazy(() => TaskWorkUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  skills: z.lazy(() => SkillsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  tags: z.lazy(() => TagsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToTasksUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTasksUncheckedCreateNestedManyWithoutTaskInputSchema).optional()
}).strict();

export default TaskUncheckedCreateWithoutPrecursorsInputSchema;
