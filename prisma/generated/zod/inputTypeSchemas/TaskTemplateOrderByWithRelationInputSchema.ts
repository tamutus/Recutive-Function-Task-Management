import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectTemplatesToTaskTemplatesOrderByRelationAggregateInputSchema } from './ProjectTemplatesToTaskTemplatesOrderByRelationAggregateInputSchema';
import { TaskTemplateLinkOrderByRelationAggregateInputSchema } from './TaskTemplateLinkOrderByRelationAggregateInputSchema';
import { SkillsToTaskTemplatesOrderByRelationAggregateInputSchema } from './SkillsToTaskTemplatesOrderByRelationAggregateInputSchema';
import { TagsToTaskTemplatesOrderByRelationAggregateInputSchema } from './TagsToTaskTemplatesOrderByRelationAggregateInputSchema';
import { PrivateTagsToTaskTemplatesOrderByRelationAggregateInputSchema } from './PrivateTagsToTaskTemplatesOrderByRelationAggregateInputSchema';
import { EnergiesToTaskTemplatesOrderByRelationAggregateInputSchema } from './EnergiesToTaskTemplatesOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToTaskTemplatesOrderByRelationAggregateInputSchema } from './PrivateEnergiesToTaskTemplatesOrderByRelationAggregateInputSchema';
import { PersonsToTaskTemplatesOrderByRelationAggregateInputSchema } from './PersonsToTaskTemplatesOrderByRelationAggregateInputSchema';
import { TaskOrderByRelationAggregateInputSchema } from './TaskOrderByRelationAggregateInputSchema';

export const TaskTemplateOrderByWithRelationInputSchema: z.ZodType<Prisma.TaskTemplateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completionRequirements: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  schedule: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  projects: z.lazy(() => ProjectTemplatesToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  precursors: z.lazy(() => TaskTemplateLinkOrderByRelationAggregateInputSchema).optional(),
  successors: z.lazy(() => TaskTemplateLinkOrderByRelationAggregateInputSchema).optional(),
  skills: z.lazy(() => SkillsToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => TagsToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  collaborators: z.lazy(() => PersonsToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  implementations: z.lazy(() => TaskOrderByRelationAggregateInputSchema).optional()
}).strict();

export default TaskTemplateOrderByWithRelationInputSchema;
