import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { PrivateTagOrderByWithRelationInputSchema } from './PrivateTagOrderByWithRelationInputSchema';
import { ProjectOrderByWithRelationInputSchema } from './ProjectOrderByWithRelationInputSchema';

export const PrivateTagsToProjectsOrderByWithRelationInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsOrderByWithRelationInput> = z.object({
  tagId: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  tag: z.lazy(() => PrivateTagOrderByWithRelationInputSchema).optional(),
  project: z.lazy(() => ProjectOrderByWithRelationInputSchema).optional()
}).strict();

export default PrivateTagsToProjectsOrderByWithRelationInputSchema;
