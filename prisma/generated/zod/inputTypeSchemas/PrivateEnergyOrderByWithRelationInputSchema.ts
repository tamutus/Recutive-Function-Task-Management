import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';
import { PrivateEnergiesToProjectTemplatesOrderByRelationAggregateInputSchema } from './PrivateEnergiesToProjectTemplatesOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToTaskTemplatesOrderByRelationAggregateInputSchema } from './PrivateEnergiesToTaskTemplatesOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToSkillsOrderByRelationAggregateInputSchema } from './PrivateEnergiesToSkillsOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToTagsOrderByRelationAggregateInputSchema } from './PrivateEnergiesToTagsOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToProjectsOrderByRelationAggregateInputSchema } from './PrivateEnergiesToProjectsOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToTasksOrderByRelationAggregateInputSchema } from './PrivateEnergiesToTasksOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToTaskWorksOrderByRelationAggregateInputSchema } from './PrivateEnergiesToTaskWorksOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToPrivateTagsOrderByRelationAggregateInputSchema } from './PrivateEnergiesToPrivateTagsOrderByRelationAggregateInputSchema';

export const PrivateEnergyOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateEnergyOrderByWithRelationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  unit: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  music: z.lazy(() => SortOrderSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  projectTemplates: z.lazy(() => PrivateEnergiesToProjectTemplatesOrderByRelationAggregateInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateEnergiesToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  skills: z.lazy(() => PrivateEnergiesToSkillsOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => PrivateEnergiesToTagsOrderByRelationAggregateInputSchema).optional(),
  projects: z.lazy(() => PrivateEnergiesToProjectsOrderByRelationAggregateInputSchema).optional(),
  tasks: z.lazy(() => PrivateEnergiesToTasksOrderByRelationAggregateInputSchema).optional(),
  taskWork: z.lazy(() => PrivateEnergiesToTaskWorksOrderByRelationAggregateInputSchema).optional(),
  privateTags: z.lazy(() => PrivateEnergiesToPrivateTagsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default PrivateEnergyOrderByWithRelationInputSchema;
