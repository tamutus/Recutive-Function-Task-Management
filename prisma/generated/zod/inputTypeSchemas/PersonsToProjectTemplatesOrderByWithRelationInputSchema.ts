import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PersonOrderByWithRelationInputSchema } from './PersonOrderByWithRelationInputSchema';
import { ProjectTemplateOrderByWithRelationInputSchema } from './ProjectTemplateOrderByWithRelationInputSchema';

export const PersonsToProjectTemplatesOrderByWithRelationInputSchema: z.ZodType<Prisma.PersonsToProjectTemplatesOrderByWithRelationInput> = z.object({
  personId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  person: z.lazy(() => PersonOrderByWithRelationInputSchema).optional(),
  project: z.lazy(() => ProjectTemplateOrderByWithRelationInputSchema).optional()
}).strict();

export default PersonsToProjectTemplatesOrderByWithRelationInputSchema;
