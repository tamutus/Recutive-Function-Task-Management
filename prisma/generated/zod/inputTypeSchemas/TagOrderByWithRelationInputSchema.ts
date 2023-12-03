import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectTemplatesToTagsOrderByRelationAggregateInputSchema } from './ProjectTemplatesToTagsOrderByRelationAggregateInputSchema';
import { TagsToTaskTemplatesOrderByRelationAggregateInputSchema } from './TagsToTaskTemplatesOrderByRelationAggregateInputSchema';
import { PrioritiesToTagsOrderByRelationAggregateInputSchema } from './PrioritiesToTagsOrderByRelationAggregateInputSchema';
import { EnergiesToTagsOrderByRelationAggregateInputSchema } from './EnergiesToTagsOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToTagsOrderByRelationAggregateInputSchema } from './PrivateEnergiesToTagsOrderByRelationAggregateInputSchema';
import { SkillsToTagsOrderByRelationAggregateInputSchema } from './SkillsToTagsOrderByRelationAggregateInputSchema';
import { SkillPathsToTagsOrderByRelationAggregateInputSchema } from './SkillPathsToTagsOrderByRelationAggregateInputSchema';
import { PersonsToTagsOrderByRelationAggregateInputSchema } from './PersonsToTagsOrderByRelationAggregateInputSchema';
import { ProjectsToTagsOrderByRelationAggregateInputSchema } from './ProjectsToTagsOrderByRelationAggregateInputSchema';
import { TagsToTasksOrderByRelationAggregateInputSchema } from './TagsToTasksOrderByRelationAggregateInputSchema';

export const TagOrderByWithRelationInputSchema: z.ZodType<Prisma.TagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nsfw: z.lazy(() => SortOrderSchema).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectTemplates: z.lazy(() => ProjectTemplatesToTagsOrderByRelationAggregateInputSchema).optional(),
  taskTemplates: z.lazy(() => TagsToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToTagsOrderByRelationAggregateInputSchema).optional(),
  energies: z.lazy(() => EnergiesToTagsOrderByRelationAggregateInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToTagsOrderByRelationAggregateInputSchema).optional(),
  skills: z.lazy(() => SkillsToTagsOrderByRelationAggregateInputSchema).optional(),
  paths: z.lazy(() => SkillPathsToTagsOrderByRelationAggregateInputSchema).optional(),
  followers: z.lazy(() => PersonsToTagsOrderByRelationAggregateInputSchema).optional(),
  projects: z.lazy(() => ProjectsToTagsOrderByRelationAggregateInputSchema).optional(),
  tasks: z.lazy(() => TagsToTasksOrderByRelationAggregateInputSchema).optional()
}).strict();

export default TagOrderByWithRelationInputSchema;
