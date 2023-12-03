import type { Prisma } from '@prisma/client';
import { z } from 'zod';
import { PrivateTagCreateNestedOneWithoutProjectsInputSchema } from './PrivateTagCreateNestedOneWithoutProjectsInputSchema';
import { ProjectCreateNestedOneWithoutPrivateTagsInputSchema } from './ProjectCreateNestedOneWithoutPrivateTagsInputSchema';

export const PrivateTagsToProjectsCreateInputSchema: z.ZodType<Prisma.PrivateTagsToProjectsCreateInput> = z.object({
  tag: z.lazy(() => PrivateTagCreateNestedOneWithoutProjectsInputSchema),
  project: z.lazy(() => ProjectCreateNestedOneWithoutPrivateTagsInputSchema)
}).strict();

export default PrivateTagsToProjectsCreateInputSchema;
