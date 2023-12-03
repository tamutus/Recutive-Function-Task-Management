import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { EnergiesToProjectTemplatesOrderByRelationAggregateInputSchema } from './EnergiesToProjectTemplatesOrderByRelationAggregateInputSchema';
import { EnergiesToTaskTemplatesOrderByRelationAggregateInputSchema } from './EnergiesToTaskTemplatesOrderByRelationAggregateInputSchema';
import { EnergiesToSkillsOrderByRelationAggregateInputSchema } from './EnergiesToSkillsOrderByRelationAggregateInputSchema';
import { EnergiesToTagsOrderByRelationAggregateInputSchema } from './EnergiesToTagsOrderByRelationAggregateInputSchema';
import { EnergiesToPersonsOrderByRelationAggregateInputSchema } from './EnergiesToPersonsOrderByRelationAggregateInputSchema';
import { EnergiesToProjectsOrderByRelationAggregateInputSchema } from './EnergiesToProjectsOrderByRelationAggregateInputSchema';
import { EnergiesToTasksOrderByRelationAggregateInputSchema } from './EnergiesToTasksOrderByRelationAggregateInputSchema';
import { EnergiesToTaskWorksOrderByRelationAggregateInputSchema } from './EnergiesToTaskWorksOrderByRelationAggregateInputSchema';
import { EnergiesToPrivateTagsOrderByRelationAggregateInputSchema } from './EnergiesToPrivateTagsOrderByRelationAggregateInputSchema';

export const EnergyOrderByWithRelationInputSchema: z.ZodType<Prisma.EnergyOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  unit: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  music: z.lazy(() => SortOrderSchema).optional(),
  projectTemplates: z.lazy(() => EnergiesToProjectTemplatesOrderByRelationAggregateInputSchema).optional(),
  taskTemplates: z.lazy(() => EnergiesToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  skills: z.lazy(() => EnergiesToSkillsOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => EnergiesToTagsOrderByRelationAggregateInputSchema).optional(),
  experiences: z.lazy(() => EnergiesToPersonsOrderByRelationAggregateInputSchema).optional(),
  projects: z.lazy(() => EnergiesToProjectsOrderByRelationAggregateInputSchema).optional(),
  tasks: z.lazy(() => EnergiesToTasksOrderByRelationAggregateInputSchema).optional(),
  taskWork: z.lazy(() => EnergiesToTaskWorksOrderByRelationAggregateInputSchema).optional(),
  privateTags: z.lazy(() => EnergiesToPrivateTagsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default EnergyOrderByWithRelationInputSchema;
