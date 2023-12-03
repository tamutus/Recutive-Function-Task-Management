import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { PersonsToProjectTemplatesOrderByRelationAggregateInputSchema } from './PersonsToProjectTemplatesOrderByRelationAggregateInputSchema';
import { EnergiesToProjectTemplatesOrderByRelationAggregateInputSchema } from './EnergiesToProjectTemplatesOrderByRelationAggregateInputSchema';
import { ProjectTemplatesToTagsOrderByRelationAggregateInputSchema } from './ProjectTemplatesToTagsOrderByRelationAggregateInputSchema';
import { PrivateEnergiesToProjectTemplatesOrderByRelationAggregateInputSchema } from './PrivateEnergiesToProjectTemplatesOrderByRelationAggregateInputSchema';
import { PrivateTagsToProjectTemplatesOrderByRelationAggregateInputSchema } from './PrivateTagsToProjectTemplatesOrderByRelationAggregateInputSchema';
import { ProjectTemplatesToTaskTemplatesOrderByRelationAggregateInputSchema } from './ProjectTemplatesToTaskTemplatesOrderByRelationAggregateInputSchema';
import { ProjectOrderByRelationAggregateInputSchema } from './ProjectOrderByRelationAggregateInputSchema';

export const ProjectTemplateOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectTemplateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  info: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  completionRequirements: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  image: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  color: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  links: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  collaborators: z.lazy(() => PersonsToProjectTemplatesOrderByRelationAggregateInputSchema).optional(),
  energies: z.lazy(() => EnergiesToProjectTemplatesOrderByRelationAggregateInputSchema).optional(),
  tags: z.lazy(() => ProjectTemplatesToTagsOrderByRelationAggregateInputSchema).optional(),
  privateEnergies: z.lazy(() => PrivateEnergiesToProjectTemplatesOrderByRelationAggregateInputSchema).optional(),
  privateTags: z.lazy(() => PrivateTagsToProjectTemplatesOrderByRelationAggregateInputSchema).optional(),
  tasks: z.lazy(() => ProjectTemplatesToTaskTemplatesOrderByRelationAggregateInputSchema).optional(),
  implementations: z.lazy(() => ProjectOrderByRelationAggregateInputSchema).optional()
}).strict();

export default ProjectTemplateOrderByWithRelationInputSchema;
