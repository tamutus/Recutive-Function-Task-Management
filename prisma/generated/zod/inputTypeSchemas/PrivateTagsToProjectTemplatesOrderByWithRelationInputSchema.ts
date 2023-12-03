import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectTemplateOrderByWithRelationInputSchema } from './ProjectTemplateOrderByWithRelationInputSchema';
import { PrivateTagOrderByWithRelationInputSchema } from './PrivateTagOrderByWithRelationInputSchema';

export const PrivateTagsToProjectTemplatesOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateTagsToProjectTemplatesOrderByWithRelationInput> = z.object({
  projectId: z.lazy(() => SortOrderSchema).optional(),
  privateTagId: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => ProjectTemplateOrderByWithRelationInputSchema).optional(),
  privateTag: z.lazy(() => PrivateTagOrderByWithRelationInputSchema).optional()
}).strict();

export default PrivateTagsToProjectTemplatesOrderByWithRelationInputSchema;
