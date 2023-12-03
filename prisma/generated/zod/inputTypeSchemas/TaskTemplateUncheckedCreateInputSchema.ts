import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreatelinksInputSchema } from './TaskTemplateCreatelinksInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema';
import { TaskTemplateLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema } from './TaskTemplateLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema';
import { TaskTemplateLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema } from './TaskTemplateLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema';
import { SkillsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema } from './SkillsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema';
import { TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema } from './TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema';
import { PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema } from './PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema } from './EnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema';
import { PersonsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema } from './PersonsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema';
import { TaskUncheckedCreateNestedManyWithoutTemplateInputSchema } from './TaskUncheckedCreateNestedManyWithoutTemplateInputSchema';

export const TaskTemplateUncheckedCreateInputSchema: z.ZodType<Prisma.TaskTemplateUncheckedCreateInput> = z.object({
  id: z.number().int().optional(),
  name: z.string(),
  info: z.string().optional().nullable(),
  completionRequirements: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => TaskTemplateCreatelinksInputSchema),z.string().array() ]).optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  projects: z.lazy(() => ProjectTemplatesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  precursors: z.lazy(() => TaskTemplateLinkUncheckedCreateNestedManyWithoutPrecursorInputSchema).optional(),
  successors: z.lazy(() => TaskTemplateLinkUncheckedCreateNestedManyWithoutSuccessorInputSchema).optional(),
  skills: z.lazy(() => SkillsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  tags: z.lazy(() => TagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  collaborators: z.lazy(() => PersonsToTaskTemplatesUncheckedCreateNestedManyWithoutTaskInputSchema).optional(),
  implementations: z.lazy(() => TaskUncheckedCreateNestedManyWithoutTemplateInputSchema).optional()
}).strict();

export default TaskTemplateUncheckedCreateInputSchema;
