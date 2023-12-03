import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';
import { PrivateTagsToProjectTemplatesOrderByRelationAggregateInputSchema } from './PrivateTagsToProjectTemplatesOrderByRelationAggregateInputSchema';
import { PrivateTagsToProjectsOrderByRelationAggregateInputSchema } from './PrivateTagsToProjectsOrderByRelationAggregateInputSchema';
import { PrivateTagsToTaskTemplatesOrderByRelationAggregateInputSchema } from './PrivateTagsToTaskTemplatesOrderByRelationAggregateInputSchema';
import { PrivateTagsToTasksOrderByRelationAggregateInputSchema } from './PrivateTagsToTasksOrderByRelationAggregateInputSchema';
import { PrioritiesToPrivateTagsOrderByRelationAggregateInputSchema } from './PrioritiesToPrivateTagsOrderByRelationAggregateInputSchema';
import { EnergiesToPrivateTagsOrderByRelationAggregateInputSchema } from './EnergiesToPrivateTagsOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToPrivateTagsOrderByRelationAggregateInputSchema } from './PrivateEnergiesToPrivateTagsOrderByRelationAggregateInputSchema';

export const PrivateTagOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateTagOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  nsfw: z.lazy(() => SortOrderSchema).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  personId: z.lazy(() => SortOrderSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  projectTemplates: z.lazy(() => PrivateTagsToProjectTemplatesOrderByRelationAggregateInputSchema).optional(),
  projects: z.lazy(() => PrivateTagsToProjectsOrderByRelationAggregateInputSchema).optional(),
  taskTemplates: z.lazy(() => PrivateTagsToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  tasks: z.lazy(() => PrivateTagsToTasksOrderByRelationAggregateInputSchema).optional(),
  priorities: z.lazy(() => PrioritiesToPrivateTagsOrderByRelationAggregateInputSchema).optional(),
  energies: z.lazy(() => EnergiesToPrivateTagsOrderByRelationAggregateInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToPrivateTagsOrderByRelationAggregateInputSchema).optional()
}).strict();

export default PrivateTagOrderByWithRelationInputSchema;
