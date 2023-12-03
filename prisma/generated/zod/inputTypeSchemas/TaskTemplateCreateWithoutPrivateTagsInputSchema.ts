import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { TaskTemplateCreatelinksInputSchema } from './TaskTemplateCreatelinksInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValue } from './InputJsonValue';
import { ProjectTemplatesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema } from './ProjectTemplatesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema';
import { TaskTemplateLinkCreateNestedManyWithoutPrecursorInputSchema } from './TaskTemplateLinkCreateNestedManyWithoutPrecursorInputSchema';
import { TaskTemplateLinkCreateNestedManyWithoutSuccessorInputSchema } from './TaskTemplateLinkCreateNestedManyWithoutSuccessorInputSchema';
import { SkillsToTaskTemplatesCreateNestedManyWithoutTaskInputSchema } from './SkillsToTaskTemplatesCreateNestedManyWithoutTaskInputSchema';
import { TagsToTaskTemplatesCreateNestedManyWithoutTaskInputSchema } from './TagsToTaskTemplatesCreateNestedManyWithoutTaskInputSchema';
import { EnergiesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema } from './EnergiesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema';
import { PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema } from './PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema';
import { PersonsToTaskTemplatesCreateNestedManyWithoutTaskInputSchema } from './PersonsToTaskTemplatesCreateNestedManyWithoutTaskInputSchema';
import { TaskCreateNestedManyWithoutTemplateInputSchema } from './TaskCreateNestedManyWithoutTemplateInputSchema';

export const TaskTemplateCreateWithoutPrivateTagsInputSchema: z.ZodType<Prisma.TaskTemplateCreateWithoutPrivateTagsInput> = z.object({
  name: z.string(),
  info: z.string().optional().nullable(),
  completionRequirements: z.string().optional().nullable(),
  color: z.string().optional().nullable(),
  links: z.union([ z.lazy(() => TaskTemplateCreatelinksInputSchema),z.string().array() ]).optional(),
  schedule: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValue ]),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  projects: z.lazy(() => ProjectTemplatesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema).optional(),
  precursors: z.lazy(() => TaskTemplateLinkCreateNestedManyWithoutPrecursorInputSchema).optional(),
  successors: z.lazy(() => TaskTemplateLinkCreateNestedManyWithoutSuccessorInputSchema).optional(),
  skills: z.lazy(() => SkillsToTaskTemplatesCreateNestedManyWithoutTaskInputSchema).optional(),
  tags: z.lazy(() => TagsToTaskTemplatesCreateNestedManyWithoutTaskInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTaskTemplatesCreateNestedManyWithoutTaskInputSchema).optional(),
  collaborators: z.lazy(() => PersonsToTaskTemplatesCreateNestedManyWithoutTaskInputSchema).optional(),
  implementations: z.lazy(() => TaskCreateNestedManyWithoutTemplateInputSchema).optional()
}).strict();

export default TaskTemplateCreateWithoutPrivateTagsInputSchema;
